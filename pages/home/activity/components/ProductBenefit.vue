<template>
  <view class="flex-col container">
    <view class="flex-row group">
      <text class="label">运费</text>
      <text class="value ml-16">免运费</text>
    </view>
    <view class="flex-row justify-between group" @click="onSelectService">
      <view class="flex-row self-center">
        <text class="label">选择</text>
        <text class="value ml-16">请选择服务规格</text>
      </view>
      <image
        class="icon-arrow"
        src="/static/images/icon_arrow_05.png"
      />
    </view>
    <view class="flex-row items-center group-last">
      <text class="label">服务</text>
      <view class="flex-row ml-4">
        <view class="flex-row tag-item" v-for="(item, index) in items" :key="index">
          <image
            class="shrink-0 self-center icon-radio"
            src="/static/imagesicon_radio_03.png"
          />
          <text class="self-start tag-text ml-8">官方自营</text>
        </view>
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
        items: [null, null],
      };
    },
  
    methods: {
      onSelectService(args) {
        // 事件处理方法
        this.$emit('onSelectService', this.uid);
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .container {
    padding: 0 28rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
    .group {
      padding: 40rpx 0;
      border-bottom: 1rpx solid #efefef;
      .value {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #030305;
      }
      .icon-arrow {
        width: 24rpx;
        height: 24rpx;
      }
    }
    .group-last {
      padding: 40rpx 0;
      .tag-item {
        padding: 8rpx 20rpx;
        .icon-radio {
          width: 30rpx;
          height: 30rpx;
        }
        .tag-text {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 28rpx;
          color: #b09053;
        }
      }
    }
    .label {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #a7a7a7;
    }
  }
  </style>