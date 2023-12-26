<template>
  <view class="flex-col wrapper">
    <view class="flex-col justify-start items-center header">
      <text class="title-font title-text">{{ title }}</text>
    </view>
    <u-radio-group
      class="radios"
      v-model="reason"
      activeColor="#B09053"
      inactiveColor="#D2D2D2"
      placement="column"
      iconPlacement="right"
    >
      <u-radio
        class="mt-25"
        :label="item"
        :name="item"
        v-for="(item, index) of reasons"
        :key="index"
        labelSize="14"
        labelColor="#111111"
      ></u-radio>
    </u-radio-group>
    <view class="flex-col justify-start items-center button button-wrapper" @click="onClick">
      <text class="title-font button-text">确认提交</text>
    </view>
  </view>
</template>

<script>
  import { cancelReasons } from '@/mock/personal/orders.js';

  export default {
    components: {},
    props: {
      title: {
        type: String,
        default: '请选择取消原因',
      },
      reasons: {
        type: Array,
        default: () => cancelReasons,
      },
    },
    data() {
      return {
        reason: '',
      };
    },

    methods: {
      onClick() {
        this.$emit('click', this.reason);
      },
    },
  };
</script>

<style scoped lang="less">
  .mt-25 {
    margin-top: 50rpx;
  }
  .wrapper {
    padding: 0 12rpx 54rpx;
    background-color: #f8f8f8;
    border-radius: 20rpx 20rpx 0rpx 0rpx;
  }
  .header {
    padding: 32rpx 0 46rpx;
  }
  .title-font {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    font-weight: 500;
  }
  .title-text {
    color: #000000;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .radios {
    padding: 54rpx 24rpx 26rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .button {
    margin: 86rpx 28rpx 0;
  }
  .button-wrapper {
    padding: 26rpx 0 28rpx;
    background-color: #000000;
    border-radius: 48rpx;
  }
  .button-text {
    color: #ffffff;
    font-size: 30rpx;
    line-height: 42rpx;
  }
</style>
