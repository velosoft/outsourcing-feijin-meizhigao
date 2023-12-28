<template>
  <OrderProcessCard title="附加服务 (已完成)" :done="true">
    <CFCard class="gray-card">
      <view class="flex-col">
        <u-cell class="cell-in-gray-card" title="预约上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-16" title="服务团队" :border="false">
          <view class="flex-row items-center" slot="value" @click="callCaptain">
            <image class="icon-phone" src="/myOrder/static/images/icon_golden_phone.png" />
            <text class="action-text ml-4">联系领队</text>
          </view>
        </u-cell>
        <u-cell class="cell-in-gray-card mt-16" title="服务内容1" value="安装服务" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-16" title="上门时间" value="2024-05-14 12:00:00" :border="false"></u-cell>
        <u-cell
          class="cell-in-gray-card mt-16"
          title="发起验收时间"
          value="2024-05-14 12:00:00"
          :border="false"
        ></u-cell>
        <u-cell
          class="cell-in-gray-card mt-20"
          title="验收服务时间"
          value="2024-05-14 12:00:00"
          :border="false"
        ></u-cell>
      </view>
    </CFCard>
    <CFCard class="gray-card mt-10" title="服务团队">
      <view class="flex-row items-center" slot="headerRight" @click="callCaptain">
        <image class="icon-phone" src="/myOrder/static/images/icon_golden_phone.png" />
        <text class="action-text ml-4">联系领队</text>
      </view>
      <TeamListPanel class="mt-8"></TeamListPanel>
    </CFCard>
  </OrderProcessCard>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';
  import TeamListPanel from '@/myOrder/pages/myOrder/serviceOrder/detail/components/TeamListPanel/TeamListPanel.vue';

  export default {
    components: { CFCard, OrderProcessCard, TeamListPanel },
    props: {},
    data() {
      return {};
    },
    methods: {
      callCaptain() {
        this.$emit('call-captain');
      },
    },
  };
</script>

<style scoped lang="less">
  .action-text {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #b09053;
  }
  .icon-phone {
    border-radius: 50%;
    width: 40rpx;
    height: 40rpx;
  }
</style>
