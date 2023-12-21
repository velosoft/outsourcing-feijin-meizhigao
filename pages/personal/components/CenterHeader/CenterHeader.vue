<template>
  <view class="flex-row justify-between items-center">
    <view class="flex-row items-center ml-4">
      <view class="flex-col justify-center items-center shrink-0 image-wrapper">
        <image
          :class="'avatar' + (personal.hasLogin ? '' : ' default-avartar-size')"
          :src="personal.hasLogin ? personal.avatar : defaultAvatarSrc"
        />
      </view>

      <view class="flex-col ml-12 justify-center">
        <view class="flex-col items-start self-start">
          <text class="text" v-if="personal.hasLogin">{{ personal.nickname }}</text>
          <text class="text" v-else>请登录/注册</text>
        </view>
        <view class="flex-row items-center member-box mt-4 self-end" @click="onClick" v-if="personal.hasLogin">
          <image class="icon-member" src="/static/images/icon_member.png" />
          <text class="text-member ml-2">{{ personal.memberType }}</text>
        </view>
      </view>
    </view>
    <image class="icon-settings" src="/static/images/icon_settings.png" @click="onClick_1" />
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      personal: {
        type: Object,
        default: () => ({
          avatar: '/static/images/mock_avatar.png',
          nickname: '辉煌G891',
          memberType: '黄金会员',
          hasLogin: true,
        }),
      },
    },
    data() {
      return {
        defaultAvatarSrc: '/static/images/default_avatar.png',
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/member/member/member' });
      },
      onClick_1() {
        uni.navigateTo({ url: '/pages/personal/profile/profile/profile' });
      },
    },
  };
</script>

<style scoped lang="less">
  .avatar {
    width: 104rpx;
    height: 104rpx;
  }
  .text {
    font-size: 32rpx;
    font-family: 'PingFang SC';
    line-height: 44rpx;
    font-weight: 500;
    color: #000000;
  }
  .member-box {
    background-color: #fff0d4;
    border-radius: 24rpx;
    width: 154rpx;
    .icon-member {
      width: 44rpx;
      height: 44rpx;
    }
    .text-member {
      color: #987a42;
      font-size: 24rpx;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 44rpx;
    }
  }
  .icon-settings {
    margin-right: 28rpx;
    width: 36rpx;
    height: 36rpx;
  }

  .image-wrapper {
    background-color: #e5e5e5;
    border-radius: 50%;
    width: 102rpx;
    height: 102rpx;
    border-left: solid 2rpx #ffffff;
    border-right: solid 2rpx #ffffff;
    border-top: solid 2rpx #ffffff;
    border-bottom: solid 2rpx #ffffff;

    overflow: hidden;
  }
  .default-avartar-size {
    width: 54rpx;
    height: 62rpx;
  }
</style>
