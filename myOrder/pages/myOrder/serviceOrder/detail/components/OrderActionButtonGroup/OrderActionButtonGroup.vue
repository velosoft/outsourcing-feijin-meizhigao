<template>
  <view class="flex-col justify-start section_11">
    <view class="flex-row justify-end group_31">
      <u-button class="text-wrapper_1" text="申请售后" type="primary" shape="circle" :plain="true" @click="onClick"></u-button>
      <u-button text="商品清单" type="primary" shape="circle" :plain="true" @click="onClick_1"></u-button>
      <u-button text="服务日志" type="primary" shape="circle" :plain="true" @click="onClick_2"></u-button>
      <u-button text="验收服务" type="primary" shape="circle" :plain="true" @click="onClick_3"></u-button>
      <u-button text="删除记录" type="primary" shape="circle" :plain="true"></u-button>
      <u-button text="确认差额" type="primary" shape="circle" :plain="true" @click="onClick_4"></u-button>
      <u-button text="确认报价" type="primary" shape="circle" :plain="true" @click="onClick_5"></u-button>
      <u-button text="商品清单" type="primary" shape="circle" :plain="true" @click="onClick_6"></u-button>
      <u-button text="确认方案" type="primary" shape="circle" :plain="true" @click="onClick_7"></u-button>
      <u-button text="开始签约" type="primary" shape="circle" :plain="true" @click="onClick_8"></u-button>
      <u-button text="取消订单" type="primary" shape="circle" :plain="true"></u-button>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom"><PopConfirmProposal></PopConfirmProposal></u-popup>
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
  import PopConfirmProposal from '../../../../../../pages/myOrder/serviceOrder/detail/popup/PopConfirmProposal/PopConfirmProposal.vue';

  export default {
    components: { PopConfirmProposal },
    props: {},
    data() {
      return {
        popupVisible: false,
        dialogVisible: false,
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/intentionOrder/shouhoushenqing/shouhoushenqing' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/myOrder/serviceOrder/productList/index/index' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/myOrder/serviceOrder/serviceLog/index/index' });
      },
      onClick_3() {
        uni.navigateTo({ url: '/pages/myOrder/serviceOrder/acceptance/index/index' });
      },
      onClick_4() {
        uni.navigateTo({ url: '/pages/myOrder/serviceOrder/checkResult/index/index' });
      },
      onClick_5() {
        uni.navigateTo({ url: '/pages/myOrder/serviceOrder/quotation/index/index' });
      },
      onClick_6() {
        uni.navigateTo({ url: '/pages/myOrder/serviceOrder/productList/index/index' });
      },
      onClick_7() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
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
  .section_11 {
    padding: 32rpx 0;
    background-color: #ffffff;
    .group_31 {
      margin: 0 16rpx;
      flex-wrap: wrap;
      gap: 12rpx;
      .text-wrapper_1 {
        margin-left: 12rpx;
      }
    }
  }
</style>