<template>
  <view class="flex-col page">
    <NavBar
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col flex-1 user-info-section">
      <view class="flex-col user-info-block">
        <view class="flex-row justify-between items-center arrow-row">
          <text class="label-text">头像</text>
          <view class="flex-row items-center">
            <image class="user-avatar" :src="userInfo.avatar" />
            <image class="arrow-icon ml-14" :src="arrowIcon" />
          </view>
        </view>
        <view class="horizontal-divider" />
        <view
          class="flex-row justify-between items-center arrow-row"
          @click="onNameClick"
        >
          <text class="label-text">昵称</text>
          <view class="flex-row items-center">
            <text class="info-text">{{ userInfo.name }}</text>
            <image class="arrow-icon ml-12" :src="arrowIcon" />
          </view>
        </view>
      </view>
      <view class="flex-col user-details-section mt-12">
        <view class="flex-row justify-between items-center user-phone-row">
          <text class="label-text">手机号码</text>
          <text class="info-text">{{ userInfo.phone }}</text>
        </view>
        <view class="horizontal-divider" />
        <view class="flex-row justify-between items-center arrow-row">
          <text class="label-text">性别</text>
          <view class="flex-row items-center">
            <text class="info-text">{{ userInfo.gender }}</text>
            <image class="arrow-icon ml-14" :src="arrowIcon" />
          </view>
        </view>
        <view class="horizontal-divider" />
        <view class="flex-row justify-between items-center arrow-row">
          <text class="label-text">生日</text>
          <view class="flex-row items-center">
            <text class="info-text">{{ userInfo.birthday }}</text>
            <image class="arrow-icon ml-13" :src="arrowIcon" />
          </view>
        </view>
      </view>
    </view>
    <u-popup
      :show="showNamePopup"
      :round="24"
      closeable="true"
      mode="bottom"
      @close="onNamePopupClose"
    >
      <view class="nickname-edit-container">
        <text class="title">修改昵称</text>
        <text class="current-nickname">张小鱼</text>
        <view class="nickname-guidelines">
          <text class="guideline-title">规范建议：</text>
          <text class="guideline-detail mt-12">·请使用最多15个字符</text>
          <text class="guideline-detail mt-12"
            >·可以由中英文、数字、表情符合以及-—，组成</text
          >
        </view>
        <view class="save-button-container text-wrapper">
          <text class="save-button-text">保存</text>
        </view>
        <image
          class="outflow-icon"
          src="https://dev.ft.velosoft.cn/api/image?token=6573e33f740f740012ac1f41&name=f3892d5d7ca9488ec876527e64d69b80.png"
        />
      </view>
    </u-popup>
  </view>
</template>

<script>
import { NavBar } from "../../components/NavBar/NavBar.vue";

export default {
  components: { NavBar },
  props: {},
  data() {
    return {
      userInfo: {
        avatar:
          "https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=c3c6f05c5872d1b98645808e2fa8dfb2.png",
        name: "张小鱼",
        phone: "1345577897",
        gender: "男",
        birthday: "1998-03-06",
      },
      title: "个人信息",
      arrowIcon: "../../static/images/personal/right_arrow.png",
      showNamePopup: false,
    };
  },

  methods: {
    onNameClick() {
      this.showNamePopup = !this.showNamePopup;
    },
    onNamePopupClose() {
      this.showNamePopup = false;
    },
  },
};
</script>

<style scoped lang="less">
.ml-13 {
  margin-left: 26rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  .user-info-section {
    overflow-y: auto;
    .user-info-block {
      padding: 20rpx 0 0 0;
      background-color: #ffffff;
      height: 254rpx;
    }
    .user-details-section {
      background-color: #ffffff;
      height: 360rpx;
    }
    .user-phone-row {
      padding-left: 32rpx;
      padding-right: 58rpx;
      height: 120rpx;
    }

    .arrow-row {
      padding-left: 32rpx;
      padding-right: 26rpx;
      height: 120rpx;
    }
    .label-text {
      font-size: 28rpx;
      font-family: 苹方;
      color: #000000;
    }
    .info-text {
      font-size: 28rpx;
      font-family: 苹方;
      color: #565656;
    }
    .user-avatar {
      border-radius: 50%;
      width: 84rpx;
      height: 84rpx;
    }
  }
  .arrow-icon {
    width: 12rpx;
    height: 24rpx;
  }
  .horizontal-divider {
    height: 0;
    width: 100%;
    border-top: solid 0.5rpx #d8d8d8;
  }

  .nickname-edit-container {
    padding: 44rpx 40rpx 388rpx;
    background-color: #ffffff;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
    .title {
      font-size: 36rpx;
      font-family: 苹方;
      line-height: 33.66rpx;
      color: #000000;
    }
    .current-nickname {
      margin-top: 140rpx;
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 25.7rpx;
      color: #2d2e32;
    }
    .nickname-guidelines {
      margin-top: 88rpx;
      width: 505.1rpx;
      .guideline-title {
        color: #3c3d41;
        font-size: 26rpx;
        line-height: 24.12rpx;
      }
      .guideline-detail {
        font-size: 24rpx;
        font-family: 苹方;
        color: #6d6d6d;
        line-height: 22.34rpx;
      }
    }
    .save-button-container {
      align-self: stretch;
      margin: 104rpx 4rpx 0;
      padding: 32rpx 0;
      background-color: #000000;
      border-radius: 48rpx;
      .save-button-text {
        color: #ffffff;
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 26.12rpx;
      }
    }
    .outflow-icon {
      width: 30rpx;
      height: 30rpx;
      position: absolute;
      right: 30rpx;
      top: 34rpx;
    }
  }
}
</style>
