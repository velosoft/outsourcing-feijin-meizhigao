<template>
  <collapse-title-card class="collapse-white-card" title="订单信息" :showCollapse="false">
    <view class="flex-col mt-16">
      <u-cell class="cell-in-white-card" title="订单编号" :value="20220401786344763737" :border="false"></u-cell>
      <u-cell class="cell-in-white-card mt-16" title="下单支付" value="￥10" :border="false"></u-cell>
      <u-cell class="cell-in-white-card mt-16" title="支付方式" value="微信方式" :border="false"></u-cell>
      <u-cell class="cell-in-white-card mt-16" title="提交时间" value="2023-09-2012:00:00" :border="false"></u-cell>
      <u-cell class="cell-in-white-card mt-16" title="支付时间" value="2023-09-2012:00:00" :border="false"></u-cell>
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
    props: { orderData: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  /* 当前节点没有 LESS */
</style>
