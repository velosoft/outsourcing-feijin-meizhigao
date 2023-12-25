<template>
  <view class="flex-col wrap">
    <pop-coupon-item></pop-coupon-item>
    <u-button
      class="cf-btn-black button"
      text="立即领取"
      type="primary"
      size="large"
      shape="circle"
      @click="onClick"
    ></u-button>
  </view>
</template>

<script>
  import PopCouponItem from '@/personal/pages/personal/coupon/components/PopCouponItem/PopCouponItem.vue';

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
    padding: 50rpx 30rpx 152rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
    .button {
      margin: 140rpx 36rpx 0;
    }
  }
</style>
