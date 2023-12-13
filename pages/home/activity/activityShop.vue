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
          class="flex-row items-center btn-tips"
          :style="{
            width: activityStatus !== 1 ? '362rpx' : '100%',
            alignSelf: activityStatus !== 1 ? 'center' : '',
            justifyContent: activityStatus == 1 ? 'space-between' : 'center',
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
          <list-container
            :showEmpty="showEmpty"
            :showLoading="showLoading"
            :finished="finished"
          >
            <view class="flex-col">
              <view class="flex-col list">
                <ActivityShopItem
                  v-for="(item, index) in list"
                  :key="index"
                  :item="item"
                  :activityStatus="activityStatus"
                />
              </view>
            </view>
          </list-container>
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
import ActivityShopItem from "./components/ActivityShopItem.vue";
import {
  productList,
  serviceList,
  courseList,
} from "../../../mock/shopList/shopList.js";

export default {
  components: {
    NavBar,
    CardTabs,
    MultCardTabs,
    ListContainer,
    ActivityShopItem,
  },
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
      percentage: 40,
      list: [],
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
    onCardTabs(val) {
      // 事件处理方法
      this.value = index;
      if (this.value == 0) {
        this.list = productList;
      } else if (this.value == 1) {
        this.list = serviceList;
      } else {
        this.list = courseList;
      }
    },
    goActivityDetail() {
      let pageUrl = "./activityDetail?id=" + this.value + "&name=1";
      console.log("目标页面", pageUrl);
      uni.navigateTo({
        url: pageUrl,
      });
    },
  },
  mounted() {
    this.list = productList;
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
      }
    }
  }
}
</style>
