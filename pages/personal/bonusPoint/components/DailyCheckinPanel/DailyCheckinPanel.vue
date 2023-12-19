<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between header">
      <view class="flex-row left">
        <text class="self-center title">已连续签到</text>
        <text class="self-start day-num ml-6">2</text>
        <text class="self-center title ml-6">天</text>
      </view>
      <view class="flex-col">
        <u-button
          class="cf-btn-black"
          text="立即签到"
          type="primary"
          size="mini"
          shape="circle"
          @click="onClick"
          v-if="true"
        ></u-button>
        <u-button
          class="button-normal"
          text="立即签到"
          type="primary"
          size="mini"
          shape="circle"
          @click="onClick_1"
          v-if="false"
        ></u-button>
      </view>
    </view>
    <view class="list-wrap mt-20">
      <view
        class="flex-col list-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <view
          class="flex-col flex-1 equal-division-item"
          v-if="signStatus >= signDay"
        >
          <view class="flex-col items-center section justify-center">
            <view class="flex-col items-center text-wrapper justify-center"
              ><text class="num-active">100</text></view
            >
          </view>
          <text class="self-center value-active mt-8">1天</text>
        </view>
        <view class="flex-col flex-1 equal-division-item" v-if="signStatus">
          <view class="flex-col items-center section-inactive justify-center">
            <view
              class="flex-col items-center text-wrapper-inactive justify-center"
            >
              <text class="num-inactive">50</text>
            </view>
          </view>
          <text class="self-center value-inactive mt-8">3天</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { dailyCheckinList } from "@/mock/personal/bonus";
export default {
  components: {},
  props: {},
  data() {
    return {
      signStatus: true,
      signDayNum: "2",
      items: dailyCheckinList,
    };
  },

  methods: {
    onClick() {
      uni.navigateTo({
        url: "/pages/personal/bonusPoint/signDetial/signDetial",
      });
    },
    onClick_1() {
      uni.navigateTo({
        url: "/pages/personal/bonusPoint/signDetial/signDetial",
      });
    },
  },
};
</script>

<style scoped lang="less">
.wrap {
  padding: 32rpx 0;
  background-color: #ffffff;
  box-shadow: 0rpx 4rpx 4rpx 0rpx #d7d7d780;
  border-radius: 16rpx;
  .header {
    padding: 0 24rpx;
    .left {
      margin: 4rpx 0;
      .title {
        font-size: 30rpx;
        font-family: "PingFang SC";
        line-height: 42rpx;
        font-weight: 500;
        color: #000000;
      }
      .day-num {
        color: #b09053;
        font-size: 32rpx;
        font-family: ".AppleSystemUIFont";
        line-height: 36rpx;
      }
    }
    .button-normal {
      padding: 8rpx 0;
      background-color: #979797;
      border-radius: 28rpx;
      width: 164rpx;
    }
  }
  .list-wrap {
    padding: 0 8rpx;
    display: grid;
    grid-template-rows: repeat(1, minmax(0, 1fr));
    grid-template-columns: repeat(7, minmax(0, 1fr));
    row-gap: 0;
    column-gap: 0;
    .list-item {
      height: 112rpx;
      .equal-division-item {
        padding: 0 16rpx;
        width: 96.34rpx;
        .section {
          background-color: #dec9a0;
          border-radius: 50%;
          height: 64rpx;
          width: 64rpx;
          .text-wrapper {
            background-color: #b09053;
            border-radius: 50%;
            width: 44rpx;
            height: 44rpx;
            .num-active {
              font-size: 24rpx;
              font-family: ".AppleSystemUIFont";
              line-height: 30rpx;
              color: #fffcea;
            }
          }
        }
        .value-active {
          font-size: 24rpx;
          font-family: "PingFang SC";
          line-height: 34rpx;
          font-weight: 500;
          color: #000000;
        }
        .section-inactive {
          background-color: #eeeeee;
          border-radius: 50%;
          height: 64rpx;
          width: 64rpx;
          .text-wrapper-inactive {
            background-color: #d8d8d8;
            border-radius: 50%;
            width: 44rpx;
            height: 44rpx;
            .num-inactive {
              font-size: 24rpx;
              font-family: ".AppleSystemUIFont";
              line-height: 30rpx;
              color: #ffffff;
            }
          }
        }
        .value-inactive {
          font-size: 24rpx;
          font-family: "PingFang SC";
          line-height: 34rpx;
          font-weight: 500;
          color: #bebebe;
        }
      }
    }
  }
}
</style>
