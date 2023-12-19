<template>
  <view class="flex-col wrap">
    <view class="text-wrapper flex-row justify-between items-center">
      <text class="title">我的订单</text>
      <view class="flex-row items-center">
        <text class="value right-text">查看全部</text>
        <image class="shrink-0 image ml-4" src="../../../../static/images/icon_right_arrow_03.png" />
      </view>
    </view>
    <view class="flex-row mt-12 menu-top">
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="../../../../static/images/7fe979251f7dafcb530f4b2596d49243.png" />
          <view class="badge-pos">
            <u-badge :isDot="true" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12_1 mt-12">待付款</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="../../../../static/images/12ec1dba19e79d54e31eb6f9d8600722.png" />
          <view class="badge-pos">
            <u-badge :isDot="true" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12_1 mt-12">待发货</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="../../../../static/images/172e5a93bee3b8835d0b7189ac0fbf39.png" />
          <view class="badge-pos">
            <u-badge :value="0" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12_1 mt-12">待收货</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="../../../../static/images/989c6270b5843d0108306bfb8581a9ce.png" />
          <view class="badge-pos">
            <u-badge :value="0" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12_1 mt-12">待评价</text>
      </view>
      <view class="flex-col item-flex equal-division-item">
        <view class="flex-col self-center relative">
          <image class="icon" src="../../../../static/images/icon_order_refund.png" />
          <view class="badge-pos">
            <u-badge class="section" :value="0" :max="99" type="warning" bgColor="#ff0200" color="#ffffff"></u-badge>
          </view>
        </view>
        <text class="self-center value mt-12_1 mt-12">退款/售后</text>
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
    padding: 32rpx 0 48rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 8rpx 8rpx -6rpx #b1b1b180;
    border-radius: 20rpx;
    .text-wrapper {
      margin: 0 28rpx;
      .title {
        color: #000000;
        font-size: 32rpx;
        font-family: 'PingFang SC';
        font-weight: 500;
        line-height: 44rpx;
      }
      .right-text {
        color: #111111;
        font-size: 26rpx;
        line-height: 36rpx;
      }
      .image {
        width: 10rpx;
        height: 20rpx;
      }
    }
    .menu-top {
      padding: 0 16rpx;
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
        .mt-12_1 {
          margin-top: 24rpx;
        }
      }
      .equal-division-item {
        padding: 8rpx 0;
      }
    }
    .value {
      font-size: 24rpx;
      font-family: 'PingFang SC';
      line-height: 34rpx;
      color: #2d2e32;
    }
  }
</style>