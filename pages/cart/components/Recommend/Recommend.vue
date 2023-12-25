<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-center recommend-wrap">
      <image class="icon-recommend" src="/static/images/icon_cart_recommend_left.png" />
      <text class="recommend-title">你可能还喜欢</text>
      <image class="icon-recommend" src="/static/images/icon_cart_recommend_right.png" />
    </view>
    <DoubleList class="mt-10" :items="list"></DoubleList>
  </view>
</template>

<script>
  import DoubleList from '@/components/DoubleList/DoubleList.vue';
  import { productList } from '@/mock/shopList';

  export default {
    components: { DoubleList },
    data() {
      return {
        items: '',
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
        color: #030305;
        font-size: 32rpx;
        font-family: PingFangSC;
        line-height: 32rpx;
      }
    }
  }
</style>
