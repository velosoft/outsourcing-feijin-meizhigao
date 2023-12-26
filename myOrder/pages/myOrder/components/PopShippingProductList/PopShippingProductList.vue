<template>
  <view class="flex-col shipping-products">
    <view class="flex-col justify-start items-center"><text class="title">商品清单</text></view>
    <scroll-view class="mt-24 list-wrap" :scroll-y="true">
      <view class="flex-col">
        <order-product-item
          class="list-item mt-12"
          v-for="(item, index) in products"
          :product="item"
          :key="index"
        ></order-product-item
      ></view>
    </scroll-view>
  </view>
</template>

<script>
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';

  export default {
    components: { OrderProductItem },
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .shipping-products {
    padding: 40rpx 40rpx 100rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title {
    color: #111111;
    font-size: 32rpx;
    font-weight: 500;
    line-height: 44rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .list-wrap {
    max-height: 900rpx;
    min-height: 400rpx;
    padding-bottom: 16rpx;
  }
</style>
