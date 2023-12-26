<template>
  <view class="flex-col wrap">
    <text class="self-start title text">获取消费值</text>
    <view class="flex-row self-stretch mt-12">
      <image class="image" src="/personal/static/images/icon_consumption.png" />
      <view class="flex-col items-start flex-1 self-center label-wrap">
        <text class="title title-text">购买更多宝贝</text>
        <text class="line-clamp-one desc mt-4">购买商品、服务、课程可提升消费值</text>
      </view>
      <view class="flex-col group">
        <u-button class="cf-btn-black" text="去购买" type="primary" size="mini" shape="circle"></u-button>
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
        color: #6d6d6d;
        font-size: 22rpx;
        font-family: 'PingFang SC';
        line-height: 32rpx;
        width: 352rpx;
      }
    }
    .group {
      margin-left: 40rpx;
      width: 128rpx;
      height: 56rpx;
    }
  }
</style>
