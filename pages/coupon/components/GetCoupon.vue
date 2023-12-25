<template>
  <view class="flex-col get-coupon">
    <view class="flex-col justify-start self-stretch body">
      <view class="flex-col body-wrapper">
        <view class="flex-col coupon-info">
          <view class="flex-col justify-between coupon-header">
            <text class="self-stretch coupon-title">{{ coupon.title }}</text>
            <view class="flex-row justify-center items-end mt-12">
              <text class="coupon-amount">{{ coupon.amount }}</text>
              <text class="coupon-currency ml-2">元</text>
            </view>

            <text class="self-center coupon-trigger mt-12">满{{ coupon.triggerCondition }}元使用</text>
          </view>
          <view class="line"></view>
          <view class="flex-col items-center coupon-footer">
            <text class="coupon-applicable">{{ coupon.applicableTo }}</text>
            <text class="coupon-validity mt-11">{{ coupon.validity.start }}-{{ coupon.validity.end }}</text>
          </view>
        </view>
        <view class="flex-col justify-center items-center button-wrapper" @click="onGet"
          ><text class="button-text">立即领取</text></view
        >
      </view>
    </view>
    <image class="self-center close-icon mt-16" src="/static/images/17019990314842063376.png" @click="onClose" />
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      coupon: Object,
    },
    data() {
      return {};
    },

    methods: {
      onGet() {
        this.onClose();
      },
      onClose() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped lang="less">
  .mt-3 {
    margin-top: 6rpx;
  }
  .mt-11 {
    margin-top: 22rpx;
  }
  .get-coupon {
    width: 600rpx;
  }
  .coupon-title {
    font-size: 32rpx;
    font-family: 苹方;
    color: #bb3e0c;
    line-height: 30.04rpx;
  }
  .coupon-trigger {
    font-size: 24rpx;
    font-family: 苹方;
    line-height: 22.28rpx;
    color: #bb3e0c;
  }
  .coupon-applicable {
    font-size: 24rpx;
    font-family: 苹方;
    color: #a7a7a7;
    line-height: 22.42rpx;
  }
  .body {
    padding: 16rpx 0;
  }
  .body-wrapper {
    margin: 0 16rpx;
    padding: 0 94rpx 60rpx;
    background-image: linear-gradient(180deg, #fff1ed 0%, #ffffff 25.4%);
    border-radius: 20rpx;
  }
  .coupon-info {
    padding: 59rpx 0 40.02rpx;
  }
  .coupon-header {
    padding: 17.88rpx 74rpx 28.56rpx 78rpx;
    background-image: url('https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=9f1e149893fda288f133f2ad4b46e820.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .coupon-amount {
    margin-left: 44rpx;
    color: #bb3e0c;
    font-size: 84rpx;
    font-family: HarmonyOS Sans SC;
    font-weight: 700;
    line-height: 63.68rpx;
  }
  .coupon-currency {
    margin-right: 50rpx;
    color: #bb3e0c;
    font-size: 24rpx;
    font-family: 苹方;
    font-weight: 600;
    line-height: 21.18rpx;
  }
  .line {
    background-image: repeating-linear-gradient(90deg, #e8e8e8, #e8e8e8 3.4%, transparent 3.4%, transparent 6.8%);
    width: 350rpx;
    height: 2rpx;
    margin-left: 20rpx;
  }
  .coupon-footer {
    padding: 30.18rpx 0 48.02rpx;
    background-image: url('https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=6bef2920efee5c07e2122bde1454f469.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .coupon-validity {
    color: #a7a7a7;
    font-size: 24rpx;
    font-family: 苹方;
    line-height: 17.8rpx;
  }
  .button-wrapper {
    margin: 0 6rpx;

    background-color: #030305;
    border-radius: 40rpx;
    width: 368rpx;
    height: 80rpx;
  }

  .button-text {
    color: #ffffff;
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 25.92rpx;
  }
  .close-icon {
    width: 60rpx;
    height: 60rpx;
  }
</style>
