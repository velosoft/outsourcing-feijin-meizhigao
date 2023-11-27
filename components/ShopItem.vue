<template>
  <view class="flex-col section_10">
    <view class="flex-col items-center a-i-background-image-wrapper_6">
      <image
        class="a-i-background-image_2"
        src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=69f26c588c4040c0a2ae6b1d6c407546.png"
      />
    </view>
    <text class="self-start font_10 text_29">厨房定制收纳服务</text>
    <view class="flex-row self-stretch equal-division_2">
      <view class="flex-col items-center text-wrapper_1"
        ><text class="CenterPannel-font text_31">新品上市</text></view
      >
      <view class="flex-col items-center text-wrapper_2 ml-5">
        <text class="CenterPannel-font text_31">好评推荐</text>
      </view>
      <view class="flex-col items-center text-wrapper_1 view_1 ml-5">
        <text class="CenterPannel-font text_31">新客优选</text>
      </view>
    </view>
    <view class="flex-row self-stretch relative group_19">
      <text class="self-start CenterPannel-font">秒杀价</text>
      <text class="self-center font_13 text_40">200</text>
      <text class="font_12 text_39 pos_7">￥</text>
      <text class="self-start relative font_14 text_41">.00</text>
      <text class="self-center relative font_15 text_42">100人购买</text>
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
.ml-5 {
  margin-left: 10rpx;
}
.section_10 {
  padding-bottom: 34.48rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=1fe6dd1ef410d3f49fa1ec58d8026298.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 530rpx;
  .a-i-background-image-wrapper_6 {
    align-self: stretch;
    .a-i-background-image_2 {
      width: 330rpx;
      height: 330rpx;
    }
  }
  .font_10 {
    font-size: 30rpx;
    font-family: PingFang SC;
    line-height: 30rpx;
    color: #111111;
  }
  .text_29 {
    margin-left: 11rpx;
    margin-top: 30rpx;
    font-size: 28rpx;
    line-height: 28rpx;
  }
  .equal-division_2 {
    margin-top: 23.26rpx;
    padding: 0 10rpx;
    .text-wrapper_1 {
      flex: 1 1 96rpx;
      padding: 3.44rpx 0 5.96rpx;
      background-color: #fff1ed;
      border-radius: 4rpx;
      height: 28rpx;
    }
    .text-wrapper_2 {
      padding: 3.44rpx 0 5.98rpx;
      flex: 1 1 96rpx;
      background-color: #fff1ed;
      border-radius: 4rpx;
      height: 28rpx;
    }
    .text_31 {
      text-transform: uppercase;
    }
    .view_1 {
      margin-right: 2rpx;
    }
  }
  .group_19 {
    margin-top: 33.74rpx;
    padding-left: 10.78rpx;
    padding-right: 1.16rpx;
    .font_13 {
      font-size: 30rpx;
      font-family: HarmonyOSSans;
      letter-spacing: -1.16rpx;
      line-height: 30rpx;
      font-weight: 700;
    }
    .text_40 {
      margin-left: 14.6rpx;
      color: #bb3e0c;
    }
    .font_12 {
      font-size: 20rpx;
      font-family: PingFang SC;
      line-height: 20rpx;
    }
    .text_39 {
      color: #bb3e0c;
    }
    .pos_7 {
      position: absolute;
      left: 74.22rpx;
      top: 0.8rpx;
    }
    .font_14 {
      font-size: 20rpx;
      font-family: HarmonyOSSansSC;
      line-height: 20rpx;
      font-weight: 700;
    }
    .text_41 {
      margin-left: 1.6rpx;
      margin-top: 1.34rpx;
      color: #bb3e0c;
    }
    .font_15 {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #a7a7a7;
    }
    .text_42 {
      margin-left: 39.86rpx;
    }
  }
  .CenterPannel-font {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #bb3e0c;
  }
}
</style>
