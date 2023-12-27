<template>
  <view class="flex-col order">
    <view class="flex-row justify-between items-center">
      <text class="order-no">{{ `订单号：${order.no}` }}</text>
      <view class="flex-col">
        <view class="flex-row items-center self-start" v-if="order.status === '交易关闭' || order.status === '已取消'">
          <view class="shrink-0 icon-status-gray"></view>
          <text class="status-font status-gray ml-8">{{ order.status }}</text>
        </view>
        <view class="flex-row items-center self-stretch" v-else>
          <view class="shrink-0 icon-status"></view>
          <text class="status-font status ml-8">{{ order.status }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col summary" @click="gotoDetail">
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
      <view class="flex-col items-start self-start time-wrapper order-mt-8">
        <view
          class="reserve-time"
          v-if="
            order.status === '未支付' ||
            order.status === '等待分配业务员' ||
            order.status === '等待上门测量' ||
            order.status === '已取消'
          "
        >
          <text>预约上门时间：</text>
          <text>{{ order.reserveTime }}</text>
        </view>
        <text class="captain line-clamp-one" v-else>{{ `领队：${order.captain.name} ${order.captain.phone}` }}</text>
      </view>
      <view class="flex-col items-start self-start stage-wrapper order-mt-8">
        <view class="flex-row items-center count-down" v-if="order.status === '未支付'">
          <text class="reserve-time">支付倒计时：</text>
          <u-count-down class="count-time" :time="30 * 60 * 1000" format="mm"> </u-count-down>
          <text class="count-time">分钟</text>
        </view>
        <text class="count-time" v-else>{{ order.stage }}</text>
      </view>
    </view>
    <view class="flex-row justify-end">
      <view class="btn btn-gray" v-if="order.status === '未支付'">
        <text>取消订单</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '未支付'">
        <text>去付款</text>
      </view>
      <view
        class="btn btn-gray"
        v-if="
          order.status === '等待上门服务' ||
          order.status === '服务中' ||
          order.status === '差额支付' ||
          order.status === '等待客户验收' ||
          order.status === '交易完成'
        "
        @click="gotoProductList"
      >
        <text>查看商品订单</text>
      </view>
      <view
        class="btn btn-gray"
        v-if="
          order.status === '等待上门测量' ||
          order.status === '测量中' ||
          order.status === '等待客户签约' ||
          order.status === '等待开始设计' ||
          order.status === '方案设计中' ||
          order.status === '等待确认报价' ||
          order.status === '等待上门服务' ||
          order.status === '服务中' ||
          order.status === '差额支付' ||
          order.status === '等待客户验收' ||
          order.status === '交易完成'
        "
        @click="gotoLog"
      >
        <text>服务日志</text>
      </view>
      <view class="btn btn-gray" v-if="order.status === '等待客户签约'">
        <text>查看测量结果</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '等待客户签约'">
        <text>开始签约</text>
      </view>
      <view class="btn btn-gray" v-if="order.status === '等待确认方案'" @click="gotoProductList">
        <text>查看商品方案</text>
      </view>
      <view class="btn btn-gray" v-if="order.status === '等待确认方案'" @click="gotoPlan">
        <text>查看服务方案</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '等待确认方案'">
        <text>确认方案</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '等待确认报价'">
        <text>查看报价</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '等待上门服务'" @click="onShowReserve">
        <text>预约服务时间</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '差额支付'" @click="gotoPriceDiff">
        <text>确认差额</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '等待客户验收'" @click="gotoAcceptance">
        <text>验收服务</text>
      </view>
      <view class="btn btn-yellow" v-if="order.status === '交易完成'" @click="gotoAddComment">
        <text>评价</text>
      </view>
      <view class="btn btn-gray" v-if="order.status === '交易关闭' || order.status === '已取消'">
        <text>删除记录</text>
      </view>
    </view>
    <u-popup :show="showReserve" @close="onCloseReserve" mode="bottom" :closeable="true" :round="14">
      <PopReserve @confirm="onCloseReserve"></PopReserve>
    </u-popup>
  </view>
</template>

<script>
  import { getPriceDecimalPart, getPriceIntergetPart } from '@/utils/utils.js';
  import PopReserve from '@/myOrder/pages/myOrder/components/PopReserve/PopReserve.vue';

  export default {
    components: { PopReserve },
    props: {
      order: Object,
    },
    data() {
      return {
        showReserve: false,
      };
    },
    methods: {
      getPriceIntergetPart(val) {
        return getPriceIntergetPart(val);
      },
      getPriceDecimalPart(val) {
        return getPriceDecimalPart(val);
      },
      onShowReserve() {
        this.showReserve = true;
      },
      onCloseReserve() {
        this.showReserve = false;
      },
      gotoLog() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/serviceLog/serviceLog` });
      },
      gotoProductList() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/productList/productList` });
      },
      gotoPriceDiff() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/checkPriceDiff/checkPriceDiff` });
      },
      gotoDetail() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/serviceOrder/detail/detail/detail` });
      },
      gotoAcceptance() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/acceptanceService/acceptanceService` });
      },
      gotoAddComment() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/serviceAddComment/serviceAddComment` });
      },
      gotoPlan() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/servicePlan/servicePlan` });
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
    color: #111111;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .desc {
    font-size: 24rpx;
    line-height: 34rpx;
    font-weight: 500;
    color: #6d6d6d;
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
    color: #111111;
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
    padding: 8rpx 20rpx;
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
  .btn-yellow {
    background-color: #b09053;
    color: #ffffff;
  }
</style>
