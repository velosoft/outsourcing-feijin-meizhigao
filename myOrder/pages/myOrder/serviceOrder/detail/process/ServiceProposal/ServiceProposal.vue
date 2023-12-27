<template>
  <OrderProcessCard title="服务设计">
    <view class="flex-col mt-16">
      <CFCard class="gray-card">
        <view class="flex-col">
          <u-cell class="cell-in-gray-card" title="设计开始时间" value="2024 -03-25 12:00:00" :border="false"></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="服务内容1" value="区域精准测量" :border="false"></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="方案" label="商品方案" value="服务方案" :border="false">
            <view class="flex-row" slot="value">
              <view class="flex-row items-center" @click="gotoProductList">
                <text class="text-golden">商品方案</text>
                <image
                  class="shrink-0 icon-golden-right ml-4"
                  src="/myOrder/static/images/icon_golden_right_arrow.png"
                />
              </view>
              <view class="flex-row items-center ml-12" @click="gotoPlan">
                <text class="text-golden">服务方案</text>
                <image
                  class="shrink-0 icon-golden-right ml-4"
                  src="/myOrder/static/images/icon_golden_right_arrow.png"
                />
              </view>
            </view>
          </u-cell>
          <u-cell
            class="cell-in-gray-card mt-16"
            title="方案确认时间"
            value="2024 -03-25 12:00:00"
            :border="false"
          ></u-cell>
          <u-cell class="cell-in-gray-card mt-16" title="报价需支付" value="￥899.00" :border="false"></u-cell>
        </view>
      </CFCard>
      <CFCard class="gray-card mt-8" title="设计团队">
        <view class="flex-row items-center" slot="headerRight" @click="callCaptain">
          <image class="shrink-0 icon-phone" src="/myOrder/static/images/icon_golden_phone.png" />
          <text class="text-golden ml-4">联系领队</text>
        </view>
        <TeamListPanel class="mt-8"></TeamListPanel>
      </CFCard>
    </view>
  </OrderProcessCard>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';
  import TeamListPanel from '../../../../../../pages/myOrder/serviceOrder/detail/components/TeamListPanel/TeamListPanel.vue';

  export default {
    components: { CFCard, OrderProcessCard, TeamListPanel },
    props: { orderData: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },
    methods: {
      gotoProductList() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/productList/productList' });
      },
      gotoPlan() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/servicePlan/servicePlan' });
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
  .icon-golden-right {
    width: 8rpx;
    height: 14rpx;
  }
  .icon-phone {
    border-radius: 50%;
    width: 40rpx;
    height: 40rpx;
  }
</style>
