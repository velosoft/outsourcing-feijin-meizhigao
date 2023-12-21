<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col container"><MpHtml class="group_1"></MpHtml></view>
  </view>
</template>

<script>
  import MpHtml from '../../../../pages/components/MpHtml/MpHtml.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { MpHtml, NavBar },
    props: {},
    data() {
      return {
        title: '隐私协议',
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
      padding: 43.6rpx 0 292.02rpx;
      overflow-y: auto;
      .group_1 {
        margin-left: 38rpx;
        margin-right: 24.8rpx;
      }
    }
  }
</style>