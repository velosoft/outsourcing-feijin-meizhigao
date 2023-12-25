<template>
  <view class="flex-col justify-start wrap">
    <view class="flex-row items-center">
      <view class="flex-col items-center status-icon">
        <image
          class="status-icon"
          src="/myOrder/static/images/icon_status_wait.png"
          v-if="true"
        />
        <image
          class="status-icon"
          src="/myOrder/static/images/icon-finish.png"
          v-if="false"
        />
        <image
          class="status-icon image"
          src="/myOrder/static/images/icon_status_info.png"
          v-if="false"
        />
        <image
          class="status-icon"
          src="/myOrder/static/images/icon_status_close.png"
          v-if="false"
        />
      </view>
      <view class="flex-col items-start flex-1 ml-14">
        <text class="title">等待分配业务员</text>
        <view class="flex-col justify-start mt-2"><text class="font">预约上门时间：2023-06-13 12:00</text></view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { orderData: { type: Object, default: () => ({}) } },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 32rpx 24rpx 0;
    background-color: #b09053;
    height: 240rpx;
    .status-icon {
      width: 48rpx;
      height: 48rpx;
      .image {
        margin-top: 4rpx;
      }
    }
    .title {
      color: #ffffff;
      font-size: 40rpx;
      font-weight: 500;
      line-height: 56rpx;
    }
    .font {
      color: #ffffff;
      font-size: 26rpx;
      font-weight: 500;
      line-height: 36rpx;
    }
  }
</style>