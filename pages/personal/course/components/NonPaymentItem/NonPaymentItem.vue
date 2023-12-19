<template>
  <view class="flex-col container">
    <view class="flex-row justify-between items-center">
      <text class="light-font course-num">课程单号：2023060801256768</text>
      <view class="flex-row items-end items-center">
        <view class="status-dot"></view>
        <text class="main-font status-text ml-4">待付款</text>
      </view>
    </view>
    <view class="flex-col mt-32">
      <CourseItem></CourseItem>
      <view class="flex-row justify-between mt-12 items-center">
        <text class="light-font count-dwon">支付倒计时：59分钟</text>
        <view class="flex-row">
          <u-button text="取消订单" @click="onClick"></u-button>
          <u-button class="ml-8" text="去付款"></u-button>
        </view>
      </view>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="10" :closeable="true">
      <PopRefundReason></PopRefundReason>
    </u-popup>
  </view>
</template>

<script>
  import CourseItem from '../../../../../pages/personal/course/components/CourseItem/CourseItem.vue';
  import PopRefundReason from '../../../../../pages/personal/course/components/PopRefundReason/PopRefundReason.vue';

  export default {
    components: { CourseItem, PopRefundReason },
    props: {},
    data() {
      return {
        popupVisible: false,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .container {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .light-font {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
    }
    .course-num {
      color: #6d6d6d;
    }
    .status-dot {
      background-color: #b09053;
      border-radius: 50%;
      width: 12rpx;
      height: 12rpx;
    }
    .main-font {
      font-size: 30rpx;
      font-family: 苹方;
      line-height: 30rpx;
      font-weight: 700;
    }
    .status-text {
      color: #b09053;
    }
    .count-dwon {
      color: #b09053;
    }
  }
</style>