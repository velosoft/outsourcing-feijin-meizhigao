<template>
    <view class="flex-col section_5 group_15">
      <view class="flex-row">
        <text class="font_9">运费</text>
        <text class="font_10 ml-16">免运费</text>
      </view>
      <view class="flex-row justify-between group_9" @click="">
        <view class="flex-row self-center">
          <text class="font_9">选择</text>
          <text class="font_10 ml-16">请选择服务规格</text>
        </view>
        <image
          class="image_9"
          src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=362601dc30c420cb2df46fc55c598b89.png"
        />
      </view>
      <view class="flex-row items-center group_10">
        <text class="font_9">服务</text>
        <view class="flex-row equal-division_2 ml-4">
          <view class="flex-row equal-division-item_2">
            <image
              class="shrink-0 self-center image_10"
              src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=3a473426e80ed869dbc5849f601a0483.png"
            />
            <text class="self-start font_11 ml-8">官方自营</text>
          </view>
          <view class="flex-row equal-division-item_3">
            <image
              class="shrink-0 self-center image_10"
              src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=3a473426e80ed869dbc5849f601a0483.png"
            />
            <text class="self-start font_11 ml-8">支持退换</text>
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
        return {};
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .section_5 {
      padding: 32rpx 28rpx 24rpx;
      background-color: #ffffff;
      border-radius: 12rpx;
      .font_9 {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #a7a7a7;
      }
      .font_10 {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #030305;
      }
      .group_9 {
        margin-top: 88rpx;
        .image_9 {
          width: 24rpx;
          height: 24rpx;
        }
      }
      .group_10 {
        margin-top: 64rpx;
        .equal-division_2 {
          align-self: stretch;
          .equal-division-item_2 {
            padding: 8rpx 20rpx;
          }
          .equal-division-item_3 {
            padding: 8rpx 16rpx;
          }
          .image_10 {
            width: 30rpx;
            height: 30rpx;
          }
          .font_11 {
            font-size: 28rpx;
            font-family: 苹方;
            line-height: 28rpx;
            color: #b09053;
          }
        }
      }
    }
    .group_15 {
    }
    </style>