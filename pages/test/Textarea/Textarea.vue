<template>
  <view style="padding: 200rpx 32rpx">
    <u--textarea
      class="textarea-wrap"
      v-model="value1"
      placeholder="请输入..."
      placeholderClass="textarea-placeholder"
    ></u--textarea>
  </view>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
    };
  },
};
</script>

<style lang="less">
.textarea-wrap {
}
.textarea-wrap ::v-deep .u-textarea {
  background: #ffffff !important;
  border: 1px solid #e8e8e8 !important;
  border-radius: 8rpx !important;
  //   min-height: 234rpx !important;
  padding: 28rpx 32rpx !important;
}
.textarea-wrap ::v-deep .u-textarea__field {
  // 输入框样式
  height: unset !important;
  min-height: 180rpx !important;
  font-family: 苹方 !important;
  font-size: 28rpx !important;
  line-height: 40rpx !important;
  color: #030305 !important;
}
.textarea-placeholder {
  font-family: 苹方;
  font-size: 28rpx;
  font-weight: 400;
  line-height: 40rpx;
  color: #d3d3d3;
}
.textarea-wrap ::v-deep .u-textarea__count {
  // 统计字数 样式
}
</style>
