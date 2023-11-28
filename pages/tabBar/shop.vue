<template>
  <view class="flex-row">
    <view class="flex-col">
      <view class="sider-bar">
        <view class="pics">
          <scroll-view
            class="gundong"
            scroll-y
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
                >{{ item.tit }}</text
              >
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
    <view class="flex-col flex-1 right-panel">
      <view class="flex-col justify-start swiper-wrap">
        <swiper
          class="right-swiper"
          style="height: 154rpx; width: 480rpx"
          autoplay="true"
          indicator-dots="true"
        >
          <swiper-item v-for="(item, index) in Swiperitems" :key="index">
            <image
              class="swiper-image"
              src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=b707d6e23925649ad73479dac900e0e5.png"
            />
          </swiper-item>
        </swiper>
      </view>
      <scroll-view class="scroll-view_H" scroll-x="true">
        <view class="mt-16 flex-row tabs-wrap">
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
      <view class="mt-16 flex-col list-wrap">
        <view
          class="flex-row mt-16 list-item"
          v-for="(item, index) in items"
          :key="index"
          @click="goto('/pages/shop/index')"
        >
          <image
            class="shrink-0 shop-image"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=06a1cbdae6865f4cfc1d807007dcb9f6.png"
          />
          <view class="ml-12 flex-col shop-con">
            <text class="title">衣架防滑无痕围巾架丝</text>
            <view class="flex-row tag items-center">
              <view
                class="tag-wrap items-center flex-row"
                v-for="(item, index) in items_1"
                :key="index"
              >
                <text class="tag-text">新品上市</text>
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
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      items_1: [null, null],
      items: [null, null, null, null],
      isActive: 0,
      navLeft: [
        { index: 0, tit: "卧室场景" },
        { index: 1, tit: "厨房场景" },
        { index: 2, tit: "客厅场景" },
        { index: 3, tit: "卧室场景" },
        { index: 4, tit: "卧室场景" },
        { index: 5, tit: "客厅场景" },
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
      ],
    };
  },

  methods: {
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
  },
};
</script>

<style scoped lang="less">
.sider-bar {
  width: 206rpx;
  height: 100%;
  overflow: auto;
  background-color: #f8f8f8;
}
.pics {
  width: 100%;
  height: auto;
}
.gundong {
  width: 206rpx;
  height: 108rpx;
}
.sider-bar-text {
  height: 108rpx;
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
  padding: 32rpx 32rpx 0;
  height: 1216rpx;
  overflow-y: auto;
  .swiper-wrap {
    position: relative;
    align-self: stretch;
    .swiper-image {
      width: 480rpx;
      height: 154rpx;
    }
  }
  .right-swiper {
    /deep/ .uni-swiper-dots {
      // 指示点整个区域
      bottom: 8rpx;
    }
    /deep/ .uni-swiper-dot {
      // 指示点元素默认样式
      background-color: #ffffff;
      border-radius: 8rpx;
      width: 10rpx;
      height: 10rpx;
      margin-right: 8rpx;
    }
    /deep/ .uni-swiper-dot-active {
      // 指示点元素激活（当前选中）状态样式
      background-color: #ffffff;
      border-radius: 8rpx;
      width: 34rpx;
      height: 10rpx;
    }
  }
  .scroll-view_H {
    white-space: nowrap;
    width: 100%;
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
    width: 474rpx;
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
            background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=9a3b9a726ef2d84aeb76065d090ea380.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 32rpx;
            .tag-text {
              margin: 0 8rpx;
              font-size: 20rpx;
              font-family: PingFangSC-Regular;
              line-height: 20rpx;
              color: #bb3e0c;
            }
          }
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
            margin-left: -8rpx;
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
