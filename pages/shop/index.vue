<template>
  <view class="flex-col page">
    <uni-nav-bar
      :fixed="true"
      :border="false"
      backgroundColor="#ffffff00"
      class="nav-bar"
      height="88rpx"
      left-icon="left"
      @clickLeft="back"
    />
    <view class="flex-col flex-1 shop-detail">
      <view class="flex-col relative">
        <swiper
          class="header-swiper"
          style="width: 750rpx; height: 750rpx"
          current="indicatorId"
          circular
          @change="swiperChange"
        >
          <swiper-item v-for="(item, index) in headerSwiper" :key="index">
            <view class="flex-col justify-start items-center relative">
              <image
                class="header-swiper-image"
                src="../../static/images/iamge_video.png"
              />
              <image
                class="outflow video-open-btn"
                src="../../static/images/icon_video_01.png"
              />
            </view>
          </swiper-item>
        </swiper>
        <view class="flex-col items-center header-indicator text-wrapper">
          <text class="coupon-text text_4"
            >{{ swiperCurrent }}/{{ headerSwiper.length }}</text
          >
        </view>
      </view>
      <view class="mt-10 flex-col body">
        <view class="flex-col shop-info">
          <view class="flex-row justify-between items-center">
            <view class="flex-col"
              ><text class="title">厨房收纳服务厨房收纳服务</text></view
            >
            <image
              class="share-image"
              src="../../static/images/icon_share_01.png"
            />
          </view>
          <view class="flex-col mt-17"
            ><text class="describe-text"
              >烹饪也能从容优雅享受美好食光</text
            ></view
          >
          <view class="flex-row justify-between mt-17">
            <view class="flex-row items-center self-center">
              <text class="deposit-text">定金</text>
              <view class="ml-4 flex-row shrink-0">
                <text class="self-start font-com-symbol price-symbol">￥</text>
                <text class="price-number">200</text>
                <text class="self-start decimal-text">.00</text>
              </view>
              <text class="ml-4 font-com price-text_pr">￥554.00</text>
            </view>
            <text class="self-start font-com-shop reserve-text">100人预约</text>
          </view>
          <view class="flex-row items-center mt-17 justify-between">
            <view class="flex-row justify-center item-space">
              <view
                class="list-item items-center flex-row"
                v-for="(item, index) in items"
                :key="index"
              >
                <text class="coupon-text">满329包邮</text>
              </view>
            </view>
            <view class="ml-20 flex-row items-center shrink-0 group_5">
              <text class="coupon-text">领取</text>
              <image
                class="ml-4 image_7"
                src="../../static/images/icon_arrow_02.png"
              />
            </view>
          </view>
          <view class="flex-col mt-17">
            <view class="flex-row tag-list">
              <view
                class="tag-item flex-row"
                v-for="(item, index) in items_1"
                :key="index"
              >
                <text class="font_6">新客优选</text>
              </view>
            </view>
          </view>
        </view>
        <view class="mt-10 flex-col logistics-info">
          <view class="flex-row">
            <text class="font-com-shop">运费</text>
            <text class="ml-16 font-com-samll">免运费</text>
          </view>
          <view class="flex-row items-center active-top">
            <text class="font-com-shop">活动</text>
            <view class="ml-16 flex-col justify-center active-coupon">
              <text class="coupon-text active-coupion-text">每满200减20元</text>
            </view>
          </view>
          <view class="flex-row justify-between items-center mt-41">
            <view class="flex-row">
              <text class="font-com-shop">选择</text>
              <text class="ml-16 font-com-samll">请选择服务规格</text>
            </view>
            <image
              class="icon-arrow_02"
              src="../../static/images/icon_arrow_03.png"
            />
          </view>
          <view class="flex-row items-center reserve-top">
            <text class="font-com-shop">服务</text>
            <view class="ml-4 flex-row">
              <view class="flex-row items-center reserve-tag">
                <image
                  class="shrink-0 icon-office"
                  src="../../static/images/icon_radio_01.png"
                />
                <text class="ml-12 reserve-tag-text">官方自营</text>
              </view>
              <view class="flex-row items-center reserve-tag">
                <image
                  class="shrink-0 icon-office"
                  src="../../static/images/icon_radio_01.png"
                />
                <text class="ml-8 reserve-tag-text">支持退换</text>
              </view>
            </view>
          </view>
        </view>
        <view class="mt-10 flex-col evaluate-info">
          <view class="flex-row justify-between items-center evaluate-header">
            <text class="evaluate-title">商品评价（20）</text>
            <view class="flex-row items-center">
              <text class="font-com-shop">查看全部</text>
              <image
                class="ml-4 shrink-0 icon-arrow_02"
                src="../../static/images/icon_arrow_01.png"
              />
            </view>
          </view>
          <view class="mt-16 flex-col evaluate-list">
            <view
              class="flex-col mt-28 evaluate-list"
              v-for="(item, index) in items_2"
              :key="index"
            >
              <view class="flex-row items-center self-stretch">
                <image
                  class="icon-avator"
                  src="../../static/images/icon_avator.png"
                />
                <text class="ml-12 font-com-symbol">朱**</text>
              </view>
              <view class="mt-10 flex-col self-center">
                <text class="font-evaluate"
                  >不错，真的特别好，服务很到位施工效果也很不错，妥妥的五星好评，还会回购</text
                >
              </view>
              <text class="mt-10 self-start font-com evaluate-describe"
                >厨房定制收纳服务：按小时核算（元/m）</text
              >
            </view>
          </view>
        </view>
        <view class="mt-10 flex-col detail-info">
          <view class="flex-col detial-top">
            <text class="self-start detial-title">详情</text>
            <text class="mt-20 self-stretch font-com-samll detial-con">
              2015年之前的朋友圈，都是刷屏；朋友圈文案是最近一年大家才开始重视的，可能我是比较早提出“朋友圈文案”和“长文案”这两类不同概念的文案区分，所以，坏消息是，目前应该还没有专业的写朋友圈文案的书。
            </text>
          </view>
          <image
            class="mt-56 detial-imag"
            src="../../static/images/images_detial.png"
          />
        </view>
      </view>
    </view>
    <view class="flex-row justify-between items-center btn-footer">
      <view class="flex-row">
        <view class="flex-col items-center">
          <image
            class="footer-image"
            src="../../static/images/icon_collect.png"
          />
          <text class="mt-4 footer-font footer-text">收藏</text>
        </view>
        <view class="ml-18 flex-col items-center">
          <image
            class="footer-image"
            src="../../static/images/icon_cart_01.png"
          />
          <text class="mt-4 footer-font footer-text">购物车</text>
        </view>
      </view>
      <view class="flex-row">
        <view class="flex-col items-center btn-wrapper-left">
          <text class="reserve-tag-text">加入购物车</text>
        </view>
        <view class="ml-10 flex-col items-center btn-wrapper-right">
          <text class="font-com-shop btn-wrapper-right-text">预约服务</text>
        </view>
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
      headerSwiper: [null, null, null, null, null, null],
      swiperCurrent: 0,
      items: [null, null, null],
      items_1: [null, null, null],
      items_2: [null, null],
    };
  },

  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.detail.current + 1;
    },
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>

