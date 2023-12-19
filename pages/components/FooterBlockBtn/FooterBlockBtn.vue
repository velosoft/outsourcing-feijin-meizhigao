<template>
  <view class="iPhoneX flex-col footer-wrap">
    <view class="iPhoneX flex-col footer-btn pos"><u-button class="button" text="确定"></u-button></view>
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
  .footer-wrap {
    height: 152rpx;
    .footer-btn {
      padding: 0 32rpx;
      .button {
        margin: 32rpx 0;
      }
    }
    .pos {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>