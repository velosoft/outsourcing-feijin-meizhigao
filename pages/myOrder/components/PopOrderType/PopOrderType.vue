<template>
  <view class="flex-col component-Vvb8VvF0">
    <text class="self-start font_7 text_12">筛选订单类型</text>
    <Selector class="cell-radios group mt-34" :items="types"></Selector>
  </view>
</template>

<script>
  import Selector from '@/components/Selector/Selector';

  export default {
    components: { Selector },
    props: {},
    data() {
      return {
        types: ['商品订单', '意向订单', '服务订单'],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .component-Vvb8VvF0 {
    padding: 40rpx 24rpx 96rpx 32rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .font_7 {
    font-size: 32rpx;
    font-family: 'PingFang SC';
    line-height: 44rpx;
    font-weight: 500;
    color: #111111;
  }
  .text_12 {
    color: #9e9ea0;
  }
  .group {
    align-self: stretch;
  }
</style>