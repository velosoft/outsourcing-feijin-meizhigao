<template>
  <view class="flex-col">
    <view class="flex-col self-stretch header">
      <view class="flex-row items-center self-stretch">
        <text class="title">当前可用收纳币</text>
        <image class="tips-icon ml-8" src="/personal/static/images/icon_tips.png" @click="onClick" />
      </view>
      <text class="num">{{ coins.available }}</text>
    </view>
    <view class="flex-row mt-32">
      <view class="flex-col items-center">
        <text class="label">累计获得收纳币</text>
        <text class="value mt-4">{{ coins.total }}</text>
      </view>
      <view class="flex-col items-center ml-30">
        <text class="label">冻结收纳币</text>
        <text class="value mt-4">{{ coins.freeze }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { coins: { type: Object, default: () => ({ available: '15,8900', total: '10000', freeze: '4000' }) } },
    data() {
      return {};
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/personal/pages/personal/bonusPoint/memberRight/memberRight' });
      },
    },
  };
</script>

<style scoped lang="less">
  .header {
    padding: 0 8rpx;
    .title {
      color: #111111;
      font-size: 28rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 40rpx;
    }
    .tips-icon {
      width: 32rpx;
      height: 32rpx;
    }
    .num {
      color: #111111;
      font-size: 72rpx;
      font-family: '.AppleSystemUIFont';
      line-height: 86rpx;
    }
  }
  .label {
    font-size: 24rpx;
    font-family: 'PingFang SC';
    line-height: 34rpx;
    font-weight: 500;
    color: #6d6d6d;
  }
  .value {
    font-size: 28rpx;
    font-family: '.AppleSystemUIFont';
    line-height: 34rpx;
    color: #111111;
  }
</style>
