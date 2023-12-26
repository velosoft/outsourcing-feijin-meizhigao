<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col section-top">
      <view class="flex-row justify-center items-center contact">
        <image class="logo" :src="shipping.company_logo" />
        <text class="number ml-18">{{ shipping.logistics_company }} {{ shipping.tracking_number }}</text>
        <view class="actions ml-18">
          <text class="number">复制</text>
          <text class="number divider">|</text>
          <text class="number">打电话</text>
        </view>
      </view>
      <view class="flex-row justify-between items-center products-section mt-16">
        <text class="font product-title">包裹商品</text>
        <view class="flex-row items-center" @click="onClick">
          <text class="number">共 {{ shipping.products.length }} 件</text>
          <image class="shrink-0 arrow-right ml-8" src="/myOrder/static/images/icon_arrow_right.png" />
        </view>
      </view>
      <view class="flex-row justify-between list">
        <image
          class="equal-division-item"
          :src="item.productImageURL"
          v-for="(item, index) in shipping.products.slice(0, 4)"
          :key="index"
        />
      </view>
    </view>
    <image
      class="timeline"
      src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=72e68854fbf691b4d7ab6cc06f2da28f.png"
    />
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
      <pop-shipping-product-list :products="shipping.products"></pop-shipping-product-list>
    </u-popup>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopShippingProductList from '../components/PopShippingProductList/PopShippingProductList.vue';
  import { shippingDetail } from '@/mock/personal/orders';

  export default {
    components: { NavBar, PopShippingProductList },
    props: {},
    data() {
      return {
        shipping: shippingDetail,
        title: '查看物流',
        popupVisible: false,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    padding-bottom: 24rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .font {
    font-size: 30rpx;
    color: #111111;
  }
  .section-top {
    margin: 0 24rpx;
    padding-bottom: 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .contact {
    padding: 24rpx 0;
    border-bottom: solid 2rpx #e8e8e8;
  }
  .logo {
    width: 78rpx;
    height: 76rpx;
  }
  .number {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #111111;
  }
  .actions {
    line-height: 36rpx;
    height: 36rpx;
  }
  .divider {
    margin: 0 16rpx;
    color: #9e9ea0;
  }
  .products-section {
    padding: 0 24rpx;
  }
  .product-title {
    line-height: 42rpx;
  }
  .arrow-right {
    width: 12rpx;
    height: 24rpx;
  }
  .list {
    margin: 28rpx 24rpx 0;
  }
  .equal-division-item {
    border-radius: 16rpx;
    width: 148rpx;
    height: 148rpx;
  }
  .timeline {
    margin: 24rpx 24rpx 0;
    width: 93.6vw;
    height: 207.7333vw;
  }
</style>
