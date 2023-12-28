<template>
  <popup-with-button
    title="确认方案"
    buttonText="确认方案"
    :btnStyle="checkbox.length ? '' : disableBtnStyle"
    padding="40rpx 32rpx 60rpx 32rpx"
    @click="onConfirm"
  >
    <view class="flex-col main">
      <view class="flex-row justify-between header">
        <text class="tip-title header-title">设计方案</text>
        <view class="flex-row items-center">
          <view class="flex-row items-center" @click="gotoProductList">
            <text class="plan-text">商品方案</text>
            <image class="icon-arrow" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
          </view>
          <view class="flex-row items-center ml-12" @click="gotoPlan">
            <text class="plan-text">服务方案</text>
            <image class="icon-arrow" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
          </view>
        </view>
      </view>
      <view class="flex-col tip-wrapper">
        <text class="self-start tip-title title-text">温馨提示：</text>
        <text class="self-stretch tip-text mt-6">
          1、确认方案前，请打开方案，查看并核对是否符合您的定制需求，方案一旦确认，方案将不允许再修改
          2、方案确认后，需要您确认并支付组件清单，代表您同意根据清单采购定制商品组件
          3、支付成功后，系统会为您自动生成组件清单，并创建一张商品订单，商品订单详细信息可前往【我的-我的商品订单】查看
        </text>
      </view>
      <u-checkbox-group class="cf-checkbox-group checkbox" v-model="checkbox" activeColor="#B09053">
        <u-checkbox
          label="我已阅读并同意该定制商品设计方案"
          name="p1g24UBD"
          shape="circle"
          iconSize="28rpx"
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
        checkbox: [],
        disableBtnStyle: {
          backgroundColor: '#c5c5c5 !important',
          border: 'unset !important',
        },
      };
    },
    methods: {
      gotoProductList() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/productList/productList` });
      },
      gotoPlan() {
        uni.navigateTo({ url: `/myOrder/pages/myOrder/servicePlan/servicePlan` });
      },
      onConfirm() {
        if (!this.chckbox.length) {
          return;
        }
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .main {
    margin: 72rpx 0 48rpx;
  }
  .header {
    padding: 16rpx 24rpx;
    background-color: #f8f8f8;
    border-radius: 8rpx;
  }
  .tip-title {
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .header-title {
    color: #8c8f95;
  }
  .plan-text {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #b09053;
  }
  .icon-arrow {
    margin-left: 8rpx;
    width: 12rpx;
    height: 22rpx;
  }
  .tip-wrapper {
    margin-top: 64rpx;
    padding: 0 20rpx;
  }
  .title-text {
    color: #000000;
  }
  .tip-text {
    color: #6d6d6d;
    font-size: 24rpx;
    line-height: 42rpx;
    text-align: justify;
  }
  .checkbox {
    margin: 40rpx 8rpx 0;
  }
</style>
