<template>
<view class="flex-col page">
  <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
  <u-cell-group class="white-fields-group cell-type" :border="false">
    <CFField label="抬头类型" :border="false" inputAlign="right">
      <u-radio-group v-model="v_model" activeColor="#B09053" iconSize="32rpx" slot="input">
        <u-radio v-model="v_model_1" label="个人或事业单位" name="rH7DCopY" labelSize="28rpx"></u-radio>
        <u-radio class="ml-28" v-model="v_model_2" label="企业" name="qkb7JjDD" labelSize="28rpx"></u-radio>
      </u-radio-group>
    </CFField>
  </u-cell-group>
  <u-cell-group class="white-fields-group cell-info" :border="false">
    <CFField label="发票抬头" placeholder="请填写企业抬头" :border="false" inputAlign="right"></CFField>
    <CFField label="单位税号" placeholder="请填写单位税号" :border="false" inputAlign="right"></CFField>
    <CFField label="开户银行" placeholder="请填写开户银行（选填）" :border="false" inputAlign="right"></CFField>
    <CFField label="银行账户" placeholder="请填写银行账户（选填）" :border="false" inputAlign="right"></CFField>
    <CFField label="企业地址" placeholder="请填写企业地址（选填）" :border="false" inputAlign="right"></CFField>
    <CFField label="企业电话" placeholder="请填写企业电话（选填）" :border="false" inputAlign="right"></CFField>
  </u-cell-group>
  <u-cell-group class="white-fields-group cell-info" :border="false">
    <CFField label="设为默认" :border="false" inputAlign="right">
      <u-radio-group v-model="v_model_3" activeColor="#B09053" iconSize="32rpx" slot="input">
        <u-radio v-model="v_model_4" name="qbIBu2iP" labelSize="28rpx"></u-radio>
      </u-radio-group>
    </CFField>
  </u-cell-group>
  <view class="fixed-bottom-safe flex-col justify-start footer-fixed">
    <view class="flex-col justify-start items-center button text-wrapper" @click="onClick">
      <text class="font btn-text">确认</text>
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
      title: '新增抬头',
      v_model: '',
      v_model_1: '',
      v_model_2: '',
      v_model_3: '',
      v_model_4: '',
    };
  },

  methods: {
    onClick() {
      uni.navigateBack();
    },
  },
};
</script>

<style scoped lang="css">
.page {
  padding-bottom: 374rpx;
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.cell-type {
  margin: 0 24rpx;
}
.font {
  font-size: 28rpx;
  font-family: 'PingFang SC';
  line-height: 40rpx;
  color: #2d2e32;
}
.cell-info {
  margin: 24rpx 24rpx 0;
}
.footer-fixed {
  padding: 42rpx 0 44rpx;
  background-color: #ffffff;
  width: 750rpx;
}
.button {
  margin: 0 40rpx;
}
.text-wrapper {
  padding: 26rpx 0 28rpx;
  background-color: #b09053;
  border-radius: 48rpx;
  width: 670rpx;
}
.btn-text {
  color: #ffffff;
  font-size: 30rpx;
  font-weight: 500;
  line-height: 42rpx;
}
</style>
