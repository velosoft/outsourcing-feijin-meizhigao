<template>
  <view
    class="flex-row items-center justify-center btn-tips"
    :style="{ width: '362rpx' }"
  >
    <view class="flex-row items-center count-down-wrap">
      <text class="count-down-label">本次秒杀已结束</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  methods: {},
};
</script>

<style scoped lang="less">
.btn-tips {
  margin-top: 24rpx;
  padding: 16rpx 24rpx;
  background-image: linear-gradient(180deg, #fe6733 0%, #f72222 100%);
  border-radius: 100rpx;
  .count-down-wrap {
    .count-down-label {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #ffffff;
    }
  }
}
</style>
