<template>
  <view class="page flex-col">
    <uni-nav-bar
      :border="false"
      :shadow="false"
      height="88rpx"
      status-bar
      title="商城"
    />
    <view class="flex-row siderbar-container">
      <view class="sider-bar">
        <view
          class="sider-bar-item"
          v-for="(item, index) in navLeft"
          :key="index"
        >
          <view
            class="flex-row sider-bar-mar"
            :class="{ active: isActive === index }"
            @click="checked(index)"
          >
            <view :class="{ line: isActive === index }"></view>
            <text
              class="ml-20 sider-bar-text"
              :class="{ active: isActive === index }"
              >{{ item.text }}</text
            >
          </view>
        </view>
      </view>
      <view class="flex-col flex-1 right-panel">
        <view class="flex-col justify-start swiper-wrap">
          <swiper
            class="right-swiper"
            style="height: 154rpx; width: 480rpx"
            autoplay="true"
            @change="swiperChange"
          >
            <swiper-item v-for="(item, index) in Swiperitems" :key="index">
              <image
                class="swiper-image"
                src="../../static/mock/shop-swiper-image.png"
                mode="aspectFill"
              />
            </swiper-item>
          </swiper>
          <view class="flex-row swiper-indicator">
            <view
              class="indicator-dots"
              :class="{ active: index == current }"
              v-for="(item, index) in Swiperitems"
              :key="index"
            ></view>
          </view>
        </view>
        <scroll-view class="scroll-view_H" scroll-x="true">
          <view class="flex-row tabs-wrap">
            <view
              class="u-page__tag-item"
              v-for="(item, index) in radios"
              :key="index"
            >
              <u-tag
                :text="item.value"
                :plain="!item.checked"
                :name="index"
                @click="radioClick"
              >
              </u-tag>
            </view>
          </view>
        </scroll-view>
        <view class="flex-col list-wrap mt-16">
          <view
            class="flex-row mt-16 list-item"
            v-for="(item, index) in items"
            :key="index"
            @click="goto('/pages/shop/index')"
          >
            <image
              class="shrink-0 shop-image"
              src="../../static/mock/shop-image.png"
              mode="aspectFill"
            />
            <view class="ml-12 flex-col shop-con">
              <text class="title">衣架防滑无痕围巾架丝</text>
              <view class="flex-row tag items-center">
                <view
                  class="tag-wrap items-center flex-row"
                  v-for="(item, index) in prodTags"
                  :key="index"
                >
                  <text class="tag-text">{{ item }}</text>
                </view>
              </view>
              <view class="flex-row items-center shop-con-bottom">
                <text class="font-con_01 deposit-text">定金</text>
                <view class="flex-row shrink-0">
                  <text class="self-start price-symbol">￥</text>
                  <text class="price-number">200</text>
                  <text class="self-center decimal-font">.00</text>
                </view>
                <text class="font-con_01 pre-book">100人预约</text>
              </view>
            </view>
          </view>
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
      prodTags: ["新品上市", "好评推荐"],
      items: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      isActive: 0,
      navLeft: [
        { index: 0, text: "卧室场景" },
        { index: 1, text: "厨房场景" },
        { index: 2, text: "客厅场景" },
        { index: 3, text: "卧室场景" },
        { index: 4, text: "客厅场景" },
      ],
      Swiperitems: [null, null, null, null],
      radios: [
        {
          checked: true,
          value: "全部",
        },
        {
          checked: false,
          value: "塑料材质",
        },
        {
          checked: false,
          value: "铁质收纳盒",
        },
        {
          checked: false,
          value: "小物件收纳盒",
        },
        {
          checked: false,
          value: "小物件收纳盒",
        },
        {
          checked: false,
          value: "小物件收纳盒",
        },
        {
          checked: false,
          value: "小物件收纳盒",
        },
        {
          checked: false,
          value: "小物件收纳盒",
        },
      ],
      current: 0,
    };
  },

  methods: {
    swiperChange(e) {
      this.current = e.detail.current;
    },
    checked(index) {
      this.isActive = index;
    },
    radioClick(name) {
      this.radios.map((item, index) => {
        item.checked = index === name ? true : false;
      });
    },
    goto(url) {
      uni.navigateTo({
        url: url,
      });
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
.page {
  height: 100vh;
  overflow: hidden;
}
.siderbar-container {
  height: calc(100% - 100rpx);
}

.sider-bar {
  width: 206rpx;
  height: 100%;
  overflow-y: auto;
  background-color: #f8f8f8;
}
.sider-bar-item {
  width: 206rpx;
  height: 108rpx;
}
.sider-bar-text {
  font-size: 28rpx;
  font-family: 苹方;
  line-height: 28rpx;
  color: #6c6c6c;
}
.active {
  background-color: #ffffff;
  font-family: PingFangSC-Medium;
  color: #030305;
}
.sider-bar-mar {
  padding: 40rpx 0;
  .line {
    background-color: #b09053;
    width: 6rpx;
    height: 24rpx;
  }
}
.right-panel {
  width: 100% !important;
  padding: 32rpx 32rpx 0;
  height: 100%;
  overflow-y: hidden;
  .swiper-wrap {
    overflow-y: auto;
    position: relative;
    align-self: stretch;
    .swiper-image {
      width: 480rpx;
      height: 154rpx;
    }
    .swiper-indicator {
      position: absolute;
      left: 50%;
      top: 136rpx;
      transform: translateX(-50%);
      .indicator-dots {
        background-color: #ffffff;
        border-radius: 8rpx;
        width: 10rpx;
        height: 10rpx;
        margin-left: 8rpx;
      }
      .active {
        width: 34rpx;
      }
    }
  }
  .scroll-view_H {
    white-space: nowrap;
    width: 100%;
    margin-top: 32rpx;
  }
  .tabs-wrap {
    /deep/ .u-page__tag-item {
      margin-right: 12rpx;
    }
    /deep/ .u-tag {
      border: unset !important;

      border-radius: 8rpx;
      height: 54rpx;
      background-color: #b09053;
    }
    /deep/ .u-tag--primary--plain {
      background-color: #f8f8f8;
    }
    /deep/ .u-tag__text {
      color: #ffffff;
      font-size: 24rpx;
      font-family: PingFangSC-Medium;
      line-height: 24rpx;
    }
    /deep/ .u-tag__text--primary--plain {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #6c6c6c;
    }
  }
  .list-wrap {
    height: calc(100% - 360rpx);
    overflow-y: scroll;
    width: 474rpx;
    padding-bottom: 40rpx;

    .list-item {
      &:first-child {
        margin-top: 0;
      }
      .shop-image {
        width: 160rpx;
        height: 160rpx;
      }
      .shop-con {
        margin: 8rpx 0 8rpx 24rpx;
        .tag {
          margin-top: 16rpx;

          .tag-wrap {
            padding: 0 8rpx;
            height: 32rpx;
            background-color: rgba(255, 172, 77, 0.08);
            .tag-text {
              margin: 0 8rpx;
              font-size: 20rpx;
              font-family: PingFangSC-Regular;
              line-height: 20rpx;
              color: #bb3e0c;
            }
          }
        }
        .tag > .tag-wrap:not(:first-child) {
          margin-left: 16rpx;
        }
        .shop-con-bottom {
          margin-top: 40rpx;
          .font-con_01 {
            font-size: 20rpx;
            font-family: 苹方;
            line-height: 20rpx;
            color: #a7a7a7;
          }
          .deposit-text {
            color: #bb3e0c;
          }
          .price-symbol {
            color: #bb3e0c;
            font-size: 20rpx;
            font-family: PingFang SC;
            line-height: 20rpx;
          }
          .price-number {
            margin-left: -4rpx;
            color: #bb3e0c;
            font-size: 32rpx;
            font-family: HarmonyOSSans;
            letter-spacing: -1.24rpx;
            line-height: 32rpx;
            font-weight: 700;
          }
          .decimal-font {
            font-size: 20rpx;
            font-family: HarmonyOSSansSC;
            line-height: 20rpx;
            font-weight: 700;
            color: #bb3e0c;
          }
          .pre-book {
            margin-left: 32rpx;
            font-size: 22rpx;
            line-height: 22rpx;
          }
        }
      }
    }
  }
}
.title {
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  line-height: 28rpx;
  color: #030305;
}
</style>
