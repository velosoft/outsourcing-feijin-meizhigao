<!-- 确认弹窗组件 -->
<template>
  <view class="dialogComp" @touchmove.stop.prevent>
    <u-popup :show="show" mode="center" round="8">
      <view class="dialog">
        <!-- <image class="icon-close" @click="close" src="/static/images/icon_close_01.png" mode="aspectFit" /> -->
        <view class="dialog-title" v-if="title">{{title}}</view>
        <view class="dialog-content" :style="contentStyle"><text>{{content}}</text></view>
        <view class="bottom" v-if="btnChangePos">
          <view class="btn btn-isok" @click="confirm">
            <text>{{confirmText}}</text>
          </view>
          <view class="btn btn-close" @click="cancel">
            <text>{{cancelText}}</text>
          </view>
        </view>
        <view class="bottom" v-else>
          <view class="btn btn-close" @click="cancel">
            <text>{{cancelText}}</text>
          </view>
          <view class="btn btn-isok" @click="confirm">
            <text>{{confirmText}}</text>
          </view>
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
        default: '取消',
      },
      confirmText: {
        type: String,
        default: '确定',
      },
      btnChangePos: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        show: false,
        confirmCallback: null,
        cancelCallback: null
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
        this.$emit('cancel');
      },
      confirm() {
        this.confirmCallback && this.confirmCallback();
        this.close();
        this.$emit('confirm');
      }
    }
  }
</script>

<style lang="less" scoped>
  .dialogComp {
    .dialog {
      width: 500upx;
      min-height: 280upx;
      font-size: 28rpx;
      background-color: #ffffff;
      border-radius: 10upx;
      display: flex;
      flex-direction: column;
      position: relative;

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

      }

      .bottom {
        height: 80upx;
        border-top: 2upx solid #eee;
        display: flex;
        align-items: stretch;
        justify-content: center;

        .btn {
          font-size: 26upx;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;

          &:not(:last-child) {
            border-right: 2upx solid #eee;
          }
        }

        .btn-close {
          color: #b3afaf;
        }

        .btn-isok {
          color: @primaryBlue;
        }
      }

    }
  }
</style>
