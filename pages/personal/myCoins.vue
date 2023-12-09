<template>
  <view class="flex-col relative page">
    <image
      class="ai-background-image-wrapper pos_1"
      src="https://dev.ft.velosoft.cn/api/image?token=6573e33f740f740012ac1f41&name=f0d6e867f333df3783680faf6fe2812f.png"
    />
    <NavBar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#00000000"
    ></NavBar>
    <view class="flex-col flex-1 relative group_12">
      <view class="flex-col group_1">
        <view class="flex-col self-stretch">
          <view class="flex-row items-center self-stretch">
            <text class="font">当前可用收纳币</text>
            <image
              class="image_7 ml-4"
              src="https://dev.ft.velosoft.cn/api/image?token=6573e33f740f740012ac1f41&name=a7342435ee40d2dfad3e60850fa37a51.png"
            />
          </view>
          <text class="self-start text_4 mt-8">15,8900</text>
        </view>
        <view class="flex-row items-center equal-division mt-32">
          <view class="flex-col justify-center items-center group_9">
            <text class="self-start font_2">累计获得收纳币</text>
            <text class="self-center font_5 mt-8">10000</text>
          </view>
          <view
            class="flex-col justify-center items-center equal-division-item_2"
          >
            <text class="font_2">冻结收纳币</text>
            <text class="font_5 mt-8">4000</text>
          </view>
        </view>
      </view>
      <view class="flex-col section_3 mt-32">
        <v-tabs
          v-model="activeTab"
          v-bind:tabs="tabs"
          lineHeight="6rpx"
          v-bind:lineScale="0.2"
          lineColor="#b1a76e"
          padding="0 22rpx"
          bgColor="#fff"
        ></v-tabs>
        <view class="flex-col">
          <list-container
            :showEmpty="showEmpty"
            :showLoading="showLoading"
            :finished="finished"
            v-if="coin_list.length"
          >
            <MyCoinsListItem
              class="list-item"
              :type="activeTab"
            ></MyCoinsListItem>
          </list-container>
          <MyCoinsListEmpty v-if="!coin_list.length"></MyCoinsListEmpty>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ListContainer from "../../components/ListContainer/ListContainer.vue";
import myCoinsListEmpty from "./myCoinsListEmpty.vue";
import myCoinsListItem from "./myCoinsListItem.vue";
import NavBar from "../../components/NavBar/NavBar.vue";
import vTabs from "../../components/v-tabs/v-tabs.vue";

export default {
  components: { myCoinsListEmpty, myCoinsListItem, NavBar, vTabs },
  props: {},
  data() {
    return {
      activeTab: "",
      tabs: ["收入明细", "支出明细", "日期筛选"],
      coin_list: [],
      title: "我的收纳币",
      showEmpty: true,
      showLoading: "false",
      finished: "false",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .ai-background-image-wrapper {
    width: 100vw;
    height: 93.0667vw;
  }
  .pos_1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .header {
    position: relative;
  }
  .group_12 {
    overflow-y: auto;
    .group_1 {
      padding: 104rpx 32rpx 0;
      .font {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #111111;
      }
      .image_7 {
        width: 32rpx;
        height: 32rpx;
      }
      .text_4 {
        color: #111111;
        font-size: 72rpx;
        font-family: HarmonyOSSans;
        font-weight: 700;
        line-height: 72rpx;
      }
      .equal-division {
        align-self: flex-start;
        .group_9 {
          width: 183.84rpx;
        }
        .equal-division-item_2 {
          padding-left: 80rpx;
        }
        .font_2 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
          color: #6d6d6d;
        }
        .font_5 {
          font-size: 28rpx;
          font-family: HarmonyOSSans;
          line-height: 28rpx;
          font-weight: 700;
          color: #111111;
        }
      }
    }
    .section_3 {
      padding: 40rpx 0 1256rpx;
      background-color: #ffffff;
      .list-item {
        margin: 0 32rpx;
      }
    }
  }
}
</style>
