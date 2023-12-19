<template>
  <view class="flex-col wrap">
    <text class="text">我的订单</text>
    <view class="flex-row equal-division group mt-12">
      <view class="flex-col item-gap equal-division-item items-center" v-for="(item, index) in orderMenu" :key="index">
        <view class="flex-col self-center relative">
          <image class="icon" :src="item.icon" />
          <view class="badge-pos" v-if="item.badegStatus">
            <u-badge :value="item.badge" :isDot="true" :max="99" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="title mt-8">{{item.title}}</text>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {
      orderMenu: {
        type: Array,
        default: () => [
          { title: '待付款', icon: '/static/images/icon_order_payment.png', badge: 1, badegStatus: true },
          { title: '待发货', icon: '/static/images/icon_order_delivered.png', badge: 1, badegStatus: true },
          { title: '待收货', icon: '/static/images/icon_order_recipt.png', badge: 1, badegStatus: false },
          { title: '待评价', icon: '/static/images/icon_order_recipt.png', badge: 0, badegStatus: false },
          { title: '退款/售后', icon: '/static/images/icon_order_refund.png', badge: 0, badegStatus: false },
        ],
      },
    },
    data() {
      return {};
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    padding-top: 32rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 8rpx 8rpx -6rpx #b1b1b180;
    border-radius: 20rpx;
    .text {
      margin-left: 28rpx;
      color: #000000;
      font-size: 32rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 44rpx;
    }
    .equal-division {
      align-self: stretch;
      .item-gap {
        flex: 1 1 134rpx;
        align-self: flex-start;
        .icon {
          width: 64rpx;
          height: 64rpx;
        }
        .badge-pos {
          position: absolute;
          right: 4rpx;
          top: 8rpx;
        }
        .title {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #2d2e32;
        }
      }
      .equal-division-item {
        padding: 0 0 16rpx;
      }
    }
    .group {
      padding: 0 16rpx 8rpx;
    }
  }
  </style>