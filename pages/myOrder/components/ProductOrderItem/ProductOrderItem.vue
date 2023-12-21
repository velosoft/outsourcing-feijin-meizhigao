<template>
  <view class="flex-col order-item">
    <view class="flex-row justify-between items-center self-stretch order-header">
      <text class="total-text">{{ `订单号：${order.orderNumber}` }}</text>
      <view class="flex-col">
        <view
          class="flex-row items-center self-stretch"
          v-if="
            order.orderStatus === '待付款' ||
            order.orderStatus === '待发货' ||
            order.orderStatus === '待收货' ||
            order.orderStatus === '交易完成'
          "
        >
          <view class="shrink-0 dot-yellow"></view>
          <text class="status-text text-yellow ml-4">{{ order.orderStatus }}</text>
        </view>
        <view
          class="flex-row items-center self-start"
          v-if="order.orderStatus === '交易关闭' || order.orderStatus === '已取消'"
        >
          <view class="shrink-0 dot-gray"></view>
          <text class="status-text text-gray ml-4">{{ order.orderStatus }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col self-stretch order-products" @click="gotoDetail">
      <order-product-item
        class="list-item mt-14"
        v-for="(item, index) in order.products"
        :key="index"
        :product="item"
        imageSize="144rpx"
      ></order-product-item>
    </view>
    <view class="flex-col justify-start items-end self-stretch total-wrapper">
      <text class="total-text">
        {{ `共 ${order.products.length} 件，合计￥${order.totalAmount}（含运费￥${order.shippingFee}）` }}
      </text>
    </view>
    <view class="flex-row justify-end items-center actions">
      <view class="flex-row items-center pay-count-down" v-if="order.orderStatus === '待付款'">
        <text class="sale-status">支付倒计时：</text>
        <u-count-down class="sale-status" :time="30 * 60 * 1000" format="mm"> </u-count-down>
        <text class="sale-status">分钟</text>
      </view>
      <view class="btn btn-gray" v-if="order.orderStatus === '待付款'" @click="onShowCancel">
        <text>取消订单</text>
      </view>
      <view class="btn btn-black" v-if="order.orderStatus === '待付款'">
        <text>去付款</text>
      </view>
      <view class="btn btn-gray" v-if="order.orderStatus === '待发货' || order.orderStatus === '待收货'">
        <text>申请售后</text>
      </view>
      <view class="btn btn-gray" v-if="order.orderStatus === '待收货'" @click="gotoShipping">
        <text>查看物流</text>
      </view>
      <view class="btn btn-black" v-if="order.orderStatus === '待收货'" @click="onShowConfirm">
        <text>确认收货</text>
      </view>
      <view class="btn btn-gray" v-if="order.orderStatus === '交易完成' || order.orderStatus === '交易关闭'">
        <text>申请开票</text>
      </view>
      <view
        class="btn btn-gray"
        v-if="order.orderStatus === '交易完成' || order.orderStatus === '交易关闭'"
        @click="gotoAddComment"
      >
        <text>我要评价</text>
      </view>
      <view class="btn btn-gray" v-if="order.orderStatus === '已取消'">
        <text>删除记录</text>
      </view>
      <view
        class="btn btn-gray"
        v-if="order.orderStatus === '交易完成' || order.orderStatus === '交易关闭' || order.orderStatus === '已取消'"
      >
        <text>再次购买</text>
      </view>
    </view>
    <confirm-panel
      :isShow="showConfirm"
      content="您确定已收到货了吗？"
      @cancel="onCloseConfirm"
      @confirm="onCloseConfirm"
    ></confirm-panel>
    <u-popup :show="showCancel" @close="onCloseCancel" mode="bottom" :round="10" :closeable="true">
      <pop-order-cancel :reasons="reasons" @click="onCloseCancel"></pop-order-cancel>
    </u-popup>
  </view>
</template>

<script>
  import ConfirmPanel from '@/components/ConfirmPanel.vue';
  import PopOrderCancel from '@/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';
  import OrderProductItem from '@/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import { cancelReasons } from '@/mock/personal/orders.js';

  export default {
    components: { ConfirmPanel, PopOrderCancel, OrderProductItem },
    props: {
      order: Object,
    },
    data() {
      return {
        showConfirm: false,
        showCancel: false,
        reasons: cancelReasons,
      };
    },

    methods: {
      gotoDetail() {
        uni.navigateTo({ url: `/pages/myOrder/productOrderDetail/productOrderDetail?id=${this.order.orderNumber}` });
      },
      gotoShipping() {
        uni.navigateTo({ url: '/pages/myOrder/shippingPackages/shippingPackages' });
      },
      onShowConfirm() {
        this.showConfirm = true;
      },
      onCloseConfirm() {
        this.showConfirm = false;
      },
      onShowCancel() {
        this.showCancel = true;
      },
      onCloseCancel() {
        this.showCancel = false;
      },
      gotoAddComment() {
        uni.navigateTo({ url: '/pages/myOrder/productAddComment/productAddComment' });
      },
    },
  };
</script>

<style scoped lang="less">
  .order-item {
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .order-header {
    padding: 24rpx 24rpx 16rpx;
    border-bottom: solid 2rpx #f0f0f0;
  }
  .total-text {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #6d6d6d;
  }
  .dot-yellow {
    background-color: #b09053;
    border-radius: 50%;
    width: 12rpx;
    height: 12rpx;
  }
  .status-text {
    font-size: 32rpx;
    line-height: 40rpx;
    font-weight: 500;
  }
  .text-yellow {
    color: #b09053;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .dot-gray {
    background-color: #8c8f95;
    border-radius: 50%;
    width: 12rpx;
    height: 12rpx;
  }
  .text-gray {
    color: #8c8f95;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .order-products {
    margin-top: 24rpx;
  }
  .list-item {
    padding: 0 24rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .sale-status {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;

    /deep/ text {
      font-size: 24rpx !important;
      line-height: 34rpx !important;
      color: #b09053 !important;
    }
  }
  .pay-count-down {
    margin-right: auto;
  }
  .total-wrapper {
    margin: 32rpx 24rpx 0;
    padding: 8rpx 0;
    background-color: #f1f1f1b3;
    border-radius: 8rpx;
  }
  .actions {
    padding: 24rpx;
  }
  .btn {
    padding: 8rpx 20rpx;
    border-radius: 8rpx;
    font-size: 24rpx;
    line-height: 34rpx;
    font-weight: 500;
    min-width: 132rpx;
    display: flex;
    justify-content: center;
  }
  .btn + .btn {
    margin-left: 16rpx;
  }
  .btn-gray {
    border: 2rpx solid #e8e8e8;
    color: #9e9ea0;
  }
  .btn-black {
    background-color: #000000;
    color: #ffffff;
  }
</style>
