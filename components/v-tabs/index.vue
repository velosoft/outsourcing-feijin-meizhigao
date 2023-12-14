<template>
  <view class="vTabsComp">
    <fj-sticky
      :bgColor="stickybg"
      :disabled="stickyDisabled"
      :zIndex="zIndex"
      :offsetTop="offsetTop"
      :customNavHeight="customNavHeight"
      @change="onSticky"
    >
      <view>
        <slot name="stickyTop"></slot>
        <view
          class="tabs-wrap"
          :style="{
            position: fixed ? 'fixed' : 'relative',
            zIndex: zIndex,
            padding,
            background: bgColor,
          }"
        >
          <view :id="elId" class="v-tabs">
            <scroll-view
              id="scrollContainer"
              :scroll-x="scroll"
              :scroll-left="scroll ? scrollLeft : 0"
              :scroll-with-animation="scroll"
            >
              <view
                class="v-tabs__container"
                :style="{
                  display: scroll ? 'inline-flex' : 'flex',
                  whiteSpace: scroll ? 'nowrap' : 'normal',
                  background: bgColor,
                  height,
                }"
              >
                <view
                  class="v-tabs__container-item"
                  v-for="(v, i) in tabs"
                  :key="i"
                  :style="{
                    color: v.fontColor || (current == i ? activeColor : color),
                    fontSize:
                      current == i && activeFontSize
                        ? activeFontSize
                        : fontSize,
                    fontWeight:
                      bold || (activeBold && current == i)
                        ? 'bold'
                        : fontWeight,
                    justifyContent: scroll ? '' : 'center',
                    flex: scroll ? '' : 1,
                    padding: paddingItem,
                  }"
                  @click="change(matchKey ? v[matchKey] : i)"
                >
                  <image
                    v-if="v.iconSrc"
                    class="icon"
                    :style="{ height: iconSize }"
                    :src="v.iconSrc"
                    mode="heightFix"
                  ></image>
                  <text class="name">{{ field ? v[field] : v }}</text>
                </view>
                <view
                  v-if="!pills"
                  class="v-tabs__container-line"
                  :style="{
                    background: lineColor,
                    width: lineWidth + 'px',
                    height: lineHeight,
                    borderRadius: lineRadius,
                    left: lineLeft + 'px',
                    bottom: lineBottom,
                    transform: `translateX(-${lineWidth / 2}px)`,
                  }"
                >
                  <slot name="line"></slot>
                </view>
                <view
                  v-else
                  class="v-tabs__container-pills"
                  :style="{
                    background: pillsColor,
                    borderRadius: pillsBorderRadius,
                    left: pillsLeft + 'px',
                    width: currentWidth + 'px',
                    height,
                  }"
                ></view>
              </view>
            </scroll-view>
          </view>
          <view class="right">
            <slot name="tabsRight"></slot>
          </view>
        </view>
        <view
          v-if="fixed"
          class="v-tabs__placeholder"
          :style="{ height, padding }"
        ></view>
        <slot name="stickyBottom"></slot>
      </view>
    </fj-sticky>
    <template v-if="hasSwiper">
      <swiper
        :current="current"
        :duration="200"
        class="swiper-container swiper-container-1"
        @change="handleSwiperChange"
        @transition="handleTransition"
        v-if="swiperScroll"
      >
        <swiper-item
          class="swiper-item"
          v-for="(item, index) of tabs"
          :key="index"
        >
          <scroll-view
            class="scroll-view"
            :scroll-y="true"
            :refresher-enabled="refresherEnabled"
            :refresher-triggered="item.refresherTriggered"
            @refresherrefresh="onRefresherrefresh"
            @scrolltolower="onScrolltolower"
            @scroll="handleScroll"
          >
            <view class="content-container">
              <slot :name="`tab-content-${index}`"></slot>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>

      <swiper
        :current="current"
        :duration="200"
        class="swiper-container swiper-container-2"
        :style="{ height: `${swiperHeight}px` }"
        @change="handleSwiperChange"
        @transition="handleTransition"
        v-else
      >
        <swiper-item
          class="swiper-item"
          :class="[`swiper-item-${index}`]"
          v-for="(item, index) of tabs"
          :key="index"
        >
          <view class="content-container">
            <slot :name="`tab-content-${index}`"></slot>
          </view>
        </swiper-item>
      </swiper>
    </template>
    <slot v-else></slot>
  </view>
</template>

