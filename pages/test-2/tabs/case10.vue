<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 group_4">
      <view class="flex-row justify-center relative group_2">
        <text class="font text text_2">9:41 AM</text>
        <text class="font text text_3 pos">100%</text>
      </view>
      <view class="flex-col header">
        <image
          class="self-end image"
          src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=812ec195308f4ee48218631d7b87e8b6.png"
        />
        <view
          class="flex-row justify-center items-center self-stretch relative group_3 mt-10"
        >
          <image
            class="image_2 pos_3"
            src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=b4a99cb915f1a947b5d084dfd25f2155.png"
          />
          <text class="text_4">订单</text>
          <view class="flex-row items-center section pos_2">
            <image
              class="image_4"
              src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=867365840a1a9b9665e5607366f4359a.png"
            />
            <image
              class="image_3 ml-24"
              src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=0b111ca90e1f998a526afc35e1fc6089.png"
            />
          </view>
        </view>
      </view>
      <v-pill-tabs
        v-model="activePillTab"
        v-bind:tabs="pillTabs"
        bgColor="#f8f8f8"
        height="150rpx"
        padding="0 22rpx"
        pillsColor="#b1a76e"
        pillsBorderRadius="12rpx"
        color="#999999"
        activeColor="#ffffff"
        fontSize="24rpx"
        contentFontColor="#030305"
        contentFontSize="48rpx"
      ></v-pill-tabs>
      <view class="flex-col list">
        <view
          class="flex-col list-item mt-10"
          v-for="(item, index) in items"
          :key="index"
        >
          <view class="flex-row justify-between self-stretch">
            <text class="font_5">订单号：51651651681</text>
            <text class="font_6">进行中</text>
          </view>
          <text class="self-start font_7 text_9 text_39"
            >定制测量（等待上门测量）</text
          >
          <view class="flex-col self-stretch section_2 view">
            <text class="self-start font_8 text_10">DIY定制收纳商品</text>
            <view class="self-start group_6 mt-13">
              <text class="font_9">预约上门时间：</text>
              <text class="font_10">2024-02-15</text>
              <text class="font_10 text_40">12:00:00</text>
            </view>
            <view class="flex-row items-baseline self-stretch mt-13">
              <text class="font_9 text_12">业主姓名：娃哈哈</text>
              <text class="font_9 text_13 ml-6">15812345678</text>
            </view>
            <text class="self-start font_9 text_14 mt-13"
              >地址：广州市天河区车陂南东宏国际广场12楼06号</text
            >
          </view>
          <view class="flex-row justify-end self-stretch group_7">
            <view class="flex-col justify-start button"
              ><text class="font_11 text_27 text_15">修改上门时间</text></view
            >
            <view class="flex-col justify-start items-center button_10 ml-8"
              ><text class="font_3">确认已上门</text></view
            >
          </view>
        </view>
      </view>
    </view>
    <view class="flex-row justify-between tab-bar">
      <view class="flex-col items-center group_10">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=f15ecc1b06e8311b5d2ca4d31e66ba88.png"
        />
        <text class="font_13 text_29 mt-6">工作台</text>
      </view>
      <view class="flex-col items-center group_11">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=bfa03b7f9ec1d71c42ec1bd5bd9077c5.png"
        />
        <text class="font_13 text_30 mt-6">订单</text>
      </view>
      <view class="flex-col items-center group_12">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=fb3b9c2934a5268d0ff19d5a89593a44.png"
        />
        <text class="font_13 text_31 mt-6">我的客户</text>
      </view>
      <view class="flex-col items-center group_13">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=b94f82a26f5d6d1b77f52a40d52dbead.png"
        />
        <text class="font_13 text_32 mt-6">个人中心</text>
      </view>
    </view>
  </view>
</template>

<script>
import vPillTabs from "../../../components/v-pill-tabs/v-pill-tabs.vue";

