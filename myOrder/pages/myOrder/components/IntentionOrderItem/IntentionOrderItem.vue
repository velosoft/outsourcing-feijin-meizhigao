<template>
  <view class="flex-col order">
    <view class="flex-row justify-between items-center">
      <text class="order-no">{{ `意向单号：${order.no}` }}</text>
      <view class="flex-col">
        <view class="flex-row items-center self-start" v-if="order.status === '交易关闭' || order.status === '已取消'">
          <view class="shrink-0 icon-status-gray"></view>
          <text class="status-font status-gray ml-8">{{ order.status }}</text>
        </view>
        <view class="flex-row items-center self-stretch" v-else-if="order.status === '交易完成'">
          <view class="shrink-0 icon-status-black"></view>
          <text class="status-font status-black ml-8">{{ order.status }}</text>
        </view>
        <view class="flex-row items-center self-stretch" v-else>
          <view class="shrink-0 icon-status"></view>
          <text class="status-font status ml-8">{{ order.status }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col summary">
      <view class="flex-row top">
        <image class="order-image" :src="order.image" />
        <view class="flex-col justify-between flex-1 right">
          <text class="line-clamp-one status-font title">{{ order.title }}</text>
          <view class="flex-row justify-between items-center">
            <text class="line-clamp-one desc desc-text">{{ order.desc }}</text>
            <text class="desc quantity">{{ `x${order.quantity}` }}</text>
          </view>
          <view class="flex-row price-wrapper">
            <text class="price-number-small">￥</text>
            <text class="price-number">{{ getPriceIntergetPart(order.price) }}</text>
            <text class="price-number-small">.{{ getPriceDecimalPart(order.price) }}</text>
          </view>
        </view>
      </view>
      <view class="flex-row justify-between items-start self-stretch time-wrapper order-mt-8">
        <view
          class="reserve-time"
          v-if="
            order.status === '定金未支付' ||
            order.status === '等待分配业务员' ||
            order.status === '等待上门测量' ||
            order.status === '已取消'
          "
        >
          <text>预约上门时间：</text>
          <text>{{ order.reserveTime }}</text>
        </view>
        <text class="captain line-clamp-one" v-else>{{ `领队：${order.captain.name} ${order.captain.phone}` }}</text>
        <view
          class="flex-row items-center"
          v-if="
            order.status !== '定金未支付' &&
            order.status !== '等待分配业务员' &&
            order.status !== '交易完成' &&
            order.status !== '交易关闭' &&
            order.status !== '已取消'
          "
        >
          <view class="flex-col justify-center items-center phone-icon-wrapper">
            <img class="phone-icon" src="/myOrder/static/images/icon_phone.png" />
          </view>
          <text class="ml-4 phone-text">联系电话</text>
        </view>
      </view>
      <view class="flex-col items-start self-start stage-wrapper order-mt-8">
        <view class="flex-row items-center count-down" v-if="order.status === '定金未支付'">
          <text class="reserve-time">支付倒计时：</text>
          <u-count-down class="count-time" :time="30 * 60 * 1000" format="mm"> </u-count-down>
          <text class="count-time">分钟</text>
        </view>
        <text class="count-time" v-else>{{ order.stage }}</text>
      </view>
    </view>
    <view class="flex-row justify-end">
      <view class="btn btn-gray" v-if="order.status === '定金未支付'">
        <text>取消订单</text>
      </view>
      <view class="btn btn-black" v-if="order.status === '定金未支付'">
        <text>去付款</text>
      </view>
      <view class="btn btn-black" v-if="order.status === '等待确认方案'">
        <text>查看方案</text>
      </view>
      <view
        class="btn btn-gray"
        v-if="
          order.status === '等待确认报价' ||
          order.status === '等待上门服务' ||
          order.status === '服务中' ||
          order.status === '等待客户验收' ||
          order.status === '交易完成'
        "
      >
        <text>查看商品清单</text>
      </view>
      <view class="btn btn-black" v-if="order.status === '等待确认报价'">
        <text>确认报价</text>
      </view>
      <view class="btn btn-black" v-if="order.status === '等待上门服务'">
        <text>预约上门服务</text>
      </view>
      <view class="btn btn-black" v-if="order.status === '等待客户验收'">
        <text>验收服务</text>
      </view>
      <view class="btn btn-black" v-if="order.status === '交易完成'">
        <text>评价</text>
      </view>
      <view class="btn btn-gray" v-if="order.status === '交易关闭' || order.status === '已取消'">
        <text>删除记录</text>
      </view>
    </view>
  </view>
</template>

<script>
  import { getPriceDecimalPart, getPriceIntergetPart } from '@/utils/utils.js';
  export default {
    components: {},
    props: {
      order: Object,
    },
    data() {
      return {};
    },

    methods: {
      getPriceIntergetPart(val) {
        return getPriceIntergetPart(val);
      },
      getPriceDecimalPart(val) {
        return getPriceDecimalPart(val);
      },
    },
  };
</script>

<style scoped lang="less">
  .order {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .order-no {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #6d6d6d;
  }
  .icon-status {
    background-color: #b09053;
    border-radius: 50%;
    width: 12rpx;
    height: 12rpx;
  }
  .status-font {
    font-size: 30rpx;
    line-height: 42rpx;
    font-weight: 500;
  }
  .status {
    color: #b09053;
  }
  .icon-status-gray {
    background-color: #9c9c9f;
    border-radius: 50%;
    width: 12rpx;
    height: 12rpx;
  }
  .status-gray {
    color: #9c9c9f;
  }
  .icon-status-black {
    background-color: #111111;
    border-radius: 50%;
    width: 12rpx;
    height: 12rpx;
  }
  .status-black {
    color: #111111;
  }
  .summary {
    margin-top: 32rpx;
    padding-bottom: 16rpx;
    background-color: #f1f1f1;
    border-radius: 8rpx;
  }
  .top {
    padding: 16rpx;
    border-bottom: solid 2rpx #e4e4e4;
  }
  .order-image {
    border-radius: 12rpx;
    width: 128rpx;
    height: 128rpx;
  }
  .right {
    margin-left: 20rpx;
    overflow: hidden;
  }
  .title {
    color: #2d2e32;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .desc {
    font-size: 24rpx;
    line-height: 34rpx;
    font-weight: 500;
    color: #9e9ea0;
  }
  .desc-text {
    font-weight: unset;
  }
  .price-wrapper {
    align-items: start;
    color: #111111;
    font-weight: 500;
  }
  .price-number-small {
    font-size: 24rpx;
  }
  .price-number {
    font-size: 32rpx;
  }
  .quantity {
    margin-left: 40rpx;
    margin-right: 8rpx;
    text-transform: uppercase;
  }
  .time-wrapper {
    padding: 0 16rpx;
  }
  .reserve-time {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #3c3d41;
    font-weight: 400;
    font-family: 'PingFangSC';
  }
  .captain {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #000000;
  }
  .stage-wrapper {
    margin-left: 16rpx;
  }
  .order-mt-8 {
    margin-top: 16rpx;
  }
  .count-down {
    line-height: 34rpx;
  }
  .count-time {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;

    /deep/ text {
      font-size: 24rpx;
      line-height: 34rpx;
      color: #b09053;
    }
  }
  .btn {
    padding: 8rpx 16rpx;
    border-radius: 8rpx;
    font-size: 24rpx;
    line-height: 34rpx;
    font-weight: 500;
    margin-top: 24rpx;
    min-width: 132rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn + .btn {
    margin-left: 16rpx;
  }
  .btn-gray {
    border: 2rpx solid #e8e8e8;
    color: #9e9ea0;
  }
  .btn-black {
    background-color: #000000;
    color: #ffffff;
  }
  .phone-icon-wrapper {
    width: 40rpx;
    height: 40rpx;
    background: #e5e5e5;
    border-radius: 50%;

    .phone-icon {
      width: 22rpx;
      height: 22rpx;
    }
  }
  .phone-text {
    font-size: 24rpx;
    font-family: 'PingFangSC';
    font-weight: 400;
    color: #2d2e32;
  }
</style>
