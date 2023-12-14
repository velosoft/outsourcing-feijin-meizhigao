<template>
  <u-swiper
    :list="list"
    @change="onChange"
    :height="swiperHeight"
    indicatorStyle="right: 20px"
  >
    <view class="flex-col items-center indicator-wrapper" slot="indicator">
      <text class="indicator-font indicator-text"
        >{{ currentNum + 1 }}/{{ list.length }}</text
      >
    </view>
  </u-swiper>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
  },
  data() {
    return {
      currentNum: 0,
      swiperHeight: 0,
    };
  },
  mounted() {
    this.swiperHeight = uni.upx2px(750);
  },
  methods: {
    onChange(e) {
      this.currentNum = e.current;
    },
  },
};
</script>

<style scoped lang="less">
.indicator-wrapper {
  align-self: flex-end;
  padding: 8rpx 0;
  background-color: #0000004d;
  border-radius: 24rpx;
  width: 80rpx;
  .indicator-font {
    font-size: 24rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #ffffff;
  }
  .indicator-text {
    line-height: 24rpx;
  }
}
</style>
