<template>
  <view class="flex-row items-center wrap">
    <image class="status-icon" src="/myOrder/static/images/icon_status_wait.png" v-if="true" />
    <image class="status-icon" src="/myOrder/static/images/icon-finish.png" v-if="status == 1" />
    <image class="status-icon image" src="/myOrder/static/images/icon_status_info.png" v-if="status == 2" />
    <image class="status-icon" src="/myOrder/static/images/icon_status_close.png" v-if="status == 3" />
    <view class="flex-col items-start flex-1 self-center ml-12">
      <text class="title">{{ headerStatus.title }}</text>
      <text class="desc mt-6" v-if="headerStatus.descMain">{{ headerStatus.descMain }}</text>
      <text class="desc mt-6" v-if="headerStatus.descSecondary">{{ headerStatus.descSecondary }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      headerStatus: {
        type: Object,
        default: () => ({
          status: 0,
          title: '',
          descMain: '',
          descSecondary: '',
        }),
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 0 24rpx 48rpx;
    background-color: #b09053;
    height: 242rpx;
    .status-icon {
      width: 52rpx;
      height: 52rpx;
    }
    .title {
      color: #ffffff;
      font-size: 40rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 56rpx;
    }
    .desc {
      font-size: 26rpx;
      font-family: 'PingFang SC';
      line-height: 36rpx;
      color: #ffffff;
    }
  }
</style>
