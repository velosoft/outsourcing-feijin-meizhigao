<template>
  <view class="flex-col justify-start relative card">
    <image class="card-bg pos" src="/static/images/bg_kill_01.png" />
    <view class="flex-row justify-between items-center relative card-wrapper">
      <view class="flex-col self-stretch justify-between left">
        <view class="flex-row items-center">
          <text class="time price-symbol">￥</text>
          <text class="price">{{ price }}</text>
          <text class="point">.{{ decimalPrice }}</text>
          <image class="ml-14 skill-btn" src="/static/images/btn_kill_01.png" />
        </view>
        <view class="flex-row">
          <text class="com-font line-through">原价：￥{{ originPrice }}</text>
          <text class="com-font ml-14">{{ buyer }}人购买</text>
        </view>
      </view>
      <view class="flex-col self-stretch justify-center right">
        <text class="self-center com-font count-down-text">距秒杀活动结束</text>
        <u-count-down
          class="mt-6"
          :time="time"
          format="DD:HH:mm:ss"
          :autoStart="true"
          @change="onChange"
        >
          <view class="flex-row">
            <view class="flex-col items-center time-wraper justify-center">
              <text class="time">{{
                timeData.days > 10 ? timeData.days : "0" + timeData.days
              }}</text>
            </view>
            <text class="self-start colon ml-4">:</text>
            <view class="flex-col items-center time-wraper ml-4 justify-center">
              <text class="time">{{
                timeData.hours > 10 ? timeData.hours : "0" + timeData.hours
              }}</text>
            </view>
            <text class="self-start colon ml-4">:</text>
            <view class="flex-col items-center ml-4 justify-center time-wraper">
              <text class="time">{{
                timeData.minutes > 10
                  ? timeData.minutes
                  : "0" + timeData.minutes
              }}</text>
            </view>
            <text class="self-start colon ml-4">:</text>
            <view class="flex-col items-center ml-4 justify-center time-wraper">
              <text class="time">{{
                timeData.seconds > 10
                  ? timeData.seconds
                  : "0" + timeData.seconds
              }}</text>
            </view>
          </view>
        </u-count-down>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    price: { type: String, default: "" },
    decimalPrice: { type: String, default: "" },
    originPrice: { type: Number, default: 0 },
    time: { type: Number, default: 0 },
    buyer: { type: Number, default: 0 },
  },
  data() {
    return {
      timeData: {},
    };
  },

  methods: {
    onChange(e) {
      this.timeData = e;
    },
  },
};
</script>

<style scoped lang="less">
.card {
  height: 148rpx;
  .card-bg {
    width: 710rpx;
    height: 148rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .card-wrapper {
    flex: 1;
    padding: 20rpx 24rpx 48rpx;
    .left {
      justify-content: space-between;
      align-self: stretch;
      .price-symbol {
        margin-top: 8rpx;
        font-size: 24rpx;
        line-height: 24rpx;
        font-weight: unset;
      }
      .price {
        color: #ffffff;
        font-size: 44rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 44rpx;
      }
      .point {
        margin-top: 8rpx;
        color: #ffffff;
        font-size: 28rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 28rpx;
      }
      .skill-btn {
        width: 90rpx;
        height: 36rpx;
      }
      .line-through {
        text-decoration: line-through;
        opacity: 0.8;
      }
    }
    .right {
      .count-down-text {
        color: #5e4a08;
        font-size: 22rpx;
        line-height: 22rpx;
      }
      .time-wraper {
        background-color: #bf0a00;
        border-radius: 4rpx;
        width: 44rpx;
        height: 38rpx;
      }
      .colon {
        font-size: 26rpx;
        font-family: 苹方;
        line-height: 26rpx;
        font-weight: 700;
        color: #7a4600;
      }
    }
    .com-font {
      font-size: 20rpx;
      font-family: 苹方;
      line-height: 20rpx;
      color: #ffffff;
    }
    .time {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 26rpx;
      font-weight: 700;
      color: #ffffff;
    }
  }
}
</style>
