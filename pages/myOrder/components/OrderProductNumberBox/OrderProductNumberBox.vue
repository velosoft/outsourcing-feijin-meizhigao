<template>
  <view class="flex-row items-center">
    <u-checkbox v-model="v_model" name="zef0ZWPc" shape="circle" size="32rpx" activeColor="#B09053"></u-checkbox>
    <image
      class="shrink-0 img"
      src="https://dev.ft.velosoft.cn/api/image?token=6584e6bdd6bce000114d6c84&name=17025198577991178750.png"
    />
    <view class="flex-col justify-between flex-1 ml-7">
      <text class="line-clamp-two font title">定制卧室收纳柜新疆包邮卧室床头包卧室床头厨房收纳服务</text>
      <text class="line-clamp-one desc">三层长45宽30高75</text>
      <view class="flex-row justify-between items-center">
        <view class="flex-row items-baseline">
          <text class="currency currency-text">￥</text>
          <text class="money-number">200</text>
          <text class="currency money-fixed">.00</text>
        </view>
        <u-number-box
          v-model="v_model_1"
          buttonSize="36rpx"
          inputWidth="44rpx"
          :iconStyle="{
            color: '#cccccc',
            fontSize: '20rpx',
            lineHeight: '28rpx',
            fontWeight: 400
          }"
        ></u-number-box>
      </view>
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
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .ml-7 {
    margin-left: 14rpx;
  }
  .img {
    border-radius: 16rpx;
    width: 160rpx;
    height: 160rpx;
  }
  .font {
    font-size: 26rpx;
    font-weight: 500;
  }
  .title {
    color: #2d2e32;
    line-height: 40rpx;
    text-align: left;
  }
  .desc {
    color: #8c8f95;
    font-size: 26rpx;
    line-height: 36rpx;
  }
  .currency {
    font-size: 20rpx;
    line-height: 28rpx;
    color: #cccccc;
  }
  .currency-text {
    color: #111111;
    font-weight: 500;
  }
  .money-number {
    color: #111111;
    font-size: 32rpx;
    line-height: 36rpx;
  }
  .money-fixed {
    color: #111111;
    line-height: 24rpx;
  }
</style>
