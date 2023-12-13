<template>
  <view class="footer-con iPhoneX">
    <view class="flex-row footer pos items-center justify-between iPhoneX">
      <view class="flex-row">
        <view class="flex-col">
          <view class="flex-col items-center" @click="onCollect">
            <image
              class="icon"
              src="/static/images/icon_collect_01.png"
              mode="aspectFit"
              v-if="isFav"
            />
            <image
              class="icon"
              src="/static/images/icon_collect_02.png"
              mode="aspectFit"
              v-else
            />
          </view>
          <text class="self-center text">收藏</text>
        </view>
        <view class="flex-col items-center ml-16" @click="addCart">
          <image class="icon" src="/static/images/icon_cart_01.png" />
          <text class="text">购物车</text>
        </view>
      </view>
      <view class="flex-col flex-1 self-center ml-16">
        <view class="flex-row" v-if="hasActivity">
          <u-button
            v-if="activityStarted"
            type="primary"
            text="立即秒杀商品"
            class="flex-1"
            @click="addBuy"
          ></u-button>
          <u-button
            v-else
            disabled
            type="primary"
            text="15天21时00分开始秒杀"
            class="flex-1"
            @click="addBuy"
          ></u-button>
        </view>
        <view class="flex-row" v-else>
          <u-button
            type="primary"
            plain
            text="加入购物车"
            class="flex-1"
            @click="addCart"
          ></u-button>
          <u-button
            type="primary"
            text="预约服务"
            class="flex-1 ml-20"
            @click="handleClick"
          ></u-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    hasActivity: Boolean,
    activityStarted: Boolean,
  },
  data() {
    return {
      isFav: false,
    };
  },

  methods: {
    onCollect() {
      this.isFav = !this.isFav;
    },
    addCart() {},
    addBuy() {},
    handleClick() {
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped lang="less">
.footer-con {
  padding-top: 128rpx;
}
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
  /deep/ .u-button--disabled {
    background-color: #d3d3d3;
    opacity: 1;
    border-width: 0;
  }
}
.pos {
  position: fixed;
  left: 0rpx;
  right: 0rpx;
  bottom: 0rpx;
}
</style>
