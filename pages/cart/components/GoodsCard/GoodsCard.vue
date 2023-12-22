<template>
    <view class="flex-col wrap">
      <view class="flex-col">
        <view class="flex-row list-item mt-39" v-for="(item, index) in items" :key="index">
          <image class="shrink-0 image_8" src="/static/images/e7b856f0289ae0f7789276da8338b2ff.png" />
          <view class="flex-col flex-1 group_5">
            <text class="self-stretch reserve-fpnt text_9">国风系列置物架碳钢多层储物架</text>
            <text class="self-start font text_5 mt-12">规格：小号 | 黑色</text>
            <view class="flex-row items-center self-stretch mt-12">
              <view class="flex-row group_6">
                <text class="self-center font_4 text_3">40</text>
                <text class="self-center font_5 text_7">￥</text>
                <text class="self-start font_7 text_27">定金</text>
              </view>
              <text class="font_6 text_16 ml-1">.00</text>
            </view>
            <text class="self-start font_8 text_10 mt-12">附加服务：安装服务￥99.00</text>
          </view>
          <text class="self-start font_2 text_8">×1</text>
        </view>
      </view>
      <view class="flex-row justify-between items-center reserve-wrap mt-39">
        <text class="reserve-fpnt reserve-text">预约时间</text>
        <view class="flex-row">
          <text class="self-center reserve-fpnt select-time">请选择预约时间</text>
          <image class="shrink-0 self-start icon-arrow ml-4" src="/static/images/af62b68e20f3b084a3a654edc763f3c3.png" />
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
    .ml-1 {
      margin-left: 2rpx;
    }
    .mt-39 {
      margin-top: 78rpx;
    }
    .wrap {
      padding: 32rpx;
      background-color: #ffffff;
      border-radius: 12rpx;
      .list-item {
        &:first-child {
          margin-top: 0;
        }
        .image_8 {
          width: 180rpx;
          height: 180rpx;
        }
        .group_5 {
          margin-left: 24rpx;
          margin-bottom: 5.08rpx;
          .text_9 {
            line-height: 26.14rpx;
          }
          .font {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 24.26rpx;
            color: #a7a7a7;
          }
          .text_5 {
            line-height: 24rpx;
          }
          .group_6 {
            width: 92rpx;
            .font_4 {
              font-size: 32rpx;
              font-family: HarmonyOS Sans SC;
              line-height: 24.26rpx;
              font-weight: 700;
              color: #bb3e0c;
            }
            .text_3 {
              margin-left: 54rpx;
            }
            .font_5 {
              font-size: 20rpx;
              font-family: 苹方;
              line-height: 14.28rpx;
              color: #bb3e0c;
            }
            .text_7 {
              margin-left: -54rpx;
            }
            .font_7 {
              font-size: 20rpx;
              font-family: 苹方;
              line-height: 18.6rpx;
              font-weight: 700;
              color: #bb3e0c;
            }
            .text_27 {
              margin-left: -60rpx;
              margin-top: 11.92rpx;
            }
          }
          .font_6 {
            font-size: 24rpx;
            font-family: HarmonyOS Sans SC;
            line-height: 18.6rpx;
            font-weight: 700;
            color: #bb3e0c;
          }
          .text_16 {
            line-height: 18.24rpx;
          }
          .font_8 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 18.6rpx;
            color: #6c6c6c;
          }
          .text_10 {
            font-size: 22rpx;
            line-height: 20.44rpx;
          }
        }
        .font_2 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 18.6rpx;
          color: #a7a7a7;
        }
        .text_8 {
          margin: 108.16rpx 6rpx 0 18rpx;
          line-height: 17.14rpx;
        }
      }
      .reserve-wrap {
        padding: 21.52rpx 24rpx 32rpx;
        background-color: #f8f8f8;
        border-radius: 12rpx;
        .reserve-text {
          line-height: 25.96rpx;
        }
        .select-time {
          color: #a7a7a7;
          line-height: 26.04rpx;
        }
        .icon-arrow {
          margin-top: 10.48rpx;
          width: 24rpx;
          height: 24rpx;
        }
      }
      .reserve-fpnt {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 24.26rpx;
        color: #030305;
      }
    }
    </style>