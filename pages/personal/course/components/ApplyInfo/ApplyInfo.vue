<template>
  <view class="flex-col container">
    <text class="title-font title">报名信息</text>
    <u-form class="form-wrap">
      <u-form-item class="mt-6" label="姓名">
        <u-input v-model="v_model" placeholder="黄先生" slot="right"></u-input>
      </u-form-item>
      <u-form-item label="手机号">
        <u-input v-model="v_model_1" :placeholder="13654652369" slot="right"></u-input>
      </u-form-item>
    </u-form>
    <text class="tips">注：报名成功后由平台工作人员联系，请保持电话通畅~</text>
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
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .container {
    padding: 24rpx 24rpx 40rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .title-font {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #2d2e32;
    }
    .title {
      font-size: 30rpx;
      font-weight: 700;
      line-height: 30rpx;
    }
    .form-wrap {
      align-self: stretch;
      margin-top: 40rpx;
    }
    .tips {
      margin-top: 20rpx;
      color: #bb3e0c;
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
    }
  }
</style>