<template>
  <view class="dialog">
    <u-popup :show="show" mode="center" :round="8" :closeOnClickOverlay="false">
      <view class="content">
        <view class="title">用户协议和隐私政策</view>
        <view class="text">请您务必审慎阅读、充分理解“用户协议”和“隐私政策”各条款，您可阅读<navigator class="url" hover-class="none"
            url="/pages/security/agreement/agreement?type=1">《用户协议》</navigator>和<navigator class="url"
            hover-class="none" url="/pages/security/agreement/agreement?type=3">《隐私政策》</navigator>
          了解详细信息。如您同意，请点击“同意”开始接受我们的服务。</view>
        <view class="btn_group">
          <button class="btn" @click="handleChange">暂不使用</button>
          <button class="btn" @click="consent">同意</button>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    name: 'AgreementDialog',
    data() {
      return {
        callback: null,
        show: false
      };
    },
    methods: {
      open (callback) {
        this.show = true;
        this.callback = callback;
        this.$refs.dialog.open();
      },
      consent() {
        const { callback } = this;
        
        callback && callback();
        this.show = false;
        this.$emit('consent');
      },
      handleChange(e) {
        const hasConsent = uni.getStorageSync('hasConsent');
        if (!e.show && !hasConsent) {
          /* 强制退出登录 */
          switch (uni.getSystemInfoSync().platform) {
            case 'android':
              plus.runtime.quit();
              break;
            case 'ios':
              const threadClass = plus.ios.importClass("NSThread");
              const mainThread = plus.ios.invoke(threadClass, "mainThread");
              plus.ios.invoke(mainThread, "exit");
              break;
          }

        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .dialog {
    .content {
      position: relative;
      padding: 0 30rpx;
      width: 570rpx;
      height: 529rpx;
      background-color: #ffffff;
      border-radius: 8rpx;

      .title {
        padding: 39rpx 0;
        text-align: center;
        font-size: 30rpx;
        font-weight: bold;
        color: #333333;
      }

      .text {
        text-indent: 60rpx;
        font-size: 26rpx;
        color: #666666;
        line-height: 1.5;

        .url {
          text-indent: 0;
          display: inline-block;
          color: #ff995c;
        }
      }

      .btn_group {
        position: absolute;
        bottom: 10rpx;
        left: 0;
        padding: 30rpx;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .btn {
          padding: 0;
          margin: 0;
          width: 240rpx;
          height: 56rpx;
          font-size: 26rpx;
          line-height: 56rpx;
          text-align: center;
          color: #999999;
          background-color: #f4f4f4;
          border-radius: 28rpx;

          &:last-child {
            color: #ffffff;
            background-image: linear-gradient(90deg,
                #ff8f34 0%,
                #ff6a56 100%),
              linear-gradient(#ffffff,
                #ffffff);
            background-blend-mode: normal,
              normal;
          }
        }
      }
    }
  }
</style>
