<template>
  <view class="flex-col component-iyRfwGZK">
    <view class="flex-col justify-start self-stretch group_1">
      <view class="flex-col ai-background-image_5">
        <view class="flex-col group_2">
          <view class="flex-col section_2">
            <view class="flex-col self-stretch">
              <text class="self-stretch font text_2">收纳服务优惠券</text>
              <text class="self-start text_3 mt-3">10</text>
              <text class="self-end text_5 mt-3">元</text>
            </view>
            <text class="self-center font_3 text_6 mt-12">满100元使用</text>
          </view>
          <view class="flex-col items-center section_6">
            <text class="font_3 text_8">适用部分(商品/服务/课程)</text>
            <text class="text_9 mt-11">2023.06.01-2023.07.01</text>
          </view>
        </view>
        <view
          class="flex-col justify-start items-center button text-wrapper"
          @click="onGet"
          ><text class="text_10">立即领取</text></view
        >
      </view>
    </view>
    <image
      class="self-center ai-outflow mt-16"
      src="/static/images/17019990314842063376.png"
      @click="onClose"
    />
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
    onGet() {
      this.onClose();
    },
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="css">
.mt-3 {
  margin-top: 6rpx;
}
.mt-11 {
  margin-top: 22rpx;
}
.component-iyRfwGZK {
  width: 600rpx;
}
.font {
  font-size: 32rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #ffffff;
}
.font_3 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #ffffff;
}
.group_1 {
  padding: 16rpx 0;
}
.ai-background-image_5 {
  margin: 0 16rpx;
  padding: 0 94rpx 60rpx;
  background-image: linear-gradient(180deg, #fff1ed 0%, #ffffff 25.4%);
  border-radius: 20rpx;
}
.group_2 {
  padding: 59rpx 0 40.02rpx;
}
.section_2 {
  padding: 17.88rpx 74rpx 28.56rpx 78rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=9f1e149893fda288f133f2ad4b46e820.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.text_2 {
  color: #bb3e0c;
  line-height: 30.04rpx;
}
.text_3 {
  margin-left: 44rpx;
  color: #bb3e0c;
  font-size: 84rpx;
  font-family: HarmonyOS Sans SC;
  font-weight: 700;
  line-height: 63.68rpx;
}
.text_5 {
  margin-right: 50rpx;
  color: #bb3e0c;
  font-size: 24rpx;
  font-family: 苹方;
  font-weight: 600;
  line-height: 21.18rpx;
}
.text_6 {
  color: #bb3e0c;
}
.section_6 {
  padding: 30.18rpx 0 48.02rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=6bef2920efee5c07e2122bde1454f469.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.text_8 {
  color: #a7a7a7;
  line-height: 22.42rpx;
}
.text_9 {
  color: #a7a7a7;
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 17.8rpx;
}
.button {
  margin: 0 6rpx;
}
.text-wrapper {
  padding: 17.52rpx 0 36.56rpx;
  background-color: #030305;
  border-radius: 40rpx;
  width: 368rpx;
}
.text_10 {
  color: #ffffff;
  font-size: 28rpx;
  font-family: 苹方;
  line-height: 25.92rpx;
}
.ai-outflow {
  width: 60rpx;
  height: 60rpx;
}
</style>
