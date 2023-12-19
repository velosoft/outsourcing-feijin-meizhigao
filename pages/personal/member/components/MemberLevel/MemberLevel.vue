<template>
  <view class="flex-col wrap">
    <view class="self-stretch header-wrap flex-row justify-between">
      <view class="flex-col items-start">
        <view class="flex-col items-center text-wrapper"><text class="font">当前等级</text></view>
        <text class="level-num">{{levle.level}}</text>
        <text class="level-desc">{{levle.label}}</text>
      </view>
      <view class="flex-col">
        <view class="flex-col justify-start items-center button" v-if="true"><text class="font">已解锁</text></view>
        <view class="flex-col justify-start items-center button-normal" v-if="false">
          <text class="font">未解锁</text>
        </view>
      </view>
    </view>
    <view class="flex-col self-start group mt-30">
      <view class="flex-row items-center progress-wrap self-start" @click="onClick">
        <text class="level-progress">{{levle.consumption}}</text>
        <image class="icon-arrow ml-4" src="../../../../../static/images/0a76c34e2c273ba8a80d0b5ad42767eb.png" />
      </view>
      <view class="flex-col justify-start self-start line-width">
        <u-line-progress
          :percentage="levle.progress"
          :showText="false"
          :height="4"
          activeColor="#111111"
          inactiveColor="#ffffff"
        ></u-line-progress>
      </view>
      <view class="flex-col items-start self-start level-label-wrap">
        <text class="level-label text_6" v-if="true">当前等级已完成消费值累计</text>
        <text class="level-label text_7" v-if="false">当前还差1950消费值可解锁该等级</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      levle: {
        type: Object,
        default: () => ({ level: 'L1', label: '普通会员', consumption: '0/150', progress: 100, difference: 100 }),
      },
    },
    data() {
      return {};
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/member/consumption/consumption' });
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding-left: 56rpx;
    .header-wrap {
      height: 182rpx;
      align-items: flex-start;
      .text-wrapper {
        padding: 8rpx 0;
        background-color: #000000;
        border-radius: 24rpx;
        width: 130rpx;
      }
      .level-num {
        margin-left: 8rpx;
        color: #111111;
        font-size: 48rpx;
        font-family: '.AppleSystemUIFont';
        line-height: 56rpx;
      }
      .level-desc {
        margin-top: 12rpx;
        color: #111111;
        font-size: 48rpx;
        font-family: 'PingFang SC';
        font-weight: 600;
        line-height: 66rpx;
      }
      .button {
        padding: 8rpx 0;
        background-color: #111111;
        border-radius: 24rpx 0rpx 0rpx 24rpx;
        width: 120rpx;
      }
      .font {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        font-weight: 500;
        color: #ffffff;
      }
      .button-normal {
        padding: 8rpx 0;
        background-color: #979797;
        border-radius: 24rpx 0rpx 0rpx 24rpx;
        width: 120rpx;
      }
    }
    .group {
      width: 634rpx;
      .progress-wrap {
        padding: 0 8rpx 8rpx;
        .level-progress {
          color: #111111;
          font-size: 24rpx;
          font-family: '.AppleSystemUIFont';
          line-height: 30rpx;
        }
        .icon-arrow {
          width: 10rpx;
          height: 16rpx;
        }
      }
      .line-width {
        width: 234rpx;
      }
      .level-label-wrap {
        margin-top: 12rpx;
        .level-label {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #6d6d6d;
        }
        .text_6 {
          font-size: 22rpx;
          line-height: 32rpx;
        }
        .text_7 {
          font-size: 22rpx;
          line-height: 32rpx;
        }
      }
    }
  }
</style>