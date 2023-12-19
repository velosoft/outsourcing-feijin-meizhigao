<template>
<view class="flex-col page">
  <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
  <view class="flex-col flex-1 body">
    <view class="flex-row items-center status">
      <view class="flex-col items-start">
        <image
          class="icon-status"
          src="/static/images/icon_status_clock.png"
          v-if="order.orderStatus === '待付款' || order.orderStatus === '待发货'  || order.orderStatus === '待收货'"
        />
        <image class="icon-status" src="/static/images/icon_status_close.png" v-if="order.orderStatus === '交易关闭'" />
        <image class="icon-status" src="/static/images/icon_status_ok.png" v-if="order.orderStatus === '交易完成'" />
        <image class="icon-status" src="/static/images/icon_status_info.png" v-if="order.orderStatus === '已取消'" />
      </view>
      <text class="status-text ml-12">{{order.orderStatus}}</text>
      <text class="ml-12 wait-pay" v-if="order.orderStatus === '待付款'">支付剩余 29:00 分钟</text>
    </view>
    <view class="flex-col relative detail">
      <OrderAddr class="relative" :addr="order.receiverInfo"></OrderAddr>
      <OrderProducts class="mt-12" :products="order.products"></OrderProducts>
      <OrderPayment class="mt-12" :order="order"></OrderPayment>
      <OrderSummary class="mt-12" :order="order"></OrderSummary>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start items-end footer">
      <view class="flex-col actions">
        <view class="flex-row self-stretch" v-if="order.orderStatus === '待付款'">
          <u-button text="取消订单" type="primary" shape="circle" :plain="true"></u-button>
          <u-button class="ml-10" text="去付款" type="primary" shape="circle" v-if="!order.isSeckill"></u-button>
          <u-button
            class="cf-btn-black ml-10"
            text="去付款"
            type="primary"
            shape="circle"
            v-if="order.isSeckill"
          ></u-button>
        </view>
        <view class="flex-col justify-start self-start" v-if="order.orderStatus === '待发货'">
          <u-button text="申请售后" type="primary" shape="circle" :plain="true"></u-button>
        </view>
        <view class="flex-row self-stretch" v-if="order.orderStatus === '待收货'">
          <u-button text="申请售后" type="primary" shape="circle" :plain="true"></u-button>
          <u-button class="ml-10" text="确认收货" type="primary" shape="circle" v-if="!order.isSeckill"></u-button>
          <u-button
            class="cf-btn-black ml-10"
            text="确认收货"
            type="primary"
            shape="circle"
            v-if="order.isSeckill"
          ></u-button>
        </view>
        <view class="flex-row self-stretch" v-if="order.orderStatus === '已取消' || order.orderStatus === '交易关闭'">
          <u-button text="删除记录" type="primary" shape="circle" :plain="true"></u-button>
          <u-button class="ml-8" text="再次购买" type="primary" shape="circle" :plain="true"></u-button>
        </view>
        <view class="flex-row self-start" v-if="order.orderStatus === '交易完成'">
          <u-button text="申请开票" type="primary" shape="circle" :plain="true"></u-button>
          <u-button class="ml-8" text="查看评价" type="primary" shape="circle" :plain="true"></u-button>
          <u-button class="ml-8" text="再次购买" type="primary" shape="circle" :plain="true"></u-button>
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import OrderAddr from '../../../pages/myOrder/components/OrderAddr/OrderAddr.vue';
import OrderPayment from '../../../pages/myOrder/components/OrderPayment/OrderPayment.vue';
import OrderProducts from '../../../pages/myOrder/components/OrderProducts/OrderProducts.vue';
import OrderSummary from '../../../pages/myOrder/components/OrderSummary/OrderSummary.vue';

export default {
  components: { NavBar, OrderAddr, OrderPayment, OrderProducts, OrderSummary },
  props: {},
  data() {
    return {
      order: {
        orderNumber: '2023060801256768',
        orderStatus: '待付款',
        orderTime: '2023-06-08 01:25:67',
        isSeckill: true,
        receiverInfo: {
          receiverName: '李冰冰',
          receiverPhone: '15212345678',
          receiverAddress: '广东省广州市天河区车陂南东宏国际广场12楼06号',
        },
        products: [
          {
            productName: '全屋整理收纳服务（单次）',
            productDescription: '鎏金岁月三层长45宽30高75',
            productPrice: 200,
            productQuantity: 2,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: false,
            afterSaleStatus: '正常',
            productStatus: '正常',
          },
          {
            productName: '示例产品2',
            productDescription: '示例产品2说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '售后成功',
            productStatus: '正常',
          },
          {
            productName: '示例产品2.1',
            productDescription: '示例产品2.1说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '正常',
            productStatus: '补购商品',
          },
          {
            productName: '示例产品2.2',
            productDescription: '示例产品2.2说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '正常',
            productStatus: '已退回',
          },
          {
            productName: '示例产品2.3',
            productDescription: '示例产品2.3说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '正常',
            productStatus: '正常',
          },
        ],
        shippingFee: 10,
        activityDiscount: 20,
        couponDiscount: 30,
        pointsDeduction: 10,
        storageCoinDeduction: 5,
        totalAmount: 235,
        orderMessage: '请尽快发货',
        paymentTime: '2023-06-08 02:30:45',
        paymentMethod: '微信支付',
        comment: {
          rating: 5,
          content: '商品收纳位置大，质量妥妥，有需要的朋友可以下单',
          images: [
            'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
            'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
            'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
            'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
            'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
            'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
          ],
        },
      },
      title: '订单详情',
    };
  },

  methods: {},
};
</script>

<style scoped lang="css">
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
  width: 48rpx;
  height: 48rpx;
}
.status-text {
  color: #ffffff;
  font-size: 40rpx;
  font-weight: 500;
  line-height: 56rpx;
}
.wait-pay {
  color: #ffffff;
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
