<template>
  <navigator :url="detailUrl" hover-class="none">
    <view class="flex-col shop-item">
      <image class="shop-images" :src="image" mode="aspectFill" />
      <view class="flex-col shop-con">
        <text class="self-start shop-title line-two">{{ title }}</text>
        <view class="flex-row shop-equal-division">
          <view
            class="flex-col items-center justify-center shop-text-wrapper"
            v-for="(item, index) in tags"
            :key="index"
          >
            <text class="shop-font_01 shop-tag">{{ item }}</text>
          </view>
        </view>
        <view class="flex-row justify-between items-center self-stretch shop-group">
          <view v-if="discount" class="flex-row items-start self-stretch">
            <text class="shop-font_01 no-lineheight">{{ discount }}</text>
            <price class="cf-red-font ml-1" :price="price" />
          </view>
          <view v-else class="flex-row items-start self-stretch">
            <price class="cf-black-font" :price="price" />
          </view>
          <text class="self-stretch buyers-text">{{ buyers + '人购买' }}</text>
        </view>
      </view>
    </view>
  </navigator>
</template>

<script>
  import Price from '@/components/Price/Price';
  export default {
    components: { Price },
    props: {
      itemId: String,
      type: String,
      image: { type: String, default: `` },
      title: { type: String, default: `` },
      tags: { type: Array, default: () => [] },
      discount: { type: String, default: `` },
      price: { type: Number, default: 0 },
      buyers: { type: Number, default: 0 },
    },
    data() {
      return {};
    },
    computed: {
      detailUrl() {
        switch (this.type) {
          case 'product':
            return `/pages/detailPages/productDetail?id=${this.itemId || ''}`;
          case 'service':
            return `/pages/detailPages/serviceDetail?id=${this.itemId || ''}`;
          case 'course':
            return `/pages/detailPages/courseDetail?id=${this.itemId || ''}`;
          default:
            return '';
        }
      },
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .ml-1 {
    margin-left: 2rpx;
  }
  .shop-item {
    padding-bottom: 34rpx;
    margin-bottom: 24rpx;
    background-color: #ffffff;
    border-radius: 10px;
  }
  .shop-images {
    width: 330rpx;
    height: 330rpx;
    flex-shrink: 0;
  }
  .shop-con {
    padding: 0 10rpx;
  }
  .shop-title {
    margin-top: 30rpx;
    color: #111111;
    font-size: 28rpx;
    font-family: PingFang SC;
    line-height: 39rpx;
  }
  .line-two {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
  .shop-equal-division {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 8rpx;
    margin-left: -16rpx;
  }

  .shop-text-wrapper {
    padding: 0 12rpx;
    background-color: #fff1ed;
    border-radius: 4rpx;
    height: 28rpx;
    margin-top: 12rpx;
    margin-left: 16rpx;
  }
  .shop-font_01 {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 24rpx;
    color: #bb3e0c;
  }
  .no-lineheight {
    line-height: unset;
  }
  .shop-tag {
    text-transform: uppercase;
  }
  .shop-group {
    margin-top: 34rpx;
  }

  .buyers-text {
    color: #a7a7a7;
    font-size: 24rpx;
    font-family: 苹方;
    line-height: 24rpx;
  }
  .shop-ml-5 {
    margin-left: 10rpx;
  }
</style>
