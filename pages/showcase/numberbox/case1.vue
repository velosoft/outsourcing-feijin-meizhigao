<template>
  <view class="flex-col justify-start relative page">
    <view class="flex-col justify-start relative">
      <view class="flex-col justify-start items-center relative">
        <image
          class="ai-background-image"
          src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=3e12511378cbcade5df38ce1933fa415.png"
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
          src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=d7b8c27d3e7a0a8f2c9a9a55a3c9e08a.png"
        />
      </view>
      <view class="section_2 pos_3"></view>
    </view>
    <view class="flex-col justify-start section pos">
      <view class="flex-col section_4">
        <view class="flex-col">
          <view class="flex-row self-stretch relative group">
            <text class="text_4 pos_11">秒杀价</text>
            <text class="font_3 text_6 pos_13">200</text>
            <text class="font_2 text_5 pos_12">￥</text>
            <text class="font_3 text_7 pos_14">.00</text>
            <text class="font_4 text_8 pos_15">库存：999件</text>
            <text class="font_4 text_9 pos_16"
              >请选择规格 / 已选：3层80长*40宽*170高</text
            >
            <view class="flex-col group_2 pos_9">
              <view class="flex-col justify-start text-wrapper">
                <text class="font_4 text_10">3层60长*40宽*170高可加高加层</text>
              </view>
              <view class="flex-col justify-start text-wrapper_2 view">
                <text class="font_4 text_11">3层80长*40宽*170高可加高加层</text>
              </view>
              <image
                class="ai-outflow pos_10"
                src="https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=dd8e5342e64de2e649a4e4e8d4213382.png"
              />
            </view>
          </view>
          <view class="flex-col justify-start self-start text-wrapper_2 view_2">
            <text class="font_4 text_11">3层80长*40宽*170高可加高加层</text>
          </view>
        </view>
        <view class="flex-row justify-between items-center group_3">
          <text class="font_2 text_12">购买数量</text>
          <u-number-box v-model="numberBoxVal" :min="0"></u-number-box>
        </view>
        <view class="flex-col justify-start items-center button text-wrapper_4">
          <text class="font_2 text_14">下一步</text>
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
      numberBoxVal: "0",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  padding-bottom: 302rpx;
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .ai-background-image {
    width: 100vw;
    height: 137.6vw;
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
  .section_2 {
    background-color: #00000000;
    height: 20rpx;
  }
  .pos_3 {
    position: absolute;
    left: 12rpx;
    right: 670rpx;
    top: 9rpx;
  }
  .section {
    padding-top: 366rpx;
    background-color: #00000080;
    .section_4 {
      padding: 23rpx 27.5rpx 40rpx;
      background-color: #ffffff;
      border-radius: 20rpx 20rpx 0rpx 0rpx;
      .group {
        padding: 35.08rpx 25.44rpx 295.98rpx;
        height: 475rpx;
        .text_4 {
          color: #bb3e0c;
          font-size: 26rpx;
          font-family: PingFangSC-Medium;
          line-height: 24.2rpx;
        }
        .pos_11 {
          position: absolute;
          left: 209.28rpx;
          top: 35.08rpx;
        }
        .font_3 {
          font-size: 32rpx;
          font-family: HarmonyOSSansSC;
          line-height: 24.06rpx;
          font-weight: 700;
          color: #bb3e0c;
        }
        .text_6 {
          line-height: 24.26rpx;
        }
        .pos_13 {
          position: absolute;
          left: 50%;
          top: 35.14rpx;
          transform: translateX(-50%);
        }
        .text_5 {
          color: #bb3e0c;
          line-height: 23.08rpx;
        }
        .pos_12 {
          position: absolute;
          left: 290.46rpx;
          top: 35.92rpx;
        }
        .text_7 {
          line-height: 24.32rpx;
        }
        .pos_14 {
          position: absolute;
          right: 268.94rpx;
          top: 35.14rpx;
        }
        .text_8 {
          font-size: 28rpx;
          line-height: 25.84rpx;
        }
        .pos_15 {
          position: absolute;
          left: 209.82rpx;
          top: 87.16rpx;
        }
        .text_9 {
          color: #a7a7a7;
          font-size: 24rpx;
          line-height: 22.2rpx;
        }
        .pos_16 {
          position: absolute;
          right: 25.44rpx;
          top: 156.82rpx;
        }
        .group_2 {
          padding-left: 4.5rpx;
          padding-top: 309rpx;
          .text-wrapper {
            padding: 22.02rpx 0 13.94rpx;
            border-radius: 32rpx;
            width: 450rpx;
            border-left: solid 2rpx #b09053;
            border-right: solid 2rpx #b09053;
            border-top: solid 2rpx #b09053;
            border-bottom: solid 2rpx #b09053;
            .text_10 {
              margin-left: 31.48rpx;
              margin-right: 18.52rpx;
              color: #b09053;
            }
          }
          .view {
            margin-top: 18rpx;
          }
          .ai-outflow {
            width: 188rpx;
            height: 408rpx;
          }
          .pos_10 {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        .pos_9 {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .text-wrapper_2 {
        padding: 22.02rpx 0 13.94rpx;
        border-radius: 32rpx;
        width: 450rpx;
        border-left: solid 2rpx #e1e4eb;
        border-right: solid 2rpx #e1e4eb;
        border-top: solid 2rpx #e1e4eb;
        border-bottom: solid 2rpx #e1e4eb;
        .text_11 {
          margin-left: 31.48rpx;
          margin-right: 18.52rpx;
        }
      }
      .view_2 {
        margin-left: 4.5rpx;
      }
      .font_4 {
        font-size: 26rpx;
        font-family: 苹方;
        line-height: 24.06rpx;
        color: #6c6c6c;
      }
      .group_3 {
        margin-top: 120rpx;
        padding-left: 5.64rpx;
        padding-right: 4.5rpx;
        .text_12 {
          color: #030305;
          font-size: 30rpx;
        }
      }
      .font_2 {
        font-size: 32rpx;
        font-family: PingFangSC-Medium;
        line-height: 27.72rpx;
      }
      .button {
        margin: 108rpx 4.5rpx 0;
        .text_14 {
          color: #ffffff;
          font-size: 30rpx;
          line-height: 27.58rpx;
        }
      }
      .text-wrapper_4 {
        padding: 30.8rpx 0 29.64rpx;
        background-image: url("https://dev.ft.velosoft.cn/api/image?token=6576ad25740f740012ac3960&name=92ba6753da7f17bf378ac6064743d3be.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
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
}
</style>
