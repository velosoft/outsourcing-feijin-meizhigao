<template>
  <order-process-card title="定制测量 (等待客户签约)">
    <cf-card class="gray-card">
      <view class="flex-col">
        <u-cell class="cell-in-gray-card" title="预约上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="测量结果" :border="false">
          <view class="flex-row items-center" slot="value" @click="gotoMeasureResult">
            <text class="action-text">查看结果</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
          </view>
        </u-cell>
      </view>
    </cf-card>
  </order-process-card>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';

  export default {
    components: { CfCard, OrderProcessCard },
    props: {},
    data() {
      return {};
    },
    methods: {
      gotoMeasureResult() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/measureResult/measureResult' });
      },
    },
  };
</script>

<style scoped lang="less">
  .action-text {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .icon-arrow {
    width: 8rpx;
    height: 14rpx;
  }
</style>
