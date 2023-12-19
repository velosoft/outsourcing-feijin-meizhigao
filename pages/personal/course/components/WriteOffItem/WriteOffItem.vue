<template>
  <view class="flex-col container">
    <view class="flex-row justify-between items-center">
      <text class="light-font course-num">课程单号：2023060801256768</text>
      <view class="flex-row ml-6 items-center">
        <view class="status-dot"></view>
        <text class="main-font ml-4">待核销</text>
      </view>
    </view>
    <view class="flex-col mt-32"><CourseItem v-for="(item, index) in items" :key="index"></CourseItem></view>
  </view>
</template>

<script>
  import CourseItem from '../../../../../pages/personal/course/components/CourseItem/CourseItem.vue';

  export default {
    components: { CourseItem },
    props: {},
    data() {
      return {
        items: [null, null],
      };
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
      color: #000000;
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
      color: #b09053;
      font-size: 30rpx;
      font-family: 苹方;
      font-weight: 700;
      line-height: 30rpx;
    }
  }
</style>