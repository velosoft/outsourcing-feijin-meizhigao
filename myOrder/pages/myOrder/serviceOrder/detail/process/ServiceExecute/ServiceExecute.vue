<template>
  <order-process-card title="服务 (进行中)">
    <view class="flex-col mt-16">
      <cf-card class="gray-card">
        <view class="flex-col">
          <u-cell class="cell-in-gray-card" title="预约上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="服务内容1" value="现场物品收纳" :border="false"></u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="订单核对结果"
            value="需支付￥100（未支付）"
            :border="false"
            :center="false"
          >
            <view class="flex-col items-end" slot="value">
              <text class="font-black text-weight">需支付￥100（未支付）</text>
              <view class="flex-row items-center mt-8" @click="gotoPriceDiff">
                <text class="font-golden">查看核对结果</text>
                <image class="icon-right-arrow ml-4" src="/myOrder/static/images/icon_golden_right_arrow.png" />
              </view>
            </view>
          </u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="发起验收时间"
            value="2023-08-09 12:00"
            :border="false"
          ></u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="服务验收时间"
            value="2023-08-09 12:00"
            :border="false"
          ></u-cell>
        </view>
      </cf-card>
      <cf-card class="gray-card mt-8" title="服务团队">
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
    props: { orderData: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },
    methods: {
      gotoPriceDiff() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/checkPriceDiff/checkPriceDiff' });
      },
      callCaptain() {
        this.$emit('call-captain');
      },
    },
  };
</script>

<style scoped lang="less">
  .font-black {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #111111;
  }
  .text-weight {
    font-weight: 600;
    line-height: 30rpx;
  }
  .font-golden {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .icon-right-arrow {
    width: 8rpx;
    height: 14rpx;
  }

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
