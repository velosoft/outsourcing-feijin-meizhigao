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
          <view class="flex-col empty-wrap" slot="customEmpty">
            <view class="flex-col items-center self-stretch enptey-content">
              <image class="ai-background-image_1" src="/static/images/icon_empty_cart.png" />
              <text class="emppty-label empty-text">您的购物空空如也~</text>
            </view>
            <view class="flex-col self-center">
              <u-button text="去逛逛" type="primary" size="mini" shape="circle" :plain="true"></u-button>
              <u-button text="去登录" type="primary" size="mini" shape="circle"></u-button>
            </view>
          </view>
          <view class="flex-col content-padding">
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
    }
    .empty-wrap {
      padding: 48rpx 32rpx;
      .enptey-content {
        padding: 48rpx 0;
        .ai-background-image_1 {
          width: 330rpx;
          height: 184rpx;
        }
        .emppty-label {
          font-size: 28rpx;
          font-family: PingFangSC;
          line-height: 28rpx;
        }
        .empty-text {
          color: #a7a7a7;
        }
      }
    }
    .content-padding {
      padding: 32rpx 20rpx 0;
    }
  }
  </style>