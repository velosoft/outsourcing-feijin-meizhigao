<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col justify-start flex-1 comments">
      <list-container
        class="list-container"
        :showEmpty="!orders.length"
        :showLoading="showLoading"
        :finished="finished"
      >
        <view class="flex-col">
          <view class="flex-col list-item comment mt-12" v-for="(item, index) in orders" :key="index">
            <order-product-item :product="item.products[0]"></order-product-item>
            <view class="mt-14 self-end flex-col justify-center items-center comment-btn">我要评价</view>
          </view>
        </view>
      </list-container>
    </view>
  </view>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '@/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import { productOrders } from '@/mock/personal/orders';

  export default {
    components: { ListContainer, NavBar, OrderProductItem },
    props: {},
    data() {
      return {
        orders: productOrders,
        title: '我要评价',
        showLoading: true,
        finished: false,
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({
          url: '/pages/myOrder/productAddComment/productAddComment',
        });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .comments {
    padding-bottom: 40rpx;
    overflow-y: auto;
  }
  .list-container {
    margin: 0 24rpx;
  }
  .list-item {
    padding: 0 24rpx 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .comment {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .comment-btn {
    width: 164rpx;
    height: 68rpx;
    border-radius: 38rpx;
    border: 2rpx solid #dec9a0;
    box-sizing: border-box;

    font-size: 28rpx;
    font-family: 'PingFangSC';
    font-weight: 400;
    color: #b09053;
  }
</style>
