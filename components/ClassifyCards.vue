<template>
<view class="flex-row">
  <view class="flex-col items-center ClassifyCards-group">
    <image class="ClassifyCards-background-image" src="../static/images/bg_shop_01.png" />
    <text class="ClassifyCards-font ClassifyCards-text ClassifyCards-pos">服务分类</text>
  </view>
  <view class="ml-12 flex-col items-center ClassifyCards-group">
    <image class="ClassifyCards-background-image" src="../static/images/bg_service_01.png" />
    <text class="ClassifyCards-font ClassifyCards-pos ClassifyCards-text">商品分类</text>
  </view>
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

<style scoped lang="css">
.ClassifyCards-group {
  position: relative;
  flex: 1 1 332rpx;
}
.ClassifyCards-background-image {
  width: 332rpx;
  height: 176rpx;
}
.ClassifyCards-font {
  font-size: 24rpx;
  font-family: PingFangSC-Medium;
  line-height: 24rpx;
  color: #ffffff;
}
.ClassifyCards-text {
  font-size: 26rpx;
  line-height: 26rpx;
}
.ClassifyCards-pos {
  position: absolute;
  left: 26rpx;
  top: 30rpx;
}
</style>
