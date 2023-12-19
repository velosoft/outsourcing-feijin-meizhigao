<template>
  <view class="flex-row justify-between items-center list-item">
    <view class="flex-col">
      <text class="self-start title">{{bonusItem.title}}</text>
      <text class="self-stretch label mt-4">{{"服务单号：" + bonusItem.orderNumber}}</text>
      <view class="flex-row self-stretch mt-4">
        <text class="label">{{bonusItem.date}}</text>
        <text class="label ml-8">{{bonusItem.time}}</text>
      </view>
    </view>
    <view class="flex-col right">
      <view class="flex-col items-center self-center">
        <text class="font text-normal" v-if="true">{{bonusItem.amount}}</text>
        <text class="font text-reduce" v-if="false">-100</text>
        <text class="font text-add" v-if="false">+100</text>
      </view>
      <view class="flex-col items-center self-stretch mt-8">
        <text class="receipt-font receipt-in" v-if="true">{{bonusItem.status}}</text>
        <text class="receipt-font receipt-out" v-if="false">未到账</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      bonusItem: {
        type: Object,
        default: () => ({
          title: '推广商品销售奖励',
          orderNumber: '2020390494049404',
          date: '2023-09-15',
          time: '14:20:12',
          amount: 100,
          status: '未到账',
        }),
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .list-item {
    padding: 32rpx 0;
    border-bottom: solid 2rpx #e8e8e8;
    .title {
      color: #6d6d6d;
      font-size: 28rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 40rpx;
    }
    .label {
      font-size: 20rpx;
      font-family: 'PingFang SC';
      line-height: 28rpx;
      color: #8c8f95;
    }
    .right {
      margin-right: 28rpx;
      .font {
        font-size: 28rpx;
        font-family: '.AppleSystemUIFont';
        line-height: 34rpx;
      }
      .text-normal {
        color: #000000;
      }
      .text-reduce {
        color: #bb3e0c;
      }
      .text-add {
        color: #b09053;
      }
      .receipt-font {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
      }
      .receipt-in {
        color: #b09053;
      }
      .receipt-out {
        color: #6d6d6d;
      }
    }
  }
</style>