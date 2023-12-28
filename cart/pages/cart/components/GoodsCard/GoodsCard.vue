<template>
  <view class="flex-col wrap">
    <view class="flex-col">
      <view class="list-item mt-40 mt-20 flex-row" v-for="(item, index) in items" :key="index">
        <view class="flex-col items-center relative thumb">
          <image class="image" src="/cart/static/images/mock_thumb_002.png" />
          <view class="flex-col items-center text-wrapper pos justify-center" v-if="true">
            <text class="tag">满减</text>
          </view>
          <view class="flex-col items-center text-wrapper pos justify-center tab-bg-active" v-if="false">
            <text class="tag">秒杀</text>
          </view>
        </view>
        <view class="flex-col justify-between ml-12 flex-1">
          <view class="flex-col">
            <text class="line-clamp-one title title-text">国风系列置物架碳钢多层储物架</text>
            <text class="self-start size-font size-text mt-8">规格：小号 | 黑色</text>
          </view>
          <view class="relativen flex-row justify-between">
            <view class="flex-col">
              <view class="flex-row items-start" v-if="true">
                <text class="tag-text">定金</text>
                <price class="cf-red-font" price="40" />
              </view>
              <price class="cf-black-font" price="40" v-if="false" />
            </view>
            <text class="size-font">×1</text>
          </view>
          <text class="self-start additional additional-text">附加服务：安装服务￥99.00</text>
        </view>
      </view>
    </view>
    <view class="flex-row justify-between items-center reserve-wrap mt-40" v-if="true">
      <text class="title reserve-text">预约时间</text>
      <view class="flex-row items-center">
        <text class="self-center title select-time">请选择预约时间</text>
        <image class="icon-arrow ml-4" src="/cart/static/images/icon_right_arrow_07.png" />
      </view>
    </view>
  </view>
</template>

<script>
  import Price from '@/components/Price/Price';
  export default {
    components: { Price },
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
          padding: 0 12rpx;
          background-color: #b09053;
          border-radius: 12rpx 0rpx;
          height: 38rpx;
          .tag {
            color: #ffffff;
            font-size: 20rpx;
            font-family: PingFangSC;
            font-weight: 700;
            line-height: 38rpx;
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
      .title-text {
        line-height: 40rpx;
      }
      .size-font {
        font-size: 24rpx;
        font-family: PingFangSC;
        color: #6d6d6d;
      }
      .size-text {
        line-height: 34rpx;
      }
      .tag-text {
        font-size: 20rpx;
        font-family: PingFangSC;
        font-weight: 700;
        color: #bb3e0c;
        line-height: 28rpx;
      }

      .additional {
        font-size: 20rpx;
        font-family: PingFangSC;
        line-height: 20rpx;
        color: #6d6d6d;
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
      .title {
        font-size: 28rpx;
        font-family: PingFangSC;
        line-height: 28rpx;
        color: #111111;
      }

      .select-time {
        color: #6d6d6d;
        line-height: 26rpx;
      }
      .icon-arrow {
        width: 24rpx;
        height: 24rpx;
      }
    }
  }
</style>
