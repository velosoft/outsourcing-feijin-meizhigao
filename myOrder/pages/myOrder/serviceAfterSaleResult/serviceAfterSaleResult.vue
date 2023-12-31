<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col flex-1 body">
      <image class="self-center icon-succ" src="/myOrder/static/images/icon_succ.png" />
      <text class="self-center font succ-text">提交成功，请耐心等待平台处理</text>
      <view class="flex-col self-stretch actions">
        <view class="flex-col justify-start items-center btn-list" @click="gotoOrderList">
          <text class="font btn-list-text">返回订单列表</text>
        </view>
        <view class="flex-col justify-start items-center btn-home mt-24" @click="gotoHome">
          <text class="font btn-home-text">回首页</text>
        </view>
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
        title: '提交结果',
      };
    },
    methods: {
      gotoOrderList() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/myOrder/myOrder' });
      },
      gotoHome() {
        uni.switchTab({ url: '/pages/tabBar/home' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 168rpx 40rpx 0;
    overflow-y: auto;
  }
  .icon-succ {
    width: 120rpx;
    height: 120rpx;
  }
  .font {
    font-size: 30rpx;
    line-height: 42rpx;
    font-weight: 500;
  }
  .succ-text {
    margin-top: 84rpx;
    color: #111111;
  }
  .actions {
    margin-top: 280rpx;
  }
  .btn-list {
    padding: 24rpx 0;
    background-color: #b09053;
    border-radius: 48rpx;
  }
  .btn-list-text {
    color: #ffffff;
  }
  .btn-home {
    padding: 24rpx 0;
    border-radius: 48rpx;
    border-left: solid 2rpx #b09053;
    border-right: solid 2rpx #b09053;
    border-top: solid 2rpx #b09053;
    border-bottom: solid 2rpx #b09053;
  }
  .btn-home-text {
    color: #b09053;
  }
</style>
