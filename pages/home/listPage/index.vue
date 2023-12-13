<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title"></NavBar>
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
      <FjSticky :customNavHeight="80">
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
      </FjSticky>
      <ListContainer :showEmpty="!list.length" :showLoading="showLoading">
        <view>
          <DoubleList class="section_13" :items="list"></DoubleList>
        </view>
      </ListContainer>
    </view>
  </view>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar.vue";
import FjSticky from "../../../components/FjSticky.vue";
import ListContainer from "../../../components/ListContainer/ListContainer.vue";
import DoubleList from "../components/DoubleList.vue";

import { serviceList, courseList } from "../../../mock/shopList/shopList";

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
      page: 0,
      showLoading: false,
      list: [],
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },
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
    if (this.page >= 3) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.list = [...this.this, ...this.list];

      if (this.page >= 3) this.status = "nomore";
      else this.status = "loading";
    }, 1500);
  },

  methods: {
    onTabClick(val) {},
    upper: function (e) {},
    lower: function (e) {},
    scroll: function (e) {
      this.old.scrollTop = e.detail.scrollTop;
    },
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
}

.left-list {
  flex: 1 1 330rpx;
}

.right-list {
  flex: 1 1 330rpx;
}
</style>
