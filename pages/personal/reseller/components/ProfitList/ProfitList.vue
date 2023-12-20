<template>
  <view class="flex-col">
    <view class="flex-row justify-between items-center list-item mt-20" v-for="(item, index) in profitList" :key="index">
      <view class="flex-row">
        <image class="avatar" :src="item.avatar" />
        <view class="flex-col ml-8">
          <text class="nick-name">{{item.nickname}}</text>
          <text class="time mt-8">{{item.time}}</text>
        </view>
      </view>
      <view class="flex-col items-center">
        <text class="price">{{item.price}}</text>
        <text class="price-label mt-12">累计收益</text>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {
      profitList: {
        type: Object,
        default: () => [
          {
            avatar: '/static/images/mock_avatar_05.png',
            nickname: '今天喝生椰拿铁',
            time: '2022-04-01 09:30:22',
            price: '1800',
          },
        ],
      },
    },
    data() {
      return {};
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .list-item {
    &:first-child {
      margin-top: 0;
    }
    .avatar {
      width: 87.61rpx;
      height: 87.61rpx;
    }
    .nick-name {
      font-size: 27.78rpx;
      font-family: 苹方;
      line-height: 27.78rpx;
      color: #2d2e32;
    }
    .time {
      font-size: 23.5rpx;
      font-family: 苹方;
      line-height: 23.5rpx;
      color: #8c8f95;
    }
    .price {
      font-size: 34.19rpx;
      font-family: 苹方;
      line-height: 34.19rpx;
      font-weight: 700;
      color: #b09053;
    }
    .price-label {
      font-size: 23.5rpx;
      font-family: 苹方;
      line-height: 23.5rpx;
      color: #707070;
    }
  }
  </style>