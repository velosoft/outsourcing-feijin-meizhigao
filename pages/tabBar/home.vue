<template>
  <view class="flex-col page">
    <NavBar :hasBack="false">
      <image slot="left" class="logo" src="../../static/images/logo.png" />
    </NavBar>
    <view class="flex-col flex-1 home-con">
      <view class="flex-row items-center search-box">
        <GoSearch class="flex-1" />
        <view class="ml-8 flex-col items-center shrink-0 relative search-right">
          <image class="message" src="../../static/images/message.png" />
          <view class="flex-col justify-start items-center dot-wrap dot-pos">
            <image class="icon-size" src="../../static/images/dot_bg.png" />
            <text class="home-font_03 dot-text dot-pos-text">1</text>
          </view>
        </view>
      </view>
      <BannerSwiper />
      <u-notice-bar
        class="notify-bar"
        :text="notifyContent"
        bgColor="#f7f7f7"
        color="#6c6c6c"
        font-size="24rpx"
        @click="goNotify"
      ></u-notice-bar>
      <ClassifyCards class="box-top"></ClassifyCards>
      <CenterPanel class="box-top"></CenterPanel>
      <GridPanel class="box-top"></GridPanel>
      <MemberBox />
      <RecommendedList
        class="section_13"
        :list="list"
        :nomore="nomore"
        @change="onChangeType"
      ></RecommendedList>
      <!-- <FreezeWarning /> -->
    </view>
  </view>
</template>

<script>
import ClassifyCards from "../home/components/ClassifyCards";
import CenterPanel from "../home/components/CenterPanel";
import GridPanel from "../home/components/GridPanel";
import RecommendedList from "../home/components/RecommendedList";
import NavBar from "../../components/NavBar/NavBar.vue";
import GoSearch from "../../components/GoSearch/GoSearch.vue";
import BannerSwiper from "../home/components/BannerSwiper.vue";
import MemberBox from "../../components/MemberBox/MemberBox.vue";
import FreezeWarning from "../home/components/FreezeWarning.vue";
import {
  productList,
  serviceList,
  courseList,
} from "../../mock/shopList/shopList";

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
  },
  props: {},
  data() {
    return {
      notifyContent: "显示最新一条系统公告的标题，系统公告的标题…",
      list: productList,
      type: 0,
      page: 1,
      nomore: false,
    };
  },
  onReachBottom() {
    if (this.page >= 2) {
      this.nomore = true;
      return;
    }
    this.nomore = false;

    setTimeout(() => {
      this.list = this.list.concat(this.list);
      this.page++;
    }, 1500);
  },
  methods: {
    goNotify() {
      uni.navigateTo({
        url: "/pages/home/notify",
      });
    },
    onChangeType(type) {
      this.type = type;
      this.page = 1;

      switch (type) {
        case 0:
          this.list = productList;
          break;
        case 1:
          this.list = serviceList;
          break;
        case 2:
          this.list = courseList;
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  width: 100%;
  height: 100%;

  .logo {
    width: 154rpx;
    height: 54rpx;
  }
  .home-con {
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

    .notify-bar {
      height: 80rpx;
      /deep/ .u-notice__left-icon {
        background-image: url("/static/images/notify.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 30rpx;
        height: 30rpx;
        margin-right: 18rpx;

        u-icon {
          display: none;
        }
      }
    }

    .icon-size {
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
