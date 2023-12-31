<template>
  <view class="flex-col justify-start wrap">
    <view class="flex-row justify-end inner">
      <u-button text="申请售后" type="primary" shape="circle" :plain="true" @click="gotoAfterSale"></u-button>
      <u-button text="商品清单" type="primary" shape="circle" :plain="true" @click="gotoProductList"></u-button>
      <u-button text="服务日志" type="primary" shape="circle" :plain="true" @click="gotoLog"></u-button>
      <u-button text="验收服务" type="primary" shape="circle" :plain="true" @click="gotoAcceptance"></u-button>
      <u-button text="删除记录" type="primary" shape="circle" :plain="true"></u-button>
      <u-button text="确认差额" type="primary" shape="circle" :plain="true" @click="gotoPriceDiff"></u-button>
      <u-button text="确认报价" type="primary" shape="circle" :plain="true" @click="gotoConfirmQuote"></u-button>
      <u-button text="服务方案" type="primary" shape="circle" :plain="true" @click="gotoPlan"></u-button>
      <u-button text="确认方案" type="primary" shape="circle" :plain="true" @click="onShowConfirmProposal"></u-button>
      <u-button text="开始签约" type="primary" shape="circle" :plain="true" @click="onShowVerify"></u-button>
      <u-button text="取消订单" type="primary" shape="circle" :plain="false" @click="onShowCancel"></u-button>
    </view>
    <u-popup :show="showConfirmProposal" @close="onCloseConfirmProposal" mode="bottom" :round="12" :closeable="true">
      <pop-confirm-proposal @confirm="onCloseConfirmProposal"></pop-confirm-proposal>
    </u-popup>
    <u-popup :show="showCancel" @close="onCloseCancel" mode="bottom" :round="10" :closeable="true">
      <pop-order-cancel @click="onCloseCancel"></pop-order-cancel>
    </u-popup>
    <confirm-panel
      :isShow="showVerify"
      title="实名认证"
      content="签署合约前实名认证"
      confirmText="前往实名认证"
      @cancel="onCloseVerify"
      @confirm="onCloseVerify"
    ></confirm-panel>
  </view>
</template>

<script>
  import PopConfirmProposal from '@/myOrder/pages/myOrder/components/PopConfirmProposal/PopConfirmProposal.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';
  import ConfirmPanel from '@/components/ConfirmPanel.vue';

  export default {
    components: { PopConfirmProposal, PopOrderCancel, ConfirmPanel },
    props: {},
    data() {
      return {
        showConfirmProposal: false,
        showCancel: false,
        showVerify: false,
      };
    },
    methods: {
      onShowCancel() {
        this.showCancel = true;
      },
      onCloseCancel() {
        this.showCancel = false;
      },
      onShowVerify() {
        this.showVerify = true;
      },
      onCloseVerify() {
        this.showVerify = false;
      },
      onShowConfirmProposal() {
        this.showConfirmProposal = true;
      },
      onCloseConfirmProposal() {
        this.showConfirmProposal = false;
      },
      gotoAfterSale() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceAfterSale/serviceAfterSale' });
      },
      gotoProductList() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/productList/productList' });
      },
      gotoPlan() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/servicePlan/servicePlan' });
      },
      gotoLog() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceLog/serviceLog' });
      },
      gotoPriceDiff() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/checkPriceDiff/checkPriceDiff' });
      },
      gotoConfirmQuote() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceOrder/confirmQuote/index/index' });
      },
      gotoAcceptance() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/acceptanceService/acceptanceService' });
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 32rpx 0;
    background-color: #ffffff;
    .inner {
      margin: 0 16rpx;
      flex-wrap: wrap;
      gap: 12rpx;
    }
  }
</style>
