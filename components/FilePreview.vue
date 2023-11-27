<template>
  <view class="FilePreview">
    <view class="item" v-for="file of files" :key="file.fileName">
      <AnnexesItem :detail="file" />
    </view>
  </view>
</template>

<script>
import AnnexesItem from '@/components/listItem/AnnexesItem';

export default {
  name:"FilePreview",
  components: { AnnexesItem },
  props: {
    files: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      
    };
  }
}
</script>

<style lang="less">
.FilePreview {
  color: @primaryBlue;
    
  width: 100%;
  
  .item {
    background-color: @primaryGrey;
    border-radius: 12rpx;
    padding: 20rpx 24rpx;
  
    &:not(:last-child) {
      margin-bottom: 20rpx;
    }
  }
}
</style>