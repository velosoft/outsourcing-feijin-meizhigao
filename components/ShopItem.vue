<template>
  <view class="flex-col shop-item">
    <image
      class="a-i-background-image shop-a-i-background-image"
      src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=69f26c588c4040c0a2ae6b1d6c407546.png"
    />
    <text class="self-start shop-text">厨房定制收纳服务</text>
    <view class="flex-row self-stretch shop-equal-division">
      <view class="flex-col items-center shop-text-wrapper">
        <text class="shop-CenterPannel-font shop-text_1">新品上市</text>
      </view>
      <view class="flex-col items-center shop-text-wrapper_1 shop-ml-5">
        <text class="shop-CenterPannel-font shop-text_1">好评推荐</text>
      </view>
      <view class="flex-col items-center shop-text-wrapper shop-view shop-ml-5">
        <text class="shop-CenterPannel-font shop-text_1">新客优选</text>
      </view>
    </view>
    <view class="flex-row self-stretch relative shop-group">
      <text class="self-start shop-CenterPannel-font">秒杀价</text>
      <text class="self-center shop-text_2">200</text>
      <text class="shop-text_3 shop-pos">￥</text>
      <text class="self-start relative shop-text_4">.00</text>
      <text class="self-center relative shop-text_5">100人购买</text>
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

<style scoped lang="less">
.shop-item {
  padding-bottom: 34.48rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=1fe6dd1ef410d3f49fa1ec58d8026298.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .a-i-background-image {
    flex-shrink: 0;
    align-self: stretch;
  }
  .shop-a-i-background-image {
    width: 330rpx;
    height: 330rpx;
  }
  .shop-text {
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
    .shop-text-wrapper {
      flex: 1 1 96rpx;
      padding: 3.44rpx 0 5.96rpx;
      background-color: #fff1ed;
      border-radius: 4rpx;
      height: 28rpx;
    }
    .shop-text-wrapper_1 {
      padding: 3.44rpx 0 5.98rpx;
      flex: 1 1 96rpx;
      background-color: #fff1ed;
      border-radius: 4rpx;
      height: 28rpx;
    }
    .shop-ml-5 {
      margin-left: 10rpx;
    }
    .shop-text_1 {
      text-transform: uppercase;
    }
    .shop-view {
      margin-right: 2rpx;
    }
  }
  .shop-group {
    margin-top: 33.74rpx;
    padding-left: 10.78rpx;
    padding-right: 1.16rpx;
    .shop-text_2 {
      margin-left: 14.6rpx;
      color: #bb3e0c;
      font-size: 30rpx;
      font-family: HarmonyOSSans;
      font-weight: 700;
      line-height: 30rpx;
      letter-spacing: -1.16rpx;
    }
    .shop-text_3 {
      color: #bb3e0c;
      font-size: 20rpx;
      font-family: PingFang SC;
      line-height: 20rpx;
    }
    .shop-pos {
      position: absolute;
      left: 74.22rpx;
      top: 0;
    }
    .shop-text_4 {
      margin-left: 1.6rpx;
      margin-top: 1.34rpx;
      color: #bb3e0c;
      font-size: 20rpx;
      font-family: HarmonyOSSansSC;
      font-weight: 700;
      line-height: 20rpx;
    }
    .shop-text_5 {
      margin-left: 39.86rpx;
      color: #a7a7a7;
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
    }
  }
  .shop-CenterPannel-font {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #bb3e0c;
  }
}
</style>
