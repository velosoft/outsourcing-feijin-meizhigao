<template>
  <view class="flex-col justify-center relative wrap">
    <view class="flex-row justify-between items-center" @click="gotoAddrs">
      <view class="flex-row items-center">
        <image class="icon-addr" src="/myOrder/static/images/icon_addr.png" />
        <view class="flex-row ml-12">
          <text class="font-big">李冰冰</text>
          <text class="font-big ml-8">15212345678</text>
        </view>
      </view>
      <image class="icon-arrow" src="/myOrder/static/images/icon_arrow_right.png" v-if="canShowArrow" />
    </view>
    <text class="line-clamp-one text-addr mt-10">广东省广州市天河区车陂南东宏国际广场12楼06号</text>
    <view class="line-wrapper" v-if="canShowLine">
      <image class="line" src="/myOrder/static/images/icon_addr_line2.png" />
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    options: {
      styleIsolation: 'shared',
    },
    props: {
      canShowLine: { type: Boolean, default: true },
      canShowArrow: { type: Boolean, default: true },
      contactData: { type: Object, default: () => ({}) },
    },
    data() {
      return {};
    },

    methods: {
      gotoAddrs() {
        if (this.canShowArrow) {
          uni.navigateTo({ url: '/personal/pages/personal/address/address/address' });
        }
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 24rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 0rpx 8rpx 0rpx #b1b1b129;
    border-radius: 16rpx;

    .icon-addr {
      width: 34rpx;
      height: 36rpx;
    }
    .icon-arrow {
      width: 12rpx;
      height: 24rpx;
    }

    .font-big {
      font-size: 32rpx;
      line-height: 44rpx;
      font-weight: 500;
      color: #111111;
    }
    .text-addr {
      color: #9e9ea0;
      font-size: 26rpx;
      line-height: 36rpx;
      margin-left: 58rpx;
    }

    .line-wrapper {
      height: 4rpx;
      position: absolute;
      left: 12rpx;
      right: 12rpx;
      bottom: 0rpx;

      .line {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
