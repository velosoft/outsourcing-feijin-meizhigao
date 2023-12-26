<template>
  <view class="flex-col component-MTMxKJ29">
    <view class="flex-row justify-center items-center relative group_8">
      <text class="font">确认方案</text>
    </view>
    <view class="flex-row justify-between section_7">
      <text class="font_5 text_13">设计方案</text>
      <view class="flex-row items-center">
        <text class="font_4">查看方案</text>
        <image class="shrink-0 image_10" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
        <text class="font_4 text_14">服务方案</text>
        <image class="shrink-0 image_10" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
      </view>
    </view>
    <view class="flex-col group_9">
      <view class="flex-col group_10">
        <text class="self-start font_5 text_15">温馨提示：</text>
        <text class="self-stretch text_16 mt-6">
          1、确认方案前，请打开方案，查看并核对是否符合您的定制需求，方案一旦确认，方案将不允许再修改
          <br />
          2、方案确认后，需要您确认并支付组件清单，代表您同意根据清单采购定制商品组件
          <br />
          3、支付成功后，系统会为您自动生成组件清单，并创建一张商品订单，商品订单详细信息可前往【我的-我的商品订单】查看
        </text>
      </view>
      <view class="flex-row group_11">
        <image class="image_11" src="/myOrder/static/images/9cc3924ed5649a43c2e2a451962e8c39.png" />
        <text class="font_4 text_17 ml-8">我已阅读并同意该定制商品设计方案</text>
      </view>
      <view class="flex-col justify-start items-center button text-wrapper_2">
        <text class="font_3 text_18">确认方案</text>
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
  .component-MTMxKJ29 {
    padding-left: 32rpx;
    padding-right: 28rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
    .group_8 {
      padding: 40rpx 0 70rpx;
      .font {
        font-size: 36rpx;
        font-family: 'PingFang SC';
        line-height: 50rpx;
        font-weight: 500;
        color: #000000;
      }
      .image_9 {
        width: 22rpx;
        height: 22rpx;
      }
      .pos_2 {
        position: absolute;
        right: 0;
        top: 54.24rpx;
      }
    }
    .section_7 {
      margin-right: 4rpx;
      padding: 14rpx 24rpx;
      background-color: #f8f8f8;
      border-radius: 8rpx;
      .text_13 {
        color: #8c8f95;
      }
      .image_10 {
        margin-left: 10rpx;
        width: 12rpx;
        height: 22rpx;
      }
      .text_14 {
        margin-left: 24rpx;
      }
    }
    .group_9 {
      padding: 62rpx 8rpx 54rpx;
      .group_10 {
        margin-left: 12rpx;
        margin-right: 24rpx;
        .text_15 {
          color: #000000;
        }
        .text_16 {
          color: #6d6d6d;
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 42rpx;
          text-align: justify;
        }
      }
      .group_11 {
        margin-top: 40rpx;
        padding: 0 12rpx;
        .image_11 {
          width: 32rpx;
          height: 32rpx;
        }
        .text_17 {
          font-size: 26rpx;
          line-height: 36rpx;
          font-weight: unset;
        }
      }
      .button {
        margin-right: 4rpx;
        margin-top: 46rpx;
        .font_3 {
          font-size: 28rpx;
          font-family: 'PingFang SC';
          line-height: 40rpx;
          font-weight: 500;
          color: #9e9ea0;
        }
        .text_18 {
          color: #ffffff;
          font-size: 30rpx;
          line-height: 42rpx;
        }
      }
      .text-wrapper_2 {
        padding: 24rpx 0;
        background-color: #000000;
        border-radius: 46rpx;
      }
    }
    .font_5 {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
    }
    .font_4 {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
      font-weight: 500;
      color: #b09053;
    }
  }
</style>
