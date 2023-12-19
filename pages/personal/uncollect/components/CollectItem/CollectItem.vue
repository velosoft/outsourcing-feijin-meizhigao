<template>
  <view class="flex-col">
    <view class="flex-row line-tabs" v-if="true">
      <view class="flex-row shrink-0 ai-background-image-wrapper">
        <image class="shrink-0 image_8" src="../../../../../static/images/cbb208bcf3e640e0d0e14afc9040071a.png" />
        <view class="flex-col flex-1 self-start relative group_8 ml-12">
          <text class="font_3">厨房收纳服务厨房收纳服务厨房收纳服务厨房收纳服务</text>
          <view class="flex-row mt-10">
            <view class="flex-col justify-start text-wrapper_8"><text class="font_4 text_10">新品上市</text></view>
            <view class="flex-col justify-start text-wrapper_8 ml-6"><text class="font_4 text_10">好评推荐</text></view>
          </view>
          <view class="flex-row items-baseline mt-10">
            <text class="font_8">秒杀价</text>
            <text class="font_8">￥</text>
            <text class="font_5 text_12">40</text>
            <text class="font_7 text_13">.00</text>
          </view>
        </view>
      </view>
      <view class="flex-col justify-start items-center button text-wrapper_2 ml-12">
        <text class="text_9">删除</text>
      </view>
    </view>
    <view class="flex-col justify-start" v-if="false">
      <view class="flex-row group_12">
        <view class="flex-col justify-start items-center shrink-0 relative image_8 section_2">
          <image class="image_8" src="../../../../../static/images/523f83877e002eb6330a67d7f71fdaa4.png" />
          <view class="flex-col justify-start items-center section_3 pos_1">
            <view class="flex-col justify-start items-center text-wrapper_3"><text class="text_18">失效</text></view>
          </view>
        </view>
        <view class="flex-col flex-1 self-start ml-12">
          <text class="self-stretch font_3">厨房收纳服务厨房收纳服务厨房收纳服务厨房收纳服务</text>
          <view class="flex-row group_10 group_9 mt-10">
            <view class="flex-col justify-start text-wrapper_4 text-wrapper_8">
              <text class="font_4 text_10">新品上市</text>
            </view>
            <view class="flex-col justify-start text-wrapper_4 text-wrapper_8 ml-6">
              <text class="font_4 text_10">好评推荐</text>
            </view>
          </view>
          <view class="flex-row items-baseline self-stretch mt-10">
            <text class="font_8 text_7">￥</text>
            <text class="font_5 text_6">40</text>
            <text class="font_7 text_16">.00</text>
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
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .line-tabs {
    overflow-x: hidden;
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
    .button {
      flex-shrink: 0;
      .text_9 {
        color: #ffffff;
        font-size: 28rpx;
        font-family: 苹方;
        font-weight: 700;
        line-height: 28rpx;
      }
    }
    .text-wrapper_2 {
      padding: 80rpx 0 96rpx;
      background-color: #bb3e0c;
      border-radius: 8rpx 0rpx 0rpx 8rpx;
      width: 98rpx;
      height: 198rpx;
    }
  }
  .group_12 {
    margin: 0 32rpx;
    .section_2 {
      margin-top: 8rpx;
    }
    .group_10 {
      align-self: flex-start;
      .text-wrapper_4 {
        flex: 1 1 96rpx;
      }
    }
    .group_9 {
      width: 204rpx;
    }
    .text_7 {
      color: #030305;
    }
    .text_6 {
      color: #030305;
    }
    .text_16 {
      margin-left: 4rpx;
      color: #030305;
    }
  }
  .image_8 {
    width: 198rpx;
    height: 198rpx;
    .section_3 {
      padding: 60rpx 0;
      background-color: #00000066;
      border-radius: 20rpx;
      width: 198rpx;
      .text-wrapper_3 {
        padding: 24rpx 0 32rpx;
        background-color: #bcbcbccc;
        border-radius: 50%;
        width: 78rpx;
        .text_18 {
          color: #ffffff;
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
        }
      }
    }
    .pos_1 {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  .image_8 {
    width: 198rpx;
    height: 198rpx;
    .section_3 {
      padding: 60rpx 0;
      background-color: #00000066;
      border-radius: 20rpx;
      width: 198rpx;
      .text-wrapper_3 {
        padding: 24rpx 0 32rpx;
        background-color: #bcbcbccc;
        border-radius: 50%;
        width: 78rpx;
        .text_18 {
          color: #ffffff;
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
        }
      }
    }
    .pos_1 {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  .font_3 {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 44rpx;
    color: #030305;
  }
  .text-wrapper_8 {
    padding-bottom: 16rpx;
    background-image: url('../../../../../static/images/309208efff6518878d94b6de43efb351.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 32rpx;
  }
  .font_4 {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #b1a76e;
  }
  .text_10 {
    margin: 0 8rpx;
  }
  .text-wrapper_8 {
    padding-bottom: 16rpx;
    background-image: url('../../../../../static/images/309208efff6518878d94b6de43efb351.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 32rpx;
  }
  .font_4 {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #b1a76e;
  }
  .text_10 {
    margin: 0 8rpx;
  }
  .font_8 {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    font-weight: 700;
    color: #bb3e0c;
  }
  .font_5 {
    font-size: 32rpx;
    font-family: HarmonyOS Sans;
    line-height: 32rpx;
    font-weight: 700;
  }
  .font_7 {
    font-size: 20rpx;
    font-family: HarmonyOS Sans;
    line-height: 20rpx;
    font-weight: 700;
  }
</style>