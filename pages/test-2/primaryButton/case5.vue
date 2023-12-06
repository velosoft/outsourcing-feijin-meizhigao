<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 group">
      <view class="flex-row items-center equal-division">
        <view class="flex-col items-center equal-division-item_2">
          <text class="font_2">5</text>
          <text class="font_3 text_1 mt-11">进行中</text>
        </view>
        <view class="flex-col items-center equal-division-item_3 ml-100">
          <text class="font_2">5</text>
          <text class="font_3 text_6 mt-11">待启动</text>
        </view>
        <view class="flex-col items-center equal-division-item ml-100">
          <text class="font_2 text_5">2</text>
          <text class="font_4 text_7 mt-11">已完成</text>
        </view>
      </view>
      <view class="flex-col self-stretch mt-10">
        <view
          class="flex-col list-item mt-10"
          v-for="(item, index) in items"
          :key="index"
        >
          <view class="flex-row justify-between self-stretch">
            <text class="font_5">订单号：51651651681</text>
            <text class="font_6">已完成</text>
          </view>
          <text class="self-start font_7 text_19">附加服务（已完成）</text>
          <view class="flex-col self-stretch section_2">
            <text class="self-start font_8 text_9">DIY定制收纳商品</text>
            <view class="self-start group_2 mt-13">
              <text class="font_9">预约上门时间：</text>
              <text class="font_10">2024-02-15</text>
              <text class="font_10 text_20">12:00:00</text>
            </view>
            <view class="flex-row items-baseline self-stretch mt-13">
              <text class="font_9 text_11">业主姓名：娃哈哈</text>
              <text class="font_9 text_12 ml-6">15812345678</text>
            </view>
            <text class="self-start font_9 text_13 mt-13"
              >地址：广州市天河区车陂南东宏国际广场12楼06号</text
            >
          </view>
          <u-button class="primary-btn text-wrapper" text="组件清单"></u-button>
        </view>
      </view>
    </view>
    <view class="flex-row justify-between tab-bar">
      <view class="flex-col items-center group_3">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=1e384ce9239325fbbf2a409d99b202e2.png"
        />
        <text class="font_11 text_14 mt-6">工作台</text>
      </view>
      <view class="flex-col items-center group_4">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=3558dc250a446fbbac5fc7aa6bbaaffe.png"
        />
        <text class="font_11 text_15 mt-6">订单</text>
      </view>
      <view class="flex-col items-center group_5">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=388c95366565fae7649c63345be535bc.png"
        />
        <text class="font_11 text_16 mt-6">我的客户</text>
      </view>
      <view class="flex-col items-center group_6">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=19d673462d84b52b1a7632b85f0c569d.png"
        />
        <text class="font_11 text_17 mt-6">个人中心</text>
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
      items: [null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-11 {
  margin-top: 22rpx;
}
.mt-13 {
  margin-top: 26rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group {
    padding: 12rpx 24rpx 48rpx;
    overflow-y: auto;
    .equal-division {
      align-self: flex-end;
      .equal-division-item_2 {
        padding: 10.46rpx 0 10rpx;
        .text_1 {
          line-height: 22.18rpx;
        }
      }
      .equal-division-item_3 {
        padding: 10.46rpx 0 10.1rpx;
        .text_6 {
          line-height: 22.18rpx;
        }
      }
      .font_2 {
        font-size: 48rpx;
        font-family: PingFang SC Bold;
        line-height: 34.6rpx;
        font-weight: 700;
        color: #030305;
      }
      .font_3 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 22.08rpx;
        color: #999999;
      }
      .equal-division-item {
        padding: 35.4rpx 0 35.54rpx;
        background-image: url("https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=4543d25a1b291714672b61161bdbe9d2.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 150rpx;
        .text_5 {
          color: #ffffff;
        }
        .font_4 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.08rpx;
          color: #ffffff;
        }
        .text_7 {
          line-height: 22.06rpx;
        }
      }
    }
    .list-item {
      padding: 38.6rpx 21.48rpx 32rpx 28rpx;
      background-color: #ffffff;
      border-radius: 12rpx;
      &:first-child {
        margin-top: 0;
      }
      .font_5 {
        font-size: 28rpx;
        font-family: PingFang SC Bold;
        line-height: 25.62rpx;
        font-weight: 700;
        color: #030305;
      }
      .font_6 {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 25.74rpx;
        color: #999999;
      }
      .font_7 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24.28rpx;
        color: #999999;
      }
      .text_19 {
        margin-left: 2.26rpx;
        margin-top: 25.64rpx;
        font-size: 26rpx;
      }
      .section_2 {
        margin-right: 6.52rpx;
        margin-top: 29.22rpx;
        padding: 34.02rpx 25rpx 29.42rpx;
        background-color: #f8f8f8;
        border-radius: 12rpx;
        .font_8 {
          font-size: 24rpx;
          font-family: PingFang SC Bold;
          line-height: 24.18rpx;
          font-weight: 700;
          color: #030305;
        }
        .text_9 {
          font-size: 26rpx;
        }
        .group_2 {
          line-height: 22.08rpx;
          .font_10 {
            font-size: 24rpx;
            font-family: PingFang SC Bold;
            line-height: 17.54rpx;
            font-weight: 700;
            color: #b1a76e;
          }
          .text_20 {
            margin-left: 14.82rpx;
          }
        }
        .font_9 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.08rpx;
          color: #707070;
        }
        .text_11 {
          line-height: 22.06rpx;
        }
        .text_12 {
          line-height: 22.06rpx;
        }
        .text_13 {
          line-height: 22.52rpx;
        }
      }
      .text-wrapper {
        align-self: flex-end;
        margin-right: 6.52rpx;
        margin-top: 32rpx;
      }
    }
  }
  .tab-bar {
    padding: 12.32rpx 49.22rpx 15.9rpx 57.38rpx;
    background-color: #ffffff;
    .group_3 {
      width: 82rpx;
      height: 83.64rpx;
      .text_14 {
        line-height: 18.38rpx;
      }
    }
    .group_4 {
      width: 82rpx;
      height: 83rpx;
      .text_15 {
        color: #b1a76e;
        line-height: 18.4rpx;
      }
    }
    .image_5 {
      width: 54rpx;
      height: 54rpx;
    }
    .font_11 {
      font-size: 20rpx;
      font-family: 苹方;
      line-height: 17.54rpx;
      color: #b3b3b3;
    }
    .group_5 {
      height: 83.04rpx;
      .text_16 {
        line-height: 18.48rpx;
      }
    }
    .group_6 {
      height: 83.1rpx;
      .text_17 {
        line-height: 18.48rpx;
      }
    }
  }
}
</style>
