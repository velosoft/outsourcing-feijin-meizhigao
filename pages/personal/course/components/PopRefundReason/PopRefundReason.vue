<template>
  <view class="flex-col component-SdSXyZFT">
    <view class="flex-col items-center header"><text class="title-font title-text">请选择退款原因</text></view>
    <view class="flex-col justify-start container">
      <view class="flex-col justify-start group">
        <u-radio-group v-model="v_model">
          <u-radio class="mt-26" v-model="v_model_1" label="不需要了" name="Q5SCMBoG"></u-radio>
          <u-radio class="mt-26" v-model="v_model_2" label="找了其他家了" name="7vlB6RpE"></u-radio>
          <u-radio class="mt-26" v-model="v_model_3" label="失约未上门，又不联系" name="hgm1AEl0"></u-radio>
          <u-radio class="mt-26" v-model="v_model_4" label="方案不满意" name="81qfaamk"></u-radio>
          <u-radio class="mt-26" v-model="v_model_5" label="服务态度问题" name="MQ2GV1YI"></u-radio>
          <u-radio class="mt-26" v-model="v_model_6" label="原因描述1" name="o5DwZJkj"></u-radio>
          <u-radio class="mt-26" v-model="v_model_7" label="原因描述2" name="nP25u0dA"></u-radio>
          <u-radio class="mt-26" v-model="v_model_8" label="其他原因" name="PjR5ymEg"></u-radio>
        </u-radio-group>
      </view>
    </view>
    <u-button class="button" text="确认提交"></u-button>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
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

    methods: {},
  };
</script>

<style scoped lang="less">
  .component-SdSXyZFT {
    padding: 0 12rpx 53rpx;
    background-color: #f8f8f8;
    border-radius: 20rpx 20rpx 0rpx 0rpx;
    .header {
      padding: 48rpx 0;
      .title-font {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #2d2e32;
      }
      .title-text {
        font-weight: 700;
      }
    }
    .container {
      padding: 51.52rpx 0 30rpx;
      background-color: #ffffff;
      border-radius: 16rpx;
      .group {
        margin: 0 21.6rpx;
      }
    }
    .button {
      margin: 86rpx 28rpx 0;
    }
  }
</style>