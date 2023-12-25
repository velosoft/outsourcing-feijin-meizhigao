<template>
  <view class="flex-col wrap">
    <view class="flex-col items-center">
      <image class="icon_empty_02" src="/personal/static/images/personal/icon_empty.png" />
      <text class="empty-text mt-12">暂无内容~</text>
    </view>
    <u-button class="mt-298" text="+ 新增收货地址"></u-button>
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
  .mt-298 {
    margin-top: 596rpx;
  }
  .wrap {
    padding: 224rpx 128rpx 208rpx;
    overflow-y: auto;
    .icon_empty_02 {
      width: 408rpx;
      height: 286rpx;
    }
    .empty-text {
      color: #a7a7a7;
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 28rpx;
    }
  }
</style>
