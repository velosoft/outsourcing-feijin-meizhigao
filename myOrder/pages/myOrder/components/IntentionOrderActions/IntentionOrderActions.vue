<template>
  <view class="flex-row items-center actions-wrapper">
    <view class="relative">
      <text class="more-text" @click="onToggleMore">更多</text>
      <view class="more-pop" v-if="showMore">
        <view class="arrow"></view>
        <view class="more-action" @click="gotoComment">查看评价</view>
      </view>
    </view>
    <view class="flex-auto flex-row justify-end wrap">
      <view class="btn btn-plain" @click="gotoAfterSale"><text>申请售后</text></view>
      <view class="btn btn-plain" @click="onShowConfirmProposal"><text>确认方案</text></view>
      <view class="btn btn-plain" @click="gotoConfirmQuote"><text>确认报价</text></view>
      <view class="btn btn-plain"><text>组件清单</text></view>
      <view class="btn btn-plain" @click="onShowAcceptance"><text>验收服务</text></view>
      <view class="btn btn-plain" @click="gotoProductList"><text>查看商品订单</text></view>
      <view class="btn btn-plain" @click="onShowCancel"><text>取消服务</text></view>
      <view class="btn btn-plain"><text>删除记录</text></view>
      <view class="btn btn-primary" @click="gotoAddComment"><text>评价</text></view>
    </view>
    <u-popup :show="showConfirmProposal" @close="onCloseConfirmProposal" mode="bottom" :round="12" :closeable="true">
      <PopConfirmProposal @confirm="onCloseConfirmProposal"></PopConfirmProposal>
    </u-popup>
    <u-popup :show="showCancel" @close="onCloseCancel" mode="bottom" :round="10" :closeable="true">
      <pop-order-cancel @click="onCloseCancel"></pop-order-cancel>
    </u-popup>
    <u-popup :show="showAcceptance" @close="onCloseAcceptance" mode="bottom" :closeable="true" :round="12">
      <PopIntentionAcceptance @confirm="onCloseAcceptance"></PopIntentionAcceptance>
    </u-popup>
  </view>
</template>

<script>
  import PopConfirmProposal from '@/myOrder/pages/myOrder/components/PopConfirmProposal/PopConfirmProposal.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';
  import PopIntentionAcceptance from '@/myOrder/pages/myOrder/components/PopIntentionAcceptance/PopIntentionAcceptance.vue';

  export default {
    components: { PopConfirmProposal, PopOrderCancel, PopIntentionAcceptance },
    props: {},
    data() {
      return {
        showMore: false,
        showConfirmProposal: false,
        showCancel: false,
        showAcceptance: false,
      };
    },
    methods: {
      onToggleMore() {
        this.showMore = !this.showMore;
      },
      onShowCancel() {
        this.showCancel = true;
      },
      onCloseCancel() {
        this.showCancel = false;
      },
      onShowConfirmProposal() {
        this.showConfirmProposal = true;
      },
      onCloseConfirmProposal() {
        this.showConfirmProposal = false;
      },
      onShowAcceptance() {
        this.showAcceptance = true;
      },
      onCloseAcceptance() {
        this.showAcceptance = false;
      },
      gotoConfirmQuote() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/intentionConfirmQuote/intentionConfirmQuote' });
      },
      gotoProductList() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/productList/productList' });
      },
      gotoAfterSale() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/serviceAfterSale/serviceAfterSale' });
      },
      gotoAddComment() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/intentionAddComment/intentionAddComment' });
      },
      gotoComment() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/intentionComment/intentionComment' });
      },
    },
  };
</script>

<style scoped lang="less">
  .actions-wrapper {
    padding: 24rpx;
    background-color: #ffffff;
  }
  .more-text {
    font-size: 24rpx;
    color: #9c9c9f;
    line-height: 36rpx;
  }
  .more-pop {
    position: absolute;
    top: -92rpx;
    left: -4rpx;
    padding-bottom: 12rpx;
  }
  .arrow {
    border: 12rpx solid transparent;
    border-top-color: white;
    position: absolute;
    left: 20rpx;
    bottom: -6px;
  }
  .more-action {
    width: 170rpx;
    height: 72rpx;
    font-size: 28rpx;
    color: #3c3d41;
    line-height: 72rpx;
    text-align: center;
    background-color: white;
    box-shadow: 0px 0px 2px 1px rgba(224, 224, 224, 0.5);
    border-radius: 16rpx;
  }
  .btn {
    height: 72rpx;
    min-width: 164rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 36rpx;
    padding: 0 24rpx;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .btn-plain {
    border: 2rpx solid #d4d4d4;
    color: #3c3d41;
  }
  .btn-primary {
    background-color: #b09053;
    color: #ffffff;
  }
  .wrap {
    flex-wrap: wrap;
    gap: 20rpx;
  }
</style>
