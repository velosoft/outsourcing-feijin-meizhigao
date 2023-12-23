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
    <view class="flex-col items-start status-wrapper">
      <text class="status-text">{{ invoiced ? '已' : '未' }}开票</text>
      <text class="mt-4 money-text">开票金额：￥9000.00</text>
    </view>
    <InvoiceCard class="invoice-card"></InvoiceCard>
    <view class="flex-col contact-wrapper">
      <view class="flex-row">
        <text class="field-name">开票人手机</text>
        <text class="field-name ml-16">13567699045</text>
      </view>
      <view class="flex-row mt-36 mt-21">
        <text class="field-name">开票人邮箱</text>
        <text class="field-name ml-16">hjkdfjk@feijin.com</text>
      </view>
    </view>
    <view class="flex-col tips-wrapper" v-if="!invoiced">
      <text>发票须知</text>
      <view class="flex-col mt-12">
        <text class="tips-desc">1、开票金额为用户实际支付金额(不含活动优惠金额、优惠券、积分、收纳币)</text>
        <text class="tips-desc">2、电子发票可在确认收货后申请开票，开票后在“订单详情“查看开票详情</text>
        <text class="tips-desc">3、发票开具成功后可到邮箱查看电子发票</text>
      </view>
    </view>
    <view class="fixed-bottom-safe flex-row actions" v-if="!invoiced">
      <view class="btn btn-plain" @click="onShowConfirm">
        <text>撤销申请</text>
      </view>
      <view class="btn btn-primary" @click="gotoApplyInvoice">
        <text>修改发票</text>
      </view>
    </view>
    <confirm-panel
      :isShow="showConfirm"
      content="您确定要撤销发票申请吗？"
      @cancel="onCloseConfirm"
      @confirm="onCloseConfirm"
    ></confirm-panel>
  </view>
</template>

<script>
  import InvoiceCard from '@/pages/myOrder/components/InvoiceCard/InvoiceCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import ConfirmPanel from '@/components/ConfirmPanel.vue';

  export default {
    components: { InvoiceCard, NavBar, ConfirmPanel },
    props: {},
    data() {
      return {
        title: '发票详情',
        isShowNavbar: false,
        navBarColor: '#b09053',
        titleColor: '#ffffff',
        invoiced: false,
        showConfirm: false,
      };
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
      onShowConfirm() {
        this.showConfirm = true;
      },
      onCloseConfirm() {
        this.showConfirm = false;
      },
      gotoApplyInvoice() {
        uni.navigateTo({ url: '/pages/myOrder/applyInvoice/applyInvoice' });
      },
    },
  };
</script>

<style scoped lang="less">
  .mt-21 {
    margin-top: 42rpx;
  }
  .page {
    padding-bottom: 236rpx;
    background-color: #f8f8f8;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .status-text {
    font-size: 36rpx;
    line-height: 50rpx;
    font-weight: 500;
    color: #ffffff;
  }
  .status-wrapper {
    padding: 30rpx 80rpx 138rpx;
    background-color: #b09053;
  }
  .money-text {
    font-size: 30rpx;
    color: #ffffff;
    line-height: 42rpx;
  }
  .invoice-card {
    margin: -88rpx 24rpx 0;
  }
  .field-name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
  .contact-wrapper {
    margin: 24rpx 24rpx 0;
    padding: 30rpx 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .tips-wrapper {
    margin: 24rpx 24rpx 0;
    padding: 28rpx 24rpx 48rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .tips-desc {
    color: #9c9c9f;
    font-size: 24rpx;
    line-height: 44rpx;
  }
  .actions {
    padding: 42rpx 40rpx 42rpx 46rpx;
    background-color: #ffffff;
  }
  .btn {
    border-radius: 56rpx;
    font-size: 30rpx;
    line-height: 42rpx;
    width: 308rpx;
    height: 96rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn + .btn {
    margin-left: 32rpx;
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
