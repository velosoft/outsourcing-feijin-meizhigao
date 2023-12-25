<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></nav-bar>
    <view class="flex-col flex-1 relative main">
      <view class="flex-col justify-start items-center banner-image-wrapper">
        <image class="shrink-0 banner-image" src="/static/mock/mock_coupon_banner.png" />
      </view>
      <fj-sticky :customNavHeight="80">
        <u-tabs
          class="tabs-yellow-wide tabs"
          :activeStyle="{
            color: '#030305',
            fontWeight: '700',
          }"
          :inactiveStyle="{
            color: '#a7a7a7',
          }"
          lineHeight="20rpx"
          lineWidth="64rpx"
          :list="tabs"
          @change="onChangeTab"
        >
        </u-tabs>
      </fj-sticky>
      <list-container class="flex-auto mt-12" :showEmpty="!list.length" :showLoading="showLoading" :finished="finished">
        <view class="flex-col">
          <coupon-item class="list-item" v-for="(item, index) in list" :key="index" :coupon="item"></coupon-item>
        </view>
      </list-container>
    </view>
    <view class="flex-col justify-start items-center scan-code">
      <image class="icon_scan" src="/static/images/icon_scan_code.png" />
    </view>
  </view>
</template>

<script>
  import CouponItem from './components/CouponItem.vue';
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import { couponList } from '../../mock/couponList';

  export default {
    components: { CouponItem, FjSticky, ListContainer, NavBar, FjSticky, NavBar },
    props: {},
    data() {
      return {
        title: '领券中心',
        tabs: [
          {
            name: '全部',
          },
          {
            name: '满减券',
          },
          {
            name: '无门槛优惠券',
          },
        ],
        tab: 0,
        showLoading: true,
        finished: false,
        list: [],
        page: 1,
      };
    },
    mounted() {
      setTimeout(() => {
        this.list = couponList;
      }, 1500);
    },
    onReachBottom() {
      if (this.page >= 2) {
        this.finished = true;
        return;
      }
      this.finished = false;

      setTimeout(() => {
        this.list = this.list.concat(this.list);
        this.page++;
      }, 1500);
    },
    methods: {
      onChangeTab(val) {
        this.tab = val.index;
        this.list = couponList;
        this.page = 1;
      },
    },
  };
</script>

<style scoped lang="less">
  .ml-29 {
    margin-left: 58rpx;
  }
  .page {
    background-color: #ffffff;
    width: 100vw;
    height: 100vh;
  }
  .main {
    padding: 42rpx 0;
  }
  .banner-image-wrapper {
    margin: 0 32rpx;
    overflow: hidden;
    border-radius: 16rpx;
    height: 232rpx;
  }
  .banner-image {
    width: 100%;
    height: 100%;
  }
  .list-item {
    margin: 0 32rpx;
    margin-top: 20rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .scan-code {
    background-color: #030305;
    border-radius: 50%;
    position: fixed;
    right: 32rpx;
    bottom: 150rpx;
  }
  .icon_scan {
    width: 108rpx;
    height: 108rpx;
  }

  .tabs {
    /deep/ .u-tabs__wrapper__nav__item {
      padding: 30rpx;
    }
  }
</style>
