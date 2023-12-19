<template>
  <PopupWithButton title="选择日期">
    <DatePickerView></DatePickerView>
    <text class="font_2 text_18">确认</text>
  </PopupWithButton>
</template>

<script>
  import DatePickerView from '@/components/PickerView/DatePickerView';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { DatePickerView, PopupWithButton },
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .font_2 {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    font-weight: 500;
    color: #b5b5b5;
  }
  .text_18 {
    color: #ffffff;
  }
</style>