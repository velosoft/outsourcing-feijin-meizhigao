<template>
  <view class="flex-col relative page">
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
    <view class="flex-col relative container">
      <view class="flex-row items-center">
        <image class="avatar" :src="avatar" />
        <text class="name-font name-text ml-4">{{nickname}}</text>
      </view>
      <ShareCard class="ai-background-image-wrapper_2"></ShareCard>
      <PromotionDetial class="ai-background-image_2"></PromotionDetial>
    </view>
  </view>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PromotionDetial from '../../../../pages/personal/reseller/components/PromotionDetial/PromotionDetial.vue';
  import ShareCard from '../../../../pages/personal/reseller/components/ShareCard/ShareCard.vue';
  
  export default {
    components: { NavBar, PromotionDetial, ShareCard },
    props: {},
    data() {
      return {
        avatar: '/static/images/mock_avatar_07.png',
        nickname: '今天喝生椰拿铁',
        title: '分销中心',
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
      .ai-background-image-wrapper_2 {
        position: relative;
        margin-top: 32rpx;
      }
      .ai-background-image_2 {
        margin-top: 16rpx;
      }
    }
  }
  </style>