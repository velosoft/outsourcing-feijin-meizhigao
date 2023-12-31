<template>
  <view class="flex-col relative page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col flex-1 body">
      <order-contact-card :canShowLine="false"></order-contact-card>
      <cf-card class="cf-card-1 mt-12" title="商品信息">
        <view class="flex-col mt-12">
          <view class="flex-col">
            <order-product-item
              class="list-item mt-12"
              v-for="(item, index) in items"
              :key="index"
            ></order-product-item>
          </view>
          <text class="self-end product-font product-text mt-16">共2件商品</text>
        </view>
      </cf-card>
      <cf-card class="cf-card-2 mt-12" title="订单信息">
        <view class="flex-col mt-10">
          <u-cell class="cell-in-white-card-weight" title="商品金额" value="￥899.00" :border="false"></u-cell>
          <u-cell class="cell-in-white-card-weight mt-16" title="运费" value="￥10" :border="false"></u-cell>
          <u-cell class="cell-in-white-card-weight mt-16" title="人工优惠" value="-￥80" :border="false"></u-cell>
          <u-cell
            class="cell-in-white-card-weight mt-16"
            title="报价应付金额"
            value="￥899.99"
            :border="false"
          ></u-cell>
          <u-cell class="cell-in-white-card-weight mt-16" title="活动优惠" value="-￥10.00" :border="false"></u-cell>
          <u-cell
            class="cell-in-white-card-weight mt-16"
            title="优惠券"
            value="-￥10.00"
            :border="false"
            :isLink="true"
          ></u-cell>
          <u-cell
            class="cell-in-white-card-weight mt-16"
            title="积分抵扣"
            value="-￥35.00"
            :border="false"
            :isLink="true"
          ></u-cell>
          <view class="flex-col mt-16">
            <view class="flex-row">
              <text class="product-font">留言</text>
              <text class="msg-tip ml-12">50字以内（选填）</text>
            </view>
            <u-textarea
              class="mt-12 cf-textarea cf-textarea-gray"
              v-model="v_model"
              placeholder="请输入……"
              height="232rpx"
              placeholderStyle="font-size:28rpx;color:#C5C5C5;"
            ></u-textarea>
          </view>
        </view>
      </cf-card>
    </view>
    <view class="fixed-bottom-safe flex-row justify-end items-center footer-fixed">
      <view class="flex-row items-center">
        <text class="sum-font sum-count">共2件</text>
        <text class="sum-font money-name">实付：</text>
        <text class="money-text">￥804.99</text>
      </view>
      <view class="flex-col justify-start items-center button ml-8"
        ><text class="sum-font btn-text">确认订单</text></view
      >
    </view>
  </view>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderContactCard from '@/myOrder/pages/myOrder/components/OrderContactCard/OrderContactCard.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';

  export default {
    options: {
      styleIsolation: 'shared',
    },
    components: { CfCard, NavBar, OrderContactCard, OrderProductItem },
    props: {},
    data() {
      return {
        title: '提交支付',
        items: [null, null],
        v_model: '',
      };
    },

    methods: {},
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
    padding: 0 24rpx 200rpx;
    overflow-y: auto;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .product-font {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #6d6d6d;
  }
  .product-text {
    color: #6d6d6d;
  }
  .money-text {
    font-size: 28rpx;
    line-height: 32rpx;
    font-weight: 600;
    color: #111111;
    font-family: HarmonyOS_Sans_Bold;
  }
  .msg-tip {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9e9ea0;
  }
  .footer-fixed {
    padding: 40rpx 24rpx;
    background-color: #ffffff;
  }
  .sum-font {
    font-size: 24rpx;
    line-height: 36rpx;
    font-weight: 500;
  }
  .sum-count {
    color: #6d6d6d;
    line-height: 34rpx;
    font-family: 苹方;
    font-weight: 400;
  }
  .money-name {
    margin-left: 16rpx;
    color: #000000;
    line-height: 34rpx;
    font-family: 苹方;
    font-weight: 500;
  }
  .button {
    padding: 16rpx 0;
    background-color: #b09053;
    border-radius: 32rpx;
    width: 232rpx;
    height: 68rpx;
  }
  .btn-text {
    color: #ffffff;
    line-height: 34rpx;
  }
  .cf-card-1 {
    /deep/ .root {
      padding: 28rpx 24rpx 24rpx;
    }
  }

  .cf-card-2 {
    /deep/ .root {
      padding: 32rpx 24rpx 32rpx;
    }

    /deep/ .u-cell__title-text {
      font-weight: 400;
    }
    /deep/ .u-cell__value {
      font-family: HarmonyOS_Sans_Bold;
    }
  }

  .cf-textarea {
    /deep/ .u-textarea__field {
      font-size: 28rpx !important;
    }
  }
</style>
