<template>
  <view class="flex-col wrap">
    <text class="self-start title title-text">消费值说明</text>
    <view class="flex-col mt-16">
      <view class="flex-col list-wrap">
        <view class="flex-col wrap-top">
          <text class="self-start title title-height">1、消费值来源</text>
          <view class="flex-col justify-start self-stretch mt-8">
            <mp-html class="consumptiom-html" :content="sourse"></mp-html>
          </view>
        </view>
        <view class="flex-col wrap-top mt-28">
          <text class="self-start title title-height">2、消费值晋升</text>
          <view class="flex-col justify-start self-stretch mt-8">
            <mp-html class="consumptiom-html" :content="promition"></mp-html>
          </view>
        </view>
        <view class="flex-col wrap-top mt-28">
          <text class="self-start title title-height">3、消费值条件</text>
          <view class="flex-col justify-start self-stretch mt-8">
            <mp-html class="consumptiom-html" :content="condition"></mp-html>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import MpHtml from '@/components/MpHtml/MpHtml.vue';

  export default {
    components: { MpHtml },
    props: { content: { type: String, default: `` } },
    data() {
      return {
        sourse:
          '<text>内容由后台富文本编辑器生成内容由后台富文备份内容由后台富文本编辑器生成内容由后台富文内容由后台富文本编辑器生成内容由后台富文</text>',
        promition:
          '<text>内容由后台富文本编辑器生成内容由后台富文备份内容由后台富文本编辑器生成内容由后台富文内容由后台富文本编辑器生成内容由后台富文</text>',
        condition:
          '<text>内容由后台富文本编辑器生成内容由后台富文备份内容由后台富文本编辑器生成内容由后台富文内容由后台富文本编辑器生成内容由后台富文</text>',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 48rpx 24rpx;
    background: #ffffff;
    .title {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 42rpx;
      font-weight: 500;
      color: #2d2e32;
    }
    .title-text {
      color: #111111;
      font-size: 30rpx;
    }
    .list-wrap {
      padding: 0 12rpx;
      .wrap-top {
        margin-right: 8rpx;
        .title-height {
          line-height: 40rpx;
        }
      }
    }
    .consumptiom-html {
      text-align: left;
      font-size: 24rpx;
      font-family: 'PingFang SC';
      line-height: 42rpx;
      color: #8c8f95;
    }
  }
</style>
