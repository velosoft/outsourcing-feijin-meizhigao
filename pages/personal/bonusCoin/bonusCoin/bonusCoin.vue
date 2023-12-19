<template>
  <view class="flex-col relative page">
    <image
      class="bg-header bg-pos"
      src="/static/images/mock_bonus_coin_bg_header.png"
    />
    <nav-bar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff00"
    ></nav-bar>
    <view class="flex-col relative">
      <view class="flex-col section"
        ><bonus-banner class="num-pannel-margin"></bonus-banner
      ></view>
      <view class="flex-col justify-start">
        <bonus-list
          :rewardBonusCoins="rewardBonusCoinsResData"
          :tabList="tablist"
        ></bonus-list>
      </view>
    </view>
  </view>
</template>

<script>
import BonusList from "@/pages/personal/components/BonusList/BonusList.vue";
import BonusBanner from "@/pages/personal/components/BonusBanner/BonusBanner.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import { rewardBonusCoinsResData } from "./bonusCoin.data.js";

export default {
  components: { BonusList, BonusBanner, NavBar },
  props: {},
  data() {
    return {
      rewardBonusCoins: "",
      tablist: [
        {
          name: "收纳币明细",
        },
      ],
      title: "我的收纳币",
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

  .section {
    padding: 104rpx 0 64rpx;
    overflow: hidden;
    .num-pannel-margin {
      margin: 0 24rpx;
    }
  }
}
</style>
