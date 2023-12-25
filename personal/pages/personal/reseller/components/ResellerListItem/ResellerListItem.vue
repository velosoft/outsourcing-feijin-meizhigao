<template>
  <view class="flex-row justify-between items-center">
    <view class="flex-row items-stretch flex-1">
      <image class="avatar" :src="resellerItem.avatar" />
      <view class="flex-col justify-center items-start flex-1 ml-8">
        <text class="title line-clamp-one">{{ resellerItem.nickname }}</text>
        <text class="time mt-2">{{ resellerItem.time }}</text>
      </view>
    </view>
    <view class="flex-col justify-center items-center">
      <text class="amount">{{ resellerItem.price }}</text>
      <text class="label mt-2">累计收益</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      resellerItem: {
        type: Object,
        default: () => ({
          avatar: '/personal/static/images/mock_avatar_05',
          nickname: '今天喝生椰拿铁',
          time: '2022-04-01 09:30:22',
          price: '1800',
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
  .avatar {
    width: 82rpx;
    height: 82rpx;
  }
  .title {
    color: #2d2e32;
    font-size: 26rpx;
    font-family: 苹方;
    line-height: 44rpx;
    font-weight: 400;
  }
  .time {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 44rpx;
    font-weight: 400;
    color: #8c8f95;
  }

  .label {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 44rpx;
    font-weight: 400;
    color: #707070;
  }

  .amount {
    color: #b09053;
    font-size: 32rpx;
    font-family: 苹方;
    font-weight: 700;
    line-height: 32rpx;
  }

  .content-wrap {
    padding: 6rpx 0;
  }
</style>
