<template>
  <view class="flex-col call-captain">
    <view class="flex-row justify-center items-center btn-wrapper">
      <image class="icon-phone" src="/myOrder/static/images/icon_phone.png" />
      <text class="phone-text ml-8">呼叫 13455773890</text>
    </view>
    <view class="flex-col justify-start items-center btn-wrapper mt-10" @click="onCancel">
      <text class="phone-text cancel-text">取消</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
    methods: {
      onCancel() {
        this.$emit('cancel');
      },
    },
  };
</script>

<style scoped lang="less">
  .call-captain {
    padding: 40rpx 24rpx;
  }
  .btn-wrapper {
    padding: 32rpx 0;
    background-color: #ffffff;
    border-radius: 20rpx;
  }
  .icon-phone {
    width: 28rpx;
    height: 28rpx;
  }
  .phone-text {
    font-size: 32rpx;
    line-height: 44rpx;
    color: #3f8eff;
  }
  .cancel-text {
    font-weight: 500;
  }
</style>
