<template>
  <view class="flex-col relative page">
    <view class="flex-col self-stretch relative">
      <view class="flex-col justify-start items-center self-stretch relative">
        <image
          class="ai-background-image"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=00d6c6a7814280915278a2a58d4228c9.png"
        />
        <view class="flex-col section_4 pos_11">
          <text class="self-center text_6">报价金额</text>
          <view class="self-stretch section_6 mt-109"></view>
        </view>
        <view class="flex-col section_7 pos_14">
          <view class="flex-row justify-between">
            <text class="font_2 text_12">组件信息</text>
            <view class="flex-row items-center group_5">
              <text class="font_3 text_13">共20件</text>
              <image
                class="shrink-0 ai-outflow"
                src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=97e0d2aa1bf20b47e505743c033844a5.png"
              />
            </view>
          </view>
          <view class="flex-row justify-around mt-18">
            <image
              class="image_6"
              src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=945ac0e7b4c34c3999ace3861fda0b83.png"
            />
            <image
              class="image_6"
              src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=ef567303a7ff01fe0d13ad1356dd93d5.png"
            />
            <image
              class="image_6"
              src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=945ac0e7b4c34c3999ace3861fda0b83.png"
            />
            <image
              class="image_6"
              src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=8b99c0d85d68cc656f9bd981e30ad419.png"
            />
            <image
              class="image_6"
              src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=8ec41db7493013f7b07b1b5ac75aa465.png"
            />
          </view>
        </view>
        <image
          class="image_2 pos_7"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=b4a99cb915f1a947b5d084dfd25f2155.png"
        />
        <text class="font_2 text_4 pos_8">报价</text>
        <image
          class="image pos_2"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=1844ca254ebcd2fa8052347db6ea78c1.png"
        />
        <text class="font text text_3 pos_5">100%</text>
        <text class="font text text_2 pos_4">9:41 AM</text>
        <view class="flex-row justify-between items-center section_3 pos_6">
          <image
            class="image_4"
            src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=867365840a1a9b9665e5607366f4359a.png"
          />
          <image
            class="image_3"
            src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=0b111ca90e1f998a526afc35e1fc6089.png"
          />
        </view>
        <view class="group pos_10">
          <text class="font_2">关联设计方案：</text>
          <text class="font_2 text_5">东红小区设计方案</text>
        </view>
        <image
          class="image_5 pos_9"
          src="https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=c2ca07ff3249f4bb024e8af8da8d4bba.png"
        />
        <text class="font_7 pos_16"
          >1、报价为客户需要支付的订单金额，提交后即把报价发送给客户，由客</text
        >
        <text class="font_5 text_16 pos_15">温馨提示：</text>
      </view>
      <text class="self-start font_7 text_17">户完成支付</text>
      <view class="section_2 pos_3"></view>
    </view>
    <text class="self-stretch font_7 text_18"
      >2、报价后，可为客户添加人工优惠，优惠金额比例不能超于合理范围，</text
    >
    <text class="self-stretch font_7 text_19"
      >超过则需要提交平台审批，审批通过后，客户才可对审批通过的价格</text
    >
    <text class="self-start font_7 text_20">进行支付</text>
    <text class="self-stretch font_7 text_21"
      >3、报价在客户支付前，可多次修改，客户只能查看并支付最新修改的价</text
    >
    <view class="flex-col justify-start items-center section pos">
      <view class="flex-col ai-background-image_2">
        <view class="flex-col group_1">
          <view
            class="flex-col justify-start items-start self-stretch relative group_2"
          >
            <text class="font_3 text_7">审核提示</text>
            <view class="flex-col justify-start items-end group_3 pos_12">
              <view class="flex-row items-center section_5">
                <text class="font_4 text_10">2000</text>
                <text class="text_9">￥</text>
              </view>
              <text class="font_4 text_8 pos_13">当前报价：</text>
            </view>
          </view>
          <text class="self-start font_5 text_11">您确定继续提交吗？</text>
          <view class="flex-col items-start self-stretch group_4">
            <text class="font_6 text_1"
              >当前报价需经过平台审核，审核通过后才</text
            >
            <text class="font_6 mt-3">允许报给客户</text>
          </view>
        </view>
        <view class="flex-row group_6 mt-32">
          <view class="flex-col justify-start items-center button"
            ><text class="font_3 text_14">取消</text></view
          >
          <u-button class="primary-btn ml-16" text="确认"></u-button>
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
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-109 {
  margin-top: 218rpx;
}
.mt-3 {
  margin-top: 6rpx;
}
.page {
  padding-bottom: 6.3rpx;
  background-color: #f9f9f4;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .ai-background-image {
    opacity: 0.07;
    width: 100vw;
    height: 150.1333vw;
  }
  .section_4 {
    padding: 66.04rpx 38rpx 58rpx;
    background-color: #ffffffcc;
    border-radius: 12rpx;
    border-left: solid 2rpx #ffffff;
    border-right: solid 2rpx #ffffff;
    border-top: solid 2rpx #ffffff;
    border-bottom: solid 2rpx #ffffff;
    .text_6 {
      color: #030305;
      font-size: 40rpx;
      font-family: PingFang SC Bold;
      font-weight: 700;
      line-height: 37.48rpx;
    }
    .section_6 {
      background-color: #f8f8f8;
      border-radius: 12rpx;
      height: 84rpx;
    }
  }
  .pos_11 {
    position: absolute;
    left: 24rpx;
    right: 24rpx;
    top: 232rpx;
  }
  .section_7 {
    padding: 36.8rpx 22rpx 30rpx 26rpx;
    background-color: #ffffffcc;
    border-radius: 12rpx;
    border-left: solid 2rpx #ffffff;
    border-right: solid 2rpx #ffffff;
    border-top: solid 2rpx #ffffff;
    border-bottom: solid 2rpx #ffffff;
    .text_12 {
      line-height: 29.86rpx;
    }
    .group_5 {
      margin-right: 8rpx;
      margin-top: 2.22rpx;
      .text_13 {
        color: #999999;
        line-height: 25.76rpx;
      }
      .ai-outflow {
        width: 20rpx;
        height: 20rpx;
      }
    }
    .image_6 {
      width: 112rpx;
      height: 112rpx;
    }
  }
  .pos_14 {
    position: absolute;
    left: 24rpx;
    right: 24rpx;
    top: 720rpx;
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
  .font_2 {
    font-size: 32rpx;
    font-family: PingFang SC Bold;
    line-height: 29.88rpx;
    font-weight: 700;
    color: #030305;
  }
  .text_4 {
    font-size: 34rpx;
    line-height: 31.62rpx;
  }
  .pos_8 {
    position: absolute;
    left: 50%;
    top: 67.38rpx;
    transform: translateX(-50%);
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
    font-size: 22rpx;
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
  .group {
    line-height: 29.88rpx;
    .text_5 {
      color: #b1a76e;
      line-height: 29.72rpx;
    }
  }
  .pos_10 {
    position: absolute;
    left: 73.54rpx;
    top: 154.92rpx;
  }
  .image_5 {
    width: 44rpx;
    height: 44rpx;
  }
  .pos_9 {
    position: absolute;
    left: 24rpx;
    top: 148rpx;
  }
  .font_7 {
    font-size: 22rpx;
    font-family: PingFang SC Bold;
    line-height: 26rpx;
    font-weight: 700;
    color: #999999;
  }
  .pos_16 {
    position: absolute;
    left: 39.82rpx;
    right: 10.18rpx;
    bottom: 7.58rpx;
  }
  .font_5 {
    font-size: 28rpx;
    font-family: PingFang SC Bold;
    line-height: 26rpx;
    font-weight: 700;
  }
  .text_16 {
    color: #707070;
    line-height: 25.78rpx;
  }
  .pos_15 {
    position: absolute;
    left: 25.06rpx;
    bottom: 65.74rpx;
  }
  .text_17 {
    margin-left: 51.98rpx;
    margin-top: 8.28rpx;
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
  .text_18 {
    margin-left: 24.98rpx;
    margin-top: 15.86rpx;
  }
  .text_19 {
    margin-left: 51.82rpx;
    margin-top: 15.86rpx;
  }
  .text_20 {
    margin-left: 52.06rpx;
    margin-top: 16.04rpx;
  }
  .text_21 {
    margin-left: 25rpx;
    margin-top: 15.68rpx;
  }
  .section {
    padding: 340rpx 0 434rpx;
    background-color: #00000080;
    .ai-background-image_2 {
      padding-left: 2rpx;
      padding-bottom: 60rpx;
      background-image: linear-gradient(180deg, #f6f4ed 0%, #ffffff 50%);
      border-radius: 24rpx;
      width: 582rpx;
      .group_1 {
        margin-left: 36rpx;
        padding-left: 2.46rpx;
        .group_2 {
          padding: 76.96rpx 0 121.16rpx;
          .text_7 {
            color: #707070;
            line-height: 25.88rpx;
          }
          .group_3 {
            width: 538.48rpx;
            .section_5 {
              padding: 129.4rpx 83.96rpx 59.54rpx;
              background-image: url("https://dev.ft.velosoft.cn/api/image?token=65702fb3740f740012abfc81&name=a8d672c7b27731c26f8217a615502245.png");
              background-size: 100% 100%;
              background-repeat: no-repeat;
              width: 382rpx;
              .text_10 {
                margin-left: 28.22rpx;
                line-height: 35.06rpx;
              }
              .text_9 {
                margin-left: -138.22rpx;
                color: #b1a76e;
                font-size: 32rpx;
                font-family: PingFang SC Bold;
                font-weight: 700;
                line-height: 23.08rpx;
              }
            }
            .font_4 {
              font-size: 48rpx;
              font-family: PingFang SC Bold;
              font-weight: 700;
              color: #b1a76e;
            }
            .text_8 {
              line-height: 44.78rpx;
            }
            .pos_13 {
              position: absolute;
              left: 0;
              bottom: 55.78rpx;
            }
          }
          .pos_12 {
            position: absolute;
            left: 3.06rpx;
            right: 0;
            top: 0;
            bottom: 0;
          }
        }
        .text_11 {
          margin-top: 10.22rpx;
          color: #030305;
          line-height: 26.1rpx;
        }
        .group_4 {
          margin-top: 23.64rpx;
          .font_6 {
            font-size: 28rpx;
            font-family: 苹方;
            line-height: 34rpx;
            color: #707070;
          }
          .text_1 {
            margin-left: 2.8rpx;
          }
        }
      }
      .group_6 {
        padding: 0 36rpx;
        .button {
          padding: 25.1rpx 0 27.14rpx;
          border-radius: 40rpx;
          width: 238rpx;
          height: 80rpx;
          border-left: solid 1rpx #d3d3d3;
          border-right: solid 1rpx #d3d3d3;
          border-top: solid 1rpx #d3d3d3;
          border-bottom: solid 1rpx #d3d3d3;
          .text_14 {
            color: #67677a;
            line-height: 25.76rpx;
          }
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
  .font_3 {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 26rpx;
  }
}
</style>
