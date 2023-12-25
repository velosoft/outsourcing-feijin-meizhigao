<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between title-wrap items-center">
      <text class="title">以下为失效商品</text>
      <view class="flex-row items-center self-stretch title-wrap-right">
        <image class="shrink-0 delete-icon" src="/static/images/icon_cart_delete.png" />
        <text class="goods-title delete-text ml-8">一键清除</text>
      </view>
    </view>
    <view class="flex-col mt-20">
      <ExpiredGoodsItem
        class="list-item mt-20 items-center"
        v-for="(item, index) in items"
        :key="index"
      ></ExpiredGoodsItem>
    </view>
  </view>
</template>

<script>
  import ExpiredGoodsItem from '../ExpiredGoodsItem/ExpiredGoodsItem.vue';

  export default {
    components: { ExpiredGoodsItem },
    props: {},
    data() {
      return {
        items: [null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 32rpx 0;
    background-color: #ffffff;
    border-radius: 12rpx;
    .title-wrap {
      padding: 0 28rpx;
      .title {
        color: #030305;
        font-size: 32rpx;
        font-family: 苹方;
        font-weight: 700;
        line-height: 32rpx;
      }
      .title-wrap-right {
        margin-right: 8rpx;
        .delete-icon {
          width: 32rpx;
          height: 35rpx;
        }
        .goods-title {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 28rpx;
          color: #030305;
        }
        .delete-text {
          color: #a7a7a7;
        }
      }
    }
    .list-item {
      margin-left: 12rpx;
      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>
