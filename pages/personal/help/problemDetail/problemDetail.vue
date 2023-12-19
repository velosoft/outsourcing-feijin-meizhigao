<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col container"><MpHtml class="group_4"></MpHtml></view>
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
      .group_4 {
        margin: 0 32rpx;
      }
    }
  }
</style>