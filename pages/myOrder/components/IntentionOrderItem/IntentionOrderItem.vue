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
      <view class="flex-row items-center self-stretch top">
        <image class="order-image" :src="order.image" />
        <view class="flex-col items-start flex-1 right">
          <text class="status-font title">{{ order.title }}</text>
          <text class="desc desc-text order-mt-4">{{ order.desc }}</text>
          <view class="flex-row items-center order-mt-4">
            <view class="flex-row items-baseline self-stretch money">
              <text class="money-number">{{ order.price }}</text>
              <text class="money-currency currency-text">￥</text>
            </view>
            <text class="money-currency">.00</text>
          </view>
        </view>
        <text class="desc quantity">{{ `x${order.quantity}` }}</text>
      </view>
      <view class="flex-col items-start self-start time-wrapper order-mt-8">
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
        <text class="captain" v-else>{{ `领队：${order.captain.name} ${order.captain.phone}` }}</text>
      </view>
      <view class="flex-col items-start self-start stage-wrapper order-mt-8">
        <view class="count-down" v-if="order.status === '定金未支付'">
          <text class="reserve-time">支付倒计时：</text>
          <text class="count-time">59分钟</text>
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
      <view class="btn btn-gray" v-if="order.status === '交易关闭'">
        <text>删除记录</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      order: Object,
    },
    data() {
      return {};
    },

    methods: {},
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
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
  .order-mt-4 {
    margin-top: 8rpx;
  }
  .money {
    width: 80rpx;
  }
  .money-number {
    margin-left: 24rpx;
    color: #111111;
    font-size: 32rpx;
    line-height: 36rpx;
  }
  .money-currency {
    font-size: 24rpx;
    line-height: 30rpx;
    color: #111111;
  }
  .currency-text {
    margin-left: -80rpx;
    font-weight: 600;
  }
  .quantity {
    margin-left: 40rpx;
    margin-right: 8rpx;
    text-transform: uppercase;
  }
  .time-wrapper {
    margin-left: 16rpx;
  }
  .reserve-time {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #3c3d41;
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
</style>
