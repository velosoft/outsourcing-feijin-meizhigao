<template>
  <view class="flex-col">
    <text class="self-start title-font title-text">服务部分</text>
    <view class="flex-row items-center mt-12">
      <text class="rate-type font-15">附加服务：</text>
      <text class="rate-service ml-6">安装服务；拆卸服务</text>
    </view>
    <view class="flex-row items-center mt-20">
      <text class="rate-type">整体满意度</text>
      <view class="flex-auto flex-row items-center justify-between">
        <u-rate v-model="v_model" size="52rpx" activeColor="#C2A05F" :readonly="readonly"></u-rate>
        <text class="rate-text">{{ v_model }}分</text>
      </view>
    </view>
    <view class="flex-row items-center mt-24">
      <text class="rate-type">人员专业素养</text>
      <view class="flex-auto flex-row items-center justify-between">
        <u-rate v-model="v_model_1" size="52rpx" activeColor="#C2A05F" :readonly="readonly"></u-rate>
        <text class="rate-text">{{ v_model_1 }}分</text>
      </view>
    </view>
    <view class="flex-row items-center mt-24">
      <text class="rate-type">服务态度</text>
      <view class="flex-auto flex-row items-center justify-between">
        <u-rate v-model="v_model_2" size="52rpx" activeColor="#C2A05F" :readonly="readonly"></u-rate>
        <text class="rate-text">{{ v_model_2 }}分</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      readonly: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        v_model: 5,
        v_model_1: 3,
        v_model_2: 3,
      };
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .title-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #111111;
  }
  .rate-type {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #111111;
    width: 240rpx;
  }
  .font-15 {
    font-size: 30rpx;
  }
  .rate-service {
    font-size: 30rpx;
    font-weight: 500;
    color: #111111;
    line-height: 42rpx;
  }
  .rate-text {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #111111;
  }
  .title-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
</style>
