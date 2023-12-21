<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-row justify-between items-center search-bar">
      <view class="flex-row items-center" @click="onClick">
        <text class="order-type-font order-type">{{ orderType }}</text>
        <image class="shrink-0 arrow-down ml-4" src="/static/images/icon_down_arrow_01.png" />
      </view>
      <SearchBar :value="value" placeholder="商品名称搜索" background="#f8f8f8"></SearchBar>
    </view>
    <view class="flex-col">
      <FjSticky v-bind:customNavHeight="80">
        <u-tabs
          class="tabs-yellow-wide"
          :list="tabs"
          lineWidth="58rpx"
          lineHeight="18rpx"
          :scrollable="true"
          :activeStyle="{
            color: '#000000',
            fontWeight: 500,
          }"
          :inactiveStyle="{
            color: '#9E9EA0',
            fontWeight: 500,
          }"
          @change="onChangeStatus"
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
            <ProductOrderItem :order="item" v-if="orderType == '商品订单'"></ProductOrderItem>
            <IntentionOrderItem :order="item" v-if="orderType == '意向订单'"></IntentionOrderItem>
            <ServiceOrderItem :order="item" v-if="orderType == '服务订单'"></ServiceOrderItem>
          </view>
        </view>
      </list-container>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12">
      <PopOrderType @change="onChangeType"></PopOrderType>
    </u-popup>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import IntentionOrderItem from '../../../pages/myOrder/components/IntentionOrderItem/IntentionOrderItem.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopOrderType from '../../../pages/myOrder/components/PopOrderType/PopOrderType.vue';
  import ProductOrderItem from '../../../pages/myOrder/components/ProductOrderItem/ProductOrderItem.vue';
  import SearchBar from '@/components/SearchBar';
  import ServiceOrderItem from '../../../pages/myOrder/components/ServiceOrderItem/ServiceOrderItem.vue';
  import { productOrders, productOrderStatus } from '../../../mock/personal/orders';
  import { serviceOrderTabs, serviceOrders } from '../../../mock/serviceOrder';
  import { intentionOrderTabs, intentionOrders } from '../../../mock/intentionOrder';

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
        orderType: '商品订单',
        orderStatus: '',
        orders: productOrders,
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
        this.loadOrders();
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
    color: #2d2e32;
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
