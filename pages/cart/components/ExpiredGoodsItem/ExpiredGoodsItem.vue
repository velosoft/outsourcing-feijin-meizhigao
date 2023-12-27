<template>
  <view class="flex-row item-padding list-item items-center">
    <view class="flex-col items-center expired-status justify-center"><text class="expired-text">失效</text></view>
    <image class="thumb" src="/static/images/mock_thumb_07.png" />
    <view class="flex-col self-stretch flex-1 justify-between good-con">
      <view class="flex-col">
        <text class="line-clamp-one goods-title">{{ item.productName }}</text>
        <text class="line-clamp-two desc mt-8">{{ item.specs[0].title }}：{{ item.specs[0].options[0] }}</text>
      </view>
      <price class="cf-black-font" :price="item.productPrice" />
    </view>
  </view>
</template>

<script>
  import Price from '@/components/Price/Price';
  export default {
    components: { Price },
    props: {
      item: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .item-padding {
    padding: 0 12rpx;
    .expired-status {
      background-color: #d3d3d3;
      border-radius: 16rpx;
      width: 60rpx;
      height: 36rpx;
      .expired-text {
        font-size: 20rpx;
        font-family: PingFangSC;
        line-height: 20rpx;
        color: #ffffff;
      }
    }
    .thumb {
      margin-left: 12rpx;
      width: 180rpx;
      height: 180rpx;
    }
    .good-con {
      margin-left: 24rpx;
      margin-right: 16rpx;
      .goods-title {
        font-size: 28rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
        color: #030305;
      }
      .desc {
        font-size: 24rpx;
        font-family: PingFangSC;
        line-height: 24rpx;
        color: #a7a7a7;
      }
    }
  }
  .list-item {
    &:first-child {
      margin-top: 0;
    }
  }
</style>
