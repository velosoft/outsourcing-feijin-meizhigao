<template>
  <view class="flex-col relative page height-full">
    <image class="bg-header pos" src="/personal/static/images/bg_bonus-point.png" />
    <nav-bar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="transparnt"
      titleColor="#ffffff"
    >
      <image class="nav-left-icon" src="/personal/static/images/icon_nav_left_arrow.png" slot="left" />
    </nav-bar>
    <view class="flex-col flex-1 relative container">
      <view class="flex-row items-center">
        <image class="avatar" :src="avatar" />
        <text class="name-font name-text ml-4">{{ nickname }}</text>
      </view>
      <share-card class="share-top" :numShare="numShare"></share-card>
      <reseller-promotion-detial class="detail-wrapper" :resellerList="profitListResData"></reseller-promotion-detial>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import ResellerPromotionDetial from '@/personal/pages/personal/reseller/components/ResellerPromotionDetial/ResellerPromotionDetial.vue';
  import ShareCard from '@/personal/pages/personal/reseller/components/ShareCard/ShareCard.vue';
  import { profitListResData } from './reseller.data.js';

  export default {
    components: { NavBar, ResellerPromotionDetial, ShareCard },
    props: {},
    data() {
      return {
        avatar: '/personal/static/images/mock_avatar_07.png',
        nickname: '今天喝生椰拿铁',
        numShare: {
          totalIncome: 2689,
          promotionNum: 150,
          resellOrderNum: 500,
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
      .detail-wrapper {
        margin-top: 16rpx;
        /deep/ .scroll-height {
          height: calc(100vh - 746rpx - env(safe-area-inset-bottom));
        }
      }
    }
  }
</style>
