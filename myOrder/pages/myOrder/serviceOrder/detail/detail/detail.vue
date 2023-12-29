<template>
  <view class="flex-col page">
    <nav-bar
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      :background="navBarColor"
      :titleColor="titleColor"
    ></nav-bar>
    <view class="flex-col body">
      <order-status-card :orderData="orderData"></order-status-card>
      <view class="flex-col relative info-wrap">
        <order-contact-card :canShowLine="false" :canShowArrow="false" :contactData="orderData"></order-contact-card>
        <cf-card class="setcion-wrapper mt-12" title="服务信息">
          <service-info-card class="mt-16" :prodInfo="orderData"></service-info-card>
        </cf-card>
        <cf-Card class="setcion-wrapper mt-12" title="流程">
          <u-steps class="mt-8" direction="column">
            <view class="flex-col ml-4">
              <u-steps-item>
                <service-measure :orderData="orderData" slot="desc" @call-captain="onShowCaptain"></service-measure>
              </u-steps-item>
              <u-steps-item class="mt-16">
                <service-proposal :orderData="orderData" slot="desc" @call-captain="onShowCaptain"></service-proposal>
              </u-steps-item>
              <u-steps-item class="mt-16">
                <service-execute :orderData="orderData" slot="desc" @call-captain="onShowCaptain"></service-execute>
              </u-steps-item>
            </view>
          </u-steps>
        </cf-Card>
        <order-info-card class="setcion-wrapper mt-12" :orderData="orderData"></order-info-card>
        <payment-info-card class="setcion-wrapper mt-12" :orderData="orderData"></payment-info-card>
      </view>
      <view class="fixed-bottom flex-col justify-start">
        <order-action-button-group></order-action-button-group>
      </view>
    </view>
    <u-popup :show="showCaptain" @close="onCloseCaptain" mode="bottom" bgColor="transparent">
      <pop-captain @cancel="onCloseCaptain"></pop-captain>
    </u-popup>
  </view>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderActionButtonGroup from '@/myOrder/pages/myOrder/serviceOrder/detail/components/OrderActionButtonGroup/OrderActionButtonGroup.vue';
  import OrderContactCard from '@/myOrder/pages/myOrder/components/OrderContactCard/OrderContactCard.vue';
  import OrderInfoCard from '@/myOrder/pages/myOrder/components/OrderInfoCard/OrderInfoCard.vue';
  import OrderStatusCard from '@/myOrder/pages/myOrder/components/OrderStatusCard/OrderStatusCard.vue';
  import PaymentInfoCard from '@/myOrder/pages/myOrder/components/PaymentInfoCard/PaymentInfoCard.vue';
  import ServiceExecute from '@/myOrder/pages/myOrder/serviceOrder/detail/process/ServiceExecute/ServiceExecute.vue';
  import ServiceInfoCard from '@/myOrder/pages/myOrder/components/ServiceInfoCard/ServiceInfoCard.vue';
  import ServiceMeasure from '@/myOrder/pages/myOrder/serviceOrder/detail/process/ServiceMeasure/ServiceMeasure.vue';
  import ServiceProposal from '@/myOrder/pages/myOrder/serviceOrder/detail/process/ServiceProposal/ServiceProposal.vue';
  import PopCaptain from '@/myOrder/pages/myOrder/components/PopCaptain/PopCaptain.vue';

  export default {
    components: {
      CfCard,
      NavBar,
      OrderActionButtonGroup,
      OrderContactCard,
      OrderInfoCard,
      OrderStatusCard,
      PaymentInfoCard,
      ServiceExecute,
      ServiceInfoCard,
      ServiceMeasure,
      ServiceProposal,
      PopCaptain,
    },
    props: {},
    data() {
      return {
        orderData: {},
        title: '订单详情',
        isShowNavbar: false,
        navBarColor: '#b09053',
        titleColor: '#ffffff',
        showCaptain: false,
      };
    },
    onPageScroll(e) {
      // 页面滚动时执行
      if (e.scrollTop > 10) {
        if (!this.isShowNavbar) {
          this.isShowNavbar = true;
          this.navBarColor = '#ffffff';
          this.titleColor = '#111111';
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
      onShowCaptain() {
        this.showCaptain = true;
      },
      onCloseCaptain() {
        this.showCaptain = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    .body {
      padding-bottom: 352rpx;
      .info-wrap {
        margin-top: -64rpx;
        padding: 32rpx 24rpx 16rpx;
        background-color: #f8f8f8;
        border-radius: 16rpx 16rpx 0rpx 0rpx;
      }
    }
    .setcion-wrapper {
      padding-top: 8rpx !important;
    }
  }
</style>
