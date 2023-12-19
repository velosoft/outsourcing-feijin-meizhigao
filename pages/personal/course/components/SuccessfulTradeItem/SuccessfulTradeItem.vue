<template>
  <view class="flex-col container">
    <view class="flex-row justify-between items-center">
      <text class="light-font course-num">订单号：2023060801256768</text>
      <view class="flex-row items-end items-center">
        <view class="shrink-0 status-dot"></view>
        <text class="mian-font status-text ml-4">交易完成</text>
      </view>
    </view>
    <view class="flex-col mt-32">
      <CourseItem class="group"></CourseItem>
      <u-button class="button mt-12" text="申请开票"></u-button>
    </view>
  </view>
</template>

<script>
  import CourseItem from '../../../../../pages/personal/course/components/CourseItem/CourseItem.vue';

  export default {
    components: { CourseItem },
    props: {},
    data() {
      return {};
    },

    methods: {},
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
    .mian-font {
      font-size: 30rpx;
      font-family: 苹方;
      line-height: 30rpx;
      font-weight: 700;
    }
    .status-text {
      color: #b09053;
    }
    .group {
      align-self: stretch;
    }
    .button {
      align-self: flex-end;
    }
  }
</style>