<template>
  <view class="flex-col relative page">
    <image class="bg-header bg-pos" src="/static/images/mock_bonus_coin_bg_header.png" />
    <NavBar class="header" :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff00"></NavBar>
    <view class="flex-col relative">
      <view class="flex-col section"><HeadNumPannel class="num-pannel-margin"></HeadNumPannel></view>
      <view class="flex-col justify-start">
        <BonusDetail :rewardBonusCoins="rewardBonusCoinsResData" :tabList="tablist"></BonusDetail>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  import BonusDetail from '../../../../pages/personal/bonusCoin/components/BonusDetail/BonusDetail.vue';
  import HeadNumPannel from '../../../../pages/personal/components/HeadNumPannel/HeadNumPannel.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import { rewardBonusCoinsResData } from './bonusCoin.data.js';
  
  export default {
    components: { BonusDetail, HeadNumPannel, NavBar },
    props: {},
    data() {
      return {
        rewardBonusCoins: '',
        tablist: [
          {
            name: '收纳币明细',
          },
        ],
        title: '我的收纳币',
        rewardBonusCoinsResData: rewardBonusCoinsResData,
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
      height: 93.0667vw;
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
      padding: 104rpx 0 64rpx;
      overflow: hidden;
      .num-pannel-margin {
        margin: 0 24rpx;
      }
    }
  }
  </style>