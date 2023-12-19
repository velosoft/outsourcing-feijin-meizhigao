<template>
  <view class="height-full flex-col relative page">
    <image class="bg-header bg-pos" src="/static/images/mock_sign_detial_bg.png" />
    <NavBar class="header" :title="title" :fixed="true" :isShow="true" background="transparnt"></NavBar>
    <view class="flex-col flex-1 relative">
      <view class="flex-col justify-start section">
        <view class="flex-col justify-start items-start title-wrap"><text class="title">连续签到奖励更丰厚</text></view>
      </view>
      <view class="flex-col sign-wrap">
        <view class="self-start">
          <text class="sign-label">已连续签到</text>
          <text class="font sign-num">2</text>
          <text class="sign-label sign-right">天</text>
        </view>
        <view class="self-stretch grid mt-20">
          <view
            class="flex-col items-center grid-item"
            @click="onClick"
            v-for="(item, index) in signStatusResData"
            :key="index"
          >
            <text class="day-num">{{item.signDay}}</text>
            <image class="sign-icon mt-4" :src="item.icon" />
            <text class="value mt-4">{{item.status}}</text>
          </view>
        </view>
      </view>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="center" style="width:309px" :round="10" :safeAreaInsetBottom="false"><SignDialog></SignDialog></u-popup>
  </view>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import SignDialog from '../../../../pages/personal/bonusPoint/components/SignDialog/SignDialog.vue';
  import { signStatusResData } from './signDetial.data.js';
  
  export default {
    components: { NavBar, SignDialog },
    props: {},
    data() {
      return {
        title: '签到详情',
        popupVisible: false,
        signStatusResData: signStatusResData,
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
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .bg-header {
      width: 100vw;
      height: 84vw;
    }
    .bg-pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
    .header {
      position: relative;
    }
    .section {
      padding: 104rpx 32rpx 320rpx;
      .title-wrap {
        margin: 0 16rpx;
        height: 46rpx;
        .title {
          color: #111111;
          font-size: 40rpx;
          font-family: '.AppleSystemUIFont';
          line-height: 46rpx;
        }
      }
    }
    .sign-wrap {
      margin: -200rpx 24rpx 0;
      padding: 32rpx;
      background-color: #ffffff;
      box-shadow: 0rpx 4rpx 8rpx 0rpx #dcdcdc;
      border-radius: 16rpx;
      .sign-label {
        font-size: 30rpx;
        font-family: 'PingFang SC';
        line-height: 42rpx;
        font-weight: 600;
        color: #111111;
      }
      .font {
        font-size: 36rpx;
        font-family: 'PingFang SC';
        line-height: 50rpx;
      }
      .sign-num {
        margin-left: 19.98rpx;
        color: #b09053;
        font-weight: 600;
      }
      .sign-right {
        margin-left: 19.98rpx;
      }
      .grid {
        height: 764rpx;
        display: grid;
        grid-template-rows: repeat(4, minmax(0, 1fr));
        grid-template-columns: repeat(5, minmax(0, 1fr));
        row-gap: 22rpx;
        column-gap: 16.5rpx;
        .grid-item {
          padding: 8rpx 0;
          background-color: #e8e8e8;
          border-radius: 8rpx;
          .day-num {
            font-size: 24rpx;
            font-family: 'PingFang SC';
            line-height: 34rpx;
            font-weight: 500;
            color: #9e9ea0;
          }
          .sign-icon {
            width: 80rpx;
            height: 80rpx;
          }
          .value {
            font-size: 20rpx;
            font-family: 'PingFang SC';
            line-height: 28rpx;
            font-weight: 500;
            color: #9e9ea0;
          }
        }
      }
    }
  }
  </style>