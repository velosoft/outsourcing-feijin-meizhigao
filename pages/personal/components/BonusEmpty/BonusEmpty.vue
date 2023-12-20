<template>
  <view class="flex-col wrap">
    <view class="flex-col items-center self-stretch">
      <image
        class="icon"
        src="https://dev.ft.velosoft.cn/api/image?token=6581be43d6bce000114d3eb2&name=mock_bonus_coin_icon_empty.png"
      />
      <text class="empty-label empty-text mt-8">没有更多了~</text>
    </view>
    <view class="flex-col justify-center items-center self-center mt-40 back-btn">返回</view>
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
    padding: 120rpx 0 336rpx;
    .icon {
      width: 518rpx;
      height: 274rpx;
    }
    .empty-label {
      font-size: 24rpx;
      font-family: 'PingFang SC';
      line-height: 34rpx;
    }
    .empty-text {
      color: #6d6d6d;
    }
    .back-btn {
      width: 180rpx;
      height: 68rpx;
      background: #000000;
      border-radius: 40rpx;

      font-size: 24rpx;
      font-family: 'PingFangSC';
      font-weight: 500;
      color: #ffffff;
      line-height: 34rpx;
    }
  }
</style>
