<template>
  <view class="flex-col shop-item">
    <image
      class="shop-images"
      :src="image"
    />
    <text class="self-start shop-title">{{ title }}</text>
    <view class="flex-row self-stretch shop-equal-division">
      <view
        class="flex-col items-center shop-text-wrapper"
        :class="{ 'shop-ml-5': index !== 0 }"
        v-for="(item, index) in tags"
        :key="index"
      >
        <text class="shop-font_01 shop-tag">{{ item }}</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center self-stretch shop-group">
      <view class="flex-row items-center self-stretch shop-price-wrapper">
        <text class="shop-font_01">秒杀价</text>
        <view class="flex-row items-center shrink-0 price-wrap ml-1">
          <text class="price-symbol">￥</text>
          <text class="price-number">{{ price }}</text>
          <text class="price-decimal">.00</text>
        </view>
      </view>
      <text class="buyers-text">{{ buyers + "人购买" }}</text>
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
.shop-images {
  width: 330rpx;
  height: 330rpx;
  flex-shrink: 0;
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

.shop-equal-division > .shop-text-wrapper:not(:first-child){
  margin-left: 16rpx;
}
.shop-text-wrapper {
  flex: 1 1 96rpx;
  padding: 4rpx 0 6rpx;
  background-color: #fff1ed;
  border-radius: 4rpx;
  height: 28rpx;
}
.shop-font_01 {
  font-size: 20rpx;
  font-family: 苹方;
  line-height: 20rpx;
  color: #bb3e0c;
}
.shop-tag {
  text-transform: uppercase;
}
.shop-group {
  margin-top: 34rpx;
  padding-left: 10rpx;
  padding-right: 1rpx;
}
.shop-price-wrapper {
  margin-bottom: 2rpx;
  padding-bottom: 5rpx;
}
.price-wrap {
  padding-bottom: 7rpx;
}
.price-symbol {
  color: #bb3e0c;
  font-size: 20rpx;
  font-family: PingFang SC;
  line-height: 20rpx;
}
.price-number {
  margin-left: -4rpx;
  color: #bb3e0c;
  font-size: 30rpx;
  font-family: HarmonyOSSans;
  font-weight: 700;
  line-height: 30rpx;
  letter-spacing: -1rpx;
}
.price-decimal {
  color: #bb3e0c;
  font-size: 20rpx;
  font-family: HarmonyOSSansSC;
  font-weight: 700;
  line-height: 20rpx;
}
.buyers-text {
  color: #a7a7a7;
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 24rpx;
}
.shop-ml-5 {
  margin-left: 10rpx;
}
</style>
