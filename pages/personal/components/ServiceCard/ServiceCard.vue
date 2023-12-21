<template>
  <view class="flex-col wrap">
    <text class="title-left">我的服务</text>
    <view class="self-stretch grid mt-8">
      <view class="flex-col items-center grid-item" @click="onClick">
        <image class="icon" src="/static/images/icon_menu_course.png" />
        <text class="label mt-8">课程订单</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_1">
        <image class="icon" src="/static/images/icon_menu_share.png" />
        <text class="label mt-8">分享有礼</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_2">
        <image class="icon" src="/static/images/icon_menu_bonus_coin.png" />
        <text class="label mt-8">分销中心</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_3">
        <image class="icon" src="/static/images/icon_menu_coupon.png" />
        <text class="label mt-8">优惠券</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_4">
        <image class="icon" src="/static/images/icon_menu_collect.png" />
        <text class="label mt-8">我的收藏</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_5">
        <image class="icon" src="/static/images/icon_menu_address.png" />
        <text class="label mt-8">我的地址</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_6">
        <image class="icon" src="/static/images/icon_menu_help.png" />
        <text class="label mt-8">帮助中心</text>
      </view>
      <view class="flex-col items-center grid-item" @click="onClick_7">
        <image class="icon" src="/static/images/icon_menu_settings.png" />
        <text class="label mt-8">设置中心</text>
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
  
    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/course/couresOrder/couresOrder' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/reseller/share/share' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/personal/reseller/reseller/reseller' });
      },
      onClick_3() {
        uni.navigateTo({ url: '/pages/personal/coupon/coupon/coupon' });
      },
      onClick_4() {
        uni.navigateTo({ url: '/pages/personal/collect/collect/collect' });
      },
      onClick_5() {
        uni.navigateTo({ url: '/pages/personal/address/address/address' });
      },
      onClick_6() {
        uni.navigateTo({ url: '/pages/personal/help/help/help' });
      },
      onClick_7() {
        uni.navigateTo({ url: '/pages/personal/settings/settings/settings' });
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    padding: 24rpx 0 8rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .title-left {
      margin-left: 28rpx;
      color: #000000;
      font-size: 32rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 44rpx;
    }
    .grid {
      height: 316rpx;
      display: grid;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      grid-template-columns: repeat(4, minmax(0, 1fr));
      row-gap: 0;
      column-gap: 0;
      .grid-item {
        padding: 12rpx 0;
        .icon {
          width: 80rpx;
          height: 80rpx;
        }
        .label {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #2d2e32;
        }
      }
    }
  }
  </style>