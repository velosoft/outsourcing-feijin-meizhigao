<template>
  <view class="flex-row">
    <image
      class="shrink-0 cover-img"
      src="/myOrder/static/images/mock_1dae61f5b8b53166.png"
    />
    <view class="flex-col flex-1 ml-10">
      <text class="font-title">定制卧室收纳柜新疆包邮卧室床头包卧室床头厨房收纳服务</text>
      <view class="flex-row justify-between mt-6">
        <text class="font text-desp">中号；白色</text>
        <text class="font text-count">x1</text>
      </view>
      <view class="flex-col justify-start items-start mt-6">
        <view class="flex-row items-end">
          <text class="font-xs text-weight">￥</text>
          <view class="flex-row items-start shrink-0">
            <text class="text-price">200</text>
            <text class="font-xs">.00</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { prodInfo: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .cover-img {
    border-radius: 16rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .font-title {
    color: #2d2e32;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 40rpx;
  }
  .font {
    font-size: 26rpx;
    line-height: 36rpx;
  }
  .text-desp {
    color: #8c8f95;
  }
  .text-count {
    color: #828385;
  }
  .font-xs {
    font-size: 20rpx;
    line-height: 24rpx;
    color: #111111;
  }
  .text-weight {
    font-weight: 500;
  }
  .text-price {
    color: #111111;
    font-size: 32rpx;
    line-height: 36rpx;
  }
</style>