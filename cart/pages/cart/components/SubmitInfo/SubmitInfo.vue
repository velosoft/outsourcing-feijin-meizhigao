<template>
  <CFCard>
    <view class="flex-col">
      <view class="flex-col">
        <u-cell
          class="cell-in-white-card-weight"
          title="课程金额"
          value="￥400.00"
          :border="false"
          :center="true"
        ></u-cell>
        <u-cell
          class="cell-in-white-card-weight mt-18"
          title="活动优惠"
          value="暂无活动"
          :border="false"
          :center="true"
        ></u-cell>
        <u-cell
          class="cell-in-white-card-weight mt-18"
          title="优惠券"
          value="-￥10.00"
          :border="false"
          :center="true"
          :isLink="true"
          @click="onClick"
        ></u-cell>
        <u-cell
          class="cell-in-white-card-weight mt-18"
          title="积分抵扣"
          value="￥35.00"
          :border="false"
          :center="true"
          :isLink="true"
          @click="onClick_1"
        ></u-cell>
      </view>
      <view class="flex-col mt-24">
        <view class="flex-row items-center text-area-gap">
          <text class="title textare-tips-label">订单留言</text>
          <text class="title textare-tips ml-8">50字以内（选填）</text>
        </view>
        <u-textarea
          class="text-area text-area-border"
          placeholder="请输入…"
          placeholderStyle="font-size:24rpx;color:#C3C3C3;font-family:苹方;font-weight:400;"
        ></u-textarea>
      </view>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12"><PopCoupon></PopCoupon></u-popup>
    <u-popup :show="popupVisible_1" @close="onClose_1" mode="bottom" :round="12">
      <PopPointsDeduction></PopPointsDeduction>
    </u-popup>
  </CFCard>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import PopCoupon from '@/cart/pages/cart/registerCourse/components/PopCoupon/PopCoupon.vue';
  import PopPointsDeduction from '@/cart/pages/cart/registerCourse/components/PopPointsDeduction/PopPointsDeduction.vue';

  export default {
    components: { CFCard, PopCoupon, PopPointsDeduction },
    props: { submitData: { type: Object, default: () => ({}) } },
    data() {
      return {
        eventDiscountsNum: '',
        couponNum: '',
        coinsNum: '',
        popupVisible: false,
        popupVisible_1: false,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      onClick_1() {
        this.popupVisible_1 = true;
      },
      onClose_1() {
        this.popupVisible_1 = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .title {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #6d6d6d;
  }
  .text-area-gap {
    margin-bottom: 32rpx;
  }
  .textare-tips-label{
    font-family: PingFang SC;
    color: #6d6d6d;
  }
  .textare-tips {
    color: #6d6d6d;
    font-size: 26rpx;
    line-height: 26rpx;
  }
  .text-area {
    margin: 0 8rpx;

    /deep/ .u-textarea .textarea{
      min-height: 220rpx !important;
    }
  }
</style>
