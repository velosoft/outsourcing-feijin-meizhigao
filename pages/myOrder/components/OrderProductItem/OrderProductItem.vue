<template>
<view class="flex-row">
  <view class="flex-col justify-start items-center shrink-0 relative image-wrapper">
    <image class="shrink-0 image" :src="product.productImageURL" />
    <view class="flex-col justify-start items-center seckill-wrapper pos" v-if="product.isSeckill">
      <text class="seckill">秒杀</text>
    </view>
  </view>
  <view class="flex-col flex-1 ml-12 justify-between">
    <text class="name">{{product.productName}}</text>
    <view class="flex-row justify-between mt-8">
      <text class="desc desc-color">{{product.productDescription}}</text>
      <text class="desc count-color">{{`x${product.productQuantity}`}}</text>
    </view>
    <view class="flex-col mt-8">
      <view class="flex-row items-center" v-if="product.isSeckill">
        <text class="desc text_6">秒杀价</text>
        <text class="font_2 text_7">￥</text>
        <text class="text_5">200</text>
        <text class="font_2 text_8">.00</text>
      </view>
      <view class="flex-row items-baseline" v-if="!product.isSeckill">
        <text class="text_13">￥</text>
        <text class="text_1">200</text>
        <text class="text_14">.00</text>
      </view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  components: {},
  props: {
    product: {
      type: Object,
      default: () => ({
        productName: '全屋整理收纳服务（单次）',
        productDescription: '鎏金岁月三层长45宽30高75',
        productPrice: 200,
        productQuantity: 2,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
        isSeckill: false,
        afterSaleStatus: '正常',
        productStatus: '正常',
      }),
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="css">
.image-wrapper {
  margin: 4rpx 0;
  overflow: hidden;
  border-radius: 16rpx;
  background-size: 100%, 100%;
  width: 180rpx;
  height: 180rpx;
}
.image {
  width: 180rpx;
  height: 180rpx;
}
.seckill-wrapper {
  background-color: #bb3e0c;
  border-radius: 16rpx 0rpx;
  width: 96rpx;
}
.pos {
  position: absolute;
  left: 0;
  top: 0;
}
.seckill {
  color: #ffffff;
}
.name {
  color: #2d2e32;
  font-size: 28rpx;
  font-weight: 500;
  line-height: 40rpx;
  text-align: left;
}
.desc {
  font-size: 26rpx;
  line-height: 36rpx;
}
.desc-color {
  color: #8c8f95;
}
.count-color {
  color: #828385;
}
.text_6 {
  color: #bb3e0c;
  font-size: 24rpx;
  font-weight: 500;
  line-height: 34rpx;
}
.font_2 {
  font-size: 20rpx;
  color: #bb3e0c;
}
.text_7 {
  font-weight: 500;
  line-height: 28rpx;
}
.text_5 {
  color: #bb3e0c;
  font-size: 32rpx;
  line-height: 36rpx;
}
.text_8 {
  margin-left: 4rpx;
  line-height: 24rpx;
}
.text_13 {
  color: #111111;
  font-size: 20rpx;
  font-family: 'PingFang SC';
  font-weight: 500;
  line-height: 28rpx;
}
.text_1 {
  color: #111111;
  font-size: 32rpx;
  font-family: '.AppleSystemUIFont';
  line-height: 36rpx;
}
.text_14 {
  margin-left: 4rpx;
  color: #111111;
  font-size: 20rpx;
  font-family: '.AppleSystemUIFont';
  line-height: 24rpx;
}
</style>
