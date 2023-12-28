<template>
  <view class="flex-col relative page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col group">
      <cf-card title="报名信息">
        <view class="flex-col card-content mt-10">
          <cf-field
            class="field-required"
            label="姓名"
            placeholder="请输入"
            :placeholderStyle="placeholderStyle"
            inputAlign="right"
            :border="true"
          ></cf-field>
          <cf-field
            class="field-required"
            label="手机号"
            placeholder="请输入"
            :placeholderStyle="placeholderStyle"
            inputAlign="right"
            :border="true"
          ></cf-field>
          <view class="flex-row tips-content items-center">
            <text class="tips-label">注：</text>
            <text class="tips-label">报名成功后由平台工作人员联系，请保持电话通畅~</text>
          </view>
        </view>
      </cf-card>
      <goods-card class="mt-10" :goodsCard="goodsCard"></goods-card>
      <submit-info class="mt-10" :submitData="submitData"></submit-info>
    </view>
    <cart-bottom-pay-btn :goodsPrice="goodsPrice"></cart-bottom-pay-btn>
  </view>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import CfField from '@/components/Field/Field';
  import CartBottomPayBtn from '@/cart/pages/cart/components/CartBottomPayBtn/CartBottomPayBtn.vue';
  import GoodsCard from '@/cart/pages/cart/components/GoodsCard/GoodsCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import SubmitInfo from '@/cart/pages/cart/components/SubmitInfo/SubmitInfo.vue';

  export default {
    options: {
      styleIsolation: 'shared',
    },
    components: { CfCard, CfField, CartBottomPayBtn, GoodsCard, NavBar, SubmitInfo },
    props: {},
    data() {
      return {
        goodsCard: {},
        submitData: {},
        goodsPrice: {},
        title: '报名课程',
        placeholderStyle: 'font-size:26rpx;color:#9E9EA0;font-family:苹方;font-weight:400;',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    .group {
      padding: 20rpx;
      .card-content {
        .tips-content {
          margin-top: 32rpx;
          padding: 16rpx;
          background-color: #f8f2ef;
          border-radius: 8rpx;
          .tips-label {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 24rpx;
            color: #b09053;
          }
        }
      }
      /deep/ .root {
        padding: 32rpx 30rpx 16rpx !important;
      }
    }
    .field-required {
      /deep/ .u-cell__body {
        padding: 0 0 0 12rpx !important;
      }
      /deep/ .input {
        color: #111111;
        font-size: 26rpx;
        font-family: 苹方;
        font-weight: 400;
      }
    }
  }
</style>
