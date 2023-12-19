<template>
  <view class="flex-col justify-start relative">
    <image class="coup_bg pos" src="/static/images/bg_coupon_unused.png" />
    <view class="flex-row items-center relative">
      <view class="flex-col shrink-0 price-wrap items-center">
        <view class="flex-row items-baseline price-num">
          <text class="price">{{item.amount}}</text>
          <text class="currency currency_text ml-4">元</text>
        </view>
        <text class="font mt-8">{{"满" + item.triggerCondition +"元使用"}}</text>
      </view>
      <view class="shrink-0 line"></view>
      <view class="flex-row justify-center items-center flex-1 coupon-right">
        <view class="flex-col">
          <view class="flex-col items-start self-stretch">
            <text class="currency title">{{item.title}}</text>
            <view class="flex-col text-wrapper mt-8 items-center">
              <text class="coupon-time coupon-scope">{{item.applicableTo}}</text>
            </view>
          </view>
          <text class="self-start coupon-time mt-20">{{item.validity.start + "-" + item.validity.end}}</text>
        </view>
        <view class="flex-col justify-start btn-wrap ml-16">
          <u-button class="coupon-btn" text="立即使用" type="primary" size="mini" shape="circle"></u-button>
        </view>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {
      item: {
        type: Object,
        default: () => ({
          status: 'pending-use',
          amount: 22,
          triggerCondition: 180,
          title: '餐饮优惠券',
          validity: { start: '2023.06.25', end: '2023.07.31' },
          applicableTo: '适用餐饮服务',
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
  .coup_bg {
    width: 702rpx;
    height: 230rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .price-wrap {
    padding: 32rpx 36rpx 48rpx;
    width: 256rpx;
    .price-num {
      margin-right: 8rpx;
      padding-left: 4rpx;
      .price {
        color: #ff4d1d;
        font-size: 76rpx;
        font-family: '.AppleSystemUIFont';
        line-height: 90rpx;
      }
      .currency_text {
        color: #ff4d1d;
      }
    }
    .font {
      color: #ff4d1d;
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
    }
  }
  .line {
    background-image: repeating-linear-gradient(
      0deg,
      #e8e8e8,
      #e8e8e8 3.4090909090909087%,
      transparent 3.4090909090909087%,
      transparent 6.8181818181818175%
    );
    width: 2rpx;
    height: 176rpx;
  }
  .coupon-right {
    padding: 32rpx 0 32rpx 8rpx;
    .title {
      color: #000000;
      font-weight: 500;
    }
    .text-wrapper {
      border-radius: 8rpx;
      border: solid 1rpx #9e9ea0;
      .coupon-scope {
        margin: 0 8rpx;
      }
    }
    .coupon-time {
      font-size: 20rpx;
      font-family: 'PingFang SC';
      line-height: 28rpx;
      color: #8c8f95;
    }
    .btn-wrap {
      width: 136rpx;
    }
  }
  .currency {
    font-size: 32rpx;
    font-family: 'PingFang SC';
    line-height: 44rpx;
  }
  </style>