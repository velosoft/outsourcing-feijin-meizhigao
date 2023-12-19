<template>
<view class="flex-col order-item">
  <view class="flex-row justify-between items-center order-header">
    <text class="total-text">{{`订单号：${order.orderNumber}`}}</text>
    <view class="flex-col">
      <view
        class="flex-row items-center self-stretch"
        v-if="order.orderStatus === '待付款' || order.orderStatus === '待发货' || order.orderStatus === '待收货' || order.orderStatus === '交易完成'"
      >
        <view class="shrink-0 dot-yellow"></view>
        <text class="status-text text-yellow ml-4">{{order.orderStatus}}</text>
      </view>
      <view
        class="flex-row items-center self-start"
        v-if="order.orderStatus === '交易关闭' || order.orderStatus === '已取消'"
      >
        <view class="shrink-0 dot-gray"></view>
        <text class="status-text text-gray ml-4">{{order.orderStatus}}</text>
      </view>
    </view>
  </view>
  <view class="flex-col order-products" @click="onClick">
    <view class="flex-col list-item mt-14" v-for="(item, index) in order.products" :key="index">
      <view class="flex-row self-start order-left">
        <view class="flex-col justify-start items-center shrink-0 relative order-image">
          <image class="order-image" :src="item.productImageURL" />
          <view class="flex-col justify-start items-center order-seckill-logo pos" v-if="item.isSeckill">
            <text class="seckill-font seckill-text">秒杀</text>
          </view>
        </view>
        <view class="flex-col flex-1 product-summary ml-8">
          <text class="product-name">{{item.productName}}</text>
          <text class="product-desc mt-8">{{item.productDescription}}</text>
          <view class="flex-col mt-8">
            <view class="flex-row items-baseline" v-if="!item.isSeckill">
              <text class="seckill-font">￥</text>
              <text class="font_19 text_41">200</text>
              <text class="font_20 text_46">.00</text>
            </view>
            <view class="flex-row items-center" v-if="item.isSeckill">
              <text class="product-count-font text_8">秒杀价</text>
              <text class="seckill-font text_9">￥</text>
              <text class="font_19 text_47">200</text>
              <text class="font_20 text_48">.00</text>
            </view>
          </view>
        </view>
      </view>
      <view class="flex-col items-end self-end mt-28">
        <text class="product-count-font prodouct-count">{{`x${item.productQuantity}`}}</text>
        <text class="sale-status mt-12">{{item.afterSaleStatus}}</text>
      </view>
    </view>
  </view>
  <view class="flex-col justify-start items-end total-wrapper">
    <text class="total-text">
      {{`共 ${order.products.length} 件，合计￥${order.totalAmount}（含运费￥${order.shippingFee}）`}}
    </text>
  </view>
  <view class="flex-col">
    <view class="flex-row justify-end actions" v-if="order.orderStatus === '待收货'">
      <view class="flex-col justify-start items-center button"><text class="product-count-font">申请售后</text></view>
      <view class="flex-col justify-start items-center button ml-8" @click="onClick_1">
        <text class="product-count-font">查看物流</text>
      </view>
      <view class="flex-col justify-start items-center confirm-receive ml-8" @click="onClick_2">
        <text class="color-white">确认收货</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center actions" v-if="order.orderStatus === '待付款'">
      <text class="sale-status">支付倒计时：59分钟</text>
      <view class="flex-row">
        <view class="flex-col justify-start items-center button" @click="onClick_3">
          <text class="product-count-font">取消订单</text>
        </view>
        <view class="flex-col justify-start items-center confirm-receive ml-8">
          <text class="color-white">去付款</text>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start items-end actions" v-if="order.orderStatus === '待发货'">
      <view class="flex-col justify-start items-center button"><text class="product-count-font">申请售后</text></view>
    </view>
    <view
      class="flex-row justify-end actions"
      v-if="order.orderStatus === '交易完成' || order.orderStatus === '交易关闭'"
    >
      <view class="flex-col justify-start items-center button"><text class="product-count-font">申请开票</text></view>
      <view class="flex-col justify-start items-center button ml-8">
        <text class="product-count-font">我要评价</text>
      </view>
      <view class="flex-col justify-start items-center button ml-8">
        <text class="product-count-font">再次购买</text>
      </view>
    </view>
    <view class="flex-row justify-end actions" v-if="order.orderStatus === '已取消'">
      <view class="flex-col justify-start items-center button"><text class="product-count-font">删除记录</text></view>
      <view class="flex-col justify-start items-center button ml-8">
        <text class="product-count-font">再次购买</text>
      </view>
    </view>
  </view>
  <u-modal
    :show="dialogVisible"
    @confirm="onClose"
    @cancel="onClose"
    confirmColor="#b09053"
    cancelColor="#9e9ea0"
    confirmText="确定"
    :showCancelButton="true"
    cancelText="取消"
    content="您确定已收到货了吗？"
  ></u-modal>
  <u-popup :show="popupVisible" @close="onClose_1" mode="bottom" :round="10" :closeable="true">
    <PopOrderCancel></PopOrderCancel>
  </u-popup>
