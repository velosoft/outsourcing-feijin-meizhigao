<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between items-end group">
      <view class="flex-col items-center relative justify-end" v-for="(item, index) in consumChartResData" :key="index">
        <text class="value" :class="item.status ? 'value-active' : 'value-inactive'">{{ item.num }}</text>
        <image class="bg-bar" mode="widthFix" :src="item.status ? item.barBgActive : item.barBgInActive" />
        <image
          class="star-icon star-pos"
          mode="widthFix"
          :src="item.status ? item.starIconActive : item.starIconInActive"
        />
        <text class="relative value text-top" :class="item.status ? 'value-active' : 'value-inactive'">{{
          item.type
        }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import { consumChartResData } from './BarChart.data.js';

  export default {
    components: {},
    props: {},
    data() {
      return {
        consumChartResData: consumChartResData,
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding-top: 32rpx;
    .group {
      margin-left: 14rpx;
      margin-right: 12rpx;
      .value {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        font-weight: 500;
      }
      .value-active {
        color: #dec9a0;
      }
      .value-inactive {
        color: #cccccc;
      }
      .bg-bar {
        margin-top: 64rpx;
        width: 88rpx;
      }
      .star-icon {
        width: 56rpx;
        height: 82rpx;
      }
      .star-pos {
        position: absolute;
        left: 50%;
        top: 33rpx;
        transform: translateX(-50%);
      }
      .text-top {
        margin-top: 20rpx;
      }
    }
  }
</style>
