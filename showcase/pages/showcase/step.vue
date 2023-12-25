<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col flex-1 container">
      <ServiceInfo></ServiceInfo>
      <AcceptanceService class="group_1"></AcceptanceService>
      <AddSignature class="section_5"></AddSignature>
      <FooterBlockBtn class="button"></FooterBlockBtn>
    </view>
  </view>
  </template>
  
  <script>
  import AcceptanceService from '../../../../pages/serviceOrder/acceptance/components/AcceptanceService/AcceptanceService.vue';
  import AddSignature from '../../../../pages/serviceOrder/acceptance/components/AddSignature/AddSignature.vue';
  import FooterBlockBtn from '../../../../pages/components/FooterBlockBtn/FooterBlockBtn.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import ServiceInfo from '../../../../pages/serviceOrder/components/ServiceInfo/ServiceInfo.vue';
  
  export default {
    components: { AcceptanceService, AddSignature, FooterBlockBtn, NavBar, ServiceInfo },
    props: {},
    data() {
      return {
        title: '验收服务',
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .container {
      padding: 24rpx 22rpx 56rpx;
      overflow-y: auto;
      .group_1 {
        margin-top: 20rpx;
      }
      .section_5 {
        margin-top: 40rpx;
      }
      .button {
        margin: 46rpx 18rpx 0;
      }
    }
  }
  </style>