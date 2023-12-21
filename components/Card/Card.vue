<template>
  <view class="flex-col root">
    <view class="header">
      <view class="flex-row items-center">
        <view class="deco" v-if="headerTag" />
        <text class="title">{{ title }}</text>
      </view>
      <slot name="headerRight" />
    </view>

    <slot />
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      title: { type: String, default: `` },
      headerTag: { type: Boolean, default: false },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .root {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .header {
      display: flex;
      justify-content: space-between;

      .deco {
        background-color: #b09053;
        border-radius: 0rpx;
        width: 6rpx;
        height: 32rpx;
        margin-right: 12rpx;
      }
      .title {
        font-size: 30rpx;
        line-height: 42rpx;
        font-weight: 600;
        color: #2d2e32;
      }
    }
  }
</style>
