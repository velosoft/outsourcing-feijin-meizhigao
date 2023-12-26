<template>
  <view class="flex-col wrap">
    <view class="flex-col justify-start items-start"> <text class="title">L1 普通会员权益</text></view>
    <view class="grid mt-4">
      <view class="flex-col items-center grid-item" v-for="(item, index) in items" :key="index">
        <image class="icon-benefit" src="/personal/static/images/icon_product_discounts_active.png" />
        <text class="text-benefit mt-4">商品折扣</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { vipData: { type: Object, default: () => ({}) } },
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
    .title {
      margin-left: 28rpx;
      color: #111111;
      font-size: 28rpx;
      font-family: 'PingFang SC';
      font-weight: 600;
      line-height: 40rpx;
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
