<template>
  <view class="flex-col order-summary">
    <text class="self-start title-text">订单信息</text>
    <view class="flex-row justify-between mt-15 items-center">
      <text class="name">订单编号</text>
      <text class="value-bold">{{ order.orderNumber }}</text>
    </view>
    <view class="flex-row justify-between items-center mt-15">
      <text class="name">订单留言</text>
      <text class="value-bold">{{ order.orderMessage }}</text>
    </view>
    <view class="flex-row justify-between items-center mt-15">
      <text class="name">提交时间</text>
      <text class="value-bold">{{ order.orderTime }}</text>
    </view>
    <view class="flex-row justify-between items-center mt-15">
      <text class="name">支付时间</text>
      <text class="value-bold">{{ order.paymentTime }}</text>
    </view>
    <view class="flex-row justify-between items-center mt-15">
      <text class="name">支付方式</text>
      <text class="value-bold">{{ order.paymentMethod }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      order: Object,
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .mt-15 {
    margin-top: 30rpx;
  }
  .order-summary {
    padding: 24rpx 22rpx 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .title-text {
    font-weight: 500;
    font-size: 30rpx;
  }
  .name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #8c8f95;
  }

  .value-bold {
    font-size: 28rpx;
    line-height: 34rpx;
    font-weight: 600;
    color: #3c3d41;
  }
</style>
