<template>
  <view class="flex-col list-item">
    <view class="flex-row items-center">
      <image
        class="avatar"
        src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=4d746c3bee1d1aea29df06b6a87a380c.png"
      />
      <view class="flex-col items-start ml-8">
        <text class="name_font name-text">张小鱼（领队）</text>
        <text class="time mt-2">2023-05-10 12:00:00</text>
      </view>
    </view>
    <view class="desc-text mt-8 flex-col">
      <text>第一步：领队要对整理归位的物品进行最后的陈列调整，保证拍照效果；</text>
      <text>第二步：按照大中小空间，多个角度拍摄整理效果；</text>
    </view>
    <view class="grid mt-8">
      <image
        class="grid-item"
        src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=b59bd9483fd17a7f2b233e23bd36d89a.png"
        v-for="(item, index) in items"
        :key="index"
      />
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .name_font {
    font-size: 28rpx;
    line-height: 36rpx;
    color: #111111;
  }
  .list-item {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .avatar {
    border-radius: 50%;
    width: 84rpx;
    height: 84rpx;
  }
  .name-text {
    font-size: 26rpx;
  }
  .time {
    font-size: 20rpx;
    line-height: 28rpx;
    color: #6d6d6d;
  }
  .desc-text {
    font-size: 22rpx;
    line-height: 40rpx;
    color: #6d6d6d;
  }
  .grid {
    height: 314rpx;
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 16rpx;
    column-gap: 16rpx;
  }
  .grid-item {
    border-radius: 16rpx;
    width: 150rpx;
    height: 150rpx;
  }
</style>
