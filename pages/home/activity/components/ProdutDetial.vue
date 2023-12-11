<template>
  <view class="flex-col container">
    <text class="title">详情</text>
    <mp-html class="mt-16" :content="content"></mp-html>
  </view>
</template>

<script>
import mpHtml from "../../../../components/mp-html/mp-html.vue";

export default {
  components: { mpHtml },
  props: {},
  data() {
    return {
      content: "<view><text>2015年之前的朋友圈，都是刷屏；朋友圈文案是最近一年大家才开始重视的，可能我是比较早提出“朋友圈文案”和“长文案”这两类不同概念的文案区分，所以，坏消息是，目前应该还没有专业的写朋友圈文案的书。</text></view>",
    };
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
}
</style>
