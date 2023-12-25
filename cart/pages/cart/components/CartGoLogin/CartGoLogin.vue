<template>
  <view class="flex-col wrap">
    <view class="flex-col items-center self-stretch empty-con">
      <image class="empty-cart-login" src="/cart/static/images/icon_empty_cart.png" />
      <text class="empty-text text">您的购物空空如也~</text>
    </view>
    <u-button class="button" text="去登录" type="primary" size="mini" shape="circle"></u-button>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 40rpx 32rpx;
    .empty-con {
      padding: 48rpx 0;
      .empty-cart-login {
        width: 330rpx;
        height: 184rpx;
      }
      .empty-text {
        font-size: 28rpx;
        font-family: 苹方;
      }
      .text {
        color: #a7a7a7;
      }
    }
    .button {
      align-self: center;
    }
  }
</style>
