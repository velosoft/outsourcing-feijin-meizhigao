<template>
  <view class="flex-row items-center order">
    <view class="flex-col justify-start items-center image-wrapper relative">
      <image class="img" :src="order.products[0].productImageURL" />
      <view class="count">
        <text class="count-text">2件商品</text>
      </view>
    </view>
    <view class="flex-col flex-1 ml-8">
      <text class="self-start font">订单编号 {{ order.orderNumber }}</text>
      <view class="flex-row items-center self-stretch mt-8">
        <text class="font">开票金额</text>
        <view class="price-wrapper ml-8">
          <text class="price-number-10">￥</text>
          <text class="price-number-16">{{ getPriceIntergetPart(order.totalAmount) }}</text>
          <text class="price-number-10">.{{ getPriceDecimalPart(order.totalAmount) }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { getPriceIntergetPart, getPriceDecimalPart } from '@/utils/utils.js';
  export default {
    components: {},
    props: {
      order: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {};
    },

    methods: {
      getPriceIntergetPart(val) {
        return getPriceIntergetPart(val);
      },
      getPriceDecimalPart(val) {
        return getPriceDecimalPart(val);
      },
    },
  };
</script>

<style scoped lang="less">
  .order {
    padding: 32rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .image-wrapper {
    width: 148rpx;
    height: 148rpx;
    border-radius: 16rpx;
    overflow: hidden;
  }
  .img {
    width: 148rpx;
    height: 148rpx;
  }
  .count {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 36rpx;
    background: #111111;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .count-text {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #ffffff;
  }
  .font {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #111111;
    font-family: '苹方';
  }
</style>
