<template>
  <view class="flex-col wrap">
    <view class="flex-col">
      <view class="list-item mt-40 mt-20 flex-row" v-for="(item, index) in items" :key="index">
        <view class="flex-col items-center relative thumb">
          <image class="image" src="/static/images/mock_thumb_002.png" />
          <view class="flex-col items-center text-wrapper pos justify-center tab-bg-active">
            <text class="currency tag">满减</text>
          </view>
        </view>
        <view class="flex-col justify-between ml-12 flex-1">
          <text class="line-clamp-one reserve-fpnt text">国风系列置物架碳钢多层储物架</text>
          <text class="self-start size-font size-text mt-13">规格：小号 | 黑色</text>
          <view class="relative mt-13 flex-row justify-between">
            <view class="flex-col">
              <view class="flex-row items-center" v-if="true">
                <text class="tag-text">定金</text>
                <view class="flex-row items-start">
                  <text class="currency">￥</text>
                  <text class="price">40</text>
                  <text class="decimal">.00</text>
                </view>
              </view>
              <view class="flex-row items-center" v-if="false">
                <text class="additional currency-normal">￥</text>
                <text class="price price-normal">40</text>
                <text class="decimal-noraml">.00</text>
              </view>
            </view>
            <text class="size-font">×1</text>
          </view>
          <text class="self-start additional additional-text mt-13">附加服务：安装服务￥99.00</text>
        </view>
      </view>
    </view>
    <view class="flex-row justify-between items-center reserve-wrap mt-40" v-if="true">
      <text class="reserve-fpnt reserve-text">预约时间</text>
      <view class="flex-row items-center">
        <text class="self-center reserve-fpnt select-time">请选择预约时间</text>
        <image class="icon-arrow ml-4" src="/static/images/icon_right_arrow_07.png" />
      </view>
    </view>
  </view>
  </template>
  
  <script>
  export default {
    components: {},
    props: { goodsCard: { type: Object, default: () => ({}) } },
    data() {
      return {
        items: [null, null],
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .mt-13 {
    margin-top: 26rpx;
  }
  .wrap {
    padding: 32rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
    .list-item {
      &:first-child {
        margin-top: 0;
      }
      .thumb {
        width: 180rpx;
        .image {
          width: 180rpx;
          height: 180rpx;
        }
        .text-wrapper {
          padding: 4rpx 12rpx;
          padding-bottom: 16rpx;
          background-color: #b09053;
          border-radius: 12rpx 0rpx;
          height: 38rpx;
          .tag {
            color: #ffffff;
            font-weight: 700;
          }
        }
        .pos {
          position: absolute;
          left: 0;
          top: 0;
        }
        .tab-bg-active {
          background: #bb3e0c;
        }
      }
      .text {
        line-height: 26rpx;
      }
      .size-font {
        font-size: 24rpx;
        font-family: PingFangSC;
        color: #a7a7a7;
      }
      .size-text {
        line-height: 24rpx;
      }
      .tag-text {
        font-size: 20rpx;
        font-family: PingFangSC;
        font-weight: 700;
        color: #bb3e0c;
      }
      .currency {
        font-size: 20rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
        color: #bb3e0c;
      }
      .price {
        font-size: 32rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 38rpx;
        font-weight: 700;
        color: #bb3e0c;
      }
      .decimal {
        font-size: 24rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        color: #bb3e0c;
      }
      .additional {
        font-size: 20rpx;
        font-family: PingFangSC;
        line-height: 20rpx;
        color: #6c6c6c;
      }
      .currency-normal {
        color: #030305;
      }
      .price-normal {
        color: #030305;
      }
      .decimal-noraml {
        color: #030305;
        font-size: 20rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 20rpx;
      }
      .additional-text {
        font-size: 22rpx;
        line-height: 20.44rpx;
      }
    }
    .reserve-wrap {
      padding: 28rpx 24rpx;
      background-color: #f8f8f8;
      border-radius: 12rpx;
      .reserve-text {
        line-height: 26rpx;
      }
      .select-time {
        color: #a7a7a7;
        line-height: 26rpx;
      }
      .icon-arrow {
        width: 24rpx;
        height: 24rpx;
      }
    }
    .reserve-fpnt {
      font-size: 28rpx;
      font-family: PingFangSC;
      line-height: 28rpx;
      color: #030305;
    }
  }
  </style>