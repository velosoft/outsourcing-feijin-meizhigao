<template>
    <view class="flex-col wrap">
      <view class="flex-col items-center self-stretch empty-con">
        <image class="empty-icon" src="/static/images/icon_empty_cart.png" />
        <text class="empty-hint text">您的购物空空如也~</text>
      </view>
      <u-button class="button" text="去逛逛" type="primary" size="mini" shape="circle" :plain="true"></u-button>
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
      padding: 48rpx 32rpx;
      .empty-con {
        padding: 48rpx 0;
        .empty-icon {
          width: 330rpx;
          height: 184rpx;
        }
        .empty-hint {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 28rpx;
        }
        .text {
          color: #a7a7a7;
        }
      }
      .button {
        align-self: center;
      }
    }
    </style>