<template>
  <view class="flex-col container">
    <text class="self-start com-font title">订单信息</text>
    <view class="flex-col self-stretch mt-16">
      <view class="flex-row justify-between items-baseline">
        <text class="com-font">课程单号</text>
        <text class="value-font">{{orderInfo.orderNum}}</text>
      </view>
      <view class="flex-row justify-between gap-top">
        <text class="com-font">订单留言</text>
        <text class="value-font">{{orderInfo.orderNote}}</text>
      </view>
      <view class="flex-row justify-between items-center gap-top">
        <text class="com-font">提交时间</text>
        <text class="value-font">{{orderInfo.submitTime}}</text>
      </view>
      <view class="flex-row justify-between items-baseline gap-top">
        <text class="com-font">支付时间</text>
        <text class="value-font">{{orderInfo.payTime}}</text>
      </view>
      <view class="flex-row justify-between items-baseline gap-top">
        <text class="com-font">支付方式</text>
        <text class="value-font">{{orderInfo.payType}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      orderInfo: {
        type: Object,
        default: () => ({
          orderNum: '202204017863447637',
          orderNote: '麻烦请尽快跟进，谢谢',
          submitTime: '2022-04-01 09:30:22',
          payTime: '--',
          payType: '--',
        }),
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .container {
    padding: 24rpx 24rpx 48rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .com-font {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #8c8f95;
    }
    .title {
      color: #2d2e32;
      font-size: 30rpx;
      font-weight: 700;
      line-height: 30rpx;
    }
    .value-font {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #3c3d41;
    }
    .gap-top {
      margin-top: 48rpx;
    }
  }
</style>