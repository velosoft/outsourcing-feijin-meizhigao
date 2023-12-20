<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between header">
      <view class="flex-row left align-center">
        <text class="title">已连续签到</text>
        <text class="day-num ml-6">{{ checkinNumber }}</text>
        <text class="title ml-6">天</text>
      </view>
      <view class="flex-col" @click="onCheckin">
        <view class="flex-col items-center btn-active justify-center" v-if="items[checkinNumber].status == 'pending'">
          <text class="btn-text btn-text-active">立即签到</text>
        </view>
        <view class="flex-col items-center btn-inactive justify-center" v-else>
          <text class="btn-text btn-text-inactive">已签到</text>
        </view>
      </view>
    </view>
    <view class="list-wrap mt-20">
      <view class="flex-col list-item" v-for="(item, index) in items" :key="index">
        <view class="flex-col flex-1 equal-division-item" v-if="item.status == 'done'">
          <view class="flex-col items-center section justify-center">
            <view class="flex-col items-center text-wrapper justify-center"
              ><text class="num-active">{{ item.bonus }}</text></view
            >
          </view>
          <text class="self-center value-active mt-8">{{ item.number }}天</text>
        </view>
        <view class="flex-col flex-1 equal-division-item" v-else>
          <view class="flex-col items-center section-inactive justify-center">
            <view class="flex-col items-center text-wrapper-inactive justify-center">
              <text class="num-inactive">{{ item.bonus }}</text>
            </view>
          </view>
          <text class="self-center value-inactive mt-8">{{ item.number }}天</text>
        </view>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="center"
      :round="12"
      style="width: 309px"
      :safeAreaInsetBottom="false"
    >
      <daily-checkin-dialog
        :checkinNumber="checkinNumber"
        :bonus="bonus"
        @closeDialog="closeDialog"
      ></daily-checkin-dialog>
    </u-popup>
  </view>
</template>

<script>
  import DailyCheckinDialog from '@/pages/personal/bonusPoint/components/DailyCheckinDialog/DailyCheckinDialog.vue';
  import { dailyCheckinList } from '@/mock/personal/bonus';
  export default {
    components: { DailyCheckinDialog },
    props: {},
    data() {
      return {
        checkinNumber: 0,
        items: dailyCheckinList,
        popupVisible: false,
        bonus: 0,
      };
    },

    methods: {
      onCheckin() {
        this.items[this.checkinNumber].status = 'done';
        this.bonus = this.items[this.checkinNumber].bonus;
        // this.checkinNumber++;
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      closeDialog() {
        this.popupVisible = false;
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
          font-family: 苹方;
          line-height: 30rpx;
          font-weight: 500;
          color: #000000;
        }
        .day-num {
          color: #b09053;
          font-size: 32rpx;
          font-family: 苹方;
          line-height: 32rpx;
        }
      }
      .btn-active {
        padding: 8rpx 0;
        background-color: #111111;
        border-radius: 28rpx;
        width: 164rpx;
        height: 56rpx;
        .btn-text-active {
          font-size: 26rpx;
          line-height: 36rpx;
        }
      }
      .btn-inactive {
        padding: 8rpx 0;
        background-color: #979797;
        border-radius: 28rpx;
        height: 56rpx;
        width: 164rpx;
        .btn-text-inactive {
          font-size: 26rpx;
          line-height: 36rpx;
        }
      }
      .btn-text {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 34rpx;
        font-weight: 500;
        color: #ffffff;
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
                font-family: '.AppleSystemUIFont';
                line-height: 30rpx;
                color: #fffcea;
              }
            }
          }
          .value-active {
            font-size: 24rpx;
            font-family: 苹方;
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
                font-family: 苹方;
                line-height: 30rpx;
                color: #ffffff;
              }
            }
          }
          .value-inactive {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 34rpx;
            font-weight: 500;
            color: #bebebe;
          }
        }
      }
    }
  }
</style>
