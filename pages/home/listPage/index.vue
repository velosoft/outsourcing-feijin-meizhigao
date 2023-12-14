<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title"></nav-bar>
    <view class="flex-col justify-start carousel">
      <view class="flex-col justify-start items-center banner-image-wrapper">
        <image
          class="banner-image"
          src="/static/mock/list-page-banner.png"
          mode="aspectFill"
        />
      </view>
    </view>
    <view class="flex-col">
      <fj-sticky :customNavHeight="80">
        <u-tabs
          class="border-tabs"
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
          itemStyle="padding-left: 30rpx; padding-right: 30rpx; height:72rpx"
          :scrollable="true"
          :list="tabs"
          @click="onTabClick"
        ></u-tabs>
      </fj-sticky>
      <list-container
        :showEmpty="!list.length"
        :showLoading="showLoading"
        :finished="finished"
      >
        <view>
          <double-list :items="list"></double-list>
        </view>
      </list-container>
    </view>
  </view>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import FjSticky from "@/components/FjSticky.vue";
import ListContainer from "@/components/ListContainer/ListContainer.vue";
import DoubleList from "../components/DoubleList.vue";

import { serviceList, courseList } from "@/mock/shopList";

export default {
  components: {
    NavBar,
    FjSticky,
    ListContainer,
    DoubleList,
  },
  props: {},
  data() {
    return {
      title: "",
      status: "loadmore",
      page: 1,
      list: [],
      showLoading: true,
      finished: false,
      tabs: [],
    };
  },
  onLoad: function (option) {
    this.title = option.title;
    if (this.title == "课程中心") {
      this.tabs = [
        {
          name: "全部",
        },
        {
          name: "体验课程",
        },
        {
          name: "职业课程",
        },
        {
          name: "创业课程",
        },
      ];
      this.list = courseList;
    } else if (this.title == "服务中心") {
      this.tabs = [
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
      ];
      this.list = serviceList;
    }
  },
  onReachBottom() {
    if (this.page >= 2) {
      this.finished = true;
      return;
    }
    this.finished = false;

    setTimeout(() => {
      this.list = this.list.concat(this.list);
      this.page++;
    }, 1500);
  },

  methods: {
    onTabClick(val) {},
  },
};
</script>

<style scoped lang="less">
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

.border-tabs {
  /deep/ .u-tabs {
    background-color: #ffffff;
  }
  /deep/ .u-tabs__wrapper__nav__item {
    height: 80rpx !important;
  }
}

.left-list {
  flex: 1 1 330rpx;
}

.right-list {
  flex: 1 1 330rpx;
}
</style>
