<template>
  <view class="flex-col wrap">
    <view class="flex-row items-center">
      <view class="flex-col items-center item equal-division-item" @click="onClick">
        <text class="number">{{ coinsNum }}</text>
        <text class="label mt-8">收纳币</text>
      </view>
      <view class="flex-col items-center item ml-32" @click="onClick_1">
        <text class="number">{{ integralNum }}</text>
        <text class="label mt-8">积分</text>
      </view>
      <view class="flex-col items-center item equal-division-item ml-32" @click="onClick_2">
        <text class="number">{{ couponNum }}</text>
        <text class="label mt-8">优惠券</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      coinsNum: { type: String, default: `8000` },
      integralNum: { type: String, default: `500` },
      couponNum: { type: String, default: `215` },
    },
    data() {
      return {};
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/bonusCoin/bonusCoin/bonusCoin' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/bonusPoint/bonusPoint/bonusPoint' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/personal/coupon/coupon/coupon' });
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 16rpx 0 48rpx;
    background-image: linear-gradient(180deg, #494642 0%, #494642 -31.98%, #23221f 84.06%, #23221f 100%);
    border-radius: 24rpx 24rpx 0rpx 0rpx;
    .item {
      flex: 1 1 176rpx;
      .number {
        font-size: 36rpx;
        font-family: '.AppleSystemUIFont';
        line-height: 42rpx;
        color: #dec9a0;
      }
      .label {
        font-size: 26rpx;
        font-family: 'PingFang SC';
        line-height: 36rpx;
        color: #dec9a0;
      }
    }
    .equal-division-item {
      padding: 8rpx 0;
    }
  }
</style>
