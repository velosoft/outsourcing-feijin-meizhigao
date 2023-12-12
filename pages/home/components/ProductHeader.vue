<template>
  <view class="flex-col container">
    <view class="flex-row justify-between">
      <text class="title line-clamp-one">{{ title }}</text>
      <image
        class="share-icon"
        src="https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=icon_share_01.png"
        @click="onShare"
      />
    </view>
    <view class="flex-col describe-wraper">
      <text class="mini-font describe-text line-clamp-one">{{ content }}</text>
    </view>
    <view class="flex-row justify-between price-wraper items-center">
      <view class="flex-row items-center price-left">
        <view class="flex-row items-start">
          <text class="price-symbol">￥</text>
          <text class="price">{{ price }}</text>
          <text class="point">.{{ decimalPrice }}</text>
        </view>
        <text class="mini-font pre-price">￥{{ originPrice }}</text>
      </view>
      <text class="book-number">{{ buyer }}人预约</text>
    </view>
    <view class="flex-row coupon-wraper items-center">
      <view class="flex-row flex-1 tag-gap">
        <u-tag
          class="tag-coupon"
          :text="item"
          v-for="(item, index) in discountTags"
          :key="index"
        ></u-tag>
      </view>
      <view class="flex-row button ml-19 items-center">
        <text class="self-center receive">领取</text>
        <image
          class="icon_arrow ml-3"
          src="https://dev.ft.velosoft.cn/api/image?token=6575e348740f740012ac372e&name=icon_arrow_06.png"
        />
      </view>
    </view>
    <view class="flex-col feature-wraper">
      <view class="flex-row tag-gap tag-feature">
        <u-tag
          class="tag-feature"
          :text="item"
          v-for="(item, index) in tags"
          :key="index"
        ></u-tag>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    title: { type: String, default: "" },
    content: { type: String, default: "" },
    price: { type: String, default: "" },
    decimalPrice: { type: String, default: "" },
    originPrice: { type: Number, default: 0 },
    buyer: { type: Number, default: 0 },
    discountTags: {
      type: Array,
      default: function () {
        return []; // 正确的写法
      },
    },
    tags: {
      type: Array,
      default: function () {
        return []; // 正确的写法
      },
    },
  },
  data() {
    return {
      uid: "",
    };
  },

  methods: {
    onShare() {
      this.$emit("onShare", this.uid);
    },
  },
};
</script>

<style scoped lang="less">
.ml-19 {
  margin-left: 38rpx;
}
.ml-3 {
  margin-left: 6rpx;
}
.container {
  padding: 26rpx 28rpx 32rpx;
  background-color: #ffffff;
  border-radius: 12rpx;
  .title {
    color: #030305;
    font-size: 36rpx;
    font-family: 苹方;
    font-weight: 600;
    line-height: 36rpx;
    width: 550rpx;
  }
  .line-clamp-one {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
  }
  .share-icon {
    width: 36rpx;
    height: 36rpx;
  }
  .describe-wraper {
    margin-top: 16.16rpx;
    width: 550rpx;
    .describe-text {
      font-size: 24rpx;
      line-height: 24rpx;
    }
  }
  .price-wraper {
    margin-top: 22rpx;
    padding-left: 6rpx;
    .price-left {
      margin-bottom: 3.78rpx;
      .price-symbol {
        color: #030305;
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
      }
      .price {
        margin-left: -6rpx;
        color: #030305;
        font-size: 48rpx;
        font-family: HarmonyOS_Sans_Bold;
        line-height: 48rpx;
        letter-spacing: -1.86rpx;
      }
      .point {
        margin-left: 10rpx;
        color: #030305;
        font-size: 28rpx;
        font-family: HarmonyOS Sans SC;
        font-weight: 700;
        line-height: 28rpx;
      }
      .pre-price {
        margin-left: 17.38rpx;
        font-size: 24rpx;
        line-height: 24rpx;
        text-decoration: line-through;
      }
    }
    .book-number {
      color: #a7a7a7;
      font-size: 26rpx;
      font-family: 苹方;
      line-height: 26rpx;
    }
  }
  .mini-font {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #a7a7a7;
  }
  .coupon-wraper {
    margin-top: 50rpx;
    .button {
      flex-shrink: 0;
      margin-right: 6rpx;
      .receive {
        font-size: 22rpx;
        font-family: 苹方;
        line-height: 22rpx;
        color: #bb3e0c;
      }
      .icon_arrow {
        width: 16rpx;
        height: 16rpx;
      }
    }
  }
  .tag-gap > u-tag:not(:first-child) {
    margin-left: 16rpx;
  }
  .feature-wraper {
    margin-top: 24rpx;
    .tag-feature {
      height: 44rpx;
    }
  }
}
</style>
