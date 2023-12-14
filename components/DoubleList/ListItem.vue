<template>
  <navigator :url="detailUrl" hover-class="none">
    <view class="flex-col shop-item">
      <image class="shop-images" :src="image" mode="aspectFill" />
      <view class="flex-col shop-con">
        <text class="self-start shop-title line-two">{{ title }}</text>
        <view class="flex-row shop-equal-division">
          <view
            class="flex-col items-center justify-center shop-text-wrapper"
            v-for="(item, index) in tags"
            :key="index"
          >
            <text class="shop-font_01 shop-tag">{{ item }}</text>
          </view>
        </view>
        <view
          class="flex-row justify-between items-center self-stretch shop-group"
        >
          <view class="flex-row items-start self-stretch">
            <text class="shop-font_01">{{ discount }}</text>
            <view class="flex-row items-start ml-1">
              <text class="price-symbol">￥</text>
              <text class="price-number">{{ priceIntergetPart }}</text>
              <text class="price-decimal">.{{ priceDecimalPart }}</text>
            </view>
          </view>
          <text class="self-stretch buyers-text">{{ buyers + "人购买" }}</text>
        </view>
      </view>
    </view>
  </navigator>
</template>

<script>
export default {
  components: {},
  props: {
    itemId: String,
    type: String,
    image: { type: String, default: `` },
    title: { type: String, default: `` },
    tags: { type: Array, default: () => [] },
    discount: { type: String, default: `` },
    price: { type: Number, default: 0 },
    buyers: { type: Number, default: 0 },
  },
  data() {
    return {};
  },
  computed: {
    priceIntergetPart() {
      let val = Math.floor(this.price).toString();
      return val;
    },
    priceDecimalPart() {
      let val = this.price.toFixed(2).split(".")[1];
      return val;
    },
    detailUrl() {
      switch (this.type) {
        case "product":
          return `/pages/home/detailPages/productDetail?id=${
            this.itemId || ""
          }`;
        case "service":
          return `/pages/home/detailPages/serviceDetail?id=${
            this.itemId || ""
          }`;
        case "course":
          return `/pages/home/detailPages/courseDetail?id=${this.itemId || ""}`;
        default:
          return "";
      }
    },
  },
  methods: {},
};
</script>

<style scoped lang="css">
.ml-1 {
  margin-left: 2rpx;
}
.shop-item {
  padding-bottom: 34rpx;
  margin-bottom: 24rpx;
  background-color: #ffffff;
  border-radius: 10px;
}
.shop-images {
  width: 330rpx;
  height: 330rpx;
  flex-shrink: 0;
}
.shop-con {
  padding: 0 10rpx;
}
.shop-title {
  margin-top: 30rpx;
  color: #111111;
  font-size: 28rpx;
  font-family: PingFang SC;
  line-height: 39rpx;
}
.line-two {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.shop-equal-division {
  width: 100%;
  flex-wrap: wrap;
  margin-top: 8rpx;
  margin-left: -16rpx;
}

.shop-text-wrapper {
  padding: 0 12rpx;
  background-color: #fff1ed;
  border-radius: 4rpx;
  height: 28rpx;
  margin-top: 12rpx;
  margin-left: 16rpx;
}
.shop-font_01 {
  font-size: 20rpx;
  font-family: 苹方;
  line-height: 24rpx;
  color: #bb3e0c;
}
.shop-tag {
  text-transform: uppercase;
}
.shop-group {
  margin-top: 34rpx;
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
  margin-left: 4rpx;
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
