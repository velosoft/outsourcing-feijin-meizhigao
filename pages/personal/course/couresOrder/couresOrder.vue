<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col">
      <view class="flex-col search-wrap"><SearchBar class="section_3"></SearchBar></view>
      <u-tabs :list="list"></u-tabs>
      <view class="flex-col list">
        <view class="flex-col list-item_1" v-for="(item, index) in items" :key="index">
          <NonPaymentItem v-if="true"></NonPaymentItem>
          <WriteOffItem v-if="false"></WriteOffItem>
          <SuccessfulTradeItem v-if="false"></SuccessfulTradeItem>
          <CancelItem v-if="false"></CancelItem>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import CancelItem from '../../../../pages/personal/course/components/CancelItem/CancelItem.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import NonPaymentItem from '../../../../pages/personal/course/components/NonPaymentItem/NonPaymentItem.vue';
  import SearchBar from '../../../../pages/components/SearchBar/SearchBar.vue';
  import SuccessfulTradeItem from '../../../../pages/personal/course/components/SuccessfulTradeItem/SuccessfulTradeItem.vue';
  import WriteOffItem from '../../../../pages/personal/course/components/WriteOffItem/WriteOffItem.vue';

  export default {
    components: { CancelItem, NavBar, NonPaymentItem, SearchBar, SuccessfulTradeItem, WriteOffItem },
    props: {},
    data() {
      return {
        title: '课程订单',
        list: [
          {
            name: '全部',
          },
          {
            name: '待付款',
          },
          {
            name: '待核销',
          },
          {
            name: '交易完成',
          },
          {
            name: '已取消',
          },
        ],
        items: [null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .search-wrap {
      padding: 22rpx 0 2rpx;
      background-color: #ffffff;
      .section_3 {
        margin: 0 24rpx;
      }
    }
    .list {
      padding: 24rpx 0;
      .list-item_1 {
        margin: 0 24rpx;
      }
    }
  }
</style>