<template>
  <view class="flex-col page">
    <nav-bar
      :fixed="true"
      :isShow="false"
      :background="navBarColor"
      :title="pageTitle"
    ></nav-bar>
    <view class="flex-col flex-1">
      <view class="scroll-height">
        <detail-swiper :list="pageData.swiperList" />
        <view class="flex-col flex-1 info">
          <activity-card
            v-if="pageData.activity"
            :price="getPriceIntergetPart(pageData.product.price)"
            :decimalPrice="getPriceDecimalPart(pageData.product.price)"
            :originPrice="pageData.product.originPrice"
            :time="pageData.activity.time"
            :buyer="pageData.activity.buyer"
          ></activity-card>
          <view
            class="flex-col relative container"
            :style="{ marginTop: pageData.activity ? '-28rpx' : '' }"
          >
            <product-header
              :title="pageData.product.title"
              :content="pageData.product.content"
              :price="getPriceIntergetPart(pageData.product.price)"
              :decimalPrice="getPriceDecimalPart(pageData.product.price)"
              :originPrice="pageData.product.originPrice"
              :discountTags="pageData.product.discountTags"
              :tags="pageData.product.tags"
              :buyer="pageData.product.buyer"
              @onShare="onShare"
            ></product-header>
            <course-intro :imageList="pageData.product.detail"></course-intro>
          </view>
        </view>
      </view>
      <footer-bar
        :hasActivity="!!pageData.activity"
        :activityStarted="true"
      ></footer-bar>
    </view>
    <share-popup
      ref="sharePopup"
      :detail="detail"
      @close="close"
      @saveImg="saveImg"
    ></share-popup>
    <u-popup
      :show="showAftersalePopup || showSpecPopup"
      :round="16"
      @close="closePop"
      @open="openPop"
    >
      <aftersale-popup
        v-if="showAftersalePopup"
        @isKnow="isKnow"
      ></aftersale-popup>
      <specification-popup
        v-if="showSpecPopup"
        @goNext="goNext"
      ></specification-popup>
    </u-popup>
  </view>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import { commentList } from "@/mock/commentList.js";
import ActivityCard from "./components/ActivityCard.vue";
import ProductHeader from "./components/ProductHeader.vue";
import SpecificationCard from "./components/SpecificationCard.vue";
import CommentCard from "./components/CommentCard.vue";
import DetailCard from "./components/DetailCard.vue";
import CourseIntro from "./components/CourseIntro.vue";
import DetailSwiper from "./components/DetailSwiper.vue";
import FooterBar from "./components/FooterBar.vue";
import SharePopup from "./popup/SharePopup.vue";
import AftersalePopup from "./popup/AftersalePopup.vue";
import SpecificationPopup from "./popup/SpecificationPopup.vue";

export default {
  components: {
    NavBar,
    ActivityCard,
    FooterBar,
    SpecificationCard,
    CommentCard,
    ProductHeader,
    DetailCard,
    CourseIntro,
    SharePopup,
    AftersalePopup,
    SpecificationPopup,
    DetailSwiper,
  },
  props: {},
  data() {
    return {
      id: 0,
      isShowNavbar: false,
      navBarColor: "transparent",
      pageTitle: "",
      pageData: {
        product: {
          title: "美之高简易衣柜思想者系列",
          content: "烹饪也能从容优雅  享受美好食光",
          price: 200.12,
          originPrice: 388.88,
          discountTags: ["满329包邮", "券 | 满99减5元", "券 | 满100减20元"],
          tags: ["新客优惠", "新品上市", "好评推荐"],
          buyer: 100,
          detail: [
            "/static/mock/course_detail_image.png",
            "/static/mock/course_detail_image.png",
          ],
        },
        activity: null,
        comments: [],
        swiperList: [
          {
            url: "/static/mock/detail_swiper_image.png",
          },
          {
            url: "/static/mock/detail_swiper_image.png",
          },
          {
            url: "/static/mock/detail_swiper_image.png",
          },
        ],
      },
      detail: {},
      showAftersalePopup: false,
      showSpecPopup: false,
    };
  },
  onLoad(option) {
    // 页面启动的生命周期，这里编写页面加载时的逻辑
    this.id = option.id;

    if (option.type === "activity") {
      this.pageData.activity = {
        time: 108000000,
        buyer: 100,
      };
    }
  },
  onPageScroll(e) {
    // 页面滚动时执行
    if (e.scrollTop > 10) {
      if (!this.isShowNavbar) {
        this.isShowNavbar = true;
        this.pageTitle = "详情页";
        this.navBarColor = "#ffffff";
      }
    } else {
      if (this.isShowNavbar) {
        this.isShowNavbar = false;
        this.pageTitle = "";
        this.navBarColor = "transparent";
      }
    }
  },
  methods: {
    onShare(uid) {
      this.$refs.sharePopup.open();
    },
    close() {},
    saveImg() {},
    onSpecificationClick() {
      this.showSpecPopup = true;
    },
    goNext() {
      this.showSpecPopup = false;
      this.showAftersalePopup = true;
    },
    isKnow() {
      this.showAftersalePopup = false;
    },
    closePop() {
      this.showSpecPopup = false;
      this.showAftersalePopup = false;
    },
    openPop() {},
    getPriceIntergetPart(price) {
      let val = Math.floor(price).toString();
      return val;
    },
    getPriceDecimalPart(price) {
      let val = price.toFixed(2).split(".")[1];
      return val;
    },
  },
  mounted() {
    this.pageData.comments = commentList;
  },
};
</script>

<style scoped lang="less">
.mt-120 {
  margin-top: 240rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .scroll-height {
    height: 100%;
    .info {
      padding: 16rpx 20rpx 0;
      .container {
        .wraper-top {
          margin-top: 20rpx;
        }
      }
    }
  }
}
</style>
