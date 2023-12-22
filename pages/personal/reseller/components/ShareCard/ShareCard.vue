<template>
  <view class="flex-col justify-start relative wrap">
    <image class="bg-share bg-pos" src="/static/images/bg_share_card.png" />
    <view class="flex-col relative container">
      <view class="flex-row justify-between items-center self-stretch">
        <view class="flex-col items-start" @click="onClick">
          <text class="label-text">累计获得收益(收纳币)</text>
          <text class="label-num mt-4">{{ numShare.totalIncome }}</text>
        </view>
        <view class="flex-row button items-center" @click="onClick_1">
          <image class="shrink-0 self-center icon-share" src="/static/images/icon_share_card.png" />
          <text class="font share-text ml-4">分享</text>
        </view>
      </view>
      <view class="flex-row mt-32">
        <view class="flex-col items-start">
          <text class="font num-label">推广总人数</text>
          <text class="num mt-4">{{ numShare.promotionNum }}</text>
        </view>
        <view class="flex-col ml-40">
          <text class="font num-label">分销订单数</text>
          <text class="num mt-4">{{ numShare.resellOrderNum }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      numShare: { type: Object, default: () => ({ totalIncome: 2689, promotionNum: 150, resellOrderNum: 500 }) },
    },
    data() {
      return {};
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/reseller/profit/profit' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/reseller/share/share' });
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 36rpx 0;
    background-image: linear-gradient(90deg, #ffffff 0.8%, #f0ede7 100%);
    border-radius: 16rpx;
    height: 310rpx;
    .bg-share {
      width: 702rpx;
      height: 310rpx;
    }
    .bg-pos {
      position: absolute;
      left: -2rpx;
      right: -2rpx;
      top: 0;
      bottom: -2rpx;
    }
    .container {
      margin-left: 32rpx;
      .label-text {
        color: #707070;
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
      }
      .label-num {
        color: #2d2e32;
        font-size: 60rpx;
        font-family: HarmonyOS Sans TC;
        font-weight: 700;
        line-height: 60rpx;
      }
      .button {
        padding: 0 14rpx 0 20rpx;
        background-color: #b09053;
        border-radius: 32rpx 0rpx 0rpx 32rpx;
        height: 58rpx;
        .icon-share {
          width: 28rpx;
          height: 28rpx;
        }
        .share-text {
          color: #ffffff;
        }
      }
      .font {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
      }
      .num-label {
        color: #707070;
      }
      .num {
        font-size: 40rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 40rpx;
        font-weight: 700;
        color: #2d2e32;
      }
    }
  }
</style>
