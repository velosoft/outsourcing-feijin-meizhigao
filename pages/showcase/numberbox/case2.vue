<template>
  <view class="flex-col justify-start items-center relative page">
    <image
      class="ai-background-image"
      src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=14abf711903187dbff4834a955aba063.png"
    />
    <image
      class="image_2 pos_7"
      src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=b4a99cb915f1a947b5d084dfd25f2155.png"
    />
    <image
      class="image pos_2"
      src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=1844ca254ebcd2fa8052347db6ea78c1.png"
    />
    <text class="font text text_3 pos_5">100%</text>
    <text class="font text text_2 pos_4">9:41 AM</text>
    <view class="flex-row justify-between items-center section_3 pos_6">
      <image
        class="image_4"
        src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=867365840a1a9b9665e5607366f4359a.png"
      />
      <image
        class="image_3"
        src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=0b111ca90e1f998a526afc35e1fc6089.png"
      />
    </view>
    <image
      class="ai-background-image_2 pos_8"
      src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=91fe78ba8f3b4cc4f16b50db3f9cdecb.png"
    />
    <view class="flex-col justify-start section pos">
      <view class="flex-col section_4">
        <view class="flex-row">
          <view class="flex-col justify-start flex-1 relative">
            <view class="flex-col justify-start items-start relative group">
              <view class="flex-col justify-start items-start text-wrapper">
                <text class="font_2 text_10">类型</text>
              </view>
              <view class="flex-row pos_15">
                <view
                  class="flex-col justify-start items-center button text-wrapper_2"
                >
                  <text class="font_5 text_11">按延米核算（元/m)</text>
                </view>
                <view
                  class="flex-col justify-start items-center button text-wrapper_3 ml-9"
                >
                  <text class="font_5">按面积核算（元/m)</text>
                </view>
              </view>
              <view
                class="flex-col justify-start items-center text-wrapper_4 pos_16"
              >
                <text class="font_5">按小时核算（元/人/h)</text>
              </view>
            </view>
            <text class="font_2 text_4 pos_9">秒杀价</text>
            <text class="font_4 text_6 pos_11">200</text>
            <text class="font_3 text_5 pos_10">￥</text>
            <text class="font_4 text_7 pos_12">.00</text>
            <text class="font_5 text_8 pos_13">库存：999件</text>
            <text class="font_5 text_9 pos_14"
              >请选择规格 / 已选：按延米核算（元/m)</text
            >
          </view>
          <image
            class="self-start ai-outflow ml-2"
            src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=ca2d4952ece1178a3b16795240ffd2b4.png"
          />
        </view>
        <view class="flex-row justify-between items-center group_2">
          <text class="font_3 text_12">预约数量</text>
          <u-number-box v-model="v_model"></u-number-box>
        </view>
        <view
          class="flex-col justify-start items-center button_2 text-wrapper_6"
        >
          <text class="font_3 text_14">下一步</text>
        </view>
      </view>
    </view>
    <view class="section_2 pos_3"></view>
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
.ml-9 {
  margin-left: 18rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .ai-background-image {
    width: 100vw;
    height: 177.8667vw;
  }
  .image_2 {
    width: 28rpx;
    height: 28rpx;
  }
  .pos_7 {
    position: absolute;
    left: 33rpx;
    top: 69rpx;
  }
  .image {
    width: 70rpx;
    height: 36rpx;
  }
  .pos_2 {
    position: absolute;
    right: 0;
    top: 0;
  }
  .font {
    font-size: 26rpx;
    font-family: SF Pro Text;
    line-height: 17.56rpx;
    color: #000000;
  }
  .text {
    -webkit-text-stroke: 0.4rpx #000000;
  }
  .text_3 {
    font-size: 24rpx;
  }
  .pos_5 {
    position: absolute;
    right: 70.3rpx;
    top: 10.7rpx;
  }
  .text_2 {
    font-size: 24rpx;
    line-height: 17.42rpx;
  }
  .pos_4 {
    position: absolute;
    left: 50%;
    top: 10.7rpx;
    transform: translateX(-50%);
  }
  .section_3 {
    padding: 12.66rpx 25rpx 15.34rpx;
    background-color: #ffffff99;
    border-radius: 50rpx;
    width: 174rpx;
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
  .pos_6 {
    position: absolute;
    right: 14rpx;
    top: 52rpx;
  }
  .ai-background-image_2 {
    opacity: 0.3;
    width: 116rpx;
    height: 116rpx;
  }
  .pos_8 {
    position: absolute;
    left: 50%;
    top: 316rpx;
    transform: translateX(-50%);
  }
  .section {
    padding-top: 366rpx;
    background-color: #00000080;
    .section_4 {
      padding: 23rpx 24.82rpx 40rpx 27.5rpx;
      background-color: #ffffff;
      border-radius: 20rpx 20rpx 0rpx 0rpx;
      .group {
        margin-right: 33.06rpx;
        padding-bottom: 49rpx;
        .text-wrapper {
          padding: 255.5rpx 0 126.76rpx;
          background-image: url("https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=bd7cc71b9c708898a65ff370359778a5.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 188rpx;
          .text_10 {
            margin-left: 5.78rpx;
            color: #030305;
            font-size: 28rpx;
            line-height: 25.74rpx;
          }
        }
        .pos_15 {
          position: absolute;
          left: 4.5rpx;
          right: 0;
          top: 309rpx;
          .button {
            flex: 1 1 290rpx;
            .text_11 {
              color: #b09053;
            }
          }
          .text-wrapper_2 {
            padding: 15.9rpx 0 19.82rpx;
            border-radius: 32rpx;
            height: 64rpx;
            border-left: solid 2rpx #b09053;
            border-right: solid 2rpx #b09053;
            border-top: solid 2rpx #b09053;
            border-bottom: solid 2rpx #b09053;
          }
          .text-wrapper_3 {
            padding: 15.9rpx 0 19.82rpx;
            border-radius: 32rpx;
            height: 64rpx;
            border-left: solid 2rpx #e1e4eb;
            border-right: solid 2rpx #e1e4eb;
            border-top: solid 2rpx #e1e4eb;
            border-bottom: solid 2rpx #e1e4eb;
          }
        }
        .text-wrapper_4 {
          padding: 15.9rpx 0 19.82rpx;
          border-radius: 32rpx;
          width: 322rpx;
          border-left: solid 2rpx #e1e4eb;
          border-right: solid 2rpx #e1e4eb;
          border-top: solid 2rpx #e1e4eb;
          border-bottom: solid 2rpx #e1e4eb;
        }
        .pos_16 {
          position: absolute;
          left: 4.5rpx;
          top: 393rpx;
        }
      }
      .font_2 {
        font-size: 26rpx;
        font-family: PingFangSC-Medium;
        line-height: 24.28rpx;
      }
      .text_4 {
        color: #bb3e0c;
        line-height: 24.2rpx;
      }
      .pos_9 {
        position: absolute;
        left: 209.28rpx;
        top: 21.08rpx;
      }
      .font_4 {
        font-size: 32rpx;
        font-family: HarmonyOSSansSC;
        line-height: 24.28rpx;
        font-weight: 700;
        color: #bb3e0c;
      }
      .text_6 {
        line-height: 24.26rpx;
      }
      .pos_11 {
        position: absolute;
        right: 259.58rpx;
        top: 21.14rpx;
      }
      .font_3 {
        font-size: 32rpx;
        font-family: PingFangSC-Medium;
      }
      .text_5 {
        color: #bb3e0c;
        line-height: 23.08rpx;
      }
      .pos_10 {
        position: absolute;
        left: 290.46rpx;
        top: 21.92rpx;
      }
      .text_7 {
        line-height: 24.32rpx;
      }
      .pos_12 {
        position: absolute;
        right: 209.5rpx;
        top: 21.14rpx;
      }
      .font_5 {
        font-size: 26rpx;
        font-family: 苹方;
        line-height: 24.28rpx;
        color: #6c6c6c;
      }
      .text_8 {
        font-size: 28rpx;
        line-height: 25.84rpx;
      }
      .pos_13 {
        position: absolute;
        left: 209.82rpx;
        top: 87.16rpx;
      }
      .text_9 {
        color: #a7a7a7;
        font-size: 24rpx;
        line-height: 22.42rpx;
      }
      .pos_14 {
        position: absolute;
        right: 0;
        top: 156.76rpx;
      }
      .ai-outflow {
        margin-top: 2.18rpx;
        width: 58rpx;
        height: 58rpx;
      }
      .group_2 {
        margin-top: 204rpx;
        padding: 0 5.64rpx;
        .text_12 {
          color: #030305;
          font-size: 30rpx;
          line-height: 27.72rpx;
        }
      }
      .button_2 {
        margin: 108rpx 7.18rpx 0 4.5rpx;
        .text_14 {
          color: #ffffff;
          font-size: 30rpx;
          line-height: 27.58rpx;
        }
      }
      .text-wrapper_6 {
        padding: 30.8rpx 0 29.64rpx;
        background-color: #b09053;
        border-radius: 44rpx;
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
  .section_2 {
    background-color: #00000000;
    width: 68rpx;
    height: 20rpx;
  }
  .pos_3 {
    position: absolute;
    left: 12rpx;
    top: 9rpx;
  }
}
</style>
