<template>
  <view class="flex-col container">
    <text class="title">详情</text>
    <mp-html class="content mt-16" :content="content"></mp-html>
  </view>
</template>

<script>
import mpHtml from "../../../../components/mp-html/mp-html.vue";

export default {
  components: { mpHtml },
  props: {
    content: { type: String, default: "" },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.container {
  padding: 32rpx 28rpx 56rpx;
  background-color: #ffffff;
  border-radius: 8rpx 8rpx 0rpx 0rpx;
  .title {
    color: #030305;
    font-size: 36rpx;
    font-family: 苹方;
    font-weight: 700;
    line-height: 36rpx;
  }
  .content {
    font-size: 28rpx;
    line-height: 39rpx;
    font-family: 苹方;
    line-height: 48rpx;
    color: #030305;
  }
}
</style>
