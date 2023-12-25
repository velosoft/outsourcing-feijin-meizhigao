<template>
  <view class="flex-col justify-start relative">
    <image class="image pos" src="/personal/static/images/bg_coupon_expried.png" />
    <view class="flex-row items-center relative">
      <view class="flex-col coupon-left items-center">
        <view class="flex-row items-baseline price-wrap">
          <text class="price-num">{{ item.amount }}</text>
          <text class="currency ml-4">元</text>
        </view>
        <text class="price-label mt-8">{{ '满' + item.triggerCondition + '元使用' }}</text>
      </view>
      <view class="line"></view>
      <view class="flex-col flex-1 coupon-right">
        <view class="flex-col self-stretch">
          <text class="line-clamp-one currency title">{{ item.title }}</text>
          <view class="flex-row justify-between items-center self-stretch mt-8">
            <view class="flex-col justify-start text-wrapper items-center">
              <text class="time coupon-scope">{{ item.applicableTo }}</text>
            </view>
            <text class="price-label">已过期</text>
          </view>
        </view>
        <text class="self-start time time-text mt-16">{{ item.validity.start + '-' + item.validity.end }}</text>
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
          status: 'expired',
          amount: 9,
          triggerCondition: 95,
          title: '过期满减券E',
          validity: { start: '2023.05.25', end: '2023.06.10' },
          applicableTo: '适用全部',
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
  .image {
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
  .coupon-left {
    padding: 32rpx 36rpx 48rpx;
    width: 256rpx;
    .price-wrap {
      padding-left: 4rpx;
      .price-num {
        color: #4c4c4c;
        font-size: 76rpx;
        font-family: '.AppleSystemUIFont';
        line-height: 90rpx;
      }
    }
  }
  .line {
    background-image: repeating-linear-gradient(0deg, #cccccc, #cccccc 3.4%, transparent 3.4%, transparent 6.8%);
    width: 2rpx;
    height: 176rpx;
  }
  .coupon-right {
    padding: 0 32rpx;
    .title {
      font-weight: 500;
      width: 380rpx;
    }
    .text-wrapper {
      padding: 0 4rpx;
      border-radius: 8rpx;
      height: 32rpx;
      border: solid 1rpx #b6b6b6;
      .coupon-scope {
        margin: 0 8rpx;
        color: #b6b6b6;
      }
    }
    .time {
      font-size: 20rpx;
      font-family: 'PingFang SC';
      line-height: 28rpx;
    }
    .time-text {
      color: #cccccc;
    }
  }
  .currency {
    font-size: 32rpx;
    font-family: 'PingFang SC';
    line-height: 44rpx;
    color: #4c4c4c;
  }
  .price-label {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    color: #4c4c4c;
  }
</style>
