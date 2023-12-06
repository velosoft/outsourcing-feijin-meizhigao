<template>
  <view style="padding: 200rpx 32rpx;" class="flex-col items-start justify-start">
    <text>Badge 小红点</text>
    <view class="relative badge-wrap">
      <view class="con"></view>
      <u-badge class="pos badge" :isDot="true" type="success"></u-badge>
    </view>
    <view class="relative badge-wrap">
      <view class="con"></view>
      <u-badge class="pos badge" numberType="overflow" type="error" max="99" value="1"></u-badge>
    </view>
    <view class="relative badge-wrap">
      <view class="con"></view>
      <u-badge class="pos badge" numberType="overflow" type="error" max="99" value="99"></u-badge>
    </view>
    <view class="relative badge-wrap">
      <view class="con"></view>
      <u-badge class="pos badge" numberType="overflow" type="error" max="99" value="100"></u-badge>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="less">
  .badge-wrap {
    background: #dedede;
  }

  .con {
    width: 64rpx;
    height: 64rpx;
    background-color: #909193;
    border-radius: 32rpx;
  }

  .badge ::v-deep .u-badge {
    position: absolute;
    right: 0;
    top: 0;
    min-width: 24rpx !important;
    display: inline-flex !important;
    justify-content: center !important;
    background-color: #ff0000 !important;
    font-size: 16rpx !important;
    line-height: 24rpx !important;
  }

  .badge ::v-deep .u-badge--dot {
    // 没有数据时的大小
    width: 24rpx !important;
    height: 24rpx !important;
  }

  .badge ::v-deep .u-badge--not-dot {
    // 有数据时的大小
    padding: 0 8rpx !important;
  }
</style>
