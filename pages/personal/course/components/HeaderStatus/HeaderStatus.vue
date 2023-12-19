<template>
  <view class="flex-col">
    <view class="flex-col">
      <view class="flex-row justify-between items-center self-stretch" v-if="true">
        <view class="flex-row">
          <image class="shrink-0 icon-status" src="/static/images/personal/header_icon_time.png" />
          <text class="font text ml-10">待付款</text>
        </view>
        <text class="time-left">支付剩余 29:00 分钟</text>
      </view>
      <view class="flex-row self-start" v-if="false">
        <image class="icon-status" src="/static/images/personal/head_icon_ok.png" />
        <text class="font ml-10 text">交易完成</text>
      </view>
      <view class="flex-row items-center self-start" v-if="false">
        <image class="icon-status" src="/static/images/personal/header_icon_close.png" />
        <text class="font ml-10 text">已取消</text>
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
  .icon-status {
    border-radius: 50%;
    width: 44rpx;
    height: 44rpx;
  }
  .font {
    font-size: 40rpx;
    font-family: 苹方;
    font-weight: 700;
    color: #ffffff;
  }
  .text {
    line-height: 40rpx;
  }
  .time-left {
    color: #ffffff;
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
  }
</style>