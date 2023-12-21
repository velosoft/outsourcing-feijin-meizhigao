<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col container"><MpHtml class="html-detail html-margin" :content="content"></MpHtml></view>
  </view>
</template>

<script>
  import MpHtml from '@/components/MpHtml/MpHtml.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { MpHtml, NavBar },
    props: {},
    data() {
      return {
        content:
          '<view>   <image src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6579072b740f740012ac4768/17024307159312203750.png" />   <p>     2015年之前的朋友圈，都是刷屏；朋友圈文案是最近一年大家才开始重视的，可能我是比较早提出“朋友圈文案”和“长文案”这两类不同概念的文案区分，所以，坏消息是，目前应该还没有专业的写朋友圈文案的书。     <br />     <br />   </p>   <p class="font mt-24">     好消息是，你是少数这么早意识到朋友圈文案重要性的。而关于文案的书，其实早就有了很多，文案的本质是相通的。     <br />     <br />   </p>   <p class="font p_6">     文案只是信息的一种呈现形式，多和各种各样的人沟通，多了解患者需求，然后把他们的需求，用朋友圈的内容表达出来，就是最有效的文案。   </p> </view>',
        title: '问题详情',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .container {
      padding: 64rpx 0;
      .html-margin {
        margin: 0 32rpx;
      }
    }
    // 富文本样式
    .html-detail {
      letter-spacing: 0px;
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 48rpx;
      color: #2d2e32;
      white-space: pre-line;
      p {
        letter-spacing: 0px;
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 48rpx;
        color: #2d2e32;
        white-space: pre-line;
      }

      img {
        width: 100%;
      }
    }
  }
</style>
