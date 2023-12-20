<template>
  <view class="height-full flex-col relative page">
    <view class="bg-header bg-header-pos"></view>
    <NavBar class="header" :title="title" :fixed="true" :isShow="true" background="transparent" titleColor="#ffffff">
      <image class="nav-left-icon" src="/static/images/icon_nav_left_arrow.png" slot="left" />
    </NavBar>
    <view class="flex-col relative container">
      <HeaderCard></HeaderCard>
      <PromotionDetial class="mt-8 flex-1"></PromotionDetial>
    </view>
  </view>
  </template>
  
  <script>
  import HeaderCard from '../../../../pages/personal/reseller/components/HeaderCard/HeaderCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PromotionDetial from '../../../../pages/personal/reseller/components/PromotionDetial/PromotionDetial.vue';
  
  export default {
    components: { HeaderCard, NavBar, PromotionDetial },
    props: {},
    data() {
      return {
        title: '查看收益',
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
      background-image: linear-gradient(179.1deg, #b09053 1.1%, #b09053c7 49.8%, #f8f8f8 89.8%, #f8f8f8 99.7%);
      height: 544rpx;
    }
    .bg-header-pos {
      position: absolute;
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
      padding: 40rpx 24rpx;
    }
  }
  </style>