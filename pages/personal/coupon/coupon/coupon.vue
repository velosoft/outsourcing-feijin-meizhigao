<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <FjSticky v-bind:customNavHeight="customNavHeight">
      <u-tabs
        class="default-tabs"
        :list="list"
        lineColor="#ff0200"
        :lineWidth="44"
        :lineHeight="3"
        @change="onChangeCouponType"
      ></u-tabs>
    </FjSticky>
    <view class="flex-col justify-start lsit-container-gap">
      <list-container
        :showEmpty="showEmpty"
        :showLoading="showLoading"
        emptyHint="暂无内容"
        :finished="finished"
        imgSrc="/static/images/icon_empty_coupon.png"
        :emptyPaddingTop="170"
      >
        <view class="flex-col list">
          <view class="flex-col list-item mt-12" v-for="(item, index) in couponListResData" :key="index">
            <UnusedCoupon :item="item" v-if="item.status == 'pending-use'"></UnusedCoupon>
            <UsedCoupon :item="item" v-if="item.status == 'used'"></UsedCoupon>
            <ExpiredCoupon :item="item" v-if="item.status == 'expired'"></ExpiredCoupon>
          </view>
        </view>
      </list-container>
    </view>
    <view class="flex-col code-wrap code-pos"><image class="icon-code" src="/static/images/icon_scan_code.png" /></view>
    <view class="fixed-bottom-safe2 flex-col items-center footer-wrap">
      <u-button class="cf-btn-black" text="领券中心" type="primary" size="large" shape="circle"></u-button>
    </view>
  </view>
  </template>
  
  <script>
  import ExpiredCoupon from '../../../../pages/personal/coupon/components/ExpiredCoupon/ExpiredCoupon.vue';
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import UnusedCoupon from '../../../../pages/personal/coupon/components/UnusedCoupon/UnusedCoupon.vue';
  import UsedCoupon from '../../../../pages/personal/coupon/components/UsedCoupon/UsedCoupon.vue';
  import { couponListResData } from './coupon.data.js';
  
  export default {
    components: { ExpiredCoupon, FjSticky, ListContainer, NavBar, UnusedCoupon, UsedCoupon },
    props: {},
    data() {
      return {
        customNavHeight: '88',
        couponType: '',
        title: '优惠券中心',
        list: [
          {
            name: '未使用（2）',
          },
          {
            name: '已使用（2）',
          },
          {
            name: '已过期（2）',
          },
        ],
        showEmpty: false,
        showLoading: false,
        finished: false,
        couponListResData: couponListResData,
      };
    },
  
    methods: {
      onChangeCouponType(args) {
        // 事件处理方法
        this.couponType = args.index;
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .lsit-container-gap {
      padding: 24rpx 0;
      .list {
        margin: 0 24rpx;
        .list-item {
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
    .code-wrap {
      width: 112rpx;
      .icon-code {
        width: 112rpx;
        height: 112rpx;
      }
    }
    .code-pos {
      position: fixed;
      right: 24rpx;
      top: 1074rpx;
    }
    .footer-wrap {
      padding: 32rpx 100rpx;
    }
  }
  </style>