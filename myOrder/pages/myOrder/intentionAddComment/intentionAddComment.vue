<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col body">
      <order-product-item class="product-wrapper"></order-product-item>
      <view class="flex-col mt-12 section">
        <intention-comment-rate></intention-comment-rate>
        <u-textarea
          class="cf-textarea mt-20"
          v-model="v_model_3"
          placeholder="请输入您的评价…"
          height="230rpx"
          placeholderStyle="font-size:24rpx;color:#9E9EA0;font-family:苹方;font-weight:400;"
        ></u-textarea>
        <view class="flex-row items-center mt-18">
          <text class="title-font">上传图片</text>
          <text class="placeholder-text ml-2">（最多上传6张图片）</text>
        </view>
        <uploader class="mt-12"></uploader>
      </view>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start footer-wrapper">
      <view class="flex-col justify-start items-center button btn-wrapper">
        <text class="title-font btn-text">确认提交</text>
      </view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import Uploader from '@/components/Uploader/Uploader.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import IntentionCommentRate from '@/myOrder/pages/myOrder/components/IntentionCommentRate/IntentionCommentRate.vue';

  export default {
    components: { NavBar, OrderProductItem, Uploader, IntentionCommentRate },
    props: {},
    data() {
      return {
        title: '我要评价',
        v_model_3: '',
      };
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    padding-bottom: 200rpx;
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
  .placeholder-text {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #9e9ea0;
  }
  .icon-arrow {
    width: 12rpx;
    height: 22rpx;
  }
  .footer-wrapper {
    padding: 32rpx 0 52rpx;
    background-color: #ffffff;
    width: 750rpx;
  }
  .button {
    margin: 0 40rpx;
  }
  .btn-wrapper {
    padding: 28rpx 0;
    background-color: #b09053;
    border-radius: 48rpx;
    width: 670rpx;
  }
  .btn-text {
    color: #ffffff;
    font-size: 30rpx;
    line-height: 42rpx;
    font-weight: 500;
  }
  .product-wrapper {
    padding: 26rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
</style>
