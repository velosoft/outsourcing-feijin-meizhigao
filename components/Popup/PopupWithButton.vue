<template>
  <view class="flex-col root" :style="{ background: bgColor, padding: padding }">
    <view class="flex-col justify-start items-center title">
      <text class="font_5 text_13">{{ title }}</text>
    </view>
    <slot></slot>
    <u-button
      class="cf-btn-black"
      :style="{ margin: btnMargin }"
      :text="buttonText"
      type="primary"
      shape="circle"
      :disabled="disabledButton"
      :customStyle="btnStyle"
      @click="onClick"
    ></u-button>
  </view>
</template>

<script>
  import DatePickerView from '@/components/PickerView/DatePickerView';

  export default {
    components: { DatePickerView },
    options: {
      styleIsolation: 'shared',
    },
    props: {
      title: { type: String, default: `标题` },
      buttonText: { type: String, default: `确定` },
      disabledButton: { type: Boolean, default: false },
      bgColor: { type: String, default: `#ffffff` },
      btnStyle: { type: Object, default: {} },
      padding: { type: String, default: `32rpx 32rpx 72rpx 32rpx` },
      btnMargin:  { type: String, default: `` },
    },
    data() {
      return {};
    },

    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
</script>

<style scoped lang="less">
  .root {
    // padding: 32rpx 32rpx 72rpx 40rpx;
    // background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
    .font_5 {
      font-size: 28rpx;
      line-height: 40rpx;
      font-weight: 500;
      color: #b5b5b5;
    }
    .text_13 {
      color: #111111;
      font-size: 30rpx;
      line-height: 42rpx;
    }
    .group {
      margin-top: 48rpx;
    }
  }
</style>
