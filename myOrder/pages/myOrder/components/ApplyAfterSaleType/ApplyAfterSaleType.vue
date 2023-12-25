<template>
  <view class="flex-col section">
    <text class="self-start type-title title">请选择售后类型</text>
    <u-radio-group placement="column">
      <view class="flex-row justify-between items-center group mt-28" @click="onType('退货退款')">
        <view class="flex-row items-center">
          <image class="icon-type" src="/static/images/icon_currency_1.png" />
          <view class="flex-col items-start ml-8">
            <text class="type-title">退货退款</text>
            <text class="type-tip mt-4">商品已发货，需退回已收到的商品</text>
          </view>
        </view>
        <u-radio name="ELvrRwZj" activeColor="#B09053" size="30rpx" @change="onType('退货退款')"></u-radio>
      </view>
      <view class="flex-row justify-between group mt-28 items-center" @click="onType('换货')">
        <view class="flex-row items-center">
          <image class="icon-type" src="/static/images/icon_change.png" />
          <view class="flex-col items-start ml-8">
            <text class="type-title">换货</text>
            <text class="type-tip mt-4">商品已发货，需退回已收到的商品</text>
          </view>
        </view>
        <u-radio name="fhaSknym" activeColor="#B09053" size="30rpx" @change="onType('换货')"></u-radio>
      </view>
    </u-radio-group>
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
      onType(type) {
        this.$emit('type', type);
      },
    },
  };
</script>

<style scoped lang="less">
  .section {
    padding: 24rpx 24rpx 48rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .type-title {
    font-size: 30rpx;
    line-height: 42rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .title {
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .group {
    padding-left: 8rpx;
  }
  .icon-type {
    width: 56rpx;
    height: 56rpx;
  }
  .type-tip {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #9c9c9f;
  }
</style>
