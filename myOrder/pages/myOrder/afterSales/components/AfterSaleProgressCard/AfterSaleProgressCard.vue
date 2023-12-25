<template>
  <view class="flex-col justify-start items-center relative section_4">
    <view class="flex-col justify-start items-start relative section_6"><view class="section_5"></view></view>
    <view class="flex-row equal-division">
      <view class="flex-col items-center group_4 equal-division-item">
        <image
          class="image_8"
          src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=cc3bf9afff1e070c17fd812a190aa3fd.png"
        />
        <text class="font mt-12">提交申请</text>
      </view>
      <view class="flex-col items-center group_4 equal-division-item">
        <image
          class="image_8"
          src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=9e25ba127030a318ed4380724d7f240f.png"
        />
        <text class="font mt-12">审核通过</text>
      </view>
      <view class="flex-col items-center group_4 equal-division-item">
        <image
          class="image_8"
          src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=aec10ca5cd00c3ca97abb24ee064e419.png"
        />
        <text class="font mt-12">客服介入</text>
      </view>
      <view class="flex-col items-center group_4 group_5">
        <image
          class="shrink-0 image_8"
          src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=aec10ca5cd00c3ca97abb24ee064e419.png"
        />
        <text class="font text_4">客服登记结果</text>
        <text class="font">售后成功</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .section_4 {
    padding: 40rpx 0 112rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .section_6 {
      background-color: #dec9a0;
      box-shadow: 0rpx 4rpx 8rpx 0rpx #e5dfd2;
      border-radius: 8rpx;
      width: 532rpx;
      .section_5 {
        background-image: linear-gradient(180deg, #d8c38b 0%, #b09053 100%);
        border-radius: 8rpx;
        width: 194rpx;
        height: 16rpx;
      }
    }
    .equal-division {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      .group_4 {
        flex: 1 1 175.5rpx;
        .image_8 {
          border-radius: 50%;
          width: 32rpx;
          height: 32rpx;
        }
        .font {
          font-size: 24rpx;
          line-height: 34rpx;
          color: #2d2e32;
        }
        .text_4 {
          margin-top: 24rpx;
        }
      }
      .equal-division-item {
        padding: 8rpx 0 24rpx;
      }
      .group_5 {
        padding-top: 12rpx;
      }
    }
  }
</style>
