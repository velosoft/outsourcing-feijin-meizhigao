<template>
  <view class="flex-row relative swiper-box">
    <swiper
      class="banner-swiper"
      style="height: 516rpx; width: 750rpx"
      circular
      :autoplay="true"
      @change="change"
    >
      <swiper-item v-for="(item, index) in items" :key="index">
        <image
          class="swiper-images"
          src="../../static/mock/home-swiper-image.png"
          mode="aspectFill"
          lazy-load="false"
        >
        </image>
      </swiper-item>
    </swiper>
    <view class="flex-row indicator-wrapper">
      <view
        class="indicator-dots"
        :class="{ active: index == current }"
        v-for="(item, index) in items"
        :key="index"
      ></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [null, null, null],
      current: 0,
    };
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
  },
};
</script>

<style scoped lang="less">
.swiper-box {
  width: 100%;
  height: 520rpx;
  .swiper-images {
    width: 750rpx;
    height: 520rpx;
  }
  .indicator-wrapper {
    position: absolute;
    bottom: 26rpx;
    right: 20rpx;

    .indicator-dots {
      background-color: #ffffff80;
      border-radius: 20rpx;
      width: 36rpx;
      height: 4rpx;
      margin-left: 10rpx;
    }
    .active {
      background-color: #ffffff;
    }
  }
}
</style>
