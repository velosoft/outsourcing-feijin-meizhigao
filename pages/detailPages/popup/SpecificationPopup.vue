<template>
  <view class="flex-col container">
    <img class="icon-close" src="/static/images/icon_popup_close.png" @click="onClose" />
    <view class="flex-col">
      <view class="flex-row items-center">
        <image class="shrink-0 product-image" :src="spec.imgUrl" />
        <view class="flex-col flex-1 product-right ml-12">
          <view class="flex-col">
            <view class="flex-row items-center self-stretch">
              <view v-if="spec.activity" class="activity-color">
                <text class="com-font activity-color">秒杀价</text>
                <text class="price-symbol">￥</text>
                <text class="price">{{ spec.price.toFixed(2) }}</text>
              </view>
              <view v-else class="normal-color">
                <text class="price-symbol">￥</text>
                <text class="price">{{ spec.priceRange[0].toFixed(2) }}-{{ spec.priceRange[1].toFixed(2) }}</text>
              </view>
            </view>
            <text class="self-start com-font stock-text mt-16">库存：{{ spec.invertory }}件</text>
          </view>
          <text class="com-font speci-text mt-24">{{ lastChoiceText }}</text>
        </view>
      </view>

      <view class="flex-col mt-30" v-for="(item, idx) of spec.specs" :key="idx">
        <text class="self-start spec-text">{{ item.title }}</text>
        <selector
          class="variant-selector service-varaint mt-18"
          :items="item.options"
          @change="(v) => onChange(idx, v)"
        ></selector>
      </view>
      <view class="self-stretch mt-30 divider" />
      <view class="flex-row justify-between mt-30 buy-number">
        <text class="self-start price-symbol buy-number-label">购买数量</text>
        <u-number-box class="cf-number-box-1" v-model="count"></u-number-box>
      </view>
      <view class="flex-col mt-30" v-for="(item, idx) of spec.specialSpecs" :key="idx">
        <text class="self-start spec-text">{{ item.title }}</text>
        <selector
          class="variant-selector service-varaint mt-18"
          :items="item.options"
          @change="(v) => onSpecialChange(idx, v)"
        ></selector>
      </view>
    </view>
    <u-button
      :class="spec.specialSpecs.length ? 'mt-30' : 'mt-60'"
      text="下一步"
      type="primary"
      @click="goNext"
    ></u-button>
  </view>
</template>

<script>
  import Selector from '@/components/Selector/Selector';

  export default {
    components: { Selector },
    props: {
      spec: {
        type: Object,
        default: () => ({
          imgUrl: '/static/mock/popup_product_image.png',
          price: 100,
          priceRange: [200, 800],
          invertory: 999,
          activity: null,
          specs: [
            {
              title: '请选择规格',
              options: ['3层60长*40宽*170高可加高加层', '3层80长*40宽*170高可加高加层', '3层80长*40宽*170高可加高加层'],
            },
            {
              title: '尺寸',
              options: ['小号', '中号', '大号', '特大'],
            },
            {
              title: '类型',
              options: ['按延米核算（元/m)', '按面积核算（元/m)', '按小时核算（元/人/h)'],
            },
            {
              title: '颜色',
              options: ['黄色', '红色', '黑色', '蓝色'],
            },
          ],
          specialSpecs: [
            {
              title: '附加服务',
              options: ['安装服务  ￥88.00', '安装服务  ￥99.00'],
            },
          ],
        }),
      },
    },
    data() {
      return {
        count: 2,
        userChoice: {},
        lastChoiceText: '',
      };
    },
    mounted() {
      if (this.spec.specs.length) {
        this.lastChoiceText = '请选择规格';
      }
    },
    methods: {
      onChange(specIdx, optionIdx) {
        let spec = this.spec.specs[specIdx];
        this.lastChoiceText = '已选：' + spec.options[optionIdx];
        this.userChoice[spec.title] = spec.options[optionIdx];
      },
      onSpecialChange(specIdx, optionIdx) {
        let spec = this.spec.specialSpecs[specIdx];
        this.lastChoiceText = '已选：' + this.spec.specialSpecs[specIdx].options[optionIdx];
        this.userChoice[spec.title] = spec.options[optionIdx];
      },
      goNext() {
        this.$emit('goNext');
      },
      onClose() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped lang="less">
  .container {
    padding: 32rpx 32rpx 40rpx;
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
        font-size: 36rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 36rpx;
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

    .spec-text {
      font-size: 28rpx;
      line-height: 28rpx;
      font-family: 苹方;
      color: #030305;
    }

    .buy-number {
      .buy-number-label {
        color: #030305;
        font-size: 30rpx;
        line-height: 30rpx;
      }
    }
    .price-symbol {
      font-size: 32rpx;
      font-family: 苹方;
      line-height: 32rpx;
    }

    .divider {
      border-top: 1rpx solid #f0f0f0;
    }

    .icon-close {
      position: absolute;
      height: 30rpx;
      width: 30rpx;
      top: 40rpx;
      right: 40rpx;
    }
  }
</style>
