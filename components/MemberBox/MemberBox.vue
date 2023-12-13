<template>
  <view class="flex-col member-box">
    <view class="flex-col justify-start relative member-section">
      <image
        class="member-bg member-pos"
        src="../../static/images/member_bg.png"
      />
      <view class="flex-col relative">
        <view
          class="flex-row justify-between items-center self-stretch member-group"
        >
          <view class="flex-col items-start">
            <text class="member-text">新会员入会礼包</text>
            <text class="CenterPannel-mt-8 home-font_04 member-describe"
              >你有一份价值100元的新人礼包</text
            >
          </view>
          <view class="flex-col items-center member-text-wrapper"
            ><text class="btn-member">待领取</text></view
          >
        </view>
        <view class="self-stretch member-divider"></view>
        <text class="self-start home-font_04 member-time"
          >2023.07.6-2023.08.12</text
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.member-box {
  margin: 40rpx 30rpx 0;
  .member-section {
    padding-bottom: 8rpx;
    height: 186rpx;
    .member-bg {
      width: 92vw;
      height: 24.8vw;
    }
    .member-pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .member-group {
      padding: 32rpx 24rpx 32rpx 40rpx;
      .member-text {
        color: #bb3e0c;
        font-size: 32rpx;
        font-family: HarmonyOSSansSC;
        font-weight: 700;
        line-height: 32rpx;
      }
      .CenterPannel-mt-8 {
        margin-top: 16rpx;
      }
      .member-describe {
        font-size: 22rpx;
        line-height: 22rpx;
      }
      .member-text-wrapper {
        padding: 16rpx 0;
        background-color: #bb3e0c;
        border-radius: 8rpx;
        width: 120rpx;
        height: 52rpx;
        .btn-member {
          color: #ffffff;
          font-size: 24rpx;
          font-family: HarmonyOSSansSC;
          font-weight: 700;
          line-height: 24rpx;
        }
      }
    }
    .member-divider {
      background-image: repeating-linear-gradient(
        90deg,
        #ead2ca,
        #ead2ca 0.58%,
        transparent 0.58%,
        transparent 1.161%
      );
      background-position: -2rpx 0rpx;
      height: 2rpx;
    }
    .home-font_04 {
      font-size: 20rpx;
      font-family: 苹方;
      line-height: 20rpx;
      color: #bb3e0c;
    }
    .member-time {
      margin: 16rpx 0 8rpx 40rpx;
      line-height: 24rpx;
      text-align: center;
      word-break: break-all;
    }
  }
}
</style>
