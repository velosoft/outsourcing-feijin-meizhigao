<template>
  <PopupWithButton title="预约服务时间" buttonText="确认">
    <view class="flex-col justify-start group view">
      <u-cell-group :border="false">
        <CFField
          label="日期"
          :readonly="true"
          :isLink="true"
          @click="onClick"
        ></CFField>
        <CFField label="时间" :readonly="true"></CFField>
      </u-cell-group>
    </view>
    <u-popup :show="popupVisible" @close="onClose" :round="12" mode="bottom">
      <DatePicker></DatePicker>
    </u-popup>
  </PopupWithButton>
</template>

<script>
import CFField from "@/components/Field/Field";
import DatePicker from "./DatePicker.vue";
import PopupWithButton from "@/components/Popup/PopupWithButton";

export default {
  components: { CFField, DatePicker, PopupWithButton },
  props: {},
  data() {
    return {
      popupVisible: false,
    };
  },

  methods: {
    onClick() {
      this.popupVisible = true;
    },
    onClose() {
      this.popupVisible = false;
    },
  },
};
</script>

<style scoped lang="less">
.group {
  margin-top: 24rpx;
}
.view {
  padding-bottom: 160rpx;
}
</style>
