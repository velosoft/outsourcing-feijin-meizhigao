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
    <view class="flex-col flex-1 body">
      <OrderStatusCard :orderData="orderData"></OrderStatusCard>
      <view class="flex-col relative main">
        <OrderContactCard :canShowLine="false" :canShowArrow="false"></OrderContactCard>
        <CFCard class="mt-10" title="商品信息">
          <OrderProductItem class="mt-16"></OrderProductItem>
        </CFCard>
        <CFCard class="mt-10" title="业务团队">
          <view class="flex-row" slot="headerRight" @click="onShowCaptain">
            <image class="icon-phone" src="/myOrder/static/images/icon_phone_gray_bg.png" />
            <text class="call-text ml-4">联系领队</text>
          </view>
          <TeamListPanel class="mt-16"></TeamListPanel>
        </CFCard>
        <CFCard class="mt-10" title="流程">
          <u-steps class="mt-8" direction="column">
            <view class="flex-col">
              <u-steps-item><IntentionMeasure slot="desc"></IntentionMeasure></u-steps-item>
              <u-steps-item><IntentionDesign slot="desc"></IntentionDesign></u-steps-item>
              <u-steps-item>
                <IntentionService slot="desc" @call-captain="onShowCaptain"></IntentionService>
              </u-steps-item>
            </view>
          </u-steps>
        </CFCard>
        <IntentionOrderCard class="collapse-white-card mt-10"></IntentionOrderCard>
        <IntentionPaymentCard class="collapse-white-card mt-10"></IntentionPaymentCard>
      </view>
    </view>
    <view class="fixed-bottom"><IntentionOrderActions></IntentionOrderActions></view>
    <u-popup :show="showCaptain" @close="onCloseCaptain" mode="bottom" bgColor="transparent">
      <pop-captain @cancel="onCloseCaptain"></pop-captain>
    </u-popup>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import IntentionDesign from '@/myOrder/pages/myOrder/components/IntentionDesign/IntentionDesign.vue';
  import IntentionMeasure from '@/myOrder/pages/myOrder/components/IntentionMeasure/IntentionMeasure.vue';
  import IntentionOrderActions from '@/myOrder/pages/myOrder/components/IntentionOrderActions/IntentionOrderActions.vue';
  import IntentionOrderCard from '@/myOrder/pages/myOrder/components/IntentionOrderCard/IntentionOrderCard.vue';
  import IntentionPaymentCard from '@/myOrder/pages/myOrder/components/IntentionPaymentCard/IntentionPaymentCard.vue';
  import IntentionService from '@/myOrder/pages/myOrder/components/IntentionService/IntentionService.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderContactCard from '@/myOrder/pages/myOrder/components/OrderContactCard/OrderContactCard.vue';
  import OrderStatusCard from '@/myOrder/pages/myOrder/components/OrderStatusCard/OrderStatusCard.vue';
  import TeamListPanel from '@/myOrder/pages/myOrder/serviceOrder/detail/components/TeamListPanel/TeamListPanel.vue';
  import PopCaptain from '@/myOrder/pages/myOrder/components/PopCaptain/PopCaptain.vue';

  export default {
    components: {
      CFCard,
      IntentionDesign,
      IntentionMeasure,
      IntentionOrderActions,
      IntentionOrderCard,
      IntentionPaymentCard,
      IntentionService,
      NavBar,
      OrderContactCard,
      OrderStatusCard,
      TeamListPanel,
      OrderProductItem,
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
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    overflow-y: auto;
    margin-bottom: 160rpx;
  }
  .main {
    margin-top: -64rpx;
    padding: 32rpx 24rpx;
    background: #f8f8f8;
    border-radius: 20rpx 20rpx 0 0;
  }
  .icon-phone {
    border-radius: 50%;
    width: 36rpx;
    height: 36rpx;
  }
  .call-text {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #2d2e32;
  }
  .equal-division {
    margin: 0 20rpx;
  }
</style>
