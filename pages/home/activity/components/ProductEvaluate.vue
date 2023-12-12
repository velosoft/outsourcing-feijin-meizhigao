<template>
  <view class="flex-col container">
    <view class="flex-row items-center header justify-between">
      <text class="title">商品评价（20）</text>
      <view class="flex-row items-center" @click="goEvaluate">
        <text class="self-center com-font more-text">查看全部</text>
        <image
          class="icon-arrow ml-4"
          src="/static/images/icon_arrow_05.png"
        />
      </view>
    </view>
    <view class="flex-col evaluate-group">
      <view class="flex-col list-item mt-28" v-for="(item, index) in items" :key="index">
        <view class="flex-row">
          <image
            class="avator"
            src="/static/images/avator.png"
          />
          <text class="com-font nick-name ml-8">朱**</text>
        </view>
        <view class="flex-col">
          <text class="evaluate-text line-clamp-two">不错，真的特别好，服务很到位施工效果也很不错，妥妥的五星好评，还会回购</text>
        </view>
        <text class="product-type product-type-text">厨房定制收纳服务：按小时核算（元/m）</text>
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
  
    methods: {
      goEvaluate(args) {
        // 事件处理方法
        uni.navigateTo({
          url: '/pages/home/activity/evaluate',
        });
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .container {
    background-color: #ffffff;
    border-radius: 12rpx;
    .header {
      padding: 32rpx 28rpx;
      border-bottom: solid 1.6rpx #efefef;
      .title {
        color: #030305;
        font-size: 32rpx;
        font-family: 苹方;
        line-height: 32rpx;
      }
      .more-text {
        color: #a7a7a7;
      }
      .icon-arrow {
        width: 24rpx;
        height: 24rpx;
      }
    }
    .evaluate-group {
      padding: 30rpx 30rpx;
      .list-item {
        &:first-child {
          margin-top: 0;
        }
        .avator {
          border-radius: 32rpx;
          width: 60rpx;
          height: 60rpx;
        }
        .nick-name {
          margin-top: 8rpx;
        }
        .evaluate-text {
          width: 650rpx;
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 46rpx;
          color: #030305;
        }
        .product-type {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 20rpx;
          color: #a7a7a7;
        }
        .product-type-text {
          margin-top: 24rpx;
        }
      }
    }
    .com-font {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #030305;
    }
  }
  </style>