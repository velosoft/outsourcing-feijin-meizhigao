<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col group">
      <HeadAddressCard></HeadAddressCard>
      <GoodsCard class="mt-10"></GoodsCard>
      <SubmitInfo class="mt-10"></SubmitInfo>
    </view>
    <CartBottomPayBtn></CartBottomPayBtn>
  </view>
  </template>
  
  <script>
  import CartBottomPayBtn from '../../../pages/cart/components/CartBottomPayBtn/CartBottomPayBtn.vue';
  import GoodsCard from '../../../pages/cart/components/GoodsCard/GoodsCard.vue';
  import HeadAddressCard from '../../../pages/cart/components/HeadAddressCard/HeadAddressCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import SubmitInfo from '../../../pages/cart/components/SubmitInfo/SubmitInfo.vue';
  
  export default {
    components: { CartBottomPayBtn, GoodsCard, HeadAddressCard, NavBar, SubmitInfo },
    props: {},
    data() {
      return {
        title: '预约定制',
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .group {
      padding: 20rpx;
    }
  }
  </style>