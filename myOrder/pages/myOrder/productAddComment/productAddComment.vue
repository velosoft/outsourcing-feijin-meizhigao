<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col body">
      <order-product-item :product="order.products[0]" class="product"></order-product-item>
      <view class="flex-col input mt-12">
        <view class="flex-row justify-between items-center rate-wrapper">
          <view class="flex-row items-center">
            <text class="title-font">商品评分</text>
            <u-rate class="ml-16" active-color="#C2A05F" size="52rpx" v-model="rateValue"></u-rate>
          </view>
          <text class="base-font">{{ rateValue }}分</text>
        </view>
        <u-textarea height="320rpx" v-model="inputValue" placeholder="请输入您的评价"></u-textarea>
      </view>
      <view class="flex-col pic mt-12">
        <view class="flex-row items-center self-stretch pic-top">
          <text class="title-font">商品图片</text>
          <text class="base-font pic-tip ml-2">（最多上传6张图片）</text>
        </view>
        <u-upload class="upload" :fileList="fileList">
          <view class="flex-col items-center upload-slot">
            <image class="upload-icon" src="/static/images/icon_upload.png" />
            <text class="upload-tip mt-12">上传图片</text>
          </view>
        </u-upload>
      </view>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start btn-submit">
      <view class="flex-col justify-start items-center button text-wrapper">
        <text class="title-font sumbit-text">确认提交</text>
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
        title: '我要评价',
        rateValue: 2,
        inputValue: '',
        fileList: [],
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
    padding: 0 24rpx;
  }
  .input {
    padding: 0 22rpx 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .rate-wrapper {
    padding: 24rpx 0 22rpx;
  }
  .title-font {
    font-size: 30rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .base-font {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
  }
  .pic {
    padding: 0 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .pic-top {
    padding: 26rpx 0 32rpx;
  }
  .pic-tip {
    color: #9c9c9f;
  }
  .upload {
    align-self: flex-start;
  }
  .upload-slot {
    padding: 28rpx 0;
    width: 180rpx;
    background-color: #fafafa;
  }
  .upload-icon {
    width: 60rpx;
    height: 60rpx;
  }
  .upload-tip {
    color: #9e9ea0;
    font-size: 24rpx;
    font-family: 'PingFang SC';
    line-height: 34rpx;
  }
  .btn-submit {
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
  .sumbit-text {
    color: #ffffff;
    line-height: 42rpx;
  }
  .product {
    background-color: #ffffff;
    padding: 24rpx;
    border-radius: 12rpx;
  }
</style>
