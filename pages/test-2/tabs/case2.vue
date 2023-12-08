<template>
  <view class="flex-col page">
    <view class="flex-col group_1">
      <view class="flex-row justify-center items-center relative group">
        <image
          class="ai-outflow pos"
          src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=2a35b7630fde54a78b18bf56cda32500.png"
        />
        <text class="font text">9:41 AM</text>
        <view class="flex-row items-center pos_2">
          <image
            class="shrink-0 image"
            src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=7b9bd47b1277b32be853a66a5dcb0d05.png"
          />
          <text class="font text text_2 ml-5">100%</text>
          <image
            class="shrink-0 image_2 ml-5"
            src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=0383dc4491d58f1893e6926196143727.png"
          />
        </view>
      </view>
      <view class="flex-col group_2">
        <view class="flex-row justify-center relative group_3">
          <image
            class="self-start image_3 pos_4"
            src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=b4a99cb915f1a947b5d084dfd25f2155.png"
          />
          <text class="self-center font_2 text_3">客户详情</text>
          <view class="flex-row items-center section pos_3">
            <image
              class="image_5"
              src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=867365840a1a9b9665e5607366f4359a.png"
            />
            <image
              class="image_4 ml-24"
              src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=0b111ca90e1f998a526afc35e1fc6089.png"
            />
          </view>
        </view>
        <view class="flex-row group_4">
          <image
            class="shrink-0 image_6"
            src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=f4856a61b70f7a50441239670e533819.png"
          />
          <view class="flex-col flex-1 group_5 ml-15">
            <view class="flex-row justify-between">
              <view class="flex-row">
                <text class="font_3">胡海时</text>
                <view class="flex-col justify-start shrink-0 text-wrapper ml-6">
                  <text class="text_5">男 | 25岁 | 广州</text>
                </view>
              </view>
              <image
                class="image_7"
                src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=f1898d4024e24643379fc31a7d675393.png"
              />
            </view>
            <view class="flex-row mt-11">
              <text class="font_4 text_6">手机号：13588888888</text>
              <image
                class="image_8"
                src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=e50c40c31cbebe1bfa83d8a25e631cf4.png"
              />
            </view>
            <view class="flex-row mt-11">
              <text class="font_4 text_7">渠道：抖音-短视频</text>
              <text class="font_4 text_8 ml-13">| 跟进时间：2022-02-09</text>
            </view>
          </view>
        </view>
        <view class="flex-row group_6">
          <view class="flex-col justify-start text-wrapper_1"
            ><text class="font_5 text_10">重要战略客户</text></view
          >
          <view class="flex-col justify-start text-wrapper_2 ml-6"
            ><text class="font_5 text_11">高意愿的客户</text></view
          >
          <view class="flex-col justify-start text-wrapper_1 ml-6"
            ><text class="font_4 text_12">很重要的客户</text></view
          >
          <view class="flex-row section_2 ml-6">
            <text class="font_4 text_13">编辑</text>
            <image
              class="shrink-0 image_9"
              src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=3da10105af0901795cfd7edcb0614b38.png"
            />
          </view>
        </view>
      </view>
      <v-tabs
        class="group_8"
        v-model="activeTab"
        v-bind:scroll="false"
        v-bind:tabs="tabs"
        lineHeight="6rpx"
        v-bind:lineScale="0.2"
        lineColor="#b1a76e"
        padding="0 22rpx"
        bgColor="#f8f8f8"
      ></v-tabs>
      <view class="flex-col justify-start">
        <view class="flex-col list">
          <view
            class="flex-col list-item mt-10"
            v-for="(item, index) in items"
            :key="index"
          >
            <view class="flex-row justify-between items-center group_9">
              <view class="flex-row">
                <text class="font_2 text_17">2023-05-05</text>
                <text class="font_2 text_18 ml-6">12:00</text>
              </view>
              <view class="flex-row">
                <image
                  class="ai-outflow_2"
                  src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=c66764c83fe2018b8872c4784af5e324.png"
                />
                <image
                  class="ai-outflow_2 ml-20"
                  src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=c5b43fdde1f2b4013d6cf2ae4cdab09d.png"
                />
              </view>
            </view>
            <view class="flex-col section_4">
              <text class="self-start font_4 text_19">跟进客户：张三</text>
              <text class="self-start font_4 text_20 mt-14"
                >跟进方式：线下</text
              >
              <view class="flex-row items-baseline self-stretch mt-14">
                <text class="font_4">预计下次跟进时间：2023-05-05</text>
                <text class="font_4">12:00</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start section_5 mt-26">
      <view class="flex-col justify-start items-center button text-wrapper_3">
        <text class="font_6 text_21">新增跟进记录</text>
      </view>
    </view>
  </view>
