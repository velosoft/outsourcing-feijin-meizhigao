<template>
  <view class="flex-row justify-between">
    <navigator url="../home/activity/activityShop" hover-class="none">
      <view
      class="flex-row items-center classify-card classify-card-left"
    >
      <view class="classify-con">
        <view class="flex-col justify-center items-center tag tag-left">
          <text class="tag-text">秒杀活动</text>
        </view>
        <text class="tag-down">让你购物省心又省钱</text>
      </view>
      <image
        class="classify-bg-left"
        src="../../../static/images/classify_left.png"
      />
    </view>
    </navigator>

    <navigator url="../home/activity/activityShop" class="ml-8" hover-class="none">
      <view
      class="flex-row items-center classify-card classify-card-right"
    >
      <view class="classify-con">
        <view class="flex-col justify-center items-center tag tag-right">
          <text class="tag-text">领券中心</text>
        </view>
        <text class="tag-down">领券下单更优惠</text>
      </view>
      <image
        class="classify-bg-right"
        src="../../../static/images/classify_right.png"
      />
    </view>
    </navigator>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  methods: {
    goto(url) {
      uni.navigateTo({
        url: "/pages/listPage/index",
      });
    },
  },
};
</script>

<style scoped lang="less">
.classify-card {
  width: 332rpx;
  height: 150rpx;
  position: relative;
  padding: 24rpx;
  border-radius: 3px;

  &-left {
    background: rgba(236, 236, 236, 0.4);
  }
  &-right {
    background: rgba(214, 214, 214, 0.4);
  }
  .classify-bg-left {
    position: absolute;
    bottom:8rpx;
    right: 16rpx;
    width: 100rpx;
    height: 100rpx;
  }
  .classify-bg-right {
    position: absolute;
    bottom: 4rpx;
    right: 16rpx;
    width: 130rpx;
    height: 130rpx;
  }
}
.classify-con {
  .tag {
    width: 116rpx;
    height: 40rpx;
    padding: 0 10rpx;

    &-left {
      background: #b09053ff;
    }

    &-right {
      background-color: #bb3e0c;
    }
    .tag-text {
      font-family: PingFangSC;
      font-size: 24rpx;
      font-weight: 500;
      line-height: 40rpx;
      color: rgba(255, 255, 255, 1);
    }
  }
  .tag-down {
    font-family: 苹方;
    font-size: 20rpx;
    font-weight: 400;
    line-height: 28rpx;
    color: rgba(3, 3, 5, 1);
  }
}
</style>
