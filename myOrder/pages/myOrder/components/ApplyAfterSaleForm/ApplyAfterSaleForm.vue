<template>
  <view class="flex-col form">
    <view class="flex-row justify-between">
      <text class="name">售后类型</text>
      <text class="value name">仅退款</text>
    </view>
    <view class="flex-row justify-between items-center mt-36">
      <text class="name">退款金额</text>
      <text class="name value">{{ refund }}</text>
    </view>
    <view class="flex-row justify-between mt-36">
      <text class="name">退款原因</text>
      <view class="flex-row items-center picker" @click="onClick">
        <text class="picker-placeholder cf-placeholder-like">请选择</text>
        <image class="shrink-0 arrow-right ml-8" src="/myOrder/static/images/icon_arrow_right.png" />
      </view>
    </view>
    <view class="flex-row justify-between items-center mt-36">
      <text class="name">是否需要寄回商品</text>
      <u-radio-group
        class="cf-radio-group"
        activeColor="#B09053"
        inactiveColor="#D2D2D2"
        size="28rpx"
        labelColor="#111111"
      >
        <u-radio label="需要" name="1"></u-radio>
        <u-radio label="不需要" name="2" class="ml-24"></u-radio>
      </u-radio-group>
    </view>
    <view class="flex-col mt-36">
      <text class="self-start name">备注说明</text>
      <u-textarea
        class="cf-textarea text-area mt-18"
        v-model="v_model"
        placeholder="请输入您的反馈"
        placeholderStyle="fontSize:24rpx;color:#9E9EA0:font-family:苹方;font-weight:400;"
      ></u-textarea>
    </view>
    <view class="flex-col mt-36">
      <view class="flex-row self-stretch pic-header">
        <text class="name">上传凭证</text>
        <text class="picker-placeholder">（最多上传3张图片）</text>
      </view>
      <Uploader></Uploader>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="10" :closeable="true">
      <pop-order-cancel title="请选择退款原因" @click="onClose"></pop-order-cancel>
    </u-popup>
  </view>
</template>

<script>
  import Uploader from '@/components/Uploader/Uploader.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';

  export default {
    options: { styleIsolation: 'shared' },
    components: { PopOrderCancel, Uploader },
    props: {
      refund: {
        type: String,
        default: 0,
      },
    },
    data() {
      return {
        popupVisible: false,
        v_model: '',
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .form {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #111111;
  }
  .value {
    font-weight: 600;
    line-height: 34rpx;
  }
  .picker {
    margin-right: 8rpx;
  }
  .picker-placeholder {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9e9ea0;
  }
  .arrow-right {
    width: 12rpx;
    height: 24rpx;
  }
  .text-area {
    align-self: stretch;
    margin-right: 8rpx;
  }
  .pic-header {
    padding-bottom: 24rpx;
  }
</style>
