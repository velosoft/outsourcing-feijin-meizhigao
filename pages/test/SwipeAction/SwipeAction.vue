<template>
  <view style="padding: 200rpx 0">
    <text>滑动单元格</text>
    <u-swipe-action class="swiper-action-wrap">
      <u-swipe-action-item :options="options1">
        <view class="swipe-action">
          <view class="swipe-action__content">
            <text class="swipe-action__content__text">基础使用</text>
          </view>
        </view>
      </u-swipe-action-item>
    </u-swipe-action>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options1: [
        {
          text: "删除",
          style: {
            borderRadius: '20rpx 0px, 0px, 20rpx'
          },
        },
      ],
    };
  },
};
</script>

<style lang="less">
.swiper-action-wrap {
  width: 100%;
}

.swiper-action-wrap ::v-deep .u-swipe-action-item__right__button__wrapper {
  width: 100rpx;
  height: 100%;
  padding: 0 10rpx !important;
  border-radius: 20rpx 0px, 0px, 20rpx !important;
  background: #bb3e0c !important;
}

.swiper-action-wrap
  ::v-deep
  .u-swipe-action-item__right__button__wrapper__text {
  font-family: PingFang SC;
  font-size: 28rpx;
  font-weight: 700;
  line-height: 28rpx;
}

.swipe-action {
  height: 200rpx;
  margin: 0 32rpx;
  background-color: blue;
}
</style>
