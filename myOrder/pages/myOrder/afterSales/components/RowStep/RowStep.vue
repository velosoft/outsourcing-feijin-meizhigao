<template>
  <view class="flex-col wrap">
    <view class="flex-col step-wrap"><CFSteps></CFSteps></view>
    <view class="flex-row justify-between items-center bottom-wrap" @click="onClick" v-if="showCell">
      <text class="cell-title">协商记录</text>
      <image
        class="icon-arrow"
        src="/myOrder/static/images/icon_right_arrow_08.png"
      />
    </view>
  </view>
  </template>
  
  <script>
  import CFSteps from '../../../../../pages/myOrder/afterSales/components/CFSteps/CFSteps.vue';
  
  export default {
    components: { CFSteps },
    props: { showCell: { type: Boolean, default: true } },
    data() {
      return {};
    },
  
    methods: {
      onClick() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/afterSales/recorder/recorder' });
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    background-color: #ffffff;
    border-radius: 16rpx;
    .step-wrap {
      padding: 24rpx 0 40rpx;
    }
    .bottom-wrap {
      padding: 22rpx 16rpx;
      border-top: 2rpx solid #f1f1f1;
      .cell-title {
        color: #111111;
        font-size: 30rpx;
        font-family: 'PingFang SC';
        font-weight: 500;
        line-height: 42rpx;
      }
      .icon-arrow {
        margin-right: 8rpx;
        width: 14rpx;
        height: 26rpx;
      }
    }
  }
  </style>