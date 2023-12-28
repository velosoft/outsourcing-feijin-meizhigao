<template>
  <collapse-title-card class="collapse-white-card" title="付款信息" closedText="展开付款信息" openText="收起付款信息">
    <view class="flex-col mt-16">
      <u-cell class="cell-in-white-card-weight" :border="false" value="￥680.00">
        <view slot="title" class="flex-row items-center">
          <text class="u-cell__title-text">报价实付</text>
          <u-icon name="question-circle" color="#9E9EA0" size="16" class="ml-4"></u-icon>
        </view>
      </u-cell>
      <u-cell
        class="cell-in-white-card-weight mt-16"
        title="订单实际支付总额（定金+报价）"
        :border="false"
        value="￥700.00"
      ></u-cell>
    </view>
  </collapse-title-card>
</template>

<script>
  import CollapseTitleCard from '@/components/CollapseCard/CollapseTitleCard';

  export default {
    components: { CollapseTitleCard },
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less"></style>
