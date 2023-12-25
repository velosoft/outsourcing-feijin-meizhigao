<template>
  <view class="flex-col container">
    <view class="flex-row justify-between items-center group">
      <text class="light-font course-num">课程单号：2023060801256768</text>
      <view class="flex-row items-end items-center">
        <view class="status-dot"></view>
        <text class="main-font status-text ml-4">待付款</text>
      </view>
    </view>
    <view class="flex-col con">
      <CourseItem></CourseItem>
      <view class="flex-row justify-between mt-12 items-center">
        <text class="light-font count-dwon">支付倒计时：59分钟</text>
        <view class="flex-row">
          <u-button text="取消订单" size="small" :plain="true" @click="onClick"></u-button>
          <u-button class="cf-btn-black ml-8" text="去付款" type="primary" size="small" :plain="false"></u-button>
        </view>
      </view>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="10" :closeable="true" :safeAreaInsetBottom="false">
      <PopOrderCancel title="请选择退款原因" @click="onClose"></PopOrderCancel>
    </u-popup>
  </view>
</template>

<script>
  import CourseItem from '../../components/CourseItem/CourseItem.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';

  export default {
    components: { CourseItem, PopOrderCancel },
    props: { coursesItem: { type: Object, default: () => ({}) } },
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
    background-color: #ffffff;
    border-radius: 16rpx;
    .group {
      padding: 28rpx 24rpx;
      border-bottom: solid 1rpx #f2f2f2;
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
    }
    .con {
      padding: 24rpx;
      .count-dwon {
        color: #b09053;
      }
    }
    .light-font {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
    }
  }
</style>
