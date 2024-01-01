<template>
  <u-steps
    class="cf-steps-column"
    direction="column"
    iconSize="20rpx"
    activeColor="#B09053"
    inactiveColor="#cccccc"
    :dot="true"
    :current="current"
  >
    <view class="flex-col wrap ml-8">
      <u-steps-item :class="current == 0 ? 'cf-steps-column-current' : ''">
        <OrderProcessCard title="客服已处理" slot="desc">
          <CFCard class="gray-card mt-10">
            <view class="flex-col">
              <u-cell class="cell-in-gray-card" title="订单时间" value="2024-05-14 12:00:00" :border="false"></u-cell>
              <u-cell
                class="cell-in-gray-card mt-14"
                title="处理结果"
                value="更换测试人员，已安排张三继续执行…"
                :border="false"
              ></u-cell>
            </view>
          </CFCard>
        </OrderProcessCard>
      </u-steps-item>
      <u-steps-item :class="current == 1 ? 'cf-steps-column-current' : ''">
        <OrderProcessCard title="审核通过" slot="desc">
          <CFCard class="gray-card mt-8">
            <view class="flex-col">
              <u-cell class="cell-in-gray-card" title="订单时间" value="2024-05-14 12:00:00" :border="false"></u-cell>
              <u-cell
                class="cell-in-gray-card step-con-top"
                title="审核备注"
                value="已安排客服介入"
                :border="false"
              ></u-cell>
            </view>
          </CFCard>
        </OrderProcessCard>
      </u-steps-item>
      <u-steps-item :class="current == 2 ? 'cf-steps-column-current' : ''">
        <OrderProcessCard title="提交申请" slot="desc">
          <CFCard class="gray-card mt-8">
            <view class="flex-col">
              <u-cell class="cell-in-gray-card" title="订单时间" value="2024-05-14 12:00:00" :border="false"></u-cell>
              <u-cell
                class="cell-in-gray-card step-con-top"
                title="申请原因"
                value="需要客服介入"
                :border="false"
              ></u-cell>
              <u-cell
                class="cell-in-gray-card step-con-top"
                title="申请理由"
                value="需要客服介入"
                :border="false"
              ></u-cell>
            </view>
          </CFCard>
        </OrderProcessCard>
      </u-steps-item>
    </view>
  </u-steps>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';

  export default {
    components: { CFCard, OrderProcessCard },
    props: { afterSaleStepsData: { type: Object, default: {} } },
    data() {
      return {
        current: 2,
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    flex: 1 1 0;
    .step-con-top {
      margin-top: 32rpx;
    }
  }
</style>
