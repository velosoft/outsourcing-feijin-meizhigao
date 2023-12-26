<template>
  <view class="flex-col">
    <text class="self-start title-font title-text">服务评价</text>
    <view class="flex-row justify-between images">
      <image
        class="image"
        src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=979267435547136d48391ff69aeede8c.png"
        v-for="(item, index) in items"
        :key="index"
      />
    </view>
    <view class="flex-row items-center mt-20">
      <view class="flex-row items-center flex-1 justify-between">
        <text class="rate-type">整体满意度</text>
        <u-rate class="ml-36" v-model="v_model" size="52rpx" activeColor="#C2A05F"></u-rate>
      </view>
      <text class="font rate-text">{{ v_model }}分</text>
    </view>
    <view class="flex-row items-center self-stretch mt-20">
      <view class="flex-row items-center flex-1 justify-between">
        <text class="rate-type">人员专业素养</text>
        <u-rate class="ml-22" v-model="v_model_1" size="52rpx" activeColor="#C2A05F"></u-rate>
      </view>
      <text class="font rate-text">{{ v_model_1 }}分</text>
    </view>
    <view class="flex-row items-center mt-20">
      <view class="flex-row justify-between items-center flex-1">
        <text class="rate-type">服务态度</text>
        <u-rate v-model="v_model_2" size="52rpx" activeColor="#C2A05F"></u-rate>
      </view>
      <text class="font rate-text">{{ v_model_2 }}分</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      readonly: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        items: [null, null, null, null],
        v_model: 5,
        v_model_1: 3,
        v_model_2: 3,
      };
    },
    methods: {},
  };
</script>

<style scoped lang="css">
  .font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #111111;
  }
  .title-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .images {
    align-self: stretch;
    margin-top: 22rpx;
  }
  .image {
    border-radius: 10rpx;
    width: 148rpx;
    height: 148rpx;
  }
  .rate-type {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
  .rate-text {
    margin-left: 40rpx;
  }
  .title-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
</style>
