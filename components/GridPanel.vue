<template>
  <view class="flex-col">
    <view class="flex-row items-baseline title-wrap">
      <text class="title-font">从收纳开始,</text>
      <text class="ml-4 title-text">探索家具灵感</text>
    </view>
    <view class="mt-12 flex-col">
      <swiper class="nav-swiper" style="height: 184rpx" autoplay="true" indicator-dots="true">
        <swiper-item v-for="(item, index) in swiperItems" :key="index">
          <view class="flex-row items-center equal-division">
            <view
              class="flex-col items-center equal-division-item"
              v-for="(item, index) in items"
              :key="index"
            >
              <image
                class="item-image"
                src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=6087d03087f61aefa21604e8a8260437.png"
              />
              <text class="item-text">客厅收纳</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      swiperItems: [null, null],
      items: [null, null, null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.title-wrap {
  padding: 0 32rpx;
  .title-font {
    color: #000000;
    font-size: 30rpx;
    font-family: PingFang SC;
    line-height: 30.24rpx;
  }
  .title-text {
    color: #a7a7a7;
    font-size: 28rpx;
    font-family: PingFang SC;
    line-height: 28rpx;
  }
}
.nav-swiper {
  /deep/ .uni-swiper-dots {
    // 指示点整个区域
    height: 8rpx;
    width: 60rpx !important;
    bottom: 0;
    background-color: #f6f6f6;
  }
  /deep/ .uni-swiper-dot {
    // 指示点元素默认样式
    background-color: #f6f6f6;
    width: 30rpx;
    height: 8rpx;
    border-radius: 4rpx;
    margin-right: unset !important;
  }
  /deep/ .uni-swiper-dot-active {
    // 指示点元素激活（当前选中）状态样式
    background-color: #b09053;
    width: 30rpx;
    height: 8rpx;
    border-radius: 4rpx;
  }
}
.equal-division {
  padding: 24rpx 8rpx;
  .equal-division-item {
    flex: 1 1 146.8rpx;
    .item-image {
      width: 96rpx;
      height: 96rpx;
    }
    .item-text {
      margin-top: 16rpx;
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #030305;
    }
  }
}
.section {
  margin-top: -8rpx;
  background-color: #f6f6f6;
  border-radius: 4rpx;
  width: 60rpx;
  .section_2 {
    background-color: #b09053;
    border-radius: 4rpx;
    width: 30rpx;
    height: 8rpx;
  }
}
</style>
