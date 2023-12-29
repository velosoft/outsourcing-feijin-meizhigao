<template>
  <view class="flex-col relative page">
    <image class="bg-header bg-pos" src="/personal/static/images/mock_bonus_coin_bg_header.png" />
    <nav-bar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      :background="navBarColor"
      titleColor="#111111"
    ></nav-bar>
    <view class="flex-col relative">
      <view class="flex-col section"><bonus-banner class="bonus-banner-margin"></bonus-banner></view>
      <view class="flex-col justify-start">
        <bonus-list :list="list" :tabList="tabs"></bonus-list>
      </view>
    </view>
  </view>
</template>

<script>
  import BonusList from '@/personal/pages/personal/components/BonusList/BonusList.vue';
  import BonusBanner from '@/personal/pages/personal/components/BonusBanner/BonusBanner.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import { rewardBonusCoins, expenseBonusCoins } from '@/mock/personal/bonus.js';

  export default {
    components: { BonusList, BonusBanner, NavBar },
    props: {},
    data() {
      return {
        list: expenseBonusCoins.concat(rewardBonusCoins),
        tabs: [
          {
            name: '收纳币明细',
          },
        ],
        title: '我的收纳币',
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

    .section {
      padding: 104rpx 0 64rpx;
      overflow: hidden;
      .bonus-banner-margin {
        margin: 0 24rpx;
      }
    }
  }
</style>
