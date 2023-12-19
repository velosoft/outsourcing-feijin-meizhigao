<template>
  <view class="flex-col" @click="onClick_2">
    <view class="flex-col">
      <view class="flex-row items-center" @click="onClick" v-if="true">
        <view class="flex-col justify-start items-center shrink-0 thumb">
          <image class="image" src="/static/images/mock/personal/pic_product_thumb.png" />
        </view>
        <view class="flex-col flex-1 right-con-bt ml-8 justify-between">
          <text class="line-clamp-two title">收纳整理师中级认证课 （含服务奖励)</text>
          <view class="flex-row items-center group_2 view mt-36 mt-32 mt-34">
            <text class="currency-font currency-text">￥</text>
            <text class="price-font price-text">40</text>
            <text class="decimal-font decimal-text">.00</text>
          </view>
        </view>
      </view>
      <view class="flex-row items-center mt-4" @click="onClick_1" v-if="false">
        <view class="flex-col justify-start items-center shrink-0 relative thumb">
          <image class="thumb" src="../../../../../static/images/pic_product_thumb.png" />
          <view class="flex-col items-start tag tag-pos"><text class="currency-font tag-text">秒杀</text></view>
        </view>
        <view class="flex-col flex-1 right-con-bt ml-8 justify-center">
          <text class="line-clamp-two title">收纳整理师中级认证课 （含服务奖励)</text>
          <view class="flex-row items-center group_2 view_2 mt-36 mt-34">
            <text class="currency-font">秒杀价</text>
            <text class="currency-font">￥</text>
            <text class="price-font price-font-red">40</text>
            <text class="decimal-font decimal-text-red">.00</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col footer mt-12 justify-center" v-if="false">
      <view class="text-wrap">
        <text class="light-font code-label">核销码：123456</text>
        <text class="light-font status-text">(待核销)</text>
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
      onClick() {
        uni.navigateTo({ url: '/pages/personal/course/courseDetial/courseDetial' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/course/courseDetial/courseDetial' });
      },
      onClick_2() {
        uni.navigateTo({ url: '/pages/personal/course/courseDetial/courseDetial' });
      },
    },
  };
</script>

<style scoped lang="less">
  .thumb {
    width: 144rpx;
    height: 144rpx;
    .image {
      width: 100%;
      height: 100%;
    }
    .tag {
      padding: 9.62rpx 0;
      background-color: #000000;
      border-radius: 11.75rpx 0rpx 11.75rpx 0rpx;
      width: 64.1rpx;
      .tag-text {
        margin-left: 12.82rpx;
        color: #ffffff;
        font-weight: unset;
      }
    }
    .tag-pos {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .right-con-bt {
    padding: 4.27rpx 0;
    .title {
      font-size: 29.91rpx;
      font-family: 苹方;
      line-height: 39.53rpx;
      font-weight: 700;
      color: #2d2e32;
    }
    .group_2 {
      margin-bottom: -25.64rpx;
      .currency-text {
        color: #030305;
      }
      .price-font {
        font-size: 34.19rpx;
        font-family: HarmonyOS Sans;
        line-height: 34.19rpx;
        font-weight: 700;
      }
      .price-text {
        color: #030305;
      }
      .decimal-font {
        font-size: 21.37rpx;
        font-family: HarmonyOS Sans;
        line-height: 21.37rpx;
        font-weight: 700;
      }
      .decimal-text {
        color: #030305;
      }
      .price-font-red {
        color: #bb3e0c;
      }
      .decimal-text-red {
        margin-left: 4.27rpx;
        color: #bb3e0c;
      }
    }
    .view {
      padding-bottom: 25.64rpx;
      height: 48rpx;
    }
    .view_2 {
      padding-bottom: 17.09rpx;
      height: 48rpx;
    }
  }
  .thumb {
    width: 144rpx;
    height: 144rpx;
    .image {
      width: 100%;
      height: 100%;
    }
    .tag {
      padding: 9.62rpx 0;
      background-color: #000000;
      border-radius: 11.75rpx 0rpx 11.75rpx 0rpx;
      width: 64.1rpx;
      .tag-text {
        margin-left: 12.82rpx;
        color: #ffffff;
        font-weight: unset;
      }
    }
    .tag-pos {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .currency-font {
    font-size: 21.37rpx;
    font-family: 苹方;
    line-height: 21.37rpx;
    font-weight: 700;
    color: #bb3e0c;
  }
  .currency-font {
    font-size: 21.37rpx;
    font-family: 苹方;
    line-height: 21.37rpx;
    font-weight: 700;
    color: #bb3e0c;
  }
  .currency-font {
    font-size: 21.37rpx;
    font-family: 苹方;
    line-height: 21.37rpx;
    font-weight: 700;
    color: #bb3e0c;
  }
  .footer {
    padding: 17.09rpx 0;
    background-color: #f1f1f1;
    border-radius: 8.55rpx;
    .text-wrap {
      margin: 0 8.55rpx;
      line-height: 23.95rpx;
      .light-font {
        font-size: 25.64rpx;
        font-family: 苹方;
        line-height: 25.64rpx;
      }
      .code-label {
        color: #000000;
      }
      .status-text {
        color: #b09053;
      }
    }
  }
</style>