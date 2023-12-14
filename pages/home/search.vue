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
        <tabs :tabList="tabList" :TabCur="tabCur" @tabChange="tabChange"></tabs>
        <list-container :showEmpty="showEmpty" :showLoading="showLoading">
          <view>
            <double-list :items="list"></double-list>
          </view>
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
import DoubleList from "./components/DoubleList.vue";
import ConfirmPanel from "@/components/ConfirmPanel.vue";
import ToggleList from "@/components/ToggleList.vue";
import { serviceList } from "@/mock/shopList";

export default {
  components: {
    NavBar,
    Tabs,
    SearchBar,
    ListContainer,
    DoubleList,
    ConfirmPanel,
    ToggleList,
  },
  props: {},
  data() {
    return {
      isSearch: true,
      keywords: "",
      tabsArray: [{ label: "标签3" }, { label: "标签4" }, { label: "标签5" }],
      showEmpty: false,
      showLoading: true,
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
      tabCur: 1,
      itemsLeft: [],
      itemsRight: [],
      finished: false,
      status: "loadmore",
      page: 0,
      keyword: "搜索",
      items: [null, null, null],
      list: serviceList,
      current: 0,
      showDialog: false,
      historyList: [],
    };
  },
  created() {},
  onReachBottom() {
    if (this.page >= 2) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.list = [...this.list, ...serviceList];

      if (this.page >= 2) this.status = "nomore";
      else this.status = "loading";
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
    change(e) {
      this.current = e.detail.current;
    },
    tabChange(e) {
      this.tabCur = e;
      if (e >= 1) {
        this.showEmpty = true;
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
  overflow-y: auto;
  overflow-x: hidden;
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
    overflow-y: auto;
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
  .group_5 {
    position: relative;
  }
}
</style>
