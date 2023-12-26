<template>
  <view class="flex-col wrap">
    <text class="self-center title">商品信息</text>
    <view class="flex-col self-stretch mt-26">
      <view class="flex-row mt-12 list-item" v-for="(item, index) in items" :key="index">
        <image
          class="image"
          src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=mock_thumb_008.png"
        />
        <view class="flex-col flex-1 ml-10 justify-between">
          <text class="line-clamp-two title">柱子半径2.5cm长度1米</text>
          <view class="flex-row justify-between">
            <text class="desc">中号；白色</text>
            <view class="flex-row" v-if="index % 2 === 1">
              <text class="count">退回数量</text>
              <text class="count ml-9">1</text>
            </view>
            <text class="count" v-else>x1</text>
          </view>
          <view class="price-wrapper">
            <text class="price-number-10">￥</text>
            <text class="price-number-16">100</text>
            <text class="price-number-10">.00</text>
          </view>
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
      return {
        items: [null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .ml-9 {
    margin-left: 18rpx;
  }
  .wrap {
    padding: 36rpx 46rpx 70rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title {
    color: #000000;
    font-size: 32rpx;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 44rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .image {
    border-radius: 16rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .title {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .desc {
    font-size: 26rpx;
    font-family: 'PingFang SC';
    line-height: 36rpx;
    color: #8c8f95;
  }
  .count {
    font-size: 26rpx;
    font-family: 'PingFang SC';
    line-height: 36rpx;
    color: #828385;
  }
</style>
