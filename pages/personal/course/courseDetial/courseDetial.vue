<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col">
      <view class="flex-col header-status"><HeaderStatus class="status-wrap"></HeaderStatus></view>
      <view class="flex-col relative container">
        <ApplyInfo></ApplyInfo>
        <CourseInfo class="mt-10"></CourseInfo>
        <PayInfo class="mt-10" :payInfo="payInfo"></PayInfo>
        <OrderInfo class="mt-10" :orderInfo="orderInfo"></OrderInfo>
      </view>
      <FooterBtn></FooterBtn>
    </view>
  </view>
</template>

<script>
  import ApplyInfo from '../../../../pages/personal/course/components/ApplyInfo/ApplyInfo.vue';
  import CourseInfo from '../../../../pages/personal/course/components/CourseInfo/CourseInfo.vue';
  import FooterBtn from '../../../../components/FooterBtn/FooterBtn.vue';
  import HeaderStatus from '../../../../pages/personal/course/components/HeaderStatus/HeaderStatus.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderInfo from '../../../../pages/personal/course/components/OrderInfo/OrderInfo.vue';
  import PayInfo from '../../../../pages/personal/course/components/PayInfo/PayInfo.vue';

  export default {
    components: { ApplyInfo, CourseInfo, FooterBtn, HeaderStatus, NavBar, OrderInfo, PayInfo },
    props: {},
    data() {
      return {
        payInfo: {},
        orderInfo: {},
        title: '课程详情',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .header-status {
      padding: 56rpx 0 104rpx;
      background-color: #b09053;
      .status-wrap {
        margin: 0 24rpx;
      }
    }
    .container {
      margin-top: -40rpx;
      padding: 32rpx 24rpx 144rpx;
      background-color: #f8f8f8;
      border-radius: 24rpx 24rpx 0rpx 0rpx;
    }
  }
</style>