<script>
/**
 * v-tabs
 * @property {Number} value 选中的下标
 * @property {Array} tabs tabs 列表
 * @property {String} bgColor = '#fff' 背景颜色
 * @property {String} color = '#333' 默认颜色
 * @property {String} activeColor = '#2979ff' 选中文字颜色
 * @property {String} fontSize = '28rpx' 默认文字大小
 * @property {String} activeFontSize = '28rpx' 选中文字大小
 * @property {Boolean} bold = [true | false] 选中文字是否加粗
 * @property {Boolean} scroll = [true | false] 是否滚动
 * @property {String} height = '60rpx' tab 的高度
 * @property {String} lineHeight = '10rpx' 下划线的高度
 * @property {String} lineColor = '#2979ff' 下划线的颜色
 * @property {Number} lineScale = 0.5 下划线的宽度缩放比例
 * @property {String} lineRadius = '10rpx' 下划线圆角
 * @property {Boolean} pills = [true | false] 是否胶囊样式
 * @property {String} pillsColor = '#2979ff' 胶囊背景色
 * @property {String} pillsBorderRadius = '10rpx' 胶囊圆角大小
 * @property {String} field 如果是对象，显示的键名
 * @property {String} matchKey 如果是对象，可设定匹配名称
 * @property {Boolean} fixed = [true | false] 是否固定
 * @property {String} paddingItem = '0 22rpx' 选项的边距
 *
 * @event {Function(current)} change 改变标签触发
 */
