<template>
  <view class="flex-col justify-start cart-footer justify-between">
    <view class="flex-row items-center wrap pos justify-between">
      <view class="flex-row items-center">
        <u-checkbox-group class="checkbox" v-model="v_model">
          <u-checkbox
            v-model="v_model_1"
            name="NzKpOYzN"
            shape="circle"
            activeColor="#b09053"
            :iconSize="18"
          ></u-checkbox>
        </u-checkbox-group>
        <text class="checkbox-label checkbox-text ml-6">全选</text>
      </view>
      <view class="flex-row items-center">
        <view class="flex-col">
          <view class="flex-row items-center justify-end">
            <text class="label select-text">已选{{ list.length }}件，</text>
            <text class="label total-text">合计</text>
            <view class="flex-row items-start">
              <text class="checkbox-label currency">￥</text>
              <text class="price-text">{{ price }}</text>
            </view>
          </view>
          <view class="flex-row items-center justify-end coupon-wrap mt-6">
            <view class="coupon-num items-center">
              <text class="coupon-label">优惠:</text>
              <text class="label coupon-price">￥{{ discount }}</text>
            </view>
            <view class="flex-col items-center coupon-detial justify-center ml-4" @click="onClick">
              <text class="coupon-detial-text">优惠明细</text>
            </view>
          </view>
        </view>
        <view class="flex-col items-center btn-wrap ml-12 justify-center" @click="onClick_1">
          <text class="checkbox-label btn-text">去结算({{ list.length }})</text>
        </view>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="bottom"
      :round="12"
      :safeAreaInsetBottom="false"
      bgColor="transparent"
    >
      <pop-cart-coupon-detial></pop-cart-coupon-detial>
    </u-popup>
  </view>
</template>

<script>
  import PopCartCouponDetial from '../PopCartCouponDetial/PopCartCouponDetial.vue';

  export default {
    components: { PopCartCouponDetial },
    props: {
      list: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        v_model: [],
        v_model_1: '',
        popupVisible: false,
      };
    },
    computed: {
      price() {
        return (this.list || []).reduce((acc, item, i) => acc + item.productPrice * item.productQuantity, 0).toFixed(2);
      },
      discount() {
        return (this.list || []).reduce((acc, item, i) => acc + (item.discount || 0), 0).toFixed(2);
      },
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      onClick_1() {
        // uni.navigateTo({ url: '/cart/pages/cart/submitOrder/submitOrder' });
        // uni.navigateTo({ url: '/cart/pages/cart/bookCustomize/bookCustomize' });
        // uni.navigateTo({ url: '/cart/pages/cart/bookServe/bookServe' });
        uni.navigateTo({ url: '/cart/pages/cart/registerCourse/registerCourse/registerCourse' });
      },
    },
  };
</script>

<style scoped lang="less">
  .cart-footer {
    padding-top: 16rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 0rpx 20rpx #0000000a;
    height: 112rpx;
    .wrap {
      padding: 0 32rpx;
      height: 112rpx;
      background-color: #ffffff;
      box-shadow: 0rpx 0rpx 20rpx #0000000a;
      z-index: 11000;
      .checkbox {
        flex-shrink: 0;
        align-self: center;
      }
      .checkbox-label {
        font-size: 28rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
      }
      .checkbox-text {
        color: #111111;
      }
      .label {
        font-size: 24rpx;
        font-family: PingFangSC;
        line-height: 24rpx;
      }
      .select-text {
        color: #6d6d6d;
      }
      .total-text {
        color: #111111;
      }
      .currency {
        color: #bb3e0c;
      }
      .price-text {
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
      .btn-wrap {
        background-color: #b09053;
        border-radius: 40rpx;
        width: 208rpx;
        height: 80rpx;
        .btn-text {
          color: #ffffff;
        }
      }
    }
    .pos {
      position: fixed;
      left: 0rpx;
      right: 0rpx;
      bottom: 0rpx;
    }
  }
</style>
