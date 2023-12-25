<template>
  <view class="flex-row">
    <text class="font_2">{{text}}</text>
    <image
      class="shrink-0 self-start image_7 ml-4"
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
  .font_2 {
    color: #b09053;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .image_7 {
    margin-top: 16rpx;
    width: 8rpx;
    height: 14rpx;
  }
</style>