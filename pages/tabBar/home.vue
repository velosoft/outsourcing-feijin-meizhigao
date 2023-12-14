<template>
  <view class="flex-col page">
    <nav-bar :hasBack="false">
      <image slot="left" class="logo" src="/static/images/logo.png" />
    </nav-bar>
    <view class="flex-col flex-1 home-con">
      <view class="flex-row items-center search-box">
        <go-search class="flex-1" />
        <uni-badge
          :text="notifyCount"
          absolute="rightTop"
          :offset="[2, 2]"
          size="small"
          @tap="goNotify"
        >
          <image class="ml-8 notify-icon" src="/static/images/message.png" />
        </uni-badge>
      </view>
      <banner-swiper :items="bannerImages" />
      <u-notice-bar
        class="notify-bar"
        :text="notifyContent"
        bgColor="#f7f7f7"
        color="#6c6c6c"
        font-size="24rpx"
        @click="goNotify"
      ></u-notice-bar>
      <classify-cards class="box-top"></classify-cards>
      <center-panel class="box-top"></center-panel>
      <grid-panel class="box-top"></grid-panel>
      <member-box />
      <recommended-list
        class="recommended-list"
        :list="list"
        :nomore="nomore"
        @change="onChangeType"
      ></recommended-list>
      <!-- <FreezeWarning /> -->
    </view>
  </view>
</template>

<script>
import ClassifyCards from "../home/components/ClassifyCards";
import CenterPanel from "../home/components/CenterPanel";
import GridPanel from "../home/components/GridPanel";
import RecommendedList from "../home/components/RecommendedList";
import NavBar from "@/components/NavBar/NavBar.vue";
import GoSearch from "@/components/GoSearch/GoSearch.vue";
import BannerSwiper from "../home/components/BannerSwiper.vue";
import MemberBox from "../home/components/MemberBox.vue";
import FreezeWarning from "../home/components/FreezeWarning.vue";
import { productList, serviceList, courseList } from "@/mock/shopList";

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
      notifyCount: 5,
      notifyContent: "显示最新一条系统公告的标题，系统公告的标题…",
      list: productList,
      type: 0,
      page: 1,
      nomore: false,
      bannerImages: [
        "/static/mock/home-swiper-image.png",
        "/static/mock/home-swiper-image.png",
        "/static/mock/home-swiper-image.png",
      ],
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

      .notify-icon {
        width: 68rpx;
        height: 68rpx;
        border-radius: 50%;
      }
      /deep/ .uni-badge--error {
        background-color: #ff4d1d;
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
    .recommended-list {
      margin-top: 44rpx;
    }
  }
}
</style>
