<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 container">
      <image class="banner" src="../../../static/images/banner_01.png" />
      <view class="flex-col line-tabs">
        <MultCardTabs
          class="card-tabs-wrap"
          :value="multValue"
          :tabs="multTabs"
          @change="onMultCardTabs"
        ></MultCardTabs>
        <view
          class="flex-row justify-between items-center btn-tips"
          :style="{
            width: activityStatus !== 1 ? '362rpx' : '',
            alignSelf: tivityStatus !== 1 ? 'center' : '',
            justifyContent: activityStatus !== 1 ? 'center' : 'space-between',
          }"
        >
          <image
            class="tips-text"
            src="https://dev.ft.velosoft.cn/api/image?token=6573ca17740f740012ac1d46&name=btn_seccount_01.png"
            v-if="activityStatus == 1"
          />
          <view class="flex-row items-center count-down-wrap">
            <text class="count-down-label" v-if="activityStatus == 0"
              >距离开始还有</text
            >
            <text class="count-down-label" v-if="activityStatus == 1"
              >距离结束还有</text
            >
            <text class="count-down-label" v-if="activityStatus == 2"
              >本次秒杀已结束</text
            >
            <u-count-down
              class="count-down-con ml-4"
              :time="time"
              format="HH:mm:ss"
              @change="onTimeChange"
              v-if="activityStatus !== 2"
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
                    timeData.minutes > 10
                      ? timeData.minutes
                      : "0" + timeData.minutes
                  }}</text>
                </view>
                <text class="colon ml-2">:</text>
                <view
                  class="flex-col items-center number-box ml-2 justify-center"
                >
                  <text class="time-font time-text">{{
                    timeData.seconds > 10
                      ? timeData.seconds
                      : "0" + timeData.seconds
                  }}</text>
                </view>
              </view>
            </u-count-down>
          </view>
        </view>
        <CardTabs
          class="tabs-wraper"
          :value="value"
          :tabs="tabs"
          @change="onCardTabs"
        ></CardTabs>
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
                      class="left"
                      src="../../../static/images/image_shop_01.png"
                    />
                    <view class="flex-col flex-1 right ml-10">
                      <view class="flex-col">
                        <text class="self-stretch product-title line-clamp-two"
                          >衣架防滑无痕围巾架丝巾领带架家用鹅形裤架皮衣架防滑无痕围巾架丝巾领带架家用鹅形裤架皮...</text
                        >
                        <view class="flex-row self-stretch mt-6 tag-wraper">
                          <view
                            class="flex-col tag"
                            v-for="(item, index) in items_1"
                            :key="index"
                          >
                            <text class="tag-font">新品上市</text>
                          </view>
                        </view>
                        <text class="product-price-font price-through mt-6"
                          >￥545.00</text
                        >
                      </view>
                      <view class="flex-col">
                        <view
                          class="bottom-top flex-row justify-between items-center"
                          v-if="activityStatus == 2"
                        >
                          <view
                            class="flex-row items-start price-wraper"
                          >
                            <view class="flex-row price-left">
                              <text class="price-symbol symbol-text">￥</text>
                              <text class="price-font price-text">200</text>
                            </view>
                            <text class="price-last price-last-text"
                              >.00</text
                            >
                          </view>
                          <view
                            class="flex-col items-center btn"
                            @click="goActivityDetial"
                            ><text class="btn-font btn-text"
                              >原价购买</text
                            ></view
                          >
                        </view>
                        <view
                          class="flex-row items-center line-progress"
                          v-if="activityStatus == 1"
                        >
                          <u-line-progress
                            :percentage="percentage"
                            :showText="false"
                            :height="8"
                            activeColor="#f71f21"
                            inactiveColor="#ffdedc"
                            style="width: 180rpx"
                          ></u-line-progress>
                          <text class="remainder-font numder-ramainder ml-4"
                            >仅剩50份</text
                          >
                        </view>
                        <view
                          class="flex-row justify-between items-center relative btn-buy"
                          v-if="activityStatus !== 2"
                          @click="goActivityDetial"
                        >
                          <view
                            class="flex-col items-center btn-bg-wraper btn-bg-pos"
                          >
                            <image
                              class="btn-bg"
                              src="../../../static/images/btn_bg_01.png"
                              v-if="activityStatus == 0"
                            />
                            <image
                              class="btn-bg"
                              src="../../../static/images/btn_bg_02.png"
                              v-if="activityStatus == 1"
                            />
                          </view>
                          <view class="flex-row items-center relative btn-left">
                            <text class="btn-price-label">秒杀价</text>
                            <view class="flex-row items-start btn-price">
                              <text
                                class="self-center price-symbol btn-psice-symbol"
                                >￥</text
                              >
                              <text class="price-font btn-price-number"
                                >200</text
                              >
                              <text class="price-last btn-price-last">.00</text>
                            </view>
                          </view>
                          <view class="btn-right">
                            <text
                              class="relative btn-font"
                              v-if="activityStatus == 0"
                              >即将开始</text
                            >
                            <text class="relative btn-font" v-else
                              >立即抢购</text
                            >
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
import NavBar from "../../../components/NavBar/NavBar.vue";
import ListContainer from "../../../components/ListContainer/ListContainer.vue";
import MultCardTabs from "./components/cardTabs/multCardTabs.vue";
import CardTabs from "./components/cardTabs/cardTabs.vue";

