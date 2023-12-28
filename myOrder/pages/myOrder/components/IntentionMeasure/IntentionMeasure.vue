<template>
  <OrderProcessCard title="定制测量 (等待客户签约)">
    <CFCard class="gray-card">
      <view class="flex-col">
        <u-cell class="cell-in-gray-card" title="预约上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-16" title="上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-16" title="测量结果" :border="false">
          <view class="flex-row items-center" slot="value" @click="gotoMeasureResult">
            <text class="action-text">查看结果</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
          </view>
        </u-cell>
      </view>
    </CFCard>
  </OrderProcessCard>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';

  export default {
    components: { CFCard, OrderProcessCard },
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
