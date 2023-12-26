<template>
  <view class="flex-col justify-start relative coupon">
    <image class="coup_bg pos" src="/personal/static/images/bg_coupon_unused.png" />
    <view class="flex-row items-stretch relative coupon">
      <view class="flex-col shrink-0 price-wrap items-center">
        <view class="flex-row items-baseline price-num">
          <text class="price">{{ item.amount }}</text>
          <text class="font-base currency_text ml-4">元</text>
        </view>
        <text class="font mt-6">{{ '满' + item.triggerCondition + '元使用' }}</text>
      </view>
      <view class="self-center shrink-0 line"></view>
      <view class="flex-col justify-between items-stretch flex-1 coupon-right">
        <view class="flex-col jusfity-start align-stretch">
          <text class="font-base title line-clamp-one">{{ item.title }}</text>
          <view class="flex-row justify-between mt-8">
            <view class="flex-col justify-center items-center self-start text-wrapper">
              <text class="coupon-time coupon-scope">{{ item.applicableTo }}</text>
            </view>
            <view class="coupon-btn">立即使用</view>
          </view>
        </view>
        <text class="self-start coupon-time">{{ item.validity.start + '-' + item.validity.end }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      item: {
        type: Object,
        default: () => ({
          status: 'pending-use',
          amount: 22,
          triggerCondition: 180,
          title: '餐饮优惠券',
          validity: { start: '2023.06.25', end: '2023.07.31' },
          applicableTo: '适用餐饮服务',
        }),
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .coupon {
    height: 230rpx;
  }
  .coup_bg {
    width: 702rpx;
    height: 230rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .price-wrap {
    padding: 50rpx 36rpx 50rpx;
    width: 256rpx;
    .price-num {
      margin-right: 8rpx;
      padding-left: 4rpx;
      .price {
        color: #ff4d1d;
        font-size: 76rpx;
        font-family: 'HarmonyOS Sans Bold';
        line-height: 76rpx;
      }
      .currency_text {
        color: #ff4d1d;
      }
    }
    .font {
      color: #ff4d1d;
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
    }
  }
  .line {
    background-image: repeating-linear-gradient(0deg, #e8e8e8, #e8e8e8 3.4%, transparent 3.4%, transparent 6.8%);
    width: 2rpx;
    height: 176rpx;
  }
  .coupon-right {
    padding: 36rpx 24rpx 32rpx 34rpx;
    .title {
      color: #111111;
      font-weight: 500;
      line-height: 44rpx;
    }
    .text-wrapper {
      border-radius: 6rpx;
      border: solid 1rpx #9e9ea0;
      .coupon-scope {
        margin: 0 8rpx;
      }
    }
    .coupon-time {
      font-size: 20rpx;
      font-family: 'PingFang SC';
      line-height: 28rpx;
      color: #6d6d6d;
    }
  }
  .font-base {
    font-size: 32rpx;
    font-family: 'PingFang SC';
    line-height: 32rpx;
  }
  .coupon-btn {
    padding: 8rpx 20rpx;
    background-color: #ff4d1d;
    border-radius: 24rpx;

    color: #ffffff;
    font-size: 24rpx;
    font-family: PingFangSC;
    font-weight: 500;
    line-height: 34rpx;
  }
</style>
