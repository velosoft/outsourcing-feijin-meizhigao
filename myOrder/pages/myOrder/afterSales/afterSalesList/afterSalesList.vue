<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-row justify-between items-center search-bar">
      <view class="flex-row items-center" @click="onClick">
        <text class="order-type-font order-type">{{ orderType }}</text>
        <image class="shrink-0 arrow-down ml-4" src="/myOrder/static/images/icon_down_arrow_01.png" />
      </view>
      <SearchBar class="search-wrap" :value="value" placeholder="请输入售后订单号" background="#f8f8f8"></SearchBar>
    </view>
    <view class="flex-col">
      <FjSticky>
        <u-tabs
          class="line-tabs u-tabs-border-bottom u-tabs-bg-white"
          :list="tabs"
          lineWidth="56rpx"
          lineHeight="4rpx"
          :scrollable="true"
          :activeStyle="{
            fontSize: '30rpx',
            color: '#111111',
            fontWeight: '500',
          }"
          :inactiveStyle="{
            fontSize: '28rpx',
            color: '#6D6D6D',
            fontWeight: '400',
          }"
          itemStyle="padding-left: 48rpx; padding-right: 48rpx; height: 106rpx;"
          @change="onChangeStatus"
        ></u-tabs>
      </FjSticky>
      <list-container
        class="relative flex-auto order-container"
        :showEmpty="!orders.length && true"
        :showLoading="showLoading"
        emptyHint="暂无更多~"
        :finished="finished"
        imgSrc="/myOrder/static/images/icon_empty_sale.png"
        :emptyPaddingTop="136"
      >
        <view class="flex-col orders">
          <view class="flex-col list-item mt-10" v-for="(item, index) in orders" :key="index">
            <AfterSaleOrderItem :afterSaleOrder="item" v-if="orderType == '商品订单售后'"></AfterSaleOrderItem>
            <AfterSaleItem :afterSaleItem="item" v-else></AfterSaleItem>
          </view>
        </view>
      </list-container>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12">
      <PopOrderType :types="types" @change="onChangeType"></PopOrderType>
    </u-popup>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopOrderType from '../../../../pages/myOrder/components/PopOrderType/PopOrderType.vue';
  import SearchBar from '@/components/SearchBar';
  import AfterSaleItem from '../components/AfterSaleItem/AfterSaleItem.vue';
  import AfterSaleOrderItem from '../components/AfterSaleOrderItem/AfterSaleOrderItem';

  import {
    productAfterSalesTabs,
    serviceAfterSalesTabs,
    intentionAfterSalesTabs,
    afterSalesStatus,
    afterSalesList,
    afterSaleOrderList,
  } from '@/mock/afterSalesList';

  export default {
    components: {
      FjSticky,
      ListContainer,
      NavBar,
      PopOrderType,
      SearchBar,
      AfterSaleItem,
      AfterSaleOrderItem,
    },
    props: {},
    data() {
      return {
        types: ['商品订单售后', '意向订单售后', '服务订单售后'],
        orderType: '商品订单售后',
        orderStatus: '',
        orders: afterSaleOrderList,
        title: '售后订单',
        popupVisible: false,
        value: '',
        showLoading: true,
        finished: false,
      };
    },
    computed: {
      tabs() {
        switch (this.orderType) {
          case '商品订单售后':
            return productAfterSalesTabs.map((e) => ({ name: e }));
          case '意向订单售后':
            return intentionAfterSalesTabs.map((e) => ({ name: e }));
          case '服务订单售后':
            return serviceAfterSalesTabs.map((e) => ({ name: e }));
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
          case '商品订单售后':
            this.orders = afterSaleOrderList;
            break;
          case '意向订单售后':
            this.orders = afterSalesList;
            break;
          case '服务订单售后':
            this.orders = afterSalesList;
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
  .search-wrap {
    width: 316rpx;
  }
  .line-tabs {
    /deep/ .u-tabs__wrapper__nav__line {
      bottom: 0 !important;
      background-color: #b09053 !important;
      border-radius: 100rpx !important;
    }
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
