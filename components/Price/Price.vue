<template>
  <view class="flex-row items-start">
    <text class="price-currency mt-2">￥</text>
    <text class="price-interger">{{ getPriceIntergerPart(price) }}</text>
    <text class="price-decimal mt-2">.{{ getPriceDecimalPart(price) }}</text>
  </view>
</template>

<script>
  import { getPriceIntergerPart, getPriceDecimalPart } from '@/utils/utils.js';
  export default {
    components: {},
    props: {
      price: { type: Number, default: 0 },
    },
    data() {
      return {};
    },

    methods: {
      getPriceIntergerPart(val) {
        return getPriceIntergerPart(val);
      },
      getPriceDecimalPart(val) {
        return getPriceDecimalPart(val);
      },
    },
  };
</script>

<style scoped lang="less">
  .price-currency {
    font-size: 20rpx;
    font-family: 苹方;
    font-weight: 500;
    line-height: 20rpx;
  }
  .price-interger {
    font-size: 32rpx;
    font-family: HarmonyOS Sans SC;
    line-height: 32rpx;
    font-weight: 700;
  }

  .price-decimal {
    font-size: 24rpx;
    font-family: HarmonyOS Sans SC;
    font-weight: 700;
    line-height: 24rpx;
  }
</style>
