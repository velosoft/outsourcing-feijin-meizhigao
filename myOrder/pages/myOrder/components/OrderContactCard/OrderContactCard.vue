<template>
  <view class="flex-col justify-center relative wrap">
    <view class="flex-row justify-center" @click="gotoAddrs">
      <view class="flex-row justify-center flex-1">
        <view class="flex-col justify-center items-center self-start image-wrapper">
          <image class="loc-icon" src="/myOrder/static/images/icon_addr.png" />
        </view>
        <view class="flex-col items-start flex-1 arrow-wrap">
          <view class="flex-row">
            <text class="font-big">李冰冰</text>
            <text class="font-big ml-8">15212345678</text>
          </view>
          <text class="line-clamp-one text-addr mt-8">广东省广州市天河区车陂南东宏国际广场12楼06号</text>
        </view>
      </view>
      <view class="flex-col justify-center arrow-wrap" v-if="canShowArrow">
        <image class="image_8" src="/myOrder/static/images/icon_arrow_right.png" />
      </view>
    </view>
    <view class="flex-col justify-start line-wrapper pos" v-if="canShowLine">
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
    .image-wrapper {
      width: 44rpx;
      height: 44rpx;
      .loc-icon {
        width: 34rpx;
        height: 36rpx;
      }
    }
    .arrow-wrap {
      margin-left: 24rpx;
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
      }
      .image_8 {
        width: 12rpx;
        height: 24rpx;
      }
    }
    .line-wrapper {
      height: 4rpx;
      .line {
        width: 100%;
        height: 100%;
      }
    }
    .pos {
      position: absolute;
      left: 12rpx;
      right: 12rpx;
      bottom: 0rpx;
    }
  }
</style>
