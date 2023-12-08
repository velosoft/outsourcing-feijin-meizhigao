<template>
  <view :id="elId" class="v-tabs">
    <scroll-view
      id="scrollContainer"
      :scroll-x="scroll"
      :scroll-left="scroll ? scrollLeft : 0"
      :scroll-with-animation="scroll"
      :style="{
        position: fixed ? 'fixed' : 'relative',
        zIndex: zIndex,
        padding,
        background: bgColor,
        boxSizing: 'border-box',
      }"
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
            color: current == i ? activeColor : color,
            fontWeight: bold && current == i ? 'bold' : '',
            justifyContent: !scroll ? 'center' : '',
            flex: scroll ? '' : 1,
            padding: paddingItem,
            paddingBottom: '15rpx',
            marginLeft: i == 0 ? '' : itemGap,
          }"
          @click="change(matchKey ? v[matchKey] : i)"
        >
          <view
            :v-if="pillsBgColor"
            class="v-tabs__container-itemb-bg"
            :style="{
              backgroundColor: current == i ? '' : pillsBgColor,
              borderRadius: pillsBorderRadius,
            }"
          />
          <view
            :v-if="v.content"
            class="v-tabs__container-item-content"
            :style="{
              fontSize: contentFontSize,
              color: current == i ? activeColor : contentFontColor,
              fontWeight: 700,
            }"
            >{{ v.content }}</view
          >
          <view
            class="v-tabs__container-item-title"
            :style="{
              fontSize,
            }"
            >{{ v.title }}</view
          >
        </view>
        <view
          class="v-tabs__container-pills"
          :style="{
            left: pillsLeft + 'px',
            width: currentWidth + 'px',
            height,
            transition: transition ? 'all 0.3s' : '',
          }"
          ><view
            class="triangle-bg"
            :style="{
              background: pillsColor,
              borderRadius: pillsBorderRadius,
            }"
          ></view>
          <view
            class="triangle"
            :style="{
              borderTopColor: pillsColor,
            }"
          ></view>
        </view>
      </view>
    </scroll-view>
    <view
      v-if="fixed"
      class="v-tabs__placeholder"
      :style="{
        height,
        padding,
      }"
    ></view>
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
export default {
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
      default: "#999AAA",
    },
    activeColor: {
      type: String,
      default: "#333444",
    },
    fontSize: {
      type: String,
      default: "28rpx",
    },
    activeFontSize: {
      type: String,
      default: "32rpx",
    },
    bold: {
      type: Boolean,
      default: true,
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
      default: 0.5,
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
      deafult: true,
    },
    pillsColor: {
      type: String,
      default: "#FFBC00",
    },
    pillsBgColor: {
      type: String,
      default: "#00000000",
    },
    pillsBorderRadius: {
      type: String,
      default: "36rpx",
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
      default: 1993,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    paddingItem: {
      type: String,
      default: "0 22rpx",
    },
    contentFontSize: {
      type: String,
      default: "28rpx",
    },
    contentFontColor: {
      type: String,
      default: "#999AAA",
    },
    transition: {
      type: Boolean,
      default: true,
    },
    itemGap: {
      type: String,
      default: "0rpx",
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
      // current: 0 // 当前选中项
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
        this.active = index;
        this.$emit("change", {
          detail: {
            current: index,
          },
        });
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
                let itemGapRpx = parseInt(this.itemGap);
                lineLeft += uni.upx2px(itemGapRpx);
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
  },
  mounted() {
    this.elId = "xfjpeter_" + this.randomString();
    this.$nextTick(() => {
      this.getTabItemWidth();
    });
  },
};
</script>

<style lang="less" scoped>
.v-tabs {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  .v-tabs__container {
    min-width: 100%;
    position: relative;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;

    .v-tabs__container-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      position: relative;
      z-index: 10;
      // padding: 0 11px;
      transition: all 0.3s;
      white-space: nowrap;
      border-radius: 6rpx;
    }

    .v-tabs__container-itemb-bg {
      position: absolute;
      top: 0;
      width: 100%;
      bottom: 15rpx;
    }

    .v-tabs__container-item-content {
      font-family: "PingFang SC Bold";
      z-index: 1;
    }

    .v-tabs__container-item-title {
      font-family: "苹方";
      z-index: 1;
    }

    .v-tabs__container-pills {
      position: absolute;
      // transition: all 0.3s linear;
      z-index: 9;
      display: flex;
      flex-direction: column;

      .triangle-bg {
        width: 100%;
        flex: 1;
      }

      .triangle {
        width: 15rpx;
        height: 15rpx;
        border-left: 15rpx solid transparent; /* 三角形的宽度的一半 */
        border-right: 15rpx solid transparent; /* 三角形的宽度的一半 */
        border-top: 15rpx solid; /* 三角形的颜色和高度 */
        align-self: center;
      }
    }
  }
}
</style>
