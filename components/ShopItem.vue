<template>
  <view class="flex-col shop-item">
    <image
      class="a-i-background-image shop-a-i-background-image"
      :src="image"
    />
    <text class="self-start shop-title">{{ title }}</text>
    <view class="flex-row self-stretch shop-equal-division">
      <view
        class="flex-col items-center shop-text-wrapper"
        v-for="(item, index) in tags"
        :key="index"
      >
        <text class="shop-CenterPannel-font shop-text_1">{{ item }}</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center self-stretch shop-group">
      <view class="flex-row items-center self-stretch shop-price-wrapper">
        <text class="shop-CenterPannel-font">秒杀价</text>
        <view class="flex-row items-center shrink-0 relative group_4 ml-1">
          <text class="shop-text_3">￥</text>
          <text class="shop-text_2 pos">{{ price }}</text>
          <text class="relative shop-text_4">.00</text>
        </view>
      </view>
      <text class="shop-text_5">{{ buyers + "人购买" }}</text>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    image: { type: String, default: `` },
    title: { type: String, default: `` },
    tags: { type: Array, default: () => [] },
    price: { type: Number, default: 0 },
    buyers: { type: Number, default: 0 },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="css">
.ml-1 {
  margin-left: 2rpx;
}
.shop-item {
  padding-bottom: 34.48rpx;
  background-image: url("https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692422784410573.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.a-i-background-image {
  flex-shrink: 0;
  align-self: stretch;
}
.shop-a-i-background-image {
  width: 330rpx;
  height: 330rpx;
}
.shop-title {
  margin-left: 11rpx;
  margin-top: 30rpx;
  color: #111111;
  font-size: 28rpx;
  font-family: PingFang SC;
  line-height: 28rpx;
}
.shop-equal-division {
  margin-top: 23.26rpx;
  padding: 0 10rpx;
}
.shop-text-wrapper {
  flex: 1 1 96rpx;
  padding: 3.44rpx 0 5.96rpx;
  background-color: #fff1ed;
  border-radius: 4rpx;
  height: 28rpx;
}
.shop-CenterPannel-font {
  font-size: 20rpx;
  font-family: 苹方;
  line-height: 20rpx;
  color: #bb3e0c;
}
.shop-text_1 {
  text-transform: uppercase;
}
.shop-group {
  margin-top: 33.74rpx;
  padding-left: 10.78rpx;
  padding-right: 1.16rpx;
}
.shop-price-wrapper {
  margin-bottom: 2rpx;
  padding-bottom: 5rpx;
}
.group_4 {
  padding-bottom: 6.9rpx;
}
.shop-text_3 {
  color: #bb3e0c;
  font-size: 20rpx;
  font-family: PingFang SC;
  line-height: 20rpx;
}
.shop-text_2 {
  color: #bb3e0c;
  font-size: 30rpx;
  font-family: HarmonyOSSans;
  font-weight: 700;
  line-height: 30rpx;
  letter-spacing: -1.16rpx;
}
.pos {
  position: absolute;
  left: 13.16rpx;
  bottom: 0;
}
.shop-text_4 {
  margin-left: 44.76rpx;
  color: #bb3e0c;
  font-size: 20rpx;
  font-family: HarmonyOSSansSC;
  font-weight: 700;
  line-height: 20rpx;
}
.shop-text_5 {
  color: #a7a7a7;
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 24rpx;
}
</style>
