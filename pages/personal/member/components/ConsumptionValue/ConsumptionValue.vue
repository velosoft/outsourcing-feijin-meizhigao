<template>
  <view class="flex-col wrap">
    <text class="self-start title text">获取消费值</text>
    <view class="flex-row self-stretch mt-12">
      <image class="image" src="../../../../../static/images/ab5e1562a93e7c3f8a03343d9b76e4c2.png" />
      <view class="flex-col items-start flex-1 self-center label-wrap">
        <text class="title title-text">购买更多宝贝</text>
        <text class="line-clamp-one desc mt-4">购买商品、服务、课程可提升消费值</text>
      </view>
      <u-button class="cf-btn-black button" text="去购买" type="primary" size="mini" shape="circle"></u-button>
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
  .wrap {
    padding: 32rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .title {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      color: #111111;
    }
    .text {
      font-size: 30rpx;
      line-height: 42rpx;
    }
    .image {
      width: 100rpx;
      height: 100rpx;
    }
    .label-wrap {
      margin-left: 24rpx;
      .title-text {
        line-height: 40rpx;
      }
      .desc {
        color: #8c8f95;
        font-size: 22rpx;
        font-family: 'PingFang SC';
        line-height: 32rpx;
        width: 352rpx;
      }
    }
    .button {
      align-self: flex-start;
      margin-left: 40rpx;
    }
  }
</style>