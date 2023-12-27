<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col body">
      <OrderContactCard></OrderContactCard>
      <CFCard class="mt-12" title="服务信息">
        <view class="flex-col mt-14">
          <u-cell class="cell-in-white-card-weight" title="服务计费方式" value="按延米" :border="false"></u-cell>
          <u-cell class="cell-in-white-card-weight mt-16" title="计费延米数" value="5延米" :border="false"></u-cell>
          <u-cell class="cell-in-white-card-weight mt-16" title="服务金额" value="￥500" :border="false"></u-cell>
        </view>
      </CFCard>
      <CFCard class="mt-12" title="服务信息">
        <view class="flex-col mt-14">
          <u-cell class="cell-in-white-card-weight" title="服务金额" value="￥500" :border="false"></u-cell>
          <u-cell
            class="cell-in-white-card-weight mt-16"
            title="积分抵扣"
            value="-￥100"
            :border="false"
            :isLink="true"
          ></u-cell>
          <u-cell
            class="cell-in-white-card-weight mt-16"
            title="优惠券"
            value="￥500"
            :border="false"
            :isLink="true"
          ></u-cell>
          <u-cell class="cell-in-white-card-weight mt-16" title="服务应付金额" value="￥500" :border="false"></u-cell>
        </view>
      </CFCard>
      <CFCard class="mt-12" title="商品信息">
        <TextArrow text="共 20 件商品" slot="headerRight"></TextArrow>
        <view class="flex-col mt-16">
          <view class="flex-row justify-between">
            <image
              class="prod-img"
              src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=b7b2f633c35e6036c37d5d570a880cd9.png"
              v-for="(item, index) in items"
              :key="index"
            />
          </view>
          <view class="flex-col mt-20">
            <text class="self-start font-14 text-title">商品支付</text>
            <view class="flex-col mt-16">
              <u-cell class="cell-in-white-card-weight" title="商品金额" value="￥899.00" :border="false"></u-cell>
              <u-cell class="cell-in-white-card-weight mt-16" title="运费" value="￥10" :border="false"></u-cell>
              <u-cell class="cell-in-white-card-weight mt-16" title="人工优惠" value="-￥80" :border="false"></u-cell>
              <u-cell
                class="cell-in-white-card-weight mt-16"
                title="报价应付金额"
                value="￥899.99"
                :border="false"
              ></u-cell>
              <u-cell
                class="cell-in-white-card-weight mt-16"
                title="活动优惠"
                value="-￥10.00"
                :border="false"
              ></u-cell>
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
            </view>
            <view class="flex-col mt-16">
              <view class="flex-row">
                <text class="font-label">留言</text>
                <text class="font-label text-gray ml-12">50字以内（选填）</text>
              </view>
              <u-textarea class="mt-12" v-model="v_model" placeholder="请输入…"></u-textarea>
            </view>
          </view>
        </view>
      </CFCard>
      <CFCard class="mt-12" title="支付信息">
        <view class="flex-col mt-14">
          <view class="flex-col">
            <u-cell
              class="cell-in-white-card-weight"
              title="小计（商品应付+服务应付）"
              value="￥800"
              :border="false"
            ></u-cell>
            <u-cell class="cell-in-white-card-weight mt-16" title="人工优惠" value="-￥100" :border="false"></u-cell>
          </view>
          <view class="divider mt-28"></view>
          <u-cell class="cell-in-white-card-sum mt-28" title="需付款" value="￥500" :border="false"></u-cell>
        </view>
      </CFCard>
    </view>
    <view class="fixed-bottom-safe flex-row justify-end items-center fix-wrapper">
      <view class="flex-row items-end">
        <text class="font_10 text-label">共2件</text>
        <view class="flex-row justify-start items-end ml-8">
          <text class="font_10 text-black">实付：</text>
          <text class="font-price">￥804.99</text>
        </view>
      </view>
      <view class="flex-col justify-start items-center button ml-12">
        <text class="font_10 text-white">确认订单</text>
      </view>
    </view>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderContactCard from '../../../../../pages/myOrder/components/OrderContactCard/OrderContactCard.vue';
  import TextArrow from '../../../../../pages/myOrder/components/TextArrow/TextArrow.vue';

  export default {
    components: { CFCard, NavBar, OrderContactCard, TextArrow },
    props: {},
    data() {
      return {
        title: '提交支付',
        items: [null, null, null, null, null],
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
    .body {
      padding: 24rpx 24rpx 192rpx;
      .prod-img {
        border-radius: 16rpx;
        width: 118rpx;
        height: 118rpx;
      }
      .font-14 {
        font-size: 28rpx;
        line-height: 40rpx;
        font-weight: 500;
        color: #111111;
      }
      .text-title {
        font-size: 30rpx;
        line-height: 42rpx;
      }
      .font-label {
        font-size: 28rpx;
        line-height: 40rpx;
        color: #6d6d6d;
      }
      .text-gray {
        color: #c5c5c5;
      }
      .divider {
        background-color: #6d6d6d;
        height: 2rpx;
      }
    }
    .fix-wrapper {
      margin-top: 48rpx;
      padding: 32rpx;
      background-color: #ffffff;
      .font_10 {
        font-size: 24rpx;
        line-height: 32rpx;
        font-weight: 500;
      }
      .text-label {
        color: #9c9c9f;
        line-height: 34rpx;
        font-weight: unset;
      }
      .text-black {
        color: #111111;
        line-height: 34rpx;
      }
      .font-price {
        font-size: 32rpx;
        line-height: 36rpx;
        font-weight: 600;
        color: #111111;
      }
      .button {
        padding: 16rpx 0;
        background-color: #b09053;
        border-radius: 32rpx;
        width: 192rpx;
        .text-white {
          color: #ffffff;
          line-height: 34rpx;
        }
      }
    }
  }
</style>
