<template>
  <view class="flex-col root">
    <text class="self-start font_normal title">筛选订单类型</text>
    <Selector class="cell-radios mt-20" :items="types" @change="onChange">
      <template v-slot="{ item }">
        <view class="flex-row justify-between items-center cell">
          <text class="font_normal">{{ item }}</text>
          <image class="image" src="/myOrder/static/images/icon_golden_ok.png" />
        </view>
      </template>
    </Selector>
  </view>
</template>

<script>
  import Selector from '@/components/Selector/Selector';

  export default {
    components: { Selector },
    props: {
      types: {
        type: Array,
        default: ['商品订单', '意向订单', '服务订单'],
      },
    },
    data() {
      return {
        // types: ['商品订单', '意向订单', '服务订单'],
      };
    },

    methods: {
      onChange(i) {
        this.$emit('change', this.types[i]);
      },
    },
  };
</script>

<style scoped lang="less">
  .root {
    padding: 40rpx 24rpx 96rpx 32rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
    .font_normal {
      font-size: 32rpx;
      font-family: 'PingFang SC';
      line-height: 44rpx;
      font-weight: 500;
      color: #111111;
    }
    .title {
      color: #6d6d6d;
    }
    .group {
      align-self: stretch;
    }
  }

  .cell {
    padding: 40rpx 0;
    border-bottom: solid 2rpx #e8e8e8;
    .font_normal {
      font-size: 32rpx;
      line-height: 44rpx;
      font-weight: 500;
    }

    .image {
      margin-right: 16rpx;
      width: 36rpx;
      height: 28rpx;
    }
  }
</style>
