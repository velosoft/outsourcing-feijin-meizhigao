<template>
    <view class="flex-col page">
      <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
      <view class="flex-col cell-wrap">
        <u-cell-group class="default-fields" :border="false">
          <CFField label="联系人" placeholder="请输入联系人姓名"></CFField>
          <CFField label="联系电话" placeholder="请输入联系电话"></CFField>
          <CFField label="收获地址" placeholder="请选择收获地址" :isLink="true"></CFField>
          <CFField label="详细地址" placeholder="请输入详细地址"></CFField>
          <CFField label="设为默认地址" input-align="right">
            <u-switch v-model="isDefaultAddress" activeColor="#b09053" slot="input"></u-switch>
          </CFField>
        </u-cell-group>
        <view class="fixed-bottom-safe2 flex-col footer-btn">
          <u-button class="cf-btn-black" text="确定" type="primary" size="large" shape="circle"></u-button>
        </view>
      </view>
    </view>
    </template>
    
    <script>
    import CFField from '@/components/Field/Field';
    import NavBar from '@/components/NavBar/NavBar.vue';
    
    export default {
      components: { CFField, NavBar },
      props: {},
      data() {
        return {
          name: '',
          isDefaultAddress: false,
          tel: '',
          address: '',
          addressDetial: '',
          title: '收货地址',
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
    }
    </style>