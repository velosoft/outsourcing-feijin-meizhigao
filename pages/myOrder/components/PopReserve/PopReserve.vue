<template>
  <PopupWithButton title="预约服务时间" buttonText="确认" @click="onConfirm">
    <u-cell-group class="white-fields-group group" :border="false">
      <CFField
        label="日期"
        :border="true"
        :readonly="true"
        :isLink="true"
        inputAlign="right"
        value="2023-04-14"
        @click="onShowDate"
      ></CFField>
      <CFField
        label="时间"
        :border="true"
        :readonly="true"
        :isLink="true"
        inputAlign="right"
        value="13:00"
        @click="onShowTime"
      ></CFField>
    </u-cell-group>
    <u-popup :show="showDate" @close="onCloseDate" mode="bottom" :round="14" :closeable="true">
      <DateTimePickerYYD @click="onCloseDate"></DateTimePickerYYD>
    </u-popup>
    <u-popup :show="showTime" @close="onCloseTime" mode="bottom" :round="14" :closeable="true">
      <DateTimePickerHM @click="onCloseTime"></DateTimePickerHM>
    </u-popup>
  </PopupWithButton>
</template>

<script>
  import CFField from '@/components/Field/Field';
  import DateTimePickerHM from '@/components/DateTimePickerHM/DateTimePickerHM.vue';
  import DateTimePickerYYD from '@/components/DateTimePickerYYD/DateTimePickerYYD.vue';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { CFField, DateTimePickerHM, DateTimePickerYYD, PopupWithButton },
    props: {},
    data() {
      return {
        showDate: false,
        showTime: false,
      };
    },

    methods: {
      onShowDate() {
        this.showDate = true;
      },
      onCloseDate() {
        this.showDate = false;
      },
      onShowTime() {
        this.showTime = true;
      },
      onCloseTime() {
        this.showTime = false;
      },
      onConfirm() {
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .group {
    margin: 26rpx 0 160rpx;
  }
</style>
