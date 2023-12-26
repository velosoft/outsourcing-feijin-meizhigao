<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col body">
      <order-product-item :product="order.products[0]" class="product"></order-product-item>
      <view class="flex-col rate-wrapper mt-12">
        <view class="flex-row justify-between items-center">
          <view class="flex-row items-center">
            <text class="rate-title">商品评分</text>
            <u-rate
              class="ml-16"
              :value="order.comment.rating"
              :readonly="true"
              activeColor="#C2A05F"
              size="52rpx"
              :allowHalf="true"
            ></u-rate>
          </view>
          <text class="rate-number rate-text">{{ order.comment.rating }}分</text>
        </view>
        <view class="flex-row mt-30">
          <text class="shrink-0 rate-title">商品评分</text>
          <text class="flex-1 rate-number comment ml-16">
            {{ order.comment.content }}
          </text>
        </view>
      </view>
      <view class="flex-col pic-wrapper mt-12">
        <view class="flex-row items-baseline">
          <text class="rate-title">商品图片</text>
          <text class="rate-number pic-tip ml-2">（最多上传6张图片）</text>
        </view>
        <view class="pics mt-16">
          <image class="equal-division-item" :src="item" v-for="(item, index) in order.comment.images" :key="index" />
        </view>
      </view>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start footer">
      <view class="flex-col justify-start items-center button text-wrapper">
        <text class="rate-title btn-text">确认提交</text>
      </view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import { productOrders } from '@/mock/personal/orders';

  export default {
    components: { NavBar, OrderProductItem },
    props: {},
    data() {
      return {
        order: productOrders[0],
        title: '查看评价',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    padding-bottom: 468rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 0 24rpx;
  }
  .rate-title {
    font-size: 30rpx;
    font-family: 'PingFang SC';
    line-height: 42rpx;
    font-weight: 500;
    color: #111111;
  }
  .rate-wrapper {
    padding: 24rpx 22rpx 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .rate-number {
    font-size: 30rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    color: #111111;
  }
  .rate-text {
    font-size: 28rpx;
  }
  .comment {
    font-size: 28rpx;
    text-align: left;
  }
  .pic-wrapper {
    padding: 26rpx 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .pic-tip {
    color: #9c9c9f;
    font-size: 28rpx;
  }
  .pics {
    height: 320rpx;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 20rpx;
    column-gap: 20rpx;
  }
  .equal-division-item {
    border-radius: 16rpx;
    width: 148rpx;
    height: 148rpx;
  }
  .footer {
    padding: 32rpx 0 52rpx;
    background-color: #ffffff;
    width: 750rpx;
  }
  .button {
    margin: 0 40rpx;
  }
  .text-wrapper {
    padding: 26rpx 0 28rpx;
    background-color: #b09053;
    border-radius: 48rpx;
    width: 670rpx;
  }
  .btn-text {
    color: #ffffff;
  }
  .product {
    background-color: #ffffff;
    padding: 24rpx;
    border-radius: 12rpx;
  }
</style>
