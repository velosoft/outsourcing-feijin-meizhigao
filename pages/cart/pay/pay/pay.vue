<template>
  <view class="flex-col page height-full">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 group">
      <view class="flex-col items-center pay-num-wrap">
        <text class="pay-label pay-text">需支付金额</text>
        <text class="pay-num mt-14">￥200.00</text>
      </view>
      <view class="flex-col pay-type-wrap">
        <text class="self-start pay-type-title">请选择支付方式</text>
        <PayCard class="pay-card mt-22" :payInfo="payInfo"></PayCard>
      </view>
      <view class="fixed-bottom-safe2 flex-col footer-btn">
        <u-button class="button" text="确认付款" type="primary" size="large" shape="circle" @click="onClick"></u-button>
      </view>
      <confirm-panel
        :isShow="showDialog"
        :isnormal="false"
        title="支付提示"
        content="您确定要选择收纳币全额支付吗？"
        @cancel="onCancel"
        @confirm="onConfirm"
      ></confirm-panel>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PayCard from '../../../../pages/cart/pay/components/PayCard/PayCard.vue';
  import ConfirmPanel from '@/components/ConfirmPanel.vue';

  export default {
    components: { NavBar, PayCard, ConfirmPanel },
    props: {},
    data() {
      return {
        title: '收银台',
        payInfo: {},
        showDialog: false,
      };
    },

    methods: {
      onClick() {
        this.showDialog = true;
      },
      onCancel() {
        this.showDialog = false;
      },
      onConfirm() {
        this.showDialog = false;
        uni.navigateTo({ url: '/pages/cart/pay/payResult/payResult' });
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
    .group {
      padding: 80rpx 0 96rpx;
      overflow-y: auto;
      .pay-num-wrap {
        margin: 0 24rpx;
        .pay-label {
          font-size: 26rpx;
          font-family: PingFangSC;
          line-height: 26rpx;
          color: #6c6c6c;
        }
        .pay-text {
          font-size: 28rpx;
          line-height: 28rpx;
        }
        .pay-num {
          color: #030305;
          font-size: 52rpx;
          font-family: HarmonyOS Sans SC;
          font-weight: 700;
          line-height: 52rpx;
        }
      }
      .pay-type-wrap {
        margin: 112rpx 24rpx 0;
        .pay-type-title {
          font-size: 26rpx;
          font-family: PingFangSC;
          line-height: 26rpx;
          color: #a7a7a7;
        }
        .pay-card {
          align-self: stretch;
        }
      }
      .footer-btn {
        padding: 32rpx 0;
        .button {
          margin: 0 48rpx;
        }
      }
    }
  }
</style>
