<template>
  <view style="padding: 200rpx 32rpx; background-color: antiquewhite">
    <view class="flex-row items-center search">
      <view class="search-icon">
        <image
          class="search-image"
          src="../../../static/image/icon_search_01.png"
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
          placeholder="搜索服务"
          placeholder-class="input-placeholder"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
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
  font-size: 14px;
  font-weight: 400;
}
.input-placeholder {
  font-family: 苹方;
  font-size: 14px;
  font-weight: 400;
  color: #D3D3D3;
}
</style>
