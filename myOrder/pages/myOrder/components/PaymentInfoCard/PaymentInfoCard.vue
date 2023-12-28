<template>
  <collapse-title-card class="collapse-white-card" title="付款信息" closedText="展开" openText="收起付款信息">
    <view class="flex-col mt-16">
      <view class="flex-col">
        <u-cell class="cell-in-white-card" title="报价需支付" value="￥899.99" :border="false"></u-cell>
        <u-cell class="cell-in-white-card mt-16" title="报价实付" value="￥899.00" :border="false"></u-cell>
        <u-cell class="cell-in-white-card mt-16" title="人工优惠" value="-￥80.00" :border="false"></u-cell>
        <u-cell class="cell-in-white-card mt-16" title="积分抵扣" value="-￥9.00" :border="false"></u-cell>
        <u-cell class="cell-in-white-card mt-16" title="优惠券减免" value="-￥10.00" :border="false"></u-cell>
      </view>
      <view class="divider mt-24"></view>
      <u-cell class="cell-in-white-card-sum mt-24" title="订单实际支付总额" value="￥709.00" :border="false"></u-cell>
    </view>
  </collapse-title-card>
</template>

<script>
  import CollapseTitleCard from '@/components/CollapseCard/CollapseTitleCard';

  export default {
    components: { CollapseTitleCard },
    options: {
      styleIsolation: 'shared',
    },
    props: { orderData: { type: String, default: `` }, prop2: { type: String, default: `` } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .divider {
    background-color: #3c3d41;
    height: 2rpx;
  }
</style>
