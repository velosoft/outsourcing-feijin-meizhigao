<template>
    <view class="flex-col section_6">
      <view class="flex-row items-center group_11">
        <text class="text_29">商品评价（20）</text>
        <view class="flex-row shrink-0 ml-136" @click="goEvaluate">
          <text class="self-center font_10 text_2">查看全部</text>
          <image
            class="shrink-0 self-start image_9 ml-4"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=b40067afde272c07f0ec5542215fa1a6.png"
          />
        </view>
      </view>
      <view class="flex-col group_3">
        <view class="flex-col group_1 list-item mt-29" v-for="(item, index) in items" :key="index">
          <view class="flex-row">
            <image
              class="image_11"
              src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=a419047c84e020f7dac9a202bec97728.png"
            />
            <text class="self-start font_10 text_30 ml-10">朱**</text>
          </view>
          <view class="flex-col justify-start">
            <text class="font_12">不错，真的特别好，服务很到位施工效果也很不错，妥妥的五星好评，还会回购</text>
          </view>
          <text class="font_13 text_33">厨房定制收纳服务：按小时核算（元/m）</text>
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
        goEvaluate(){
            uni.navigateTo({
                url: '/pages/home/activity/evaluate'
            })
        }
      },
    };
    </script>
    
    <style scoped lang="less">
    .ml-136 {
      margin-left: 272rpx;
    }
    .mt-29 {
      margin-top: 58rpx;
    }
    .section_6 {
      padding-bottom: 34.48rpx;
      background-color: #ffffff;
      border-radius: 12rpx;
      .group_11 {
        padding: 28.88rpx 26rpx 33.4rpx 30rpx;
        border-bottom: solid 1.6rpx #efefef;
        .text_29 {
          color: #030305;
          font-size: 32rpx;
          font-family: 苹方;
          line-height: 32rpx;
        }
        .text_2 {
          color: #a7a7a7;
        }
        .image_9 {
          margin-top: 10.48rpx;
          width: 24rpx;
          height: 24rpx;
        }
      }
      .group_3 {
        padding: 35rpx 27rpx 0 30rpx;
        .group_1 {
          margin-right: 27rpx;
          .image_11 {
            border-radius: 30rpx;
            width: 60rpx;
            height: 60rpx;
          }
          .text_30 {
            margin-top: 7.52rpx;
          }
          .font_12 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 46rpx;
            color: #030305;
          }
          .font_13 {
            font-size: 20rpx;
            font-family: 苹方;
            line-height: 20rpx;
            color: #a7a7a7;
          }
          .text_33 {
            margin-top: 21.26rpx;
          }
        }
        .list-item {
          &:first-child {
            margin-top: 0;
          }
        }
      }
      .font_10 {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #030305;
      }
    }
    </style>