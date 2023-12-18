<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col justify-start body">
      <u-cell-group class="default-fields" :border="false">
        <CFField label="联系人" placeholder="请输入联系人姓名"></CFField>
        <CFField label="联系电话" placeholder="请输入联系电话"></CFField>
        <CFField
          label="收货地址"
          placeholder="请选择收货地址"
          :readonly="true"
          :isLink="true"
        ></CFField>
        <CFField label="详细地址" placeholder="请输入详细地址"></CFField>
        <CFField
          label="设为默认地址"
          :border="false"
          inputAlign="right"
        ></CFField>
      </u-cell-group>
    </view>
    <view class="flex-col justify-start fixed group_4">
      <u-button
        class="button"
        text="确定"
        type="primary"
        shape="circle"
      ></u-button>
    </view>
  </view>
</template>

<script>
import CFField from "@/components/Field/Field";
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  components: { CFField, NavBar },
  props: {},
  data() {
    return {
      title: "",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  .body {
    padding: 32rpx;
  }
  .fixed {
    position: fixed;
    left: 0rpx;
    top: 1330rpx;
    .button {
      bottom: 0rpx;
      margin: 0 32rpx;
    }
  }
  .group_4 {
    width: 100%;
  }
}
</style>
