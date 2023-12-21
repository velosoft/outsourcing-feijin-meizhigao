<template>
  <view class="flex-col order-proudcts">
    <text class="self-start title">商品信息</text>
    <view class="flex-col self-stretch mt-16">
      <order-product-item
        class="list-item mt-12"
        v-for="(item, index) in products"
        :key="index"
        :product="item"
      ></order-product-item>
    </view>
  </view>
</template>

<script>
  import OrderProductItem from '@/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';

  export default {
    components: {
      OrderProductItem,
    },
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
  .order-proudcts {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .title {
    color: #2d2e32;
    font-size: 30rpx;
    font-weight: 500;
    line-height: 42rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
</style>
