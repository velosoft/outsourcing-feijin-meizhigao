<template>
  <view class="flex-col">
    <view class="flex-row" v-if="false">
      <view class="flex-row ai-background-image-wrapper">
        <image class="thumb-wrap" src="/static/images/mock_serve_item_thumb_02.png" />
        <view class="flex-col flex-1 self-start relative group_8 ml-12">
          <text class="line-clamp-two title">厨房收纳服务厨房收纳服务厨房收纳服务厨房收纳服务</text>
          <view class="flex-row mt-10">
            <view class="flex-col tag-wrap"><text class="tag-text text_11">新品上市</text></view>
            <view class="flex-col tag-wrap ml-6"><text class="tag-text text_3">好评推荐</text></view>
          </view>
          <view class="flex-row items-baseline mt-10">
            <text class="price-currency">秒杀价</text>
            <text class="price-currency">￥</text>
            <text class="price-num text_12">40</text>
            <text class="price-decimal text_13">.00</text>
          </view>
        </view>
      </view>
      <view class="flex-col items-center text-wrapper_2 ml-12"><text class="text_9">删除</text></view>
    </view>
    <view class="flex-col" v-if="true">
      <view class="flex-row item-wrap">
        <view class="flex-col relative thumb-wrap">
          <image class="thumb-wrap" src="/static/images/mock_serve_item_thumb.png" />
          <view class="flex-col items-center mask mask-pos">
            <view class="flex-col items-center mask-bg justify-center"><text class="mask-text">失效</text></view>
          </view>
        </view>
        <view class="flex-col flex-1 ml-12">
          <text class="line-clamp-two title title-height">厨房收纳服务厨房收纳服务厨房收纳服务厨房收纳服务</text>
          <view class="flex-row list mt-10">
            <view class="tag-wrap ml-6 flex-col justify-center" v-for="(item, index) in items" :key="index">
              <text class="tag-text">新品上市</text>
            </view>
          </view>
          <view class="flex-row items-baseline self-stretch mt-10">
            <text class="price-currency price-currency-text">￥</text>
            <text class="price-num price-num-text">40</text>
            <text class="price-decimal price-decimal-text">.00</text>
          </view>
        </view>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null],
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .ai-background-image-wrapper {
    margin-left: -64rpx;
    overflow: hidden;
    width: 686rpx;
    height: 200.88rpx;
    .group_8 {
      margin-right: 16rpx;
      margin-top: -8rpx;
      .text_12 {
        color: #bb3e0c;
      }
      .text_13 {
        margin-left: 4rpx;
        color: #bb3e0c;
      }
    }
  }
  .text-wrapper_2 {
    padding: 80rpx 0 96rpx;
    background-color: #bb3e0c;
    border-radius: 8rpx 0rpx 0rpx 8rpx;
    width: 98rpx;
    height: 198rpx;
    .text_9 {
      color: #ffffff;
      font-size: 28rpx;
      font-family: 苹方;
      font-weight: 700;
      line-height: 28rpx;
    }
  }
  .item-wrap {
    margin: 0 32rpx;
    .title-height {
      min-height: 88rpx;
    }
    .list {
      margin-left: -12rpx;
    }
    .price-currency-text {
      color: #030305;
    }
    .price-num-text {
      color: #030305;
    }
    .price-decimal-text {
      margin-left: 4rpx;
      color: #030305;
    }
  }
  .thumb-wrap {
    width: 198rpx;
    height: 198rpx;
    .mask {
      padding: 60rpx 0;
      background-color: #00000066;
      border-radius: 20rpx;
      width: 198rpx;
      .mask-bg {
        padding: 28rpx 0 28rpx;
        background-color: #bcbcbccc;
        border-radius: 50%;
        width: 78rpx;
        .mask-text {
          color: #ffffff;
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
        }
      }
    }
    .mask-pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  .thumb-wrap {
    width: 198rpx;
    height: 198rpx;
    .mask {
      padding: 60rpx 0;
      background-color: #00000066;
      border-radius: 20rpx;
      width: 198rpx;
      .mask-bg {
        padding: 28rpx 0 28rpx;
        background-color: #bcbcbccc;
        border-radius: 50%;
        width: 78rpx;
        .mask-text {
          color: #ffffff;
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
        }
      }
    }
    .mask-pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  .title {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 44rpx;
    color: #030305;
  }
  .tag-wrap {
    padding: 0 8rpx;
    height: 32rpx;
    background: #faf9f5;
    border-radius: 4rpx;
    .tag-text {
      font-size: 20rpx;
      font-family: 苹方;
      line-height: 20rpx;
      color: #b1a76e;
    }
    .text_11 {
      margin: 0 8rpx;
    }
    .text_3 {
      margin: 0 8rpx;
    }
  }
  .price-currency {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    font-weight: 700;
    color: #bb3e0c;
  }
  .price-num {
    font-size: 32rpx;
    font-family: HarmonyOS Sans;
    line-height: 32rpx;
    font-weight: 700;
  }
  .price-decimal {
    font-size: 20rpx;
    font-family: HarmonyOS Sans;
    line-height: 20rpx;
    font-weight: 700;
  }
  </style>