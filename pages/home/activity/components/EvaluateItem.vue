<template>
  <view class="flex-col list-item mt-10">
    <view class="flex-col">
      <view class="flex-row justify-between">
        <view class="flex-row">
          <image
            class="shrink-0 avator"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=icon_avator.png"
          />
          <text class="self-start title-font nickname ml-6">朱**</text>
        </view>
        <text class="self-start side-font time-text">2023-07-18</text>
      </view>
      <view class="flex-row items-center evaluate">
        <text class="self-start title-font">综合评分:</text>
        <Rate class="justify-center"></Rate>
      </view>
      <view class="flex-col justify-start items-center evaluate">
        <text class="evaluate-text">
          商品收纳位置大，质量妥妥商品收纳位置大，质量妥妥商品收纳位置大，质量妥妥
        </text>
      </view>
    </view>
    <view class="flex-col mt-20">
      <text class="self-start title-font">服务评价</text>
      <view class="flex-col self-stretch mt-20">
        <view
          class="flex-row items-center justify-between evaluate"
          v-for="(item, i) in items_1"
          :key="i"
        >
          <text class="self-start evaluate-label">整体满意度</text>
          <Rate></Rate>
        </view>
      </view>
      <view class="flex-col justify-start items-center self-stretch mt-20">
        <image
          class="ai-background-image"
          src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=ee395177d17a63a7161859408151544f.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
import Rate from "./Rate.vue";
export default {
  components: { Rate },
  props: {
    item: { type: Object },
  },
  data() {
    return {
      items_1: [null, null, null],
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.list-item {
  padding: 32rpx 28rpx;
  background-color: #ffffff;
  border-radius: 12rpx;
  &:first-child {
    margin-top: 0;
  }
  .avator {
    border-radius: 28rpx;
    width: 56rpx;
    height: 56rpx;
  }
  .title-font {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    font-weight: 700;
    color: #030305;
  }
  .nickname {
    margin-top: 8rpx;
  }
  .side-font {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #a7a7a7;
  }
  .time-text {
    margin-top: 16rpx;
    font-size: 24rpx;
    line-height: 24rpx;
  }
  .evaluate {
    margin-top: 24rpx;
    .image_1 {
      margin-left: 8rpx;
    }
    .evaluate-text {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 48rpx;
      color: #030305;
    }
    &:first-child {
      margin-top: 0;
    }
    .evaluate-label {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #6c6c6c;
    }
  }
  .ai-background-image {
    width: 654rpx;
    height: 152rpx;
  }
}
</style>
