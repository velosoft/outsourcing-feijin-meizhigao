<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="false"
      background="rgba(255,255,255,0)"
    ></NavBar>
    <view class="flex-col flex-1 footer">
      <scroll-view class="scroll-height" :scroll-y="true">
        <u-swiper
          :list="list"
          @change="onChange"
          height="750"
          indicatorStyle="right: 20px"
        >
          <view
            class="flex-col items-center indicator-wrapper"
            slot="indicator"
          >
            <text class="indicator-font indicator-text"
              >{{ currentNum + 1 }}/{{ list.length }}</text
            >
          </view>
        </u-swiper>
        <view class="flex-col flex-1 info">
          <ActivityCard
            :price="getPriceIntergetPart(pageData.activityCard.price)"
            :decimalPrice="getPriceDecimalPart(pageData.activityCard.price)"
            :originPrice="pageData.activityCard.originPrice"
            :time="pageData.activityCard.time"
            :buyer="pageData.activityCard.buyer"
          ></ActivityCard>
          <view class="flex-col relative container">
            <ProductHeader @onShare="onShare"></ProductHeader>
            <ProductBenefit
              class="wraper-top"
              @onSelectService="onSelectService"
            ></ProductBenefit>
            <ProductEvaluate class="wraper-top"></ProductEvaluate>
            <ProdutDetial class="wraper-top"></ProdutDetial>
          </view>
        </view>
      </scroll-view>
      <FooterBtn></FooterBtn>
    </view>
    <PopShareTabs
      ref="popShareTabs"
      :detail="detail"
      @close="close"
      @saveImg="saveImg"
    ></PopShareTabs>
    <u-popup :show="showPop" :round="16" @close="closePop" @open="openPop">
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
import ProductBenefit from "./components/ProductBenefit.vue";
import ProductEvaluate from "./components/ProductEvaluate.vue";
import ProdutDetial from "./components/ProdutDetial.vue";
import FooterBtn from "./components/FooterBtn.vue";
import PopShareTabs from "../../../components/PopShareTabs.vue";
import PopupConfirm from "../../../components/PopupConfirm.vue";
import PopEnsure from "./components/PopEnsure.vue";
import PopSpecification from "./components/PopSpecification.vue";

export default {
  components: {
    ActivityCard,
    FooterBtn,
    ProductBenefit,
    ProductEvaluate,
    ProductHeader,
    ProdutDetial,
    PopShareTabs,
    PopupConfirm,
    PopEnsure,
    PopSpecification,
  },
  props: {},
  data() {
    return {
      title: "",
      pageData: {
        activityCard: {
          price: 200.12,
          originPrice: 388.88,
          time: 108000000,
          buyer: 100,
        },
      },
      list: [
        {
          url: "https://cdn.uviewui.com/uview/resources/video.mp4",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
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
      showPop: false,
      showPopEnsure: false,
      showPopSpecification: true,
    };
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
    onSelectService() {
      this.showPop = true;
      this.showPopSpecification = true;
    },
    goNext() {
      console.log("下一步");

      this.showPopSpecification = false;
      this.showPopEnsure = true;
    },
    isKnow() {
      this.showPopEnsure = false;
      this.showPop = false;
    },
    closePop() {
      this.showPop = false;
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
