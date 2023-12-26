<template>
  <view class="flex-row">
    <view class="relative thumb-size">
      <image
        class="thumb-size"
        src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=mock_thumb_008.png"
      />
      <view class="flex-col justify-start items-center text-wrapper pos" v-if="true">
        <text class="tag-label tag-text">已使用</text>
      </view>
    </view>
    <view class="flex-col justify-between flex-1 ml-10">
      <text class="line-clamp-two title text">定制卧室收纳柜新疆包邮卧室床头</text>
      <view class="flex-row justify-between items-center">
        <text class="size-label">中号；白色</text>
        <text class="product-size size-num">x1</text>
      </view>
      <view class="flex-row justify-between items-center">
        <view class="flex-row items-start">
          <text class="tag-label currency mt-2">￥</text>
          <text class="price">100</text>
          <text class="decimal mt-2">.00</text>
        </view>
        <view class="flex-col items-start status-wrap">
          <text class="title status" v-if="!showReturnd">补购商品</text>
          <text class="title status-returned" v-else>已退回</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      showReturnd: Boolean,
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .thumb-size {
    border-radius: 16rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .text-wrapper {
    padding: 4rpx 0 4rpx;
    background-color: #9c9c9f;
    border-radius: 16rpx 0rpx 16rpx 0rpx;
    width: 90rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    top: 0;
  }
  .tag-label {
    font-size: 20rpx;
    line-height: 28rpx;
  }
  .tag-text {
    color: #ffffff;
  }
  .title {
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .text {
    color: #2d2e32;
    font-weight: 500;
  }
  .size-label {
    color: #8c8f95;
    font-size: 26rpx;
  }
  .product-size {
    font-size: 28rpx;
    line-height: 36rpx;
  }
  .size-num {
    color: #828385;
    font-size: 26rpx;
  }
  .currency {
    color: #111111;
    font-weight: 500;
  }
  .price {
    color: #111111;
    font-size: 32rpx;
    line-height: 36rpx;
  }
  .decimal {
    margin-left: 8rpx;
    color: #111111;
    font-size: 20rpx;
    line-height: 24rpx;
  }
  .status-wrap {
    margin-top: 10rpx;
  }
  .status {
    color: #b09053;
  }
  .status-returned {
    color: #9c9c9f;
  }
</style>
