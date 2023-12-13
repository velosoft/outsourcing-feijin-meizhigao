<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="false"
      background="rgba(255,255,255,0)"
    ></NavBar>
    <view class="flex-col flex-1">
      <view class="scroll-height">
        <u-swiper
          :list="swiperList"
          @change="onChange"
          :height="swiperHeight"
          indicatorStyle="right: 20px"
        >
          <view
            class="flex-col items-center indicator-wrapper"
            slot="indicator"
          >
            <text class="indicator-font indicator-text"
              >{{ currentNum + 1 }}/{{ swiperList.length }}</text
            >
          </view>
        </u-swiper>
        <view class="flex-col flex-1 info">
          <ActivityCard
            :price="getPriceIntergetPart(pageData.product.price)"
            :decimalPrice="getPriceDecimalPart(pageData.product.price)"
            :originPrice="pageData.product.originPrice"
            :time="pageData.activity.time"
            :buyer="pageData.activity.buyer"
          ></ActivityCard>
          <view class="flex-col relative container">
            <ProductHeader
              :title="pageData.product.title"
              :content="pageData.product.content"
              :price="getPriceIntergetPart(pageData.product.price)"
              :decimalPrice="getPriceDecimalPart(pageData.product.price)"
              :originPrice="pageData.product.originPrice"
              :discountTags="pageData.product.discountTags"
              :tags="pageData.product.tags"
              :buyer="pageData.product.buyer"
              @onShare="onShare"
            ></ProductHeader>
            <specification-card
              class="wraper-top"
              :deliverPayment="pageData.productspecificationData.deliverPayment"
              :specification="pageData.productspecificationData.specification"
              :tags="pageData.productspecificationData.tags"
              :discountTags="pageData.product.discountTags"
              @onSpecificationClick="onSpecificationClick"
            ></specification-card>
            <comment-card
              class="wraper-top"
              :comments="pageData.product.comments.slice(0, 2)"
            ></comment-card>
            <product-detail
              class="wraper-top"
              :content="pageData.product.detail"
            ></product-detail>
            <course-intro v-if="pageType == 2"></course-intro>
          </view>
        </view>
      </view>
      <FooterBtn></FooterBtn>
    </view>
    <PopShareTabs
      ref="popShareTabs"
      :detail="detail"
      @close="close"
      @saveImg="saveImg"
    ></PopShareTabs>
    <u-popup
      :show="showPopEnsure || showPopSpecification"
      :round="16"
      @close="closePop"
      @open="openPop"
    >
      <PopEnsure v-if="showPopEnsure" @isKnow="isKnow"></PopEnsure>
      <PopSpecification
        v-if="showPopSpecification"
        @goNext="goNext"
      ></PopSpecification>
    </u-popup>
  </view>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar.vue";
import ActivityCard from "./components/ActivityCard.vue";
import ProductHeader from "../components/ProductHeader.vue";
import SpecificationCard from "./components/SpecificationCard.vue";
import CommentCard from "./components/CommentCard.vue";
import ProductDetail from "./components/ProductDetail.vue";
import CourseIntro from "./components/CourseIntro.vue";
import FooterBtn from "./components/FooterBtn.vue";
import PopShareTabs from "../../../components/PopShareTabs.vue";
import PopEnsure from "./components/PopEnsure.vue";
import PopSpecification from "./components/PopSpecification.vue";
import { commentList } from "../../../mock/commentList.js";

export default {
  components: {
    NavBar,
    ActivityCard,
    FooterBtn,
    SpecificationCard,
    CommentCard,
    ProductHeader,
    ProductDetail,
    CourseIntro,
    PopShareTabs,
    PopEnsure,
    PopSpecification,
  },
  props: {},
  data() {
    return {
      pageType: 0,
      title: "",
      swiperHeight: 0,
      pageData: {
        product: {
          title: "美之高简易衣柜思想者系列",
          content: "烹饪也能从容优雅  享受美好食光",
          price: 200.12,
          originPrice: 388.88,
          discountTags: ["满329包邮", "券 | 满99减5元", "券 | 满100减20元"],
          tags: ["新客优惠", "新品上市", "好评推荐"],
          buyer: 100,
          specificationData: {
            deliverPayment: "免运费",
            specification: "请选择服务器规格",
            tags: ["官方自营", "支持退换"],
          },
          detail:
            "<view><text>2015年之前的朋友圈，都是刷屏；朋友圈文案是最近一年大家才开始重视的，可能我是比较早提出“朋友圈文案”和“长文案”这两类不同概念的文案区分，所以，坏消息是，目前应该还没有专业的写朋友圈文案的书。</text></view>",
        },
        activity: {
          time: 108000000,
          buyer: 100,
        },
        comments: [],
      },

      swiperList: [
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        },
        {
          url: "https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=5d9bdfc11721ad48076565939b4b77dd.png",
        },
        {
          url: "https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=5d9bdfc11721ad48076565939b4b77dd.png",
        },
      ],
      currentNum: 0,
      detail: {},
      showPopEnsure: false,
      showPopSpecification: false,
    };
  },
  onLoad(option) {
    // 页面启动的生命周期，这里编写页面加载时的逻辑
    console.log(option);
    this.pageType = option.id;
  },
  methods: {
    onChange(e) {
      // 事件处理方法
      this.currentNum = e.current;
    },
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
    this.swiperHeight = uni.upx2px(750);
    this.pageData.product.comments = commentList;
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
    .indicator-wrapper {
      align-self: flex-end;
      padding: 8rpx 0;
      background-color: #0000004d;
      border-radius: 24rpx;
      width: 80rpx;
      .indicator-font {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 22rpx;
        color: #ffffff;
      }
      .indicator-text {
        line-height: 24rpx;
      }
    }
    .info {
      padding: 16rpx 20rpx 0;
      .container {
        margin-top: -28rpx;
        .wraper-top {
          margin-top: 20rpx;
        }
      }
    }
  }
}
</style>
