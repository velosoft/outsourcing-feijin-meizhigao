<template>
  <view class="flex-col wrap">
    <text class="self-start font title">等级说明</text>
    <view class="flex-col self-stretch mt-20">
      <view class="flex-col member-cell">
        <text class="self-start subtitle subtext">1、会员等级分类</text>
        <text class="self-stretch content content-text mt-8">
          会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生
        </text>
      </view>
      <view class="flex-col member-cell mt-18">
        <text class="self-start subtitle subtext">2、会员升级条件</text>
        <text class="self-stretch content mt-8 content-text">
          会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生
        </text>
      </view>
      <view class="flex-col member-cell mt-18">
        <text class="self-start subtitle subtext">3、会员降级条件</text>
        <text class="self-stretch content mt-8 content-text">
          会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生
        </text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 40rpx 32rpx 64rpx 48rpx;
    background-color: #111111;
    border-left: solid 2rpx #2d2e32;
    border-right: solid 2rpx #2d2e32;
    border-top: solid 2rpx #2d2e32;
    border-bottom: solid 2rpx #2d2e32;
    .font {
      font-size: 36rpx;
      font-family: 'PingFang SC';
      line-height: 48rpx;
    }
    .title {
      color: #ffffff;
      font-weight: 600;
      line-height: 50rpx;
    }
    .member-cell {
      margin-right: 4rpx;
      padding: 16rpx 36rpx 32rpx;
      background-color: #1e1f20;
      border-radius: 8rpx;
      .subtitle {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        font-weight: 500;
        color: #ffffff;
      }
      .subtext {
        font-size: 26rpx;
        line-height: 36rpx;
      }
      .content {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 48rpx;
        color: #ffffff;
      }
      .content-text {
        text-align: left;
      }
    }
  }
</style>