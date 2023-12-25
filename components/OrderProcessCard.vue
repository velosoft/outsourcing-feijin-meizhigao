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
          <text class="text-title">{{ fullTitle }}</text>
        </view>
        <view class="flex-col mt-8">
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
      orderStatus: { type: Number, default: 0 },
    },
    computed: {
      statusText() {
        if (this.orderStatus == 2) {
          return '已完成';
        } else if (this.orderStatus == 1) {
          return '进行中';
        } else {
          return '未开始';
        }
      },

      fullTitle() {
        return `${this.title}(${this.statusText})`;
      },
    },
    data() {
      return {
        closedText: '收起',
        openText: '展开',
        closedHeight: '44rpx',
        collapseStatus: 'closed',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .order-process-card {
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
