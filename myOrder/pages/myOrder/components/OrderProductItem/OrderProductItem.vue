<template>
  <view class="flex-row">
    <view class="flex-col justify-start items-center shrink-0 relative image-wrapper" :style="[imageStyle]">
      <image class="shrink-0 image" :src="product.productImageURL" />
      <view class="flex-col justify-start items-center seckill-wrapper pos" v-if="product.isSeckill">
        <text class="seckill">秒杀</text>
      </view>
    </view>
    <view class="flex-col flex-1 ml-12 justify-between right">
      <text class="line-clamp-two name cf-black-font">{{ product.productName }}</text>
      <view class="flex-row justify-between items-center">
        <text class="flex-1 line-clamp-one description cf-gray-font" :style="[descStyle]">{{
          product.productDescription
        }}</text>
        <text class="quantity" :style="[descStyle]">{{ `x${product.productQuantity}` }}</text>
      </view>
      <view class="flex-row items-center justify-between">
        <view class="price-wrapper seckill" v-if="product.isSeckill">
          <text class="seckill-price">秒杀价</text>
          <text class="price-number-10">￥</text>
          <text class="price-number-16">{{ getPriceIntergetPart(product.productPrice) }}</text>
          <text class="price-number-10">.{{ getPriceDecimalPart(product.productPrice) }}</text>
        </view>
        <view class="price-wrapper" v-else>
          <text class="price-number-10">￥</text>
          <text class="price-number-16">{{ getPriceIntergetPart(product.productPrice) }}</text>
          <text class="price-number-10">.{{ getPriceDecimalPart(product.productPrice) }}</text>
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
  import { productOrders } from '@/mock/personal/orders';

  export default {
    components: {},
    props: {
      product: {
        type: Object,
        default: () => productOrders[0].products[0],
      },
      size: {
        type: String,
        // default,mini
        default: 'default',
      },
    },
    data() {
      return {};
    },
    computed: {
      imageStyle() {
        switch (this.size) {
          case 'mini':
            return {
              width: '144rpx',
              height: '144rpx',
            };
          default:
            return {
              width: '180rpx',
              height: '180rpx',
            };
        }
      },
      descStyle() {
        switch (this.size) {
          case 'mini':
            return {
              fontSize: '24rpx',
            };
          default:
            return {
              fontSize: '26rpx',
            };
        }
      },
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
    color: #111111;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 40rpx;
  }
  .description {
    color: #9e9ea0;
  }
  .quantity {
    color: #9e9ea0;
    font-weight: 500;
  }
  .sale-status {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .price-wrapper.seckill {
    color: #bb3e0c;
  }
  .seckill-price {
    font-size: 24rpx;
  }
</style>
