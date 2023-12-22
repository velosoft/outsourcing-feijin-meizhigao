<template>
  <view class="flex-col types-wrapper">
    <view class="flex-col justify-start items-center"><text class="title tiel-text">发票类型选择</text></view>
    <u-radio-group
      class="group"
      v-model="v_model"
      activeColor="#B09053"
      placement="column"
      iconSize="32rpx"
      iconPlacement="right"
    >
      <view class="flex-col list-item mt-12" v-for="(item, index) in items" :key="index">
        <u-radio
          v-model="v_model_1"
          label="增值税电子普通发票"
          :name="index"
          labelSize="30rpx"
          labelColor="#000000"
        ></u-radio>
        <text class="self-start desc desc-text mt-4">增值税普通发票可作为交易凭证，用于企业报销</text>
      </view>
    </u-radio-group>
    <view class="flex-col justify-start items-center button btn-wrapper" @click="onSelect">
      <text class="title btn-text">确定</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        v_model: '',
        v_model_1: '',
        items: [null, null],
      };
    },

    methods: {
      onSelect() {
        this.$emit('select');
      },
    },
  };
</script>

<style scoped lang="less">
  .types-wrapper {
    padding: 40rpx 24rpx 72rpx;
    background-color: #f8f8f8;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title {
    font-size: 30rpx;
    line-height: 42rpx;
    color: #000000;
  }
  .tiel-text {
    font-size: 32rpx;
    line-height: 44rpx;
  }
  .group {
    margin-top: 32rpx;
  }
  .list-item {
    padding: 28rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .desc {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #9c9c9f;
  }
  .desc-text {
    margin-left: 4rpx;
  }
  .button {
    margin: 144rpx 16rpx 0;
  }
  .btn-wrapper {
    padding: 24rpx 0;
    background-color: #111111;
    border-radius: 48rpx;
  }
  .btn-text {
    color: #ffffff;
    font-weight: 500;
  }
</style>
