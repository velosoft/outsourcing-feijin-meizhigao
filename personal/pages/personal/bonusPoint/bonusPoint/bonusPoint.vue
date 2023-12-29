<template>
  <view class="flex-col relative page">
    <image class="bg-header bg-pos" src="/personal/static/images/mock_bonus_point_bg.png" />
    <nav-bar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      :background="navBarColor"
      titleColor="#111111"
    ></nav-bar>
    <view class="flex-col relative flex-1">
      <view class="flex-col section"><bonus-banner></bonus-banner></view>
      <daily-checkin-panel class="sign-card-top"></daily-checkin-panel>
      <view class="flex-col justify-start list-wrapper flex-1">
        <bonus-list class="flex-1" :list="list"></bonus-list>
      </view>
    </view>
  </view>
</template>

<script>
  import BonusList from '@/personal/pages/personal/components/BonusList/BonusList.vue';
  import BonusBanner from '@/personal/pages/personal/components/BonusBanner/BonusBanner.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import DailyCheckinPanel from '@/personal/pages/personal/bonusPoint/components/DailyCheckinPanel/DailyCheckinPanel.vue';
  import { rewardBonusPoints, expenseBonusPoints } from '@/mock/personal/bonus.js';

  export default {
    components: { BonusList, BonusBanner, NavBar, DailyCheckinPanel },
    props: {},
    data() {
      return {
        title: '我的积分',
        list: rewardBonusPoints.concat(expenseBonusPoints),
        isShowNavbar: false,
        navBarColor: 'transparent',
      };
    },
    onPageScroll(e) {
      // 页面滚动时执行
      if (e.scrollTop > 30) {
        if (!this.isShowNavbar) {
          this.isShowNavbar = true;
          this.navBarColor = '#ffffff';
        }
      } else {
        if (this.isShowNavbar) {
          this.isShowNavbar = false;
          this.navBarColor = 'transparent';
        }
      }
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
      padding: 104rpx 32rpx 168rpx;
    }
    .sign-card-top {
      position: relative;
      margin: -60rpx 32rpx 0;
    }
    .list-wrapper {
      margin-top: 20rpx;
      /deep/ .scroll-height {
        height: calc(100vh - 980rpx - env(safe-area-inset-bottom)) !important;
      }
    }
  }
</style>
