<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="false"></NavBar>
    <view class="flex-col flex-1">
      <CfSwiper class="section"></CfSwiper>
      <ActivityCard class="wraper-margin"></ActivityCard>
      <ProductHeader class="wraper-ml"></ProductHeader>
      <CourseIntro class="wraper-margin"></CourseIntro>
    </view>
    <FooterBtn :text="text" @confirm="onConfirm"></FooterBtn>
  </view>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar.vue";
import CfSwiper from "./components/CfSwiper/CfSwiper.vue";
import ActivityCard from "./components/ActivityCard.vue";
import ProductHeader from "../components/ProductHeader.vue";
import CourseIntro from "./components/CourseIntro.vue";
import FooterBtn from "./components/FooterBtn.vue";

export default {
  components: {
    NavBar,
    CfSwiper,
    ActivityCard,
    ProductHeader,
    CourseIntro,
    FooterBtn,
  },
  props: {},
  data() {
    return {
      title: "",
      text: "确定",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .section {
    position: relative;
    margin-top: -116rpx;
  }
  .wraper-margin {
    margin: 16rpx 20rpx 0;
  }
  .wraper-ml {
    margin: 0 20rpx;
  }
}
</style>
