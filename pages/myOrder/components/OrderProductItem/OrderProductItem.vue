<template>
  <view class="flex-row">
    <view
      class="flex-col justify-start items-center shrink-0 relative image-wrapper"
      :style="{
        width: imageSize,
        height: imageSize,
      }"
    >
      <image class="shrink-0 image" :src="product.productImageURL" />
      <view class="flex-col justify-start items-center seckill-wrapper pos" v-if="product.isSeckill">
        <text class="seckill">秒杀</text>
      </view>
    </view>
    <view class="flex-col flex-1 ml-12 justify-between right">
      <text class="line-clamp-two name">{{ product.productName }}</text>
      <view class="flex-row justify-between items-center">
        <text class="flex-1 line-clamp-one description">{{ product.productDescription }}</text>
        <text class="quantity">{{ `x${product.productQuantity}` }}</text>
      </view>
      <view class="flex-row items-center justify-between">
        <view class="flex-row price-wrapper seckill" v-if="product.isSeckill">
          <text class="seckill-price">秒杀价</text>
          <text class="price-currency">￥</text>
          <text class="price-number">{{ getPriceIntergetPart(product.productPrice) }}</text>
          <text class="price-currency">.{{ getPriceDecimalPart(product.productPrice) }}</text>
        </view>
        <view class="flex-row price-wrapper" v-else>
          <text class="price-currency">￥</text>
          <text class="price-number">{{ getPriceIntergetPart(product.productPrice) }}</text>
          <text class="price-currency">.{{ getPriceDecimalPart(product.productPrice) }}</text>
        </view>
        <text class="sale-status" v-if="product.afterSaleStatus && product.afterSaleStatus !== '正常'">{{
          product.afterSaleStatus
        }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import { getPriceIntergetPart, getPriceDecimalPart } from '@/utils/utils.js';
  export default {
    components: {},
    props: {
      product: Object,
      imageSize: {
        type: String,
        default: '180rpx',
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
  .image-wrapper {
    overflow: hidden;
    border-radius: 16rpx;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .seckill-wrapper {
    background-color: #bb3e0c;
    border-radius: 16rpx 0rpx;
    width: 96rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    top: 0;
  }
  .seckill {
    color: #ffffff;
    font-size: 24rpx;
  }
  .right {
    overflow: hidden;
  }
  .name {
    color: #2d2e32;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 40rpx;
  }
  .description {
    font-size: 24rpx;
    color: #9e9ea0;
  }
  .quantity {
    font-size: 24rpx;
    color: #9e9ea0;
    font-weight: 500;
  }
  .sale-status {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .price-wrapper {
    align-items: center;
    color: #111111;
    font-weight: 500;
  }
  .price-wrapper.seckill {
    color: #bb3e0c;
  }
  .seckill-price {
    font-size: 24rpx;
  }
  .price-currency {
    font-size: 20rpx;
  }
  .price-number {
    font-size: 32rpx;
  }
</style>
