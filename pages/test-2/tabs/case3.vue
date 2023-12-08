<template>
  <view class="flex-col justify-start page">
    <view class="flex-col group_2">
      <view class="flex-col header">
        <view class="flex-row justify-end items-center">
          <text class="font text text_2">9:41 AM</text>
          <view class="flex-row items-center ml-100">
            <text class="font text text_3">100%</text>
            <image
              class="shrink-0 image"
              src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=1844ca254ebcd2fa8052347db6ea78c1.png"
            />
          </view>
        </view>
        <view class="flex-row justify-between items-center mt-7">
          <image
            class="image_2"
            src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=b4a99cb915f1a947b5d084dfd25f2155.png"
          />
          <view class="flex-row items-center group">
            <text class="font_2 text_4">物品收纳管理与取舍</text>
            <view class="flex-row items-center shrink-0 section ml-14">
              <image
                class="image_4"
                src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=867365840a1a9b9665e5607366f4359a.png"
              />
              <image
                class="image_3 ml-24"
                src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=0b111ca90e1f998a526afc35e1fc6089.png"
              />
            </view>
          </view>
        </view>
      </view>
      <view class="flex-col line-tabs mt-7">
        <v-tabs
          v-model="activeTab"
          v-bind:tabs="tabs"
          lineHeight="6rpx"
          v-bind:lineScale="0.2"
          lineColor="#b1a76e"
          padding="0 22rpx"
          bgColor="#f8f8f8"
        ></v-tabs>
        <view class="flex-col group_5 mt-10">
          <view class="flex-col ai-background-image-wrapper">
            <view class="flex-col">
              <view class="flex-row items-center group_6">
                <text class="font_2">现状分析描述</text>
                <text class="font_5 ml-7">（最多500字）</text>
              </view>
              <view class="flex-col justify-start items-start text-area">
                <text class="font_6 text_10">现有药箱容量不足</text>
              </view>
            </view>
            <view class="flex-col mt-34">
              <view class="flex-row items-baseline">
                <text class="font_2">现状图片</text>
                <text class="font_5 ml-7">（最多3张）</text>
              </view>
              <view class="flex-row mt-16">
                <view
                  class="flex-col justify-start items-center equal-division-item image-wrapper"
                >
                  <image
                    class="ai-outflow"
                    src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=cc149967ef13f7f296e91561003b9f83.png"
                  />
                </view>
                <view
                  class="flex-col justify-start items-center equal-division-item image-wrapper_2 ml-12"
                >
                  <image
                    class="image_6"
                    src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=4725ba057bb535cd0a34c05f5fc8ba2f.png"
                  />
                </view>
                <view
                  class="flex-col items-center equal-division-item section_3 ml-12"
                >
                  <image
                    class="image_5"
                    src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=a0674a87d8df64436845cc5e3a42eeda.png"
                  />
                  <text class="font_7 text_11 mt-6">添加图片</text>
                </view>
              </view>
            </view>
          </view>
          <view class="flex-col section_4">
            <view class="flex-row justify-between self-stretch group_7">
              <text class="font_8 text_12">柜体/区域名称</text>
              <text class="font_9 text_13">请输入</text>
            </view>
            <view class="flex-col self-stretch group_8 view">
              <text class="self-start font_8 text_14"
                >柜体物品收纳方案描述</text
              >
              <view class="flex-col items-start text-area_2 section_5 mt-16">
                <text class="font_10 text_15"
                  >此区域可再增加同款药箱一个，药品收纳区分大人</text
                >
                <text class="font_10 text_16">小孩，外用内服及保健用品。</text>
              </view>
            </view>
            <view class="flex-col self-stretch group_8 view_2">
              <view class="flex-row items-center self-stretch group_9">
                <text class="font_8 text_17">收纳方案图示</text>
                <text class="font_5 ml-6">（最多3张）</text>
              </view>
              <view class="flex-col items-center self-start section_6">
                <image
                  class="image_5"
                  src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=a0674a87d8df64436845cc5e3a42eeda.png"
                />
                <text class="font_7 text_18 mt-6">添加图片</text>
              </view>
            </view>
            <view class="flex-row items-center self-stretch view_3">
              <text class="font_8 text_19">配套收纳产品推荐</text>
              <view class="flex-col justify-start button_1 text-wrapper">
                <text class="font_11 text_21">选择平台商品</text>
              </view>
              <view class="flex-col justify-start button_8 button">
                <text class="font_11 text_22">线下采购商品</text>
              </view>
            </view>
            <view class="flex-col self-start group_10">
              <text class="self-start font_8 text_23">平台商品</text>
              <view class="flex-row self-stretch group_11">
                <image
                  class="shrink-0 image_7"
                  src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=86b1277ce132197de4958d4748143145.png"
                />
                <view class="flex-col flex-1 self-start group_12 ml-9">
                  <text class="self-stretch font_10 text_24"
                    >衣架防滑无痕围巾架丝巾衣架防滑无</text
                  >
                  <text class="self-start font_10 text_25">痕围巾架丝巾</text>
                  <text class="self-start font_5 text_26">中号、白色</text>
                  <view
                    class="flex-row justify-between items-center self-stretch group_1"
                  >
                    <view class="flex-row items-center">
                      <text class="font_12 text_27">￥</text>
                      <text class="font_4 text_28">40</text>
                      <text class="font_12 text_51">.00</text>
                    </view>
                    <view class="flex-row items-center">
                      <view
                        class="flex-col justify-start items-center image-wrapper_3"
                      >
                        <image
                          class="image_8"
                          src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=3293b6e6ee4b76d7d6a3968dbf453060.png"
                        />
                      </view>
                      <view
                        class="flex-col justify-start items-center image-wrapper_3 ml-1"
                      >
                        <text class="font_13 text_29">1</text>
                      </view>
                      <view
                        class="flex-col justify-start items-center image-wrapper_3 ml-1"
                      >
                        <image
                          class="image_8"
                          src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=6d7cea16cf6763db2a7a6b99fd57b41c.png"
                        />
                      </view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="flex-row self-stretch group_13">
                <image
                  class="flex-1 ai-outflow_2"
                  src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=587ae461e391e42e2ddcdae1926c3020.png"
                />
                <view
                  class="flex-col justify-start items-center button_2 text-wrapper_3 ml-12"
                >
                  <text class="text_30">删除</text>
                </view>
              </view>
              <view
                class="flex-row justify-end items-baseline self-stretch group_14"
              >
                <text class="font_8">共2件商品</text>
                <text class="font_8 ml-6">合计：</text>
                <text class="font_14 ml-6">￥199.00</text>
              </view>
            </view>
            <view class="flex-col self-stretch group_16">
              <text class="self-start font_8 text_31">线下采购商品</text>
              <view class="flex-row justify-between self-stretch group_17">
                <view class="flex-row">
                  <image
                    class="image_7"
                    src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=86b1277ce132197de4958d4748143145.png"
                  />
                  <view class="flex-col self-start group_18 ml-9">
                    <text class="font_6">置物架小推车</text>
                    <view class="flex-row items-center group_22 mt-49">
                      <text class="font_12 text_32">￥</text>
                      <text class="font_4 text_33">40</text>
                      <text class="font_12 text_1">.00</text>
                    </view>
                  </view>
                </view>
                <view class="flex-row items-center self-start group_19">
                  <view
                    class="flex-col justify-start items-center image-wrapper_3"
                  >
                    <image
                      class="image_8"
                      src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=3293b6e6ee4b76d7d6a3968dbf453060.png"
                    />
                  </view>
                  <view
                    class="flex-col justify-start items-center image-wrapper_3 ml-1"
                  >
                    <text class="font_13 text_34">1</text>
                  </view>
                  <view
                    class="flex-col justify-start items-center image-wrapper_3 ml-1"
                  >
                    <image
                      class="image_8"
                      src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=6d7cea16cf6763db2a7a6b99fd57b41c.png"
                    />
                  </view>
                </view>
              </view>
              <view
                class="flex-row justify-end items-baseline self-stretch group_20"
              >
                <text class="font_8">共2件商品</text>
                <text class="font_8 ml-6">合计：</text>
                <text class="font_14 ml-6">￥199.00</text>
              </view>
            </view>
          </view>
          <view class="flex-row relative group_15">
            <text class="font_9 text_36 pos_4">请输入</text>
            <text class="font_5 pos_8">（最多3张）</text>
            <view class="flex-col justify-start button_4 text-wrapper_4">
              <text class="font_15 text_43">线下采购商品</text>
            </view>
            <text class="font_9 text_44 pos_15">未选择</text>
            <text class="font_9 text_46 pos_17">未选择</text>
            <view class="flex-row items-center pos_18">
              <image
                class="shrink-0 image_2"
                src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=814092b60949cb8023d111ff35d07376.png"
              />
              <text class="font_10 text_47 ml-3">删除柜体</text>
            </view>
            <image
              class="image_9 pos"
              src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=25b1ffe2af7abfa1ed00966f9c0ce4a0.png"
            />
            <view class="section_7 pos_2"></view>
            <text class="font_8 text_35 pos_3">柜体/区域名称</text>
            <text class="font_8 text_37 pos_5">柜体物品收纳方案描述</text>
            <view class="text-area_3 section_8"></view>
            <text class="font_9 text_38 pos_6">请输入</text>
            <text class="font_8 text_39 pos_7">收纳方案图示</text>
            <view class="section_9 pos_9"></view>
            <image
              class="image_5 pos_10"
              src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=a0674a87d8df64436845cc5e3a42eeda.png"
            />
            <text class="font_7 text_40 pos_11">添加图片</text>
            <text class="font_8 text_41 pos_12">配套收纳产品推荐</text>
            <view class="button_3 section_10"></view>
            <text class="font_15 text_42 pos_13">选择平台商品</text>
            <text class="font_8 pos_14">平台商品</text>
            <text class="font_8 text_45 pos_16">线下采购商品</text>
            <view class="flex-row justify-center button_5 section_11">
              <image
                class="image_10"
                src="https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=77f4afac699a35067e3b1c5b8200384e.png"
              />
              <text class="font_8 text_48 ml-3">添加柜体</text>
            </view>
            <view
              class="flex-col justify-start items-center button_6 text-wrapper_5"
            >
              <text class="font_8 text_49">保存本页</text>
            </view>
          </view>
        </view>
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
      activeTab: "0",
      tabs: ["客厅", "厨房", "儿童房", "卧室", "衣柜"],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.mt-7 {
  margin-top: 14rpx;
}
.ml-7 {
  margin-left: 14rpx;
}
.ml-1 {
  margin-left: 2rpx;
}
.ml-9 {
  margin-left: 18rpx;
}
.mt-49 {
  margin-top: 98rpx;
}
.ml-3 {
  margin-left: 6rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    height: 4248rpx;
    overflow-y: auto;
    .header {
      padding: 2rpx 0 8rpx 33rpx;
      .font {
        font-size: 24rpx;
        font-family: SF Pro Text;
        line-height: 18.56rpx;
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
      .group {
        margin-right: 14rpx;
        .text_4 {
          font-size: 34rpx;
          line-height: 31.56rpx;
        }
        .section {
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
    }
    .line-tabs {
      margin-bottom: -2644rpx;
      .group_5 {
        padding: 0 24rpx;
        height: 6656rpx;
        .ai-background-image-wrapper {
          padding: 39.08rpx 28rpx 32rpx;
          background-color: #ffffff;
          border-radius: 12rpx;
          .group_6 {
            padding-bottom: 31.36rpx;
          }
          .text-area {
            padding: 30.44rpx 0 135.38rpx;
            background-color: #f8f8f8;
            border-radius: 12rpx;
            .text_10 {
              margin-left: 25.28rpx;
              font-size: 26rpx;
              line-height: 24.18rpx;
            }
          }
          .equal-division-item {
            flex: 1 1 200rpx;
            .ai-outflow {
              width: 72rpx;
              height: 72rpx;
            }
            .image_6 {
              border-radius: 50%;
              width: 72rpx;
              height: 72rpx;
            }
            .text_11 {
              line-height: 25.64rpx;
            }
          }
          .image-wrapper {
            padding: 64rpx 0;
            border-radius: 12rpx;
            background-image: url("https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=93e196a7ab4a809dfd7a92313df6ccc3.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 200rpx;
          }
          .image-wrapper_2 {
            padding: 64rpx 0;
            border-radius: 12rpx;
            background-image: url("https://dev.ft.velosoft.cn/api/image?token=65719059740f740012ac100b&name=37d49b38567f1822848a2ada05215831.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 200rpx;
          }
          .section_3 {
            padding: 47.26rpx 0 56.7rpx;
            background-color: #fcfcfc;
            border-radius: 12rpx;
            height: 200rpx;
            border-left: dotted 1rpx #d3d3d3;
            border-right: dotted 1rpx #d3d3d3;
            border-top: dotted 1rpx #d3d3d3;
            border-bottom: dotted 1rpx #d3d3d3;
          }
        }
        .section_4 {
          margin-top: 20rpx;
          padding: 39.04rpx 0 39.2rpx;
          background-color: #ffffff;
          border-radius: 12rpx;
          .group_7 {
            padding-left: 29.14rpx;
            padding-right: 22.76rpx;
            .text_12 {
              line-height: 25.76rpx;
            }
            .text_13 {
              line-height: 25.64rpx;
            }
          }
          .group_8 {
            padding: 0 28rpx;
            .text_14 {
              line-height: 25.74rpx;
            }
            .text-area_2 {
              align-self: stretch;
              .text_15 {
                font-size: 26rpx;
              }
              .text_16 {
                font-size: 26rpx;
              }
            }
            .section_5 {
              padding: 27.44rpx 24.86rpx 96.7rpx;
              background-color: #f8f8f8;
              border-radius: 12rpx;
            }
            .group_9 {
              padding: 0 2.4rpx 30.18rpx;
              .text_17 {
                line-height: 25.7rpx;
              }
            }
            .section_6 {
              padding: 47.26rpx 0 56.7rpx;
              background-color: #fcfcfc;
              border-radius: 12rpx;
              width: 200rpx;
              border-left: dotted 1rpx #d3d3d3;
              border-right: dotted 1rpx #d3d3d3;
              border-top: dotted 1rpx #d3d3d3;
              border-bottom: dotted 1rpx #d3d3d3;
              .text_18 {
                line-height: 25.64rpx;
              }
            }
          }
          .view {
            margin-top: 78.3rpx;
          }
          .view_2 {
            margin-top: 71.12rpx;
          }
          .view_3 {
            margin-top: 60rpx;
            padding-left: 29.52rpx;
            padding-right: 28rpx;
            .text_19 {
              line-height: 26.02rpx;
            }
            .button_1 {
              flex-shrink: 0;
              margin-left: 43.48rpx;
              .text_21 {
                margin-left: 16.34rpx;
                margin-right: 11.66rpx;
                line-height: 22.16rpx;
              }
            }
            .text-wrapper {
              padding: 12.22rpx 0 13.62rpx;
              border-radius: 8rpx;
              height: 50rpx;
              border-left: solid 1rpx #b1a76e;
              border-right: solid 1rpx #b1a76e;
              border-top: solid 1rpx #b1a76e;
              border-bottom: solid 1rpx #b1a76e;
            }
            .button_8 {
              flex-shrink: 0;
              margin-left: 19rpx;
              .text_22 {
                margin-left: 16.3rpx;
                margin-right: 11.7rpx;
                line-height: 22.18rpx;
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
            }
            .font_11 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 22.42rpx;
              color: #b1a76e;
            }
          }
          .group_10 {
            margin-left: -24rpx;
            margin-top: 64.92rpx;
            width: 726rpx;
            .text_23 {
              margin-left: 53.68rpx;
            }
            .group_11 {
              margin-top: 28.44rpx;
              padding-left: 47.16rpx;
              padding-right: 28rpx;
              .group_12 {
                margin-top: 6.64rpx;
                .text_24 {
                  line-height: 34rpx;
                }
                .text_25 {
                  margin-top: 7.2rpx;
                  line-height: 34rpx;
                }
                .text_26 {
                  margin-top: 13.26rpx;
                  color: #a7a7a7;
                  line-height: 22.22rpx;
                }
                .group_1 {
                  padding-left: 2.44rpx;
                  .text_27 {
                    line-height: 14.42rpx;
                  }
                  .text_28 {
                    line-height: 20.46rpx;
                  }
                  .text_51 {
                    margin-left: 4.68rpx;
                  }
                }
              }
            }
            .group_13 {
              margin-top: 8.8rpx;
              .ai-outflow_2 {
                height: 160rpx;
              }
              .button_2 {
                flex-shrink: 0;
                .text_30 {
                  color: #ffffff;
                  font-size: 28rpx;
                  font-family: PingFang SC Bold;
                  font-weight: 700;
                  line-height: 25.98rpx;
                }
              }
              .text-wrapper_3 {
                padding: 68.28rpx 0 65.74rpx;
                background-color: #fe5252;
                border-radius: 10rpx 0rpx 0rpx 10rpx;
                width: 100rpx;
                height: 160rpx;
              }
            }
            .group_14 {
              margin-top: 40.92rpx;
              padding: 0 14.04rpx;
            }
          }
          .group_16 {
            margin-top: 78.12rpx;
            padding-left: 23.16rpx;
            padding-right: 14.04rpx;
            .text_31 {
              margin-left: 6.36rpx;
              line-height: 25.88rpx;
            }
            .group_17 {
              margin-top: 28.4rpx;
              .group_18 {
                margin-top: 9.86rpx;
                .group_22 {
                  padding: 0 2.18rpx;
                  .text_32 {
                    line-height: 14.42rpx;
                  }
                  .text_33 {
                    line-height: 20.46rpx;
                  }
                  .text_1 {
                    margin-left: 4.68rpx;
                  }
                }
              }
              .group_19 {
                margin-right: 13.96rpx;
                margin-top: 118.8rpx;
              }
            }
            .group_20 {
              margin-top: 9.72rpx;
            }
          }
          .image_7 {
            width: 172rpx;
            height: 194rpx;
          }
          .font_12 {
            font-size: 20rpx;
            font-family: PingFang SC Bold;
            line-height: 14.6rpx;
            font-weight: 700;
            color: #030305;
          }
          .font_4 {
            font-size: 28rpx;
            font-family: PingFang SC Bold;
            line-height: 22.42rpx;
            font-weight: 700;
            color: #030305;
          }
          .image-wrapper_3 {
            width: 44rpx;
            .image_8 {
              width: 44rpx;
              height: 44rpx;
            }
            .font_13 {
              font-size: 28rpx;
              font-family: 苹方;
              line-height: 18.56rpx;
              color: #333444;
            }
            .text_29 {
              font-size: 26rpx;
            }
            .text_34 {
              font-size: 26rpx;
            }
          }
          .font_14 {
            font-size: 32rpx;
            font-family: PingFang SC Bold;
            line-height: 23.38rpx;
            font-weight: 700;
            color: #030305;
          }
        }
        .font_5 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.42rpx;
          color: #999999;
        }
        .image_5 {
          width: 56rpx;
          height: 56rpx;
        }
        .font_7 {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 25.84rpx;
          color: #8f8f8f;
        }
        .font_6 {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 25.84rpx;
          color: #030305;
        }
        .group_15 {
          margin-top: -374rpx;
          padding-left: 24rpx;
          padding-right: 22.48rpx;
          height: 4582rpx;
          .text_36 {
            line-height: 25.64rpx;
          }
          .pos_4 {
            position: absolute;
            right: 22.76rpx;
            top: 433.1rpx;
          }
          .pos_8 {
            position: absolute;
            left: 213.36rpx;
            top: 858.16rpx;
          }
          .button_4 {
            position: absolute;
            left: 224rpx;
            top: 1240rpx;
            .text_43 {
              margin-left: 18.3rpx;
              margin-right: 11.7rpx;
              line-height: 22.18rpx;
            }
          }
          .text-wrapper_4 {
            padding: 14.22rpx 0 13.6rpx;
            background-color: #f8f8f8;
            border-radius: 8rpx;
          }
          .text_44 {
            line-height: 25.6rpx;
          }
          .pos_15 {
            position: absolute;
            right: 22.48rpx;
            top: 1361.12rpx;
          }
          .text_46 {
            line-height: 25.6rpx;
          }
          .pos_17 {
            position: absolute;
            right: 22.48rpx;
            top: 1465.12rpx;
          }
          .pos_18 {
            position: absolute;
            left: 50%;
            top: 1566rpx;
            transform: translateX(-50%);
            .text_47 {
              font-size: 26rpx;
              line-height: 23.84rpx;
            }
          }
          .image_9 {
            width: 168rpx;
            height: 4582rpx;
          }
          .pos {
            position: absolute;
            left: 24rpx;
            bottom: 0;
          }
          .section_7 {
            background-color: #ffffff;
            border-radius: 12rpx;
            width: 702rpx;
            height: 1236rpx;
          }
          .pos_2 {
            position: absolute;
            left: 0;
            right: 0;
            top: 394rpx;
          }
          .text_35 {
            line-height: 25.76rpx;
          }
          .pos_3 {
            position: absolute;
            left: 29.14rpx;
            top: 433.04rpx;
          }
          .text_37 {
            line-height: 25.74rpx;
          }
          .pos_5 {
            position: absolute;
            left: 29.14rpx;
            top: 537.1rpx;
          }
          .text-area_3 {
            position: absolute;
            left: 28rpx;
            right: 28rpx;
            top: 594rpx;
          }
          .section_8 {
            background-color: #f8f8f8;
            border-radius: 12rpx;
            width: 646rpx;
            height: 190rpx;
          }
          .text_38 {
            font-size: 26rpx;
            line-height: 23.82rpx;
          }
          .pos_6 {
            position: absolute;
            left: 53.14rpx;
            top: 624.74rpx;
          }
          .text_39 {
            line-height: 25.7rpx;
          }
          .pos_7 {
            position: absolute;
            left: 30.4rpx;
            top: 855.12rpx;
          }
          .section_9 {
            background-color: #fcfcfc;
            border-radius: 12rpx;
            width: 200rpx;
            height: 200rpx;
            border-left: dotted 1rpx #d3d3d3;
            border-right: dotted 1rpx #d3d3d3;
            border-top: dotted 1rpx #d3d3d3;
            border-bottom: dotted 1rpx #d3d3d3;
          }
          .pos_9 {
            position: absolute;
            left: 28rpx;
            top: 912rpx;
          }
          .pos_10 {
            position: absolute;
            left: 100rpx;
            top: 961.26rpx;
          }
          .text_40 {
            line-height: 25.64rpx;
          }
          .pos_11 {
            position: absolute;
            left: 73.28rpx;
            top: 1029.66rpx;
          }
          .text_41 {
            line-height: 26.02rpx;
          }
          .pos_12 {
            position: absolute;
            left: 29.52rpx;
            top: 1182.82rpx;
          }
          .button_3 {
            position: absolute;
            left: 28rpx;
            top: 1240rpx;
          }
          .section_10 {
            background-color: #f8f8f8;
            border-radius: 8rpx;
            width: 176rpx;
            height: 50rpx;
          }
          .font_15 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22.42rpx;
            color: #707070;
          }
          .text_42 {
            line-height: 22.16rpx;
          }
          .pos_13 {
            position: absolute;
            left: 46.34rpx;
            top: 1254.22rpx;
          }
          .pos_14 {
            position: absolute;
            left: 29.68rpx;
            top: 1360.92rpx;
          }
          .text_45 {
            line-height: 25.88rpx;
          }
          .pos_16 {
            position: absolute;
            left: 29.52rpx;
            top: 1464.92rpx;
          }
          .button_5 {
            position: absolute;
            left: 0;
            right: 0;
            top: 1650rpx;
            .image_10 {
              width: 30rpx;
              height: 30rpx;
            }
            .text_48 {
              color: #b1a76e;
              font-size: 30rpx;
              line-height: 27.58rpx;
            }
          }
          .section_11 {
            padding: 36rpx 0 34rpx;
            background-color: #ffffff;
            border-radius: 12rpx;
          }
          .button_6 {
            position: absolute;
            left: 8rpx;
            right: 8rpx;
            top: 1810rpx;
            .text_49 {
              color: #ffffff;
              font-size: 30rpx;
              line-height: 27.6rpx;
            }
          }
          .text-wrapper_5 {
            padding: 31.44rpx 0 28.96rpx;
            background-color: #b1a76e;
            border-radius: 44rpx;
          }
        }
        .font_9 {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 25.84rpx;
          color: #d3d3d3;
        }
        .font_10 {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 33.6rpx;
          color: #030305;
        }
        .font_8 {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 25.84rpx;
          color: #707070;
        }
      }
    }
    .font_2 {
      font-size: 32rpx;
      font-family: PingFang SC Bold;
      line-height: 29.56rpx;
      font-weight: 700;
      color: #030305;
    }
    .image_2 {
      width: 28rpx;
      height: 28rpx;
    }
  }
}
</style>
