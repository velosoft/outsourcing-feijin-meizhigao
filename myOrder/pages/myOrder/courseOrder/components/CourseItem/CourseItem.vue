<template>
    <view class="flex-col wrap">
      <view class="flex-row items-center group" @click="onClick">
        <view class="flex-col justify-start items-center relative thumb">
          <image class="thumb" src="/myOrder/static/images/mock_thumb_005.png" />
          <view class="flex-col items-start tag tag-pos" v-if="courseItem.status == 0"><text class="currency tag-text">秒杀</text></view>
        </view>
        <view class="flex-col justify-between flex-1 course-con">
          <text class="line-clamp-two title">收纳整理师中级认证课 （含服务奖励)</text>
          <view class="flex-col">
            <view class="flex-row items-start" v-if="courseItem.status == 0">
              <text class="currency">秒杀价</text>
              <view class="flex-row items-start">
                <text class="currency">￥</text>
                <text class="price-font price-active">40</text>
                <text class="decimal-font decimal-active">.00</text>
              </view>
            </view>
            <view class="flex-row" v-if="courseItem.status == 1">
              <text class="currency currency-normal">￥</text>
              <text class="price-font price-normal">40</text>
              <text class="decimal-font decimal-normal">.00</text>
            </view>
          </view>
        </view>
      </view>
      <view class="flex-col footer justify-center mt-12" v-if="courseItem.status == 2">
        <view class="text-wrap">
          <text class="light-font code-label">核销码：123456</text>
          <text class="light-font status-text">(待核销)</text>
        </view>
      </view>
    </view>
    </template>
    
    <script>
    export default {
      components: {},
      props: { courseItem: { type: Object, default: () => ({ status: 0 }) } },
      data() {
        return {};
      },
    
      methods: {
        onClick() {
          uni.navigateTo({ url: '/myOrder/pages/myOrder/courseOrder/courseDetial/courseDetial' });
        },
      },
    };
    </script>
    
    <style scoped lang="less">
    .wrap {      
      .group {
        height: 144rpx;
        .thumb {
          width: 144rpx;
          height: 144rpx;
          .tag {
            padding: 9.62rpx 0;
            background-color: #000000;
            border-radius: 11.75rpx 0rpx 11.75rpx 0rpx;
            width: 64.1rpx;
            .tag-text {
              margin-left: 12.82rpx;
              color: #ffffff;
              font-weight: unset;
            }
          }
          .tag-pos {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .course-con {
          height: 144.23rpx;
          margin-left: 16.03rpx;
          .title {
            color: #2d2e32;
            font-size: 29.91rpx;
            font-family: PingFang SC;
            font-weight: 700;
            line-height: 39.53rpx;
          }
          .price-font {
            font-size: 34.19rpx;
            font-family: HarmonyOS Sans;
            line-height: 34.19rpx;
            font-weight: 700;
          }
          .price-active {
            color: #bb3e0c;
          }
          .decimal-font {
            font-size: 21.37rpx;
            font-family: HarmonyOS Sans;
            line-height: 21.37rpx;
            font-weight: 700;
          }
          .decimal-active {
            color: #bb3e0c;
          }
          .currency-normal {
            color: #030305;
          }
          .price-normal {
            color: #030305;
          }
          .decimal-normal {
            color: #030305;
          }
        }
        .currency {
          font-size: 21.37rpx;
          font-family: PingFang SC;
          line-height: 21.37rpx;
          font-weight: 700;
          color: #bb3e0c;
        }
      }
      .footer {
        padding: 17.09rpx 0;
        background-color: #f1f1f1;
        border-radius: 8.55rpx;
        .text-wrap {
          margin: 0 8.55rpx;
          line-height: 23.95rpx;
          .light-font {
            font-size: 25.64rpx;
            font-family: PingFang SC;
            line-height: 25.64rpx;
          }
          .code-label {
            color: #000000;
          }
          .status-text {
            color: #b09053;
          }
        }
      }
    }
    </style>