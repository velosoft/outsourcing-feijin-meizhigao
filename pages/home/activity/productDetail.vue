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
        <detail-swiper />
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
            <specification-card
              class="wraper-top"
              :enables="specificationRows"
              :deliverPayment="specificationData.deliverPayment"
              :specification="specificationData.specification"
              :tags="specificationData.tags"
              :discountTags="pageData.product.discountTags"
              @onSpecificationClick="onSpecificationClick"
            ></specification-card>
            <comment-card
              class="wraper-top"
              title="商品评价"
              :comments="pageData.comments"
            ></comment-card>
            <detail-card
              class="wraper-top"
              :content="pageData.product.detail"
            ></detail-card>
          </view>
        </view>
      </view>
      <footer-bar
        :hasActivity="!!pageData.activity"
        :activityStarted="true"
      ></footer-bar>
    </view>
    <pop-share-tabs
      ref="popShareTabs"
      :detail="detail"
      @close="close"
      @saveImg="saveImg"
    ></pop-share-tabs>
    <u-popup
      :show="showPopEnsure || showPopSpecification"
      :round="16"
      @close="closePop"
      @open="openPop"
    >
      <pop-ensure v-if="showPopEnsure" @isKnow="isKnow"></pop-ensure>
      <pop-specification
        v-if="showPopSpecification"
        @goNext="goNext"
      ></pop-specification>
    </u-popup>
  </view>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar.vue";
import ActivityCard from "./components/ActivityCard.vue";
import ProductHeader from "../components/ProductHeader.vue";
import SpecificationCard from "./components/SpecificationCard.vue";
import CommentCard from "./components/CommentCard.vue";
import DetailCard from "./components/DetailCard.vue";
import FooterBar from "./components/FooterBar.vue";
import PopShareTabs from "../../../components/PopShareTabs.vue";
import PopEnsure from "./components/PopEnsure.vue";
import PopSpecification from "./components/PopSpecification.vue";
import DetailSwiper from "./components/DetailSwiper.vue";
import { commentList } from "../../../mock/commentList.js";

export default {
  components: {
    NavBar,
    ActivityCard,
    FooterBar,
    SpecificationCard,
    CommentCard,
    ProductHeader,
    DetailCard,
    PopShareTabs,
    PopEnsure,
    PopSpecification,
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
          detail:
            "<view><text>2015年之前的朋友圈，都是刷屏；朋友圈文案是最近一年大家才开始重视的，可能我是比较早提出“朋友圈文案”和“长文案”这两类不同概念的文案区分，所以，坏消息是，目前应该还没有专业的写朋友圈文案的书。</text></view>",
        },
        activity: null,
        comments: [],
      },
      specificationData: {
        deliverPayment: "免运费",
        specification: "请选择服务器规格",
        tags: ["官方自营", "支持退换"],
      },

      detail: {},
      showPopEnsure: false,
      showPopSpecification: false,
      specificationRows: [
        "deliverPayment",
        "activity",
        "specification",
        "service",
      ],
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
      this.specificationRows = ["deliverPayment", "specification", "service"];
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
      this.$refs.popShareTabs.open();
    },
    close() {},
    saveImg() {},
    onSpecificationClick() {
      this.showPopSpecification = true;
    },
    goNext() {
      this.showPopSpecification = false;
      this.showPopEnsure = true;
    },
    isKnow() {
      this.showPopEnsure = false;
    },
    closePop() {
      this.showPopSpecification = false;
      this.showPopEnsure = false;
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
