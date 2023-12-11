<template>
  <view class="flex-col section_5">
    <view class="flex-col">
      <view class="flex-row justify-between">
        <text class="text_13">厨房收纳服务厨房收纳服务</text>
        <view @click="onShare">
          <image
          class="image_9"
          src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=f04660c6e65cce9370629acd3abd0780.png"
        />
        </view>
      </view>
      <view class="flex-row mt-9">
        <text class="font_14 text_2">烹饪也能从容优雅</text>
        <text class="font_14 text_3 ml-4">享受美好食光</text>
      </view>
      <view class="flex-row justify-between items-end group_11 mt-9">
        <view class="flex-row items-baseline self-stretch group_2">
          <text class="text_16">200</text>
          <text class="text_17">￥</text>
          <text class="text_18">.00</text>
          <text class="font_14 text_19">￥54.00</text>
        </view>
        <text class="text_20">100人预约</text>
      </view>
    </view>
    <view class="flex-col mt-25">
      <view class="flex-row items-center self-stretch">
        <view class="flex-row flex-1">
          <u-tag
            class="tag-coupon ml-4"
            text="满329包邮"
            v-for="(item, index) in items"
            :key="index"
          ></u-tag>
        </view>
        <view class="flex-row button ml-19">
          <text class="self-center font_2">领取</text>
          <image
            class="shrink-0 self-start image_10 ml-3"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=345884eb6bab7b6ba7d8730e43f83204.png"
          />
        </view>
      </view>
      <view class="flex-row equal-division mt-12">
        <u-tag
          class="tag-feature ml-4"
          text="新客优选"
          v-for="(item, index) in items_1"
          :key="index"
        ></u-tag>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      items: [null, null, null],
      items_1: [null, null, null],
      id: 0,
    };
  },

  methods: {
    onShare(){
      this.$emit('onShare', this.id)
    }
  },
};
</script>

<style lang="less" scoped>
.mt-9 {
  margin-top: 18rpx;
}
.mt-25 {
  margin-top: 50rpx;
}
.ml-19 {
  margin-left: 38rpx;
}
.ml-3 {
  margin-left: 6rpx;
}
.section_5 {
  padding: 26.24rpx 22rpx 32rpx 28rpx;
  background-color: #ffffff;
  border-radius: 12rpx;
  .text_13 {
    color: #030305;
    font-size: 36rpx;
    font-family: 苹方;
    font-weight: 600;
    line-height: 36rpx;
  }
  .image_9 {
    width: 36rpx;
    height: 36rpx;
  }
  .font_14 {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #a7a7a7;
  }
  .text_2 {
    font-size: 24rpx;
    line-height: 24rpx;
  }
  .text_3 {
    font-size: 24rpx;
    line-height: 24rpx;
  }
  .group_11 {
    padding-left: 6rpx;
    .group_2 {
      margin-bottom: 3.78rpx;
      .text_16 {
        margin-left: 26rpx;
        color: #030305;
        font-size: 48rpx;
        font-family: HarmonyOS_Sans_Bold;
        line-height: 48rpx;
        letter-spacing: -1.86rpx;
      }
      .text_17 {
        margin-left: -102rpx;
        color: #030305;
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
      }
      .text_18 {
        margin-left: 80rpx;
        color: #030305;
        font-size: 28rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 28rpx;
      }
      .text_19 {
        margin-left: 17.38rpx;
        font-size: 24rpx;
        line-height: 24rpx;
        text-decoration: line-through;
      }
    }
    .text_20 {
      color: #a7a7a7;
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 26rpx;
    }
  }
  .button {
    flex-shrink: 0;
    margin-right: 6rpx;
    .font_2 {
      font-size: 22rpx;
      font-family: 苹方;
      line-height: 22rpx;
      color: #bb3e0c;
    }
    .image_10 {
      margin-top: 9.52rpx;
      width: 16rpx;
      height: 16rpx;
    }
  }
  .equal-division {
    align-self: flex-start;
    .equal-division-item {
      flex: 1 1 120rpx;
    }
  }
}
</style>
