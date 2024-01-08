<template>
  <view class="flex-col justify-start items-center relative group-main">
    <view class="flex-row self-stretch justify-between items-centeer relative section-main">
      <view
        class="flex-1 section-sub"
        :class="isBarActive(index) ? 'active' : ''"
        v-for="(item, index) of status.slice(1)"
        :key="index"
      ></view>
    </view>
    <view class="flex-row justify-between equal-division group-container">
      <view class="flex-col flex-1 items-center label-item" v-for="(item, index) of status" :key="index">
        <image class="self-center image-round" :src="isIconActive(index) ? activeIcon : deactiveIcon" />
        <text class="text-style mt-12">{{ item }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      status: {
        type: Array,
        default: ['提交申请', '平台审核', '退回商品', '客服发起退款', '退款完成'],
      },
      current: {
        type: String,
        default: '客服发起退款',
      },
    },
    data() {
      return {
        activeIcon:
          'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=cc3bf9afff1e070c17fd812a190aa3fd.png',
        deactiveIcon:
          'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=aec10ca5cd00c3ca97abb24ee064e419.png',
      };
    },
    methods: {
      isIconActive(index) {
        let currentIndex = this.status.indexOf(this.current);
        if (index > currentIndex) {
          return false;
        }
        return true;
      },
      isBarActive(index) {
        let currentIndex = this.status.indexOf(this.current);
        if (index >= currentIndex) {
          return false;
        }
        return true;
      },
    },
  };
</script>

<style scoped lang="less">
  .group-main {
    padding: 16rpx 0 72rpx;
  }
  .section-main {
    background-color: #dec9a0;
    box-shadow: 0rpx 4rpx 8rpx 0rpx #e5dfd2;
    border-radius: 8rpx;
    // width: 554rpx;
    margin: 0 100rpx;
  }
  .section-sub {
    border-radius: 8rpx;
    // width: 282rpx;
    height: 16rpx;
    &.active {
      background-image: linear-gradient(180deg, #d8c38b 0%, #b09053 100%);
    }
  }
  .equal-division {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .group-container {
    padding: 0 26rpx;
  }
  .group-item {
    flex: 1 1 138rpx;
  }
  .label-item {
    padding: 8rpx 0rpx;
    min-height: fit-content;
  }
  .image-round {
    border-radius: 50%;
    width: 32rpx;
    height: 32rpx;
  }
  .text-style {
    font-size: 22rpx;
    font-family: 'PingFang SC';
    line-height: 32rpx;
    color: #2d2e32;
  }
  .equal-division-item {
    padding: 8rpx 16rpx;
  }
  .group-padding-secondary {
    padding: 8rpx 0;
  }
</style>