import FjSticky from "@/components/FjSticky";
let tabChange = false;
export default {
  components: {
    FjSticky,
  },
  // #ifdef MP-WEIXIN
  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true,
  },
  // #endif
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
    padding: {
      type: String,
      default: "0",
    },
    color: {
      type: String,
      default: "#9E9EA0",
    },
    activeColor: {
      type: String,
      default: "#2D2E32",
    },
    fontSize: {
      type: String,
      default: "28rpx",
    },
    fontWeight: {
      type: String,
      default: "",
    },
    activeFontSize: {
      type: String,
      default: "",
    },
    bold: {
      type: Boolean,
      default: true,
    },
    activeBold: {
      type: Boolean,
      default: true,
    },
    iconSize: {
      type: String,
      default: "28rpx",
    },
    scroll: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "70rpx",
    },
    lineColor: {
      type: String,
      default: "#3D7FFF",
    },
    lineHeight: {
      type: String,
      default: "6rpx",
    },
    lineScale: {
      type: Number,
      default: 0.2,
    },
    lineRadius: {
      type: String,
      default: "4rpx",
    },
    lineBottom: {
      type: String,
      default: "0",
    },
    pills: {
      type: Boolean,
      deafult: false,
    },
    pillsColor: {
      type: String,
      default: "#FF9955",
    },
    pillsBorderRadius: {
      type: String,
      default: "12rpx",
    },
    field: {
      type: String,
      default: "",
    },
    matchKey: {
      type: String,
      default: "",
    },
    zIndex: {
      type: [String, Number],
      default: 999,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    paddingItem: {
      type: String,
      default: "0 22rpx",
    },
    // 吸顶偏移量
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
    // 自定义导航栏的高度
    customNavHeight: {
      type: [String, Number],
      // #ifdef H5
      // H5端的导航栏属于“自定义”导航栏的范畴，因为它是非原生的，与普通元素一致
      default: 44,
      // #endif
      // #ifndef H5
      default: 0,
      // #endif
    },
    // 是否禁用吸顶功能
    stickyDisabled: {
      type: Boolean,
      default: true,
    },
    // 吸顶区域的背景颜色
    stickybg: {
      type: String,
      default: "transparent",
    },
    hasSwiper: {
      type: Boolean,
      default: false,
    },
    swiperScroll: {
      type: Boolean,
      default: true,
    },
    refresherEnabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      elId: "",
      lineWidth: 30,
      currentWidth: 0, // 当前选项的宽度
      lineLeft: 0, // 滑块距离左侧的位置
      pillsLeft: 0, // 胶囊距离左侧的位置
      scrollLeft: 0, // 距离左边的位置
      containerWidth: 0, // 容器的宽度
      active: 0,
      swiperHeight: 0,
    };
  },
  computed: {
    current() {
      const { matchKey, tabs, active } = this;
      let index = active || 0;

      if (matchKey) {
        index = tabs.findIndex((item) => {
          return item[matchKey] == index;
        });
        index = index > -1 ? index : 0;
      }
      return index;
    },
  },
  watch: {
    value: {
      handler(newVal) {
        if (this.active != newVal) {
          this.active = newVal;
        }
      },
      immediate: true,
    },
    current(newVal) {
      this.$nextTick(() => {
        this.getTabItemWidth();
        this.hasSwiper && this.compuntedSwiperHeight();
      });
    },
    active(newVal) {
      this.$emit("input", newVal);
    },
    tabs(newVal) {
      this.$nextTick(() => {
        this.getTabItemWidth();
      });
    },
  },
  methods: {
    // 产生随机字符串
    randomString(len) {
      len = len || 32;
      let $chars =
        "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },
    // 切换事件
    change(index) {
      if (this.active !== index) {
        tabChange = true;
        this.active = index;
        this.$emit("change", index);
      }
    },
    handleSwiperChange(e) {
      if (tabChange) {
        tabChange = false;
      } else {
        const { current } = e.detail;
        this.$emit("change", current);
      }
    },
    // 获取左移动位置
    getTabItemWidth() {
      let query = uni
        .createSelectorQuery()
        // #ifndef MP-ALIPAY
        .in(this);
      // #endif
      // 获取容器的宽度
      query
        .select("#scrollContainer")
        .boundingClientRect((data) => {
          if (!this.containerWidth && data) {
            this.containerWidth = data.width;
          }
        })
        .exec();
      // 获取所有的 tab-item 的宽度
      query
        .selectAll(".v-tabs__container-item")
        .boundingClientRect((data) => {
          if (!data) {
            return;
          }
          let lineLeft = 0;
          let currentWidth = 0;
          if (data) {
            for (let i = 0; i < data.length; i++) {
              if (i < this.current) {
                lineLeft += data[i].width;
              } else if (i == this.current) {
                currentWidth = data[i].width;
              } else {
                break;
              }
            }
          }
          // 当前滑块的宽度
          this.currentWidth = currentWidth;
          // 缩放后的滑块宽度
          this.lineWidth = currentWidth * this.lineScale * 1;
          // 滑块作移动的位置
          this.lineLeft = lineLeft + currentWidth / 2;
          // 胶囊距离左侧的位置
          this.pillsLeft = lineLeft;
          // 计算滚动的距离左侧的位置
          if (this.scroll) {
            this.scrollLeft = this.lineLeft - this.containerWidth / 2;
          }
        })
        .exec();
    },
    /* 计算swiper的高度 */
    compuntedSwiperHeight(addHeight = 0) {
      if (this.swiperScroll) {
        return;
      }
      setTimeout(() => {
        this.$nextTick(() => {
          const { current } = this;
          const query = uni.createSelectorQuery().in(this);
          query
            .select(
              `.swiper-container .swiper-item-${current} .content-container`
            )
            .boundingClientRect((data) => {
              this.swiperHeight = data.height + addHeight;
            })
            .exec();
        });
      }, 200);
    },
    onRefresherrefresh() {
      const { current } = this;
      this.$emit("refresh", current);
    },
    onScrolltolower() {
      const { current } = this;
      this.$emit("scrolltolower", current);
    },
    handleScroll(event) {
      this.$emit("scroll", event);
    },
    handleTransition(e) {
      this.$emit("transition", e.detail);
    },
    onSticky(e) {
      this.$emit("sticky", e);
    },
  },
  mounted() {
    this.elId = "xfjpeter_" + this.randomString();
    this.$nextTick(() => {
      this.getTabItemWidth();
    });
  },
};
</script>

<style lang="scss" scoped>
.vTabsComp {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.v-tabs__placeholder {
  box-sizing: content-box;
}
.tabs-wrap {
  display: flex;
  align-items: center;
  .v-tabs {
    flex: 1;
    overflow: hidden;
    &,
    scroll-view {
      box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      display: none;
    }

    &__container {
      min-width: 100%;
      position: relative;
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;

      &-item {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        z-index: 10;
        // padding: 0 11px;
        // transition: all 0.3s;
        white-space: nowrap;
        .icon {
          margin-right: 4rpx;
        }
      }

      &-line {
        position: absolute;
        bottom: 0;
        transition: all 0.2s linear;
      }

      &-pills {
        position: absolute;
        transition: all 0.2s linear;
        z-index: 9;
      }
    }
  }
  .right {
    flex-shrink: 0;
  }
}
.swiper-container {
  &-1 {
    flex: 1;
    .scroll-view {
      height: 100%;
    }
  }
}
</style>
