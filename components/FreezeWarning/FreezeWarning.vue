<template>
  <u-popup
    :show="showPopu"
    mode="center"
    bgColor="transparent"
    :safeAreaInsetBottom="false"
    @close="closePopu"
    @open="openPopu"
  >
    <view class="flex-col popu">
      <view class="relative popu-wrap">
        <view class="popu-bg pos-bg"></view>
        <view class="flex-col popu-con pos-con">
          <text class="self-center title">冻结提示</text>
          <view class="content">
            <text class="popu-font">您的账号于</text>
            <text class="popu-font time">
              2023年9月5日 10:00
              <br />
            </text>
            <text class="popu-font">被系统冻结</text>
          </view>
          <view class="flex-col items-center bottom">
            <text class="popu-font btn-text">联系平台客服</text>
          </view>
        </view>
        <image
          class="icon-tip pos-tip"
          src="../../static/images/icon_tip_01.png"
        />
      </view>
      <image
        class="self-center close mt-24"
        src="../../static/images/icon_close_04.png"
        @click="closePopu"
      />
    </view>
  </u-popup>
</template>

<script>
export default {
  data() {
    return {
      showPopu: true,
    };
  },
  methods: {
    openPopu() {},
    closePopu() {
      this.showPopu = false;
    },
  },
};
</script>

<style scoped lang="less">
.popu {
  padding: 0 16rpx;
  width: 600rpx;
  .popu-wrap {
    height: 540.86rpx;
    .popu-bg {
      opacity: 0.33;
      background-image: linear-gradient(180deg, #fff6de 0%, #ffffff 25.4%);
      border-radius: 20rpx;
      width: 600rpx;
      height: 474rpx;
    }
    .pos-bg {
      position: absolute;
      left: -16rpx;
      right: -16rpx;
      top: 82.86rpx;
    }
    .popu-con {
      padding: 88rpx 80rpx 56rpx;
      background-image: linear-gradient(180deg, #ffe9af 0%, #ffffff 25.4%);
      border-radius: 20rpx;
      width: 568rpx;
      .title {
        color: #030305;
        font-size: 36rpx;
        font-family: PingFang SC;
        font-weight: 700;
        line-height: 36rpx;
      }
      .content {
        margin-top: 40rpx;
        line-height: 34rpx;
        text-align: center;
        .time {
          color: #e9b81b;
          font-weight: 700;
        }
      }
      .bottom {
        margin: 64rpx 16rpx 0;
        padding: 28rpx 0 28rpx;
        background-image: linear-gradient(89.1deg, #ffcb4f 3.3%, #ff9c27 97.8%);
        border-radius: 40rpx;
        width: 368rpx;
        .btn-text {
          color: #ffffff;
          line-height: 28rpx;
        }
      }
      .popu-font {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 34rpx;
        color: #030305;
      }
    }
    .pos-con {
      position: absolute;
      left: 0;
      right: 0;
      top: 96.86rpx;
    }
    .icon-tip {
      width: 150rpx;
      height: 172rpx;
    }
    .pos-tip {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
  }
  .close {
    width: 60rpx;
    height: 60rpx;
  }
}
</style>
