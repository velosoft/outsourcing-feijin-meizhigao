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
        content: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 48rpx 36rpx;
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
      align-self: stretch;
    }
  }
</style>