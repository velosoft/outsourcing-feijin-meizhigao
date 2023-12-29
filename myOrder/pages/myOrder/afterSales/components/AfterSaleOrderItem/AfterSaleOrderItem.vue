<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between items-center header">
      <text class="order-number">{{ '售后订单：' + afterSaleOrder.orderNumber }}</text>
      <view class="flex-row items-center">
        <view class="shrink-0 dot"></view>
        <text class="title text ml-4">{{ afterSaleOrder.orderStatus }}</text>
      </view>
    </view>
    <view class="flex-col container">
      <view class="flex-row self-stretch" @click="gotoAfterSalesDetail">
        <image class="thumb" :src="afterSaleOrder.goods.image" />
        <view class="flex-col flex-1 ml-8 justify-between">
          <text class="line-clamp-two title title-text">{{ afterSaleOrder.goods.title }}</text>
          <view class="flex-row justify-between">
            <text class="label spec">{{ afterSaleOrder.goods.desc }}</text>
            <text class="label">{{ 'x' + afterSaleOrder.goods.quantity }}</text>
          </view>
          <price class="cf-black-font" :price="afterSaleOrder.goods.price" />
        </view>
      </view>
      <view class="flex-row justify-between items-center tips-wrap">
        <text class="label type">{{ afterSaleOrder.refundStatus }}</text>
        <view class="flex-row" v-if="afterSaleOrder.refundStatus !== '换货中'">
          <text class="refund">退款金额</text>
          <text class="refund ml-8">{{ '¥' + afterSaleOrder.refundNumber + '.00' }}</text>
        </view>
      </view>
      <view class="flex-col justify-center items-center btn" v-if="afterSaleOrder.orderStatus == '申请中'" @click="onShowDialog"
        ><text class="btn-text">撤销申请</text></view
      >
      <view class="flex-col justify-center items-center btn" v-if="afterSaleOrder.orderStatus == '售后关闭'"><text class="btn-text">删除记录</text></view>
    </view>
    <confirm-panel
      :isShow="showDialog"
      :isnormal="false"
      content="您确定取消售后吗？"
      @cancel="onCancel"
      @confirm="onConfirm"
    ></confirm-panel>
  </view>
</template>

<script>
  import ConfirmPanel from '@/components/ConfirmPanel.vue';
  import Price from '@/components/Price/Price';
  export default {
    components: { ConfirmPanel, Price },
    props: {
      afterSaleOrder: {
        type: Object,
        default: () => ({
          orderNumber: 2023060801256768,
          orderStatus: '申请中',
          refundStatus: '仅退款',
          refundNumber: 200,
          goods: {
            image:
              'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
            title: '全屋整理收纳服务（单次）',
            desc: '按面积核算（元/m)',
            price: 200,
            quantity: 1,
          },
        }),
      },
    },
    data() {
      return { showDialog: false };
    },

    methods: {
      gotoAfterSalesDetail() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/afterSales/refund/refund' });
      },
      onShowDialog() {
        console.log('弹框');
        this.showDialog = true;
      },
      onCancel() {
        this.showDialog = false;
      },
      onConfirm() {
        this.showDialog = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding-bottom: 20rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .header {
      padding: 24rpx 24rpx 16rpx;
      border-bottom: solid 2rpx #f0f0f0;
      .order-number {
        color: #6d6d6d;
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
      }
      .dot {
        background-color: #b09053;
        border-radius: 50%;
        width: 12rpx;
        height: 12rpx;
      }
      .title {
        font-size: 30rpx;
        font-family: 'PingFang SC';
        font-weight: 500;
      }
      .text {
        color: #b09053;
        line-height: 42rpx;
      }
    }

    .container {
      padding: 24rpx 24rpx 0;

      .thumb {
        border-radius: 12rpx;
        width: 144rpx;
        height: 144rpx;
      }
      .title-text {
        color: #111111;
        font-size: 28rpx;
        line-height: 40rpx;
      }
      .label {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        font-weight: 500;
        color: #6d6d6d;
      }
      .spec {
        font-weight: unset;
      }
      .tips-wrap {
        margin-top: 24rpx;
        padding: 8rpx 16rpx;
        background-color: #f1f1f1b3;
        border-radius: 8rpx;
      }
      .type {
        color: #111111;
      }
      .refund {
        font-size: 24rpx;
        font-family: '.AppleSystemUIFont';
        line-height: 30rpx;
        font-weight: 600;
        color: #111111;
      }
      .btn {
        align-self: flex-end;
        margin-top: 24rpx;
        height: 52rpx;
        border-radius: 8rpx;
        border: 2rpx solid #e3e3e3;
        padding: 0 18rpx;
        .btn-text {
          font-size: 24rpx;
          font-family: PingFangSC;
          font-weight: 500;
          color: #6d6d6d;
          line-height: 52rpx;
        }
      }
    }
  }
</style>
