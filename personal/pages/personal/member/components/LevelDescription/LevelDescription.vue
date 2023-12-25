<template>
  <view class="flex-col wrap">
    <text class="self-start font title">等级说明</text>
    <view class="flex-col self-stretch mt-20 mp-wrapper">
      <mp-html class="content" :content="content"></mp-html>
    </view>
  </view>
</template>

<script>
  import mpHtml from '@/components/MpHtml/MpHtml.vue';
  export default {
    components: { mpHtml },
    props: {
      content: {
        type: String,
        default:
          '<view><text>1、会员等级分类</br>会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生</br></br>2、会员升级条件</br>会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生</br></br>3、会员降级条件</br>会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生</text></view>',
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
    .mp-wrapper {
      padding: 16rpx 36rpx 108rpx;
      background-color: #1e1f20;
      border-radius: 8rpx;
    }

    .content {
      font-size: 24rpx;
      font-family: 'PingFang SC';
      line-height: 48rpx;
      color: #ffffff;
    }
  }
</style>
