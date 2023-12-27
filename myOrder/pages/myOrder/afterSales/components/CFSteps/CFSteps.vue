<template>
    <view class="flex-col justify-start items-center relative group_7">
      <view class="flex-col justify-start items-start relative section_6"><view class="section_5"></view></view>
      <view class="flex-row equal-division group_5">
        <view class="flex-col group_6 group_1">
          <image
            class="self-center image_8"
            src="https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=cc3bf9afff1e070c17fd812a190aa3fd.png"
          />
          <text class="self-start font_2 mt-12">提交申请</text>
        </view>
        <view class="flex-col group_6 equal-division-item">
          <image
            class="self-center image_8"
            src="https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=9e25ba127030a318ed4380724d7f240f.png"
          />
          <text class="self-start font_2 mt-12">平台审核</text>
        </view>
        <view class="flex-col group_6 equal-division-item">
          <image
            class="self-center image_8"
            src="https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=9e25ba127030a318ed4380724d7f240f.png"
          />
          <text class="self-start font_2 mt-12">退回商品</text>
        </view>
        <view class="flex-col group_6 group_2">
          <image
            class="self-center image_8"
            src="https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=aec10ca5cd00c3ca97abb24ee064e419.png"
          />
          <text class="self-start font_2 mt-12">客服发起退款</text>
        </view>
        <view class="flex-col group_6 group_1">
          <image
            class="self-center image_8"
            src="https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=aec10ca5cd00c3ca97abb24ee064e419.png"
          />
          <text class="self-start font_2 mt-12">退款完成</text>
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
    .group_7 {
      padding: 16rpx 0 72rpx;
    }
    .section_6 {
      background-color: #dec9a0;
      box-shadow: 0rpx 4rpx 8rpx 0rpx #e5dfd2;
      border-radius: 8rpx;
      width: 554rpx;
    }
    .section_5 {
      background-image: linear-gradient(180deg, #d8c38b 0%, #b09053 100%);
      border-radius: 8rpx;
      width: 282rpx;
      height: 16rpx;
    }
    .equal-division {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .group_5 {
      padding: 0 8rpx;
    }
    .group_6 {
      flex: 1 1 138rpx;
    }
    .group_1 {
      padding: 8rpx 20rpx;
    }
    .image_8 {
      border-radius: 50%;
      width: 32rpx;
      height: 32rpx;
    }
    .font_2 {
      font-size: 22rpx;
      font-family: 'PingFang SC';
      line-height: 32rpx;
      color: #2d2e32;
    }
    .equal-division-item {
      padding: 8rpx 16rpx;
    }
    .group_2 {
      padding: 8rpx 0;
    }
    </style>