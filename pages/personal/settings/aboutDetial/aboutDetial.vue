<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 container">
      <image class="self-center logo" src="../../../../static/images/4e3b001576fd8df7334c4958a4a2d6ec.png" />
      <text class="self-start title mt-18">关于我们</text>
      <MpHtml class="group_1 mt-18" :content="content"></MpHtml>
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
        title: '关于我们',
        content: '',
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
      padding: 40rpx 24.8rpx 208.02rpx 38rpx;
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
      .group_1 {
        align-self: stretch;
      }
    }
  }
</style>