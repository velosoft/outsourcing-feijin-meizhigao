<!-- 确认弹窗组件 -->
<template>
  <view class="dialogComp" @touchmove.stop.prevent>
    <u-popup :show="show" mode="center" round="8">
      <view class="flex-col dialog">
        <!-- <image class="icon-close" @click="close" src="/static/images/icon_close_01.png" mode="aspectFit" /> -->
        <view class="dialog-title" v-if="title">{{ title }}</view>
        <view class="flex-col self-center dialog-content" :style="contentStyle"
          ><text class="dialog-text">{{ content }}</text></view
        >
        <view class="flex-row self-stretch bottom" v-if="btnChangePos">
          <view class="flex-col items-center btn-cancel" @click="cancel"
            ><text class="dialog-font btn-text-cancel">{{
              cancelText
            }}</text></view
          >
          <view class="flex-col items-center btn-isok" @click="confirm"
            ><text class="dialog-font btn-text-isok">{{
              confirmText
            }}</text></view
          >
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    contentStyle: Object,
    cancelText: {
      type: String,
      default: "取消",
    },
    confirmText: {
      type: String,
      default: "确定",
    },
    btnChangePos: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      confirmCallback: null,
      cancelCallback: null,
    };
  },
  methods: {
    open(confirmCallback, cancelCallback) {
      this.confirmCallback = confirmCallback;
      this.cancelCallback = cancelCallback;
      this.show = true;
    },
    close() {
      this.show = false;
    },
    cancel() {
      this.cancelCallback && this.cancelCallback();
      this.close();
      this.$emit("cancel");
    },
    confirm() {
      this.confirmCallback && this.confirmCallback();
      this.close();
      this.$emit("confirm");
    },
  },
};
</script>

<style lang="less" scoped>
.dialogComp {
  .dialog {
    width: 604rpx;
    min-height: 280rpx;
    padding: 64rpx 48rpx 48rpx;
    background-color: #ffffff;
    border-radius: 16rpx;

    .icon-close {
      width: 30upx;
      height: 30upx;
      padding: 16upx;
      position: absolute;
      top: 0upx;
      right: 0upx;
      z-index: 9;
    }

    .dialog-title {
      font-weight: bold;
      padding: 30upx;
      line-break: 1em;
      border-bottom: 1px solid #eaeaea;
    }
    .dialog-content {
      flex: 1;
      padding: 30upx;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .dialog-text {
        color: #030305;
        font-size: 32rpx;
        font-family: 苹方;
        line-height: 32rpx;
      }
    }
    .bottom {
      margin-top: 64rpx;
      .btn {
        width: 238rpx;
        height: 80rpx;
        border-radius: 40rpx;
        padding: 24rpx 0;

        &:not(:last-child) {
          margin-right: 16rpx;
        }
        .btn-cancel {
          border: solid 1rpx #b09053;
          .btn-text-cancel {
            color: #b09053;
          }
        }
        .btn-isok {
          background: #b09053;
          .btn-text-isok {
            color: #ffffff;
          }
        }
      }
      .dialog-font {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #a7a7a7;
      }
    }
  }
}
</style>
