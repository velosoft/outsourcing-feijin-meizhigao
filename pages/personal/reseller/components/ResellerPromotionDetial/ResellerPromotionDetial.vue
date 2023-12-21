<template>
    <view class="flex-col wrap">
      <view class="flex-row justify-between header items-center">
        <text class="font title">推广明细</text>
        <view class="select-wrap flex-row items-center" @click="onClick">
          <text class="label text">日期筛选</text>
          <image class="icon-select ml-2" src="/static/images/icon_select.png" />
        </view>
      </view>
      <view class="flex-col group">
        <scroll-view :scroll-y="true">
          <list-container
            :showEmpty="!resellerList.length"
            :showLoading="showLoading"
            emptyHint="暂无内容～"
            :finished="finished"
            imgSrc="/static/images/icon_empty_reseller.png"
          >
            <view class="flex-col justify-start">
              <view class="flex-col" v-if="true">
                <ResellerListItem
                  class="list-item mt-20"
                  v-for="(item, index) in resellerList"
                  :resellerItem="item"
                  :key="index"
                ></ResellerListItem>
              </view>
            </view>
          </list-container>
        </scroll-view>
      </view>
      <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
        <DateTimePickerPopup></DateTimePickerPopup>
      </u-popup>
    </view>
    </template>
    
    <script>
    import DateTimePickerPopup from '@/pages/components/DateTimePickerPopup/DateTimePickerPopup.vue';
    import ListContainer from '@/components/ListContainer/ListContainer.vue';
    import ResellerListItem from '@/pages/personal/reseller/components/ResellerListItem/ResellerListItem.vue';
    
    export default {
      components: { DateTimePickerPopup, ListContainer, ResellerListItem },
      props: { resellerList: { type: Array, default: () => [] } },
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
          margin-top: 2.88rpx;
          color: #030305;
        }
        .select-wrap {
          padding: 4rpx 16rpx;
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
      .group {
        padding: 32rpx 28rpx;
        .list-item {
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
    </style>