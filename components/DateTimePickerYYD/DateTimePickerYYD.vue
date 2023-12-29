<template>
  <popup-with-button class="pop-wrapper" title="选择日期" buttonText="确认" @click="onClick">
    <date-picker-view class="content" type="date" :date="date" @change="onChange"></date-picker-view>
  </popup-with-button>
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
  .content {
    margin-top: 50rpx;
  }

  .pop-wrapper {
    /deep/ .root {
      padding-top: 40rpx !important;
    }
  }
</style>
