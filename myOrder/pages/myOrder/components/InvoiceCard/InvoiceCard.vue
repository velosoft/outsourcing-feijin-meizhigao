<template>
  <view class="flex-row invoice-card">
    <view class="flex-row">
      <view class="border-circle"></view>
      <view class="border-dashed"></view>
    </view>
    <view class="flex-col flex-1 detail">
      <view class="flex-col justify-start items-center self-center relative header">
        <image class="icon-invoice" src="/myOrder/static/images/icon-invoice.png" />
        <image class="invoice-type" src="/myOrder/static/images/icon-invoice-type.png" />
      </view>
      <view class="flex-col content mt-32">
        <view class="flex-row items-center">
          <text class="field-name">发票类型</text>
          <text class="field-value ml-16">{{ invoice.invoiceType }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">抬头类型</text>
          <text class="field-value ml-16">{{ invoice.headerType }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">发票抬头</text>
          <text class="field-value ml-16">{{ invoice.invoiceHeader }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">单位税号</text>
          <text class="field-value ml-16">{{ invoice.taxNumber }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">开户银行</text>
          <text class="field-value ml-16">{{ invoice.bankName }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">银行账户</text>
          <text class="field-value ml-16">{{ invoice.bankAccount }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">注册地址</text>
          <text class="field-value ml-16">{{ invoice.registrationAddress }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">企业电话</text>
          <text class="field-value ml-16">{{ invoice.enterprisePhone }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">发票内容</text>
          <text class="field-value ml-16">{{ invoice.invoiceContent }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">开票金额</text>
          <text class="field-value ml-16">￥{{ invoice.invoiceAmount.toFixed(2) }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">申请时间</text>
          <text class="field-value ml-16">{{ invoice.applicationTime }}</text>
        </view>
        <view class="flex-row mt-20 items-center">
          <text class="field-name">开票时间</text>
          <text class="field-value ml-16">{{ invoice.invoiceTime }}</text>
        </view>
      </view>
    </view>
    <view class="flex-row">
      <view class="border-dashed"></view>
      <view class="border-circle"></view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      invoice: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .invoice-card {
    background-color: #ffffff;
    box-shadow: 0rpx 4rpx 8rpx 0rpx #eeeeee80;
    border-radius: 28rpx;
  }
  .border-dashed {
    background-image: repeating-linear-gradient(
      0deg,
      #f1f1f1,
      #f1f1f1 0.338409475465313%,
      transparent 0.338409475465313%,
      transparent 0.676818950930626%
    );
    width: 2rpx;
  }
  .border-circle {
    margin: 10rpx 4rpx;
    width: 40rpx;
    background: radial-gradient(circle, #e8e8e8 0%, #e8e8e8 20%, transparent 20%);
    background-size: 20px 40px;
    background-repeat: repeat-y;
  }
  .detail {
    padding: 40rpx 0;
  }
  .header {
    width: 212rpx;
  }
  .icon-invoice {
    width: 136rpx;
    height: 68rpx;
  }
  .invoice-type {
    width: 212rpx;
    height: 24rpx;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .content {
    padding: 0 32rpx;
  }
  .field-name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #111111;
  }
  .field-value {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #6d6d6d;
  }
</style>
