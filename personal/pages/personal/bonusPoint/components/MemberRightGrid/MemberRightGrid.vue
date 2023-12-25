<template>
  <view class="grid">
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_product_discounts_active.png" />
      <text class="value value-active mt-4">商品折扣</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_service_discount_active.png" />
      <text class="value mt-4">服务折扣</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_distribution_commission_act.png" />
      <text class="value mt-4">分销提成</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_other_income_01.png" />
      <text class="value mt-4">其他权益</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_other_income_01.png" />
      <text class="value mt-4">其他权益</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_other_income_01.png" />
      <text class="value mt-4">其他权益</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_other_income_01.png" />
      <text class="value mt-4">其他权益</text>
    </view>
    <view class="flex-col items-center grid-item">
      <image class="icon" src="/personal/static/images/icon_other_income_01.png" />
      <text class="value mt-4">其他权益</text>
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
  .grid {
    padding: 24rpx 0;
    background-color: #ffffff;
    border-radius: 16rpx;
    height: 384rpx;
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 8rpx;
    column-gap: 0;
    .grid-item {
      padding: 8rpx 0 16rpx;
      .icon {
        border-radius: 50%;
        width: 96rpx;
        height: 96rpx;
      }
      .value {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        color: #9e9ea0;
      }
      .value-active {
        color: #3c3d41;
      }
    }
  }
</style>
