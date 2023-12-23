<template>
  <PopupWithButton title="优惠券" buttonText="确定">
    <view class="flex-col justify-start button view">
      <u-radio-group v-model="radioGroupValue">
        <view class="flex-col">
          <view class="flex-row relative list-item mt-11 items-center" v-for="(item, index) in items" :key="index">
            <view class="flex-col items-center relative coupon-left justify-center">
              <image class="coupon-left pos" src="/static/images/bg_cart_coupon_left.png" />
              <view class="flex-col relative">
                <view class="items-center flex-row">
                  <text class="coupon-num">10</text>
                  <text class="unit mt-2">元</text>
                </view>
                <text class="condition mt-12">满100元使用</text>
              </view>
            </view>
            <view class="line"></view>
            <view class="flex-col items-start relative">
              <image class="coupon-right pos" src="/static/images/bg_cart_coupon_right.png" />
              <view class="flex-row items-center relative coupon-right-size justify-between">
                <view class="flex-col self-center coupon-right-con">
                  <text class="line-clamp-one font">定制商品满减券</text>
                  <view class="flex-col items-center self-stretch mt-12">
                    <text class="time">2023.06.01-2023.07.01</text>
                    <text class="font_6 condition-normal mt-20">适用全部(商品/服务/课程)</text>
                  </view>
                </view>
                <u-radio v-model="index" activeColor="#bb3e0b" :iconSize="20"></u-radio>
              </view>
            </view>
          </view>
        </view>
      </u-radio-group>
    </view>
  </PopupWithButton>
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
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .mt-11 {
    margin-top: 22rpx;
  }
  .button {
    align-self: stretch;
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
        .unit {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22rpx;
          font-weight: 600;
          color: #bb3e0c;
        }
        .condition {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22rpx;
          color: #bb3e0c;
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
        padding: 0 32rpx;
        width: 502rpx;
        height: 200rpx;
        .coupon-right-con {
          margin-left: 32rpx;
          .font {
            font-size: 28rpx;
            font-family: 苹方;
            line-height: 26rpx;
            color: #030305;
          }
          .time {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 18rpx;
            color: #a7a7a7;
          }
          .font_6 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22rpx;
            color: #a7a7a7;
          }
          .condition-normal {
            line-height: 22rpx;
          }
        }
      }
    }
  }
  .view {
    padding: 56rpx 0
  }
  </style>