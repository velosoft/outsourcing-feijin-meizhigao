<template>
  <view class="flex-col wrap">
    <u-cell class="cell-in-white-card-weight" title="课程总额" value="￥1000.00" :border="false"></u-cell>
    <u-cell class="cell-in-white-card-weight mt-27" title="活动优惠" value="-￥80.00" :border="false"></u-cell>
    <view class="flex-col mt-20">
      <view class="flex-col list-item mt-10" v-for="(item, index) in items" :key="index">
        <view class="flex-row list">
          <image
            class="thumb ml-12"
            src="/static/images/mock_thumb_09.png"
            v-for="(item, index) in items_1"
            :key="index"
          />
        </view>
        <view class="flex-row tag-top items-center">
          <view class="flex-col">
            <view class="flex-col tag-normal items-center" v-if="true"><text class="tag-text">满100减10</text></view>
            <view class="flex-col tag-plain" v-if="false"><text class="tag-text">满100减10</text></view>
          </view>
          <text class="full-discount-text ml-6">小计:￥600.00，已减￥60.00</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { CartCouponDetialList: { type: Object, default: () => ({}) } },
    data() {
      return {
        items_1: [null, null],
        items: [null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .mt-27 {
    margin-top: 54rpx;
  }
  .mt-15 {
    margin-top: 30rpx;
  }
  .wrap {
    margin-bottom: 112rpx;
    padding: 63.2rpx 28rpx 56rpx 32rpx;
    background-color: #ffffff;
    border-radius: 20rpx 20rpx 0rpx 0rpx;
    .list-item {
      margin-right: 4rpx;
      padding: 24rpx 24rpx 18rpx;
      background: #f8f8f8;
      border-radius: 12rpx;
      &:first-child {
        margin-top: 0;
      }
      .list {
        margin-left: -24rpx;
        .thumb {
          width: 120rpx;
          height: 120rpx;
        }
      }
      .tag-top {
        margin-top: 14rpx;
        .tag-normal {
          padding: 4rpx 16rpx;
          background-color: #fdeee9;
          border-radius: 8rpx;
        }
        .tag-plain {
          padding: 4rpx 16rpx;
          border-radius: 8rpx;
          border: solid 1rpx #bb3e0c;
        }
        .tag-text {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 28rpx;
          font-weight: 700;
          color: #bb3e0c;
        }
        .full-discount-text {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24.08rpx;
          color: #030305;
        }
      }
    }
  }
</style>
