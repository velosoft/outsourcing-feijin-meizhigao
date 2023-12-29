<template>
  <view class="flex-row items-stretch">
    <image class="shrink-0 cover-img" src="https://picsum.photos/90/90" />
    <view class="flex-col flex-1 justify-between ml-10">
      <text class="line-clamp-two font-title"
        >定制卧室收纳柜新疆包邮卧室床头包卧室床头厨房收纳服务,床头包卧室床头厨房收纳服务</text
      >
      <view class="flex-row justify-between mt-6">
        <text class="flex-1 line-clamp-one font text-desp">中号；白色,中号；白色,中号；白色,中号；白色</text>
        <text class="font text-count">x1</text>
      </view>
      <view class="flex-col justify-start items-start mt-6">
        <view class="flex-row items-end">
          <price class="cf-black-font" :price="200"></price>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { Price } from '@/components/Price/Price';
  export default {
    components: { Price },
    props: { prodInfo: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .cover-img {
    border-radius: 16rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .font-title {
    color: #111111;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 40rpx;
  }
  .font {
    font-size: 26rpx;
    line-height: 36rpx;
  }
  .text-desp {
    color: #6d6d6d;
  }
  .text-count {
    color: #828385;
  }
  .font-xs {
    font-size: 20rpx;
    line-height: 24rpx;
    color: #111111;
  }
  .text-weight {
    font-weight: 500;
  }
  .text-price {
    color: #111111;
    font-size: 32rpx;
    line-height: 36rpx;
  }
</style>
