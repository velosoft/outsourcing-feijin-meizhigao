<template>
  <order-process-card title="附加服务 (已完成)" :done="true">
    <cf-card class="gray-card">
      <view class="flex-col">
        <u-cell class="cell-in-gray-card" title="预约上门时间" value="2023-08-09 12:00" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="服务团队" :border="false">
          <view class="flex-row items-center" slot="value" @click="callCaptain">
            <image class="icon-phone" src="/myOrder/static/images/icon_golden_phone.png" />
            <text class="action-text ml-4">联系领队</text>
          </view>
        </u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="服务内容1" value="安装服务" :border="false"></u-cell>
        <u-cell class="cell-in-gray-card mt-20" title="上门时间" value="2024-05-14 12:00:00" :border="false"></u-cell>
        <u-cell
          class="cell-in-gray-card mt-20"
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
    </cf-card>
    <cf-card class="gray-card mt-10" title="服务团队">
      <view class="flex-row items-center" slot="headerRight" @click="callCaptain">
        <image class="icon-phone" src="/myOrder/static/images/icon_golden_phone.png" />
        <text class="action-text ml-4">联系领队</text>
      </view>
      <team-list-panel class="mt-8"></team-list-panel>
    </cf-card>
  </order-process-card>
</template>

<script>
  import CfCard from '@/components/Card/Card';
  import OrderProcessCard from '@/components/OrderProcessCard';
  import TeamListPanel from '@/myOrder/pages/myOrder/serviceOrder/detail/components/TeamListPanel/TeamListPanel.vue';

  export default {
    components: { CfCard, OrderProcessCard, TeamListPanel },
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