</view>
</template>

<script>
import PopOrderCancel from '../../../../pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';

export default {
  components: { PopOrderCancel },
  props: {
    order: {
      type: Object,
      default: () => ({
        orderNumber: '2023060801256768',
        orderStatus: '待付款',
        orderTime: '2023-06-08 01:25:67',
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
      }),
    },
  },
  data() {
    return {
      dialogVisible: false,
      popupVisible: false,
    };
  },

  methods: {
    onClick() {
      uni.navigateTo({ url: '/pages/myOrder/productOrderDetail/productOrderDetail' });
    },
    onClick_1() {
      uni.navigateTo({ url: '/pages/chakanwuliu_wuliisong_duogewuliu/chakanwuliu_wuliisong_duogewuliu' });
    },
    onClick_2() {
      this.dialogVisible = true;
    },
    onClose() {
      this.dialogVisible = false;
    },
    onClick_3() {
      this.popupVisible = true;
    },
    onClose_1() {
      this.popupVisible = false;
    },
  },
};
</script>

<style scoped lang="css">
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
.order-left {
  width: 496rpx;
  height: 0;
}
.order-image {
  border-radius: 12rpx;
  width: 144rpx;
  height: 144rpx;
}
.order-seckill-logo {
  background-color: #bb3e0c;
  border-radius: 12rpx 0rpx;
  width: 76rpx;
}
.pos {
  position: absolute;
  left: 0;
  top: 0;
}
.seckill-font {
  font-size: 20rpx;
  line-height: 28rpx;
  font-weight: 500;
  color: #111111;
}
.seckill-text {
  color: #ffffff;
}
.product-summary {
  margin-bottom: -144rpx;
}
.product-name {
  font-size: 28rpx;
  line-height: 40rpx;
  font-weight: 500;
  color: #2d2e32;
}
.product-desc {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #9e9ea0;
}
.font_19 {
  font-size: 32rpx;
  line-height: 34rpx;
  color: #111111;
}
.text_41 {
  line-height: 36rpx;
}
.font_20 {
  font-size: 20rpx;
  line-height: 24rpx;
  color: #111111;
}
.text_46 {
  margin-left: 4rpx;
}
.product-count-font {
  font-size: 24rpx;
  line-height: 34rpx;
  font-weight: 500;
  color: #9e9ea0;
}
.text_8 {
  color: #bb3e0c;
}
.text_9 {
  color: #bb3e0c;
}
.text_47 {
  color: #bb3e0c;
  line-height: 36rpx;
}
.text_48 {
  margin-left: 4rpx;
  color: #bb3e0c;
}
.prodouct-count {
  text-transform: uppercase;
}
.sale-status {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #b09053;
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
.button {
  padding: 8rpx 0;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
  border-left: solid 2rpx #e3e3e3;
  border-right: solid 2rpx #e3e3e3;
  border-top: solid 2rpx #e3e3e3;
  border-bottom: solid 2rpx #e3e3e3;
}
.confirm-receive {
  padding: 8rpx 0;
  background-color: #000000;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
}
.color-white {
  font-size: 24rpx;
  line-height: 34rpx;
  font-weight: 500;
  color: #ffffff;
}
</style>
