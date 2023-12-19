<template>
  <PopupWithButton title="选择日期" buttonText="确认">
    <DatePickerView class="section-top"></DatePickerView>
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
  .section-top {
    margin-top: 50rpx;
  }
</style>