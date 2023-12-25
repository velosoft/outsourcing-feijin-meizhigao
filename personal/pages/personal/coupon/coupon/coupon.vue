<template>
  <view class="flex-col relative page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <fj-sticky v-bind:customNavHeight="customNavHeight">
      <u-tabs
        class="coupon-tabs"
        :list="tabs"
        lineColor="#ff0200"
        :lineWidth="44"
        :lineHeight="3"
        :activeStyle="{ color: '#ff4d1d' }"
        :scrollable="false"
        :v-model="couponType"
        @change="onChangeCouponType"
      ></u-tabs>
    </fj-sticky>
    <view class="flex-col justify-start lsit-container-gap">
      <list-with-empty
        :showEmpty="!list.length"
        :showLoading="showLoading"
        emptyHint="暂无内容"
        :finished="finished"
        imgSrc="/personal/static/images/icon_empty_coupon.png"
        :emptyPaddingTop="170"
      >
        <view class="flex-col list">
          <view class="flex-col list-item mt-12" v-for="(item, index) in list" :key="index">
            <unused-coupon :item="item" v-if="item.status == 'pending-use'"></unused-coupon>
            <used-coupon :item="item" v-if="item.status == 'used'"></used-coupon>
            <expired-coupon :item="item" v-if="item.status == 'expired'"></expired-coupon>
          </view>
        </view>
        <coupon-empty slot="customEmpty"></coupon-empty>
      </list-with-empty>
    </view>
    <view class="flex-col code-wrap code-pos" @click="onOpenDialog"
      ><image class="icon-code" src="/personal/static/images/icon_scan_code.png"
    /></view>
    <view class="fixed-bottom-safe2 flex-col items-center footer-wrap">
      <view class="cf-btn-black flex-col items-center btn-black-wrap" @click="onClick">
        <text class="btn-font btn-text">领券中心</text>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="center"
      :round="12"
      style="width: 327px"
      :safeAreaInsetBottom="false"
    >
      <pop-receive-coupon @closeDialog="closeDialog"></pop-receive-coupon>
    </u-popup>
  </view>
</template>

<script>
  import ExpiredCoupon from '@/personal/pages/personal/coupon/components/ExpiredCoupon/ExpiredCoupon.vue';
  import FjSticky from '@/components/FjSticky.vue';
  import ListWithEmpty from '@/components/ListContainer/ListWithEmpty.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import UnusedCoupon from '@/personal/pages/personal/coupon/components/UnusedCoupon/UnusedCoupon.vue';
  import UsedCoupon from '@/personal/pages/personal/coupon/components/UsedCoupon/UsedCoupon.vue';
  import CouponEmpty from '@/personal/pages/personal/coupon/components/CouponEmpty/CouponEmpty.vue';
  import { couponList } from '@/mock/couponList.js';
  import PopReceiveCoupon from '@/personal/pages/personal/coupon/components/PopReceiveCoupon/PopReceiveCoupon.vue';

  export default {
    components: {
      ExpiredCoupon,
      FjSticky,
      ListWithEmpty,
      NavBar,
      UnusedCoupon,
      UsedCoupon,
      CouponEmpty,
      PopReceiveCoupon,
    },
    props: {},
    data() {
      return {
        customNavHeight: 88,
        couponType: '',
        title: '优惠券中心',
        tabs: [
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
        unusedNumber: 0,
        usedNumber: 0,
        expiredNumber: 0,
        showLoading: true,
        finished: false,
        list: [],
        popupVisible: false,
      };
    },
    watch: {
      couponType(val) {
        if (val == 0) {
          this.list = couponList.filter((item) => item.status == 'pending-use');
        } else if (val == 1) {
          this.list = couponList.filter((item) => item.status == 'used');
        } else {
          this.list = couponList.filter((item) => item.status == 'expired');
        }
      },
    },
    mounted() {
      this.list = [];
      this.unusedNumber = couponList.filter((item) => item.status == 'pending-use').length;
      this.usedNumber = couponList.filter((item) => item.status == 'used').length;
      this.expiredNumber = couponList.filter((item) => item.status == 'expired').length;
      this.tabs[0].name = `未使用（${this.unusedNumber}）`;
      this.tabs[1].name = `已使用（${this.usedNumber}）`;
      this.tabs[2].name = `已过期（${this.expiredNumber}）`;
    },

    methods: {
      onChangeCouponType(args) {
        // 事件处理方法
        this.couponType = args.index;
      },
      onClick() {
        uni.navigateTo({ url: '/pages/coupon/couponCenter' });
      },
      onOpenDialog() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      closeDialog() {
        this.popupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
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
      .btn-black-wrap {
        padding: 24rpx 0;
        background-color: #000000;
        border-radius: 48rpx;
        width: 546rpx;
        .btn-font {
          font-size: 32rpx;
          font-family: 'PingFang SC';
          line-height: 44rpx;
          font-weight: 500;
          color: #000000;
        }
        .btn-text {
          color: #ffffff;
        }
      }
    }
  }
</style>
