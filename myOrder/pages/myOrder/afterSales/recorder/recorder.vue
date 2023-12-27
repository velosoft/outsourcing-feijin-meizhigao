<template>
    <view class="flex-col page">
      <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
      <view class="flex-col container iPhoneX">
        <CFCard class="mt-12" title="换货成功" v-if="true">
          <view class="flex-col">
            <u-cell class="cell-in-white-card mt-16" title="物流公司" value="申通快递" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="物流单号" :value="156668933990900" :border="false"></u-cell>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="申请意见" v-if="true">
          <view class="flex-col">
            <u-cell class="cell-in-white-card mt-16" title="审核结果" value="审核通过" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="退货联系人" value="张小宇" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="联系电话" :value="1567938494" :border="false"></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="退货地址"
              value="广东省广州市天河区车陂南路东宏国际"
              :border="false"
            ></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="退货时间" value="2023-09-05 12:23:13" :border="false"></u-cell>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="申请意见" v-if="true">
          <view class="flex-col">
            <u-cell class="cell-in-white-card mt-16" title="审核结果" value="审核不通过" :border="false"></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="审核意见"
              value="审核内容审核内容通过审核内容通过审核审核内容通过审核内容通过"
              :border="false"
            ></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="审核时间" value="2023-12-09 12:13:23" :border="false"></u-cell>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="物流信息" v-if="true">
          <view class="flex-col">
            <u-cell class="cell-in-white-card mt-16" title="物流公司" value="申通快递" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="物流单号" :value="13445697557900466" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="审核时间" value="2023-12-09 12:13:23" :border="false"></u-cell>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="申请原因" v-if="true">
          <view class="flex-col">
            <u-cell class="cell-in-white-card mt-16" title="服务类型" value="换货" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="退款原因" value="货物破损" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="退款金额" value="￥84" :border="false"></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="备注说明"
              value="货物有问题货物有问题货物有问题货物有问题货物有问题货物有问题货物有问题货物有问题"
              :border="false"
            ></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="申请时间" value="2023-12-09 12:13:23" :border="false"></u-cell>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="退款成功" v-if="true">
          <view class="flex-col">
            <u-cell class="cell-in-white-card mt-16" title="退款金额" value="￥84" :border="false"></u-cell>
            <u-cell class="cell-in-white-card mt-16" title="审核时间" value="2023-12-09 12:13:23" :border="false"></u-cell>
          </view>
        </CFCard>
      </view>
    </view>
    </template>
    
    <script>
    import CFCard from '@/components/Card/Card';
    import NavBar from '@/components/NavBar/NavBar.vue';
    
    export default {
      components: { CFCard, NavBar },
      props: {},
      data() {
        return {
          title: '协商记录',
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
      .container {
      padding: 0 24rpx;
    }
    }

    </style>