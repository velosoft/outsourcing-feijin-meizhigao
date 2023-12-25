<template>
  <view class="flex-col relative order-addr">
    <view class="flex-row addr">
      <image class="shrink-0 self-start addr-icon" src="/myOrder/static/images/icon_addr.png" />
      <view class="flex-col items-start flex-1 ml-12">
        <view class="flex-row">
          <text class="name">{{ addr.receiverName }}</text>
          <text class="name ml-4">{{ addr.receiverPhone }}</text>
        </view>
        <text class="line-clamp-one addr mt-8">{{ addr.receiverAddress }}</text>
      </view>
    </view>
    <image class="bottom-line" src="/myOrder/static/images/icon_addr_line2.png" />
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      addr: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .order-addr {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .addr {
    color: #9e9ea0;
    font-size: 26rpx;
    line-height: 36rpx;
  }
  .addr-icon {
    margin-top: 8rpx;
    width: 34rpx;
    height: 36rpx;
  }
  .name {
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: 500;
    color: #111111;
  }
  .bottom-line {
    position: absolute;
    left: 16rpx;
    bottom: 0;
    height: 4rpx;
    width: calc(100% - 32rpx);
  }
</style>
