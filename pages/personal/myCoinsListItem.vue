<template>
  <view class="flex-row justify-start items-center relative group_13">
    <view class="flex-col flex-1">
      <text class="self-start font_4">购买商品抵扣</text>
      <view class="flex-col justify-start self-start mt-11"
        ><text class="font_7">订单编号：2020390494049404</text></view
      >
      <view class="flex-row self-stretch relative mt-11">
        <text class="font_7">2023-09-15</text>
        <text class="font_7 ml-3">14:20:12</text>
      </view>
    </view>
    <view class="flex-col items-start pos">
      <text class="relative font text_2" v-if="$props.type == '0'">-100</text>
      <view class="flex-col items-center" v-if="$props.type == '1'">
        <text class="font text_3">+100</text>
        <text class="text_4 mt-13">未到账</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: { type: { type: String, default: `0` } },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-11 {
  margin-top: 22rpx;
}
.ml-3 {
  margin-left: 6rpx;
}
.mt-13 {
  margin-top: 26rpx;
}
.group_13 {
  padding: 50rpx 0;
  .font_4 {
    color: #6d6d6d;
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
  }
  .font_7 {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #8c8f95;
  }
  .pos {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    .font {
      font-size: 28rpx;
      font-family: HarmonyOSSans;
      font-weight: 700;
      color: #000000;
    }
    .text_2 {
      line-height: 28rpx;
    }
    .text_3 {
      line-height: 21.22rpx;
    }
    .text_4 {
      color: #6d6d6d;
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 22.06rpx;
    }
  }
}
</style>
