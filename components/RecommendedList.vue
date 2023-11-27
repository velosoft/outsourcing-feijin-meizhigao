<template>
  <view class="flex-col view">
    <view class="flex-col tabs-top">
      <u-tabs
      :list="tabList"
      lineWidth="20"
      lineHeight="6"
      lineColor="#b09053"
      :activeStyle="{
        color: '#030305',
        fontFamily: 'PingFangSC-Medium',
        // fontSize: '32rpx',
        transform: 'scale(1.05)'
      }"
      :inactiveStyle="{
        color: '#bcbcbc',
        fontFamily: '苹方',
        // fontSize: '30rpx',
        transform: 'scale(1)'
      }"
      itemStyle="padding-left: 26.5px; padding-right: 26.5px; height: 36px;"
      @click="click"
    ></u-tabs>
    </view>
    <view class="flex-col justify-start double-list-view">
      <view class="flex-row">
        <view class="flex-col justify-start left-list">
          <ShopItem v-for="(item, index) in items" :key="index"></ShopItem>
        </view>
        <view class="flex-col justify-start right-list ml-15">
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
      tabList: [
        {
          name: "商品推荐",
        },
        {
          name: "服务推荐",
        },
        {
          name: "课程推荐",
        },
      ],
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
  .tabs-top{
    margin-top: 16rpx
  }
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
  .double-list-view {
    padding: 24rpx 0 24rpx;
    .left-list {
      flex: 1 1 330rpx;
    }
    .right-list {
      flex: 1 1 330rpx;
      .a-i-background-image-wrapper_2 {
        position: relative;
      }
    }
  }
}
</style>
