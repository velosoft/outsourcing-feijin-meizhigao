<template>
  <view class="flex-col justify-start relative page">
    <view class="flex-col group">
      <view class="flex-row justify-center items-center relative group_2">
        <text class="font text text_2">9:41 AM</text>
        <view class="flex-row items-center pos_2">
          <text class="font text text_3">100%</text>
          <image
            class="shrink-0 image"
            src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=1844ca254ebcd2fa8052347db6ea78c1.png"
          />
        </view>
      </view>
      <view class="flex-row justify-center items-center relative group_3 mt-8">
        <image
          class="image_2 pos_4"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=b4a99cb915f1a947b5d084dfd25f2155.png"
        />
        <text class="font_2 text_4">订单</text>
        <view class="flex-row items-center section_2 pos_3">
          <image
            class="image_4"
            src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=867365840a1a9b9665e5607366f4359a.png"
          />
          <image
            class="image_3 ml-24"
            src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=0b111ca90e1f998a526afc35e1fc6089.png"
          />
        </view>
      </view>
      <view class="flex-row items-center mt-8">
        <view class="flex-col items-center section_3">
          <text class="font_3 text_5">5</text>
          <text class="font_4 mt-11">进行中</text>
        </view>
        <view class="flex-col items-center group_4">
          <text class="font_3">5</text>
          <text class="font_5 mt-11">待启动</text>
        </view>
        <view class="flex-col items-center group_5">
          <text class="font_3">2</text>
          <text class="font_5 text_6 mt-11">已完成</text>
        </view>
      </view>
      <view class="flex-col section_4 mt-8">
        <view class="flex-row justify-between self-stretch">
          <text class="text_7">订单号：51651651681</text>
          <text class="font_6 text_8">进行中</text>
        </view>
        <text class="self-start font_5 text_9">定制测量（等待上门测量）</text>
        <view class="flex-col self-stretch section_5">
          <text class="self-start font_7 text_10">DIY定制收纳商品</text>
          <view class="self-start group_6 mt-13">
            <text class="font_8 text_11">预约上门时间：</text>
            <text class="font_7">2024-02-15</text>
            <text class="font_7 text_12">12:00:00</text>
          </view>
          <view class="flex-row items-baseline self-stretch mt-13">
            <text class="font_8 text_13">业主姓名：娃哈哈</text>
            <text class="font_8 text_14 ml-6">15812345678</text>
          </view>
          <text class="self-start font_8 text_15 mt-13"
            >地址：广州市天河区车陂南东宏国际广场12楼06号</text
          >
        </view>
        <view class="flex-row justify-end self-stretch group_7">
          <view class="flex-col justify-start text-wrapper"
            ><text class="font_8 text_16">修改上门时间</text></view
          >
          <view class="flex-col justify-start items-center text-wrapper_2 ml-8">
            <text class="font_4 text_17">确认已上门</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start section pos">
      <view class="flex-col section_6">
        <view class="flex-col">
          <view class="flex-row justify-center self-stretch relative section_7">
            <text class="self-start font_2 text_18">关联商品方案</text>
            <image
              class="self-center ai-outflow pos_5"
              src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=e3295e08b089bb05a183ac44451ce804.png"
            />
          </view>
          <text class="self-start text_19">商品方案访问地址</text>
          <u-input
            class="normal-input input"
            v-model="v_model"
            placeholder="请输入访问链接"
          ></u-input>
        </view>
        <view class="flex-col justify-start section_8 mt-64">
          <view
            class="flex-col justify-start items-center button text-wrapper_4"
          >
            <text class="font_6 text_21">确认提交</text>
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
      v_model: "",
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
  padding-bottom: 538rpx;
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group {
    margin-left: 24rpx;
    padding-top: 2rpx;
    .group_2 {
      padding: 8.7rpx 0 9.88rpx;
      .font {
        font-size: 24rpx;
        font-family: SF Pro Text;
        line-height: 17.54rpx;
        color: #000000;
      }
      .text {
        -webkit-text-stroke: 0.4rpx #000000;
      }
      .text_2 {
        line-height: 17.42rpx;
      }
      .pos_2 {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        .text_3 {
          line-height: 17.56rpx;
        }
        .image {
          width: 70rpx;
          height: 36rpx;
        }
      }
    }
    .group_3 {
      padding: 15.58rpx 9rpx 17.32rpx;
      .image_2 {
        width: 28rpx;
        height: 28rpx;
      }
      .pos_4 {
        position: absolute;
        left: 9rpx;
        top: 50%;
        transform: translateY(-50%);
      }
      .text_4 {
        line-height: 31.1rpx;
      }
      .section_2 {
        padding: 12.66rpx 25rpx 15.34rpx;
        background-color: #ffffff99;
        border-radius: 50rpx;
        border-left: solid 1rpx #97979733;
        border-right: solid 1rpx #97979733;
        border-top: solid 1rpx #97979733;
        border-bottom: solid 1rpx #97979733;
        .image_4 {
          width: 38rpx;
          height: 14rpx;
        }
        .image_3 {
          width: 34rpx;
          height: 34rpx;
        }
      }
      .pos_3 {
        position: absolute;
        right: 14rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .section_3 {
      padding: 35.86rpx 0 35.48rpx;
      background-image: url("https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=4543d25a1b291714672b61161bdbe9d2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 234rpx;
      height: 150rpx;
      .text_5 {
        color: #ffffff;
      }
    }
    .group_4 {
      margin-left: 80.96rpx;
    }
    .font_3 {
      font-size: 48rpx;
      font-family: PingFang SC Bold;
      line-height: 34.6rpx;
      font-weight: 700;
      color: #030305;
    }
    .group_5 {
      margin-left: 163.2rpx;
      .text_6 {
        line-height: 22.06rpx;
      }
    }
    .font_5 {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 22.18rpx;
      color: #999999;
    }
    .section_4 {
      margin-right: 24rpx;
      padding: 38.6rpx 24.2rpx 0 28rpx;
      background-color: #ffffff;
      border-radius: 12rpx;
      .text_7 {
        color: #030305;
        font-size: 28rpx;
        font-family: PingFang SC Bold;
        font-weight: 700;
        line-height: 25.62rpx;
      }
      .text_8 {
        color: #b1a76e;
        line-height: 25.88rpx;
      }
      .text_9 {
        margin-top: 25.48rpx;
        font-size: 26rpx;
        line-height: 24.36rpx;
      }
      .section_5 {
        margin-right: 3.8rpx;
        margin-top: 29.22rpx;
        padding: 34.02rpx 25rpx 29.42rpx;
        background-color: #f8f8f8;
        border-radius: 12rpx;
        .font_7 {
          font-size: 24rpx;
          font-family: PingFang SC Bold;
          line-height: 17.54rpx;
          font-weight: 700;
          color: #b1a76e;
        }
        .text_10 {
          color: #030305;
          font-size: 26rpx;
          line-height: 24.18rpx;
        }
        .group_6 {
          line-height: 22.08rpx;
          .text_11 {
            line-height: 22.08rpx;
          }
          .text_12 {
            margin-left: 14.82rpx;
          }
        }
        .text_13 {
          line-height: 22.06rpx;
        }
        .text_14 {
          line-height: 22.06rpx;
        }
        .text_15 {
          line-height: 22.52rpx;
        }
      }
      .group_7 {
        padding: 32rpx 3.8rpx;
        .text-wrapper {
          padding: 18.28rpx 0 17.54rpx;
          border-radius: 30rpx;
          height: 60rpx;
          border-left: solid 1rpx #b1a76e;
          border-right: solid 1rpx #b1a76e;
          border-top: solid 1rpx #b1a76e;
          border-bottom: solid 1rpx #b1a76e;
          .text_16 {
            margin-left: 19.92rpx;
            margin-right: 14.08rpx;
            color: #b1a76e;
          }
        }
        .text-wrapper_2 {
          padding: 20.28rpx 0 17.64rpx;
          background-color: #b1a76e;
          border-radius: 30rpx;
          width: 182rpx;
          height: 60rpx;
          .text_17 {
            line-height: 22.08rpx;
          }
        }
      }
      .font_8 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 22.18rpx;
        color: #707070;
      }
    }
    .font_4 {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 22.18rpx;
      color: #ffffff;
    }
  }
  .section {
    padding-top: 764rpx;
    background-color: #00000080;
    .section_6 {
      background-color: #ffffff;
      border-radius: 20rpx 20rpx 0rpx 0rpx;
      .section_7 {
        padding: 43.54rpx 24.82rpx 44.84rpx;
        background-color: #ffffff;
        border-radius: 20rpx 20rpx 0rpx 0rpx;
        .text_18 {
          font-size: 36rpx;
          line-height: 33.62rpx;
        }
        .ai-outflow {
          width: 58rpx;
          height: 58rpx;
        }
        .pos_5 {
          position: absolute;
          right: 24.82rpx;
          top: 25.18rpx;
        }
      }
      .text_19 {
        margin-left: 41.96rpx;
        margin-top: 26.92rpx;
        color: #030305;
        font-size: 32rpx;
        font-family: PingFang SC Bold;
        font-weight: 700;
        line-height: 29.7rpx;
      }
      .input {
        align-self: stretch;
        margin: 39.38rpx 40rpx 0;
      }
      .section_8 {
        padding: 20rpx 0;
        background-color: #ffffff;
        .button {
          margin: 0 32rpx;
          .text_21 {
            color: #ffffff;
            font-size: 30rpx;
            line-height: 27.58rpx;
          }
        }
        .text-wrapper_4 {
          padding: 31.36rpx 0 29.08rpx;
          background-color: #b1a76e;
          border-radius: 44rpx;
        }
      }
    }
  }
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .font_2 {
    font-size: 34rpx;
    font-family: PingFang SC Bold;
    font-weight: 700;
    color: #030305;
  }
  .font_6 {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 25.92rpx;
  }
}
</style>
