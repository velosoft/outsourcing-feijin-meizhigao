<template>
  <view class="flex-col wrap">
    <text class="self-start title">我的订单</text>
    <view class="flex-row equal-division menu-top mt-12">
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="/static/images/icon_order_payment.png" />
          <view class="badge-pos" v-if="Wyw74Xzo">
            <u-badge :isDot="true" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12">待付款</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="/static/images/icon_order_delivered.png" />
          <view class="badge-pos" v-if="Wyw74Xzo">
            <u-badge :isDot="true" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12">待发货</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="/static/images/icon_order_recipt.png" />
          <view class="badge-pos" v-if="Wyw74Xzo">
            <u-badge :value="0" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12">待收货</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="/static/images/icon_order_comment.png" />
          <view class="badge-pos" v-if="Wyw74Xzo">
            <u-badge :value="0" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12">待评价</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="/static/images/icon_order_refund.png" />
          <view class="badge-pos" v-if="Wyw74Xzo">
            <u-badge class="section" :value="0" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12">退款/售后</text>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    padding: 32rpx 0 16rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 8rpx 8rpx -6rpx #b1b1b180;
    border-radius: 20rpx;
    .title {
      margin-left: 28rpx;
      color: #000000;
      font-size: 32rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 44rpx;
    }
    .equal-division {
      align-self: stretch;
      .item-flex {
        flex: 1 1 134rpx;
        .icon {
          width: 48rpx;
          height: 48rpx;
        }
        .badge-pos {
          position: absolute;
          right: -4rpx;
          top: -4rpx;
          .section {
            background-color: #ff0000;
            border-radius: 50%;
            width: 30rpx;
            height: 30rpx;
            border: solid 2rpx #ffffff;
          }
        }
        .value {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #2d2e32;
        }
      }
      .equal-division-item {
        padding: 8rpx 0;
      }
    }
    .menu-top {
      padding: 0 16rpx;
    }
  }
  </style>