<template>
  <view class="FileUploaderCom">
    <view class="label">
      <view class="left">附件</view>
      <view class="right" @click="chooseImage">
        <image class="icon icon-add" src="/static/images/icon_add_02.png" mode="aspectFit" />
        <view class="name">添加附件</view>
      </view>
    </view>
    <view class="value" v-if="files.length">
      <view class="files">
        <view class="item" v-for="(file, index) of files" :key="file.fileName">
          <AnnexesItem :detail="file" isEdit @remove="handleRemove(index)" />
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
import AnnexesItem from '@/components/listItem/AnnexesItem';

export default {
  name:"FileUploader",
  props: {
    value: Array
  },
  components: {
    AnnexesItem
  },
  data() {
    return {
      files: []
    };
  },
  methods: {
    /* 选择图片并上传 */
    chooseImage () {
      uni.chooseImage({
        success: (res) => {
          this.$http.uploadImg({
            url: 'upload/image/private',
            tempFilePaths: res.tempFilePaths
          }).then((data) => {
            this.files.push(...data);
            
            this.$emit('input', this.files)
          })
        }
      })
    },
    
    /* 移除图片*/
    handleRemove (index) {
      this.files.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
.FileUploaderCom {
  .label {
    justify-content: space-between;
  
    &,.right {
      display: flex;
      align-items: center;
    }
  
    .left {
      line-height: 40rpx;
      font-weight: bold;
      color: #333444;
  
      &.dot {
        &::after {
          font-size: 26rpx;
          content: '*';
          color: @primaryRed;
          margin-left: 4rpx;
        }
      }
    }
  
    .right {
      margin-left: 20rpx;
      .icon {
        width: 26rpx;
        height: 26rpx;
      }
      .name {
        line-height: 36rpx;
        font-size: 26rpx;
        color: @primaryGreyColor;
        margin-left: 8rpx;
      }
    }
  }

  .value {
    margin-top: 20rpx;
    
    .files {
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
  }
}
</style>