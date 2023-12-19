<template>
  <view class="flex-col order-proudcts">
    <text class="self-start title">商品信息</text>
    <view class="flex-col self-stretch mt-16">
      <view class="flex-row list-item mt-12" v-for="(item, index) in products" :key="index">
        <view class="flex-col justify-start items-center shrink-0 relative image-wrapper section">
          <image class="shrink-0 image" :src="item.productImageURL" />
          <view class="flex-col justify-start items-center text-wrapper pos" v-if="item.isSeckill">
            <text class="seckill-font seckill-text">秒杀</text>
          </view>
        </view>
        <view class="flex-col flex-1 summary ml-8">
          <text class="name-font name-text">{{item.productName}}</text>
          <view class="flex-row justify-between mt-8">
            <text class="desc">{{item.productDescription}}</text>
            <text class="count">{{`x${item.productQuantity}`}}</text>
          </view>
          <view class="flex-col mt-8">
            <view class="flex-row items-baseline" v-if="!item.isSeckill">
              <text class="font_7">￥</text>
              <text class="font_6">200</text>
              <text class="font_8 text_1">.00</text>
            </view>
            <view class="flex-row items-center" v-if="item.isSeckill">
              <text class="seckill-font text_6">秒杀价</text>
              <text class="text_7">￥</text>
              <text class="text_5">200</text>
              <text class="text_8">.00</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      products: {
        type: Array,
        default: () => [
          {
            productName: '全屋整理收纳服务（单次）',
            productDescription: '鎏金岁月三层长45宽30高75',
            productPrice: 200,
            productQuantity: 2,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: false,
            afterSaleStatus: '正常',
            productStatus: '正常',
          },
          {
            productName: '示例产品2',
            productDescription: '示例产品2说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '售后成功',
            productStatus: '正常',
          },
          {
            productName: '示例产品2.1',
            productDescription: '示例产品2.1说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '正常',
            productStatus: '补购商品',
          },
          {
            productName: '示例产品2.2',
            productDescription: '示例产品2.2说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '正常',
            productStatus: '已退回',
          },
          {
            productName: '示例产品2.3',
            productDescription: '示例产品2.3说明文本',
            productPrice: 50,
            productQuantity: 1,
            productImageURL:
              'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
            isSeckill: true,
            afterSaleStatus: '正常',
            productStatus: '正常',
          },
        ],
      },
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .order-proudcts {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .title {
    color: #2d2e32;
    font-size: 30rpx;
    font-weight: 500;
    line-height: 42rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .image-wrapper {
    margin-top: 8rpx;
  }
  .section {
    overflow: hidden;
    border-radius: 16rpx;
    background-size: 100%, 100%;
    width: 180rpx;
    height: 180rpx;
  }
  .image {
    width: 180rpx;
    height: 180rpx;
  }
  .text-wrapper {
    background-color: #bb3e0c;
    border-radius: 16rpx 0rpx;
    width: 96rpx;
  }
  .pos {
    position: absolute;
    left: 0;
    top: 0;
  }
  .seckill-font {
    font-size: 26rpx;
    font-family: 'PingFang SC';
    line-height: 36rpx;
  }
  .seckill-text {
    color: #ffffff;
    font-size: 24rpx;
    line-height: 34rpx;
  }
  .summary {
    margin-bottom: 8rpx;
  }
  .name-font {
    font-size: 26rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .name-text {
    font-size: 28rpx;
    text-align: left;
  }
  .desc {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #8c8f95;
  }
  .count {
    font-size: 26rpx;
    line-height: 36rpx;
    color: #828385;
  }
  .font_7 {
    font-size: 20rpx;
    line-height: 28rpx;
    font-weight: 500;
    color: #111111;
  }
  .font_6 {
    font-size: 32rpx;
    line-height: 36rpx;
    color: #111111;
  }
  .font_8 {
    font-size: 20rpx;
    line-height: 24rpx;
    color: #111111;
  }
  .text_1 {
    margin-left: 4rpx;
  }
  .text_6 {
    color: #bb3e0c;
    font-size: 24rpx;
    font-weight: 500;
    line-height: 34rpx;
  }
  .text_7 {
    color: #bb3e0c;
    font-size: 20rpx;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 28rpx;
  }
  .text_5 {
    color: #bb3e0c;
    font-size: 32rpx;
    font-family: '.AppleSystemUIFont';
    line-height: 36rpx;
  }
  .text_8 {
    margin-left: 4rpx;
    color: #bb3e0c;
    font-size: 20rpx;
    font-family: '.AppleSystemUIFont';
    line-height: 24rpx;
  }
</style>
