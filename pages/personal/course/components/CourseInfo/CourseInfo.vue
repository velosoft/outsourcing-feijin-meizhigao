<template>
  <view class="flex-col container">
    <text class="self-start title title-font">课程信息</text>
    <view class="flex-col justify-start self-stretch mt-20">
      <CourseItem v-for="(item, index) in items" :key="index"></CourseItem>
    </view>
  </view>
</template>

<script>
  import CourseItem from '../../../../../pages/personal/course/components/CourseItem/CourseItem.vue';

  export default {
    components: { CourseItem },
    props: {},
    data() {
      return {
        items: [null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .container {
    padding: 32rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .title {
      font-size: 30rpx;
      font-family: 苹方;
      line-height: 30rpx;
      font-weight: 700;
    }
    .title-font {
      color: #030305;
    }
  }
</style>