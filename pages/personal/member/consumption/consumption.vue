<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#111111" titleColor="#ffffff"></NavBar>
    <view class="flex-col flex-1 container">
      <view class="flex-col chart">
        <view class="flex-col items-start">
          <text class="title">消费活跃值</text>
          <text class="desc mt-8">累计消费值为4500，还差500消费值可升级为黄金会员</text>
        </view>
        <BarChart></BarChart>
      </view>
      <view class="flex-col describe">
        <ConsumptionValue></ConsumptionValue>
        <ConsumptionExplanation class="consum-relative"></ConsumptionExplanation>
      </view>
    </view>
  </view>
</template>

<script>
  import BarChart from '../../../../pages/personal/member/components/BarChart/BarChart.vue';
  import ConsumptionExplanation from '../../../../pages/personal/member/components/ConsumptionExplanation/ConsumptionExplanation.vue';
  import ConsumptionValue from '../../../../pages/personal/member/components/ConsumptionValue/ConsumptionValue.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { BarChart, ConsumptionExplanation, ConsumptionValue, NavBar },
    props: {},
    data() {
      return {
        title: '消费值',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .container {
      overflow-y: auto;
      .chart {
        padding: 24rpx 20rpx 40rpx;
        background-color: #111111;
        border-bottom: solid 2rpx #979797;
        .title {
          font-size: 36rpx;
          font-family: 'PingFang SC';
          line-height: 50rpx;
          font-weight: 500;
          color: #ffffff;
        }
        .desc {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          font-weight: 500;
          color: #ffffff;
        }
      }
      .describe {
        padding: 24rpx 24rpx 32rpx;
        .consum-relative {
          position: relative;
        }
      }
    }
  }
</style>