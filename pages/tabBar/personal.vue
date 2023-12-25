<template>
  <view class="height-full flex-col page">
    <nav-bar :hasBack="false" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col container flex-1">
      <center-header></center-header>
      <number-card class="number-card-top"></number-card>
      <order-card class="order-card"></order-card>
      <service-card class="service-top"></service-card>
    </view>
  </view>
</template>

<script>
  import CenterHeader from '@/pages/personal/components/CenterHeader/CenterHeader.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import NumberCard from '@/pages/personal/components/NumberCard/NumberCard.vue';
  import OrderCard from '@/pages/personal/components/OrderCard/OrderCard.vue';
  import ServiceCard from '@/pages/personal/components/ServiceCard/ServiceCard.vue';

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
      .order-card {
        position: relative;
        margin-top: -32rpx;
      }
      .service-top {
        margin-top: 24rpx;
      }
    }
  }
</style>
