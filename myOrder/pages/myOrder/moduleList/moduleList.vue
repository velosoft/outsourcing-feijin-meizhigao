<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col flex-1 body">
      <view class="flex-col card">
        <view class="flex-row justify-between items-center">
          <text class="field-name">商品订单号：SD23051600001</text>
          <view class="flex-row items-center" @click="gotoShipping">
            <text class="field-name action-text">查看物流</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
          </view>
        </view>
        <text class="self-start field-name mt-12">组件数量：20</text>
        <view class="flex-row items-center mt-12">
          <text class="field-name">合计金额：</text>
          <text class="money-font money-text">￥899.99</text>
        </view>
      </view>
      <view class="flex-col card mt-14">
        <text class="money-font title-text">商品信息</text>
        <list-container class="mt-8" :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
          <view class="flex-col">
            <OrderProductItem class="list-item mt-12" v-for="(item, index) in items" :key="index"></OrderProductItem>
          </view>
        </list-container>
      </view>
    </view>
  </view>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '../../../pages/myOrder/components/OrderProductItem/OrderProductItem.vue';

  export default {
    components: { ListContainer, NavBar, OrderProductItem },
    props: {},
    data() {
      return {
        title: '组件清单',
        showEmpty: false,
        showLoading: true,
        finished: false,
        items: [null, null, null, null, null, null],
      };
    },
    methods: {
      gotoShipping() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/shippingPackage/shippingPackage' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 0 24rpx 40rpx;
    overflow-y: auto;
  }
  .card {
    padding: 24rpx;
    background-color: #f0f0f0;
    border-radius: 8rpx;
  }
  .field-name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
  .action-text {
    color: #b09053;
  }
  .icon-arrow {
    width: 8rpx;
    height: 14rpx;
  }
  .money-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .money-text {
    font-weight: 600;
    line-height: 34rpx;
  }
  .title-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
</style>
