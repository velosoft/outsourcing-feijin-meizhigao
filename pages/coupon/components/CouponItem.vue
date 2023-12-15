<template>
  <view class="flex-col list-item group_5">
    <view class="flex-row" v-if="true">
      <view class="flex-col shrink-0 section_4">
        <view class="flex-col group_1">
          <text class="self-start font_1">10</text>
          <text class="self-end font_4 text_4 mt-2">元</text>
        </view>
        <text class="font_7 mt-13">满100元使用</text>
      </view>
      <view class="flex-row justify-between flex-1 section_5">
        <view class="flex-col items-start self-center">
          <text class="font_3 text_3">定制商品满减券</text>
          <text class="font_5 text_5">2023.06.01-2023.07.01</text>
          <text class="font_8 text_26">适用全部(商品/服务/课程)</text>
        </view>
        <view class="flex-col self-start group_8">
          <view
            class="flex-col justify-start items-center button_7 text-wrapper_9"
            @click="onClick"
            v-if="true"
          >
            <text class="font_11 text_6">领取</text>
          </view>
          <view
            class="flex-col justify-start items-center button_7 text-wrapper_7"
            v-if="false"
          >
            <text class="font_7">使用</text>
          </view>
          <view
            class="flex-col justify-start items-center text-wrapper_1 text-wrapper_10"
            v-if="false"
          >
            <text class="font_11 text_1">已抢光</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-row" v-if="false">
      <view class="flex-col shrink-0 section_10">
        <view class="flex-col group_1">
          <text class="self-start font_2">10</text>
          <text class="self-end font_6 text_21 mt-2">元</text>
        </view>
        <text class="font_11 mt-12">满100元使用</text>
      </view>
      <view class="flex-row justify-between flex-1 section_11">
        <view class="flex-col items-start self-center">
          <text class="font_3">收纳服务满减券</text>
          <text class="font_5 text_20">2023.06.01-2023.07.01</text>
          <text class="font_8 text_19">部分服务可用</text>
        </view>
        <view
          class="flex-col justify-start items-center button_4 text-wrapper_8"
        >
          <text class="font_11 text_18">已抢光</text>
        </view>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="center"
      style="width: 300px"
      bgColor="transparent"
    >
      <GetCoupon @close="onClose"></GetCoupon>
    </u-popup>
  </view>
</template>

<script>
import GetCoupon from "./GetCoupon.vue";

export default {
  components: { GetCoupon },
  props: {},
  data() {
    return {
      popupVisible: false,
    };
  },

  methods: {
    onClick() {
      this.popupVisible = true;
    },
    onClose() {
      this.popupVisible = false;
    },
  },
};
</script>

<style scoped lang="css">
.mt-13 {
  margin-top: 26rpx;
}
.list-item:first-child {
  margin-top: 0;
}
.section_4 {
  padding: 8.56rpx 22rpx 55.56rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=519f412acdd4a9a1c65e3760bca04d56.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.group_1 {
  padding: 0 2rpx;
}
.font_1 {
  font-size: 84rpx;
  font-family: HarmonyOS Sans SC;
  line-height: 63.68rpx;
  font-weight: 700;
  color: #bb3e0c;
}
.font_4 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  font-weight: 600;
  color: #bb3e0c;
}
.text_4 {
  margin-right: 4rpx;
  line-height: 21.18rpx;
}
.font_7 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #bb3e0c;
}
.section_5 {
  padding: 29.52rpx 30rpx 41.42rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=5c175cb74a6050335669383126a02cd1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.font_3 {
  font-size: 28rpx;
  font-family: 苹方;
  line-height: 26.3rpx;
  color: #030305;
}
.text_3 {
  line-height: 26.16rpx;
}
.font_5 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 17.8rpx;
  color: #a7a7a7;
}
.text_5 {
  margin-top: 22.48rpx;
}
.font_8 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #a7a7a7;
}
.text_26 {
  margin-top: 40.2rpx;
  line-height: 22.42rpx;
}
.group_8 {
  margin-right: 4rpx;
  margin-top: 44.48rpx;
}
.button_7 {
  align-self: stretch;
}
.text-wrapper_9 {
  padding: 8.16rpx 0 21.96rpx;
  background-color: #bb3e0c;
  border-radius: 26rpx;
  width: 102rpx;
}
.font_11 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #ffffff;
}
.text_6 {
  line-height: 21.9rpx;
}
.text-wrapper_7 {
  padding: 8.16rpx 0 21.56rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=cbb0166fa1aecb0f8ccce3e526626e82.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 102rpx;
}
.text-wrapper_1 {
  align-self: flex-start;
}
.text-wrapper_10 {
  padding: 8.16rpx 0 21.94rpx;
  background-color: #d2d2d2;
  border-radius: 26rpx;
  width: 114rpx;
}
.text_1 {
  line-height: 21.9rpx;
}
.section_10 {
  padding: 10.56rpx 22rpx 55.56rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=3d0ae07ddedeb2f9abdaecb69b43ae81.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.font_2 {
  font-size: 84rpx;
  font-family: HarmonyOS Sans SC;
  line-height: 63.68rpx;
  font-weight: 700;
  color: #ffffff;
}
.font_6 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  font-weight: 600;
  color: #ffffff;
}
.text_21 {
  margin-right: 4rpx;
  line-height: 21.18rpx;
}
.section_11 {
  padding: 29.52rpx 28rpx 41.62rpx 30rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=fddb80c00eeaf6aa531d291fea09ca6f.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.text_20 {
  margin-top: 24.34rpx;
}
.text_19 {
  margin-top: 38.2rpx;
  line-height: 22.22rpx;
}
.button_4 {
  align-self: flex-start;
  margin-top: 44.48rpx;
}
.text-wrapper_8 {
  padding: 8.16rpx 0 21.94rpx;
  background-color: #d2d2d2;
  border-radius: 26rpx;
  width: 114rpx;
  height: 52rpx;
}
.text_18 {
  line-height: 21.9rpx;
}
</style>
