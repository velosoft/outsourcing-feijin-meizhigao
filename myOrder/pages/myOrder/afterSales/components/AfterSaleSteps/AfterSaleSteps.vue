<template>
    <u-steps direction="column">
      <view class="flex-col group_14 ml-8">
        <u-steps-item>
          <OrderProcessCard title="客服已处理 (未开始)" slot="desc">
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
        <u-steps-item class="mt-14">
          <OrderProcessCard title="审核通过 (未开始)" slot="desc">
            <CFCard class="gray-card section_10 mt-8">
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
        <u-steps-item class="mt-14">
          <OrderProcessCard title="提交申请 (未开始)" slot="desc">
            <CFCard class="gray-card section_10 mt-8">
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
      props: {},
      data() {
        return {};
      },

      methods: {},
    };
    </script>

    <style scoped lang="less">
    .group_14 {
      flex: 1 1 0;
      .section_10 {
        align-self: stretch;
        .step-con-top {
          margin-top: 32rpx;
        }
      }
    }
    </style>
