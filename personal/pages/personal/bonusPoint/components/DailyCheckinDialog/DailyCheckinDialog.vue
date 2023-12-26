<template>
  <view class="flex-col wrap">
    <image class="shrink-0 bg-header" src="/personal/static/images/mock_dialog_header_bg.png" />
    <view class="flex-col relative container">
      <view class="flex-col">
        <view class="flex-col items-start self-center">
          <text class="num" v-if="checkinNumber > 1">已连续签 {{ checkinNumber }} 天</text>
          <text class="num" v-else>今日已签到</text>
        </view>
        <view class="flex-col items-center self-stretch box">
          <view>
            <text class="value">恭喜您获得</text>
            <text class="mark">{{ bonus }}</text>
            <text class="value">积分</text>
          </view>
          <text class="value label mt-8">连续签到奖励更丰富</text>
        </view>
      </view>
      <view class="flex-col mt-24">
        <view class="cf-btn-black flex-col items-center text-wrapper" @click="onClick"
          ><text class="value btn-text">知道了</text></view
        >
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      checkinNumber: {
        type: Number,
        default: 0,
      },
      bonus: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {};
    },

    methods: {
      onClick() {
        // 事件处理方法
        this.$emit('closeDialog');
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
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
        color: #111111;
      }
      .box {
        margin-top: 32rpx;
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
      .text-wrapper {
        padding: 32rpx 0;
        background-color: #111111;
        border-radius: 48rpx;
        .btn-text {
          color: #ffffff;
          font-size: 30rpx;
          font-weight: 500;
          line-height: 42rpx;
        }
      }
      .value {
        font-size: 28rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
        color: #111111;
      }
    }
  }
</style>
