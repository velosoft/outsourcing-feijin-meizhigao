<template>
  <view class="flex-col page">
    <view class="flex-col header">
      <view class="flex-row justify-end items-center">
        <text class="font text text_2">9:41 AM</text>
        <view class="flex-row items-center ml-100">
          <text class="font text text_3">100%</text>
          <image
            class="shrink-0 image"
            src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=1844ca254ebcd2fa8052347db6ea78c1.png"
          />
        </view>
      </view>
      <view class="flex-row items-center mt-7">
        <image
          class="shrink-0 image_2"
          src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=b4a99cb915f1a947b5d084dfd25f2155.png"
        />
        <text class="font_2 text_4">订单核对</text>
        <view class="flex-row items-center shrink-0 section">
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
    <view class="flex-col mt-7">
      <v-tabs
        v-model="activeTab"
        v-bind:scroll="tabScroll"
        v-bind:tabs="tabs"
        lineHeight="6rpx"
        v-bind:lineScale="0.2"
        lineColor="#b1a76e"
        padding="0 22rpx"
        bgColor="#f8f8f8"
      ></v-tabs>
      <v-pill-tabs
        class="group_4"
        v-model="activePillTab"
        v-bind:tabs="pillTabs"
        bgColor="#f8f8f8"
        pillsColor="#b1a76e"
        height="100rpx"
        padding="0 22rpx"
        pillsBorderRadius="12rpx"
        color="#030305"
        activeColor="#ffffff"
        fontSize="24rpx"
        pillsBgColor="#fff"
        v-bind:transition="false"
        itemGap="22rpx"
      ></v-pill-tabs>
      <view class="flex-col justify-start group_4">
        <view class="flex-col group_7">
          <view class="flex-col justify-start ai-background-image-wrapper">
            <view class="flex-row group_29">
              <view class="flex-col waterfall-item_2 section_3">
                <view class="flex-row justify-between items-start group_8">
                  <text class="font_5 text_10">12</text>
                  <view class="flex-row items-center group_9">
                    <text class="font_6 text_11">2</text>
                    <text class="font_7 text_12 ml-9">已使用</text>
                  </view>
                </view>
                <view class="flex-row items-end">
                  <text class="font_7 text_16">采购商品数</text>
                  <view
                    class="flex-row justify-center items-center flex-1 group_10 ml-5"
                  >
                    <text class="font_6 text_14">10</text>
                    <text class="font_7 text_15 ml-7">已使用</text>
                  </view>
                </view>
              </view>
              <view
                class="flex-col items-center waterfall-item_2 section_4 ml-11"
              >
                <text class="font_5 text_13">10</text>
                <text class="font_7 text_17 mt-13">补购商品数</text>
              </view>
            </view>
          </view>
          <view class="flex-row justify-between items-center section_5">
            <text class="font_2 text_18">商品清单</text>
            <view class="flex-row">
              <view class="flex-col justify-start button_1"
                ><text class="font_8 text_20">平台商品登记</text></view
              >
              <view class="flex-col justify-start button ml-12"
                ><text class="font_8 text_21">补充采购商品</text></view
              >
            </view>
          </view>
          <view class="flex-col justify-start relative group_11">
            <view class="flex-col section_6">
              <view class="flex-row">
                <view
                  class="flex-col justify-start shrink-0 self-start relative group_12"
                >
                  <view class="flex-col justify-start items-start section_7">
                    <view
                      class="flex-col justify-start items-center text-wrapper_1 view_1"
                    >
                      <text class="font_9 text_22">已使用</text>
                    </view>
                  </view>
                  <image
                    class="image_5 pos_2"
                    src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=c612ab2f18faa8b946c32ac55c85b44f.png"
                  />
                </view>
                <view class="flex-col flex-1 group_13 ml-9">
                  <view class="flex-col">
                    <text class="self-stretch font_4"
                      >衣架防滑无痕围巾架丝巾衣架防滑无</text
                    >
                    <text class="self-start font_4">痕围巾架丝巾</text>
                    <view
                      class="flex-row justify-between self-stretch group_14"
                    >
                      <text class="font_10">中号、白色</text>
                      <text class="font_11 text_23">补购商品</text>
                    </view>
                    <view
                      class="flex-row justify-between items-center self-stretch group_28"
                    >
                      <view class="flex-row items-center">
                        <text class="font_12">￥</text>
                        <text class="font_13 text_35">999</text>
                        <text class="font_12 text_24">.00</text>
                      </view>
                      <text class="font_14 text_26">×1</text>
                    </view>
                  </view>
                  <view class="flex-col mt-26">
                    <text class="self-stretch font_4"
                      >衣架防滑无痕围巾架丝巾衣架防滑无</text
                    >
                    <text class="self-start font_4">痕围巾架丝巾</text>
                    <view
                      class="flex-row justify-between self-stretch group_16"
                    >
                      <text class="font_10">中号、白色</text>
                      <text class="font_11 text_27">补购商品</text>
                    </view>
                    <view
                      class="flex-row justify-between items-center self-stretch group_28"
                    >
                      <view class="flex-row items-center">
                        <text class="font_12">￥</text>
                        <text class="font_13 text_35">999</text>
                        <text class="font_12 text_24">.00</text>
                      </view>
                      <text class="font_14 text_29">×1</text>
                    </view>
                  </view>
                  <text class="font_4 mt-26"
                    >衣架防滑无痕围巾架丝巾衣架防滑无</text
                  >
                </view>
              </view>
              <view class="flex-row justify-between items-end view_2">
                <view class="flex-col items-start group_19">
                  <text class="font_4">痕围巾架丝巾</text>
                  <text class="font_10 mt-5">中号、白色</text>
                </view>
                <text class="font_15 text_30">已使用：1</text>
              </view>
              <view
                class="flex-row justify-between items-center group_1 view_3"
              >
                <view class="flex-row items-center group_27">
                  <text class="font_12">￥</text>
                  <text class="font_13 text_31">999</text>
                  <text class="font_12 text_1">.00</text>
                </view>
                <text class="font_14">×1</text>
              </view>
              <view class="flex-row group_22">
                <image
                  class="shrink-0 self-start image_5"
                  src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=c612ab2f18faa8b946c32ac55c85b44f.png"
                />
                <view class="flex-col flex-1 group_23 ml-9">
                  <text class="self-stretch font_4"
                    >衣架防滑无痕围巾架丝巾衣架防滑无</text
                  >
                  <text class="self-start font_4">痕围巾架丝巾</text>
                  <view class="flex-row justify-between self-stretch group_24">
                    <text class="font_10">中号、白色</text>
                    <text class="font_15 text_34">已使用：1</text>
                  </view>
                  <view
                    class="flex-row justify-between items-center self-stretch group_28 view_4"
                  >
                    <view class="flex-row items-center">
                      <text class="font_12">￥</text>
                      <text class="font_13 text_35">999</text>
                      <text class="font_12 text_24">.00</text>
                    </view>
                    <text class="font_14 text_39">×1</text>
                  </view>
                  <text class="self-stretch font_4 text_36"
                    >衣架防滑无痕围巾架丝巾衣架防滑无</text
                  >
                </view>
              </view>
              <view class="flex-col items-start">
                <text class="font_4 text_37">痕围巾架丝巾</text>
                <text class="font_10 text_38 mt-5">中号、白色</text>
              </view>
              <view
                class="flex-row justify-between items-center group_1 view_5"
              >
                <view class="flex-row items-center group_27">
                  <text class="font_12">￥</text>
                  <text class="font_13 text_31">999</text>
                  <text class="font_12 text_1">.00</text>
                </view>
                <text class="font_14">×1</text>
              </view>
            </view>
            <image
              class="image_5 pos_5"
              src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=c612ab2f18faa8b946c32ac55c85b44f.png"
            />
            <view class="flex-col section_8 pos">
              <view
                class="flex-col justify-start items-center self-start text-wrapper_1 view"
              >
                <text class="font_9 text_22">已使用</text>
              </view>
              <view class="flex-col self-stretch group_17 mt-65">
                <view
                  class="flex-col justify-start items-start relative group_18"
                >
                  <text class="font_9 text_33">已使用</text>
                  <image
                    class="image_5 pos_4"
                    src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=c612ab2f18faa8b946c32ac55c85b44f.png"
                  />
                  <view
                    class="flex-col justify-start items-start section_9 pos_3"
                  >
                    <view
                      class="flex-col justify-start items-center text-wrapper_3"
                    >
                      <text class="font_9 text_28">已使用</text>
                    </view>
                  </view>
                </view>
                <image
                  class="image_6 mt-32"
                  src="https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=25b1ffe2af7abfa1ed00966f9c0ce4a0.png"
                />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import vPillTabs from "../../../components/v-pill-tabs/v-pill-tabs.vue";
