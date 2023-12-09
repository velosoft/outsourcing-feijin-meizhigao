<template>
  <view class="flex-col items-center group_9">
    <view class="flex-col items-center self-stretch">
      <image
        class="image_9"
        src="https://dev.ft.velosoft.cn/api/image?token=6573e33f740f740012ac1f41&name=4dcca65896ef1db4ce0ce836450faca4.png"
      />
      <text class="font_2 text_8 mt-11">没有更多了~</text>
    </view>
    <view
      class="flex-col justify-start items-center button_2 text-wrapper mt-43"
    >
      <text class="font_2 text_9">返回</text>
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
.mt-11 {
  margin-top: 22rpx;
}
.mt-43 {
  margin-top: 86rpx;
}
.group_9 {
  padding-top: 122rpx;
  .image_9 {
    width: 518rpx;
    height: 274rpx;
  }
  .font_2 {
    font-size: 24rpx;
    font-family: 苹方;
    line-height: 22.3rpx;
  }
  .text_8 {
    color: #6d6d6d;
  }
  .button_2 {
    align-self: center;
    .text_9 {
      color: #ffffff;
      line-height: 22.1rpx;
    }
  }
  .text-wrapper {
    padding: 21.9rpx 0 24rpx;
    background-color: #000000;
    border-radius: 40rpx;
    width: 180rpx;
  }
}
</style>
