<template>
  <u-upload :fileList="fileList" class="cf-upload">
    <view class="flex-col justify-center items-center upload-slot">
      <image class="upload-icon" :src="icon" />
      <text class="upload-tip mt-12">{{ tip }}</text>
    </view>
  </u-upload>
</template>

<script>
  export default {
    components: {},
    props: {
      icon: {
        type: String,
        default: '/static/images/icon_upload.png',
      },
      tip: {
        type: String,
        default: '上传图片',
      },
    },
    data() {
      return {
        fileList: [{ url: 'https://picsum.photos/90/90' }, { url: 'https://picsum.photos/90/90' }],
      };
    },
    methods: {},
  };
</script>

<style scoped lang="less">
  .upload-slot {
    width: 180rpx;
    height: 180rpx;
    border-radius: 16rpx;
    background-color: #fafafa;
  }
  .upload-icon {
    width: 60rpx;
    height: 60rpx;
  }
  .upload-tip {
    color: #9e9ea0;
    font-size: 24rpx;
    font-family: 'PingFang SC';
    line-height: 34rpx;
  }
</style>
