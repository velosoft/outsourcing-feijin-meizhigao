<template>
  <view class="flex-row items-center justify-between">
    <view class="flex-row">
      <image class="shrink-0 icon-status" src="/myOrder/static/images/icon_header_time.png" />
      <text class="font ml-10">待付款</text>
    </view>
    <text class="time-left">支付剩余 29:00 分钟</text>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: { courseHead: { type: Object, default: () => ({ courseType: 0, remainingTime: '29:00' }) } },
    data() {
      return {};
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .icon-status {
    border-radius: 50%;
    width: 44rpx;
    height: 44rpx;
  }
  .font {
    color: #ffffff;
    font-size: 40rpx;
    font-family: PingFang SC;
    font-weight: 700;
    line-height: 40rpx;
  }
  .time-left {
    color: #ffffff;
    font-size: 28rpx;
    font-family: PingFang SC;
    line-height: 28rpx;
  }
  </style>