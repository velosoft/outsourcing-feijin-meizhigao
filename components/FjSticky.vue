<template>
  <view class="stickyComp" :id="elId" :style="[style]">
    <view :id="stickyContentId" :style="[stickyContent]" class="sticky-content">
      <slot />
    </view>
  </view>
</template>

<script>
  export default {
    name: "stickyComp",
    // #ifdef MP-WEIXIN
    // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
    options: {
      virtualHost: true
    },
    // #endif
    props: {
      offsetTop: {
        type: [Number, String],
        default: 0
      },
      // 自定义导航栏的高度
      customNavHeight: {
        type: [String, Number],
        // #ifdef H5
        // H5端的导航栏属于“自定义”导航栏的范畴，因为它是非原生的，与普通元素一致
        default: 44,
        // #endif
        // #ifndef H5
        default: 0
        // #endif
      },
      // 是否禁用吸顶功能
      disabled: {
        type: Boolean,
        default: false
      },
      // 吸顶区域的背景颜色
      bgColor: {
        type: String,
        default: 'transparent'
      },
      zIndex: {
        type: [Number, String],
        default: 999
      },
      index: {
        type: [Number, String],
        default: ''
      },
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: Object,
        default: () => ({})
      },
    },
    data() {
      return {
        cssSticky: true, // 是否使用css的sticky实现
        elId: this.guid(),
        left: 0, // js模式时，吸顶的内容因为处于postition: fixed模式，为了和原来保持一致的样式，需要记录并重新设置它的left，height，width属性
        width: 'auto',
        height: 'auto',
        fixed: false, // js模式时，是否处于吸顶模式
        platform: uni.getSystemInfoSync().platform.toLowerCase()
      };
    },
    computed: {
      style() {
        const style = {}
        if (!this.disabled) {
          if (this.cssSticky) {
            style.position = 'sticky'
            style.zIndex = this.zIndex
            style.top = this.stickyTop + 'px'
          } else {
            style.height = this.fixed ? this.height + 'px' : 'auto'
          }
        } else {
          // 无需吸顶时，设置会默认的relative(nvue)和非nvue的static静态模式即可
          // #ifdef APP-NVUE
          style.position = 'relative'
          // #endif
          // #ifndef APP-NVUE
          style.position = 'static'
          // #endif
        }
        style.backgroundColor = this.bgColor
        return {
          ...this.customStyle,
          ...style
        };
      },
      // 吸顶内容的样式
      stickyContent() {
        const style = {}
        if (!this.cssSticky) {
          style.position = this.fixed ? 'fixed' : 'static'
          style.top = this.stickyTop + 'px'
          // style.left = this.left + 'px'
          // style.width = this.width == 'auto' ? 'auto' : this.width + 'px'
          style.zIndex = this.zIndex;
          style.backgroundColor = this.bgColor
        }
        return style
      },
      stickyTop() { // 吸顶的top值，因为可能受自定义导航栏影响，最终的吸顶值非offsetTop值
        return this.getPx(this.offsetTop || 0) + this.getPx(this.customNavHeight || 0);
      },
      stickyContentId () {
        return this.elId + 'Content'
      },
    },
    mounted() {
      this.init()
    },
    watch: {
      stickyTop() {
        this.init();
      }
    },
    beforeDestroy() {
      this.disconnectObserver('contentObserver');
    },
    methods: {
      init() {
        // 判断使用的模式
        this.checkSupportCssSticky()
        // 如果不支持css sticky，则使用js方案，此方案性能比不上css方案
        this.$nextTick(() => {
          if (!this.disabled) {
            if (!this.cssSticky) {
              this.initObserveContent()
            } else {
              this.observeContent();
            }
          }
        });
      },
      initObserveContent() {
        // 获取吸顶内容的高度，用于在js吸顶模式时，给父元素一个填充高度，防止"塌陷"
        uni.createSelectorQuery().in(this).select('#' + this.stickyContentId).boundingClientRect((res) => {
          this.height = res.height
          // this.left = res.left
          // this.width = res.width
          this.$nextTick(() => {
            this.observeContent();
          });
        }).exec();
      },
      observeContent() {
        // 先断掉之前的观察
        this.disconnectObserver('contentObserver');
        const {stickyTop: offsetTop, elId, index} = this;
        const stickyTop = offsetTop + uni.upx2px(6);
        const contentObserver = uni.createIntersectionObserver(
        // #ifdef MP-WEIXIN
          this,
        // #endif
        {
          // 检测的区间范围
          thresholds: [0, 0.05, 0.95, 0.98, 1]
        })
        // 到屏幕顶部的高度时触发
        contentObserver.relativeToViewport({
          top: -(stickyTop+2)
        });
        // 绑定观察的元素
        contentObserver.observe(`#${elId}`, res => {
          const {top} = res.boundingClientRect;
          // 判断是否出于吸顶条件范围
          const fixed = top <= stickyTop
          this.fixed = fixed;
          console.log('fixed----', fixed, top, stickyTop);
          this.$emit('change', {fixed, index: this.index});
        });
        this.contentObserver = contentObserver
      },
      disconnectObserver(observerName) {
        // 断掉观察，释放资源
        const observer = this[observerName]
        observer && observer.disconnect()
      },
      async checkSupportCssSticky() {
        // #ifdef H5
        // H5，一般都是现代浏览器，是支持css sticky的，这里使用创建元素嗅探的形式判断
        if (this.checkCssStickyForH5()) {
          this.cssSticky = true
        }
        // #endif

        // 如果安卓版本高于8.0，依然认为是支持css sticky的(因为安卓7在某些机型，可能不支持sticky)
        if (this.platform === 'android' && Number(uni.getSystemInfoSync().system) > 8) {
          this.cssSticky = true
        }

        // APP-Vue和微信平台，通过computedStyle判断是否支持css sticky
        // #ifdef APP-VUE || MP-WEIXIN
        this.cssSticky = await this.checkComputedStyle()
        // #endif

        // ios上，从ios6开始，都是支持css sticky的
        if (this.platform === 'ios') {
          this.cssSticky = true
        }

        // nvue，是支持css sticky的
        // #ifdef APP-NVUE
        this.cssSticky = true
        // #endif
      },
      // 在APP和微信小程序上，通过uni.createSelectorQuery可以判断是否支持css sticky
      checkComputedStyle() {
        // 方法内进行判断，避免在其他平台生成无用代码
        // #ifdef APP-VUE || MP-WEIXIN
        return new Promise(resolve => {
          uni.createSelectorQuery().in(this).select('.stickyComp').fields({
            computedStyle: ["position"]
          }).exec(e => {
            resolve('sticky' === e[0].position)
          })
        })
        // #endif
      },
      // H5通过创建元素的形式嗅探是否支持css sticky
      // 判断浏览器是否支持sticky属性
      checkCssStickyForH5() {
        // 方法内进行判断，避免在其他平台生成无用代码
        // #ifdef H5
        const vendorList = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
          vendorListLength = vendorList.length,
          stickyElement = document.createElement('div')
        for (let i = 0; i < vendorListLength; i++) {
          stickyElement.style.position = vendorList[i] + 'sticky'
          if (stickyElement.style.position !== '') {
            return true
          }
        }
        return false;
        // #endif
      },
      getPx(value) {
        if (/(rpx|upx)$/.test(value)) {
          return Number(uni.upx2px(parseInt(value)))
        }
        return parseInt(value)
      },
      guid(len = 32, firstU = true, radix = null) {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
        const uuid = []
        radix = radix || chars.length

        if (len) {
          // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
          for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
        } else {
          let r
          // rfc4122标准要求返回的uuid中,某些位为固定的字符
          uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
          uuid[14] = '4'

          for (let i = 0; i < 36; i++) {
            if (!uuid[i]) {
              r = 0 | Math.random() * 16
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
            }
          }
        }
        // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
        if (firstU) {
          uuid.shift()
          return `u${uuid.join('')}`
        }
        return uuid.join('')
      },
      addUnit(value = 'auto') {
        value = String(value)
        // 用uView内置验证规则中的number判断是否为数值
        return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value) ? `${value}${px}` : value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stickyComp {
    position: sticky;
    &, .sticky-content {
      width: 100%;
      left: 0;
    }
  }
</style>