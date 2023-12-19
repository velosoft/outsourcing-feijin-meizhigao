<template>
  <view class="flex-col component-gTy43iIr">
    <view class="flex-col justify-start items-center header">
      <text class="title-font title-text">请选择取消原因</text>
    </view>
    <u-radio-group
      class="radios"
      v-model="v_model"
      activeColor="#B09053"
      inactiveColor="#D2D2D2"
      placement="column"
      iconPlacement="right"
    >
      <u-radio v-model="v_model_1" label="不需要了" name="mNpj9RPd"></u-radio>
      <u-radio class="mt-25" v-model="v_model_2" label="拍多了" name="cRT6FsDg"></u-radio>
      <u-radio class="mt-25" v-model="v_model_3" label="商家缺货" name="jKOiHkR9"></u-radio>
      <u-radio class="mt-25" v-model="v_model_4" label="不需要了" name="eqyvgs7O"></u-radio>
      <u-radio class="group_8" v-model="v_model_5" label="拍错了" name="LjMuuucO"></u-radio>
      <u-radio class="group_9" v-model="v_model_6" label="暂时不想要了" name="iV9CvwiE"></u-radio>
      <u-radio class="group_9" v-model="v_model_7" label="商家缺货" name="tZp2WXOP"></u-radio>
      <u-radio class="group_8" v-model="v_model_8" label="其他原因" name="gDfgR5Tc"></u-radio>
    </u-radio-group>
    <view class="flex-col justify-start items-center button button-wrapper" @onSave="onSave">
      <text class="title-font button-text">确认提交</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { reasons: { type: Array, default: () => [] } },
    data() {
      return {
        v_model: '',
        v_model_1: '',
        v_model_2: '',
        v_model_3: '',
        v_model_4: '',
        v_model_5: '',
        v_model_6: '',
        v_model_7: '',
        v_model_8: '',
      };
    },

    methods: {
      onSave() {
        this.onClose();
      },
    },
  };
</script>

<style scoped lang="css">
  .mt-25 {
    margin-top: 50rpx;
  }
  .component-gTy43iIr {
    padding: 0 12rpx 54rpx;
    background-color: #f8f8f8;
    border-radius: 20rpx 20rpx 0rpx 0rpx;
  }
  .header {
    padding: 32rpx 0 46rpx;
  }
  .title-font {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    font-weight: 500;
  }
  .title-text {
    color: #000000;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .radios {
    padding: 54rpx 24rpx 26rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .group_8 {
    margin-top: 52rpx;
  }
  .group_9 {
    margin-top: 48rpx;
  }
  .button {
    margin: 86rpx 28rpx 0;
  }
  .button-wrapper {
    padding: 26rpx 0 28rpx;
    background-color: #000000;
    border-radius: 48rpx;
  }
  .button-text {
    color: #ffffff;
    font-size: 30rpx;
    line-height: 42rpx;
  }
</style>
