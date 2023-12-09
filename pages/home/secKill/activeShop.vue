<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 container">
      <image
        class="banner"
        src="../../../static/images/banner_01.png"
      />
      <view class="flex-col line-tabs">
        <MultCardTabs class="section_8" :value="multValue" :tabs="multTabs" @change="onMultCardTabs"></MultCardTabs>
        <view class="flex-row justify-between items-center btn-tips">
          <image
            class="tips-text"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=btn_seccount_01.png"
            v-if="true"
          />
          <view class="flex-row items-center count-down-wrap">
            <text class="count-down-label">距离结束还有</text>
            <u-count-down
              class="count-down-con ml-4"
              :time="time"
              format="HH:mm:ss"
              @change="onTimeChange"
              v-if="true"
            >
              <view class="flex-row items-center">
                <view class="flex-col items-center number-box justify-center">
                  <text class="time-font time-text">{{
                    timeData.hours > 10 ? timeData.hours : "0" + timeData.hours
                  }}</text>
                </view>
                <text class="colon ml-2">:</text>
                <view
                  class="flex-col items-center number-box ml-2 justify-center"
                >
                  <text class="time-font time-text">{{
                    timeData.minutes
                  }}</text>
                </view>
                <text class="colon ml-2">:</text>
                <view
                  class="flex-col items-center number-box ml-2 justify-center"
                >
                  <text class="time-font time-text">{{
                    timeData.seconds
                  }}</text>
                </view>
              </view>
            </u-count-down>
          </view>
        </view>
        <CardTabs class="group_22" :value="value" :tabs="tabs" @change="onCardTabs"></CardTabs>
        <view class="flex-col">
          <scroll-view :scroll-y="true">
            <list-container
              :showEmpty="showEmpty"
              :showLoading="showLoading"
              :finished="finished"
            >
              <view class="flex-col">
                <view class="flex-col list">
                  <view
                    class="flex-row list-item mt-8"
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <image
                      class="self-center left"
                      src="../../../static/images/image_shop_01.png"
                    />
                    <view class="flex-col flex-1 right ml-10">
                      <view class="flex-col">
                        <text class="self-stretch font_7 title"
                          >衣架防滑无痕围巾架丝巾领带架家用鹅形裤架皮...</text
                        >
                        <view class="flex-row self-stretch mt-6">
                          <view
                            class="flex-col tag"
                            v-for="(item, index) in items_1"
                            :key="index"
                          >
                            <text class="tag-font">新品上市</text>
                          </view>
                        </view>
                        <text class="font_4 text_23 price-through mt-6"
                          >￥545.00</text
                        >
                      </view>
                      <view class="flex-col mt-8">
                        <view
                          class="bottom-top flex-row justify-between"
                          v-if=" activityStatus== 2"
                        >
                          <view class="flex-row justify-center price-wraper">
                            <view class="flex-row items-center price-left">
                              <text class="price-font price-text">200</text>
                              <text class="price-symbol symbol-text">￥</text>
                            </view>
                            <text class="self-center price-last price-last-text"
                              >.00</text
                            >
                          </view>
                          <view class="flex-col items-center btn"
                            ><text class="btn-font btn-text"
                              >原价购买</text
                            ></view
                          >
                        </view>
                        <view class="flex-row items-center" v-if="activityStatus== 1">
                          <u-line-progress
                            :percentage="percentage"
                            :showText="false"
                            :height="16"
                            activeColor="#f71f21" 
                            inactiveColor="#ffdedc"
                            style="width: 180rpx;"
                          ></u-line-progress>
                          <text class="remainder-font numder-ramainder ml-4"
                            >仅剩50份</text
                          >
                        </view>
                        <view
                          class="flex-row justify-between items-center relative btn-buy"
                          v-if="activityStatus== 1"
                        >
                          <view class="btn-bg btn-bg-pos"></view>
                          <view class="flex-row items-center relative btn-left">
                            <text class="btn-price-label">秒杀价</text>
                            <view class="flex-row">
                              <text class="price-font btn-price-number"
                                >200</text
                              >
                              <text
                                class="self-center price-symbol btn-psice-symbol"
                                >￥</text
                              >
                              <text
                                class="self-center price-last btn-price-last"
                                >.00</text
                              >
                            </view>
                          </view>
                          <view class="flex-col btn-right">
                            <view
                              class="flex-col items-center btn-right-bg-wraper btn-right-pos"
                            >
                              <image
                                class="btn-right-bg"
                                src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=btn_right_01.png"
                                v-if="activityStatus== 1"
                              />
                              <image
                                class="btn-right-bg"
                                src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=btn_right_01.png"
                                v-if="activityStatus== 0"
                              />
                            </view>
                            <image
                              class="btn-center-bg btn-center-pos"
                              src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=icon_btn_tips_01.png"
                            />
                            <text class="relative btn-font">立即抢购</text>
                          </view>
                        </view>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </list-container>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CardTabs from "../../../components/cardTabs/cardTabs.vue";
