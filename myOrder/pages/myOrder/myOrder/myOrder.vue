<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></nav-bar>
    <view class="flex-row justify-between items-center search-bar">
      <view class="flex-row items-center" @click="onClick">
        <text class="order-type-font order-type">{{ orderType }}</text>
        <image class="shrink-0 arrow-down ml-4" src="/myOrder/static/images/icon_down_arrow_01.png" />
      </view>
      <search-bar :value="value" placeholder="商品名称搜索" background="#f8f8f8"></search-bar>
    </view>
    <view class="flex-col">
      <fj-sticky>
        <u-tabs
          class="tabs-yellow-wide"
          :list="tabs"
          lineWidth="58rpx"
          lineHeight="18rpx"
          :scrollable="true"
          :activeStyle="{
            color: '#111111',
            fontWeight: 500,
          }"
          :inactiveStyle="{
            color: '#9E9EA0',
            fontWeight: 500,
          }"
          @change="onChangeStatus"
        ></u-tabs>
      </fj-sticky>
      <list-container
        class="relative flex-auto order-container"
        :showEmpty="!orders.length"
        :showLoading="showLoading"
        emptyHint="暂无订单~"
        :finished="finished"
        imgSrc="/myOrder/static/images/order-empty.png"
        :emptyPaddingTop="136"
      >
        <view class="flex-col orders">
          <view class="flex-col list-item mt-10" v-for="(item, index) in orders" :key="index">
            <product-order-item :order="item" v-if="orderType == '商品订单'"></product-order-item>
            <intention-order-item :order="item" v-if="orderType == '意向订单'"></intention-order-item>
            <service-order-item :order="item" v-if="orderType == '服务订单'"></service-order-item>
          </view>
        </view>
      </list-container>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12">
      <pop-order-type @change="onChangeType"></pop-order-type>
    </u-popup>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import IntentionOrderItem from '@/myOrder/pages/myOrder/components/IntentionOrderItem/IntentionOrderItem.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopOrderType from '@/myOrder/pages/myOrder/components/PopOrderType/PopOrderType.vue';
  import ProductOrderItem from '@/myOrder/pages/myOrder/components/ProductOrderItem/ProductOrderItem.vue';
  import SearchBar from '@/components/SearchBar';
  import ServiceOrderItem from '@/myOrder/pages/myOrder/components/ServiceOrderItem/ServiceOrderItem.vue';
  import { productOrders, productOrderStatus } from '@/mock/personal/orders';
  import { serviceOrderTabs, serviceOrders } from '@/mock/serviceOrder';
  import { intentionOrderTabs, intentionOrders } from '@/mock/intentionOrder';

  export default {
    components: {
      FjSticky,
      ListContainer,
      NavBar,
      PopOrderType,
      ProductOrderItem,
      IntentionOrderItem,
      ServiceOrderItem,
      SearchBar,
    },
    props: {},
    data() {
      return {
        orderType: '意向订单',
        orderStatus: '',
        orders: intentionOrders,
        title: '我的订单',
        popupVisible: false,
        value: '',
        showLoading: true,
        finished: false,
      };
    },
    computed: {
      tabs() {
        switch (this.orderType) {
          case '商品订单':
            return productOrderStatus.map((e) => ({ name: e }));
          case '意向订单':
            return intentionOrderTabs.map((e) => ({ name: e }));
          case '服务订单':
            return serviceOrderTabs.map((e) => ({ name: e }));
        }
      },
    },
    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      onChangeType(type) {
        this.orderType = type;
        this.onClose();
        this.orders = [];
        uni.showLoading();
        setTimeout(() => {
          this.loadOrders();
          this.$nextTick(() => {
            uni.hideLoading();
          });
        }, 200);
      },
      loadOrders() {
        switch (this.orderType) {
          case '商品订单':
            this.orders = productOrders;
            break;
          case '意向订单':
            this.orders = intentionOrders;
            break;
          case '服务订单':
            this.orders = serviceOrders;
            break;
        }
      },
      onChangeStatus(args) {
        this.orderStatus = args.index;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
  }
  .search-bar {
    margin-top: 16rpx;
    padding: 0 24rpx;
  }
  .order-type-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #111111;
  }
  .order-type {
    color: #111111;
  }
  .arrow-down {
    width: 22rpx;
    height: 12rpx;
  }
  .order-container {
    background-color: #f8f8f8;
  }
  .orders {
    padding: 24rpx 24rpx 0;
  }
  .list-item {
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
</style>
