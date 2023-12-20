<template>
  <view class="flex-row">
    <view class="flex-col justify-start items-center shrink-0 relative image-wrapper">
      <image class="shrink-0 image" :src="product.productImageURL" />
      <view class="flex-col justify-start items-center seckill-wrapper pos" v-if="product.isSeckill">
        <text class="seckill">秒杀</text>
      </view>
    </view>
    <view class="flex-col flex-1 ml-12 justify-between">
      <text class="name">{{ product.productName }}</text>
      <view class="flex-row justify-between mt-8">
        <text class="desc desc-color">{{ product.productDescription }}</text>
        <text class="desc count-color">{{ `x${product.productQuantity}` }}</text>
      </view>
      <view class="flex-col mt-8">
        <view class="flex-row items-center" v-if="product.isSeckill">
          <text class="desc price-red">秒杀价</text>
          <text class="price-currency price-bold">￥</text>
          <text class="price-number">{{ product.productPrice }}</text>
          <text class="price-currency price-fixed">.00</text>
        </view>
        <view class="flex-row items-baseline" v-if="!product.isSeckill">
          <text class="price-currency-normal">￥</text>
          <text class="price-number-normal">{{ product.productPrice }}</text>
          <text class="price-fixed-normal">.00</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      product: Object,
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .image-wrapper {
    margin: 4rpx 0;
    overflow: hidden;
    border-radius: 16rpx;
    background-size: 100%, 100%;
    width: 180rpx;
    height: 180rpx;
  }
  .image {
    width: 180rpx;
    height: 180rpx;
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
  .name {
    color: #2d2e32;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 40rpx;
    text-align: left;
  }
  .desc {
    font-size: 26rpx;
    line-height: 36rpx;
  }
  .desc-color {
    color: #8c8f95;
  }
  .count-color {
    color: #828385;
  }
  .price-red {
    color: #bb3e0c;
    font-size: 24rpx;
    font-weight: 500;
    line-height: 34rpx;
  }
  .price-currency {
    font-size: 20rpx;
    color: #bb3e0c;
  }
  .price-bold {
    font-weight: 500;
    line-height: 28rpx;
  }
  .price-number {
    color: #bb3e0c;
    font-size: 32rpx;
    line-height: 36rpx;
  }
  .price-fixed {
    margin-left: 4rpx;
    line-height: 24rpx;
  }
  .price-currency-normal {
    color: #111111;
    font-size: 20rpx;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 28rpx;
  }
  .price-number-normal {
    color: #111111;
    font-size: 32rpx;
    font-family: '.AppleSystemUIFont';
    line-height: 36rpx;
  }
  .price-fixed-normal {
    margin-left: 4rpx;
    color: #111111;
    font-size: 20rpx;
    font-family: '.AppleSystemUIFont';
    line-height: 24rpx;
  }
</style>
