<template>
  <view class="flex-col page">
    <NavBar
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      :background="navBarColor"
      :titleColor="titleColor"
    ></NavBar>
    <view class="flex-col flex-1 body">
      <view class="flex-row items-center status">
        <image
          class="icon-status"
          src="/static/images/icon_status_clock.png"
          v-if="order.orderStatus === '待付款' || order.orderStatus === '待发货' || order.orderStatus === '待收货'"
        />
        <image class="icon-status" src="/static/images/icon_status_close.png" v-if="order.orderStatus === '交易关闭'" />
        <image class="icon-status" src="/static/images/icon_status_ok.png" v-if="order.orderStatus === '交易完成'" />
        <image class="icon-status" src="/static/images/icon_status_info.png" v-if="order.orderStatus === '已取消'" />
        <view class="flex-col">
          <text class="status-text ml-12">{{ order.orderStatus }}</text>
          <view class="flex-row items-center ml-12 wait-pay" v-if="order.orderStatus === '待付款'">
            <text>支付剩余</text>
            <u-count-down class="ml-4" :time="30 * 60 * 1000" format="mm:ss"> </u-count-down>
            <text class="ml-4">分钟</text>
          </view>
        </view>
      </view>
      <view class="flex-col relative detail">
        <OrderAddr class="relative" :addr="order.receiverInfo"></OrderAddr>
        <OrderProducts class="mt-12" :products="order.products"></OrderProducts>
        <OrderPayment class="mt-12" :order="order"></OrderPayment>
        <OrderSummary class="mt-12" :order="order"></OrderSummary>
      </view>
      <view class="fixed-bottom-safe flex-row justify-end footer">
        <view class="btn btn-plain" v-if="order.orderStatus === '待付款'" @click="onShowCancel">
          <text>取消订单</text>
        </view>
        <view class="btn btn-primary" v-if="order.orderStatus === '待付款'">
          <text>去付款</text>
        </view>
        <view
          class="btn btn-plain"
          v-if="order.orderStatus === '待发货' || order.orderStatus === '待收货'"
          @click="gotoAfterSale"
        >
          <text>申请售后</text>
        </view>
        <view class="btn btn-primary" v-if="order.orderStatus === '待收货'" @click="onShowConfirm">
          <text>确认收货</text>
        </view>
        <view
          class="btn btn-plain"
          v-if="order.orderStatus === '交易完成' && !order.invoiced"
          @click="gotoApplyInvoice"
        >
          <text>申请开票</text>
        </view>
        <view
          class="btn btn-plain"
          v-if="order.orderStatus === '交易完成' && order.invoiced"
          @click="gotoInvoiceDetail"
        >
          <text>查看发票</text>
        </view>
        <view class="btn btn-plain" v-if="order.orderStatus === '交易完成'" @click="gotoComment">
          <text>查看评价</text>
        </view>
        <view class="btn btn-plain" v-if="order.orderStatus === '交易关闭' || order.orderStatus === '已取消'">
          <text>删除记录</text>
        </view>
        <view
          class="btn btn-plain"
          v-if="order.orderStatus === '交易完成' || order.orderStatus === '交易关闭' || order.orderStatus === '已取消'"
        >
          <text>再次购买</text>
        </view>
      </view>
    </view>
    <u-popup :show="showCancel" @close="onCloseCancel" mode="bottom" :round="10" :closeable="true">
      <pop-order-cancel :reasons="reasons" @click="onCloseCancel"></pop-order-cancel>
    </u-popup>
    <confirm-panel
      :isShow="showConfirm"
      content="您确定已收到货了吗？"
      @cancel="onCloseConfirm"
      @confirm="onCloseConfirm"
    ></confirm-panel>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderAddr from '../../../pages/myOrder/components/OrderAddr/OrderAddr.vue';
  import OrderPayment from '../../../pages/myOrder/components/OrderPayment/OrderPayment.vue';
  import OrderProducts from '../../../pages/myOrder/components/OrderProducts/OrderProducts.vue';
  import OrderSummary from '../../../pages/myOrder/components/OrderSummary/OrderSummary.vue';
  import { productOrders } from '@/mock/personal/orders';
  import { cancelReasons } from '@/mock/personal/orders.js';
  import ConfirmPanel from '@/components/ConfirmPanel.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';

  export default {
    components: { NavBar, OrderAddr, OrderPayment, OrderProducts, OrderSummary, PopOrderCancel, ConfirmPanel },
    props: {},
    data() {
      return {
        isShowNavbar: false,
        navBarColor: '#b09053',
        titleColor: '#ffffff',
        order: productOrders[0],
        title: '订单详情',
        showCancel: false,
        showConfirm: false,
        reasons: cancelReasons,
      };
    },
    onLoad(option) {
      this.order = productOrders.find((e) => e.orderNumber === option.id) || productOrders[0];
    },
    onPageScroll(e) {
      // 页面滚动时执行
      if (e.scrollTop > 10) {
        if (!this.isShowNavbar) {
          this.isShowNavbar = true;
          this.navBarColor = '#ffffff';
          this.titleColor = '#000000';
        }
      } else {
        if (this.isShowNavbar) {
          this.isShowNavbar = false;
          this.navBarColor = '#b09053';
          this.titleColor = '#ffffff';
        }
      }
    },
    methods: {
      gotoComment() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/productComment/productComment' });
      },
      gotoAfterSale() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/applyAfterSale/applyAfterSale' });
      },
      gotoApplyInvoice() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/applyInvoice/applyInvoice' });
      },
      gotoInvoiceDetail() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/invoiceDetail/invoiceDetail' });
      },
      onShowCancel() {
        this.showCancel = true;
      },
      onCloseCancel() {
        this.showCancel = false;
      },
      onShowConfirm() {
        this.showConfirm = true;
      },
      onCloseConfirm() {
        this.showConfirm = false;
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
    padding-bottom: 132rpx;
    overflow-y: auto;
  }
  .status {
    padding: 48rpx 24rpx 128rpx;
    background-color: #b09053;
  }
  .icon-status {
    width: 44rpx;
    height: 44rpx;
  }
  .status-text {
    color: #ffffff;
    font-size: 40rpx;
    font-weight: 500;
    line-height: 56rpx;
  }
  .wait-pay {
    color: #ffffff;
    font-size: 26rpx;

    /deep/ .u-count-down__text {
      color: #ffffff;
      font-size: 26rpx;
    }
  }
  .detail {
    margin-top: -64rpx;
    padding: 24rpx;
    background-color: #f8f8f8;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
  }
  .footer {
    padding: 32rpx 48rpx;
    background-color: #ffffff;
  }
  .actions {
    margin-right: 48rpx;
  }
  .btn {
    border-radius: 38rpx;
    font-size: 28rpx;
    line-height: 40rpx;
    width: 164rpx;
    height: 68rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn + .btn {
    margin-left: 20rpx;
  }
  .btn-plain {
    border: 2rpx solid #dec9a0;
    color: #b09053;
  }
  .btn-primary {
    background-color: #b09053;
    color: #ffffff;
  }
</style>
