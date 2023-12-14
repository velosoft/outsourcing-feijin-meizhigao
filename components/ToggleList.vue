<template>
  <view class="flex-col items-start tog-wrap">
    <view class="flex-row tog-con">
      <view
        class="flex-row justify-center items-center tog-btn"
        :class="[index == current ? 'btn--active' : '']"
        :style="{
          padding,
          background: current == index ? activeBgColor : bgColor,
          border: current == index && border ? activeBorder : border,
        }"
        v-for="(item, index) in tabsArray"
        :key="index"
        @click="clickHandler(item, index)"
      >
        <text
          class="btn-text"
          :class="[index == current ? 'btn-text--active' : '']"
          :style="{
            color: current == index ? activeColor : color,
            fontSize:
              current == index && activeFontSize ? activeFontSize : fontSize,
            fontWeight:
              bold || (activeBold && current == index) ? 'bold' : fontWeight,
          }"
          >{{ item.label }}</text
        >
        <view
          class="btn-close"
          v-if="closable"
          @tap.stop="closeHandler(item, index)"
        >
          <slot name="close">
            <image
              class="close-icon"
              src="/static/images/icon_del_02.png"
              mode="aspectFit|aspectFill|widthFix"
              lazy-load="false"
              binderror=""
              bindload=""
            >
            </image>
          </slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ToggleList",
  props: {
    tabsArray: {
      type: Array,
      default: [{ label: "标签1" }, { label: "标签2" }, { label: "标签3" }],
    },
    closable: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "",
    },
    activeBgColor: {
      type: String,
      default: "",
    },
    border: {
      type: String,
      default: "",
    },
    activeBorder: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "",
    },
    fontsize: {
      type: String,
      default: "",
    },
    activeFontSize: {
      type: String,
      default: "",
    },
    fontWeight: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    // 点击标签
    clickHandler(v, i) {
      this.current = i;
      this.$emit("onClick", v);
    },
    // 点击关闭按钮
    closeHandler(v, i) {
      this.$emit("onClose", v);
    },
  },
};
</script>

<style lang="less">
.tab-wrap {
  width: 100%;
  padding: 30rpx 0;
}

.tog-con > view:not(:first-child) {
  margin-left: 12rpx;
}

.tog-btn {
  height: 48rpx;
  padding: 32rpx;
  border-radius: 30rpx;
  transition: all 0.3s linear;
  background-color: #f8f8f8;
}

.btn--active {
  // background-color: #c30d23;
}

.btn-text {
  font-size: 26rpx;
  font-family: PingFang SC;
  line-height: 26rpx;
  color: #a7a7a7;
}

.btn-text--active {
  // color: #f7f7f7;
}

.btn-close {
  margin-left: 20rpx;

  .close-icon {
    height: 28rpx;
    width: 28rpx;
  }
}
</style>
