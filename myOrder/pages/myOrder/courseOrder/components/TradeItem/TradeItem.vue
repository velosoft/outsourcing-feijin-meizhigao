<template>
    <view class="flex-col container">
      <view class="flex-row justify-between items-center header">
        <text class="light-font course-num">订单号：2023060801256768</text>
        <view class="flex-row items-end items-center">
          <view class="shrink-0 status-dot"></view>
          <text class="mian-font status-text ml-4">交易完成</text>
        </view>
      </view>
      <view class="flex-col con">
        <CourseItem class="group"></CourseItem>
        <u-button class="cf-btn-black button mt-12" text="申请开票" size="small" :plain="true"></u-button>
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
          font-family: PingFang SC;
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
          font-family: PingFang SC;
          line-height: 30rpx;
          font-weight: 700;
        }
        .status-text {
          color: #b09053;
        }
      }
      .con {
        padding: 24rpx;
        .group {
          align-self: stretch;
        }
        .button {
          align-self: flex-end;
        }
      }
    }
    </style>