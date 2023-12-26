<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col flex-1 body">
      <view class="flex-col order-info">
        <view class="flex-row justify-between">
          <text class="order-no">订单号：20245566667780878</text>
          <text class="font order-status">定金未支付</text>
        </view>
        <OrderProductItem class="mt-14"></OrderProductItem>
        <view class="flex-row reserve-time">
          <text class="reserve-text">预约上门时间：2023-07-18 19:00</text>
        </view>
      </view>
      <view class="flex-col form">
        <view class="flex-row justify-between items-center">
          <text class="field-name">售后类型</text>
          <view class="flex-row items-center">
            <text class="field-value">客服介入</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_arrow_right.png" />
          </view>
        </view>
        <view class="flex-row justify-between mt-24 items-center">
          <text class="field-name">申请原因</text>
          <view class="flex-row items-center" @click="onShowReasons">
            <text class="field-value">请选择</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_arrow_right.png" />
          </view>
        </view>
        <view class="flex-row reason-wrapper items-center">
          <text class="field-name star">*</text>
          <text class="field-name">申请说明</text>
          <text class="field-name reason-tip">（还可以输入200字）</text>
        </view>
        <u-textarea
          class="cf-textarea mt-12"
          v-model="v_model"
          height="220rpx"
          placeholder="必填，请详细描述申请说明"
          placeholderStyle="font-size:24rpx;color:#9E9EA0;font-family:苹方;font-weight:400;"
        ></u-textarea>
        <view class="flex-col self-stretch tips">
          <text class="self-start field-name tip-title">温馨提示：</text>
          <text class="self-stretch tip-text mt-6">
            1、测量人员上门前申请取消订单，定金全部退回至付款账户，测量人员上门后申请取消订单，则定金金额将被扣除，不做退回
            2、售后申请发起后，在平台处理前，您可取消售后申请，平台处理后，则无法取消，请谨慎操作
          </text>
        </view>
      </view>
      <view class="flex-col justify-start items-center button btn-wrapper" @click="gotoResult">
        <text class="btn_text">提交申请</text>
      </view>
    </view>
    <u-popup :show="showReasons" @close="onCloseReasons" mode="bottom" :round="10" :closeable="true">
      <pop-order-cancel title="请选择申请原因" @click="onCloseReasons"></pop-order-cancel>
    </u-popup>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';

  export default {
    components: { NavBar, OrderProductItem, PopOrderCancel },
    props: {},
    data() {
      return {
        title: '售后申请',
        v_model: '',
        showReasons: false,
      };
    },
    methods: {
      onShowReasons() {
        this.showReasons = true;
      },
      onCloseReasons() {
        this.showReasons = false;
      },
      gotoResult() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceAfterSaleResult/serviceAfterSaleResult' });
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
    padding: 0 24rpx 32rpx;
    overflow-y: auto;
  }
  .order-info {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .order-no {
    color: #2d2e32;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .font {
    font-size: 26rpx;
    line-height: 40rpx;
    font-weight: 500;
  }
  .order-status {
    color: #b09053;
    font-size: 28rpx;
  }
  .reserve-time {
    margin-top: 32rpx;
    padding: 16rpx 24rpx;
    background-color: #f1f1f1;
    border-radius: 8rpx;
  }
  .reserve-text {
    font-size: 26rpx;
    line-height: 36rpx;
    font-weight: 500;
    color: #111111;
  }
  .form {
    margin-top: 24rpx;
    padding: 24rpx 24rpx 64rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .field-value {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #111111;
  }
  .icon-arrow {
    width: 10rpx;
    height: 16rpx;
  }
  .reason-wrapper {
    margin-top: 48rpx;
  }
  .field-name {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #6d6d6d;
  }
  .reason-tip {
    color: #9e9ea0;
  }
  .star {
    color: #f13f0c;
  }
  .tips {
    margin-right: 8rpx;
    margin-top: 40rpx;
  }
  .tip-title {
    color: #2d2e32;
  }
  .tip-text {
    color: #8c8f95;
    font-size: 24rpx;
    line-height: 44rpx;
    text-align: left;
  }
  .button {
    margin: 56rpx 16rpx 0;
  }
  .btn-wrapper {
    padding: 24rpx 0;
    background-color: #000000;
    border-radius: 48rpx;
  }
  .btn_text {
    color: #ffffff;
    font-size: 30rpx;
    font-weight: 500;
    line-height: 42rpx;
  }
</style>
