<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col container">
      <view class="flex-col self-center wrap">
        <view class="flex-col items-center self-center">
          <image class="logo" src="../../../../static/images/icon_logo.png" />
          <text class="font mt-8">美之高</text>
        </view>
        <u-cell-group class="group_1 mt-22">
          <u-cell title="关于我们" :isLink="true" @click="onClick"></u-cell>
          <u-cell title="服务协议" :isLink="true" @click="onClick_1"></u-cell>
          <u-cell title="隐私协议" :isLink="true" @click="onClick_2"></u-cell>
        </u-cell-group>
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
        uni.navigateTo({ url: '/pages/shezhi_guanyuwomenxiangqing/shezhi_guanyuwomenxiangqing' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/settings/agreement/agreement' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/personal/settings/agreement/agreement' });
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
        .font {
          font-size: 30rpx;
          font-family: 苹方;
          line-height: 30rpx;
          font-weight: 700;
          color: #2d2e32;
        }
        .group_1 {
          align-self: stretch;
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