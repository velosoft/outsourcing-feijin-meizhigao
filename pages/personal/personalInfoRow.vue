<template>
  <view class="flex-row justify-between items-center user-info-container">
    <view class="flex-row items-center">
      <image class="user-avatar" :src="userInfo.avatar" />
      <view v-if="userInfo.name" class="flex-col ml-12">
        <text class="user-name">{{ userInfo.name }}</text>
        <view
          class="flex-row items-center membership-section mt-8"
          @click="onMembershipClick"
        >
          <image
            class="membership-icon"
            src="../../static/images/personal/star_coin.png"
          />
          <text class="membership-text ml-3">黄金会员</text>
        </view>
      </view>
      <view v-else class="flex-row justify-between items-center">
        <view class="flex-row items-center">
          <text class="prompt-login ml-12">请登录/注册</text>
        </view>
      </view>
    </view>
    <image class="config-icon" :src="configIcon" @click="onConfigClick" />
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          // name: null,
          // memberLevel: null,
          // avatar: "../../static/images/personal/default_avatar.png",

          name: "张三",
          memberLevel: "黄金会员",
          avatar:
            "https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=659cbd70f74ca3277758b6e49c56803d.png",
        };
      },
    },
  },
  data() {
    return {
      configIcon: "../../static/images/personal/config.png",
      memberLevelMapping: {
        黄金会员: "../../static/images/personal/star_coin.png",
      },
    };
  },

  methods: {
    onConfigClick() {
      this.$emit("config-click");
    },
    onMembershipClick() {
      this.$emit("membership-click");
    },
  },
};
</script>

<style scoped lang="less">
.ml-3 {
  margin-left: 6rpx;
}
.user-info-container {
  padding: 0 29rpx;
  .user-avatar {
    border-radius: 50%;
    width: 102rpx;
    height: 102rpx;
  }
  .user-name {
    font-size: 32rpx;
    font-family: 苹方;
    line-height: 29.76rpx;
    color: #000000;
  }
  .membership-section {
    background-color: #fff0d4;
    border-radius: 22rpx;
    .membership-icon {
      width: 44rpx;
      height: 44rpx;
    }
    .membership-text {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 22.28rpx;
      color: #2d2e32;
      margin-right: 6.7rpx;
    }
  }
  .config-icon {
    margin-right: 19rpx;
    width: 36rpx;
    height: 36rpx;
  }
  .prompt-login {
    font-size: 32rpx;
    font-family: 苹方;
    line-height: 29.76rpx;
    color: #000000;
  }
}
</style>
