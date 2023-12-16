<template>
  <view
    class="flex-col"
    :class="{ 'sold-out': coupon.status === 'sold-out' }"
  >
    <view class="flex-row" v-if="true">
      <view class="flex-col shrink-0 coupon-left">
        <view class="flex-col coupon-amount-wrapper">
          <text class="self-start coupon-amount">{{ coupon.amount }}</text>
          <text class="self-end coupon-amount-currency mt-2 mt-2">元</text>
        </view>
        <text class="coupon-trigger mt-13">满{{ coupon.triggerCondition }}元使用</text>
      </view>
      <view class="flex-row justify-between flex-1 coupon-right">
        <view class="flex-col items-start self-center">
          <text class="coupon-title">{{ coupon.title }}</text>
          <text class="coupon-validity mt-10"
            >{{ coupon.validity.start }}-{{ coupon.validity.end }}</text
          >
          <text class="coupon-applicable mt-20">{{ coupon.applicableTo }}</text>
        </view>
        <view class="flex-col self-start coupon-action">
          <view
            class="flex-col justify-start items-center coupon-receive"
            @click="onClick"
            v-if="coupon.status === 'pending-receive'"
          >
            <text class="coupon-receive-text">领取</text>
          </view>
          <view
            class="flex-col justify-start items-center coupon-use"
            v-if="coupon.status === 'pending-use'"
          >
            <text class="coupon-trigger">使用</text>
          </view>
          <view
            class="flex-col justify-start items-center coupon-sold-out"
            v-if="coupon.status === 'sold-out'"
          >
            <text class="coupon-receive-text">已抢光</text>
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
.coupon-amount-wrapper {
  padding: 0 2rpx;
}
.coupon-amount {
  font-size: 84rpx;
  font-family: HarmonyOS Sans SC;
  line-height: 63.68rpx;
  font-weight: 700;
  color: #bb3e0c;
}
.coupon-amount-currency {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  font-weight: 600;
  color: #bb3e0c;
}
.coupon-trigger {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #bb3e0c;
}
.coupon-title {
  font-size: 28rpx;
  font-family: 苹方;
  line-height: 26.3rpx;
  color: #030305;
}
.coupon-validity {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 17.8rpx;
  color: #a7a7a7;
}
.coupon-applicable {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #a7a7a7;
}
.coupon-action {
  margin-right: 4rpx;
  margin-top: 44.48rpx;
}
.coupon-receive-text {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 22.28rpx;
  color: #ffffff;
}
.coupon-receive {
  padding: 12rpx 0;
  background-color: #bb3e0c;
  border-radius: 26rpx;
  width: 102rpx;
}
.coupon-use {
  padding: 12rpx 0;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=cbb0166fa1aecb0f8ccce3e526626e82.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 102rpx;
}
.coupon-sold-out {
  padding: 12rpx 0;
  background-color: #d2d2d2;
  border-radius: 26rpx;
  width: 114rpx;
}
.coupon-left {
  padding: 8.56rpx 22rpx 55.56rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=519f412acdd4a9a1c65e3760bca04d56.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.coupon-right {
  padding: 29.52rpx 30rpx 41.42rpx;
  background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=5c175cb74a6050335669383126a02cd1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200rpx;
}
.sold-out {
  .coupon-left {
    background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=3d0ae07ddedeb2f9abdaecb69b43ae81.png");
  }
  .coupon-right {
    background-image: url("https://dev.ft.velosoft.cn/api/image?token=657c52ccd6bce000114ceb8b&name=fddb80c00eeaf6aa531d291fea09ca6f.png");
  }
  .coupon-amount {
    color: #ffffff;
  }
  .coupon-amount-currency {
    color: #ffffff;
  }
  .coupon-trigger {
    color: #ffffff;
  }
}
</style>
