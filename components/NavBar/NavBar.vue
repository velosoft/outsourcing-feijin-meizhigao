<template>
  <view class="navbar">
    <view
      :class="{
        'navbar--fixed': fixed,
        'navbar--shadow': shadow,
        'navbar--border': border,
      }"
      :style="{
        background: background,
        color: color,
        position: fixed ? fixedName : '',
      }"
      class="navbar-content"
    >
      <StatusBar v-if="statusBar" />
      <image v-if="bgSrc" class="bg" :src="bgSrc" mode="widthFix"></image>
      <view
        class="navbar-header"
        :style="{ paddingRight: paddingRight + 'px' }"
      >
        <view class="navbar-left">
          <!-- <view
            @click="onClickLeft"
            class="navbar-btns navbar-btns-left"
            v-if="hasBack"
          >
            <view class="navbar-item-content">
              <u-icon
                class="icon"
                :color="iconColor"
                :size="iconSize"
                :name="hasCurrentPages ? 'arrow-leftNavBar' : 'home'"
              ></u-icon>
              <view class="txt" v-if="leftText">{{ leftText }}</view>
            </view>
            <slot name="left" />
          </view> -->
          <slot name="left" />
        </view>
        <view
          class="navbar-title"
          :style="{
            paddingRight: paddingRight + 'px',
            paddingLeft: paddingRight + 'px',
          }"
        >
          <view
            class="navbar-item-content"
            v-if="title"
            :style="{ color: titleColor }"
            >{{ title }}</view
          >
          <!-- 标题插槽 -->
          <slot name="title" />
        </view>
        <view class="navbar-btns-right">
          <slot name="right"></slot>
        </view>
      </view>
    </view>
    <view class="navbar-placeholder" v-if="fixed && isShow">
      <StatusBar v-if="statusBar" />
      <view class="navbar-placeholder-view" />
    </view>
  </view>
</template>

<script>
import { StatusBar } from "../StatusBar/StatusBar.vue";
export default {
  name: "NavBar",
  components: { StatusBar },
  props: {
    title: {
      type: String,
      default: "",
    },
    leftText: {
      type: String,
      default: "",
    },
    hasBack: {
      type: Boolean,
      default: true,
    },
    iconColor: {
      type: String,
      default: "#333444",
    },
    iconSize: {
      type: String | Number,
      default: 48,
    },
    fixed: {
      type: [Boolean, String],
      default: true,
    },
    fixedName: {
      type: String,
      default: "fixed",
    },
    isShow: {
      type: [Boolean, String],
      default: true,
    },
    color: {
      type: String,
      default: " #030305",
    },
    titleColor: {
      type: String,
      default: " #030305",
    },
    background: {
      type: String,
      default: "#fff",
    },
    bgSrc: {
      type: String,
      default: "",
    },
    statusBar: {
      type: [Boolean, String],
      default: true,
    },
    shadow: {
      type: [Boolean, String],
      default: false,
    },
    border: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      hasCurrentPages: true,
      paddingRight: 0,
    };
  },
  mounted() {
    this.hasCurrentPages = getCurrentPages().length > 1;
    // #ifdef MP-WEIXIN
    // this.paddingRight = uni.getMenuButtonBoundingClientRect().width;
    // #endif
  },
  methods: {
    onClickLeft() {
      if (this.hasBack && this.hasCurrentPages) {
        uni.navigateBack({
          delta: 1,
        });
      } else {
        uni.reLaunch({
          url: "/pages/tabbar/home/home",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
$nav-height: 88upx;

.navbar-content {
  width: 100%;
  position: relative;
  // overflow: hidden;
  z-index: 100;
  padding: 0 20rpx;

  .bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.navbar-header {
  height: $nav-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.navbar-left {
  z-index: 2;
}
.navbar-title {
  //   width: calc(100% - #{$nav-height} - #{$nav-height});
  flex: 1;
  height: 100%;
  font-size: 34upx;
  color: #242422;
  font-weight: bold;
  padding-right: 10rpx;
  padding-left: 10rpx;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-item-content {
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.navbar-btns-left,
.navbar-btns-right {
  flex: 1;
  position: relative;
  z-index: 2;
}

.navbar-btns-left {
  .navbar-item-content {
    display: flex;
    align-items: center;
    padding-left: 15upx;
    padding-right: 15upx;

    .icon {
      width: 58upx;
      height: 58upx;
      line-height: 58rpx;
      text-align: center;
    }
  }
}

.navbar-placeholder-view {
  height: $nav-height;
}

.navbar--fixed {
  left: 0;
  top: 0;
}

.navbar--shadow {
  box-shadow: 0 1px 6px #ccc;
}

.navbar--border {
  border-bottom: 2rpx solid #ccc;
}
</style>
