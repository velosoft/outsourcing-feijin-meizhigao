<template>
  <order-process-card title="服务测量 (未开始)">
    <view class="flex-col">
      <cf-card class="gray-card">
        <view class="flex-col">
          <u-cell class="cell-in-gray-card" title="预约上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="上门时间"
            value="2024 -03-25 12:00:00"
            :border="false"
          ></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="服务内容1" value="区域精准测量" :border="false"></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="测量结果" value="查看结果" :border="false">
            <view class="flex-row items-center" slot="value" @click="gotoMeasureResult">
              <text class="text-golden">查看结果</text>
              <image class="icon-right-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
            </view>
          </u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="发起签约时间"
            value="2024 -03-25 12:00:00"
            :border="false"
          ></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="合约（已签署）" :border="false">
            <view class="flex-row items-center" slot="value">
              <text class="text-golden">查看合约</text>
              <image class="icon-right-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
            </view>
          </u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="签约时间"
            value="2024 -03-25 12:00:00"
            :border="false"
          ></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="初次报价" value="￥1000.00" :border="false"></u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="初次报价时间"
            value="2024 -03-25 12:00:00"
            :border="false"
          ></u-cell>
        </view>
      </cf-card>
      <cf-card class="gray-card mt-8" title="测量团队">
        <view class="flex-row items-center" slot="headerRight" @click="callCaptain">
          <image class="icon-phone" src="/myOrder/static/images/icon_golden_phone.png" />
          <text class="text-golden ml-4">联系领队</text>
        </view>
        <team-list-panel class="mt-8"></team-list-panel>
      </cf-card>
    </view>
  </order-process-card>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';
  import TeamListPanel from '@/myOrder/pages/myOrder/serviceOrder/detail/components/TeamListPanel/TeamListPanel.vue';

  export default {
    components: { CfCard, OrderProcessCard, TeamListPanel },
    props: {
      orderData: { type: Object, default: () => ({}) },
      title: { type: String, default: `` },
      status: { type: String, default: `` },
    },
    data() {
      return {
        collapseStatus: 'closed',
      };
    },
    methods: {
      gotoMeasureResult() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/measureResult/measureResult' });
      },
      callCaptain() {
        this.$emit('call-captain');
      },
    },
  };
</script>

<style scoped lang="less">
  .text-golden {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .icon-right-arrow {
    width: 8rpx;
    height: 14rpx;
  }
  .icon-phone {
    border-radius: 50%;
    width: 40rpx;
    height: 40rpx;
  }
</style>
