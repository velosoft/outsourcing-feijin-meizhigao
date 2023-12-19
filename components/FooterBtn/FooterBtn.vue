<template>
  <view class="iPhoneX flex-col">
    <view class="iPhoneX flex-col items-end group footer-pos bg-footer">
      <view class="flex-row btn-wrap">
        <u-button text="取消订单"></u-button>
        <u-button class="ml-8" text="去付款"></u-button>
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
  .group {
    padding: 32rpx 0;
    .btn-wrap {
      margin-right: 24rpx;
    }
  }
  .footer-pos {
    position: fixed;
    left: 0rpx;
    right: 0rpx;
    bottom: 0rpx;
  }
  .bg-footer {
    background-color: #ffffff;
  }
</style>