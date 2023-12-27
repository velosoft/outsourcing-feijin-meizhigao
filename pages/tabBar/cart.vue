<template>
  <view class="flex-col relative page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col">
      <fj-sticky v-bind:customNavHeight="80">
        <u-tabs
          class="tabs-yellow-wide-cart"
          :list="list"
          lineWidth="64rpx"
          lineHeight="20rpx"
          activeStyle="font-size:36rpx;color:#111111;margin-bottom:4rpx;"
          inactiveStyle="font-size:32rpx;color:#9e9ea0;"
        >
          <view class="flex-row items-center tabs-slot-right" slot="right">
            <image class="delete-icon" src="/static/images/icon_del_03.png" />
            <text class="delete-text ml-8">一键清除</text>
          </view>
        </u-tabs>
      </fj-sticky>
      <view class="flex-col justify-start">
        <list-with-empty :showEmpty="!productList.length" :showLoading="showLoading" :finished="finished">
          <view class="flex-col empty-wrap" slot="customEmpty">
            <view class="flex-col items-center self-stretch empty-content">
              <image class="bg-empty" src="/static/images/icon_empty_cart.png" />
              <text class="empty-label empty-text">您的购物空空如也~</text>
            </view>
            <view class="flex-col self-center">
              <view v-if="isLogined" class="flex-col items-center justify-center empty-btn-1">去逛逛</view>
              <view v-else class="flex-col items-center justify-center empty-btn-2">去登陆</view>
            </view>
          </view>
          <view class="flex-col content-padding">
            <goods-section :list="productList" @select="onSelect"></goods-section>
            <expired-goods-section class="mt-10" :list="productList"></expired-goods-section>
          </view>
        </list-with-empty>
      </view>
      <recommend class="mt-10"></recommend>
    </view>
    <settlement :list="selectedList"></settlement>
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
  import { productOrders } from '@/mock/personal/orders.js';

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
        showLoading: false,
        finished: false,
        isLogined: false,
        productList: productOrders[0].products,
        selectedList: [],
      };
    },

    methods: {
      onSelect(indexs) {
        console.log('indexs', indexs);
        let selectList = indexs.map((i) => this.productList[i]);
        this.selectedList = selectList;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .tabs-slot-right {
      margin-right: 32rpx;
      .delete-icon {
        width: 44rpx;
        height: 44rpx;
      }
      .delete-text {
        font-size: 28rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
        color: #9e9ea0;
      }
    }
    .empty-wrap {
      padding: 48rpx 32rpx;
      .empty-content {
        padding: 48rpx 0;
        .bg-empty {
          width: 330rpx;
          height: 184rpx;
        }
        .empty-label {
          font-size: 28rpx;
          font-family: PingFangSC;
          line-height: 28rpx;
        }
        .empty-text {
          color: #9e9ea0;
        }
      }
      .empty-btn-1 {
        width: 188rpx;
        height: 68rpx;
        border-radius: 44rpx;
        border: 1px solid #b09053;
        box-sizing: border-box;

        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #b09053;
      }
      .empty-btn-2 {
        width: 188rpx;
        height: 68rpx;
        border-radius: 44rpx;
        background: #b09053;

        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .content-padding {
      padding: 32rpx 20rpx 0;
    }
  }
</style>
