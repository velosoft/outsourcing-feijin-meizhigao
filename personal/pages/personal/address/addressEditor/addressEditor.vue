<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col cell-wrap">
      <u-cell-group class="default-fields" :border="false">
        <cf-Field label="联系人" placeholder="请输入联系人姓名" :placeholderStyle="placeholderStyle"></cf-Field>
        <cf-field label="联系电话" placeholder="请输入联系电话" :placeholderStyle="placeholderStyle"></cf-field>
        <cf-field
          label="收获地址"
          placeholder="请选择收获地址"
          :isLink="true"
          :placeholderStyle="placeholderStyle"
        ></cf-field>
        <cf-field label="详细地址" placeholder="请输入详细地址" :placeholderStyle="placeholderStyle"></cf-field>
        <cf-field label="设为默认地址" input-align="right">
          <u-switch class="primary-switch" v-model="isDefaultAddress" activeColor="#b09053" slot="input"></u-switch>
        </cf-field>
      </u-cell-group>
      <view class="fixed-bottom-safe2 flex-col footer-btn">
        <u-button class="cf-btn-black" text="确定" type="primary" size="large" shape="circle"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
  import CfField from '@/components/Field/Field';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { CfField, NavBar },
    props: {},
    data() {
      return {
        name: '',
        isDefaultAddress: false,
        tel: '',
        address: '',
        addressDetial: '',
        title: '收货地址',
        placeholderStyle: "color:#8C8F95;font-size:28rpx;font-family: '苹方'",
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    .cell-wrap {
      padding: 40rpx 32rpx;
      .footer-btn {
        padding: 32rpx;
      }
    }
    .default-fields {
      /deep/ .u-cell__title-text {
        color: #111111 !important;
        font-size: 28rpx !important;
        font-family: '苹方';
      }
      /deep/ input {
        font-size: 28rpx;
        font-family: '苹方';
        font-weight: bold;
        color: #333444;
      }
      /deep/ .u-cell__body {
        border-bottom: 1px solid #eeeeee;
      }
    }
  }
</style>
