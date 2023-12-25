<template>
  <view class="height-full flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col container">
      <view class="flex-col self-center wrap">
        <view class="flex-col items-center self-center">
          <image class="logo" src="/personal/static/images/icon_logo.png" />
          <text class="label mt-8">美之高</text>
        </view>
        <view class="flex-col self-stretch mt-22">
          <view class="flex-col cell-wrap" @click="onClick">
            <view class="flex-row justify-between cell-con">
              <text class="self-center label">关于我们</text>
              <image class="self-start icon-right" src="/personal/static/images/icon_arrow_arrow_02.png" />
            </view>
          </view>
          <view class="flex-col cell-wrap" @click="onClick_1">
            <view class="flex-row justify-between cell-con">
              <text class="self-center label">服务协议</text>
              <image class="self-start icon-right" src="/personal/static/images/icon_arrow_arrow_02.png" />
            </view>
          </view>
          <view class="flex-col cell-wrap" @click="onClick_2">
            <view class="flex-row justify-between cell-con">
              <text class="self-center label">隐私协议</text>
              <image class="self-start icon-right" src="/personal/static/images/icon_arrow_arrow_02.png" />
            </view>
          </view>
          <view class="flex-col cell-wrap" @click="onClick_3">
            <view class="flex-row justify-between cell-con">
              <text class="self-center label">用户绑卡协议</text>
              <image class="self-start icon-right" src="/personal/static/images/icon_arrow_arrow_02.png" />
            </view>
          </view>
        </view>
      </view>
      <view class="flex-col items-center text-wrapper">
        <text class="copy-right">美之高公司©版权所有 保留所有权利</text>
      </view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { NavBar },
    props: {},
    data() {
      return {
        title: '关于我们',
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/personal/pages/personal/settings/aboutDetial/aboutDetial' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/personal/pages/personal/settings/userAgreement/userAgreement' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/personal/pages/personal/settings/NonDisclosureAgreement/NonDisclosureAgreement' });
      },
      onClick_3() {
        uni.navigateTo({ url: '/personal/pages/personal/settings/CardBindingAgreement/CardBindingAgreement' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .container {
      padding: 168rpx 0 72rpx;
      .wrap {
        width: 590rpx;
        .logo {
          width: 136rpx;
          height: 142rpx;
        }
        .label {
          font-size: 30rpx;
          font-family: 苹方;
          line-height: 30rpx;
          font-weight: 700;
          color: #2d2e32;
        }
        .cell-wrap {
          padding: 36rpx 0;
          border-bottom: 2rpx solid #eeeeee;
          box-sizing: border-box;
          .cell-con {
            margin-right: 8rpx;
            width: 580.4rpx;
            .icon-right {
              margin-top: 16rpx;
              width: 20rpx;
              height: 20rpx;
            }
          }
        }
      }
      .text-wrapper {
        position: fixed;
        left: 0rpx;
        right: 0rpx;
        bottom: 73rpx;
        .copy-right {
          color: #9e9ea0;
          font-size: 24rpx;
          font-family: 苹方;
          font-weight: 700;
          line-height: 24rpx;
        }
      }
    }
  }
</style>
