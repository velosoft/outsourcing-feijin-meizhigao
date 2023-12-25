<template>
  <view class="flex-col">
    <u-cell-group class="white-fields-group" :border="false">
      <CFField
        label="发票类型"
        :border="false"
        :isLink="true"
        :readonly="true"
        inputAlign="right"
        value="增值税电子专用发票"
        @click="onShowTypes"
      ></CFField>
      <CFField label="抬头类型" :border="false" inputAlign="right">
        <u-radio-group v-model="v_model" activeColor="#B09053" iconSize="32rpx" slot="input">
          <u-radio v-model="v_model_1" label="个人或事业单位" name="451mz2oQ" labelSize="28rpx"></u-radio>
          <u-radio class="ml-28" v-model="v_model_2" label="企业" name="D7srzbDo" labelSize="28rpx"></u-radio>
        </u-radio-group>
      </CFField>
      <CFField
        label="发票抬头"
        placeholder="请填写企业抬头"
        :border="false"
        :isLink="true"
        :readonly="true"
        inputAlign="right"
        @click="onShowTitles"
      ></CFField>
      <CFField label="单位税号" placeholder="请填写单位税号" :border="false" inputAlign="right"></CFField>
      <CFField label="开户银行" placeholder="请填写开户银行（选填）" :border="false" inputAlign="right"></CFField>
      <CFField label="银行账户" placeholder="请填写银行账户（选填）" :border="false" inputAlign="right"></CFField>
      <CFField label="企业地址" placeholder="请填写企业地址（选填）" :border="false" inputAlign="right"></CFField>
      <CFField label="企业电话" placeholder="请填写企业电话（选填）" :border="false" inputAlign="right"></CFField>
      <view class="flex-row justify-center items-center more-wrapper">
        <text class="more-text">查看更多</text>
        <image class="arrow-up ml-4" src="/static/images/icon_arrow_up.png" />
      </view>
    </u-cell-group>
    <u-cell-group class="white-fields-group mt-12" :border="false">
      <CFField label="发票内容" :border="false" inputAlign="right">
        <u-radio-group v-model="v_model_3" activeColor="#B09053" iconSize="32rpx" slot="input">
          <u-radio v-model="v_model_4" label="明细" name="iWHgmluP" labelSize="28rpx"></u-radio>
        </u-radio-group>
      </CFField>
    </u-cell-group>
    <u-cell-group class="white-fields-group mt-12" :border="false">
      <CFField label="开票人手机" :border="false" inputAlign="right" :value="13567699045"></CFField>
      <CFField label="开票人邮箱" placeholder="请填写邮箱号" :border="false" inputAlign="right"></CFField>
    </u-cell-group>
    <u-popup :show="showTitels" @close="onCloseTitles" mode="bottom" :round="12" :closeable="true">
      <PopInvoiceTitles @select="onCloseTitles"></PopInvoiceTitles>
    </u-popup>
    <u-popup :show="showTypes" @close="onCloseTypes" mode="bottom" :round="12" :closeable="true">
      <PopInvoiceTypes @select="onCloseTypes"></PopInvoiceTypes>
    </u-popup>
  </view>
</template>

<script>
  import CFField from '@/components/Field/Field';
  import PopInvoiceTitles from '@/myOrder/pages/myOrder/components/PopInvoiceTitles/PopInvoiceTitles.vue';
  import PopInvoiceTypes from '@/myOrder/pages/myOrder/components/PopInvoiceTypes/PopInvoiceTypes.vue';

  export default {
    components: { CFField, PopInvoiceTitles, PopInvoiceTypes },
    props: {},
    data() {
      return {
        v_model: '',
        v_model_1: '',
        v_model_2: '',
        v_model_3: '',
        v_model_4: '',
        showTitels: false,
        showTypes: false,
      };
    },

    methods: {
      onShowTitles() {
        this.showTitels = true;
      },
      onCloseTitles() {
        this.showTitels = false;
      },
      onShowTypes() {
        this.showTypes = true;
      },
      onCloseTypes() {
        this.showTypes = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .more-wrapper {
    margin: 20rpx 0;
  }
  .more-text {
    color: #9e9ea0;
    font-size: 24rpx;
    line-height: 34rpx;
  }
  .arrow-up {
    width: 16rpx;
    height: 8rpx;
  }
</style>
