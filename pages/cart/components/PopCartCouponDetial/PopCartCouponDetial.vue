<template>
    <view class="flex-col wrap">
      <view class="flex-row justify-between items-center">
        <text class="label">课程总额</text>
        <text class="value">￥1000.00</text>
      </view>
      <view class="flex-row justify-between items-center mt-28">
        <text class="label">活动优惠</text>
        <text class="value">-￥80.00</text>
      </view>
      <view class="flex-col mt-28">
        <view class="flex-col list-item mt-10" v-for="(item, index) in items" :key="index">
          <view class="flex-row">
            <image class="thumb" src="/static/images/mock_thumb_09.png" v-for="(item, index) in items_1" :key="index" />
          </view>
          <view class="flex-row mt-7">
            <view class="flex-col">
              <view class="flex-col justify-start tag-normal" v-if="true">
                <text class="tag-text tag-text-normal">满100减10</text>
              </view>
              <view class="flex-col justify-start tag-plain" v-if="false">
                <text class="tag-text tag-text-plain">满100减10</text>
              </view>
            </view>
            <text class="self-start full-discount-text ml-6">小计:￥600.00，已减￥60.00</text>
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
          items_1: [null, null],
          items: [null, null],
        };
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .mt-7 {
      margin-top: 14rpx;
    }
    .wrap {
      padding: 63.2rpx 28rpx 56rpx 32rpx;
      background-color: #ffffff;
      border-radius: 20rpx 20rpx 0rpx 0rpx;
      .label {
        font-size: 28rpx;
        font-family: 苹方;
        color: #6c6c6c;
      }
      .value {
        font-size: 30rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        color: #030305;
      }
      .list-item {
        margin-right: 4rpx;
        padding: 24rpx 24rpx 18rpx;
        background: #f8f8f8;
        border-radius: 12rpx;
        &:first-child {
          margin-top: 0;
        }
        .thumb {
          width: 120rpx;
          height: 120rpx;
        }
        .tag-normal {
          padding: 2.8rpx 0 14.78rpx;
          background-color: #fdeee9;
          border-radius: 8rpx;
          .tag-text-normal {
            margin-left: 16rpx;
            margin-right: 4rpx;
          }
        }
        .tag-plain {
          padding-bottom: 14.78rpx;
          border-radius: 8rpx;
          border-left: solid 1rpx #bb3e0c;
          border-right: solid 1rpx #bb3e0c;
          border-top: solid 1rpx #bb3e0c;
          border-bottom: solid 1rpx #bb3e0c;
          .tag-text-plain {
            margin-left: 14rpx;
            margin-right: 4rpx;
          }
        }
        .tag-text {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 18.42rpx;
          font-weight: 700;
          color: #bb3e0c;
        }
        .full-discount-text {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24.08rpx;
          color: #030305;
        }
      }
    }
    </style>