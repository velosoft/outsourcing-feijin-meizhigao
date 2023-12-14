<template>
  <view class="flex-row list-item mt-8">
    <image class="left" src="/static/images/image_shop_01.png" />
    <view class="flex-col flex-1 right ml-10">
      <view class="flex-col title-wrapper">
        <text class="self-stretch product-title line-clamp-two">{{
          item.title
        }}</text>
        <view class="flex-row self-stretch mt-4 tag-wraper">
          <view
            class="flex-col tag"
            v-for="(tag, index) in item.tags || []"
            :key="index"
          >
            <text class="tag-font">{{ tag }}</text>
          </view>
        </view>
      </view>
      <view class="flex-col">
        <text class="product-price-font price-through mt-4">{{
          item.originPrice
        }}</text>
        <view
          class="bottom-top flex-row justify-between items-center"
          v-if="activityStatus == 2"
        >
          <view class="flex-row items-start price-wraper">
            <view class="flex-row price-left">
              <text class="price-symbol symbol-text">￥</text>
              <text class="price-font price-text">{{
                getPriceIntergetPart(item.price)
              }}</text>
            </view>
            <text class="price-last price-last-text"
              >.{{ getPriceDecimalPart(item.price) }}</text
            >
          </view>
          <view class="flex-col items-center btn" @click="goDetail"
            ><text class="btn-font btn-text">原价购买</text></view
          >
        </view>
        <view
          class="flex-row items-center line-progress"
          v-if="activityStatus == 1"
        >
          <u-line-progress
            :percentage="getPercentage(item)"
            :showText="false"
            :height="8"
            activeColor="#f71f21"
            inactiveColor="#ffdedc"
            style="width: 180rpx"
          ></u-line-progress>
          <text class="remainder-font numder-ramainder ml-4"
            >仅剩{{ item.invertory || 0 }}份</text
          >
        </view>
        <view
          class="flex-row justify-between items-center relative btn-buy"
          v-if="activityStatus !== 2"
          @click="goDetail"
        >
          <view class="flex-col items-center btn-bg-wraper btn-bg-pos">
            <image
              class="btn-bg"
              src="/static/images/btn_bg_01.png"
              v-if="activityStatus == 0"
            />
            <image
              class="btn-bg"
              src="/static/images/btn_bg_02.png"
              v-if="activityStatus == 1"
            />
          </view>
          <view class="flex-row items-center relative btn-left">
            <text class="btn-price-label">秒杀价</text>
            <view class="flex-row items-start btn-price">
              <text class="self-center price-symbol btn-psice-symbol">￥</text>
              <text class="price-font btn-price-number">{{
                getPriceIntergetPart(item.price)
              }}</text>
              <text class="price-last btn-price-last"
                >.{{ getPriceDecimalPart(item.price) }}</text
              >
            </view>
          </view>
          <view class="btn-right">
            <text class="relative btn-font" v-if="activityStatus == 0"
              >即将开始</text
            >
            <text class="relative btn-font" v-else>立即抢购</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    activityStatus: { type: Number },
  },
  computed: {
    detailUrl() {
      switch (this.item.type) {
        case "product":
          return `/pages/home/detailPages/productDetail?id=${
            this.item.id || ""
          }&type=activity`;
        case "service":
          return `/pages/home/detailPages/serviceDetail?id=${
            this.item.id || ""
          }&type=activity`;
        case "course":
          return `/pages/home/detailPages/courseDetail?id=${
            this.item.id || ""
          }type=activity`;
        default:
          return "";
      }
    },
  },
  methods: {
    getPriceIntergetPart(price) {
      let val = Math.floor(price).toString();
      return val;
    },
    getPriceDecimalPart(price) {
      let val = price.toFixed(2).split(".")[1];
      return val;
    },
    getPercentage(item) {
      let val = (item.invertory / (item.maxInvertory || 1)) * 100;
      if (val > 100) val = 100;
      if (val < 0) val = 0;
      return val;
    },
    goDetail() {
      uni.navigateTo({ url: this.detailUrl });
    },
  },
};
</script>

<style scoped lang="less">
.list-item {
  padding: 24rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  border: solid 1rpx #f4ba70;
  &:first-child {
    margin-top: 0;
  }
  .left {
    width: 224rpx;
    height: 224rpx;
  }
  .right {
    margin-top: 8rpx;

    .title-wrapper {
      min-height: 120rpx;
    }
    .product-title {
      // width: 187rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Medium;
      line-height: 34rpx;
      color: #030305;
    }
    .tag-wraper > .tag:not(:first-child) {
      margin-left: 12rpx;
    }
    .tag {
      padding: 0 8rpx;
      height: 32rpx;
      background: #ffac4d14;
      .tag-font {
        font-size: 20rpx;
        font-family: 苹方;
        line-height: 32rpx;
        color: #ff6800;
      }
    }
    .product-price-font {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #d3d3d3;
    }
    .price-through {
      text-decoration: line-through;
      margin-left: 8rpx;
    }
    .bottom-top {
      margin-top: 6rpx;
      .price-wraper {
        margin-right: 16rpx;
        .price-left {
          .price-text {
            color: #030305;
            line-height: 32rpx;
          }
          .symbol-text {
            color: #030305;
          }
        }
        .price-last-text {
          color: #030305;
        }
      }
      .btn {
        padding: 16rpx 0;
        background-color: #ffffff;
        border-radius: 100rpx;
        width: 144rpx;
        border: solid 1rpx #d3d3d3;
        .btn-text {
          color: #a7a7a7;
        }
      }
    }
    .line-progress {
      margin-top: 12rpx;
      margin-bottom: 20rpx;
    }
    .remainder-font {
      font-size: 20rpx;
      font-family: 苹方;
      line-height: 20rpx;
      color: #a7a7a7;
    }
    .numder-ramainder {
      font-size: 22rpx;
      line-height: 22rpx;
    }
    .btn-buy {
      width: 100%;
      height: 64rpx;
      padding: 24rpx 0;
      .btn-bg-pos {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
      .btn-bg {
        width: 378rpx;
        height: 64rpx;
      }

      .btn-left {
        margin-top: 10rpx;
        margin-left: 24rpx;
        .btn-price-label {
          font-size: 24rpx;
          font-family: PingFangSC-Medium;
          line-height: 24rpx;
          color: #bb3e0c;
        }
        .btn-price {
          .btn-price-number {
            line-height: 32rpx;
          }
        }
      }
      .btn-right {
        margin-top: 6rpx;
        margin-right: 18rpx;
      }
    }
    .price-font {
      font-size: 32rpx;
      font-family: HarmonyOSSansSC;
      line-height: 34rpx;
      font-weight: 700;
      color: #bb3e0c;
    }
    .price-symbol {
      font-size: 20rpx;
      font-family: PingFangSC-Medium;
      line-height: 20rpx;
      color: #bb3e0c;
    }
    .price-last {
      margin-left: 2rpx;
      font-size: 20rpx;
      font-family: HarmonyOSSansSC;
      line-height: 20rpx;
      font-weight: 700;
      color: #bb3e0c;
    }
    .btn-font {
      font-size: 24rpx;
      font-family: PingFang SC Bold;
      line-height: 24rpx;
      font-weight: 700;
      color: #ffffff;
    }
  }
}
</style>
