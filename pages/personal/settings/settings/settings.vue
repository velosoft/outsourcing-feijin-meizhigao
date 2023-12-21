<template>
  <view class="height-full flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col container flex-1">
      <view class="flex-col cell-group">
        <view class="flex-row justify-between cell-wrap">
          <text class="self-center label">联系客户</text>
          <image class="self-start icon-arrow" src="/static/images/icon_right_arrow_05.png" />
        </view>
        <view class="flex-row justify-between cell-wrap mt-10" @click="onClick">
          <text class="self-center label">关于我们</text>
          <image class="self-start icon-arrow" src="/static/images/icon_right_arrow_05.png" />
        </view>
      </view>
    </view>
    <view class="fixed-bottom-safe2 flex-col footer-wrap">
      <u-button class="btn-gray" text="退出登录"></u-button>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { NavBar },
    props: {},
    data() {
      return {
        title: '设置',
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/settings/aboutUs/aboutUs' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .container {
      padding-top: 48rpx;
      overflow-y: auto;
      .cell-group {
        margin: 0 32rpx;
        .cell-wrap {
          padding: 32rpx 0;
          border-bottom: 1rpx solid #eeeeee;
          .label {
            font-size: 28rpx;
            font-family: PingFang SC;
            line-height: 28rpx;
            color: #2d2e32;
          }
          .icon-arrow {
            margin-right: 8rpx;
            margin-top: 16rpx;
            width: 20rpx;
            height: 20rpx;
          }
        }
      }
    }
    .footer-wrap {
      padding: 32rpx;
      .btn-gray {
        /deep/ .u-button {
          height: 8rppx;
          border-radius: 72rpx;
          border-color: #cbccd4 !important;
          color: #2d2e32 !important;
          font-weight: 700;
        }
      }
    }
  }
</style>
