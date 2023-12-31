<template>
  <collapse-title-card class="collapse-white-card" title="订单信息" closedText="展开订单信息" openText="收起订单信息">
    <view class="flex-col mt-16">
      <u-cell class="cell-in-white-card-weight" title="订单编号" :border="false" value="20220401786344763737"></u-cell>
      <u-cell class="cell-in-white-card-weight mt-16" title="支付定金" :border="false" value="￥999.00"></u-cell>
      <u-cell class="cell-in-white-card-weight mt-16" title="支付方式" :border="false" value="微信支付"></u-cell>
      <u-cell
        class="cell-in-white-card-weight mt-16"
        title="提交时间"
        :border="false"
        value="2022-04-01 09:30:22"
      ></u-cell>
      <u-cell
        class="cell-in-white-card-weight mt-16"
        title="支付时间"
        :border="false"
        value="2022-04-01 09:30:22"
      ></u-cell>
    </view>
  </collapse-title-card>
</template>

<script>
  import CollapseTitleCard from '@/components/CollapseCard/CollapseTitleCard';

  export default {
    options: { styleIsolation: 'shared' },
    components: { CollapseTitleCard },
    props: {},
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .cell-in-white-card-weight {
    /deep/ .u-cell__value {
      font-family: HarmonyOS_Sans_Bold;
    }
  }
</style>
