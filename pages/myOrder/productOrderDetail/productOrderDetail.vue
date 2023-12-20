<template>
  <view class="flex-col page">
    <NavBar
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      :background="navBarColor"
    ></NavBar>
    <view class="flex-col flex-1 body">
      <view class="flex-row items-center status">
        <view class="flex-col items-start">
          <image
            class="icon-status"
            src="/static/images/icon_status_clock.png"
            v-if="
              order.orderStatus === '待付款' ||
              order.orderStatus === '待发货' ||
              order.orderStatus === '待收货'
            "
          />
          <image
            class="icon-status"
            src="/static/images/icon_status_close.png"
            v-if="order.orderStatus === '交易关闭'"
          />
          <image
            class="icon-status"
            src="/static/images/icon_status_ok.png"
            v-if="order.orderStatus === '交易完成'"
          />
          <image
            class="icon-status"
            src="/static/images/icon_status_info.png"
            v-if="order.orderStatus === '已取消'"
          />
        </view>
        <text class="status-text ml-12">{{ order.orderStatus }}</text>
        <view
          class="flex-row items-center ml-12 wait-pay"
          v-if="order.orderStatus === '待付款'"
        >
          <text>支付剩余</text>
          <u-count-down class="ml-4" :time="30 * 60 * 1000" format="mm:ss">
          </u-count-down>
          <text class="ml-4">分钟</text>
        </view>
      </view>
      <view class="flex-col relative detail">
        <OrderAddr class="relative" :addr="order.receiverInfo"></OrderAddr>
        <OrderProducts class="mt-12" :products="order.products"></OrderProducts>
        <OrderPayment class="mt-12" :order="order"></OrderPayment>
        <OrderSummary class="mt-12" :order="order"></OrderSummary>
      </view>
      <view class="fixed-bottom-safe flex-col justify-start items-end footer">
        <view class="flex-col actions">
          <view
            class="flex-row self-stretch"
            v-if="order.orderStatus === '待付款'"
          >
            <u-button
              text="取消订单"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
            <u-button
              class="ml-10"
              text="去付款"
              type="primary"
              shape="circle"
              v-if="!order.isSeckill"
            ></u-button>
            <u-button
              class="cf-btn-black ml-10"
              text="去付款"
              type="primary"
              shape="circle"
              v-if="order.isSeckill"
            ></u-button>
          </view>
          <view
            class="flex-col justify-start self-start"
            v-if="order.orderStatus === '待发货'"
          >
            <u-button
              text="申请售后"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
          </view>
          <view
            class="flex-row self-stretch"
            v-if="order.orderStatus === '待收货'"
          >
            <u-button
              text="申请售后"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
            <u-button
              class="ml-10"
              text="确认收货"
              type="primary"
              shape="circle"
              v-if="!order.isSeckill"
            ></u-button>
            <u-button
              class="cf-btn-black ml-10"
              text="确认收货"
              type="primary"
              shape="circle"
              v-if="order.isSeckill"
            ></u-button>
          </view>
          <view
            class="flex-row self-stretch"
            v-if="
              order.orderStatus === '已取消' || order.orderStatus === '交易关闭'
            "
          >
            <u-button
              text="删除记录"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
            <u-button
              class="ml-8"
              text="再次购买"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
          </view>
          <view
            class="flex-row self-start"
            v-if="order.orderStatus === '交易完成'"
          >
            <u-button
              text="申请开票"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
            <u-button
              class="ml-8"
              text="查看评价"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
            <u-button
              class="ml-8"
              text="再次购买"
              type="primary"
              shape="circle"
              :plain="true"
            ></u-button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import OrderAddr from "../../../pages/myOrder/components/OrderAddr/OrderAddr.vue";
import OrderPayment from "../../../pages/myOrder/components/OrderPayment/OrderPayment.vue";
import OrderProducts from "../../../pages/myOrder/components/OrderProducts/OrderProducts.vue";
import OrderSummary from "../../../pages/myOrder/components/OrderSummary/OrderSummary.vue";
import { productOrders } from "../../../mock/personal/orders";

export default {
  components: { NavBar, OrderAddr, OrderPayment, OrderProducts, OrderSummary },
  props: {},
  data() {
    return {
      isShowNavbar: false,
      navBarColor: "#b09053",
      order: productOrders[0],
      title: "订单详情",
    };
  },
  onPageScroll(e) {
    // 页面滚动时执行
    if (e.scrollTop > 10) {
      if (!this.isShowNavbar) {
        this.isShowNavbar = true;
        this.title = "订单详情";
        this.navBarColor = "#ffffff";
      }
    } else {
      if (this.isShowNavbar) {
        this.isShowNavbar = false;
        this.title = "";
        this.navBarColor = "#b09053";
      }
    }
  },
  methods: {},
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
  padding: 32rpx 0 96rpx;
  background-color: #ffffff;
  width: 750rpx;
}
.actions {
  margin-right: 48rpx;
}
</style>
