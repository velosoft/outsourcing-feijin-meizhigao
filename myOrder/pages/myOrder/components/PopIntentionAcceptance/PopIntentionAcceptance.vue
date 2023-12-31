<template>
  <popup-with-button class="pop-wrapper" title="验收服务" buttonText="验收通过" @click="onConfirm">
    <view class="flex-col group view">
      <text class="self-start title-font title-text">验收协议</text>
      <view class="flex-col justify-start self-stretch agreement-wrapper">
        <text class="agreement">
          1、确认方案前，请打开方案，查看并核对是否符合您的定制需求，方案一旦确认，方案将不允许再修改
          2、方案确认后，需要您确认并支付组件清单，代表您同意根据清单采购定制商品组件
          3、支付成功后，系统会为您自动生成组件清单，并创建一张商品订单，商品订单详细信息可前往【我的-我的商品订单】查看
        </text>
      </view>
      <u-checkbox-group
        class="mt-12"
        v-model="v_model"
        shape="circle"
        activeColor="#B09053"
        inactiveColor="#B09053"
        iconSize="32rpx"
      >
        <u-checkbox
          v-model="v_model_1"
          label="我已阅读并同意该定制商品设计方案"
          name="goHt5HqZ"
          labelSize="26rpx"
          labelColor="#b09053"
        ></u-checkbox>
      </u-checkbox-group>
    </view>
  </popup-with-button>
</template>

<script>
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { PopupWithButton },
    props: {},
    data() {
      return {
        v_model: [],
        v_model_1: '',
      };
    },
    methods: {
      onConfirm() {
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .group {
    margin-top: 60rpx;
  }
  .view {
    padding-bottom: 48rpx;
  }
  .title-font {
    font-size: 28rpx;
    line-height: 42rpx;
  }
  .title-text {
    color: #000000;
    line-height: 40rpx;
  }
  .agreement-wrapper {
    margin-top: 10rpx;
    padding: 16rpx 20rpx 136rpx;
    background-color: #fdfdfd;
    border-radius: 6rpx;
  }
  .agreement {
    color: #6d6d6d;
    font-size: 24rpx;
    line-height: 42rpx;
  }

  .pop-wrapper {
    /deep/ .root {
      padding: 40rpx 40rpx 54rpx;

      /deep/ .text_13 {
        font-size: 36rpx;
      }
    }
  }
</style>
