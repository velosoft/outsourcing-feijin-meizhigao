<template>
  <view class="flex-col footer-wrap">
    <view class="fixed-bottom-safe flex-row justify-between items-center wrap">
      <view class="flex-col">
        <view class="flex-row items-center self-stretch">
          <text class="tatal">合计</text>
          <text class="price">￥599.00</text>
        </view>
        <text class="self-start coupon-num mt-8">已优惠￥85.00</text>
      </view>
      <u-button text="确认提交" type="primary" shape="circle" @click="onClick"></u-button>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: { goodsPrice: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },
  
    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/cart/pay/pay/pay' });
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .footer-wrap {
    height: 112rpx;
    .wrap {
      padding: 16rpx 32rpx;
      background-color: #ffffff;
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      box-shadow: 0rpx -6rpx 10rpx #0000000a;
      z-index:1000;
      .tatal {
        color: #030305;
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
      }
      .price {
        color: #030305;
        font-size: 36rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 36rpx;
      }
      .coupon-num {
        color: #999999;
        font-size: 22rpx;
        font-family: 苹方;
        line-height: 22rpx;
      }
    }
  }
  </style>