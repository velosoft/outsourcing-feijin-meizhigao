<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-center items-center recommend-wrap">
      <image class="icon-recommend" src="/static/images/icon_cart_recommend_left.png" />
      <text class="recommend-title">你可能还喜欢</text>
      <image class="icon-recommend" src="/static/images/icon_cart_recommend_right.png" />
    </view>
    <double-list class="mt-10" :items="list"></double-list>
  </view>
</template>

<script>
  import DoubleList from '@/components/DoubleList/DoubleList.vue';
  import { productList } from '@/mock/shopList';

  export default {
    components: { DoubleList },
    data() {
      return {
        list: productList,
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    margin-top: 20rpx;
    .recommend-wrap {
      padding: 32rpx 0;
      .icon-recommend {
        width: 32rpx;
        height: 12rpx;
      }
      .recommend-title {
        margin: 0 12rpx;
        color: #111111;
        font-size: 32rpx;
        font-family: PingFangSC;
        line-height: 32rpx;
      }
    }
  }
</style>
