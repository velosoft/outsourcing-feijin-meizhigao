<template>
  <view class="flex-col wrap">
    <PopCouponItem></PopCouponItem>
    <u-button
      class="cf-btn-black button mt-72"
      text="立即领取"
      type="primary"
      size="large"
      shape="circle"
      @click="onClick"
    ></u-button>
  </view>
  </template>
  
  <script>
  import PopCouponItem from '@/pages/personal/coupon/components/PopCouponItem/PopCouponItem.vue';
  
  export default {
    components: { PopCouponItem },
    props: {},
    data() {
      return {};
    },
  
    methods: {
      onClick(args) {
        // 事件处理方法
        this.$emit('closeDialog');
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    padding: 48rpx 32rpx 152rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
    .button {
      margin: 0 40rpx;
    }
  }
  </style>