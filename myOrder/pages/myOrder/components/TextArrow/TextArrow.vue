<template>
  <view class="flex-row items-center" @click="onClick">
    <text class="label">{{ text }}</text>
    <image class="shrink-0 icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
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
  .label {
    color: #b09053;
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .icon-arrow {
    width: 8rpx;
    height: 14rpx;
  }
</style>
