<template>
  <view class="flex-row item-padding list-item items-center">
    <view class="flex-col items-center expired-status justify-center"><text class="expired-text">失效</text></view>
    <image class="thumb" src="/static/images/mock_thumb_07.png" />
    <view class="flex-col flex-1 good-con justify-between">
      <view class="flex-col items-start">
        <text class="line-clamp-one goods-title">国风系列置物架碳钢多层储物架</text>
        <text class="Specification mt-16">规格：3层80长x40宽x170高</text>
      </view>
      <view class="flex-row mt-28 items-start">
        <text class="currency">￥</text>
        <text class="price">40</text>
        <text class="decimal decimal-text">.00</text>
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
  .item-padding {
    padding: 0 12rpx;
    .expired-status {
      background-color: #d3d3d3;
      border-radius: 16rpx;
      width: 60rpx;
      height: 36rpx;
      .expired-text {
        font-size: 20rpx;
        font-family: PingFangSC;
        line-height: 20rpx;
        color: #ffffff;
      }
    }
    .thumb {
      margin-left: 12rpx;
      width: 180rpx;
      height: 180rpx;
    }
    .good-con {
      margin-left: 24rpx;
      margin-right: 16rpx;
      .goods-title {
        font-size: 28rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
        color: #030305;
      }
      .Specification {
        font-size: 24rpx;
        font-family: PingFangSC;
        line-height: 24rpx;
        color: #a7a7a7;
      }
      .currency {
        font-size: 20rpx;
        font-family: PingFangSC;
        line-height: 20rpx;
        color: #030305;
      }
      .price {
        font-size: 32rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 32rpx;
        font-weight: 700;
        color: #030305;
      }
      .decimal {
        font-size: 24rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 24rpx;
        font-weight: 700;
        color: #030305;
      }
      .decimal-text {
        margin-left: 4rpx;
      }
    }
  }
  .list-item {
    &:first-child {
      margin-top: 0;
    }
  }
  </style>