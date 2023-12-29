<template>
  <popup-with-button class="pop-wrapper" title="预约服务时间" buttonText="确认" @click="onConfirm">
    <u-cell-group class="white-fields-group group" :border="false">
      <cf-field
        label="日期"
        :border="true"
        :readonly="true"
        :isLink="true"
        inputAlign="right"
        value="2023-04-14"
        @click="onShowDate"
      ></cf-field>
      <cf-field
        class="mt-14"
        label="时间"
        :border="true"
        :readonly="true"
        :isLink="true"
        inputAlign="right"
        value="13:00"
        @click="onShowTime"
      ></cf-field>
    </u-cell-group>
    <u-popup :show="showDate" @close="onCloseDate" mode="bottom" :round="14" :closeable="true">
      <date-time-picker-yyd @click="onCloseDate"></date-time-picker-yyd>
    </u-popup>
    <u-popup :show="showTime" @close="onCloseTime" mode="bottom" :round="14" :closeable="true">
      <date-time-picker-hm @click="onCloseTime"></date-time-picker-hm>
    </u-popup>
  </popup-with-button>
</template>

<script>
  import CfField from '@/components/Field/Field';
  import DateTimePickerHm from '@/components/DateTimePickerHM/DateTimePickerHM.vue';
  import DateTimePickerYyd from '@/components/DateTimePickerYYD/DateTimePickerYYD.vue';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    options: {
      styleIsolation: 'shared',
    },
    components: { CfField, DateTimePickerHm, DateTimePickerYyd, PopupWithButton },
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
    margin: 54rpx 0 160rpx;
  }
  .white-fields-group {
    /deep/ .u-cell__title-text {
      color: #6d6d6d !important;
    }
    /deep/ .u-cell__body {
      height: 80rpx;
      padding: 0 30rpx !important;
    }
  }

  .pop-wrapper {
    /deep/ .root {
      padding-top: 40rpx !important;
    }
  }
</style>
