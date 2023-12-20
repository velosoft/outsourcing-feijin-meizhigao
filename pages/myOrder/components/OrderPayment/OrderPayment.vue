<template>
  <view class="flex-col order-payment">
    <view class="flex-col flex-1 items">
      <view class="flex-row justify-between items-center">
        <text class="item-name">商品总数</text>
        <text class="item-value-bold">{{ `${order.products.length}件` }}</text>
      </view>
      <view class="flex-row justify-between item">
        <text class="item-name">商品总价</text>
        <text class="self-start item-value-bold">{{ `￥${order.totalAmount}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item">
        <text class="item-name">运费</text>
        <text class="item-value-bold">{{ `￥${order.shippingFee}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.activityDiscount">
        <text class="item-name">活动优惠</text>
        <text class="item-value-bold">{{ `-￥${order.activityDiscount}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.couponDiscount">
        <text class="item-name">优惠券减免</text>
        <text class="item-value-bold">{{ `-￥${order.couponDiscount}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.pointsDeduction">
        <text class="item-name">积分抵扣</text>
        <text class="item-value-bold">{{ `-￥${order.pointsDeduction}` }}</text>
      </view>
      <view class="flex-row justify-between items-center item" v-if="order.storageCoinDeduction">
        <text class="item-name">收纳币抵扣</text>
        <text class="item-value-bold">{{ `-￥${order.storageCoinDeduction}` }}</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center total-wrapper">
      <text class="item-name total-text">实付款</text>
      <text class="item-value-bold">{{ `￥${order.totalAmount}` }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
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
        }),
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .order-payment {
    padding-left: 24rpx;
    padding-right: 22rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .items {
    padding: 44rpx 0 35rpx;
    border-bottom: solid 2rpx #3c3d41;
  }
  .item-name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #8c8f95;
  }

  .item {
    margin-top: 32rpx;
  }
  .item-value-bold {
    font-size: 28rpx;
    line-height: 34rpx;
    font-weight: 600;
    color: #2d2e32;
  }
  .total-wrapper {
    padding: 30rpx 0 30rpx;
  }
  .total-text {
    color: #2d2e32;
    font-weight: 500;
  }
</style>
