<template>
  <view class="footer-bar iPhoneX">
    <view class="box iPhoneX" :style="{ position }">
      <view class="box-content">
        <view class="btn" :class="{ disabled: disabled }" @click="handleClick">
          <image
            v-if="icon"
            class="icon"
            :style="{ width: size, height: size, borderRadius: iconRadius }"
            :src="icon"
            mode="aspectFit"
          ></image>
          <text>{{ text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "FooterBar",
  props: {
    size: {
      type: String,
      default: "28rpx",
    },
    icon: {
      type: String,
      default: "",
    },
    iconRadius: {
      type: String,
      default: "100%",
    },
    text: {
      type: String,
      default: "确定",
    },
    position: {
      type: String,
      default: "fixed",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped lang="less">
.footer-bar {
  padding-top: 128rpx;
  .box {
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: #ffffff;
    box-shadow: 0 -6rpx 10rpx 2rpx rgba(0, 0, 0, 0.04);
    .box-content {
      height: 128rpx;
      padding: 20rpx 32rpx;
      .btn {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30rpx;
        color: #fff;
        background-color: @primaryBlue;
        border-radius: 44rpx;
        .icon {
          margin-right: 12rpx;
        }
        &.disabled {
          background-color: @primaryDisabledBlue;
        }
      }
    }
  }
}
</style>
