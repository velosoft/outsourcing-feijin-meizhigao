<template>
    <view class="flex-col container">
      <view class="flex-row justify-between items-center header">
        <text class="light-font course-num">订单号：2023060801256768</text>
        <view class="self-end flex-row items-center">
          <view class="status-dot"></view>
          <text class="main-font status-text ml-4">已取消</text>
        </view>
      </view>
      <view class="flex-col con">
        <CourseItem class="group"></CourseItem>
        <u-button
          class="cf-btn-black btn-end mt-12"
          text="删除记录"
          size="small"
          :plain="true"
        ></u-button>
      </view>
    </view>
    </template>
    
    <script>
    import CourseItem from '../../components/CourseItem/CourseItem.vue';
    
    export default {
      components: { CourseItem },
      props: { coursesItem: { type: Object, default: () => ({}) } },
      data() {
        return {};
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .container {
      background-color: #ffffff;
      border-radius: 16rpx;
      .header {
        padding: 28rpx 24rpx;
        border-bottom: solid 1rpx #f2f2f2;
        .light-font {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
        }
        .course-num {
          color: #6d6d6d;
        }
        .status-dot {
          background-color: #9e9ea0;
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
          color: #9e9ea0;
        }
      }
      .con {
        padding: 24rpx;
        .group {
          align-self: stretch;
        }
        .btn-end {
          align-self: flex-end;
        }
      }
    }
    </style>