</template>

<script>
import vTabs from "../../../components/v-tabs/v-tabs.vue";

export default {
  components: { vTabs },
  props: {},
  data() {
    return {
      tabs: ["专属标注", "跟进记录", "消费记录"],
      activeTab: "0",
      items: [null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.ml-5 {
  margin-left: 10rpx;
}
.ml-15 {
  margin-left: 30rpx;
}
.mt-11 {
  margin-top: 22rpx;
}
.ml-13 {
  margin-left: 26rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_1 {
    padding-top: 7rpx;
    .group {
      padding: 3.7rpx 10rpx 3.88rpx 11.5rpx;
      .ai-outflow {
        width: 70rpx;
        height: 20rpx;
      }
      .pos {
        position: absolute;
        left: 11.5rpx;
        top: 50%;
        transform: translateY(-50%);
      }
      .font {
        font-size: 24rpx;
        font-family: SF Pro Text;
        line-height: 17.42rpx;
        color: #000000;
      }
      .text {
        -webkit-text-stroke: 0.4rpx #000000;
      }
      .pos_2 {
        position: absolute;
        right: 10rpx;
        top: 50%;
        transform: translateY(-50%);
        .image {
          width: 14rpx;
          height: 24rpx;
        }
        .text_2 {
          line-height: 17.56rpx;
        }
        .image_2 {
          width: 54rpx;
          height: 24rpx;
        }
      }
    }
    .group_2 {
      margin: 26rpx 14rpx 0 32rpx;
      .group_3 {
        padding: 13.14rpx 0 19.08rpx;
        .image_3 {
          width: 28rpx;
          height: 28rpx;
        }
        .pos_4 {
          position: absolute;
          left: 1rpx;
          top: 11rpx;
        }
        .text_3 {
          font-size: 34rpx;
          line-height: 31.78rpx;
        }
        .section {
          padding: 12.66rpx 25rpx 15.34rpx;
          background-color: #ffffff99;
          border-radius: 50rpx;
          border-left: solid 1rpx #97979733;
          border-right: solid 1rpx #97979733;
          border-top: solid 1rpx #97979733;
          border-bottom: solid 1rpx #97979733;
          .image_5 {
            width: 38rpx;
            height: 14rpx;
          }
          .image_4 {
            width: 34rpx;
            height: 34rpx;
          }
        }
        .pos_3 {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .group_4 {
        margin-top: 26rpx;
        .image_6 {
          width: 140rpx;
          height: 140rpx;
        }
        .group_5 {
          margin: 4rpx 18rpx 6.64rpx 0;
          .font_3 {
            font-size: 32rpx;
            font-family: PingFang SC Bold;
            line-height: 29.56rpx;
            font-weight: 700;
            color: #030305;
          }
          .text-wrapper {
            padding: 4.8rpx 0 5.2rpx;
            border-radius: 4rpx;
            height: 32rpx;
            border-left: solid 1rpx #d3d3d3;
            border-right: solid 1rpx #d3d3d3;
            border-top: solid 1rpx #d3d3d3;
            border-bottom: solid 1rpx #d3d3d3;
            .text_5 {
              margin-left: 7.34rpx;
              margin-right: 10.66rpx;
              color: #6c6c6c;
              font-size: 20rpx;
              font-family: 苹方;
              line-height: 20rpx;
            }
          }
          .image_7 {
            border-radius: 2rpx;
            width: 38rpx;
            height: 36rpx;
          }
          .text_6 {
            font-size: 26rpx;
            line-height: 23.74rpx;
          }
          .image_8 {
            width: 22rpx;
            height: 26rpx;
          }
          .text_7 {
            line-height: 22.22rpx;
          }
          .text_8 {
            color: #999999;
            line-height: 24rpx;
          }
        }
      }
      .group_6 {
        margin-top: 40rpx;
        .text-wrapper_1 {
          padding: 7.92rpx 0 9.76rpx;
          background-color: #f8f8f8;
          border-radius: 8rpx;
          height: 40rpx;
          border-left: solid 1rpx #e0e0e0;
          border-right: solid 1rpx #e0e0e0;
          border-top: solid 1rpx #e0e0e0;
          border-bottom: solid 1rpx #e0e0e0;
          .text_10 {
            margin-left: 11.3rpx;
            margin-right: 8.7rpx;
            font-size: 22rpx;
            line-height: 20.32rpx;
          }
          .text_12 {
            margin-left: 10.9rpx;
            margin-right: 9.1rpx;
            color: #aaaaaa;
            font-size: 22rpx;
            line-height: 20.32rpx;
          }
        }
        .text-wrapper_2 {
          padding: 7.78rpx 0 9.76rpx;
          background-color: #f8f8f8;
          border-radius: 8rpx;
          height: 40rpx;
          border-left: solid 1rpx #e0e0e0;
          border-right: solid 1rpx #e0e0e0;
          border-top: solid 1rpx #e0e0e0;
          border-bottom: solid 1rpx #e0e0e0;
          .text_11 {
            margin-left: 11.32rpx;
            margin-right: 8.68rpx;
            font-size: 22rpx;
            line-height: 20.46rpx;
          }
        }
        .font_5 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.12rpx;
          color: #a7a7a7;
        }
        .section_2 {
          padding: 6rpx 11.98rpx 8rpx;
          background-color: #b1a76e1a;
          border-radius: 8rpx;
          height: 40rpx;
          border-left: solid 1rpx #b1a76e;
          border-right: solid 1rpx #b1a76e;
          border-top: solid 1rpx #b1a76e;
          border-bottom: solid 1rpx #b1a76e;
          .text_13 {
            color: #b1a76e;
            font-size: 22rpx;
            line-height: 20.22rpx;
          }
          .image_9 {
            width: 24rpx;
            height: 24rpx;
          }
        }
      }
    }
    .group_8 {
      position: relative;
      margin-left: 9.34rpx;
      margin-top: 69.76rpx;
    }
    .list {
      margin: 0 24rpx;
      padding-top: 14rpx;
      .list-item {
        padding: 0 24rpx 32rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
        &:first-child {
          margin-top: 0;
        }
        .group_9 {
          padding: 32rpx 0 24rpx;
          .text_17 {
            line-height: 23.38rpx;
          }
          .text_18 {
            line-height: 23.38rpx;
          }
          .ai-outflow_2 {
            width: 44rpx;
            height: 44rpx;
          }
        }
        .section_4 {
          padding: 30.28rpx 25.06rpx 29.6rpx 25.06rpx;
          background-color: #f8f8f8;
          border-radius: 12rpx;
          .text_19 {
            line-height: 22.18rpx;
          }
          .text_20 {
            line-height: 22.08rpx;
          }
        }
      }
    }
    .font_2 {
      font-size: 32rpx;
      font-family: PingFang SC Bold;
      line-height: 22.12rpx;
      font-weight: 700;
      color: #030305;
    }
    .font_4 {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 22.12rpx;
      color: #707070;
    }
  }
  .section_5 {
    padding: 20rpx 0;
    background-color: #ffffff;
    box-shadow: 0rpx 6rpx 12rpx #00000029;
    .button {
      margin: 0 32rpx;
      .font_6 {
        font-size: 32rpx;
        font-family: 苹方;
        line-height: 29.56rpx;
        color: #999999;
      }
      .text_21 {
        color: #ffffff;
        font-size: 30rpx;
        line-height: 27.9rpx;
      }
    }
    .text-wrapper_3 {
      padding: 31.16rpx 0 28.94rpx;
      background-color: #b1a76e;
      border-radius: 44rpx;
    }
  }
}
</style>
