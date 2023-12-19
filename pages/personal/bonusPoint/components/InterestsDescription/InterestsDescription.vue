<template>
  <view class="flex-col wrap">
    <text class="self-start title text">权益说明</text>
    <MpHtml class="group mt-16" :content="content"></MpHtml>
  </view>
  </template>
  
  <script>
  import MpHtml from '@/components/MpHtml/MpHtml.vue';
  
  export default {
    components: { MpHtml },
    props: {},
    data() {
      return {
        content:
          '<view class="flex-col">   <view class="flex-col group_2">     <text class="self-start title text_5">1、会员等级分类</text>     <text class="self-stretch font_3 text_6 mt-8">       内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器     </text>   </view>   <view class="flex-col group_3 mt-20">     <text class="self-start title text_4">2、会员升级条件</text>     <text class="self-stretch font_3 text_7 mt-8">       内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器     </text>   </view>   <view class="flex-col group_4 mt-20">     <text class="self-start title text_1">3、会员降级条件</text>     <text class="self-stretch font_3 text_8 mt-8">       内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器     </text>   </view>   <view class="flex-col group_5 mt-20">     <text class="self-start title text_10">4、会员升级条件</text>     <text class="self-stretch font_3 text_9 mt-8">       内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器     </text>   </view> </view>',
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .wrap {
    padding: 48rpx 36rpx;
    background: #ffffff;
    .title {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 42rpx;
      font-weight: 500;
      color: #2d2e32;
    }
    .text {
      color: #111111;
      font-size: 30rpx;
    }
    .group {
      font-size: 24rpx;
      font-family: 'PingFang SC';
      line-height: 42rpx;
      color: #8c8f95;
      white-space: pre-line;
    }
  }
  </style>