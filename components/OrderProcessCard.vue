<template>
  <view class="flex-col justify-start">
    <collapse-card
      class="order-process-card"
      :closedText="closedText"
      :openText="openText"
      :closedHeight="closedHeight"
      :status="collapseStatus"
      iconSize="16rpx"
    >
      <view class="flex-col">
        <view class="flex-col justify-start">
          <text class="text-title" :class="{ done }">{{ title }}</text>
        </view>
        <view class="flex-col mt-16">
          <slot>订单折叠卡片</slot>
        </view>
      </view>
    </collapse-card>
  </view>
</template>

<script>
  import CollapseCard from '@/components/CollapseCard/CollapseCard';

  export default {
    components: { CollapseCard },
    options: {
      styleIsolation: 'shared',
    },
    props: {
      title: { type: String, default: `标题` },
      done: Boolean,
    },
    data() {
      return {
        closedText: '展开',
        openText: '收起',
        closedHeight: '44rpx',
        collapseStatus: 'closed',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .order-process-card {
    .text-title {
      font-size: 30rpx;
      font-weight: 500;
      color: #2d2e32;
      line-height: 42rpx;
    }

    .text-title.done {
      color: #9e9ea0;
    }

    /deep/ .collapse-wrapper {
      position: absolute !important;
      // top: 0 !important;
      right: 0 !important;
      font-size: 24rpx;
      line-height: 44rpx;
      color: #b09053;
      min-width: 160rpx;
      justify-content: flex-end !important;
    }

    /deep/ .icon-wrapper {
      margin-left: 8rpx;
      width: 16rpx !important;
      height: 16rpx !important;
    }
  }
</style>
