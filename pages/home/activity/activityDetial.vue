<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="false"
      background="rgba(255,255,255,0)"
    ></NavBar>
    <view class="flex-col flex-1">
      <scroll-view class="scroll-height" :scroll-y="true">
        <u-swiper
          :list="list"
          @change="onChange"
          height="750"
          indicatorStyle="right: 20px"
        >
          <view
            class="flex-col items-center text-wrapper view_5"
            slot="indicator"
          >
            <text class="font_1 text_4"
              >{{ currentNum + 1 }}/{{ list.length }}</text
            >
          </view>
        </u-swiper>
        <view class="flex-col flex-1 info">
          <ActivityCard></ActivityCard>
          <view class="flex-col relative container">
            <ProductHeader @onShare="onShare"></ProductHeader>
            <ProductBenefit class="group_15"></ProductBenefit>
            <ProductEvaluate class="group_15"></ProductEvaluate>
            <ProdutDetial class="group_15"></ProdutDetial>
          </view>
        </view>
      </scroll-view>
      <FooterBtn class="section_8"></FooterBtn>
    </view>
    <PopShareTabs
      ref="popShareTabs"
      :detail="detail"
      @close="close"
      @saveImg="saveImg"
    ></PopShareTabs>
    <PopupConfirm>
      <PopEnsure v-if="showPopEnsure"></PopEnsure>
      <PopSpecification v-if="showPopSpecification"></PopSpecification>
    </PopupConfirm>
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
      list: [
        "https://dev.ft.velosoft.cn/api/image?token=6575d705740f740012ac3726&name=5d9bdfc11721ad48076565939b4b77dd.png",
        "https://dev.ft.velosoft.cn/api/image?token=6575d705740f740012ac3726&name=5d9bdfc11721ad48076565939b4b77dd.png",
        "https://dev.ft.velosoft.cn/api/image?token=6575d705740f740012ac3726&name=5d9bdfc11721ad48076565939b4b77dd.png",
      ],
      currentNum: 0,
      detail: {},
      showPopEnsure: false,
      showPopSpecification: false,
    };
  },

  methods: {
    onChange(e) {
      // 事件处理方法
      this.currentNum = e.current;
    },
    onShare() {
      this.$refs.popShareTabs.open();
    },
    close() {},
    saveImg() {},
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
    .text-wrapper {
      align-self: flex-end;
      .font_1 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 22rpx;
        color: #ffffff;
      }
      .text_4 {
        line-height: 24rpx;
      }
    }
    .view_5 {
      padding: 8rpx 0;
      background-color: #0000004d;
      border-radius: 24rpx;
      width: 80rpx;
    }
    .info {
      padding: 16rpx 20rpx 0;
      .container {
        margin-top: -28rpx;
        .group_15 {
          margin-top: 20rpx;
        }
      }
    }
  }
  .section_8 {
    position: absolute;
    left: 12rpx;
    right: 32rpx;
    top: 2758rpx;
  }
}
</style>
