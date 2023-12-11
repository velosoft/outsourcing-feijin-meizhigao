<template>
    <view class="flex-col">
      <view class="flex-row items-center">
        <image
          class="shrink-0 image_7"
          src="https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=b23f4993357ee315653debdff8758408.png"
        />
        <view class="flex-col flex-1 group_3 ml-12">
          <view class="flex-col">
            <view class="flex-row items-center self-stretch">
              <text class="font_2 text_4">￥</text>
              <text class="font_4 text_7">秒杀价</text>
              <text class="font_3 text_5">200</text>
              <text class="font_3 text_6">.00</text>
            </view>
            <text class="self-start font_4 text_8 mt-15">库存：999件</text>
          </view>
          <text class="font_4 text_9 mt-22">请选择规格 / 已选：3层80长*40宽*170高</text>
        </view>
      </view>
      <view class="flex-col group_4">
        <text class="self-start font_4 text_10">请选择规格</text>
        <view class="flex-col items-start self-stretch mt-18">
          <view class="flex-col justify-start text-wrapper">
            <text class="font_4 text_11">3层60长*40宽*170高可加高加层</text>
          </view>
          <view class="flex-col justify-start text-wrapper_2 mt-9">
            <text class="font_4 text_12">3层80长*40宽*170高可加高加层</text>
          </view>
          <view class="flex-col justify-start text-wrapper_2 mt-9">
            <text class="font_4 text_12">3层80长*40宽*170高可加高加层</text>
          </view>
        </view>
      </view>
      <view class="flex-row justify-between group_5">
        <text class="self-start font_2 text_13">购买数量</text>
        <u-number-box class="group_6" v-model="v_model"></u-number-box>
      </view>
    </view>
    </template>
    
    <script>
    export default {
      components: {},
      props: {},
      data() {
        return {
          v_model: '',
        };
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .mt-15 {
      margin-top: 30rpx;
    }
    .mt-9 {
      margin-top: 18rpx;
    }
    .image_7 {
      width: 180rpx;
      height: 180rpx;
    }
    .group_3 {
      margin-right: 22rpx;
      .text_4 {
        margin-left: 76rpx;
        color: #bb3e0c;
        line-height: 22.86rpx;
      }
      .text_7 {
        margin-left: -110rpx;
        color: #bb3e0c;
        line-height: 24.2rpx;
      }
      .font_3 {
        font-size: 32rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 24.18rpx;
        font-weight: 700;
        color: #bb3e0c;
      }
      .text_5 {
        margin-left: 28rpx;
        line-height: 24.26rpx;
      }
      .text_6 {
        margin-left: 2rpx;
        line-height: 24.32rpx;
      }
      .text_8 {
        font-size: 28rpx;
        line-height: 25.92rpx;
      }
      .text_9 {
        color: #a7a7a7;
        font-size: 24rpx;
        line-height: 22.32rpx;
      }
    }
    .group_4 {
      margin-top: 57.52rpx;
      .text_10 {
        color: #030305;
        font-size: 28rpx;
        line-height: 26.06rpx;
      }
      .text-wrapper {
        padding: 9.84rpx 0 25.98rpx;
        border-radius: 32rpx;
        width: 450rpx;
        height: 64rpx;
        border-left: solid 2rpx #b09053;
        border-right: solid 2rpx #b09053;
        border-top: solid 2rpx #b09053;
        border-bottom: solid 2rpx #b09053;
        .text_11 {
          margin-left: 30rpx;
          margin-right: 20rpx;
          color: #b09053;
        }
      }
      .text-wrapper_2 {
        padding: 9.84rpx 0 25.98rpx;
        border-radius: 32rpx;
        width: 450rpx;
        height: 64rpx;
        border-left: solid 2rpx #e1e4eb;
        border-right: solid 2rpx #e1e4eb;
        border-top: solid 2rpx #e1e4eb;
        border-bottom: solid 2rpx #e1e4eb;
        .text_12 {
          margin-left: 30rpx;
          margin-right: 20rpx;
        }
      }
    }
    .font_4 {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 24.18rpx;
      color: #6c6c6c;
    }
    .font_4 {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 24.18rpx;
      color: #6c6c6c;
    }
    .font_4 {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 24.18rpx;
      color: #6c6c6c;
    }
    .font_4 {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 24.18rpx;
      color: #6c6c6c;
    }
    .group_5 {
      margin-top: 120rpx;
      .text_13 {
        color: #030305;
        font-size: 30rpx;
        line-height: 27.96rpx;
      }
      .group_6 {
        margin-right: 15rpx;
      }
    }
    .font_2 {
      font-size: 32rpx;
      font-family: 苹方;
    }
    </style>