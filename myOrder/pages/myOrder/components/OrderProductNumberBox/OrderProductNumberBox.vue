<template>
  <view class="flex-row items-center">
    <u-checkbox v-model="v_model" name="zef0ZWPc" shape="circle" size="32rpx" activeColor="#B09053"></u-checkbox>
    <image class="shrink-0 img" :src="product.productImageURL" />
    <view class="flex-col justify-between flex-1 ml-7">
      <text class="line-clamp-two font title cf-black-font">{{ product.productName }}</text>
      <text class="line-clamp-one desc cf-gray-font">{{ product.productDescription }}</text>
      <view class="flex-row justify-between items-center">
        <view class="price-wrapper">
          <text class="price-number-10">￥</text>
          <text class="price-number-16">{{ getPriceIntergetPart(product.productPrice) }}</text>
          <text class="price-number-10">.{{ getPriceDecimalPart(product.productPrice) }}</text>
        </view>
        <u-number-box class="cf-number-box-2" v-model="numVal"></u-number-box>
      </view>
    </view>
  </view>
</template>

<script>
  import { getPriceIntergetPart, getPriceDecimalPart } from '@/utils/utils.js';
  export default {
    components: {},
    props: {
      product: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {
        v_model: '',
        numVal: 1,
      };
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
  .ml-7 {
    margin-left: 14rpx;
  }
  .img {
    border-radius: 16rpx;
    width: 160rpx;
    height: 160rpx;
  }
  .font {
    font-size: 26rpx;
    font-weight: 500;
  }
  .title {
    color: #111111;
    line-height: 40rpx;
    text-align: left;
  }
  .desc {
    color: #6d6d6d;
    font-size: 26rpx;
    line-height: 36rpx;
  }
</style>
