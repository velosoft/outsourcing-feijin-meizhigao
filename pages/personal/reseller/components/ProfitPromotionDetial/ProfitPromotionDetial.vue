<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between header items-center">
      <text class="font title">推广明细</text>
      <view class="select-wrap flex-row items-center" @click="onClick">
        <text class="label text">日期筛选</text>
        <image class="shrink-0 icon-select ml-2" src="/static/images/icon_select.png" />
      </view>
    </view>
    <view class="flex-col group">
      <scroll-view class="scroll-height" :scroll-y="true">
        <list-container
          :showEmpty="!profitList.length"
          :showLoading="showLoading"
          emptyHint="暂无内容～"
          :finished="finished"
          imgSrc="/static/images/icon_empty_reseller.png"
        >
          <view class="flex-col">
            <profit-list-item
              class="list-item mt-20"
              :profitItem="item"
              v-for="(item, index) in profitList"
              :key="index"
            ></profit-list-item>
          </view>
        </list-container>
      </scroll-view>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
      <date-time-picker-popup></date-time-picker-popup>
    </u-popup>
  </view>
</template>

<script>
  import DateTimePickerPopup from '@/pages/components/DateTimePickerPopup/DateTimePickerPopup.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import ProfitListItem from '@/pages/personal/reseller/components/ProfitListItem/ProfitListItem.vue';

  export default {
    components: { DateTimePickerPopup, ListContainer, ProfitListItem },
    props: { profitList: { type: Array, default: () => [] } },
    data() {
      return {
        popupVisible: false,
        showLoading: false,
        finished: false,
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
  .wrap {
    background-color: #ffffff;
    border-radius: 16rpx;
    .header {
      padding: 32rpx 28rpx;
      border-bottom: 2rpx solid #f0f0f0;
      .font {
        font-size: 32rpx;
        font-family: 苹方;
        line-height: 32rpx;
        font-weight: 700;
        color: #b09053;
      }
      .title {
        color: #030305;
      }
      .select-wrap {
        padding: 4rpx 16rpx;
        background-color: #f8f8f8;
        border-radius: 32rpx;
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
    .group {
      padding: 0 28rpx 20rpx 28rpx;
    }
  }
</style>
