<template>
  <view class="flex-col wrap">
    <fj-sticky>
      <u-tabs
        class="u-tabs-border-bottom u-tabs-bg-white"
        :list="tabs"
        lineColor="#b09053"
        :lineWidth="23"
        :lineHeight="2"
      >
        <view class="flex-row relative tabs-right-slot" slot="right">
          <view class="flex-row items-center select-data" @click="onStatusSelect">
            <text class="select-label">{{ selectType }}</text>
            <image class="shrink-0 select-icon ml-4" src="/personal/static/images/icon_down_arrow.png" />
          </view>
          <view class="flex-col justify-between items-center dropdown-menu" v-if="statusPopupVisible">
            <view
              class="dropdown-item"
              :class="selectType == '全部' ? 'dropdown-item-current' : ''"
              @click="() => onSelectType('全部')"
              >全部</view
            >
            <view
              class="dropdown-item"
              :class="selectType == '收入' ? 'dropdown-item-current' : ''"
              @click="() => onSelectType('收入')"
              >收入</view
            >
            <view
              class="dropdown-item"
              :class="selectType == '支出' ? 'dropdown-item-current' : ''"
              @click="() => onSelectType('支出')"
              >支出</view
            >
          </view>
          <view class="flex-row items-center select-data ml-8" @click="onDateSelect">
            <text class="select-label">日期</text>
            <image class="shrink-0 select-icon ml-4" src="/personal/static/images/icon_down_arrow.png" />
          </view>
        </view>
      </u-tabs>
    </fj-sticky>
    <view class="flex-col">
      <list-with-empty :showEmpty="!list.length" :showLoading="showLoading" :finished="finished">
        <view class="flex-col list">
          <bonus-Item :bonusItem="item" v-for="(item, index) in list" :key="index"></bonus-Item>
        </view>
        <view slot="customEmpty"> <bonus-empty></bonus-empty></view>
      </list-with-empty>
    </view>
    <u-popup :show="datePopupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
      <date-time-picker-popup type="year-month" :date="date" @click="onDateChange"></date-time-picker-popup>
    </u-popup>
  </view>
</template>

<script>
  import DateTimePickerPopup from '@/pages/components/DateTimePickerPopup/DateTimePickerPopup.vue';
  import BonusItem from './components/BonusItem/BonusItem.vue';
  import BonusEmpty from '@/personal/pages/personal/components/BonusEmpty/BonusEmpty.vue';
  import ListWithEmpty from '@/components/ListContainer/ListWithEmpty.vue';
  import FjSticky from '@/components/FjSticky.vue';

  export default {
    components: { DateTimePickerPopup, BonusItem, ListWithEmpty, BonusEmpty, FjSticky },
    props: {
      list: {
        type: Array,
        default: () => [
          {
            title: '推广商品销售奖励',
            orderNumber: '2020390494049404',
            date: '2023-09-15',
            time: '14:20:12',
            amount: 100,
            status: '未到账',
          },
        ],
      },
      tabs: { type: Array, default: () => [{ name: '收纳币明细' }] },
    },
    data() {
      return {
        statusPopupVisible: false,
        datePopupVisible: false,
        showLoading: false,
        finished: false,
        date: {
          year: 2023,
          month: 9,
        },
        selectType: '全部',
      };
    },

    methods: {
      onStatusSelect() {
        this.statusPopupVisible = true;
      },
      onSelectType(val) {
        this.statusPopupVisible = false;
        this.selectType = val;
      },
      onDateSelect() {
        this.datePopupVisible = true;
      },
      onClose() {
        this.statusPopupVisible = false;
        this.datePopupVisible = false;
      },
      onDateChange(val) {
        this.date.year = val.year;
        this.date.month = val.month;
        this.datePopupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    background-color: #ffffff;
    .tabs-right-slot {
      margin-right: 32rpx;
      .select-data {
        padding: 8rpx 16rpx;
        background-color: #eeeeee;
        border-radius: 4rpx;
        height: 44rpx;
        .select-label {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #424242;
        }
        .select-icon {
          width: 18rpx;
          height: 14rpx;
        }
      }
    }
    .list {
      padding-left: 32rpx;
      padding-top: 8rpx;
      padding-bottom: 40rpx;
    }

    .dropdown-menu {
      position: absolute;
      left: -14rpx;
      top: 56rpx;

      width: 140rpx;
      height: 230rpx;

      background: #ffffff;
      box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.06);
      border-radius: 4px 4px 4px 4px;

      padding: 32rpx 0;
    }

    .dropdown-item {
      font-size: 24rpx;
      font-family: 苹方;
      font-weight: 400;
      color: #111111;
    }

    .dropdown-item-current {
      color: #b09053;
    }
  }
</style>
