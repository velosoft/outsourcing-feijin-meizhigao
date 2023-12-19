<template>
  <view class="flex-col container">
    <view class="flex-row justify-between items-center">
      <text class="font title">推广明细</text>
      <view class="select-wrap flex-row items-center" @click="onClick">
        <text class="label text">日期筛选</text>
        <image class="icon-select ml-2" src="../../../../../static/images/icon_select.png" />
      </view>
    </view>
    <ProfitList class="mt-31"></ProfitList>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
      <DataTimePickerYD></DataTimePickerYD>
    </u-popup>
  </view>
</template>

<script>
  import DataTimePickerYD from '../../../../../pages/components/DataTimePickerYD/DataTimePickerYD.vue';
  import ProfitList from '../../../../../pages/personal/reseller/components/ProfitList/ProfitList.vue';

  export default {
    components: { DataTimePickerYD, ProfitList },
    props: {},
    data() {
      return {
        popupVisible: false,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .mt-31 {
    margin-top: 62rpx;
  }
  .container {
    padding: 32rpx 26rpx 112rpx 28rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .font {
      font-size: 32rpx;
      font-family: 苹方;
      line-height: 32rpx;
      font-weight: 700;
      color: #b09053;
    }
    .title {
      margin-top: 2.88rpx;
      color: #030305;
    }
    .select-wrap {
      padding: 0 16rpx;
      background-color: #f8f8f8;
      border-radius: 29rpx;
      width: 148rpx;
      height: 58rpx;
      .label {
        font-size: 22rpx;
        font-family: 苹方;
        line-height: 22rpx;
        color: #707070;
      }
      .text {
        font-size: 24rpx;
        line-height: 24rpx;
      }
      .icon-select {
        border-radius: 2rpx;
        width: 18rpx;
        height: 10rpx;
      }
    }
  }
</style>