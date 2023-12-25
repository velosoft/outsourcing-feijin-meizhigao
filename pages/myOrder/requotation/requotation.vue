<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col main">
      <view class="flex-row justify-between items-baseline">
        <text class="title">描述</text>
        <text class="font count">{{ v_model.length }}/200</text>
      </view>
      <u-textarea
        class="mt-12"
        v-model="v_model"
        placeholder="请输入您的描述……"
        height="534rpx"
        :maxlength="200"
        :placeholderStyle="{ fontSize: '24rpx' }"
      ></u-textarea>
    </view>
    <view class="flex-col justify-start items-center button text-wrapper">
      <text class="font btn-text">确认提交</text>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { NavBar },
    props: {},
    data() {
      return {
        title: '申请重新报价',
        v_model: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 528rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .main {
    margin: 32rpx 24rpx 0;
  }
  .title {
    color: #2d2e32;
    font-size: 30rpx;
    font-weight: 500;
    line-height: 42rpx;
  }
  .font {
    font-size: 28rpx;
    line-height: 40rpx;
  }
  .count {
    color: #6d6d6d;
  }
  .button {
    margin: 184rpx 40rpx 0;
  }
  .text-wrapper {
    padding: 28rpx 0;
    background-color: #000000;
    border-radius: 48rpx;
  }
  .btn-text {
    color: #ffffff;
    font-weight: 500;
  }
</style>
