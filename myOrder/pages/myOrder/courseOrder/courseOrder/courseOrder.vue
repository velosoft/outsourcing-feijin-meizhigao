<template>
  <view class="flex-col page height-full">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col iPhoneX">
      <view class="flex-col search-wrap">
        <SearchBar :value="value" placeholder="请输入课程单号/课程名称搜索"></SearchBar>
      </view>
      <FjSticky>
        <u-tabs
          class="tabs-yellow-wide"
          :list="list"
          :activeStyle="{
            fontSize: '30rpx',
            color: '#111111',
            fontWeight: '700',
          }"
          :inactiveStyle="{
            fontSize: '28rpx',
            color: '#6D6D6D',
            fontWeight: '400',
          }"
          lineWidth="60rpx"
          lineHeight="18rpx"
          :scrollable="true"
          itemStyle="padding-left: 39rpx; padding-right: 39rpx; height: 86rpx;"
          @change="onChangeStatus"
        ></u-tabs> </FjSticky
      ><list-container
        :showEmpty="!items.length"
        :showLoading="showLoading"
        emptyHint="暂无订单～"
        imgSrc="/myOrder/static/images/order-empty.png"
        :finished="finished"
      >
        <view class="flex-col list">
          <view class="flex-col list-item mt-12" v-for="(item, index) in items" :key="index">
            <NonPayItem v-if="orderType == 0" :coursesItem="item"></NonPayItem>
            <WriteOffItem v-if="orderType == 1" :coursesItem="item"></WriteOffItem>
            <TradeItem v-if="orderType == 2" :coursesItem="item"></TradeItem>
            <CancelItem v-if="orderType == 3" :coursesItem="item"></CancelItem>
          </view>
        </view>
      </list-container>
    </view>
  </view>
</template>

<script>
  import CancelItem from '../components/CancelItem/CancelItem.vue';
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import NonPayItem from '../components/NonPayItem/NonPayItem.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import TradeItem from '../components/TradeItem/TradeItem.vue';
  import WriteOffItem from '../components/WriteOffItem/WriteOffItem.vue';

  export default {
    components: { CancelItem, FjSticky, ListContainer, NavBar, NonPayItem, SearchBar, TradeItem, WriteOffItem },
    props: {},
    data() {
      return {
        value: '',
        orderType: 0,
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
        showEmpty: false,
        showLoading: false,
        finished: false,
        items: [null, null, null, null, null, null, null, null, null],
      };
    },

    methods: {
      onChangeStatus(args) {
        // 事件处理方法
        console.log(args);
        if (args.index >= 1) {
          this.orderType = args.index - 1;
        }
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;

    .search-wrap {
      padding: 22rpx 24rpx 0;
      background-color: #ffffff;
    }

    .list {
      background-color: #f8f8f8;
      .list-item {
        margin: 24rpx 24rpx 0;
      }
    }
  }
</style>
