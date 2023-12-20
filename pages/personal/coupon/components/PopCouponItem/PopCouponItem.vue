<template>
  <view class="flex-col justify-start relative">
    <image class="coupon-bg pos" src="/static/images/bg_pop_coupon.png" />
    <view class="flex-row items-center relative">
      <view class="flex-col coupon-left items-center">
        <view class="flex-row items-baseline">
          <text class="price-num">10</text>
          <text class="currency ml-12">元</text>
        </view>
        <text class="price-label mt-4">满100元使用</text>
      </view>
      <view class="line"></view>
      <view class="flex-col items-start flex-1 coupin-right">
        <text class="line-clamp-one title">收纳服务优惠券</text>
        <view class="flex-col scope-wrap items-center"><text class="time coupon-scope">部分服务可用</text></view>
        <text class="time time-text">2023.06.01-2023.07.01</text>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .coupon-bg {
    width: 592rpx;
    height: 268rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .coupon-left {
    padding: 24rpx 44rpx 72rpx;
    .price-num {
      color: #ff4d1d;
      font-size: 104rpx;
      font-family: '.AppleSystemUIFont';
      line-height: 122rpx;
    }
    .currency {
      color: #ff4d1d;
      font-size: 36rpx;
      font-family: 'PingFang SC';
      line-height: 50rpx;
    }
    .price-label {
      color: #ff4d1d;
      font-size: 30rpx;
      font-family: 'PingFang SC';
      line-height: 42rpx;
    }
  }
  .line {
    background-image: repeating-linear-gradient(
      0deg,
      #e8e8e8,
      #e8e8e8 2.727272727272727%,
      transparent 2.727272727272727%,
      transparent 5.454545454545454%
    );
    width: 2rpx;
    height: 220rpx;
  }
  .coupin-right {
    padding: 55rpx;
    .title {
      color: #000000;
      font-size: 32rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 44rpx;
      width: 224rpx;
    }
    .scope-wrap {
      margin-top: 16rpx;
      padding: 0 4rpx;
      border-radius: 8rpx;
      height: 32rpx;
      border: solid 1rpx #9e9ea0;
      .coupon-scope {
        margin: 0 8rpx;
      }
    }
    .time {
      font-size: 20rpx;
      font-family: 'PingFang SC';
      line-height: 28rpx;
      color: #8c8f95;
    }
    .time-text {
      margin-top: 32rpx;
    }
  }
  </style>