import vTabs from "../../../components/v-tabs/v-tabs.vue";

export default {
  components: { vPillTabs, vTabs },
  props: {},
  data() {
    return {
      activeTab: "0",
      activePillTab: "0",
      tabs: ["商品核对", "服务核对", "线下商品"],
      pillTabs: [
        {
          title: "平台商品",
        },
        {
          title: "线下商品",
        },
      ],
      tabScroll: false,
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-7 {
  margin-top: 14rpx;
}
.ml-5 {
  margin-left: 10rpx;
}
.ml-7 {
  margin-left: 14rpx;
}
.ml-11 {
  margin-left: 22rpx;
}
.mt-13 {
  margin-top: 26rpx;
}
.ml-9 {
  margin-left: 18rpx;
}
.mt-5 {
  margin-top: 10rpx;
}
.mt-65 {
  margin-top: 130rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .header {
    padding: 2rpx 0 8rpx 33rpx;
    .font {
      font-size: 24rpx;
      font-family: SF Pro Text;
      line-height: 17.14rpx;
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
    .image {
      width: 70rpx;
      height: 36rpx;
    }
    .image_2 {
      width: 28rpx;
      height: 28rpx;
    }
    .text_4 {
      margin-left: 249.7rpx;
      font-size: 34rpx;
    }
    .section {
      margin-left: 112.3rpx;
      padding: 12.66rpx 25rpx 15.34rpx;
      background-color: #ffffff99;
      border-radius: 50rpx;
      height: 64rpx;
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
  }
  .group_4 {
    margin-top: 20rpx;
    .group_7 {
      margin: 0 24rpx;
      .ai-background-image-wrapper {
        padding: 40rpx 0;
        background-color: #ffffff;
        border-radius: 12rpx;
        .group_29 {
          margin-left: 24rpx;
          margin-right: 28rpx;
          .waterfall-item_2 {
            flex: 1 1 314rpx;
            .group_8 {
              padding-left: 26.7rpx;
              .text_10 {
                margin-top: 16.76rpx;
              }
              .group_9 {
                padding: 12.32rpx 10.84rpx 13.56rpx 15.08rpx;
                border-radius: 8rpx;
                height: 50rpx;
                border-left: solid 1rpx #d3d3d3;
                border-right: solid 1rpx #d3d3d3;
                border-top: solid 1rpx #d3d3d3;
                border-bottom: solid 1rpx #d3d3d3;
                .text_11 {
                  line-height: 17.3rpx;
                }
                .text_12 {
                  line-height: 22.12rpx;
                }
              }
            }
            .font_7 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 22.22rpx;
              color: #999999;
            }
            .text_16 {
              margin-bottom: 3.68rpx;
              line-height: 22.1rpx;
            }
            .group_10 {
              padding: 12.32rpx 0 13.56rpx;
              border-radius: 8rpx;
              height: 50rpx;
              border-left: solid 1rpx #d3d3d3;
              border-right: solid 1rpx #d3d3d3;
              border-top: solid 1rpx #d3d3d3;
              border-bottom: solid 1rpx #d3d3d3;
              .text_14 {
                line-height: 17.54rpx;
              }
              .text_15 {
                line-height: 22.12rpx;
              }
            }
            .font_6 {
              font-size: 24rpx;
              font-family: PingFang SC Bold;
              line-height: 17.14rpx;
              font-weight: 700;
              color: #030305;
            }
            .font_5 {
              font-size: 60rpx;
              font-family: PingFang SC Bold;
              line-height: 43.24rpx;
              font-weight: 700;
              color: #030305;
            }
            .text_13 {
              line-height: 43.82rpx;
            }
            .text_17 {
              line-height: 22.18rpx;
            }
          }
          .section_3 {
            padding: 28rpx 24rpx 26rpx 26.28rpx;
            background-color: #f8f8f8;
            border-radius: 12rpx;
            height: 166rpx;
          }
          .section_4 {
            padding: 44.76rpx 0 29.6rpx;
            background-color: #f8f8f8;
            border-radius: 12rpx;
            height: 166rpx;
          }
        }
      }
      .section_5 {
        margin-top: 24rpx;
        padding: 38rpx 28rpx 36rpx 29.96rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
        .text_18 {
          line-height: 29.56rpx;
        }
        .button_1 {
          padding: 12.22rpx 0 13.62rpx;
          border-radius: 8rpx;
          height: 50rpx;
          border-left: solid 1rpx #b1a76e;
          border-right: solid 1rpx #b1a76e;
          border-top: solid 1rpx #b1a76e;
          border-bottom: solid 1rpx #b1a76e;
          .text_20 {
            margin-left: 15.44rpx;
            margin-right: 12.56rpx;
            line-height: 22.16rpx;
          }
        }
        .button {
          padding: 12.22rpx 0 13.6rpx;
          border-radius: 8rpx;
          height: 50rpx;
          border-left: solid 1rpx #b1a76e;
          border-right: solid 1rpx #b1a76e;
          border-top: solid 1rpx #b1a76e;
          border-bottom: solid 1rpx #b1a76e;
          .text_21 {
            margin-left: 15.96rpx;
            margin-right: 12.04rpx;
            line-height: 22.18rpx;
          }
        }
        .font_8 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.22rpx;
          color: #b1a76e;
        }
      }
      .group_11 {
        padding: 20rpx 0 60rpx;
        .section_6 {
          padding: 29.2rpx 23.04rpx 40rpx 23.16rpx;
          background-color: #ffffff;
          border-radius: 12rpx;
          .group_12 {
            padding-bottom: 200rpx;
            width: 172rpx;
            .section_7 {
              padding: 2.8rpx 0 183.2rpx;
              background-image: url("https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=c612ab2f18faa8b946c32ac55c85b44f.png");
              background-size: 100% 100%;
              background-repeat: no-repeat;
              width: 172rpx;
              .view_1 {
                margin-left: 4.84rpx;
              }
            }
            .pos_2 {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
          .group_13 {
            margin-top: 5.64rpx;
            .group_14 {
              margin-top: 9.46rpx;
              .text_23 {
                line-height: 22.18rpx;
              }
            }
            .group_16 {
              margin-top: 9.46rpx;
              .text_27 {
                line-height: 22.18rpx;
              }
            }
            .font_11 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 22.22rpx;
              color: #fe5252;
            }
          }
          .view_2 {
            padding: 0 2.8rpx;
            .group_19 {
              margin-left: 187.32rpx;
            }
            .text_30 {
              line-height: 22.12rpx;
            }
          }
          .font_4 {
            font-size: 28rpx;
            font-family: 苹方;
            line-height: 36rpx;
            color: #030305;
          }
          .font_10 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22.22rpx;
            color: #a7a7a7;
          }
          .group_1 {
            padding: 0 7.44rpx;
            .group_27 {
              margin-left: 185.12rpx;
              .text_31 {
                line-height: 23.08rpx;
              }
              .text_1 {
                margin-left: 5.84rpx;
                line-height: 14.6rpx;
              }
            }
          }
          .view_3 {
            margin-top: 18.5rpx;
          }
          .font_12 {
            font-size: 20rpx;
            font-family: PingFang SC Heavy;
            line-height: 14.42rpx;
            font-weight: 800;
            color: #030305;
          }
          .font_13 {
            font-size: 32rpx;
            font-family: PingFang SC Heavy;
            line-height: 22.22rpx;
            font-weight: 800;
            color: #030305;
          }
          .font_14 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 17.14rpx;
            color: #a7a7a7;
          }
          .group_22 {
            margin-top: 45.2rpx;
            .group_23 {
              margin-right: 2.8rpx;
              margin-top: 5.64rpx;
              .group_24 {
                margin-top: 9.46rpx;
                .text_34 {
                  margin-top: 2.02rpx;
                  line-height: 22.12rpx;
                }
              }
              .view_4 {
                margin-top: 18.5rpx;
              }
              .text_36 {
                margin-top: 50.84rpx;
              }
            }
          }
          .font_15 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22.22rpx;
            color: #707070;
          }
          .group_28 {
            margin-top: 18.54rpx;
            padding: 0 2.44rpx;
            .text_35 {
              line-height: 23.08rpx;
            }
            .text_24 {
              margin-left: 5.84rpx;
              line-height: 14.6rpx;
            }
            .text_26 {
              margin-right: 5rpx;
            }
            .text_29 {
              margin-right: 5rpx;
            }
            .text_39 {
              margin-right: 2.2rpx;
            }
          }
          .text_37 {
            margin-left: 190.12rpx;
          }
          .text_38 {
            margin-left: 191.5rpx;
          }
          .view_5 {
            margin-top: 20.42rpx;
          }
        }
        .image_5 {
          width: 172rpx;
          height: 222rpx;
        }
        .pos_5 {
          position: absolute;
          left: 23.16rpx;
          bottom: 32.8rpx;
        }
        .section_8 {
          padding-top: 108rpx;
          background-image: url("https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=25b1ffe2af7abfa1ed00966f9c0ce4a0.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 168rpx;
          height: 960rpx;
          .view {
            margin-left: 4rpx;
          }
          .group_17 {
            margin-bottom: -4222rpx;
            .group_18 {
              padding-top: 243.6rpx;
              .text_33 {
                margin-left: 19.64rpx;
                line-height: 18.44rpx;
              }
              .pos_4 {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 8.84rpx;
              }
              .section_9 {
                padding: 34rpx 0 156rpx;
                background-image: url("https://dev.ft.velosoft.cn/api/image?token=6571ef39740f740012ac13aa&name=3ae9b033ce89661a02b9caece7c2acb9.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                width: 172rpx;
                .text-wrapper_3 {
                  margin-left: 4.84rpx;
                  padding: 9.6rpx 0 7.96rpx;
                  background-color: #b1a76e;
                  border-radius: 12rpx 0rpx 12rpx 0rpx;
                  width: 84rpx;
                  .text_28 {
                    line-height: 18.44rpx;
                  }
                }
              }
              .pos_3 {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
              }
            }
            .image_6 {
              margin-right: 3.16rpx;
              width: 168rpx;
              height: 4582rpx;
            }
          }
        }
        .pos {
          position: absolute;
          left: 24rpx;
          top: 144rpx;
        }
        .text-wrapper_1 {
          padding: 9.6rpx 0 7.96rpx;
          background-color: #b1a76e;
          border-radius: 12rpx 0rpx 12rpx 0rpx;
          width: 84rpx;
          .text_22 {
            line-height: 18.44rpx;
          }
        }
        .font_9 {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 17.14rpx;
          color: #ffffff;
        }
      }
    }
  }
  .font_2 {
    font-size: 32rpx;
    font-family: PingFang SC Bold;
    line-height: 31.44rpx;
    font-weight: 700;
    color: #030305;
  }
}
</style>
