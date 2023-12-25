<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col flex-1 container">
      <image class="self-center logo" src="/personal/static/images/pic_logo.png" />
      <text class="self-start title mt-18">关于我们</text>
      <mp-html class="content mt-18" :content="content"></mp-html>
    </view>
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
          '<view class="flex-col self-stretch mt-18">   <view class="flex-col">     <text class="font">       接受条款及细则通过使用本网站(jy.lancent.cc),       阁下(即"您"或"最终用户")同意我们规定的条款及细则。如果阁下不希望同意所列的条款及细则(即"使用条款及免责声明"),       请不要使用本网站。       <br />       <br />     </text>     <text class="font mt-24">       某某集运保留在认为必要或适宜时, 变更任何使用条款和/或私隐政策声明(在本文中引用而构成本文的一部分)之权利,       而毋须事先通知阁下。       <br />       <br />     </text>   </view>   <text class="font mt-25">     因此, 我们建议阁下时常重阅此包含使用条款和私隐政策声明的重要通知, 以及时了解任何该等变更。     <br />     <br />   </text>   <text class="font mt-25">     如某某集运变更任何使用条款和私隐政策声明, 而阁下仍继续使用我们的网站,     这表示阁下已默认同意于此陈述的使用条款及私隐政策声明。   </text>   <view class="flex-col group_4 mt-25">     <text class="self-start font text_5">1.同意接受条款</text>     <text class="self-stretch font">       欢迎使用某某集运的服务。以下是某某集运服务条款(下称「服务条款」) , 我们按照条款的规定,       为阁下提供服务。我们会不时修订条款而毋需特意通知阁下。     </text>   </view> </view>',
        title: '关于我们',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .container {
      padding: 40rpx 24rpx 40rpx 40rpx;
      overflow-y: auto;
      .logo {
        width: 330rpx;
        height: 118rpx;
      }
      .title {
        color: #333444;
        font-size: 40rpx;
        font-family: 苹方;
        font-weight: 700;
        line-height: 37.32rpx;
      }
    }
    .content {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 48rpx;
      font-weight: 700;
      color: #707070;
    }
  }
</style>
