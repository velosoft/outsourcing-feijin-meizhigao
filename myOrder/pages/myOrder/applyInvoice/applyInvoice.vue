<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <ApplyInvoiceOrder class="order-info"></ApplyInvoiceOrder>
    <ApplyInvoiceForm class="invoice-form"></ApplyInvoiceForm>
    <view class="flex-col tips tips-margin">
      <text class="self-start font tips-title">发票须知</text>
      <text class="self-stretch tips-desc mt-12">
        1、开票金额为用户实际支付金额(不含活动优惠金额、优惠券、积分、收纳币)
        2、电子发票可在确认收货后申请开票，开票后在“订单详情“查看
      </text>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start footer-fixed">
      <view class="flex-col justify-start items-center button text-wrapper" @click="gotoInvoiceDetail">
        <text class="font btn-text">确认申请</text>
      </view>
    </view>
  </view>
</template>

<script>
  import ApplyInvoiceForm from '@/myOrder/pages/myOrder/components/ApplyInvoiceForm/ApplyInvoiceForm.vue';
  import ApplyInvoiceOrder from '@/myOrder/pages/myOrder/components/ApplyInvoiceOrder/ApplyInvoiceOrder.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { ApplyInvoiceForm, ApplyInvoiceOrder, NavBar },
    props: {},
    data() {
      return {
        title: '申请发票',
      };
    },
    methods: {
      gotoInvoiceDetail() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/invoiceDetail/invoiceDetail' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    padding-bottom: 204rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .order-info {
    margin: 0 24rpx;
  }
  .font {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
  .invoice-form {
    margin: 24rpx 24rpx 0;
  }
  .tips {
    padding: 32rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .tips-margin {
    margin: 24rpx 24rpx 0;
  }
  .tips-title {
    color: #000000;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .tips-desc {
    color: #9c9c9f;
    font-size: 24rpx;
    line-height: 44rpx;
    text-align: left;
  }
  .footer-fixed {
    padding: 32rpx 0 48rpx;
    background-color: #ffffff;
    width: 750rpx;
  }
  .button {
    margin: 0 40rpx;
  }
  .text-wrapper {
    padding: 24rpx 0;
    background-color: #b09053;
    border-radius: 48rpx;
    width: 670rpx;
  }
  .btn-text {
    color: #ffffff;
    font-size: 30rpx;
    font-weight: 500;
    line-height: 42rpx;
  }
</style>
