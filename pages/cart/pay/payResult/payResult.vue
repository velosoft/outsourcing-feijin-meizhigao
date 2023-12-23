<template>
  <view class="height-full flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col group flex-1">
      <view class="flex-col items-center">
        <view class="flex-col items-center">
          <image class="icon" src="/static/images/icon_result_success.png" v-if="status == 0" />
          <image class="icon" src="/static/images/icon_result_fail.png" v-if="status == 1" />
        </view>
        <text class="font result-text mt-8">支付成功</text>
      </view>
      <view class="flex-col mt-96">
        <u-button text="立即查看" type="primary" size="large" shape="circle" @click="onGoOn"></u-button>
        <u-button
          class="mt-32"
          text="返回上一级"
          type="primary"
          size="large"
          shape="circle"
          :plain="true"
          @click="onGoBack"
        ></u-button>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  
  export default {
    components: { NavBar },
    props: {
      title: { type: String, default: `支付成功` },
      successBtnTitle: { type: String, default: `立即查看` },
      errorBtnTitle: { type: String, default: `返回上一级` },
      status: { type: String, default: `0` },
    },
    data() {
      return {
        title: '收银台',
      };
    },
  
    methods: {
      onGoOn(args) {
        // 事件处理方法
        this.$emit('onGoOn');
      },
      onGoBack() {
        // 事件处理方法
        this.$emit('onGoBack');
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    .group {
      padding: 136rpx 48rpx;
      .icon {
        width: 120rpx;
        height: 120rpx;
      }
      .font {
        font-size: 30rpx;
        font-family: PingFangSC;
        line-height: 30rpx;
      }
      .result-text {
        color: #2d2e32;
      }
    }
  }
  </style>