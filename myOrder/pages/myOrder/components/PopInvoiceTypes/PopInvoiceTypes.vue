<template>
  <view class="flex-col types-wrapper">
    <view class="flex-col justify-start items-center"><text class="title tiel-text">发票类型选择</text></view>
    <u-radio-group
      class="group"
      v-model="v_model"
      activeColor="#B09053"
      placement="column"
      iconSize="32rpx"
      iconPlacement="right"
    >
      <view class="flex-col list-item mt-12" v-for="(item, index) in items" :key="index">
        <u-radio :label="item.title" :name="item.title" labelSize="30rpx" labelColor="#111111"></u-radio>
        <text class="self-start desc desc-text mt-4">{{ item.desc }}</text>
      </view>
    </u-radio-group>
    <view class="flex-col justify-start items-center button btn-wrapper" @click="onSelect">
      <text class="title btn-text">确定</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        v_model: '',
        items: [
          { title: '增值税电子普通发票', desc: '增值税普通发票可作为交易凭证，用于企业报销' },
          { title: '增值税电子专用发票', desc: '专用发票在支付成功后可申请电子、纸质发票' },
        ],
      };
    },

    methods: {
      onSelect() {
        this.$emit('select');
      },
    },
  };
</script>

<style scoped lang="less">
  .types-wrapper {
    padding: 40rpx 24rpx 72rpx;
    background-color: #f8f8f8;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title {
    font-size: 30rpx;
    line-height: 42rpx;
    color: #111111;
  }
  .tiel-text {
    font-size: 32rpx;
    line-height: 44rpx;
  }
  .group {
    margin-top: 32rpx;
  }
  .list-item {
    padding: 28rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .desc {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #6d6d6d;
    font-family: 苹方;
  }
  .desc-text {
    margin-left: 4rpx;
  }
  .button {
    margin: 144rpx 16rpx 0;
  }
  .btn-wrapper {
    padding: 24rpx 0;
    background-color: #111111;
    border-radius: 48rpx;
  }
  .btn-text {
    color: #ffffff;
    font-weight: 500;
  }
</style>
