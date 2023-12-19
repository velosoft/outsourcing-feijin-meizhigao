<template>
  <view class="flex-col relative page">
    <image
      class="bg-header bg-pos"
      src="/static/images/mock_bonus_point_bg.png"
    />
    <nav-bar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff00"
    ></nav-bar>
    <view class="flex-col relative flex-1">
      <view class="flex-col section"><bonus-banner></bonus-banner></view>
      <sign-card class="sign-card-top"></sign-card>
      <view class="flex-col justify-start list-wrapper flex-1">
        <bonus-list class="flex-1" :list="list"></bonus-list>
      </view>
    </view>
  </view>
</template>

<script>
import BonusList from "@/pages/personal/components/BonusList/BonusList.vue";
import BonusBanner from "@/pages/personal/components/BonusBanner/BonusBanner.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import SignCard from "@/pages/personal/bonusPoint/components/SignCard/SignCard.vue";
import {
  rewardBonusPoints,
  expenseBonusPoints,
} from "@/mock/personal/bonus.js";

export default {
  components: { BonusList, BonusBanner, NavBar, SignCard },
  props: {},
  data() {
    return {
      title: "我的积分",
      list: rewardBonusPoints.concat(expenseBonusPoints),
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
    padding: 104rpx 32rpx 168rpx;
  }
  .sign-card-top {
    position: relative;
    margin: -104rpx 32rpx 0;
  }
  .list-wrapper {
    margin-top: 20rpx;
    /deep/ .scroll-height {
      height: calc(100vh - 936rpx - env(safe-area-inset-bottom)) !important;
    }
  }
}
</style>
