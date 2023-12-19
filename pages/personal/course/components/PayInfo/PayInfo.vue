<template>
  <view class="flex-col container">
    <view class="flex-col type-cell">
      <view class="flex-row justify-between items-center">
        <text class="label">课程总数</text>
        <text class="value">{{payInfo.courseNum}}</text>
      </view>
      <view class="flex-row justify-between items-center gap-top">
        <text class="label">课程总价</text>
        <text class="value heavy-font">{{payInfo.totalPrice}}</text>
      </view>
      <view class="flex-row justify-between items-center gap-top">
        <text class="label">积分抵扣</text>
        <text class="value">{{payInfo.pointsDiscount}}</text>
      </view>
      <view class="flex-row justify-between items-center gap-top">
        <text class="label">收纳币抵扣</text>
        <text class="value">{{payInfo.currencyDiscount}}</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center footer mt-20">
      <text class="price-label">实付款</text>
      <text class="price-value">{{payInfo.actualCost}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      payInfo: {
        type: Object,
        default: () => ({
          courseNum: '2',
          totalPrice: '￥400.00',
          pointsDiscount: '-￥35.00',
          currencyDiscount: '-￥20.00',
          actualCost: '￥305.00',
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
    padding: 0 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .type-cell {
      padding: 32rpx 0;
      border-bottom: 1rpx solid #ebebeb;
      .label {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #8c8f95;
      }
      .value {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #3c3d41;
      }
      .gap-top {
        margin-top: 48rpx;
        .heavy-font {
          font-weight: 700;
        }
      }
    }
    .footer {
      margin-bottom: 40rpx;
      .price-label {
        color: #2d2e32;
        font-size: 28rpx;
        font-family: 苹方;
        font-weight: 700;
        line-height: 28rpx;
      }
      .price-value {
        color: #bb3e0c;
        font-size: 36rpx;
        font-family: 苹方;
        font-weight: 700;
        line-height: 36rpx;
      }
    }
  }
</style>