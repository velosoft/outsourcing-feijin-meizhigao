<template>
  <view class="flex-col sign-wrapper">
    <view class="flex-col justify-start items-center"><text class="title">手写签名</text></view>
    <view class="flex-col body">
      <text class="tips-title tips">温馨提示：</text>
      <view class="flex-col items-start mt-10">
        <view class="flex-col tips-text">
          <text>1、签明要求正楷、书写清晰、工整；</text>
          <text>2、签名仅用于当前订单做为验收通过的依据</text>
          <text>3、签名即代表您已确认服务已完成，并且认可服务结果</text>
        </view>
        <image
          class="sign-board mt-20"
          src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=a7b88f6065649c20ab747691adc9603e.png"
        />
      </view>
    </view>
    <view class="flex-row actions">
      <view class="flex-col justify-start items-center button btn-rewrite">
        <text class="tips-title rewrite-text">重写</text>
      </view>
      <view class="flex-col justify-start items-center btn-submit submit-wrapper ml-14" @click="onConfirm">
        <text class="tips-title submit-text">确认签名</text>
      </view>
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
      onConfirm() {
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .sign-wrapper {
    padding: 32rpx 24rpx 56rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title {
    color: #111111;
    font-size: 32rpx;
    font-weight: 500;
    line-height: 44rpx;
  }
  .body {
    margin-top: 40rpx;
  }
  .tips-title {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
  }
  .tips {
    margin-left: 16rpx;
    color: #111111;
    font-weight: unset;
  }
  .tips-text {
    margin-left: 16rpx;
    color: #6d6d6d;
    font-size: 24rpx;
    line-height: 44rpx;
  }
  .sign-board {
    width: 706rpx;
    height: 392rpx;
  }
  .actions {
    margin-top: 72rpx;
  }
  .button {
    flex-shrink: 0;
  }
  .btn-rewrite {
    padding: 24rpx 0;
    border-radius: 48rpx;
    width: 234rpx;
    height: 96rpx;
    border: solid 2rpx #ebebeb;
  }
  .rewrite-text {
    color: #6d6d6d;
  }
  .btn-submit {
    flex: 1 1 0;
  }
  .submit-wrapper {
    padding: 28rpx 0;
    background-color: #000000;
    border-radius: 48rpx;
    height: 96rpx;
  }
  .submit-text {
    color: #ffffff;
  }
</style>
