<template>
  <view class="height-full flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col container flex-1">
      <InterestsGrid class="relative"></InterestsGrid>
      <InterestsDescription class="mt-10"></InterestsDescription>
    </view>
  </view>
  </template>
  
  <script>
  import InterestsDescription from '../../../../pages/personal/bonusPoint/components/InterestsDescription/InterestsDescription.vue';
  import InterestsGrid from '../../../../pages/personal/bonusPoint/components/InterestsGrid/InterestsGrid.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  
  export default {
    components: { InterestsDescription, InterestsGrid, NavBar },
    props: {},
    data() {
      return {
        title: '权益说明',
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    .container {
      padding: 24rpx 24rpx 0;
      overflow-y: auto;
    }
  }
  </style>