<template>
  <view class="flex-col justify-start relative section">
    <view class="flex-col group_2">
      <image
        class="self-center image_7"
        src="https://dev.ft.velosoft.cn/api/image?token=6577372b740f740012ac401b&name=66d559da3ae5f4c4f39d1e25b18451fe.png"
      />
      <view
        class="flex-col justify-start items-center self-end text-wrapper mt-120"
      >
        <text class="font_1">1/6</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-120 {
  margin-top: 240rpx;
}
.section {
  padding: 112rpx 0 32rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=6577372b740f740012ac401b&name=152403078e956c93315b150349ee71e6.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .group_2 {
    padding: 200rpx 32rpx 0;
    .image_7 {
      width: 114rpx;
      height: 114rpx;
    }
    .text-wrapper {
      padding: 8rpx 0 16rpx;
      background-color: #0000004d;
      border-radius: 24rpx;
      width: 80rpx;
      .font_1 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #ffffff;
      }
    }
  }
}
</style>
