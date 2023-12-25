<template>
  <view class="flex-row items-center button_1">
    <text class="font_2">{{text}}</text>
    <image
      class="shrink-0 image_7 ml-4"
      src="/myOrder/static/images/icon_golden_right_arrow.png"
    />
  </view>
</template>

<script>
  export default {
    components: {},
    props: { text: { type: String, default: `` } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .button_1 {
    padding: 8rpx;
    border-radius: 8rpx;
    border-left: solid 1rpx #dec9a0;
    border-right: solid 1rpx #dec9a0;
    border-top: solid 1rpx #dec9a0;
    border-bottom: solid 1rpx #dec9a0;
    .font_2 {
      color: #b09053;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .image_7 {
      width: 8rpx;
      height: 14rpx;
    }
  }
</style>