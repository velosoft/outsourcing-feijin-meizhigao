<template>
  <view class="flex-row items-center search-wrap" @tap="goSearch">
    <image class="search-image" src="/static/images/icon_search_02.png" />
    <input class="uni-input flex-1" placeholder-class="placeholder-text" placeholder="搜索" :disabled="false" />
  </view>
</template>

<script>
  export default {
    methods: {
      goSearch() {
        uni.navigateTo({ url: '/pages/searchPage/searchPage' });
      },
    },
  };
</script>

<style scoped lang="less">
  .search-wrap {
    padding: 16rpx 32rpx;
    background-color: #f0f0f0;
    border-radius: 100rpx;
    height: 68rpx;
  }
  .uni-input {
    margin-left: 12rpx;
    font-size: 26rpx;
    font-family: PingFang SC Bold;
    font-weight: 700;
    line-height: 26rpx;
  }

  .search-image {
    width: 32rpx;
    height: 30rpx;
  }
  .placeholder-text {
    color: #a7a7a7;
    font-size: 26rpx;
    font-family: PingFang SC Bold;
    font-weight: 700;
    line-height: 26rpx;
  }
</style>
