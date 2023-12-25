<template>
  <view class="flex-col page">
    <u-cell-group title="高频组件" class="group">
      <u-cell title="按钮 Button" isLink url="/showcase/pages/showcase/button"></u-cell>
      <u-cell title="吸顶布局 Sticky" isLink url="/showcase/pages/showcase/sticky/index"></u-cell>

      <u-cell title="底部定位 Fixed Bottom" isLink url="/showcase/pages/showcase/fixed/fixed"></u-cell>
    </u-cell-group>

    <u-cell-group title="导航" class="group">
      <u-cell title="标签页 Tabs" isLink url="/showcase/pages/showcase/tabs" />
    </u-cell-group>

    <u-cell-group title="表单" class="group">
      <u-cell title="输入框 Field" isLink url="/showcase/pages/showcase/field/index" />
      <u-cell title="选择器 Selector" isLink url="/showcase/pages/showcase/selector" />
      <u-cell title="单选 Radio" isLink url="/showcase/pages/showcase/radio" />
      <u-cell title="数字加减 Number Box" isLink url="/showcase/pages/showcase/numberbox/index" />
      <u-cell title="时期时间选择器 DateTimePickerView" isLink url="/showcase/pages/showcase/DateTimePickerView" />
    </u-cell-group>

    <u-cell-group title="弹出层" class="group">
      <u-cell title="弹浮层 Popup" isLink url="/showcase/pages/showcase/popup/index" />
    </u-cell-group>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    padding: 32rpx;
    background-color: #f2f2f2;
  }

  .group {
    background-color: #ffffff;
    margin-top: 20px;
  }
</style>
