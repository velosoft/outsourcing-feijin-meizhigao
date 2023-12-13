<template>
  <u-swiper
    :list="swiperList"
    @change="onChange"
    :height="swiperHeight"
    indicatorStyle="right: 20px"
  >
    <view class="flex-col items-center indicator-wrapper" slot="indicator">
      <text class="indicator-font indicator-text"
        >{{ currentNum + 1 }}/{{ swiperList.length }}</text
      >
    </view>
  </u-swiper>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    activityStatus: { type: Number },
  },
  data() {
    return {
      currentNum: 0,
      swiperHeight: 0,
      swiperList: [
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        },
        {
          url: "https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=5d9bdfc11721ad48076565939b4b77dd.png",
        },
        {
          url: "https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=5d9bdfc11721ad48076565939b4b77dd.png",
        },
      ],
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
