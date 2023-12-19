<template>
  <view class="flex-row justify-between items-center">
    <view class="flex-row items-center ml-2 ml-4">
      <image class="avatar" :src="personal.avatar" />
      <view class="flex-col ml-12 justify-center">
        <text class="self-start nick-name">{{personal.nickname}}</text>
        <view class="flex-row items-center member-box mt-4 self-end" @click="onClick" v-if="true">
          <image class="icon-member" src="/static/images/icon_member.png" />
          <text class="text-member ml-2">{{personal.memberType}}</text>
        </view>
      </view>
    </view>
    <image class="icon-settings" src="/static/images/icon_settings.png" @click="onClick_1" />
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {
      personal: {
        type: Object,
        default: () => ({ avatar: '/static/images/mock_avatar.png', nickname: '辉煌G891', memberType: '黄金会员' }),
      },
    },
    data() {
      return {};
    },
  
    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/member/index/index' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/profile/index/index' });
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .avatar {
    border-radius: 50%;
    width: 104rpx;
    height: 104rpx;
  }
  .nick-name {
    color: #000000;
    font-size: 32rpx;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 44rpx;
  }
  .member-box {
    background-color: #fff0d4;
    border-radius: 24rpx;
    width: 154rpx;
    .icon-member {
      width: 44rpx;
      height: 44rpx;
    }
    .text-member {
      color: #987a42;
      font-size: 24rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 44rpx;
    }
  }
  .icon-settings {
    margin-right: 28rpx;
    width: 36rpx;
    height: 36rpx;
  }
  </style>