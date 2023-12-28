<template>
  <view class="flex-col items-stretch wrap relative items-center justify-center" @click="onClick">
    <view class="flex-row group justify-between items-center">
      <view class="flex-col">
        <view class="flex-row items-center">
          <image class="icon-address" src="/cart/static/images/icon_address.png" />
          <text class="line-clamp-one text address-text ml-8">{{
            addressDetail ? addressDetail.address : '请选择您的地址'
          }}</text>
        </view>
        <view class="flex-col ml-23 mt-4" v-if="addressDetail">
          <text class="line-clamp-two address-detial text">{{ addressDetail.detail }}</text>
          <view class="flex-row items-center mt-4">
            <text class="address-detial">{{ addressDetail.name }}</text>
            <view class="text-line"></view>
            <text class="address-detial">{{ addressDetail.phone }}</text>
          </view>
        </view>
      </view>
      <image class="icon-arrow" src="/cart/static/images/icon_right_arrow.png" />
    </view>
    <image class="line mt-14 justify-center" src="/cart/static/images/line_address_header.png" />
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      addressDetail: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {};
    },

    methods: {
      onClick() {
        console.log('click');
        uni.navigateTo({ url: '/personal/pages/personal/address/address/address' });
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    min-height: 140rpx;
    padding: 28rpx 0;
    background-color: #ffffff;
    border-radius: 12rpx;
    .group {
      margin: 0 34rpx;
      .icon-address {
        width: 32rpx;
        height: 32rpx;
      }
      .text {
        width: 500rpx;
      }
      .address-text {
        color: #111111;
        font-size: 32rpx;
        font-family: PingFangSC;
        line-height: 44rpx;
      }
      .ml-23 {
        margin-left: 46rpx;
      }
      .address-detial {
        font-size: 24rpx;
        font-family: PingFangSC;
        color: #6d6d6d;
        line-height: 34rpx;
      }
      .text-line {
        width: 0px;
        height: 24rpx;
        border-right: 2rpx solid #dddddd;
        margin: 0 20rpx;
      }
      .icon-arrow {
        width: 32rpx;
        height: 32rpx;
      }
    }
    .line {
      position: absolute;
      bottom: 0;
      width: 678rpx;
      height: 4rpx;
      margin: 0 10rpx;
    }
  }
</style>
