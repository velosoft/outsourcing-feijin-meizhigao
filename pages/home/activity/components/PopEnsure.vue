<template>
  <view class="flex-col container">
    <view class="flex-col">
      <view class="flex-col list-item itme-top mt-34" v-for="(item, index) in items" :key="index">
        <view class="flex-row items-start self-stretch">
          <image
            class="icon"
            src="https://dev.ft.velosoft.cn/api/image?token=6577372b740f740012ac401b&name=icon_ensure_01.png"
          />
          <text class="label ml-8">支持退换</text>
        </view>
        <text class="self-start describe describe-text mt-8">支持买家申请退换。</text>
      </view>
    </view>
    <u-button class="mt-68" text="我知道了" type="primary" @click="onClose"></u-button>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null],
      };
    },
  
    methods: {
      onClose(){
        this.$emit("isKnow")
      }
    },
  };
  </script>
  
  <style scoped lang="less">
  .container {
    padding: 96rpx 32rpx 40rpx;
    background-color: #ffffff;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    .list-item {
      padding: 0 8rpx;
      &:first-child {
        margin-top: 0;
      }
      .icon {
        margin-top: 8rpx;
        width: 28rpx;
        height: 32rpx;
      }
      .label {
        font-size: 32rpx;
        font-family: 苹方;
        line-height: 32rpx;
        color: #030305;
      }
      .describe {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #6c6c6c;
      }
      .describe-text {
        margin-left: 48rpx;
      }
    }
    .itme-top {
      margin-top: 68rpx;
    }
  }
  </style>