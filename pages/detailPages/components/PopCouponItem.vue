<template>
  <view class="flex-row items-center">
    <view class="flex-col justify-center items-center coupon-left relative">
      <image class="coupon-left coupon-bg-pos" src="/static/images/bg_coupon_left_01.png" v-if="couponType ==0" />
      <image class="coupon-left coupon-bg-pos" src="/static/images/bg_coupon_left_02.png" v-if="couponType ==1" />
      <image class="coupon-left coupon-bg-pos" src="/static/images/bg_coupon_left_03.png" v-if="couponType ==2" />
      <view class="flex-col justify-center items-center flex-1 relative left-con">
        <view class="flex-row">
          <text class="coupon-price">10</text>
          <text class="self-end uni ml-2">元</text>
        </view>
        <text class="label con-text">满100元使用</text>
      </view>
    </view>
    <view class="line"></view>
    <view class="flex-col relative coupon-right justify-center">
      <image class="coupon-right coupon-bg-pos" src="/static/images/bg_coupon_right_01.png" v-if="couponType ==0" />
      <image class="coupon-right coupon-bg-pos" src="/static/images/bg_coupon_right_02.png" v-if="couponType ==1" />
      <image class="coupon-right coupon-bg-pos" src="/static/images/bg_coupon_right_03.png" v-if="couponType ==2" />
      <view class="flex-col relative right-con">
        <text class="line-clamp-one title">收纳服务满减券</text>
        <text class="label time">2023.06.01-2023.07.01</text>
        <text class="line-clamp-one label condition">全部服务可用</text>
      </view>
      <view class="flex-col items-center button text-wrapper justify-center" v-if="couponType ==0">
        <text class="label btn-text">领取</text>
      </view>
      <view class="flex-col coupon-status coupon-status-pos" v-if="couponType ==1">
        <image class="image" src="/static/images/icon_coupon_01.png" />
      </view>
      <view class="flex-col coupon-status coupon-status-pos" v-if="couponType ==2">
        <image class="icon" src="/static/images/icon_coupon_02.png" />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { couponItem: { type: Object, default: {} } },
    data() {
      return {
        couponType: 1,
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .coupon-left {
    width: 184rpx;
    height: 200rpx;
    .left-con {
    //   padding: 8rpx 24rpx 56rpx;
      .coupon-price {
        color: #bb3e0c;
        font-size: 84rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 98rpx;
      }
      .unit {
        margin-bottom: 16rpx;
        color: #bb3e0c;
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 600;
        line-height: 34rpx;
      }
      .con-text {
        line-height: 34rpx;
        color: #bb3e0c;
        margin-bottom: 4rpx;
      }
    }
  }
  .line {
    position: absolute;
    left: 182rpx;
    z-index: 100;
    width: 0rpx;
    height: 174rpx;
    border: 1rpx dashed #e8cfc0;
  }
  .coupon-right {
    width: 502rpx;
    height: 200rpx;
    .right-con {
      padding: 0 32rpx;
      padding-left: 0 32rpx;
      .title {
        color: #111111;
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 28rpx;
      }
      .time {
        margin-top: 24rpx;
      }
      .condition {
        margin-top: 40rpx;
      }
    }
    .button {
      position: absolute;
      right: 20rpx;
      top: 50%;
      transform: translateY(-50%);
      .btn-text {
        color: #ffffff;
      }
    }
    .text-wrapper {
      background-color: #bb3e0c;
      border-radius: 24rpx;
      width: 108rpx;
      height: 52rpx;
    }
    .coupon-status {
      overflow: hidden;
      border-radius: 0rpx 24rpx 0rpx 0rpx;
      width: 110rpx;
      height: 104rpx;
      .image {
        margin-top: -16rpx;
        opacity: 0.1;
        width: 114rpx;
        height: 114rpx;
      }
      .icon {
        margin-top: -16rpx;
        width: 114rpx;
        height: 114rpx;
      }
    }
    .coupon-status-pos {
      position: absolute;
      right: 0rpx;
      top: 0rpx;
    }
  }
  .coupon-bg-pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .label {
    font-size: 24rpx;
    font-family: PingFang SC;
    line-height: 24rpx;
    color: #6d6d6d;
  }
</style>
