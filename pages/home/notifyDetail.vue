<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" title="公告详情"></nav-bar>
    <view class="flex-col content">
      <view class="flex-col items-start">
        <text class="title">抽柜式·衣柜收纳箱</text>
        <text class="time mt-12">2020年03月03日 12:54</text>
      </view>
      <mp-html class="detail mt-24" :content="content"></mp-html>
    </view>
  </view>
</template>

<script>
import MpHtml from "@/components/MpHtml/MpHtml.vue";
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  components: { MpHtml, NavBar },
  props: {},
  data() {
    return {
      content:
        "<view><img src='/static/images/notify_detail_content.png'></img><text>2015年之前的朋友圈，都是刷屏；朋友圈文案是最近一年大家才开始重视的，可能我是比较早提出“朋友圈文案”和“长文案”这两类不同概念的文案区分，所以，坏消息是，目前应该还没有专业的写朋友圈文案的书。好消息是，你是少数这么早意识到朋友圈文案重要性的。而关于文案的书，其实早就有了很多，文案的本质是相通的。文案只是信息的一种呈现形式，多和各种各样的人沟通，多了解患者需求，然后把他们的需求，用朋友圈的内容表达出来，就是最有效的文案。</text></view>",
    };
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

    .detail {
      font-size: 28rpx;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 40rpx;
      color: #6c6c6c;
      font-family: PingFangSC-Medium;
      white-space: pre-line;

      img {
        width: 100%;
      }
    }
  }
}
</style>
