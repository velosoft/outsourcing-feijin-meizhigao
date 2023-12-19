<template>
  <view class="flex-col justify-start section_2">
    <view class="flex-row justify-between section_3">
      <view class="flex-col self-start group_3">
        <text class="font_2 text_8">邀请好友，赢得更多奖励</text>
        <view class="flex-row mt-25">
          <image class="image_10" src="../../../../../static/images/0a06f9e2fb4b537e1a0b60e991e5abe2.png" />
          <text class="self-start font_3 text_9 ml-4">今天喝生椰拿铁</text>
        </view>
      </view>
      <view class="flex-col items-center self-center">
        <image class="image_9" src="../../../../../static/images/fcbf4355ef260d13a9f53e26fd0b787d.png" />
        <text class="text_10">长按识别二维码</text>
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
  .mt-25 {
    margin-top: 50rpx;
  }
  .section_2 {
    padding: 804rpx 0 24rpx;
    background-image: url('../../../../../static/images/0c152fee3d0954f3962db889b5f87396.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .section_3 {
      margin: 0 24rpx;
      padding: 24rpx;
      backdrop-filter: blur(34rpx);
      background-image: url('../../../../../static/images/9e194e8f59ab59633f1018db752df656.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .group_3 {
        margin-top: 14.24rpx;
        .font_2 {
          font-size: 36rpx;
          font-family: 苹方;
          font-weight: 700;
          color: #ffffff;
        }
        .text_8 {
          line-height: 36.64rpx;
        }
        .image_10 {
          width: 48rpx;
          height: 48rpx;
        }
        .font_3 {
          font-size: 26rpx;
          font-family: 苹方;
          line-height: 24.24rpx;
          color: #ffffff;
        }
        .text_9 {
          margin-top: 6.16rpx;
          font-size: 24rpx;
          line-height: 22.2rpx;
        }
      }
      .image_9 {
        border-radius: 8rpx;
        width: 122rpx;
        height: 122rpx;
      }
      .text_10 {
        color: #ffffff;
        font-size: 16rpx;
        font-family: 苹方;
        line-height: 14.88rpx;
      }
    }
  }
</style>