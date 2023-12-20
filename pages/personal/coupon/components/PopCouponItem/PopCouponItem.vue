<template>
  <view class="flex-col coupon-left items-center">
    <view class="flex-row items-baseline">
      <text class="price-num">10</text>
      <text class="currency ml-12">元</text>
    </view>
    <text class="price-label mt-4">满100元使用</text>
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
  </style>