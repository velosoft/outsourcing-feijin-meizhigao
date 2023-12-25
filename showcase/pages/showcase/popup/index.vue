<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col flex-1 group_3">
      <CFField label="联系人" placeholder="野原新之助"></CFField>
      <CFField label="联系电话" :placeholder="15812345678"></CFField>
      <CFField label="收货地址" placeholder="广东省 广州市 天河区"></CFField>
      <CFField label="详细地址" placeholder="东宏国际广场"></CFField>
      <CFField label="设为默认地址"></CFField>
      <view
        class="flex-col justify-start items-center button text-wrapper"
        @click="onClick"
      >
        <text class="font_2 text_10">点我看效果</text>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="bottom"
      :round="12"
      :closeable="true"
    >
      <BookDatePopup></BookDatePopup>
    </u-popup>
  </view>
</template>

<script>
import BookDatePopup from "./BookDatePopup.vue";
import CFField from "@/components/Field/Field";
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  components: { BookDatePopup, CFField, NavBar },
  props: {},
  data() {
    return {
      title: "",
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
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_3 {
    padding: 32rpx 32rpx 208rpx;
    overflow-y: auto;
    .button {
      margin-top: 616rpx;
      .font_2 {
        font-size: 28rpx;
        line-height: 28rpx;
        font-weight: 700;
        color: #333444;
      }
      .text_10 {
        color: #ffffff;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
    .text-wrapper {
      padding: 24rpx 0 40rpx;
      background-color: #000000;
      border-radius: 44rpx;
    }
  }
}
</style>
F
