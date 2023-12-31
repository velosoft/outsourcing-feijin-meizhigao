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
    <view class="flex-col flex-1 body">
      <order-status-card :orderData="orderData"></order-status-card>
      <view class="flex-col relative main">
        <order-contact-card :canShowLine="false" :canShowArrow="false"></order-contact-card>
        <cf-card class="mt-10" title="商品信息">
          <order-product-item class="mt-16"></order-product-item>
        </cf-card>
        <cf-card class="mt-10" title="业务团队">
          <view class="flex-row" slot="headerRight" @click="onShowCaptain" v-if="hasTeamList">
            <image class="icon-phone" src="/myOrder/static/images/icon_phone_gray_bg.png" />
            <text class="call-text ml-4">联系领队</text>
          </view>
          <team-list-panel class="mt-16" v-if="hasTeamList"></team-list-panel>
          <view class="flex-col items-center mt-16 team-wait" v-else>
            <image class="icon-clock" src="/myOrder/static/images/icon_clock_yellow.png" />
            <text class="team-wait-text mt-12">等待分配</text>
          </view>
        </cf-card>
        <cf-card class="mt-10" title="流程">
          <u-steps class="mt-8" direction="column">
            <view class="flex-col">
              <u-steps-item><intention-measure slot="desc"></intention-measure></u-steps-item>
              <u-steps-item><intention-design slot="desc"></intention-design></u-steps-item>
              <u-steps-item>
                <intention-service slot="desc" @call-captain="onShowCaptain"></intention-service>
              </u-steps-item>
            </view>
          </u-steps>
        </cf-card>
        <intention-order-card class="collapse-white-card mt-10"></intention-order-card>
        <intention-payment-card class="collapse-white-card mt-10"></intention-payment-card>
      </view>
    </view>
    <view class="fixed-bottom"><intention-order-actions></intention-order-actions></view>
    <u-popup :show="showCaptain" @close="onCloseCaptain" mode="bottom" bgColor="transparent">
      <pop-captain @cancel="onCloseCaptain"></pop-captain>
    </u-popup>
  </view>
</template>

<script>
  import CfCard from '@/components/Card/Card';
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
      CfCard,
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
        hasTeamList: true,
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
    margin-bottom: 340rpx;
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
  .team-wait {
    height: 186rpx;
    padding-top: 12rpx;
  }
  .icon-clock {
    width: 56rpx;
    height: 56rpx;
  }
  .team-wait-text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
</style>
