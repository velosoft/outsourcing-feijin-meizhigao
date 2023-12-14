<template>
  <view class="flex-col container">
    <view class="flex-col">
      <view class="flex-row items-center">
        <image
          class="shrink-0 product-image"
          src="https://dev.ft.velosoft.cn/api/image?token=6577372b740f740012ac401b&name=b23f4993357ee315653debdff8758408.png"
        />
        <view class="flex-col flex-1 product-right ml-12">
          <view class="flex-col">
            <view class="flex-row items-center self-stretch">
              <text class="com-font price-label-text">秒杀价</text>
              <text class="price-symbol price-symbol-text">￥</text>
              <text class="price">200</text>
              <text class="price">.00</text>
            </view>
            <text class="self-start com-font stock-text mt-16"
              >库存：999件</text
            >
          </view>
          <text class="com-font speci-text mt-24"
            >请选择规格 / 已选：3层80长*40宽*170高</text
          >
        </view>
      </view>
      <view class="flex-col spec-select">
        <text class="self-start spec-font spec-text">请选择规格</text>
        <selector
          class="variant-selector service-varaint mt-18"
          :items="timelineItems"
          @change="onChange"
        ></selector>
      </view>
      <view class="flex-row justify-between buy-number">
        <text class="self-start price-symbol buy-number-label">购买数量</text>
        <u-number-box v-model="count"></u-number-box>
      </view>
    </view>
    <u-button
      class="mt-54"
      text="下一步"
      type="primary"
      @click="goNext"
    ></u-button>
  </view>
</template>

<script>
import Selector from "@/components/Selector/Selector";

export default {
  components: { Selector },
  props: {
    productSpec: {
      type: Object,
      default: () => ({
        imgUrl: "",
        price: 100,
        stock: 100,
        tag: ["apple", "orange", "banana"],
      }),
    },
  },
  data() {
    return {
      timelineItems: [
        "3层60长*40宽*170高可加高加层",
        "3层80长*40宽*170高可加高加层",
        "3层80长*40宽*170高可加高加层",
      ],
      count: 2,
    };
  },

  methods: {
    onChange(index) {
      // 事件处理方法
      console.log("outter:" + index);
    },
    goNext() {
      this.$emit("goNext");
    },
  },
};
</script>

<style scoped lang="less">
.container {
  padding: 16rpx 32rpx 40rpx;
  background-color: #ffffff;
  border-radius: 16rpx 16rpx 0rpx 0rpx;
  .product-image {
    width: 180rpx;
    height: 180rpx;
  }
  .product-right {
    margin-right: 24rpx;
    .com-font {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 26rpx;
      color: #6c6c6c;
    }
    .price-label-text {
      color: #bb3e0c;
    }
    .price-symbol-text {
      color: #bb3e0c;
    }
    .price {
      font-size: 32rpx;
      font-family: HarmonyOS Sans SC;
      line-height: 32rpx;
      font-weight: 700;
      color: #bb3e0c;
    }
    .stock-text {
      font-size: 28rpx;
      line-height: 28rpx;
    }
    .speci-text {
      color: #a7a7a7;
      font-size: 24rpx;
      line-height: 24rpx;
    }
  }
  .spec-select {
    margin-top: 56rpx;
    .spec-font {
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 26rpx;
      color: #030305;
    }
    .spec-text {
      font-size: 28rpx;
      line-height: 28rpx;
    }
  }
  .buy-number {
    margin-top: 120rpx;
    .buy-number-label {
      color: #030305;
      font-size: 30rpx;
      line-height: 30rpx;
    }
    .group_6 {
      margin-right: 16rpx;
    }
  }
  .price-symbol {
    font-size: 32rpx;
    font-family: 苹方;
    line-height: 32rpx;
  }
}
</style>