<style scoped lang="less">
.mt-17 {
  margin-top: 34rpx;
}
.mt-41 {
  margin-top: 80rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .nav-bar {
    position: absolute;
  }
  .shop-detail {
    overflow-y: auto;
    .header-swiper-image {
      width: 100vw;
      height: 100vw;
    }
    .outflow {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .video-open-btn {
      opacity: 0.3;
      width: 116rpx;
      height: 116rpx;
    }
    .header-indicator {
      position: absolute;
      right: 32rpx;
      top: 670rpx;
      .text_4 {
        color: #ffffff;
        font-size: 24rpx;
        line-height: 24rpx;
      }
    }
    .text-wrapper {
      padding: 8rpx 0;
      background-color: #0000004d;
      border-radius: 24rpx;
      width: 80rpx;
    }
    .body {
      margin: 0 20rpx;
      .shop-info {
        padding: 32rpx 28rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
        margin-top: 20rpx;
        .title {
          color: #030305;
          font-size: 36rpx;
          font-family: PingFang SC;
          line-height: 36rpx;
        }
        .share-image {
          width: 36rpx;
          height: 36rpx;
        }
        .describe-text {
          margin-left: 8rpx;
          color: #a7a7a7;
          font-size: 24rpx;
          font-family: PingFangSC-Medium;
          line-height: 24rpx;
        }
        .deposit-text {
          color: #bb3e0c;
          font-size: 30rpx;
          font-family: PingFang SC;
          line-height: 30rpx;
        }
        .price-symbol {
          color: #bb3e0c;
        }
        .price-number {
          margin-left: -6rpx;
          color: #bb3e0c;
          font-size: 48rpx;
          font-family: HarmonyOSSans;
          font-weight: 700;
          line-height: 36rpx;
          letter-spacing: -1.86rpx;
        }
        .decimal-text {
          color: #bb3e0c;
          font-size: 28rpx;
          font-family: HarmonyOSSansSC;
          font-weight: 700;
          line-height: 28rpx;
        }
        .price-text_pr {
          font-size: 24rpx;
          line-height: 24rpx;
          text-decoration: line-through;
        }
        .reserve-text {
          margin-top: 16rpx;
          font-size: 26rpx;
          line-height: 26rpx;
        }
        .item-space > .list-item:not(:first-child) {
          margin-left: 16rpx;
        }
        .list-item {
          padding: 0 12rpx;
          height: 44rpx;
          border-radius: 4rpx;
          background-color: #fdeee9;
        }
        .group_5 {
          margin-right: 8rpx;
          .image_7 {
            width: 16rpx;
            height: 16rpx;
          }
        }
        .tag-list > .tag-item:not(:first-child) {
          margin-left: 16rpx;
        }
        .tag-item {
          padding: 8rpx 12rpx;
          height: 44rpx;
          align-items: center;
          background-color: #fff5de;
          border-radius: 4rpx;
          .font_6 {
            font-size: 22rpx;
            font-family: 苹方;
            line-height: 22rpx;
            color: #b09053;
          }
        }
      }
      .logistics-info {
        padding: 40rpx 28rpx 24rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
        .active-top {
          margin-top: 88rpx;
          .active-coupon {
            padding: 8rpx 0;
            border-radius: 4rpx;
            height: 46rpx;
            border: solid 1rpx #bb3e0c;
            .active-coupion-text {
              margin: 0 8rpx;
              font-size: 24rpx;
              line-height: 24rpx;
            }
          }
        }
        .reserve-top {
          margin-top: 72rpx;
          .reserve-tag {
            padding: 8rpx 16rpx;
            .icon-office {
              width: 30rpx;
              height: 30rpx;
            }
          }
        }
      }
      .evaluate-info {
        padding-bottom: 32rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
        .evaluate-header {
          padding: 32rpx 28rpx;
          border-bottom: solid 1.6rpx #efefef;
          .evaluate-title {
            color: #030305;
            font-size: 32rpx;
            font-family: PingFangSC-Medium;
            line-height: 32rpx;
          }
        }
        .evaluate-list {
          padding: 0 28rpx;
          .icon-avator {
            border-radius: 200rpx;
            width: 60rpx;
            height: 60rpx;
          }
          .font-evaluate {
            font-size: 22rpx;
            font-family: 苹方;
            line-height: 28rpx;
            color: #030305;
          }
          .evaluate-describe {
            font-size: 20rpx;
            line-height: 20rpx;
          }
        }
      }
      .icon-arrow_02 {
        width: 24rpx;
        height: 24rpx;
      }
      .font-com-symbol {
        font-size: 28rpx;
        font-family: PingFangSC-Medium;
        line-height: 28rpx;
        color: #030305;
      }
      .font-com {
        font-size: 22rpx;
        font-family: 苹方;
        line-height: 22rpx;
        color: #a7a7a7;
      }
      .detail-info {
        padding: 40rpx 28rpx 0;
        background-color: #ffffff;
        border-radius: 8rpx 8rpx 0rpx 0rpx;
        .detial-top {
          margin-right: 8rpx;
          .detial-title {
            color: #030305;
            font-size: 36rpx;
            font-family: PingFangSC-Medium;
            line-height: 36rpx;
          }
          .detial-con {
            line-height: 34rpx;
          }
        }
        .detial-imag {
          width: 654rpx;
          height: 344rpx;
        }
      }
      .font-com-samll {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #030305;
      }
    }
    .coupon-text {
      font-size: 22rpx;
      font-family: 苹方;
      line-height: 22rpx;
      color: #bb3e0c;
    }
  }
  .btn-footer {
    width: 750rpx;
    position: fixed;
    bottom: 0;
    padding: 16rpx 32rpx 16rpx 40rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 0rpx 20rpx #0000000f;
    .btn-wrapper-left {
      padding: 24rpx 0;
      border-radius: 40rpx;
      width: 206rpx;
      height: 80rpx;
      border: solid 2rpx #b09053;
    }
    .btn-wrapper-right {
      padding: 24rpx 0;
      background-color: #b09053;
      border-radius: 40rpx;
      width: 206rpx;
      height: 80rpx;
      .btn-wrapper-right-text {
        color: #ffffff;
      }
    }
  }
  .footer-image {
    width: 48rpx;
    height: 48rpx;
  }
  .footer-font {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #030305;
  }
  .footer-text {
    font-size: 20rpx;
    line-height: 20rpx;
  }
  .reserve-tag-text {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #b09053;
  }
  .font-com-shop {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #a7a7a7;
  }
}
</style>
