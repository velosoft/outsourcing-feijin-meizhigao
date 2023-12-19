<template>
  <view class="flex-col component-B6n6juRH">
    <image class="shrink-0 bg-header" src="../../../../../static/images/17025195143094865452.png" />
    <view class="flex-col relative container">
      <view class="flex-col">
        <view class="flex-col items-start self-center">
          <text class="num" v-if="true">已连续签 3 天</text>
          <text class="num" v-if="false">今日已签到</text>
        </view>
        <view class="flex-col items-center self-stretch box">
          <view>
            <text class="value">恭喜您获得</text>
            <text class="mark">20</text>
            <text class="value">积分</text>
          </view>
          <text class="value label mt-8">连续签到奖励更丰富</text>
        </view>
      </view>
      <u-button class="mt-24" text="知道了" type="primary" size="mini" shape="circle"></u-button>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .component-B6n6juRH {
    background-image: linear-gradient(90deg, #fcd46b 0%, #fdf3d2 100%);
    border-radius: 20rpx;
    height: 674rpx;
    .bg-header {
      width: 620rpx;
      height: 206rpx;
      border-radius: 20rpx;
    }
    .container {
      margin-top: -24rpx;
      padding: 56rpx 136rpx 88rpx;
      background-color: #ffffff;
      border-radius: 20rpx;
      .num {
        font-size: 42rpx;
        font-family: 'PingFang SC';
        line-height: 58rpx;
        font-weight: 500;
        color: #000000;
      }
      .box {
        margin-top: 32rpx;
        .value {
          font-size: 28rpx;
          font-family: 'PingFang SC';
          line-height: 40rpx;
          color: #000000;
        }
        .mark {
          color: #b09053;
          font-size: 36rpx;
          font-family: 'PingFang SC';
          font-weight: 500;
          line-height: 50rpx;
        }
        .label {
          color: #adadad;
        }
      }
    }
  }
</style>