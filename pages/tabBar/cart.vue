<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col">
      <FjSticky v-bind:customNavHeight="80">
        <u-tabs class="tabs-yellow-wide" :list="list" lineWidth="64rpx" lineHeight="20rpx">
          <view class="flex-row items-center tabs-slot-right" slot="right">
            <image class="delete-icon" src="/static/images/icon_cart_delete.png" />
            <text class="delete-text ml-8">一键清除</text>
          </view>
        </u-tabs>
      </FjSticky>
      <view class="flex-col justify-start">
        <list-with-empty :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
          <view class="flex-col list">
            <GoodsSection></GoodsSection>
            <ExpiredGoodsSection class="mt-10"></ExpiredGoodsSection>
          </view>
        </list-with-empty>
      </view>
      <Recommend class="mt-10"></Recommend>
    </view>
    <Settlement></Settlement>
  </view>
</template>

<script>
  import ExpiredGoodsSection from '../cart/components/ExpiredGoodsSection/ExpiredGoodsSection.vue';
  import FjSticky from '@/components/FjSticky.vue';
  import GoodsSection from '../cart/components/GoodsSection/GoodsSection.vue';
  import ListWithEmpty from '@/components/ListContainer/ListWithEmpty.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import Recommend from '../cart/components/Recommend/Recommend.vue';
  import Settlement from '../cart/components/Settlement/Settlement.vue';

  export default {
    components: { ExpiredGoodsSection, FjSticky, GoodsSection, ListWithEmpty, NavBar, Recommend, Settlement },
    props: {},
    data() {
      return {
        title: '购物车',
        list: [
          {
            name: '商品',
          },
          {
            name: '服务',
          },
          {
            name: '课程',
          },
        ],
        showEmpty: false,
        showLoading: false,
        finished: false,
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .tabs-slot-right {
      margin-right: 32rpx;
      .delete-icon {
        width: 32rpx;
        height: 35rpx;
      }
      .delete-text {
        font-size: 28rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
        color: #a7a7a7;
      }
      .list {
        padding: 32rpx 20rpx 0;
      }
    }
  }
</style>
