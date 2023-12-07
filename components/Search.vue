<template>
  <view class="flex-row items-center">
    <view
      class="flex-row flex-1 items-center search"
      :style="{
        background: background,
      }"
    >
      <view class="search-icon">
        <image
          class="search-image"
          src="../static/images/icon_search_01.png"
          mode="aspectFit|aspectFill|widthFix"
          lazy-load="false"
          binderror=""
          bindload=""
        ></image>
      </view>
      <view class="flex-col flex-1 search-input-wrap">
        <input
          class="search-input"
          focus
          :placeholder="placeholder"
          placeholder-class="input-placeholder"
        />
      </view>
    </view>
    <view class="right-btn">
      <text class="right-text">搜索</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "搜索你想要的内容",
    },
    background: {
      type: String,
      default: "#F8F8F8",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
.search {
  height: 76rpx;
  border-radius: 38rpx;
  background: #ffffff;
  padding: 20rpx 32rpx;
}
.search-icon {
  margin-right: 16rpx;
}
.search-image {
  width: 32rpx;
  height: 32rpx;
}
.search-input-wrap {
}
.search-input {
  font-family: 苹方;
  font-size: 28px;
  font-weight: 400;
}
.input-placeholder {
  font-family: 苹方;
  font-size: 28rpx;
  font-weight: 400;
  color: #d3d3d3;
}
.right-btn {
  margin-left: 32rpx;
  margin-right: 12rpx;
}

.right-text {
  font-family: PingFangSC;
  font-size: 28rpx;
  font-weight: 500;
  line-height: 28rpx;
  color: rgba(3, 3, 5, 1);
}
</style>
