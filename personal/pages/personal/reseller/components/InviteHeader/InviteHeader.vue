<template>
  <view class="flex-col">
    <view class="flex-col items-center">
      <text class="title">邀请好友注册得收纳币奖励</text>
      <text class="desc desc-opactiy desc-text mt-16">每邀请一位好友下单，即可获得收纳币奖励</text>
    </view>
    <view class="flex-row justify-between step-wrap">
      <view class="flex-col items-center">
        <image class="icon-step" src="/personal/static/images/icon_link.png" />
        <text class="desc desc-opactiy mt-4">分享好友链接</text>
      </view>
      <image class="self-start icon-arrow" src="/personal/static/images/icon_right_arrow.png" />
      <view class="flex-col items-center">
        <image class="icon-step" src="/personal/static/images/icon_currency.png" />
        <text class="desc desc-opactiy mt-4">好友注册消费</text>
      </view>
      <image class="self-start icon-arrow" src="/personal/static/images/icon_right_arrow.png" />
      <view class="flex-col items-center">
        <image class="icon-step" src="/personal/static/images/icon_tips_01.png" />
        <text class="desc desc-opactiy mt-4">获得推广奖励</text>
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
  .title {
    color: #ffffff;
    font-size: 52rpx;
    font-family: 苹方;
    font-weight: 700;
    line-height: 52rpx;
  }
  .desc {
    font-size: 26rpx;
    font-family: 苹方;
    line-height: 26rpx;
    color: #ffffff;
  }
  .desc-opactiy {
    opacity: 0.8;
  }
  .desc-text {
    font-size: 28rpx;
    line-height: 28rpx;
  }
  .step-wrap {
    margin: 56rpx 16rpx 0;
    .icon-step {
      border-radius: 16rpx;
      width: 70rpx;
      height: 72rpx;
    }
    .icon-arrow {
      margin-top: 32rpx;
      width: 18rpx;
      height: 18rpx;
    }
  }
  .desc {
    font-size: 26rpx;
    font-family: 苹方;
    line-height: 26rpx;
    color: #ffffff;
  }
  .desc-opactiy {
    opacity: 0.8;
  }
  .desc {
    font-size: 26rpx;
    font-family: 苹方;
    line-height: 26rpx;
    color: #ffffff;
  }
  .desc-opactiy {
    opacity: 0.8;
  }
  .desc {
    font-size: 26rpx;
    font-family: 苹方;
    line-height: 26rpx;
    color: #ffffff;
  }
  .desc-opactiy {
    opacity: 0.8;
  }
</style>
