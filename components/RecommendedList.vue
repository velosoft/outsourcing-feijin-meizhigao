<template>
  <view class="flex-col view">
    <view class="flex-col">
      <view
        class="flex-row justify-center items-center self-stretch relative group_15"
      >
        <text class="text_26 pos">商品推荐</text>
        <text class="font_9">服务推荐</text>
        <text class="font_9 pos_2">课程推荐</text>
      </view>
      <view class="self-start section_9"></view>
    </view>
    <view class="flex-col justify-start group_2">
      <view class="flex-row">
        <view class="flex-col justify-start group_3">
          <ShopItem v-for="(item, index) in items" :key="index"></ShopItem>
        </view>
        <view class="flex-col justify-start group_4 ml-15">
          <ShopItem
            class="a-i-background-image-wrapper_2"
            v-for="(item, index) in items_1"
            :key="index"
          ></ShopItem>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ShopItem from "./ShopItem.vue";

export default {
  components: { ShopItem },
  props: {},
  data() {
    return {
      items: [null],
      items_1: [null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.ml-15 {
  margin-left: 30rpx;
}
.view {
  padding: 0 30rpx 8rpx 30rpx;
  background-color: #f8f8f8;
  .group_15 {
    padding: 28.46rpx 52.68rpx 14rpx 53.96rpx;
    .text_26 {
      color: #030305;
      font-size: 32rpx;
      font-family: PingFangSC-Medium;
      line-height: 32rpx;
    }
    .pos {
      position: absolute;
      left: 53.96rpx;
      bottom: 11.44rpx;
    }
    .font_9 {
      font-size: 30rpx;
      font-family: 苹方;
      line-height: 30rpx;
      color: #bcbcbc;
    }
    .pos_2 {
      position: absolute;
      right: 52.68rpx;
      bottom: 14rpx;
    }
  }
  .section_9 {
    margin-left: 106rpx;
    background-color: #b09053;
    border-radius: 100rpx;
    width: 20rpx;
    height: 6rpx;
  }
  .group_2 {
    padding: 24rpx 0 24rpx;
    .group_3 {
      flex: 1 1 330rpx;
    }
    .group_4 {
      flex: 1 1 330rpx;
      .a-i-background-image-wrapper_2 {
        position: relative;
      }
    }
  }
}
</style>
