<template>
  <view class="flex-col justify-start relative top">
    <view class="relative image-wrapper">
      <image class="image-cover pos" :src="coverImagUrl" />
    </view>
    <view class="flex-col m-info pos_info">
      <view class="flex-col items-start self-stretch relative">
        <view class="flex-col justify-start items-center level-tag"><text class="font-normal">当前等级</text></view>
        <text class="text-level mt-8">L1</text>
        <text class="font-xl mt-8">普通会员</text>
        <view v-if="isUnlock" class="flex-col justify-center items-center pos-right font-normal status-tag">
          已解锁
        </view>
        <view v-else class="flex-col justify-center items-center pos-right font-normal status-tag locking-status"
          >未解锁
        </view>
      </view>
      <view class="flex-col self-start progress mt-30">
        <view class="flex-row items-center progress-top" @click="onProgressClick">
          <text class="progress-text">0/150</text>
          <image class="arrow ml-4" src="/static/images/icon_right_arrow_01.png" />
        </view>
        <view class="flex-col justify-start self-start progress-body mt-6">
          <u-line-progress
            :percentage="percentage"
            :showText="false"
            height="8rpx"
            activeColor="#111111"
          ></u-line-progress>
        </view>
        <text class="self-start font-normal text-desp mt-6">当前等级已完成消费值累计</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {
      vipData: {
        type: Object,
        default: () => ({}),
      },
      isUnlock: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        percentage: '30',
        coverImagUrl:
          'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/9e4caf641f4400a8e29347fd544857fc.png',
      };
    },

    methods: {
      onProgressClick() {
        uni.navigateTo({ url: '/pages/personal/member/consumption/consumption' });
      },
    },
  };
</script>

<style scoped lang="less">
  .top {
    height: 1120rpx;
    .image-wrapper {
      height: 100%;
      .image-cover {
        width: 100%;
        height: 100%;
      }
      .pos {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    }
    .m-info {
      padding-left: 56rpx;
      .level-tag {
        padding: 8rpx 0;
        background-color: #000000;
        border-radius: 24rpx;
        width: 130rpx;
      }
      .text-level {
        margin-left: 8rpx;
        color: #111111;
        font-size: 48rpx;
        font-family: 'HarmonyOS_Sans_Bold';
        line-height: 56rpx;
      }
      .font-xl {
        color: #111111;
        font-size: 48rpx;
        font-family: 'PingFang SC';
        font-weight: 600;
        line-height: 66rpx;
      }
      .pos-right {
        position: absolute;
        right: 0rpx;
        top: 0rpx;
      }
      .status-tag {
        background-color: #111111;
        border-radius: 24rpx 0rpx 0rpx 24rpx;
        width: 120rpx;
        height: 48rpx;
      }
      .locking-status {
        background: #1111117f;
      }
      .font-normal {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        font-weight: 500;
        color: #ffffff;
      }
      .progress {
        width: 634rpx;
        .progress-top {
          padding: 0 8rpx;
          .progress-text {
            color: #111111;
            font-size: 24rpx;
            font-family: 'HarmonyOS_Sans_Bold';
            line-height: 30rpx;
          }
          .arrow {
            width: 7rpx;
            height: 14rpx;
          }
        }
        .progress-body {
          width: 234rpx;
        }
        .text-desp {
          color: #6d6d6d;
          font-size: 22rpx;
          line-height: 32rpx;
          font-weight: unset;
        }
      }
    }
    .pos_info {
      position: absolute;
      left: 0;
      right: 0;
      top: 100rpx;
    }
  }
</style>
