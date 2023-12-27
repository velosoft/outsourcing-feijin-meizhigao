<template>
  <view class="flex-col wrap">
    <u-cell class="cell-in-white-card-weight" title="课程总额" :value="price" :border="false"></u-cell>
    <u-cell class="cell-in-white-card-weight mt-27" title="活动优惠" :value="discount" :border="false"></u-cell>
    <view class="flex-col mt-20">
      <view class="flex-col list-item mt-10" v-for="(item, index) in detail.list" :key="index">
        <view class="flex-row image-row">
          <image
            class="product-image"
            :src="prod.productImageURL"
            v-for="(prod, index) in item.products"
            :key="index"
          />
        </view>
        <view class="flex-row tag-top items-center">
          <view class="flex-col">
            <view class="flex-col tag-normal items-center" v-if="item.type === '商品'"
              ><text class="tag-text">{{ item.title }}</text></view
            >
            <view class="flex-col tag-plain" v-if="item.type === '课程'"
              ><text class="tag-text">{{ item.title }}</text></view
            >
          </view>
          <text class="full-discount-text ml-6">小计:￥{{ item.price }}，已减￥{{ item.discount }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { detail: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },
    computed: {
      price() {
        return `￥${this.detail.price || 0}`;
      },
      discount() {
        if (this.detail.discount) {
          return `-￥${this.detail.discount}`;
        }
        return '￥0.00';
      },
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .mt-27 {
    margin-top: 54rpx;
  }
  .mt-15 {
    margin-top: 30rpx;
  }
  .wrap {
    margin-bottom: 112rpx;
    padding: 63.2rpx 28rpx 56rpx 32rpx;
    background-color: #ffffff;
    border-radius: 20rpx 20rpx 0rpx 0rpx;
    .list-item {
      margin-right: 4rpx;
      padding: 24rpx 24rpx 18rpx;
      background: #f8f8f8;
      border-radius: 12rpx;
      &:first-child {
        margin-top: 0;
      }
      .image-row {
        flex-wrap: wrap;
        gap: 24rpx;
        .product-image {
          width: 120rpx;
          height: 120rpx;
        }
      }
      .tag-top {
        margin-top: 14rpx;
        .tag-normal {
          padding: 4rpx 16rpx;
          background-color: #fdeee9;
          border-radius: 8rpx;
        }
        .tag-plain {
          padding: 2rpx 16rpx;
          border-radius: 8rpx;
          border: solid 1rpx #bb3e0c;
        }
        .tag-text {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 28rpx;
          font-weight: 700;
          color: #bb3e0c;
        }
        .full-discount-text {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24rpx;
          color: #111111;
        }
      }
    }
  }
</style>
