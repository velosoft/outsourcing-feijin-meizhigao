<template>
  <view class="flex-col page">
    <NavBar :hasBack="false" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col container flex-1">
      <CenterHeader></CenterHeader>
      <NumberCard class="number-card-top"></NumberCard>
      <OrderCard class="section_4"></OrderCard>
      <ServiceCard class="service-top"></ServiceCard>
    </view>
  </view>
  </template>
  
  <script>
  import CenterHeader from '../personal/components/CenterHeader/CenterHeader.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import NumberCard from '../personal/components/NumberCard/NumberCard.vue';
  import OrderCard from '../personal/components/OrderCard/OrderCard.vue';
  import ServiceCard from '../personal/components/ServiceCard/ServiceCard.vue';
  
  export default {
    components: { CenterHeader, NavBar, NumberCard, OrderCard, ServiceCard },
    props: {},
    data() {
      return {
        title: '我的',
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: hidden;
    height: 100%;
    .container {
      padding: 32rpx 20rpx;
      .number-card-top {
        margin: 40rpx 24rpx 0;
      }
      .section_4 {
        position: relative;
        margin-top: -32rpx;
      }
      .service-top {
        margin-top: 24rpx;
      }
    }
  }
  </style>