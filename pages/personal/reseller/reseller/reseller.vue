<template>
  <view class="flex-col relative page height-full">
    <image class="bg-header pos" src="/static/images/bg_bonus-point.png" />
    <NavBar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="transparnt"
      titleColor="#ffffff"
    >
      <image class="nav-left-icon" src="/static/images/icon_nav_left_arrow.png" slot="left" />
    </NavBar>
    <view class="flex-col flex-1 relative container">
      <view class="flex-row items-center">
        <image class="avatar" :src="avatar" />
        <text class="name-font name-text ml-4">{{nickname}}</text>
      </view>
      <ShareCard class="share-top" :numShare="numShare"></ShareCard>
      <ResellerPromotionDetial class="detial-top" :resellerList="profitListResData"></ResellerPromotionDetial>
    </view>
  </view>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import ResellerPromotionDetial from '../../../../pages/personal/reseller/components/ResellerPromotionDetial/ResellerPromotionDetial.vue';
  import ShareCard from '@/pages/personal/reseller/components/ShareCard/ShareCard.vue';
  import { profitListResData } from './reseller.data.js';
  
  export default {
    components: { NavBar, ResellerPromotionDetial, ShareCard },
    props: {},
    data() {
      return {
        avatar: '/static/images/mock_avatar_07.png',
        nickname: '今天喝生椰拿铁',
        numShare: {
          totalIncome: 2689,
          promotionNum: 150,
          distributionNum: 500,
        },
        title: '分销中心',
        profitListResData: profitListResData,
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    .bg-header {
      width: 100vw;
      height: 104.8vw;
    }
    .pos {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
    }
    .header {
      position: relative;
      .nav-left-icon {
        width: 16rpx;
        height: 30rpx;
      }
    }
    .container {
      padding: 24rpx 24rpx 40rpx;
      .avatar {
        box-shadow: 0rpx 6rpx 12rpx #00000030;
        border-radius: 50%;
        width: 68rpx;
        height: 68rpx;
      }
      .name-font {
        font-size: 26rpx;
        font-family: 苹方;
        line-height: 26rpx;
        color: #2d2e32;
      }
      .name-text {
        margin-top: 8rpx;
        color: #ffffff;
        font-size: 28rpx;
        line-height: 28rpx;
      }
      .share-top {
        position: relative;
        margin-top: 32rpx;
      }
      .detial-top {
        margin-top: 16rpx;
      }
    }
  }
  </style>