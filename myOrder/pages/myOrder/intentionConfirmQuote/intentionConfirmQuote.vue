<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col flex-1 body">
      <view class="flex-col card">
        <u-cell class="cell-in-gray-card-14" title="查看方案" value="查看方案" :border="false">
          <view class="flex-row items-center" slot="value" @click="gotoPlan">
            <text class="cell-action">查看方案</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
          </view>
        </u-cell>
        <u-cell class="cell-in-gray-card-14 mt-18" title="组件信息" value="共20件" :border="false">
          <view class="flex-row items-center" slot="value" @click="onShowProducts">
            <text class="cell-action">共20件</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
          </view>
        </u-cell>
        <view class="flex-row justify-start gap-8 hidden-x mt-18">
          <image
            class="image"
            src="/myOrder/static/images/mock_1d10cf01926c2c71.png"
            v-for="(item, index) in items"
            :key="index"
          />
        </view>
        <u-cell class="cell-in-gray-card-14 mt-18" title="总金额（含运费）" value="￥2000" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card-14 mt-18" title="人工优惠减免" value="￥200" :border="false"></u-cell>
        <view class="divider mt-28"></view>
        <u-cell
          class="cell-in-gray-card-14 cell-value-sum mt-24"
          title="最终报价金额"
          value="￥6800"
          :border="false"
        ></u-cell>
      </view>
      <view class="mt-20 flex-col">
        <text class="tip-text tip-title">温馨提示：</text>
        <text class="tip-text">1、确认报价前，请和领队确认报价价格</text>
        <text class="tip-text">2、请确认报价金额和领队口头报价是否一致</text>
        <text class="tip-text">3、确认报价并支付后，您可在意向订单中继续了解订单进度</text>
      </view>
      <text class="self-center mt-130 requotation" @click="gotoRequotation">当前报价有异，我申请重新报价</text>
      <view class="flex-col items-center btn text-wrapper" @click="gotoSubmitPayment">
        <text class="btn-text btn-font">确认并前往支付</text>
      </view>
    </view>
    <u-popup :show="showProducts" @close="onCloseProducts" mode="bottom" :round="12" :closeable="true">
      <pop-product-info></pop-product-info>
    </u-popup>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopProductInfo from '@/myOrder/pages/myOrder/components/PopProductInfo/PopProductInfo.vue';

  export default {
    options: {
      styleIsolation: 'shared',
    },
    components: { NavBar, PopProductInfo },
    props: {},
    data() {
      return {
        title: '确认报价',
        items: [null, null, null, null, null, null, null],
        showProducts: false,
      };
    },
    methods: {
      onShowProducts() {
        this.showProducts = true;
      },
      onCloseProducts() {
        this.showProducts = false;
      },
      gotoPlan() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/servicePlan/servicePlan` });
      },
      gotoRequotation() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/requotation/requotation' });
      },
      gotoSubmitPayment() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/intentionSubmitPayment/intentionSubmitPayment' });
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
    padding: 16rpx 24rpx 368rpx;
    overflow-y: auto;
  }
  .card {
    padding: 24rpx 24rpx 40rpx;
    background-color: #f0f0f0;
    border-radius: 8rpx;
  }
  .btn-text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #6d6d6d;
  }
  .cell-action {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #b09053;
    font-weight: 400;
  }
  .icon-arrow {
    width: 8rpx;
    height: 14rpx;
  }
  .image {
    border-radius: 16rpx;
    width: 118rpx;
    height: 118rpx;
  }
  .tip-text {
    font-size: 24rpx;
    line-height: 48rpx;
    color: #6d6d6d;
  }
  .divider {
    border-top: 2rpx solid #111111;
  }
  .tip-title {
    color: #111111;
  }
  .mt-130 {
    margin-top: 260rpx;
  }
  .requotation {
    color: #b09053;
    font-size: 24rpx;
    line-height: 34rpx;
  }
  .btn {
    align-self: stretch;
    margin: 40rpx 16rpx 0;
  }
  .text-wrapper {
    padding: 28rpx 0;
    background-color: #b09053;
    border-radius: 48rpx;
  }
  .btn-font {
    color: #ffffff;
    font-weight: 500;
  }

  .cell-in-gray-card-14 {
    /deep/ .u-cell__title-text {
      font-weight: 400;
    }

    /deep/ .u-cell__value {
      font-family: HarmonyOS_Sans_Bold;
    }
  }
</style>
