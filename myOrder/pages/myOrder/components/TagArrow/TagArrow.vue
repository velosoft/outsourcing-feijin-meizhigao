<template>
  <view class="flex-row items-center wrapper" @click="onClick">
    <text class="label">{{ text }}</text>
    <image class="shrink-0 icon_arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
  </view>
</template>

<script>
  export default {
    components: {},
    props: { text: { type: String, default: `` } },
    data() {
      return {};
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
</script>

<style scoped lang="less">
  .wrapper {
    padding: 8rpx;
    border-radius: 8rpx;
    border-left: solid 1rpx #dec9a0;
    border-right: solid 1rpx #dec9a0;
    border-top: solid 1rpx #dec9a0;
    border-bottom: solid 1rpx #dec9a0;
    .label {
      color: #b09053;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .icon_arrow {
      width: 8rpx;
      height: 14rpx;
    }
  }
</style>
