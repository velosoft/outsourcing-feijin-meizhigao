<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-row justify-between items-center search-bar">
      <view class="flex-row items-center" @click="onClick">
        <text class="order-type-font order-type">商品订单</text>
        <image class="shrink-0 arrow-down ml-4" src="../../../static/images/icon_down_arrow_01.png" />
      </view>
      <SearchBar :value="value" placeholder="商品名称搜索" background="#f8f8f8"></SearchBar>
    </view>
    <view class="flex-col">
      <FjSticky v-bind:customNavHeight="80">
        <u-tabs
          class="tabs-yellow-wide"
          :list="list"
          lineWidth="58rpx"
          lineHeight="18rpx"
          :scrollable="true"
          @change="onChangeOrderStatus"
        ></u-tabs>
      </FjSticky>
      <list-container
        class="relative flex-auto order-container"
        :showEmpty="!orders.length"
        :showLoading="showLoading"
        emptyHint="暂无订单~"
        :finished="finished"
        imgSrc="/static/images/order-empty.png"
        :emptyPaddingTop="136"
      >
        <view class="flex-col orders">
          <view class="flex-col list-item mt-10" v-for="(item, index) in orders" :key="index">
            <ProductOrderItem :order="item" v-if="orderType == 0"></ProductOrderItem>
            <view class="flex-col list-item" v-if="orderType == 1">
              <view class="flex-row justify-between items-center">
                <text class="servier-order-font">订单号：2023060801256768</text>
                <view class="flex-row items-center">
                  <view class="shrink-0 section_4"></view>
                  <text class="servier-order-font_1 servier-order-text servier-order-ml-6">未支付</text>
                </view>
              </view>
              <view class="flex-col servier-order-mt-16">
                <view class="flex-col section_5">
                  <view class="flex-row items-center self-stretch group_14">
                    <image
                      class="servier-order-image"
                      src="../../../static/images/f339f284c8404bb9e51d595590db0df4.png"
                    />
                    <view class="flex-col items-start flex-1 group_17">
                      <text class="order-type-font">全屋整理收纳服务（单次）</text>
                      <text class="servier-order-font_3 servier-order-mt-4">按面积核算（元/m)</text>
                      <view class="flex-row items-center servier-order-mt-4">
                        <view class="flex-row items-baseline self-stretch group_9">
                          <text class="servier-order-font_4 text_17">200</text>
                          <text class="servier-order-font_5 text_18">￥</text>
                        </view>
                        <text class="servier-order-font_6">.00</text>
                      </view>
                    </view>
                    <text class="servier-order-font_7 servier-order-text_3 servier-order-text_4">x1</text>
                  </view>
                  <view class="self-start group_10 servier-order-view servier-order-mt-8">
                    <text class="servier-order-font_8">预约上门时间：</text>
                    <text class="servier-order-font_9">2023-08-16 19:14:13</text>
                  </view>
                  <view class="self-start text_24 servier-order-view_1 servier-order-mt-8">
                    <text class="servier-order-font_8">支付倒计时：</text>
                    <text class="servier-order-font_10">59分钟</text>
                  </view>
                </view>
                <view class="flex-row justify-end group_20">
                  <view class="flex-col justify-start items-center servier-order-button">
                    <text class="servier-order-font_7">取消订单</text>
                  </view>
                  <view class="flex-col justify-start items-center servier-order-button_1 servier-order-ml-10">
                    <text class="servier-order-font_11">去付款</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </list-container>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12"><PopOrderType></PopOrderType></u-popup>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopOrderType from '../../../pages/myOrder/components/PopOrderType/PopOrderType.vue';
  import ProductOrderItem from '../../../pages/myOrder/components/ProductOrderItem/ProductOrderItem.vue';
  import SearchBar from '@/components/SearchBar';
  import { productOrders } from '../../../mock/personal/orders'

  export default {
    components: { FjSticky, ListContainer, NavBar, PopOrderType, ProductOrderItem, SearchBar },
    props: {},
    data() {
      return {
        orderType: '0',
        orderStatus: '',
        orders: productOrders,
        title: '我的订单',
        popupVisible: false,
        value: '',
        list: [
          {
            name: '待付款',
          },
          {
            name: '待发货',
          },
          {
            name: '待收货',
          },
          {
            name: '交易完成',
          },
          {
            name: '交易关闭',
          },
          {
            name: '已取消',
          },
        ],
        showLoading: true,
        finished: false,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      onChangeOrderStatus(args) {
        this.orderStatus = args.index;
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
  }
  .servier-order-mt-16 {
    margin-top: 32rpx;
  }
  .search-bar {
    margin-top: 16rpx;
    padding: 0 24rpx;
  }
  .order-type-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .order-type {
    color: #111111;
  }
  .arrow-down {
    width: 22rpx;
    height: 12rpx;
  }
  .servier-order-font {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #6d6d6d;
  }
  .order-container {
    background-color: #f8f8f8;
  }
  .orders {
    padding: 24rpx 24rpx 0;
  }
  .list-item {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .section_4 {
    background-color: #b09053;
    border-radius: 50%;
    width: 12rpx;
    height: 12rpx;
  }
  .servier-order-font_1 {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #b09053;
  }
  .section_5 {
    padding-bottom: 16rpx;
    background-color: #f1f1f1;
    border-radius: 8rpx;
  }
  .group_14 {
    padding: 16rpx;
    border-bottom: solid 2rpx #e4e4e4;
  }
  .servier-order-image {
    border-radius: 12rpx;
    width: 128rpx;
    height: 128rpx;
  }
  .group_17 {
    margin-left: 20rpx;
  }
  .servier-order-font_3 {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #9e9ea0;
  }
  .servier-order-mt-4 {
    margin-top: 8rpx;
  }
  .group_9 {
    width: 80rpx;
  }
  .servier-order-font_4 {
    font-size: 32rpx;
    line-height: 34rpx;
    color: #111111;
  }
  .text_17 {
    margin-left: 24rpx;
    line-height: 36rpx;
  }
  .servier-order-font_5 {
    font-size: 24rpx;
    line-height: 30rpx;
    font-weight: 600;
    color: #111111;
  }
  .text_18 {
    margin-left: -80rpx;
  }
  .servier-order-font_6 {
    font-size: 24rpx;
    line-height: 30rpx;
    color: #111111;
  }
  .servier-order-font_7 {
    font-size: 24rpx;
    line-height: 34rpx;
    font-weight: 500;
    color: #9e9ea0;
  }
  .servier-order-text_3 {
    text-transform: uppercase;
  }
  .servier-order-font_8 {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #3c3d41;
  }
  .servier-order-font_9 {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #000000;
  }
  .group_10 {
    margin-left: 16rpx;
  }
  .servier-order-font_10 {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .text_24 {
    margin-left: 16rpx;
  }
  .group_20 {
    padding-top: 24rpx;
  }
  .servier-order-button {
    padding: 8rpx 0;
    border-radius: 8rpx;
    width: 132rpx;
    height: 52rpx;
    border-left: solid 2rpx #cecece;
    border-right: solid 2rpx #cecece;
    border-top: solid 2rpx #cecece;
    border-bottom: solid 2rpx #cecece;
  }
  .servier-order-button_1 {
    padding: 8rpx 0;
    background-color: #b09053;
    border-radius: 8rpx;
    width: 132rpx;
    height: 52rpx;
  }
  .servier-order-ml-10 {
    margin-left: 20rpx;
  }
  .servier-order-font_11 {
    font-size: 24rpx;
    line-height: 34rpx;
    font-weight: 500;
    color: #ffffff;
  }
  .servier-order-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .servier-order-text_4 {
    margin-left: 40rpx;
    margin-right: 8rpx;
  }
  .servier-order-view {
    line-height: 34rpx;
  }
  .servier-order-view_1 {
    line-height: 34rpx;
  }
  .servier-order-mt-8 {
    margin-top: 16rpx;
  }
  .servier-order-ml-6 {
    margin-left: 12rpx;
  }
</style>
