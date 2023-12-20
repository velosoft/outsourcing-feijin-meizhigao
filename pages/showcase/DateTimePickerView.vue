<template>
  <view class="root">
    <!-- datetime", "date", "time", "year-month", "month-day", "datehour -->

    <PopupWithButton class="mt-60" title="默认不设置" buttonText="确认">
      <DatePickerView class="group"></DatePickerView>
    </PopupWithButton>

    <PopupWithButton class="mt-60" title="datetime" buttonText="确认">
      <DatePickerView class="group" type="datetime"></DatePickerView>
    </PopupWithButton>

    <PopupWithButton title="date" buttonText="确认" class="mt-60">
      <DatePickerView class="section-top" type="date"></DatePickerView>
    </PopupWithButton>

    <PopupWithButton title="year-month" buttonText="确认" class="mt-60">
      <DatePickerView class="section-top" type="year-month"></DatePickerView>
    </PopupWithButton>

    <PopupWithButton title="month-day" buttonText="确认" class="mt-60">
      <DatePickerView class="section-top" type="month-day"></DatePickerView>
    </PopupWithButton>

    <PopupWithButton title="datehour" buttonText="确认" class="mt-60">
      <DatePickerView class="section-top" type="datehour"></DatePickerView>
    </PopupWithButton>

    <PopupWithButton title="time" buttonText="确认" class="mt-60">
      <DatePickerView class="section-top" type="time"></DatePickerView>
    </PopupWithButton>
  </view>
</template>

<script>
import DatePickerView from "@/components/PickerView/DatePickerView";
import PopupWithButton from "@/components/Popup/PopupWithButton";

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
.root {
  display: flex;
  flex-direction: column;
  padding: 32rpx;
  background-color: #aaaaaa;
}
.group {
  margin-top: 48rpx;
}
</style>
