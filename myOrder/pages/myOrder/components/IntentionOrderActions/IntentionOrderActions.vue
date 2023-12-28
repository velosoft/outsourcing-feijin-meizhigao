<template>
  <view class="flex-row items-center actions-wrapper">
    <view class="relative">
      <text class="more-text" @click="onToggleMore">更多</text>
      <view class="more-pop" v-if="showMore">
        <view class="arrow"></view>
        <view class="more-action" @click="onToggleMore">查看评价</view>
      </view>
    </view>
    <view class="flex-auto flex-row justify-end">
      <view class="btn btn-plain">
        <text>组件清单</text>
      </view>
      <view class="btn btn-plain">
        <text>查看商品订单</text>
      </view>
      <view class="btn btn-primary">
        <text>评价</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        showMore: false,
      };
    },
    methods: {
      onToggleMore() {
        this.showMore = !this.showMore;
      },
    },
  };
</script>

<style scoped lang="less">
  .actions-wrapper {
    padding: 0 24rpx;
    background-color: #ffffff;
    height: 132rpx;
  }
  .more-text {
    font-size: 24rpx;
    color: #9c9c9f;
    line-height: 36rpx;
  }
  .more-pop {
    position: absolute;
    top: -92rpx;
    left: -4rpx;
    padding-bottom: 12rpx;
  }
  .arrow {
    border: 12rpx solid transparent;
    border-top-color: white;
    position: absolute;
    left: 20rpx;
    bottom: -6px;
  }
  .more-action {
    width: 170rpx;
    height: 72rpx;
    font-size: 28rpx;
    color: #3c3d41;
    line-height: 72rpx;
    text-align: center;
    background-color: white;
    box-shadow: 0px 0px 2px 1px rgba(224, 224, 224, 0.5);
    border-radius: 16rpx;
  }
  .btn {
    height: 72rpx;
    min-width: 164rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 36rpx;
    padding: 0 24rpx;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .btn + .btn {
    margin-left: 20rpx;
  }
  .btn-plain {
    border: 2rpx solid #d4d4d4;
    color: #3c3d41;
  }
  .btn-primary {
    background-color: #b09053;
    color: #ffffff;
  }
</style>
