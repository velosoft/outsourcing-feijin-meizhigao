<template>
  <view class="flex-col page">
    <nav-bar :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col flex-1 container">
      <image class="banner" src="/static/images/banner_01.png" />
      <view class="flex-col line-tabs">
        <mult-card-tabs
          class="card-tabs-wrap"
          :value="multValue"
          :tabs="multTabs"
          @change="onMultCardTabs"
        ></mult-card-tabs>
        <activity-status-waiting
          v-if="activityStatus === 0"
          class="self-center"
        />
        <activity-status-running v-if="activityStatus === 1" />
        <activity-status-expired
          v-if="activityStatus === 2"
          class="self-center"
        />
        <card-tabs
          class="tabs-wraper"
          :value="value"
          :tabs="tabs"
          @change="onCardTabs"
        ></card-tabs>
        <view class="flex-col">
          <list-container
            :showEmpty="!list.length"
            :showLoading="showLoading"
            :finished="finished"
          >
            <view class="flex-col">
              <view class="flex-col list">
                <activity-shop-item
                  class="list-item"
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
import ActivityStatusWaiting from "./components/ActivityStatusWaiting.vue";
import ActivityStatusRunning from "./components/ActivityStatusRunning.vue";
import ActivityStatusExpired from "./components/ActivityStatusExpired.vue";
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
    ActivityStatusWaiting,
    ActivityStatusRunning,
    ActivityStatusExpired,
  },
  props: {},
  data() {
    return {
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
      percentage: 40,
      value: 0,
      tabs: ["活动商品", "活动服务", "活动课程"],
      page: 1,
      showLoading: true,
      finished: false,
      list: productList,
    };
  },
  onReachBottom() {
    if (this.page >= 2) {
      this.finished = true;
      return;
    }
    this.finished = false;

    setTimeout(() => {
      this.list = this.list.concat(this.list);
      this.page++;
    }, 1500);
  },
  methods: {
    onMultCardTabs(val) {
      // 事件处理方法
      this.activityStatus = val.item.status;
    },
    onCardTabs(val) {
      // 事件处理方法
      this.value = val.index;
      this.page = 1;

      switch (this.value) {
        case 0:
          this.list = productList;
          break;
        case 1:
          this.list = serviceList;
          break;
        case 2:
          this.list = courseList;
          break;
      }
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
        padding: 20rpx 20rpx 88rpx;
        background-image: linear-gradient(86.8deg, #fbebbc 4.9%, #fefde2 95.3%);
        border-radius: 0rpx 0rpx 16rpx 16rpx;

        .list-item {
          margin-top: 16rpx;
        }

        .list-item:first-child {
          margin-top: 0;
        }
      }
    }
  }
}

/deep/ .listContainerComp .loadingComp {
  margin-top: -44px;
}
</style>
