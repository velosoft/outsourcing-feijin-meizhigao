<template>
  <view class="flex-col wrap">
    <view class="flex-row items-center group" @click="onClick">
      <view class="flex-col justify-start items-center relative thumb">
        <image class="thumb" src="/myOrder/static/images/mock_thumb_005.png" />
        <view class="flex-col tag tag-pos" v-if="courseItem.status == 0">
          <text class="tag-text">秒杀</text>
        </view>
      </view>
      <view class="flex-col justify-between flex-1 course-con">
        <text class="line-clamp-two title">收纳整理师中级认证课 （含服务奖励)</text>
        <view class="flex-col">
          <view class="flex-row items-start" v-if="courseItem.status == 0">
            <text class="seckill-price">秒杀价</text>
            <price class="cf-red-font" price="40" />
          </view>
          <price class="cf-black-font" price="40" v-else />
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
  import Price from '@/components/Price/Price';
  export default {
    components: { Price },
    props: { courseItem: { type: Object, default: () => ({ status: 2 }) } },
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
          height: 38rpx;
          padding: 0 12rpx;
          background-color: #111111;
          border-radius: 12rpx 0;
          .tag-text {
            color: #ffffff;
            font-size: 20rpx;
            font-family: PingFang SC;
            line-height: 38rpx;
            font-weight: 400;
          }
        }
        .tag-pos {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .course-con {
        height: 144rpx;
        margin-left: 16rpx;
        .title {
          color: #111111;
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: 700;
          line-height: 40rpx;
        }
        .text-normal {
          color: #111111;
        }
        .seckill-price {
          font-size: 20rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #bb3e0c;
        }
      }
    }
    .footer {
      padding: 17rpx 0;
      background-color: #f1f1f1;
      border-radius: 8rpx;
      .text-wrap {
        margin: 0 8rpx;
        line-height: 24rpx;
        .light-font {
          font-size: 26rpx;
          font-family: PingFang SC;
          line-height: 26rpx;
        }
        .code-label {
          color: #111111;
        }
        .status-text {
          color: #b09053;
        }
      }
    }
  }
</style>