export default {
  components: { NavBar, CardTabs, MultCardTabs, ListContainer },
  props: {},
  data() {
    return {
      timeData: {},
      multTabs: [
        {
          status: 2,
          time: "10:00",
          label: "已结束",
        },
        {
          status: 1,
          time: "11:00",
          label: "抢购中",
        },
        {
          status: 0,
          time: "12:00",
          label: "即将开始",
        },
        {
          status: 0,
          time: "13:00",
          label: "即将开始",
        },
        {
          status: 0,
          time: "14:00",
          label: "即将开始",
        },
      ],
      multValue: 0,
      activityStatus: 2,
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
    };
  },

  methods: {
    onMultCardTabs(val) {
      // 事件处理方法
      this.activityStatus = val.item.status;
    },
    onTimeChange(e) {
      this.timeData = e;
    },
    onCardTabs(index) {
      // 事件处理方法
      this.value = index;
    },
    goActivityDetial(val) {
      uni.navigateTo({
        url: "./activityDetial?id=1&name=1",
      });
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
      .card-tabs-wrap {
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
      .tabs-wraper {
        position: relative;
        margin-top: 48rpx;
      }
      .list {
        padding: 20rpx;
        background-image: linear-gradient(86.8deg, #fbebbc 4.9%, #fefde2 95.3%);
        border-radius: 0rpx 0rpx 16rpx 16rpx;
        .list-item {
          padding: 24rpx;
          background-color: #ffffff;
          border-radius: 20rpx;
          border: solid 1rpx #f4ba70;
          &:first-child {
            margin-top: 0;
          }
          .left {
            width: 224rpx;
            height: 224rpx;
          }
          .right {
            margin-top: 8rpx;
            .product-title {
              // width: 187rpx;
              font-size: 28rpx;
              font-family: PingFangSC-Medium;
              line-height: 34rpx;
              color: #030305;
            }
            .tag-wraper > .tag:not(:first-child) {
              margin-left: 12rpx;
            }
            .tag {
              padding: 0 8rpx;
              height: 32rpx;
              background: #ffac4d14;
              .tag-font {
                font-size: 20rpx;
                font-family: 苹方;
                line-height: 32rpx;
                color: #ff6800;
              }
            }
            .product-price-font {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 24rpx;
              color: #d3d3d3;
            }
            .price-through {
              text-decoration: line-through;
              margin-left: 8rpx;
            }
            .bottom-top {
              margin-top: 6rpx;
              .price-wraper {
                margin-right: 16rpx;
                .price-left {
                  .price-text {
                    color: #030305;
                    line-height: 32rpx;
                  }
                  .symbol-text {
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
            .line-progress{
              margin-top: 12rpx;
              margin-bottom: 20rpx;
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
              width: 100%;
              height: 64rpx;
              padding: 24rpx 0;
              .btn-bg-pos {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
              }
              .btn-bg {
                width: 378rpx;
                height: 64rpx;
              }

              .btn-left {
                margin-top: 10rpx;
                margin-left: 24rpx;
                .btn-price-label {
                  font-size: 24rpx;
                  font-family: PingFangSC-Medium;
                  line-height: 24rpx;
                  color: #bb3e0c;
                }
                .btn-price {
                  .btn-price-number {
                    line-height: 32rpx;
                  }
                }
              }
              .btn-right {
                margin-right: 12rpx;
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
              margin-left: 2rpx;
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
