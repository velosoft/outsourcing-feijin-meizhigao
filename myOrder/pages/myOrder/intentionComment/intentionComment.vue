<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col body">
      <order-product-item class="product-wrapper"></order-product-item>
      <view class="flex-col mt-12 section">
        <intention-comment-rate :readonly="true"></intention-comment-rate>
        <view class="flex-row mt-24">
          <text class="title-font">评价内容</text>
          <text class="suggest flex-auto ml-20">评价内容商品收纳位置大，质量妥妥，有需要的朋友可以下单</text>
        </view>
        <view class="flex-row items-center mt-20">
          <text class="title-font">商品图片</text>
          <text class="placeholder-text ml-2">（最多上传6张图片）</text>
        </view>
        <view class="flex-row flex-wrap gap-10 mt-12">
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
  import IntentionCommentRate from '@/myOrder/pages/myOrder/components/IntentionCommentRate/IntentionCommentRate.vue';

  export default {
    components: { NavBar, OrderProductItem, IntentionCommentRate },
    props: {},
    data() {
      return {
        title: '查看评价',
        items: [null, null, null, null, null, null],
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
    color: #111111;
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
    font-size: 24rpx;
    line-height: 34rpx;
    color: #9e9ea0;
  }
  .product-wrapper {
    padding: 26rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .suggest {
    font-size: 28rpx;
    font-weight: 500;
    color: #111111;
    line-height: 40rpx;
  }
  .image {
    border-radius: 16rpx;
    width: 148rpx;
    height: 148rpx;
  }
</style>
