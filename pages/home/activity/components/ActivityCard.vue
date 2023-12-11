<template>
    <view class="flex-col justify-start relative card-wraper">
      <image
        class="image pos"
        src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=e1e497e23cbf595c0862ca63fe359bdd.png"
      />
      <view class="flex-row justify-between items-end relative group">
        <view class="flex-col group_1">
          <view class="flex-row items-start">
            <text class="text_5">168</text>
            <text class="font_3 text_6">￥</text>
            <text class="text_7">.00</text>
            <image
              class="button image_6"
              src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=f54d57835afc18368309e4497681ccdf.png"
            />
          </view>
          <view class="flex-row mt-8">
            <text class="font_5 text_14">原价：￥369.00</text>
            <text class="font_5 ml-9">100人购买</text>
          </view>
        </view>
        <view class="flex-col group_3">
          <text class="self-center font_5 text_8">距秒杀活动结束</text>
          <u-count-down class="group_2 mt-9" :time="time" format="HH:mm:ss">
            <view class="flex-row group_3">
              <view class="flex-col items-center text-wrapper_2 justify-center"><text class="font_3">22</text></view>
              <text class="self-start font_4 ml-3">:</text>
              <view class="flex-col items-center text-wrapper_2 ml-3 justify-center"><text class="font_3">22</text></view>
              <text class="self-start font_4 ml-3">:</text>
              <view class="flex-col items-center ml-3 justify-center text-wrapper_2"><text class="font_3">56</text></view>
              <text class="self-start font_4 ml-3">:</text>
              <view class="flex-col items-center ml-3 justify-center text-wrapper_2"><text class="font_3">23</text></view>
            </view>
          </u-count-down>
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
          time: 108000000,
        };
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .ml-9 {
      margin-left: 18rpx;
    }
    .mt-9 {
      margin-top: 18rpx;
    }
    .ml-3 {
      margin-left: 6rpx;
    }
    .card-wraper {
      padding: 4.96rpx 0 50rpx;
      height: 148rpx;
      .image {
        width: 710rpx;
        height: 148rpx;
      }
      .pos {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .group {
        margin-left: 26rpx;
        margin-right: 24rpx;
        .group_1 {
          margin-bottom: 6.76rpx;
          .text_5 {
            margin-left: 22rpx;
            color: #ffffff;
            font-size: 44rpx;
            font-family: HarmonyOS Sans SC;
            font-weight: 700;
            line-height: 44rpx;
          }
          .text_6 {
            margin-left: -100rpx;
            margin-top: 9.2rpx;
            font-size: 24rpx;
            line-height: 24rpx;
            font-weight: unset;
          }
          .text_7 {
            margin-left: 78rpx;
            margin-top: 6.56rpx;
            color: #ffffff;
            font-size: 28rpx;
            font-family: HarmonyOS Sans SC;
            font-weight: 700;
            line-height: 28rpx;
          }
          .button {
            flex-shrink: 0;
            margin-left: 24rpx;
            margin-top: 17.04rpx;
          }
          .image_6 {
            width: 90rpx;
            height: 36rpx;
          }
          .text_14 {
            text-decoration: line-through;
            opacity: 0.8;
          }
        }
        .group_3 {
          width: 236rpx;
          .text_8 {
            color: #5e4a08;
            font-size: 22rpx;
            line-height: 22rpx;
          }
          .group_2 {
            align-self: stretch;
          }
          .text-wrapper_2 {
            background-color: #bf0a00;
            border-radius: 4rpx;
            width: 44rpx;
            height: 38rpx;
          }
          .font_4 {
            font-size: 26rpx;
            font-family: 苹方;
            line-height: 26rpx;
            font-weight: 700;
            color: #7a4600;
          }
        }
        .font_5 {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 20rpx;
          color: #ffffff;
        }
        .font_3 {
          font-size: 26rpx;
          font-family: 苹方;
          line-height: 26rpx;
          font-weight: 700;
          color: #ffffff;
        }
      }
    }
    </style>