<template>
  <view class="flex-col">
    <view class="flex-row items-baseline title-wrap">
      <text class="title-font">从收纳开始,</text>
      <text class="ml-4 title-text">探索家具灵感</text>
    </view>
    <view class="mt-12 flex-col">
      <swiper
        class="nav-swiper"
        style="height: 184rpx"
        autoplay="true"
        indicator-dots="true"
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
      items: [
        {
          icon: "/static/mock/6087d03087f61aefa21604e8a8260437.png",
          text: "客厅收纳",
        },
        {
          icon: "/static/mock/61bc2017b76d4955d49230334853d186.png",
          text: "衣柜收纳",
        },
        {
          icon: "/static/mock/3824feb130eaa18a0145cbe83a7076df.png",
          text: "厨房收纳",
        },
        {
          icon: "/static/mock/b5dd0a42660421740bd5ff8e89a49f51.png",
          text: "卧室收纳",
        },
        {
          icon: "/static/mock/e20217164f231e0999467a2457261afb.png",
          text: "杂物房收纳",
        },
      ],
    };
  },

  methods: {},
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
