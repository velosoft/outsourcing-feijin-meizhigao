<template>
  <view class="flex-col products-wrapper">
    <text class="self-center title">商品信息</text>
    <view class="tabs">
      <u-tabs
        class="tabs-yellow-wide full-width"
        :list="tabs"
        lineWidth="58rpx"
        lineHeight="18rpx"
        :activeStyle="{
          color: '#111111',
          fontWeight: 500,
        }"
        :inactiveStyle="{
          color: '#9E9EA0',
          fontWeight: 500,
        }"
        @change="onChangeTab"
      ></u-tabs>
    </view>
    <view class="flex-col products mt-20">
      <view class="flex-row mt-12 list-item" v-for="(item, index) in items" :key="index">
        <image
          class="image"
          src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=mock_thumb_008.png"
        />
        <view class="flex-col flex-1 ml-10 justify-between">
          <view>
            <text class="line-clamp-two title">定制卧室收纳柜新疆包邮卧室床头包</text>
            <view class="count-down mt-2">活动将在12月12日00:00结束</view>
          </view>
          <view class="flex-row justify-between">
            <text class="desc">中号；白色</text>
            <text class="count" v-if="index % 2 === 0">x1</text>
            <view class="flex-row" v-else>
              <text class="count">退回数量</text>
              <text class="count ml-9">1</text>
            </view>
          </view>
          <view class="price-wrapper" :class="{ seckill: index % 2 === 0 }">
            <text class="seckill-price" v-if="index % 2 === 0">秒杀价</text>
            <text class="price-number-10">￥</text>
            <text class="price-number-16">100</text>
            <text class="price-number-10">.00</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null, null],
        tabs: [
          {
            name: '常规商品（10）',
          },
          {
            name: '定制清单（10）',
          },
        ],
        tab: 0,
      };
    },
    methods: {
      onChangeTab(val) {
        this.tab = val.index;
      },
    },
  };
</script>

<style scoped lang="less">
  .ml-9 {
    margin-left: 18rpx;
  }
  .products-wrapper {
    padding: 36rpx 0 70rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title {
    color: #111111;
    font-size: 32rpx;
    font-weight: 500;
    line-height: 44rpx;
  }
  .tabs {
    margin-top: 10rpx;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10rpx;
  }
  .products {
    padding: 0 46rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .image {
    border-radius: 16rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .title {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #111111;
  }
  .desc {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #6d6d6d;
  }
  .count {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #828385;
  }
  .count-down {
    background-color: #fff8eb;
    padding: 0 14rpx;
    color: #b09053;
    line-height: 34rpx;
    font-size: 24rpx;
  }
</style>
