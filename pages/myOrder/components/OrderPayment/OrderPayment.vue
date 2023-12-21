<template>
  <view class="flex-col order-payment">
    <view class="flex-col flex-1 items">
      <view class="flex-row justify-between items-center">
        <text class="item-name">商品总数</text>
        <text class="item-value-bold">{{ `${order.products.length}件` }}</text>
      </view>
      <view class="flex-row justify-between item">
        <text class="item-name">商品总价</text>
        <text class="self-start item-value-bold">{{ `￥${order.totalAmount}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item">
        <text class="item-name">运费</text>
        <text class="item-value-bold">{{ `￥${order.shippingFee}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.activityDiscount">
        <text class="item-name">活动优惠</text>
        <text class="item-value-bold">{{ `-￥${order.activityDiscount}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.couponDiscount">
        <text class="item-name">优惠券减免</text>
        <text class="item-value-bold">{{ `-￥${order.couponDiscount}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.pointsDeduction">
        <text class="item-name">积分抵扣</text>
        <text class="item-value-bold">{{ `-￥${order.pointsDeduction}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.storageCoinDeduction">
        <text class="item-name">收纳币抵扣</text>
        <text class="item-value-bold">{{ `-￥${order.storageCoinDeduction}` }}</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center total-wrapper">
      <text class="item-name total-text">实付款</text>
      <text class="item-value-bold">{{ `￥${order.totalAmount}` }}</text>
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
  .order-payment {
    padding-left: 24rpx;
    padding-right: 22rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .items {
    padding: 44rpx 0 35rpx;
    border-bottom: solid 2rpx #3c3d41;
  }
  .item-name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #8c8f95;
  }

  .item {
    margin-top: 32rpx;
  }
  .item-value-bold {
    font-size: 28rpx;
    line-height: 34rpx;
    font-weight: 600;
    color: #2d2e32;
  }
  .total-wrapper {
    padding: 30rpx 0 30rpx;
  }
  .total-text {
    color: #2d2e32;
    font-weight: 500;
  }
</style>
