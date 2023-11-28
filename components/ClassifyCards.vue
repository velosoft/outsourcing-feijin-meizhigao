<template>
  <view class="flex-row">
    <view class="flex-col items-center classify-card" @click="goto">
      <image class="classify-bg" src="../static/images/bg_shop_01.png" />
      <text class="classify-title classify-pos">服务分类</text>
    </view>
    <view class="ml-12 flex-col items-center classify-card">
      <image class="classify-bg" src="../static/images/bg_service_01.png" />
      <text class="classify-title classify-pos">商品分类</text>
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

  methods: {
    goto(url) {
      uni.navigateTo({
        url: "/pages/listPage/index",
      });
    },
  },
};
</script>

<style scoped lang="css">
.classify-card {
  position: relative;
  flex: 1 1 332rpx;
}
.classify-bg {
  width: 332rpx;
  height: 176rpx;
}
.classify-title {
  font-size: 26rpx;
  line-height: 26rpx;
  font-family: PingFangSC-Medium;
  color: #ffffff;
}
.classify-pos {
  position: absolute;
  left: 26rpx;
  top: 30rpx;
}
</style>
