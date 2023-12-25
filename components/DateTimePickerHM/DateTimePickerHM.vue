<template>
  <PopupWithButton title="选择时间" buttonText="确认" @click="onClick">
    <DatePickerView class="group" type="time" :date="date" @change="onChange"></DatePickerView>
  </PopupWithButton>
</template>

<script>
  import DatePickerView from '@/components/PickerView/DatePickerView';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { DatePickerView, PopupWithButton },
    props: {
      date: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {
        val: {},
      };
    },
    methods: {
      onChange(val) {
        this.val = val;
      },
      onClick() {
        this.$emit('click', this.val);
      },
    },
  };
</script>

<style scoped lang="less">
  .group {
    margin-top: 50rpx;
  }
</style>
