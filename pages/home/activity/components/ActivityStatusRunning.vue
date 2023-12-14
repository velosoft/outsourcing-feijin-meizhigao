<template>
  <view
    class="flex-row items-center justify-between btn-tips"
    :style="{ width: '100%' }"
  >
    <image
      class="tips-text"
      src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=btn_seccount_01.png"
    />
    <view class="flex-row items-center count-down-wrap">
      <text class="count-down-label">距离结束还有</text>
      <u-count-down
        class="count-down-con ml-4"
        :time="time"
        format="HH:mm:ss"
        @change="onTimeChange"
      >
        <view class="flex-row items-center">
          <view class="flex-col items-center number-box justify-center">
            <text class="time-font time-text">{{
              timeData.hours > 10 ? timeData.hours : "0" + timeData.hours
            }}</text>
          </view>
          <text class="colon ml-2">:</text>
          <view class="flex-col items-center number-box ml-2 justify-center">
            <text class="time-font time-text">{{
              timeData.minutes > 10 ? timeData.minutes : "0" + timeData.minutes
            }}</text>
          </view>
          <text class="colon ml-2">:</text>
          <view class="flex-col items-center number-box ml-2 justify-center">
            <text class="time-font time-text">{{
              timeData.seconds > 10 ? timeData.seconds : "0" + timeData.seconds
            }}</text>
          </view>
        </view>
      </u-count-down>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      timeData: {},
      time: 108000000,
    };
  },
  methods: {
    onTimeChange(e) {
      this.timeData = e;
    },
  },
};
</script>

<style scoped lang="less">
.btn-tips {
  margin-top: 24rpx;
  padding: 16rpx 24rpx;
  background-image: linear-gradient(180deg, #fe6733 0%, #f72222 100%);
  border-radius: 100rpx;
  .tips-text {
    width: 280.58rpx;
    height: 24.04rpx;
  }
  .count-down-wrap {
    .count-down-label {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #ffffff;
    }
    .count-down-con {
      flex-shrink: 0;
      .number-box {
        padding: 8rpx 0;
        background-image: linear-gradient(180deg, #b4352e 0%, #ce3933 100%);
        border-radius: 4rpx;
        width: 34rpx;
        height: 34rpx;
        .time-font {
          font-size: 20rpx;
          font-family: PingFang SC Bold;
          line-height: 20rpx;
          font-weight: 700;
          color: #ffffff;
        }
        .time-text {
          font-size: 22rpx;
          line-height: 22rpx;
        }
      }
      .colon {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #ffc8a7;
      }
    }
  }
}
</style>
