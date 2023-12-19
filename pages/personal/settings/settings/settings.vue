<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col container">
      <u-cell-group class="group_4">
        <u-cell title="联系客户"></u-cell>
        <u-cell class="mt-46" title="关于我们" @click="onClick"></u-cell>
      </u-cell-group>
    </view>
    <view class="iPhoneX flex-col fixed">
      <view class="flex-col footer-wrap"><u-button text="退出登录"></u-button></view>
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
        title: '设置',
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/settings/aboutUs/aboutUs' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .container {
      padding-top: 48rpx;
      overflow-y: auto;
      .group_4 {
        margin: 0 32rpx;
      }
    }
    .fixed {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      .footer-wrap {
        padding: 32rpx;
      }
    }
  }
</style>