<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col body">
      <OrderStatusCard :orderData="orderData"></OrderStatusCard>
      <view class="flex-col relative info-wrap">
        <OrderContactCard :canShowLine="false" :canShowArrow="false" :contactData="orderData"></OrderContactCard>
        <CFCard class="mt-12" title="服务信息">
          <ServiceInfoCard class="mt-12" :prodInfo="orderData"></ServiceInfoCard>
        </CFCard>
        <CFCard class="mt-12" title="流程">
          <u-steps class="mt-8" direction="column">
            <view class="flex-col ml-4">
              <u-steps-item>
                <ServiceMeasure :orderData="orderData" slot="desc" @call-captain="onShowCaptain"></ServiceMeasure>
              </u-steps-item>
              <u-steps-item class="mt-16">
                <ServiceProposal :orderData="orderData" slot="desc" @call-captain="onShowCaptain"></ServiceProposal>
              </u-steps-item>
              <u-steps-item class="mt-16">
                <ServiceExecute :orderData="orderData" slot="desc" @call-captain="onShowCaptain"></ServiceExecute>
              </u-steps-item>
            </view>
          </u-steps>
        </CFCard>
        <OrderInfoCard class="mt-12" :orderData="orderData"></OrderInfoCard>
        <PaymentInfoCard class="mt-12" :orderData="orderData"></PaymentInfoCard>
      </view>
      <view class="fixed-bottom flex-col justify-start"><OrderActionButtonGroup></OrderActionButtonGroup></view>
    </view>
    <u-popup :show="showCaptain" @close="onCloseCaptain" mode="bottom" bgColor="transparent">
      <pop-captain @cancel="onCloseCaptain"></pop-captain>
    </u-popup>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderActionButtonGroup from '../../../../../pages/myOrder/serviceOrder/detail/components/OrderActionButtonGroup/OrderActionButtonGroup.vue';
  import OrderContactCard from '../../../../../pages/myOrder/components/OrderContactCard/OrderContactCard.vue';
  import OrderInfoCard from '../../../../../pages/myOrder/components/OrderInfoCard/OrderInfoCard.vue';
  import OrderStatusCard from '../../../../../pages/myOrder/components/OrderStatusCard/OrderStatusCard.vue';
  import PaymentInfoCard from '../../../../../pages/myOrder/components/PaymentInfoCard/PaymentInfoCard.vue';
  import ServiceExecute from '../../../../../pages/myOrder/serviceOrder/detail/process/ServiceExecute/ServiceExecute.vue';
  import ServiceInfoCard from '../../../../../pages/myOrder/components/ServiceInfoCard/ServiceInfoCard.vue';
  import ServiceMeasure from '../../../../../pages/myOrder/serviceOrder/detail/process/ServiceMeasure/ServiceMeasure.vue';
  import ServiceProposal from '../../../../../pages/myOrder/serviceOrder/detail/process/ServiceProposal/ServiceProposal.vue';
  import PopCaptain from '@/myOrder/pages/myOrder/components/PopCaptain/PopCaptain.vue';

  export default {
    components: {
      CFCard,
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
        orderData: '',
        title: '',
        showCaptain: false,
      };
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
  }
</style>
