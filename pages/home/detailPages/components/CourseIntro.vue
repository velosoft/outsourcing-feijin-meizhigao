<template>
  <view class="flex-col container"
    ><u-tabs
      class="default-tabs"
      :list="tabs"
      :activeStyle="{ color: '#030305', fontWeight: '700' }"
      :inactiveStyle="{ color: '#a7a7a7' }"
      :scrollable="false"
      @change="onChange"
    ></u-tabs
    ><view class="flex-col items-center image-wrapper"
      ><image class="intro-images" :src="detail" /></view
  ></view>
</template>

<script>
export default {
  components: {},
  props: {
    imageList: { type: String, default: () => {} },
  },
  data() {
    return {
      tabs: [
        {
          name: "课程介绍",
        },
        {
          name: "课程目录",
        },
      ],
      detail: "/static/mock/course_detail_image.png",
    };
  },

  methods: {
    onChange(idx) {
      this.detail = this.imageList[idx];
    },
  },
};
</script>

<style scoped lang="less">
.container {
  margin: 16rpx 0;
  background-color: #ffffff;
  border-radius: 12rpx 12rpx 0 0;
  .image-wrapper {
    margin: 0 28rpx;
    padding-top: 32rpx;
    .intro-images {
      background-color: #ffffff;
      width: 654rpx;
      height: 4708rpx;
    }
  }
}
.default-tabs {
  background-color: #ffffff;
  /deep/ .u-tabs__wrapper__nav__item {
    align-items: start !important;
    padding-top: 22rpx !important;

    .u-tabs__wrapper__nav__item__text {
      font-size: 28rpx !important;
      line-height: 28rpx !important;
    }
  }

  /deep/ .u-tabs__wrapper__nav__line {
    width: 44rpx !important;
    bottom: 0 !important;
    background-color: #b09053 !important;
  }
}
</style>
