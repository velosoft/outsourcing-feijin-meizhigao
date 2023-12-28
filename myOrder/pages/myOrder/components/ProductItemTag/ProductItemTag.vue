<template>
  <view class="flex-row">
    <view class="relative thumb-size">
      <image
        class="thumb-size"
        src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=mock_thumb_008.png"
      />
      <view class="flex-col justify-center items-center text-wrapper pos" v-if="true">
        <text class="tag-label tag-text">已使用</text>
      </view>
    </view>
    <view class="flex-col justify-between flex-1 ml-10">
      <text class="line-clamp-two title text"
        >定制卧室收纳柜新疆包邮卧室床头,定制卧室收纳柜新疆包邮卧室床头,定制卧室收纳柜新疆包邮卧室床头</text
      >
      <view class="flex-row justify-between items-center">
        <text class="flex-1 line-clamp-one size-label">中号；白色</text>
        <text class="product-size size-num">x1</text>
      </view>
      <view class="flex-row justify-between items-center">
        <price class="cf-black-font" :price="100"></price>
        <view class="flex-col items-start status-wrap">
          <text class="title status" v-if="!showReturnd">补购商品</text>
          <text class="title status-returned" v-else>已退回</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { Price } from '@/components/Price/Price';
  export default {
    components: { Price },
    props: {
      showReturnd: Boolean,
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .thumb-size {
    border-radius: 16rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .text-wrapper {
    height: 36rpx;
    background-color: #9c9c9f;
    border-radius: 16rpx 0rpx 16rpx 0rpx;
    width: 90rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    top: 0;
  }
  .tag-label {
    font-size: 20rpx;
    line-height: 28rpx;
  }
  .tag-text {
    color: #ffffff;
  }
  .title {
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .text {
    color: #111111;
    font-weight: 500;
  }
  .size-label {
    color: #6d6d6d;
    font-size: 26rpx;
  }
  .product-size {
    font-size: 28rpx;
    line-height: 36rpx;
  }
  .size-num {
    color: #6d6d6d;
    font-size: 26rpx;
  }
  .status-wrap {
    margin-top: 10rpx;
  }
  .status {
    color: #b09053;
    font-weight: 400;
  }
  .status-returned {
    color: #6d6d6d;
    font-weight: 400;
  }
</style>
