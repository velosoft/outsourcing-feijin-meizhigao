<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" fixed="true" isShow="true">
      <template #right>
        <search-bar
          class="search-wrap"
          :showAction="true"
          :value="keywords"
          @custom="onCustom"
          @search="onSearch"
          @focus="onFocus"
        ></search-bar>
      </template>
    </nav-bar>
    <view class="flex-col flex-1">
      <view class="flex-col justify-start history-search" v-if="isSearch">
        <view class="flex-col history-con">
          <view class="flex-row justify-between items-center self-stretch">
            <text class="title">历史搜索</text>
            <image
              class="icon-delete"
              src="/static/images/icon_del_01.png"
              @click="clearHistory"
            />
          </view>
          <toggle-list
            class="equal-division mt-14"
            :tabsArray="tabsArray"
            @onClick="onClick"
            @onClose="onClose"
          />
        </view>
      </view>
      <view class="flex-col" v-else>
        <fj-sticky :customNavHeight="80">
          <tabs
            :tabList="tabList"
            :TabCur="tabCur"
            @tabChange="onTabChange"
          ></tabs>
        </fj-sticky>
        <list-container
          class="list-container-bg"
          :showEmpty="!list.length"
          :showLoading="showLoading"
          :finished="finished"
        >
          <double-list :items="list"></double-list>
        </list-container>
      </view>
    </view>
    <confirm-panel
      :isShow="showDialog"
      :isnormal="false"
      @cancel="onCancel"
      @confirm="onConfirm"
    ></confirm-panel>
  </view>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import Tabs from "@/components/Tabs.vue";
import SearchBar from "@/components/SearchBar.vue";
import ListContainer from "@/components/ListContainer/ListContainer.vue";
import DoubleList from "@/components/DoubleList/DoubleList.vue";
import ConfirmPanel from "@/components/ConfirmPanel.vue";
import ToggleList from "@/components/ToggleList.vue";
import FjSticky from "@/components/FjSticky.vue";
import { serviceList, productList, courseList } from "@/mock/shopList";

export default {
  components: {
    NavBar,
    Tabs,
    SearchBar,
    ListContainer,
    DoubleList,
    ConfirmPanel,
    ToggleList,
    FjSticky,
  },
  props: {},
  data() {
    return {
      isSearch: true,
      keywords: "",
      tabsArray: [{ label: "标签3" }, { label: "标签4" }, { label: "标签5" }],
      tabList: [
        {
          name: "服务",
        },
        {
          name: "商品",
        },
        {
          name: "课程",
        },
      ],
      tabCur: 0,
      finished: false,
      pages: [1, 1, 1],
      showLoading: true,
      finished: false,
      keyword: "搜索",
      list: [],
      showDialog: false,
      historyList: [],
    };
  },
  created() {},
  onReachBottom() {
    this.finished = false;
    this.showLoading = true;

    if (this.pages[this.tabCur] >= 2) {
      this.finished = true;
      return;
    }
    this.pages[this.tabCur]++;

    setTimeout(() => {
      this.list = this.list.concat(this.list);
    }, 1500);
  },

  methods: {
    onSearch(keyword) {
      this.isSearch = false;
    },
    onFocus() {
      this.isSearch = true;
    },
    onCustom(keyword) {
      this.isSearch = false;
    },
    onClick(val) {
      this.keywords = val.label;
    },
    onClose(val) {
      this.tabsArray = this.tabsArray.filter(
        (item) => item.label !== val.label
      );
    },

    onTabChange(newTab) {
      this.finished = false;
      this.showLoading = false;

      this.tabCur = newTab;
      if (newTab == 0) {
        this.list = serviceList;
      } else if (newTab == 1) {
        this.list = productList;
      } else {
        this.list = courseList;
      }
    },
    clearHistory() {
      this.showDialog = true;
    },
    onCancel() {
      this.showDialog = false;
    },
    onConfirm() {
      this.tabsArray = [];
      this.showDialog = false;
    },
  },
};
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  .header-left-arrow {
    height: 44rpx;
    width: 44rpx;
  }
  .search-wrap {
    padding: 0 10rpx;
  }
  .history-search {
    padding-top: 56rpx;
    .history-con {
      margin: 0 32rpx;
      .title {
        color: #030305;
        font-size: 32rpx;
        font-family: PingFang SC Bold;
        font-weight: 700;
        line-height: 32rpx;
      }
      .icon-delete {
        width: 44rpx;
        height: 44rpx;
      }
      .equal-division {
        align-self: flex-start;
      }
    }
  }
  .list-container-bg {
    background-color: #f8f8f8;
  }
}
</style>
