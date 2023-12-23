<template>
  <view class="flex-col wrap">
    <view class="flex-row group justify-between items-center">
      <view class="flex-col">
        <view class="flex-row items-center">
          <image class="icon-address" src="/static/images/icon_address.png" />
          <text class="line-clamp-one text address-text ml-8">东宏国际广场</text>
        </view>
        <view class="flex-col ml-24 mt-4">
          <text class="line-clamp-two address-detial text">广州市天河区天河中山大道190号</text>
          <view class="flex-row items-center mt-4">
            <text class="address-detial">张三</text>
            <text class="address-detial ml-20">15812345678</text>
          </view>
        </view>
      </view>
      <image class="icon-arrow" src="/static/images/icon_right_arrow_06.png" />
    </view>
    <image class="line mt-14 justify-center" src="/static/images/line_address_header.png" />
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
    padding-top: 28rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
    .group {
      margin: 0 22rpx;
      .icon-address {
        width: 28rpx;
        height: 32rpx;
      }
      .text {
        width: 500rpx;
      }
      .address-text {
        color: #030305;
        font-size: 32rpx;
        font-family: PingFangSC;
        line-height: 44rpx;
      }
      .address-detial {
        font-size: 24rpx;
        font-family: PingFangSC;
        color: #a7a7a7;
        line-height: 34rpx;
      }
      .icon-arrow {
        width: 20rpx;
        height: 20rpx;
      }
    }
    .line {
      width: 678rpx;
      height: 4rpx;
      margin: 28rpx 10rpx 0;
    }
  }
  </style>