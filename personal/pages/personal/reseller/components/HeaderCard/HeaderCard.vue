<template>
  <view class="flex-col relative wrap">
    <image class="bg-card pos" src="/personal/static/images/bg_header_card.png" />
    <view class="flex-row items-center relative container">
      <view class="flex-col items-center avatar-wrap justify-center">
        <image class="avatar" :src="personal.avatar" />
      </view>
      <view class="flex-col flex-1 ml-12">
        <text class="line-clamp-one nickname">{{ personal.nickname }}</text>
        <view class="flex-row items-center self-stretch mt-8">
          <text class="profit">累计收益:</text>
          <text class="profit">{{ personal.amount }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      personal: {
        type: Object,
        default: () => ({
          avatar: '/personal/static/images/mock_avatar_05.png',
          nickname: '今天喝生椰拿铁',
          amount: 2689.56,
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
    padding: 40rpx 0;
    background-image: linear-gradient(90deg, #ffffff 0.8%, #f0ede7 100%);
    border-radius: 16rpx;
    height: 184rpx;
    border-left: solid 2rpx #ffffff87;
    border-right: solid 2rpx #ffffff87;
    border-top: solid 2rpx #ffffff87;
    border-bottom: solid 2rpx #ffffff87;
    .bg-card {
      width: 702rpx;
      height: 184rpx;
    }
    .pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .container {
      margin: 0 24rpx;
      .avatar-wrap {
        padding: 8rpx 0;
        background-color: #ffffff;
        box-shadow: 0rpx 6rpx 12rpx #00000030;
        border-radius: 50%;
        width: 104rpx;
        height: 104rpx;
        .avatar {
          width: 92rpx;
          height: 92rpx;
        }
      }
      .nickname {
        color: #111111;
        font-size: 30rpx;
        font-family: 苹方;
        font-weight: 700;
        line-height: 30rpx;
        width: 400rpx;
      }
      .profit {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #8c8f95;
      }
    }
  }
</style>
