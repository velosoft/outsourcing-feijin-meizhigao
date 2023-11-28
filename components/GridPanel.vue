<template>
  <view class="flex-col">
    <view class="flex-row items-baseline title-wrap">
      <text class="title-font">从收纳开始,</text>
      <text class="ml-4 title-text">探索家具灵感</text>
    </view>
    <view class="mt-12 flex-col relative">
      <swiper
        class="nav-swiper"
        style="height: 184rpx"
        autoplay="true"
        @change="change"
      >
        <swiper-item v-for="(item, index) in swiperItems" :key="index">
          <view class="flex-row items-center equal-division">
            <view
              class="flex-col items-center equal-division-item"
              v-for="(item, index) in items"
              :key="index"
            >
              <image class="item-image" :src="item.icon" />
              <text class="item-text">{{ item.text }}</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
      <view class="flex-row grid-swiper">
        <view
          class="indicator-dots"
          :class="{ active: index == current }"
          v-for="(item, index) in swiperItems"
          :key="index"
        ></view>
      </view>
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
      current: 0,
      items: [
        {
          icon: "/static/mock/grid-panel-icon_0.png",
          text: "客厅收纳",
        },
        {
          icon: "/static/mock/grid-panel-icon_1.png",
          text: "衣柜收纳",
        },
        {
          icon: "/static/mock/grid-panel-icon_2.png",
          text: "厨房收纳",
        },
        {
          icon: "/static/mock/grid-panel-icon_3.png",
          text: "卧室收纳",
        },
        {
          icon: "/static/mock/grid-panel-icon_4.png",
          text: "杂物房收纳",
        },
      ],
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
.title-wrap {
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
.grid-swiper {
  position: absolute;
  bottom: 0;
  right: 50%;
  margin-right: -30rpx;
  background-color: #f6f6f6;
  border-radius: 4rpx;
  width: 60rpx;
  height: 8rpx;
  .indicator-dots {
    border-radius: 4rpx;
    width: 30rpx;
    height: 8rpx;
  }
  .active {
    background-color: #b09053;
  }
}
.equal-division {
  padding: 24rpx 0;
  .equal-division-item {
    flex: 1 1 146rpx;
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
