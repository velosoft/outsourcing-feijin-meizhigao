<template>
  <order-process-card title="定制设计 (等待确认报价)">
    <cf-card class="gray-card">
      <view class="flex-col">
        <u-cell class="cell-in-gray-card" title="设计开始时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="方案" :border="false">
          <view class="flex-row items-center" slot="value" @click="gotoPlan">
            <text class="action-text">查看方案</text>
            <image class="icon-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
          </view>
        </u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="方案确认时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell
          class="cell-in-gray-card value-bold value-price mt-20"
          title="报价需支付"
          value="￥800.00"
          :border="false"
        ></u-cell>
      </view>
    </cf-card>
  </order-process-card>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';

  export default {
    options: { styleIsolation: 'shared' },
    components: { CfCard, OrderProcessCard },
    props: {},
    data() {
      return {};
    },
    methods: {
      gotoPlan() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/servicePlan/servicePlan' });
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
  .value-price {
    /deep/ .u-cell__value {
      font-family: HarmonyOS_Sans_Bold;
    }
  }
</style>
