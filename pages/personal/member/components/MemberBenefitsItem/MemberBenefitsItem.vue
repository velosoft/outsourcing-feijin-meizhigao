<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between items-center header">
      <text class="title">L1 普通会员权益</text>
      <view class="flex-row items-center">
        <text class="right-text right-label">收起</text>
        <image class="shrink-0 icon-arrow ml-4" src="../../../../../static/images/icon_down_arrow_02.png" />
      </view>
    </view>
    <view class="grid mt-4">
      <view class="flex-col items-center grid-item" v-for="(item, index) in items" :key="index">
        <image class="icon-benefit" src="../../../../../static/images/icon_product_discounts_active.png" />
        <text class="text-benefit mt-4">商品折扣</text>
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
        items: [null, null, null, null, null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 24rpx 0 8rpx;
    background-color: #ffffff;
    border-radius: 8rpx;
    .header {
      padding: 0 24rpx;
      .title {
        color: #000000;
        font-size: 28rpx;
        font-family: 'PingFang SC';
        font-weight: 600;
        line-height: 40rpx;
      }
      .right-text {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        color: #9e9ea0;
      }
      .right-label {
        color: #6d6d6d;
        font-size: 22rpx;
        line-height: 32rpx;
      }
      .icon-arrow {
        width: 18rpx;
        height: 12rpx;
      }
    }
    .grid {
      height: 348rpx;
      display: grid;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      grid-template-columns: repeat(4, minmax(0, 1fr));
      row-gap: 0;
      column-gap: 16.8rpx;
      .grid-item {
        padding: 16rpx 0;
        .icon-benefit {
          border-radius: 50%;
          width: 96rpx;
          height: 96rpx;
        }
        .text-benefit {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #3c3d41;
        }
      }
    }
  }
</style>