export default {
  components: { vPillTabs },
  props: {},
  data() {
    return {
      pillTabs: [
        {
          title: "进行中",
          content: 5,
        },
        {
          title: "待启动",
          content: 5,
        },
        {
          title: "已完成",
          content: 2,
        },
      ],
      activePillTab: "0",
      items: [null, null, null, null, null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-13 {
  margin-top: 26rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_4 {
    padding-bottom: 48rpx;
    overflow-y: auto;
    .group_2 {
      margin: 0 24rpx;
      padding: 0 70.3rpx;
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
      .text_3 {
        line-height: 17.56rpx;
      }
      .pos {
        position: absolute;
        right: 70.3rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .header {
      padding: 8rpx 7.5rpx 12rpx 33rpx;
      .image {
        width: 56.5rpx;
        height: 24rpx;
      }
      .group_3 {
        padding: 15.58rpx 0 17.32rpx;
        .image_2 {
          width: 28rpx;
          height: 28rpx;
        }
        .pos_3 {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .text_4 {
          color: #030305;
          font-size: 34rpx;
          font-family: PingFang SC Bold;
          font-weight: 700;
          line-height: 31.1rpx;
        }
        .section {
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
        .pos_2 {
          position: absolute;
          right: 6.5rpx;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .list {
      margin: 20rpx 24rpx 0;
      .list-item {
        padding: 38.6rpx 24.2rpx 0 28rpx;
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
          line-height: 25.88rpx;
          color: #b1a76e;
        }
        .font_7 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 24.36rpx;
          color: #999999;
        }
        .text_9 {
          font-size: 26rpx;
        }
        .text_39 {
          margin-top: 25.48rpx;
        }
        .section_2 {
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
          .text_10 {
            font-size: 26rpx;
          }
          .group_6 {
            line-height: 22.08rpx;
            .font_10 {
              font-size: 24rpx;
              font-family: PingFang SC Bold;
              line-height: 17.54rpx;
              font-weight: 700;
              color: #b1a76e;
            }
            .text_40 {
              margin-left: 14.82rpx;
            }
          }
          .font_9 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22.08rpx;
            color: #707070;
          }
          .text_12 {
            line-height: 22.06rpx;
          }
          .text_13 {
            line-height: 22.06rpx;
          }
          .text_14 {
            line-height: 22.52rpx;
          }
        }
        .view {
          margin-right: 3.8rpx;
          margin-top: 29.22rpx;
        }
        .group_7 {
          padding: 32rpx 3.8rpx;
          .button {
            padding: 18.28rpx 0 17.54rpx;
            border-radius: 30rpx;
            height: 60rpx;
            border-left: solid 1rpx #b1a76e;
            border-right: solid 1rpx #b1a76e;
            border-top: solid 1rpx #b1a76e;
            border-bottom: solid 1rpx #b1a76e;
            .font_11 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 22.08rpx;
              color: #b1a76e;
            }
            .text_27 {
              line-height: 22.18rpx;
            }
            .text_15 {
              margin-left: 19.92rpx;
              margin-right: 14.08rpx;
            }
          }
          .button_10 {
            padding: 20.28rpx 0 17.64rpx;
            background-color: #b1a76e;
            border-radius: 30rpx;
            width: 182rpx;
            height: 60rpx;
            .font_3 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 22.08rpx;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .tab-bar {
    padding: 13rpx 49.22rpx 15.9rpx 57.38rpx;
    background-color: #ffffff;
    .group_10 {
      width: 82rpx;
      height: 82.98rpx;
      .text_29 {
        line-height: 18.38rpx;
      }
    }
    .group_11 {
      width: 82rpx;
      height: 83rpx;
      .text_30 {
        color: #b1a76e;
        line-height: 18.4rpx;
      }
    }
    .image_5 {
      width: 54rpx;
      height: 54rpx;
    }
    .font_13 {
      font-size: 20rpx;
      font-family: 苹方;
      line-height: 17.54rpx;
      color: #b3b3b3;
    }
    .group_12 {
      height: 83.04rpx;
      .text_31 {
        line-height: 18.48rpx;
      }
    }
    .group_13 {
      height: 83.1rpx;
      .text_32 {
        line-height: 18.48rpx;
      }
    }
  }
}
</style>
