<template>
  <view class="flex-col items-center relative">
    <image class="image" src="/static/images/bg_coupon_used.png" />
    <view class="flex-row items-center pos">
      <view class="flex-col coupon-left items-center">
        <view class="flex-row items-baseline price-wrap">
          <text class="price-num">{{item.amount}}</text>
          <text class="currency ml-4">元</text>
        </view>
        <text class="coupon-use mt-8">{{"满" + item.triggerCondition +"元使用"}}</text>
      </view>
      <view class="lione"></view>
      <view class="flex-col flex-1 coupon-right">
        <view class="flex-col items-start">
          <text class="currency heavy-text">{{item.title}}</text>
          <view class="flex-col justify-start text-wrapper mt-8 items-center">
            <text class="time price-scope">{{item.applicableTo}}</text>
          </view>
        </view>
        <text class="time time-text mt-20">{{item.validity.start + "-" + item.validity.end}}</text>
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
          status: 'used',
          amount: 28,
          triggerCondition: 220,
          title: '家电产品折扣券',
          validity: { start: '2023.06.02', end: '2023.06.20' },
          applicableTo: '适用家电产品',
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
  .image {
    width: 702rpx;
    height: 230rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .coupon-left {
      padding: 32rpx 36rpx 48rpx;
      width: 256rpx;
      .price-wrap {
        margin-right: 8rpx;
        padding-left: 4rpx;
        .price-num {
          color: #4c4c4c;
          font-size: 76rpx;
          font-family: '.AppleSystemUIFont';
          line-height: 90rpx;
        }
      }
      .coupon-use {
        color: #4c4c4c;
        font-size: 28rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
      }
    }
    .lione {
      background-image: repeating-linear-gradient(
        0deg,
        #cccccc,
        #cccccc 3.4090909090909087%,
        transparent 3.4090909090909087%,
        transparent 6.8181818181818175%
      );
      width: 2rpx;
      height: 176rpx;
    }
    .coupon-right {
      padding: 32rpx;
      .heavy-text {
        font-weight: 500;
      }
      .text-wrapper {
        border-radius: 8rpx;
        border: solid 1rpx #b6b6b6;
        .price-scope {
          margin: 0 8rpx;
          color: #b6b6b6;
        }
      }
      .time {
        font-size: 20rpx;
        font-family: 'PingFang SC';
        line-height: 28rpx;
      }
      .time-text {
        color: #cccccc;
      }
    }
    .currency {
      font-size: 32rpx;
      font-family: 'PingFang SC';
      line-height: 44rpx;
      color: #4c4c4c;
    }
  }
  </style>