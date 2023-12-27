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
      <u-button text="商品方案" type="primary" shape="circle" :plain="true" @click="gotoProductList"></u-button>
      <u-button text="确认方案" type="primary" shape="circle" :plain="true" @click="onShowConfirmProposal"></u-button>
      <u-button text="开始签约" type="primary" shape="circle" :plain="true" @click="onClick_8"></u-button>
      <u-button text="取消订单" type="primary" shape="circle" :plain="false"></u-button>
    </view>
    <u-popup :show="showConfirmProposal" @close="onCloseConfirmProposal" mode="bottom" :round="12" :closeable="true">
      <PopConfirmProposal @confirm="onCloseConfirmProposal"></PopConfirmProposal>
    </u-popup>
    <u-modal
      :show="dialogVisible"
      @confirm="onClose_1"
      @cancel="onClose_1"
      title="弹窗标题"
      confirmText="确认"
      :showCancelButton="true"
      cancelText="取消"
      content="弹窗内容"
    ></u-modal>
  </view>
</template>

<script>
  import PopConfirmProposal from '@/myOrder/pages/myOrder/components/PopConfirmProposal/PopConfirmProposal.vue';

  export default {
    components: { PopConfirmProposal },
    props: {},
    data() {
      return {
        showConfirmProposal: false,
        dialogVisible: false,
      };
    },

    methods: {
      gotoAfterSale() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceAfterSale/serviceAfterSale' });
      },
      gotoProductList() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/productList/productList' });
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
      onShowConfirmProposal() {
        this.showConfirmProposal = true;
      },
      onCloseConfirmProposal() {
        this.showConfirmProposal = false;
      },
      onClick_8() {
        this.dialogVisible = true;
      },
      onClose_1() {
        this.dialogVisible = false;
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
