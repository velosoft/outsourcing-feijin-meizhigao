<template>
  <view class="flex-col root mt-60">
    <view class="flex-col justify-start items-center"
      ><text class="font_5 text_13">选择日期</text></view
    >
    <DatePickerView class="group"></DatePickerView>
    <u-button class="button" text="确认" type="primary"></u-button>
  </view>
</template>

<script>
import DatePickerView from "@/components/PickerView/DatePickerView";

export default {
  components: { DatePickerView },
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.root {
  padding: 32rpx 32rpx 72rpx 40rpx;
  background-color: #ffffff;
  border-radius: 24rpx 24rpx 0rpx 0rpx;
  .font_5 {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #b5b5b5;
  }
  .text_13 {
    color: #000000;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .group {
    margin-top: 48rpx;
  }
  .button {
    margin-right: 8rpx;
  }
}
</style>
