<template>
  <view class="flex-col" :class="{ 'sold-out': coupon.status === 'sold-out' }">
    <coupon-card mode="row" class="coupon-card">
      <view class="flex-col items-center shrink-0 coupon-left" slot="part-one">
        <view class="flex-col coupon-amount-wrapper">
          <text class="coupon-amount">{{ coupon.amount }}</text>
          <text class="coupon-amount-currency mt-2 mt-2">元</text>
        </view>
        <text class="coupon-trigger mt-13"
          >满{{ coupon.triggerCondition }}元使用</text
        >
      </view>
      <view
        class="flex-row justify-between flex-1 coupon-right"
        slot="part-two"
      >
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
    </coupon-card>
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
import CouponCard from "./CouponCard.vue";

export default {
  components: { GetCoupon, CouponCard },
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
.coupon-card {
  border-radius: 36rpx;
  overflow: hidden;
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
  margin-left: 100rpx;
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
  background-color: #ffffff;
  border: 1px solid #bb3e0c;
  border-radius: 26rpx;
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
  height: 200rpx;
  width: 200rpx;
  background-color: #fff4ef;
}
.coupon-right {
  padding: 29.52rpx 30rpx 41.42rpx;
  background-color: #fff4ef;
  height: 200rpx;
}
.sold-out {
  .coupon-left {
    background-color: #d2d2d2;
  }
  .coupon-right {
    background-color: #f5f5f5;
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
