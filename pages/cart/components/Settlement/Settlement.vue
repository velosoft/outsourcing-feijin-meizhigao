<template>
  <view class="flex-row items-center wrap pos justify-between">
    <view class="flex-row items-center">
      <u-checkbox
        v-model="v_model"
        name="NzKpOYzN"
        shape="circle"
        activeColor="#b09053"
        :iconSize="18"
      ></u-checkbox>
      <text class="checkbox-label checkbox-text ml-12_1 ml-12">全选</text>
    </view>
    <view class="flex-row ml-28 items-center">
      <view class="flex-col">
        <view class="flex-row">
          <text class="self-start label select-text">已选4件，</text>
          <text class="self-start label total-text">合计</text>
          <view class="flex-row items-center self-center">
            <text class="checkbox-label currency">￥</text>
            <text class="price-text">40.00</text>
          </view>
        </view>
        <view class="flex-row coupon-wrap mt-6 items-center">
          <view class="coupon-num items-center">
            <text class="coupon-label">优惠:</text>
            <text class="label coupon-price">￥30.00</text>
          </view>
          <view class="flex-col items-center coupon-detial justify-center ml-2" @click="onClick">
            <text class="coupon-detial-text">优惠明细</text>
          </view>
        </view>
      </view>
      <u-button class="ml-12_1 ml-12" text="去结算(3)" type="primary" size="mini" shape="circle"></u-button>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
      <PopCartCouponDetial></PopCartCouponDetial>
    </u-popup>
  </view>
  </template>
  
  <script>
  import PopCartCouponDetial from '../../../../pages/cart/components/PopCartCouponDetial/PopCartCouponDetial.vue';
  
  export default {
    components: { PopCartCouponDetial },
    props: {},
    data() {
      return {
        v_model: '',
        popupVisible: false,
      };
    },
  
    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    padding: 16rpx 32rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 0rpx 20rpx #0000000a;
    .checkbox-label {
      font-size: 28rpx;
      font-family: PingFangSC;
      line-height: 28rpx;
    }
    .checkbox-text {
      color: #333444;
    }
    .ml-12_1 {
      margin-left: 24rpx;
    }
    .label {
      font-size: 24rpx;
      font-family: PingFangSC;
      line-height: 24rpx;
    }
    .select-text {
      margin-top: 8rpx;
      color: #a7a7a7;
    }
    .total-text {
      margin-top: 8rpx;
      color: #030305;
    }
    .currency {
      color: #bb3e0c;
    }
    .price-text {
      margin-left: -8rpx;
      color: #bb3e0c;
      font-size: 36rpx;
      font-family: HarmonyOS Sans SC;
      font-weight: 700;
      line-height: 36rpx;
    }
    .coupon-wrap {
      padding-left: 40rpx;
      .coupon-num {
        line-height: 18.38rpx;
        height: 19.48rpx;
        .coupon-label {
          color: #bb3e0c;
          font-size: 20rpx;
          font-family: PingFangSC;
          line-height: 20rpx;
        }
        .coupon-price {
          color: #bb3e0c;
        }
      }
      .coupon-detial {
        background-color: #fff1ef;
        border-radius: 16rpx;
        width: 96rpx;
        height: 28rpx;
        .coupon-detial-text {
          color: #bb3e0c;
          font-size: 18rpx;
          font-family: PingFangSC;
          line-height: 18rpx;
        }
      }
    }
  }
  .pos {
    position: fixed;
    left: 0rpx;
    right: 0rpx;
    bottom: 0rpx;
  }
  </style>