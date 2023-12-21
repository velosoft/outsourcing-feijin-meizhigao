<template>
    <view class="flex-row justify-between items-center">
      <view class="flex-row">
        <image class="avatar" :src="resellerItem.avatar" />
        <view class="flex-col items-start self-start ml-8">
          <text class="title line-clamp-one">{{resellerItem.nickname}}</text>
          <text class="label time mt-8">{{resellerItem.time}}</text>
        </view>
      </view>
      <view class="flex-col items-center">
        <text class="font">{{resellerItem.price}}</text>
        <text class="label label-text mt-12">累计收益</text>
      </view>
    </view>
    </template>
    
    <script>
    export default {
      components: {},
      props: {
        resellerItem: {
          type: Object,
          default: () => ({
            avatar: '/static/images/mock_avatar_05',
            nickname: '今天喝生椰拿铁',
            time: '2022-04-01 09:30:22',
            price: '1800',
          }),
        },
      },
      data() {
        return {};
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .avatar {
      width: 82rpx;
      height: 82rpx;
    }
    .title {
      color: #2d2e32;
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 26rpx;
      width: 350rpx;
    }
    .label {
      font-size: 22rpx;
      font-family: 苹方;
      line-height: 22rpx;
    }
    .time {
      color: #8c8f95;
    }
    .font {
      color: #b09053;
      font-size: 32rpx;
      font-family: 苹方;
      font-weight: 700;
      line-height: 32rpx;
    }
    .label-text {
      color: #707070;
    }
    </style>