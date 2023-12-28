<template>
  <popup-with-button title="优惠券" buttonText="确定" @click="onConfirm">
    <view class="flex-col justify-start wrap">
      <u-radio-group class="cf-radio-group" v-model="radioGroupValue">
        <view class="flex-col">
          <view class="flex-row relative list-item mt-12 items-center" v-for="(item, index) in items" :key="index">
            <view class="flex-col items-center relative coupon-left justify-center">
              <image class="coupon-left pos" src="/cart/static/images/bg_cart_coupon_left.png" />
              <view class="flex-col relative">
                <view class="items-end flex-row">
                  <text class="coupon-num">10</text>
                  <text class="condition unit ml-2">元</text>
                </view>
                <text class="condition mt-12">满100元使用</text>
              </view>
            </view>
            <view class="line"></view>
            <view class="flex-col items-start relative">
              <image class="coupon-right pos" src="/cart/static/images/bg_cart_coupon_right.png" />
              <view class="flex-row items-center relative coupon-right-size justify-between">
                <view class="flex-col self-center">
                  <view class="flex-col">
                    <text class="line-clamp-one font">定制商品满减券</text>
                    <text class="time mt-4">2023.06.01-2023.07.01</text>
                  </view>
                  <text class="condition-normal mt-12">适用全部(商品/服务/课程)</text>
                </view>
                <u-radio v-model="index" activeColor="#bb3e0b" :iconSize="20"></u-radio>
              </view>
            </view>
          </view>
        </view>
      </u-radio-group>
    </view>
  </popup-with-button>
</template>

<script>
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { PopupWithButton },
    props: { couponLiist: { type: Object, default: () => ({}) } },
    data() {
      return {
        radioValue: '',
        radioGroupValue: '',
        items: [null, null, null],
      };
    },

    methods: {
      onConfirm() {
        // 事件处理方法
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    margin: 38rpx 0 58rpx;

    .list-item {
      &:first-child {
        margin-top: 0;
      }
      .coupon-left {
        width: 184rpx;
        height: 200rpx;
        .coupon-num {
          font-size: 84rpx;
          font-family: HarmonyOS Sans SC;
          line-height: 64rpx;
          font-weight: 700;
          color: #bb3e0c;
        }
        .condition {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22rpx;
          color: #bb3e0c;
        }
        .unit {
          font-weight: 600;
          line-height: 34rpx;
        }
      }
      .line {
        width: 0rpx;
        height: 174rpx;
        border: 1rpx dashed #e8cfc0;
      }
      .coupon-right {
        width: 502rpx;
        height: 200rpx;
      }
      .pos {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
      .coupon-right-size {
        padding: 0 28rpx;
        width: 502rpx;
        height: 200rpx;
        .font {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 40rpx;
          color: #111111;
        }
        .time {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 34rpx;
          color: #6d6d6d;
        }
        .condition-normal {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 34rpx;
          color: #6d6d6d;
        }
      }
    }
  }
</style>
