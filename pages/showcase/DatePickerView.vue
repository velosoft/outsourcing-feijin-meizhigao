<template>
  <PopupWithButton class="mt-60" title="选择日期" buttonText="确认">
    <DatePickerView class="group"></DatePickerView>
  </PopupWithButton>
  </template>
  
  <script>
  import DatePickerView from '@/components/PickerView/DatePickerView';
  import PopupWithButton from '@/components/Popup/PopupWithButton';
  
  export default {
    components: { DatePickerView, PopupWithButton },
    props: {
      title: { type: String, default: `` },
      buttonText: { type: String, default: `` },
      disableButton: { type: String, default: `` },
    },
    data() {
      return {};
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .group {
    margin-top: 48rpx;
  }
  </style>