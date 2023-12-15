<template>
  <view class="flex-col container">
    <view class="flex-col">
      <view class="flex-row items-center">
        <image
          class="shrink-0 product-image"
          src="/static/mock/popup_product_image.png"
        />
        <view class="flex-col flex-1 product-right ml-12">
          <view class="flex-col">
            <view
              :class="
                'flex-row items-center self-stretch' +
                (productSpec.isActivity ? ' activity-color' : 'normal-color')
              "
            >
              <text
                v-if="productSpec.isActivity"
                class="com-font activity-color"
                >秒杀价</text
              >
              <text class="price-symbol">￥</text>
              <text class="price">{{ productSpec.price }}</text>
              <text class="price">.{{ productSpec.decimalPrice }}</text>
            </view>
            <text class="self-start com-font stock-text mt-16"
              >库存：{{ productSpec.invertory }}件</text
            >
          </view>
          <text class="com-font speci-text mt-24">{{ lastChoiceText }}</text>
        </view>
      </view>

      <scroll-view>
        <view
          class="flex-col spec-select"
          v-for="(item, idx) of productSpec.specs"
          :key="idx"
        >
          <text class="self-start spec-font spec-text">{{ item.title }}</text>
          <selector
            class="variant-selector service-varaint mt-18"
            :items="item.options"
            @change="(v) => onChange(idx, v)"
          ></selector>
        </view>
        <view class="flex-row justify-between buy-number">
          <text class="self-start price-symbol buy-number-label">购买数量</text>
          <u-number-box v-model="count"></u-number-box>
        </view>
        <view
          class="flex-col spec-select"
          v-for="(item, idx) of productSpec.specialSpecs"
          :key="idx"
        >
          <text class="self-start spec-font spec-text">{{ item.title }}</text>
          <selector
            class="variant-selector service-varaint mt-18"
            :items="item.options"
            @change="(v) => onSpecialChange(idx, v)"
          ></selector>
        </view>
      </scroll-view>
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
        decimalPrice: 100,
        invertory: 999,
        isActivity: true,
        specs: [
          // {
          //   title: "请选择规格",
          //   options: [
          //     "3层60长*40宽*170高可加高加层",
          //     "3层80长*40宽*170高可加高加层",
          //     "3层80长*40宽*170高可加高加层",
          //   ],
          // },
          // {
          //   title: "尺寸",
          //   options: ["小号", "中号", "大号", "特大"],
          // },
          {
            title: "类型",
            options: [
              "按延米核算（元/m)",
              "按面积核算（元/m)",
              "按小时核算（元/人/h)",
            ],
          },
          {
            title: "颜色",
            options: ["黄色", "红色", "黑色", "蓝色"],
          },
        ],
        specialSpecs: [
          // {
          //   title: "附加服务",
          //   options: ["安装服务  ￥88.00", "安装服务  ￥99.00"],
          // },
        ],
      }),
    },
  },
  data() {
    return {
      count: 2,
      userChoice: {},
      lastChoiceText: "",
    };
  },
  mounted() {
    if (this.productSpec.specs.length) {
      this.lastChoiceText = "请选择规格";
    }
  },
  methods: {
    onChange(specIdx, optionIdx) {
      let spec = this.productSpec.specs[specIdx];
      this.lastChoiceText = "已选：" + spec.options[optionIdx];
      this.userChoice[spec.title] = spec.options[optionIdx];
    },
    onSpecialChange(specIdx, optionIdx) {
      let spec = this.productSpec.specialSpecs[specIdx];
      this.lastChoiceText =
        "已选：" + this.productSpec.specialSpecs[specIdx].options[optionIdx];
      this.userChoice[spec.title] = spec.options[optionIdx];
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
    .normal-color {
      color: #030305;
    }
    .activity-color {
      color: #bb3e0c;
    }
    .price {
      font-size: 32rpx;
      font-family: HarmonyOS Sans SC;
      line-height: 32rpx;
      font-weight: 700;
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
