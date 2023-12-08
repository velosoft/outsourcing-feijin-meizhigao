<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" fixed="true" isShow="true">
      <template #right>
        <Search
          class="search-wrap"
          :showAction="true"
          :value="keywords"
          @custom="onCustom"
          @search="onSearch"
          @focus="onFocus"
        ></Search>
      </template>
    </NavBar>
    <view class="flex-col flex-1">
      <view class="flex-col justify-start history-search" v-if="isSearch">
        <view class="flex-col history-con">
          <view class="flex-row justify-between items-center self-stretch">
            <text class="title">历史搜索</text>
            <image
              class="icon-delete"
              src="../../static/images/icon_del_01.png"
              @click="clearHistory"
            />
          </view>
          <ToggleBtn
            class="equal-division mt-14"
            :tabsArray="tabsArray"
            @onClick="onClick"
            @onClose="onClose"
          ></ToggleBtn>
        </view>
      </view>
      <view class="flex-col" v-else>
        <Tabs :tabList="tabList" :TabCur="tabCur" @tabChange="tabChange"></Tabs>
        <ListContainer :showEmpty="showEmpty" :showLoading="showLoading">
          <view>
            <DoublueList
              class="section_13"
              :itemsLeft="itemsLeft"
              :itemsRight="itemsRight"
            ></DoublueList>
          </view>
        </ListContainer>
      </view>
    </view>
    <DialogBtn
      :isShow="showDialog"
      :isnormal="false"
      @cancel="onCancel"
      @confirm="onConfirm"
    ></DialogBtn>
  </view>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue";
import Tabs from "../../components/Tabs.vue";
import Search from "../../components/Search.vue";
import ListContainer from "../../components/ListContainer/ListContainer.vue";
import DoublueList from "../../components/DoublueList.vue";
import DialogBtn from "../../components/DialogBtn.vue";
import ToggleBtn from "../../components/toggleBtn.vue";

export default {
  components: {
    NavBar,
    Tabs,
    Search,
    ListContainer,
    DoublueList,
    DialogBtn,
    ToggleBtn,
  },
  props: {},
  data() {
    return {
      isSearch: true,
      keywords: "",
      tabsArray: [{ label: "标签3" }, { label: "标签4" }, { label: "标签5" }],
      showEmpty: true,
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
      itemsProduct: items1,
      current: 0,
      showDialog: false,
      historyList: [],
    };
  },
  onReachBottom() {
    if (this.page >= 2) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.itemsProduct = [...this.itemsProduct, ...items1];
      this.spliceData();

      if (this.page >= 2) this.status = "nomore";
      else this.status = "loading";
    }, 1500);
  },
  created() {
    this.spliceData();
  },
  methods: {
    onSearch(keyword) {
      console.log(keyword);
      this.isSearch = false;
      console.log(this.itemsProduct);
    },
    onFocus() {
      console.log("聚焦事件");
      this.isSearch = true;
    },
    onCustom(keyword) {
      console.log(keyword);
      this.isSearch = false;
    },
    onClick(val) {
      console.log("打开标签" + val.label);
      this.keywords = val.label;
    },
    onClose(val) {
      console.log("关闭标签" + val.label);
      this.tabsArray = this.tabsArray.filter(
        (item) => item.label !== val.label
      );
    },
    change(e) {
      this.current = e.detail.current;
    },
    tabChange(e) {
      this.tabCur = e;
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
    spliceData() {
      this.itemsProduct.forEach((item, index) => {
        if (index % 2 == 1) {
          this.itemsLeft.push(item);
        } else {
          this.itemsRight.push(item);
        }
      });
    },
  },
};
const items1 = [
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },

  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
];
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
