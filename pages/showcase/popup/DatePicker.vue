<template>
  <!-- 
        DatePickerView 打标签的用法参见这个页面
        https://dev.ft.velosoft.cn/projects/657a78796e48dd0011eab2b4/pages/657d51a6d6bce000114cf832 
    -->
  <PopupWithButton title="选择日期" buttonText="确认">
    <DatePickerView class="group"></DatePickerView>
  </PopupWithButton>
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
.group {
  margin-top: 48rpx;
}
</style>
