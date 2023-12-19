<template>
  <view class="flex-row search-wrap">
    <image class="self-center image_7" src="../../../static/images/icon_search_06.png" />
    <text class="self-start font text_3 ml-4">请输入课程单号/课程名称搜索</text>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .search-wrap {
    padding: 16.16rpx 20rpx 15rpx;
    background-color: #f8f8f8;
    border-radius: 38rpx;
    border-left: solid 2rpx #f3f3f3;
    border-right: solid 2rpx #f3f3f3;
    border-top: solid 2rpx #f3f3f3;
    border-bottom: solid 2rpx #f3f3f3;
    .image_7 {
      width: 39rpx;
      height: 39rpx;
    }
    .font {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 22.42rpx;
      color: #6d6d6d;
    }
    .text_3 {
      color: #b7b7b7;
      line-height: 22.24rpx;
    }
  }
</style>