<template>
  <view style="padding: 200rpx 32rpx;">
    <text>block 按钮</text>
    <button class="flex-col items-center justify-center btn-block btn-block--active">提交结果</button>
    <view class="" style='height: 10rpx;'></view>
    <button class="flex-col items-center justify-center btn-block btn-block--disable">提交结果</button>
    <text>normal 按钮</text>
    <button class="flex-col items-center justify-center btn-normal btn-normal--default">提交结果</button>
    <view class="" style='height: 10rpx;'></view>
    <button class="flex-col items-center justify-center btn-normal btn-normal--plain">提交结果</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="less">
  .btn-block {
    height: 88rpx;
    border-radius: 44rpx;
    font-family: 苹方;
    font-size: 30rpx;
    font-weight: 400;
  }

  .btn-block--active {
    background: #B1A76E;
    color: #ffffff;
  }

  .btn-block--disable {
    background: #E2E2E2;
    color: #707070;
  }

  .btn-normal {
    height: 80rpx;
    border-radius: 40rpx;
    font-family: 苹方;
    font-size: 30rpx;
    font-weight: 400;
  }

  .btn-normal--plain {
    border: 1rpx solid #D3D3D3;
    background: #FFFFFF;
    color: #6C6C6C;
  }

  .btn-normal--default {
    background: #B1A76E;
    color: #FFFFFF;
  }
</style>
