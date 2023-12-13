<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" title="公告详情"></nav-bar>
    <view class="flex-col content">
      <view class="flex-col items-start">
        <text class="title">抽柜式·衣柜收纳箱</text>
        <text class="time mt-12">2020年03月03日 12:54</text>
      </view>
      <mp-html class="mt-24"></mp-html>
    </view>
  </view>
</template>

<script>
import MpHtml from "../../components/mp-html/mp-html.vue";
import NavBar from "../../components/NavBar/NavBar.vue";

export default {
  components: { MpHtml, NavBar },
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .content {
    padding: 40rpx 32rpx 0;
    .title {
      color: #030305;
      font-size: 32rpx;
      font-family: PingFang SC Bold;
      font-weight: 700;
      line-height: 32rpx;
    }
    .time {
      color: #a7a7a7;
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
    }
  }
}
</style>
