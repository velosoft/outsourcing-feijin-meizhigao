<template>
  <view class="flex-col items-center wrap">
    <view class="flex-col justify-start items-center">
      <view class="flex-col justify-center items-center relative circle_wrapper">
        <view class="flex-col outter pos_abs">
          <view class="golden-outter" v-if="true"></view>
          <image class="blue-outter" src="/myOrder/static/images/icon_avatar_blue_circle.png" v-if="false" />
        </view>
        <view class="flex-col justify-center items-center relative blue-inner">
          <image class="avatar-img" src="/myOrder/static/images/mock_97143783732172.png" />
        </view>
      </view>
      <view class="flex-col relative title-wrapper">
        <view class="flex-col justify-start items-center self-stretch leader" v-if="true">
          <text class="font-xs text-white">领队</text>
        </view>
        <view class="flex-col justify-start items-center self-start worker" v-if="false">
          <text class="font-xs text-gray">收纳师</text>
        </view>
      </view>
    </view>
    <text class="self-center font-xs font-name mt-8">张小鱼</text>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { personInfo: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 8rpx 0;
    width: 146rpx;
    .circle_wrapper {
      width: 120rpx;
      height: 120rpx;
      .outter {
        width: 120rpx;
        height: 120rpx;
        .golden-outter {
          background-color: #ffffff;
          border-radius: 50%;
          height: 120rpx;
          border-left: solid 2rpx #d2b682;
          border-right: solid 2rpx #d2b682;
          border-top: solid 2rpx #d2b682;
          border-bottom: solid 2rpx #d2b682;
          width: 120rpx;
        }
        .blue-outter {
          border-radius: 50%;
          width: 120rpx;
          height: 120rpx;
        }
      }
      .pos_abs {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .blue-inner {
        background-color: #e5ebfb;
        border-radius: 50%;
        overflow: hidden;
        width: 96rpx;
        height: 96rpx;
        .avatar-img {
          width: 60.6rpx;
          height: 76rpx;
        }
      }
    }
    .title-wrapper {
      margin-top: -20rpx;
      .leader {
        background-color: #c2a773;
        border-radius: 16rpx;
        width: 68rpx;
        .text-white {
          color: #ffffff;
        }
      }
      .worker {
        background-color: #f5f5f5;
        border-radius: 16rpx;
        width: 86rpx;
        .text-gray {
          color: #6d6d6d;
        }
      }
    }
    .font-xs {
      font-size: 18rpx;
      line-height: 26rpx;
    }
    .font-name {
      color: #111111;
      font-size: 20rpx;
      line-height: 28rpx;
    }
  }
</style>
