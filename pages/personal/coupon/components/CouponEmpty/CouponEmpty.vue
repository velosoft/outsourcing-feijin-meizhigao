<template>
  <view class="flex-col justify-start items-center self-stretch wrap">
    <view class="flex-col items-center">
      <image class="empty-image" src="/static/images/icon_coupon_empty.png" />
      <text class="font mt-16">暂无内容~</text>
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
  .wrap {
    padding: 168rpx 0 0;

    .font {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
      color: #4c4c4c;
    }
  }

  .empty-image {
    width: 408rpx;
    height: 308rpx;
  }
</style>
