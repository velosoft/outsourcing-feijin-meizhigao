<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title"></NavBar>
    <view class="flex-col flex-1 content">
      <view class="flex-col justify-start carousel">
        <view class="flex-col justify-start items-center banner-image-wrapper">
          <image class="banner-image" :src="bannerImageUrl" mode="aspectFill" />
        </view>
      </view>
      <view class="flex-col">
        <u-tabs
          lineColor="#b09053"
          lineWidth="52rpx"
          lineHeight="4rpx"
          :activeStyle="{
            color: '#030305',
            fontSize: '24rpx',
            fontFamily: 'PingFang SC',
            lineHeight: '34rpx',
          }"
          :inactiveStyle="{
            fontSize: '24rpx',
            fontFamily: '苹方',
            lineHeight: '34rpx',
            color: '#6c6c6c',
          }"
          itemStyle="padding-left: 0; padding-right: 0; height:72rpx"
          :scrollable="false"
          :list="list"
        ></u-tabs>
        <Tabs
          class=""
          :tabList="tabList"
          :TabCur="tabCur"
          @tabChange="tabChange"
        ></Tabs>
        <ListContainer :showEmpty="showEmpty" :showLoading="showLoading">
          <view>
            <DoublueList class="section_13" :items="itemsProduct"></DoublueList>
          </view>
        </ListContainer>
      </view>
    </view>
  </view>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue";
import Tabs from "../../components/Tabs.vue";
import ListContainer from "../../components/ListContainer/ListContainer.vue";
import DoublueList from "../../components/DoublueList.vue";

import { shopList } from "../../mock/shopList/shopList";

export default {
  components: {
    NavBar,
    Tabs,
    ListContainer,
    DoublueList,
  },
  props: {},
  data() {
    return {
      title: "服务分类",
      bannerImageUrl: "../../static/mock/list-page-banner.png",

      status: "loadmore",
      page: 0,
      list: [
        {
          name: "全部",
        },
        {
          name: "单区收纳",
        },
        {
          name: "全屋收纳",
        },
        {
          name: "卧室收纳",
        },
        {
          name: "衣柜收纳",
        },
      ],
      showEmpty: true,
      showLoading: true,
      tabList: [
        {
          name: "全部",
        },
        {
          name: "单区收纳",
        },
        {
          name: "全屋收纳",
        },
        {
          name: "卧室收纳",
        },
        {
          name: "衣柜收纳",
        },
      ],
      tabCur: 1,
      itemsProduct: shopList,
    };
  },
  onReachBottom() {
    if (this.page >= 3) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.itemsProduct = [...this.items, ...shopList];

      if (this.page >= 3) this.status = "nomore";
      else this.status = "loading";
    }, 1500);
  },

  methods: {
    tabChange(e) {
      this.tabCur = e;
    },
  },
};
</script>

<style scoped lang="css">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow: hidden;
  height: 100vh;
}

.content {
  padding-bottom: 8rpx;
  max-height: calc(100% - 88rpx);
  overflow-y: hidden;
}

.carousel {
  padding-top: 16rpx;
  background-color: #ffffff;
}

.banner-image-wrapper {
  margin: 0 32rpx;
}

.banner-image {
  width: 92vw;
  height: 26vw;
}

.scroll-view {
  height: calc(100vh - 500rpx);
  overflow-y: scroll;
}

.tabs-content {
  padding: 0 32rpx;
}

.left-list {
  flex: 1 1 330rpx;
}

.list-item {
  position: relative;
}

.list-item:first-child {
  margin-top: 0;
}

.load-more-font {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 24rpx;
  color: #a7a7a7;
}

.right-list {
  flex: 1 1 330rpx;
}

.loading-wrapper {
  padding: 40rpx 0;
}

.load-more-text {
  font-size: 26rpx;
  line-height: 26rpx;
}
</style>
