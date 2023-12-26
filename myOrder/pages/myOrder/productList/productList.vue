<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col">
      <FjSticky v-bind:customNavHeight="80">
        <u-tabs
          class="tabs-yellow-line-14"
          :list="list"
          lineWidth="104rpx"
          :activeStyle="{ color: '#111111' }"
          :inactiveStyle="{ color: '#9C9C9F' }"
          @change="onChangeTab"
        ></u-tabs>
      </FjSticky>
      <view class="flex-col products-wrapper" :class="{ offline: tab === 1 }">
        <view class="flex-col header">
          <view class="flex-row justify-between items-center shipping">
            <text class="count">商品订单号：S34568700559033</text>
            <view class="flex-col justify-start items-center button"><text class="btn-text">查看物流</text></view>
          </view>
          <view class="flex-row justify-between items-center sum">
            <text class="count">合计数量：10</text>
            <text class="money">合计金额：￥600</text>
          </view>
        </view>
        <list-container
          class="list-container"
          :showEmpty="!items.length"
          :showLoading="showLoading"
          :finished="finished"
        >
          <view class="flex-col">
            <ProductItemTag
              class="list-item mt-13"
              v-for="(item, index) in items"
              :key="index"
              :showReturnd="index % 2 === 1"
            ></ProductItemTag>
            <text class="self-center more mt-27">加载中</text>
          </view>
        </list-container>
      </view>
    </view>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import ProductItemTag from '@/myOrder/pages/myOrder/components/ProductItemTag/ProductItemTag.vue';

  export default {
    components: { FjSticky, ListContainer, NavBar, ProductItemTag },
    props: {},
    data() {
      return {
        title: '商品清单',
        list: [
          {
            name: '平台商品（10）',
          },
          {
            name: '线下采购（10）',
          },
        ],
        tab: 0,
        showLoading: false,
        finished: false,
        items: [null, null, null, null, null, null, null],
      };
    },
    methods: {
      onChangeTab(val) {
        this.tab = val.index;
      },
    },
  };
</script>

<style scoped lang="less">
  .mt-13 {
    margin-top: 26rpx;
  }
  .mt-27 {
    margin-top: 54rpx;
  }
  .page {
    padding-bottom: 196rpx;
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
  }
  .products-wrapper {
    margin: 20rpx 24rpx 0;
    padding-bottom: 36rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .header {
    padding: 24rpx 0;
    border-bottom: solid 2rpx #efefef;
  }
  .shipping {
    padding-left: 26rpx;
    padding-right: 24rpx;
  }
  .count {
    font-size: 26rpx;
    color: #3c3d41;
  }
  .button {
    padding: 6rpx 0 6.8rpx;
    border-radius: 8rpx;
    width: 144rpx;
    height: 50rpx;
    border-left: solid 1.6rpx #dec9a0;
    border-right: solid 1.6rpx #dec9a0;
    border-top: solid 1.6rpx #dec9a0;
    border-bottom: solid 1.6rpx #dec9a0;
  }
  .btn-text {
    color: #b09053;
    font-size: 24rpx;
    line-height: 34rpx;
  }
  .sum {
    padding-left: 26rpx;
    padding-right: 20rpx;
    margin-top: 28rpx;
  }
  .money {
    color: #111111;
    font-size: 26rpx;
    font-weight: 600;
    line-height: 32rpx;
  }
  .list-container {
    margin-top: 26rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .list-item {
    padding: 0 20rpx;
  }
  .more {
    color: #9e9ea0;
    font-size: 28rpx;
  }
  .offline {
    .header {
      border-bottom: none;

      .shipping,
      .money {
        display: none;
      }
      .sum {
        margin-top: 0;
      }
      .count {
        font-size: 28rpx;
        font-weight: 500;
        color: #111111;
      }
    }
    .list-container {
      margin-top: 0;
    }
  }
</style>
