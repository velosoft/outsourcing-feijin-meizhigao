<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 body">
      <view class="flex-col">
        <CFCard>
          <view class="flex-row justify-between items-center">
            <text class="font-normal title">查看方案</text>
            <view class="flex-row">
              <TagArrow text="商品方案" @click="gotoProductList"></TagArrow>
              <TagArrow class="ml-8" text="服务方案" @click="gotoPlan"></TagArrow>
            </view>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="商品信息">
          <TextArrow text="共20件" slot="headerRight" @click="onShowProducts"></TextArrow>
          <view class="flex-col mt-16">
            <view class="flex-row justify-between">
              <image
                class="prod-img"
                src="/myOrder/static/images/mock_1d10cf01926c2c71.png"
                v-for="(item, index) in items"
                :key="index"
              />
            </view>
            <u-cell
              class="cell-in-white-card-weight mt-16"
              title="总金额（含运费）"
              value="￥2000"
              :border="false"
            ></u-cell>
            <text class="font-gray mt-16">注：部分商品存在活动中，若未及时完成支付，则将恢复原价购买</text>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="服务信息">
          <view class="flex-col mt-16">
            <u-cell class="cell-in-white-card" title="服务计费方式" value="按延米" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-12" title="服务延米数" value="5延米" :border="false"></u-cell>
            <u-cell class="cell-in-white-card-weight mt-12" title="服务金额" value="￥5000" :border="false"></u-cell>
            <u-cell
              class="cell-in-white-card-weight mt-12"
              title="合计应付金额（商品+服务合计金额）"
              value="￥5000"
              :border="false"
            ></u-cell>
            <u-cell class="cell-in-white-card-weight mt-12" title="人工优惠减免" value="￥200" :border="false"></u-cell>
            <u-cell
              class="cell-in-white-card-weight mt-12"
              title="最终报价金额（商品+服务客户需支付的金额）"
              value="￥6800"
              :border="false"
              :center="false"
            ></u-cell>
            <text class="font-gray mt-12">注：商品支付金额将跟随活动价格浮动，导致最后报价支付金额浮动</text>
          </view>
        </CFCard>
      </view>
      <view class="tip-box flex-col">
        <text class="tip-color">温馨提示：</text>
        <text class="font-tips">1、确认报价前，请和领队确认报价价格</text>
        <text class="font-tips">2、请确认报价金额和领队口头报价是否一致</text>
        <text class="font-tips">3、确认报价并支付后，您可在意向订单中继续了解订单进度</text>
      </view>
      <view class="flex-col action-box">
        <text class="self-center font-normal text-golden" @click="gotoRequotation">当前报价有异，我申请重新报价</text>
        <view class="flex-col justify-start items-center button mt-12" @click="gotoSubmitPayment">
          <text class="font-button text-white">确认并前往支付</text>
        </view>
      </view>
    </view>
    <u-popup :show="showProducts" @close="onCloseProducts" mode="bottom" :round="12" :closeable="true">
      <PopProductInfo></PopProductInfo>
    </u-popup>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import TagArrow from '@/myOrder/pages/myOrder/components/TagArrow/TagArrow.vue';
  import TextArrow from '@/myOrder/pages/myOrder/components/TextArrow/TextArrow.vue';
  import PopProductInfo from '@/myOrder/pages/myOrder/components/PopProductInfo/PopProductInfo.vue';

  export default {
    components: { CFCard, NavBar, TagArrow, TextArrow, PopProductInfo },
    props: {},
    data() {
      return {
        title: '确认报价',
        items: [null, null, null, null, null],
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
      gotoSubmitPayment() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceOrder/submitPayment/index/index' });
      },
      gotoRequotation() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/requotation/requotation' });
      },
      gotoProductList() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/productList/productList` });
      },
      gotoPlan() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/servicePlan/servicePlan` });
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
    .body {
      padding: 16rpx 24rpx 112rpx;
      overflow-y: auto;
      .font-normal {
        font-size: 28rpx;
        line-height: 40rpx;
        color: #b09053;
      }
      .title {
        color: #111111;
        font-size: 30rpx;
      }
      .prod-img {
        border-radius: 16rpx;
        width: 118rpx;
        height: 118rpx;
      }
      .font-gray {
        font-size: 24rpx;
        line-height: 34rpx;
        color: #6d6d6d;
      }
      .tip-box {
        margin-top: 48rpx;
        text-align: left;
        .tip-color {
          color: #111111;
          font-size: 28rpx;
          line-height: 48rpx;
        }
        .font-tips {
          font-size: 24rpx;
          line-height: 48rpx;
          color: #6d6d6d;
        }
      }
      .action-box {
        margin-top: 168rpx;
        padding: 0 40rpx;
        .text-golden {
          color: #b09053;
          font-size: 26rpx;
          line-height: 36rpx;
        }
        .button {
          padding: 28rpx 0;
          background-color: #b09053;
          border-radius: 48rpx;
          .font-button {
            font-size: 28rpx;
            line-height: 40rpx;
            font-weight: 500;
            color: #111111;
          }
          .text-white {
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
