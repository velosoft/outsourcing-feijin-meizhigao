<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col body">
      <OrderProductItem class="product-wrapper"></OrderProductItem>
      <view class="flex-col mt-12 section">
        <ServiceCommentRate :readonly="true"></ServiceCommentRate>
      </view>
      <view class="flex-col mt-12 section">
        <text class="title-font visit-text">如若接受回访，请选择回访时间</text>
        <view class="flex-row justify-between mt-18">
          <text class="visit-time">回访时间</text>
          <text class="placeholder-text">2023-08-24</text>
        </view>
        <view class="flex-row justify-between mt-18">
          <text class="visit-time">回访</text>
          <text class="placeholder-text">不接受回访</text>
        </view>
      </view>
      <view class="flex-row mt-12 section">
        <text class="title-font title-text">改善建议</text>
        <text class="suggest">商品收纳位置大，质量妥妥，有需要的朋友可以下单</text>
      </view>
      <view class="flex-col mt-12 section">
        <view class="flex-row items-center">
          <text class="title-font title-text">评价图片</text>
          <text class="placeholder-text ml-2">（最多上传6张图片）</text>
        </view>
        <view class="flex-row justify-between mt-16">
          <image
            class="image"
            src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=17025197093009576704.png"
            v-for="(item, index) in items"
            :key="index"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import ServiceCommentRate from '@/myOrder/pages/myOrder/components/ServiceCommentRate/ServiceCommentRate.vue';

  export default {
    components: { NavBar, OrderProductItem, ServiceCommentRate },
    props: {},
    data() {
      return {
        title: '查看评价',
        items: [null, null, null, null],
      };
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    padding-bottom: 180rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 0 24rpx 32rpx;
  }
  .section {
    padding: 26rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .title-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .title-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .visit-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .visit-time {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #3c3d41;
  }
  .placeholder-text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9c9c9f;
  }
  .product-wrapper {
    padding: 26rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .suggest {
    font-size: 28rpx;
    color: #8c8f95;
    line-height: 40rpx;
    margin-left: 56rpx;
    flex: 1 1 auto;
  }
  .image {
    border-radius: 16rpx;
    width: 148rpx;
    height: 148rpx;
  }
</style>
