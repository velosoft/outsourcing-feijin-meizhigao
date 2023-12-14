<template>
  <u-popup :show="show" :mode="type">
    <view class="popup" :class="type">
      <view class="popup-top">
        <view class="title">{{ title }}</view>
        <image
          class="close"
          src="/static/images/icon_close_01.png"
          mode="aspectFit"
          @click="close"
        ></image>
      </view>
      <view class="popup-content">
        <slot name="content"></slot>
      </view>
      <view class="popup-bottom" v-if="confirmCallback">
        <view class="btn" @click="submit">确定</view>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  name: "PopupConfirm",
  props: {
	// show: {
    //   type: Boolean,
    //   default: false,
    // },
    confirmClose: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "bottom",
    },
  },
  data() {
    return {
      show: false,
      confirmCallback: null,
    };
  },
  methods: {
    open(confirmCallback) {
      this.confirmCallback = confirmCallback;
      this.show = true;
    },
    close() {
      this.show = false;
    },
    submit() {
      const { confirmCallback } = this;
      confirmCallback && confirmCallback();
      this.close();
      this.$emit("confirm");
    },
  },
};
</script>

<style lang="less" scoped>
.popup {
  position: relative;
  width: 100%;
  min-height: 660rpx;
  background-color: #ffffff;
  border-radius: 30rpx 30rpx 0 0;
  display: flex;
  flex-direction: column;
  z-index: 99;

  &.bottom {
    &::after {
      position: absolute;
      bottom: -100rpx;
      left: 0;
      display: block;
      content: "";
      width: 100%;
      height: 100rpx;
      background-color: #fff;
    }
  }
  &.center {
    border-radius: 30rpx;
  }

  .popup-top {
    position: relative;
    height: 100rpx;
    z-index: 3;
    .title {
      width: 100%;
      line-height: 100rpx;
      font-size: 32rpx;
      font-weight: bold;
      text-align: center;
    }

    .close {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 40rpx;
      width: 32rpx;
      height: 32rpx;
    }
  }

  .popup-content {
    flex: 1;
  }

  .popup-bottom {
    padding: 32rpx 24rpx;
    .btn {
      height: 88rpx;
      line-height: 88rpx;
      color: #fff;
      font-size: 30rpx;
      font-weight: 500;
      text-align: center;
      background-color: @primaryBlue;
      border-radius: 72rpx;
    }
  }
}
</style>
