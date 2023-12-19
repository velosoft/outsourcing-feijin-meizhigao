<template>
<view class="flex-col page">
  <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
  <view class="flex-col justify-start flex-1 comments">
    <list-container class="list-container" :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
      <view class="flex-col">
        <view class="flex-col list-item comment mt-12" v-for="(item, index) in orders" :key="index">
          <OrderProductItem :product="item.products[0]"></OrderProductItem>
          <u-button
            class="mt-12 self-end"
            text="我要评价"
            type="primary"
            shape="circle"
            :plain="true"
            @click="onClick"
          ></u-button>
        </view>
      </view>
    </list-container>
  </view>
</view>
</template>

<script>
import ListContainer from '@/components/ListContainer/ListContainer.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import OrderProductItem from '../../../pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import { productOrders } from '../../../mock/personal/orders'

export default {
  components: { ListContainer, NavBar, OrderProductItem },
  props: {},
  data() {
    return {
      orders: productOrders,
      title: '我要评价',
      showEmpty: false,
      showLoading: false,
      finished: false,
    };
  },

  methods: {
    onClick() {
      uni.navigateTo({ url: '/pages/myOrder/proudctAddComment/proudctAddComment' });
    },
  },
};
</script>

<style scoped lang="css">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.comments {
  padding-bottom: 400rpx;
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
</style>
