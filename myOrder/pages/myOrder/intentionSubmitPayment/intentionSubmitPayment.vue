<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col flex-1 body">
      <OrderContactCard :canShowLine="false"></OrderContactCard>
      <CFCard class="mt-12" title="商品信息">
        <view class="flex-col mt-12">
          <view class="flex-col">
            <OrderProductItem class="list-item mt-12" v-for="(item, index) in items" :key="index"></OrderProductItem>
          </view>
          <text class="self-end product-font product-text mt-16">共2件商品</text>
        </view>
      </CFCard>
      <CFCard class="mt-12" title="订单信息">
        <view class="flex-col mt-8">
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
      </CFCard>
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
  import CFCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderContactCard from '@/myOrder/pages/myOrder/components/OrderContactCard/OrderContactCard.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';

  export default {
    components: { CFCard, NavBar, OrderContactCard, OrderProductItem },
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

<style scoped lang="css">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 0 24rpx 184rpx;
    overflow-y: auto;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .product-font {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #8c8f95;
  }
  .product-text {
    color: #6d6d6d;
  }
  .money-text {
    font-size: 28rpx;
    line-height: 32rpx;
    font-weight: 600;
    color: #111111;
  }
  .msg-tip {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #c5c5c5;
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
    color: #9c9c9f;
    line-height: 34rpx;
    font-weight: unset;
  }
  .money-name {
    margin-left: 16rpx;
    color: #000000;
    line-height: 34rpx;
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
</style>
