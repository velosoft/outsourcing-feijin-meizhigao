<template>
  <view class="flex-col page">
    <NavBar :hasBack="false">
      <image slot="left" class="logo" src="../../static/images/logo.png" />
    </NavBar>
    <view class="flex-col flex-1 home-con">
      <view class="flex-row items-center search-box">
        <GoSearch />
        <view class="ml-8 flex-col items-center shrink-0 relative search-right">
          <image class="message" src="../../static/images/message.png" />
          <view class="flex-col justify-start items-center dot-wrap dot-pos">
            <image class="notify-image" src="../../static/images/dot_bg.png" />
            <text class="home-font_03 dot-text dot-pos-text">1</text>
          </view>
        </view>
      </view>
      <BannerSwiper />
      <view class="flex-row items-center notify-box" @click="goNotify">
        <image class="notify-image" src="../../static/images/notify.png" />
        <text class="ml-10 home-font_02 notify-text">{{ notifyContent }}</text>
      </view>
      <ClassifyCards class="box-top"></ClassifyCards>
      <CenterPanel class="box-top"></CenterPanel>
      <GridPanel class="box-top"></GridPanel>
      <MemberBox />
      <ListContainer
        :showEmpty="!itemsLeft.length && !itemsRight.length"
        :showLoading="true"
      >
        <RecommendedList
          class="section_13"
          :itemsLeft="itemsLeft"
          :itemsRight="itemsRight"
        ></RecommendedList>
      </ListContainer>
      <FreezeWarning />
    </view>
  </view>
</template>

<script>
import ClassifyCards from "../home/components/ClassifyCards";
import CenterPanel from "../home/components/CenterPanel";
import GridPanel from "../home/components/GridPanel";
import RecommendedList from "../home/components/RecommendedList";
import { serviceList } from "../../mock/shopList/shopList";
import NavBar from "../../components/NavBar/NavBar.vue";
import GoSearch from "../../components/GoSearch/GoSearch.vue";
import BannerSwiper from "../../components/BannerSwiper/BannerSwiper.vue";
import MemberBox from "../../components/MemberBox/MemberBox.vue";
import FreezeWarning from "../../components/FreezeWarning/FreezeWarning.vue";
import ListContainer from "../../components/ListContainer/ListContainer.vue";

export default {
  components: {
    CenterPanel,
    ClassifyCards,
    GridPanel,
    RecommendedList,
    NavBar,
    GoSearch,
    BannerSwiper,
    MemberBox,
    FreezeWarning,
    ListContainer,
  },
  props: {},
  data() {
    return {
      status: "loadmore",
      page: 0,
      keyword: "搜索",
      itemsLeft: [...serviceList],
      itemsRight: [...serviceList],
      notifyContent: "显示最新一条系统公告的标题，系统公告的标题…",
    };
  },
  onshow() {
    this.spliceData(shopList);
  },
  onReachBottom() {
    if (this.page >= 2) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.list = [...this.list, ...serviceList];
      this.spliceData(this.list);
      if (this.page >= 2) this.status = "nomore";
      else this.status = "loading";
    }, 1500);
  },

  methods: {
    goNotify() {
      uni.navigateTo({
        url: "../home/notify",
      });
    },
    spliceData(val) {
      val.forEach((item, index) => {
        if (index % 2 == 1) {
          this.itemsLeft.push(item);
        } else {
          this.itemsRight.push(item);
        }
      });
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

  .logo {
    width: 154rpx;
    height: 54rpx;
  }
  .home-con {
    overflow-y: auto;
    .search-box {
      padding: 20rpx 30rpx 20rpx;
      .search-right {
        padding-top: 8rpx;
        width: 76rpx;
        .message {
          border-radius: 50%;
          width: 68rpx;
          height: 68rpx;
        }
        .dot-wrap {
          background-color: #ffffff00;
          width: 30rpx;
          .home-font_03 {
            font-size: 20rpx;
            font-family: PingFang SC;
            line-height: 20rpx;
          }
          .dot-text {
            color: #ffffff;
            line-height: 14.28rpx;
          }
          .dot-pos-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .dot-pos {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    .notify-box {
      padding: 24rpx 30rpx;
      background-color: #f7f7f799;
      .home-font_02 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #030305;
      }
      .notify-text {
        color: #6c6c6c;
      }
    }
    .notify-image {
      width: 30rpx;
      height: 30rpx;
    }
    .box-top {
      margin: 56rpx 30rpx 0;
    }
    .section_13 {
      margin-top: 44rpx;
    }
  }
}
</style>