import ListContainer from "../../../components/ListContainer/ListContainer.vue";
import MultCardTabs from "../../../components/cardTabs/multCardTabs.vue";
import NavBar from "../../../components/NavBar/NavBar.vue";

export default {
  components: { NavBar, CardTabs, MultCardTabs, ListContainer },
  props: {},
  data() {
    return {
      timeData: {},
      activityStatus: 1,
      title: "秒杀活动",
      time: 108000000,
      showEmpty: false,
      showLoading: false,
      finished: false,
      items_1: [null, null],
      percentage: 40,
      items: [null, null, null, null],
      value: 0,
      tabs: ["活动商品", "活动服务", "活动课程"],
      multValue: 0,
      multTabs: [{
            time: "10:00",
            label: "已结束",
          },
          {
            time: "11:00",
            label: "抢购中",
          },
          {
            time: "12:00",
            label: "即将开始",
          },
          {
            time: "13:00",
            label: "即将开始",
          },
          {
            time: "14:00",
            label: "即将开始",
          },]

    };
  },

  methods: {
    onMultCardTabs(args) {
      // 事件处理方法
    },
    onTimeChange(e) {
      this.timeData = e;
    },
    onCardTabs(args) {
      // 事件处理方法
    },
  },
};
</script>

<style scoped lang="less">
.page {
  background-color: #f71f20;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .container {
    overflow-y: auto;
    .banner {
      width: 100vw;
      height: 73.6vw;
    }
    .line-tabs {
      padding: 0 20rpx 56rpx;
      .section_8 {
        position: relative;
      }
      .btn-tips {
        margin-top: 24rpx;
        padding: 16rpx 24rpx;
        background-image: linear-gradient(180deg, #fe6733 0%, #f72222 100%);
        border-radius: 100rpx;
        .tips-text {
          width: 280.58rpx;
          height: 24.04rpx;
        }
        .count-down-wrap {
          margin-right: 8rpx;
          .count-down-label {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 24rpx;
            color: #ffffff;
          }
          .count-down-con {
            flex-shrink: 0;
            .number-box {
              padding: 8rpx 0;
              background-image: linear-gradient(
                180deg,
                #b4352e 0%,
                #ce3933 100%
              );
              border-radius: 4rpx;
              width: 34rpx;
              height: 34rpx;
              .time-font {
                font-size: 20rpx;
                font-family: PingFang SC Bold;
                line-height: 20rpx;
                font-weight: 700;
                color: #ffffff;
              }
              .time-text {
                font-size: 22rpx;
                line-height: 22rpx;
              }
            }
            .colon {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 24rpx;
              color: #ffc8a7;
            }
          }
        }
      }
      .group_22 {
        position: relative;
        margin-top: 48rpx;
      }
      .list {
        padding: 20rpx;
        background-image: linear-gradient(86.8deg, #fbebbc 4.9%, #fefde2 95.3%);
        border-radius: 0rpx 0rpx 16rpx 16rpx;
        .list-item {
          padding: 24rpx 16rpx;
          background-color: #ffffff;
          border-radius: 20rpx;
          border-left: solid 1rpx #f4ba70;
          border-right: solid 1rpx #f4ba70;
          border-top: solid 1rpx #f4ba70;
          border-bottom: solid 1rpx #f4ba70;
          &:first-child {
            margin-top: 0;
          }
          .left {
            width: 224rpx;
            height: 224rpx;
          }
          .right {
            margin-top: 8rpx;
            .font_7 {
              font-size: 28rpx;
              font-family: PingFangSC-Medium;
              line-height: 34rpx;
              color: #030305;
            }
            .title {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
            }
            .tag {
              padding: 8rpx;
              height: 32rpx;
              background: #ffac4d14;
              .tag-font {
                font-size: 20rpx;
                font-family: 苹方;
                line-height: 20rpx;
                color: #ff6800;
              }
            }
            .font_4 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 24rpx;
              color: #d3d3d3;
            }
            .text_23 {
              text-decoration: line-through;
            }
            .price-through {
              margin-left: 8rpx;
            }
            .bottom-top {
              margin-top: 6rpx;
              .price-wraper {
                margin-right: 16rpx;
                .price-left {
                  width: 73.76rpx;
                  .price-text {
                    margin-left: 16rpx;
                    color: #030305;
                    line-height: 32rpx;
                  }
                  .symbol-text {
                    margin-left: -80rpx;
                    color: #030305;
                  }
                }
                .price-last-text {
                  color: #030305;
                }
              }
              .btn {
                padding: 16rpx 0;
                background-color: #ffffff;
                border-radius: 100rpx;
                width: 144rpx;
                border: solid 1rpx #d3d3d3;
                .btn-text {
                  color: #a7a7a7;
                }
              }
            }
            .remainder-font {
              font-size: 20rpx;
              font-family: 苹方;
              line-height: 20rpx;
              color: #a7a7a7;
            }
            .numder-ramainder {
              font-size: 22rpx;
              line-height: 22rpx;
            }
            .btn-buy {
              padding: 24rpx 0 16rpx;
              .btn-bg {
                opacity: 0.44;
                background-image: linear-gradient(
                  180deg,
                  #ffcb4f 0%,
                  #ff9c27 100%
                );
                border-radius: 100rpx;
                width: 388rpx;
                height: 54rpx;
              }
              .btn-bg-pos {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                margin-top: 6rpx;
              }
              .btn-left {
                margin-left: 24rpx;
                .btn-price-label {
                  font-size: 24rpx;
                  font-family: PingFangSC-Medium;
                  line-height: 24rpx;
                  color: #bb3e0c;
                }
                .btn-price-number {
                  margin-left: 16rpx;
                  line-height: 32rpx;
                }
                .btn-psice-symbol {
                  margin-left: -80rpx;
                }
                .btn-price-last {
                  margin-left: 56rpx;
                }
              }
              .btn-right {
                position: relative;
                margin-right: 40rpx;
                .btn-right-bg-wraper {
                  width: 146rpx;
                  .btn-right-bg {
                    width: 146rpx;
                    height: 54rpx;
                  }
                }
                .btn-right-pos {
                  position: absolute;
                  left: -14rpx;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                }
                .btn-center-bg {
                  width: 44rpx;
                  height: 64rpx;
                }
                .btn-center-pos {
                  position: absolute;
                  left: -42rpx;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
            }
            .price-font {
              font-size: 32rpx;
              font-family: HarmonyOSSansSC;
              line-height: 34rpx;
              font-weight: 700;
              color: #bb3e0c;
            }
            .price-symbol {
              font-size: 20rpx;
              font-family: PingFangSC-Medium;
              line-height: 20rpx;
              color: #bb3e0c;
            }
            .price-last {
              font-size: 20rpx;
              font-family: HarmonyOSSansSC;
              line-height: 20rpx;
              font-weight: 700;
              color: #bb3e0c;
            }
            .btn-font {
              font-size: 24rpx;
              font-family: PingFang SC Bold;
              line-height: 24rpx;
              font-weight: 700;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
