<template>
  <PopupWithButton :title="title" :buttonText="buttonText" @click="onClick">
    <DatePickerView class="mt-50" :type="type" :date="date" @change="onChange"></DatePickerView>
  </PopupWithButton>
</template>

<script>
  import DatePickerView from '@/components/PickerView/DatePickerView';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { DatePickerView, PopupWithButton },
    props: {
      type: {
        type: String,
        default: 'year-month',
      },
      buttonText: {
        type: String,
        default: '确定',
      },
      title: {
        type: String,
        default: '选择日期',
      },
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
    mounted() {
      this.val = this.date;
    },

    methods: {
      onClick() {
        this.$emit('click', this.val);
      },
      onChange(val) {
        this.val = val;
      },
    },
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
