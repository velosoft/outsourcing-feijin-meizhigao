<template>
  <view
    class="flex-col list-item group_5"
    :class="{ 'sold-out': coupon.status === 'sold-out' }"
  >
    <view class="flex-row" v-if="true">
      <view class="flex-col shrink-0 section_4">
        <view class="flex-col group_1">
          <text class="self-start font_1">{{ coupon.amount }}</text>
          <text class="self-end font_4 text_4 mt-2">元</text>
        </view>
        <text class="font_7 mt-13">满{{ coupon.triggerCondition }}元使用</text>
      </view>
      <view class="flex-row justify-between flex-1 section_5">
        <view class="flex-col items-start self-center">
          <text class="font_3 text_3">{{ coupon.title }}</text>
          <text class="font_5 text_5"
            >{{ coupon.validity.start }}-{{ coupon.validity.end }}</text
          >
          <text class="font_8 text_26">{{ coupon.applicableTo }}</text>
        </view>
        <view class="flex-col self-start group_8">
          <view
            class="flex-col justify-start items-center text-wrapper_9"
            @click="onClick"
            v-if="coupon.status === 'pending-receive'"
          >
            <text class="font_11">领取</text>
          </view>
          <view
            class="flex-col justify-start items-center text-wrapper_7"
            v-if="coupon.status === 'pending-use'"
          >
            <text class="font_7">使用</text>
          </view>
          <view
            class="flex-col justify-start items-center text-wrapper_10"
            v-if="coupon.status === 'sold-out'"
          >
            <text class="font_11">已抢光</text>
          </view>
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
      <GetCoupon :coupon="coupon" @close="onClose"></GetCoupon>
    </u-popup>
  </view>
</template>

<script>
import GetCoupon from "./GetCoupon.vue";

export default {
  components: { GetCoupon },
  props: {
    coupon: Object,
  },
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

<style scoped lang="less">
.mt-13 {
  margin-top: 26rpx;
}
.list-item:first-child {
  margin-top: 0;
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
.font_11 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #ffffff;
}
.text-wrapper_9 {
  padding: 12rpx 0;
  background-color: #bb3e0c;
  border-radius: 26rpx;
  width: 102rpx;
}
.text-wrapper_7 {
  padding: 12rpx 0;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=cbb0166fa1aecb0f8ccce3e526626e82.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 102rpx;
}
.text-wrapper_10 {
  padding: 12rpx 0;
  background-color: #d2d2d2;
  border-radius: 26rpx;
  width: 114rpx;
}
.section_4 {
  padding: 8.56rpx 22rpx 55.56rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=519f412acdd4a9a1c65e3760bca04d56.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.section_5 {
  padding: 29.52rpx 30rpx 41.42rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=5c175cb74a6050335669383126a02cd1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.sold-out {
  .section_4 {
    background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=3d0ae07ddedeb2f9abdaecb69b43ae81.png");
  }
  .section_5 {
    background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=fddb80c00eeaf6aa531d291fea09ca6f.png");
  }
  .font_1 {
    color: #ffffff;
  }
  .font_4 {
    color: #ffffff;
  }
  .font_7 {
    color: #ffffff;
  }
}
</style>
