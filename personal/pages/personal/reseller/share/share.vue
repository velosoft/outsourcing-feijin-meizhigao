<template>
  <view class="flex-col relative page">
    <image class="bg-header pos" src="/personal/static/images/bg_share_header.png" />
    <NavBar
      class="header"
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="transparen"
      titleColor="#ffffff"
    >
      <image class="nav-left-arrow" src="/personal/static/images/icon_nav_left_arrow.png" slot="left" />
    </NavBar>
    <view class="flex-col relative container">
      <InviteHeader class="group_8"></InviteHeader>
      <LimePainter class="section_2"></LimePainter>
      <view class="fixed-bottom-safe flex-col items-center self-stretch">
        <view class="flex-col justify-start button btn-wrap">
          <view class="flex-col justify-start btn-bottom">
            <view class="flex-col justify-start items-center relative btn-inner">
              <view class="btn-inner-bg btn-inner-pos"></view>
              <text class="relative btn-text">保存图片</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import InviteHeader from '../../../../pages/personal/reseller/components/InviteHeader/InviteHeader.vue';
  import LimePainter from '../../../../pages/personal/reseller/components/limePainter/limePainter.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { InviteHeader, LimePainter, NavBar },
    props: {},
    data() {
      return {
        title: '分享收益',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #b09053;
    width: 100%;
    height: 100%;
    .bg-header {
      width: 100vw;
      height: 89.208vw;
    }
    .pos {
      position: absolute;
      left: 0;
      right: 0;
      top: -151.3rpx;
    }
    .header {
      position: relative;
      .nav-left-arrow {
        width: 16rpx;
        height: 30rpx;
      }
    }
    .container {
      padding: 40rpx 0 216rpx;
      .group_8 {
        align-self: center;
        margin: 0 32rpx;
      }
      .section_2 {
        align-self: stretch;
        margin: 72rpx 24rpx 0;
      }
      .button {
        margin: 32rpx 0;
        .btn-bottom {
          margin: 0 8rpx;
          width: 610rpx;
          .btn-inner {
            padding: 24rpx 0 24rpx;
            background-color: #b09053;
            border-radius: 40rpx;
            width: 610rpx;
            height: 80rpx;
            .btn-inner-bg {
              opacity: 0.28;
              background-image: linear-gradient(0deg, #ea5a49 1.9%, #ffffff 100%);
              border-radius: 32rpx;
              width: 586rpx;
              height: 58rpx;
            }
            .btn-inner-pos {
              position: absolute;
              left: 12rpx;
              right: 12rpx;
              top: 50%;
              transform: translateY(-50%);
            }
            .btn-text {
              font-size: 30rpx;
              font-family: 苹方;
              line-height: 30rpx;
              font-weight: 700;
              color: #ffffff;
            }
          }
        }
      }
      .btn-wrap {
        padding: 8rpx 0;
        background-color: #ffffff9c;
        border-radius: 48rpx;
        width: 626rpx;
      }
    }
  }
</style>
