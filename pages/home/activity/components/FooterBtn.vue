<template>
  <view class="flex-row footer pos items-center justify-between iPhoneX">
    <view class="flex-row">
      <view class="flex-col">
        <view class="flex-col items-center" @click="onCollect">
          <image
            class="icon"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=icon_collect_01.png"
            mode="aspectFit"
            v-if="true"
          />
          <image
            class="icon"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=0079fd007bab581bc70b7296b5560288.png"
            mode="aspectFit"
            v-if="false"
          />
        </view>
        <text class="self-center text">收藏</text>
      </view>
      <view class="flex-col items-center ml-16" @click="addCart">
        <image
          class="icon"
          src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=97f8690ad1dfe8af38980b144f191b6e.png"
        />
        <text class="text">购物车</text>
      </view>
    </view>
    <view class="flex-col flex-1 self-center ml-16">
      <view class="flex-col justify-center items-center button text-wrapper" v-if="true" @click="addBuy">
        <text class="btn-font btn-text-block">立即秒杀商品</text>
      </view>
      <view class="flex-row" v-if="false" @click="addCart">
        <view class="flex-col ustify-center items-center btn-double btn-left">
          <text class="btn-font btn-text-plain">加入购物车</text>
        </view>
        <view
          class="flex-col ustify-center items-center btn-double btn-right ml-8"
          @click="handleClick"
        >
          <text class="btn-font">预约服务</text>
        </view>
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

  methods: {
    handleClick() {
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped lang="less">
.footer {
  padding: 32rpx;
  background-color: #ffffff;
  box-shadow: 0rpx 0rpx 40rpx #0000000f;
  .icon {
    width: 48rpx;
    height: 48rpx;
  }
  .text {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #030305;
  }
  .button {
    align-self: stretch;
    .btn-text-block {
      font-size: 30rpx;
      line-height: 30rpx;
    }
  }
  .text-wrapper {
    background-color: #b09053;
    border-radius: 40rpx;
    height: 80rpx;
  }
  .btn-double {
    flex: 1 1 206rpx;
    .btn-text-plain {
      color: #b09053;
    }
  }
  .btn-left {
    border-radius: 40rpx;
    height: 80rpx;
    border-left: solid 2rpx #b09053;
  }
  .btn-font {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #ffffff;
  }
  .btn-right {
    padding: 16rpx 0 40rpx;
    background-color: #b09053;
    border-radius: 40rpx;
    height: 80rpx;
  }
}
.pos {
  position: fixed;
  left: 0rpx;
  right: 0rpx;
  bottom: 0rpx;
}
</style>
