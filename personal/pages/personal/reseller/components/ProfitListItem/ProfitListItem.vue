<template>
  <view class="justify-between flex-row justify-center">
    <view class="flex-col items-start">
      <text class="line-clamp-one title">{{ profitItem.title }}</text>
      <text class="font-normal mt-8">{{ '订单编号：' + profitItem.orderNumber }}</text>
      <view class="flex-row mt-8">
        <text class="font-normal">{{ profitItem.date }}</text>
        <text class="font-normal ml-4">{{ profitItem.time }}</text>
      </view>
    </view>
    <view class="flex-col items-center">
      <text class="font">{{ profitItem.amount >= 0 ? '+' + profitItem.amount : profitItem.amount }}</text>
      <view class="flex-col items-center mt-12">
        <text class="font-normal status-active" v-if="profitItem.status == '未到账'">{{ profitItem.status }}</text>
        <text class="font-normal status-inactive" v-if="profitItem.status == '已到账'">{{ profitItem.status }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      profitItem: {
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
  .title {
    color: #111111;
    font-size: 26rpx;
    font-family: 苹方;
    line-height: 26rpx;
    width: 450rpx;
  }
  .font-normal {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #6d6d6d;
  }
  .font {
    color: #b09053;
    font-size: 32rpx;
    font-family: 苹方;
    font-weight: 700;
    line-height: 32rpx;
  }
  .status-active {
    color: #ff4d1d;
  }
  .status-inactive {
    color: #707070;
  }
</style>
