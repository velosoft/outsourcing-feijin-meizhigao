<template>
  <view class="flex-col section_7">
    <view class="flex-col items-center">
      <text class="font text_7">删除收货地址</text>
      <text class="font text_8 mt-16">您确定删除该收货地址吗？</text>
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
  .section_7 {
    padding: 56rpx 128rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .font {
      font-size: 32rpx;
      font-family: 苹方;
      line-height: 32rpx;
      font-weight: 700;
      color: #333333;
    }
    .text_7 {
      font-size: 34rpx;
      line-height: 34rpx;
    }
    .text_8 {
      color: #8c8f95;
      font-size: 30rpx;
      line-height: 30rpx;
      font-weight: unset;
    }
  }
</style>