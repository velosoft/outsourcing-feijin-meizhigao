<template>
  <view class="flex-col pay-card">
    <u-radio-group v-model="v_model">
      <view class="flex-col flex-1">
        <view class="flex-row">
          <image class="icon" src="/cart/static/images/icon_pay_coins.png" />
          <view class="flex-row justify-between flex-1 pay-right-cell ml-12 items-center">
            <view class="flex-col">
              <text class="pay-type-text pay-type-font">收纳币抵扣</text>
              <text class="pay-label pay-desc mt-8">可用收纳币800（抵扣1：1）</text>
            </view>
            <u-radio class="radio-icon" v-model="v_model_1" name="r1kW2NfW" activeColor="#b09053"></u-radio>
          </view>
        </view>
        <view class="flex-row">
          <image class="icon" src="/cart/static/images/icon_pay_wexin.png" />
          <view class="flex-row justify-between flex-1 pay-right-cell ml-16 items-center">
            <view class="flex-col"><text class="pay-type-text pay-type-font">微信支付</text></view>
            <u-radio v-model="v_model_2" name="CdGadwz5" activeColor="#b09053"></u-radio>
          </view>
        </view>
      </view>
    </u-radio-group>
    <view class="flex-col price-cell">
      <view class="flex-row justify-end items-center">
        <text class="pay-label discount">收纳币抵扣</text>
        <text class="price-num ml-4">-￥50.00</text>
      </view>
      <view class="flex-row justify-end items-center mt-20">
        <text class="pay-label total">合计</text>
        <text class="price-num">￥150.00</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { payInfo: { type: Object, default: () => ({}) } },
    data() {
      return {
        v_model: '',
        v_model_1: '',
        v_model_2: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .pay-card {
    padding: 0 32rpx 64rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .icon {
      margin: 40rpx 0;
      border-radius: 12rpx;
      width: 72rpx;
      height: 72rpx;
    }
    .pay-right-cell {
      border-bottom: 1rpx solid #f4f4f4;
      .pay-type-text {
        font-size: 30rpx;
        font-family: PingFangSC;
        line-height: 30rpx;
      }
      .pay-type-font {
        color: #2d2e32;
      }
      .pay-desc {
        color: #a7a7a7;
      }
      .radio-icon {
        width: 44rpx;
        height: 44rpx;
      }
    }
    .price-cell {
      margin-top: 120rpx;
      .discount {
        font-size: 28rpx;
        line-height: 28rpx;
      }
      .price-num {
        font-size: 26rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 26rpx;
        font-weight: 700;
        color: #030305;
      }
      .total {
        font-size: 28rpx;
        line-height: 28rpx;
      }
    }
    .pay-label {
      font-size: 26rpx;
      font-family: PingFangSC;
      line-height: 26rpx;
      color: #6c6c6c;
    }
  }
</style>
