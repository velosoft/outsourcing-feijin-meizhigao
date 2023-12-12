<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" title="消息"></NavBar>
    <Tabs
      class="section_5"
      :tabList="tabList"
      :TabCur="tabCur"
      @tabChange="onTabChange"
    ></Tabs>
    <ListContainer :showEmpty="showEmpty" :showLoading="showLoading">
      <view class="flex-col justify-start content">
        <view class="flex-col list">
          <view
            class="flex-col list-item mt-20"
            v-for="(item, index) in items"
            :key="index"
          >
            <text class="self-center time">2020年03月03日 12:54</text>
            <view class="flex-col mt-12">
              <view class="flex-col notify-con" v-if="tabCur == 0">
                <view class="flex-col header">
                  <text class="self-start title">国庆放假通知</text>
                  <text class="describe line-clamp-two mt-12"
                    >亲爱的用户，本公司于9月29号开始放假，望周知，后续服务也会暂停！亲爱的用户，本公司于9月29号开始放假，望周知，后续服务也会暂停！亲爱的用户，本公司于9月29号开始放假，望周知，后续服务也会暂停！</text
                  >
                </view>
                <view
                  class="flex-row justify-between items-center bottom"
                  @click="goNotifyDetial"
                >
                  <text class="detial">查看详情</text>
                  <image
                    class="arrow-right"
                    src="../../static/images/icon_arrow_05.png"
                  />
                </view>
              </view>
              <view class="flex-col notify-con" v-else>
                <view class="flex-row self-start header">
                  <view class="shrink-0 self-start dot"></view>
                  <text class="flex-1 title double-line"
                    >您有一笔待付款的商品订单（SP23051600001），请尽快支付</text
                  >
                </view>
                <view
                  class="flex-row justify-between items-center bottom"
                  @click="goNotifyDetial"
                >
                  <text class="detial">查看详情</text>
                  <image
                    class="arrow-right"
                    src="../../static/images/icon_arrow_05.png"
                  />
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </ListContainer>
  </view>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue";
import Tabs from "../../components/Tabs.vue";
import ListContainer from "../../components/ListContainer/ListContainer.vue";

export default {
  components: { NavBar, Tabs, ListContainer },
  props: {},
  data() {
    return {
      showEmpty: false,
      showLoading: false,
      tabList: [
        {
          name: "系统公告",
        },
        {
          name: "订单通知",
        },
        {
          name: "服务通知",
        },
      ],
      tabCur: 1,
      items: [null, null, null, null, null, null,null, null, null, null, null, null,null, null, null, null, null, null,null, null, null, null, null, null,null, null, null, null, null, null],
    };
  },

  methods: {
    onTabChange(val) {
      this.tabCur = val;
      if (val >= 1) {
        this.showEmpty = true;
      }
    },
    goNotifyDetial() {
      uni.navigateTo({
        url: "./notifyDetial",
      });
    },
  },
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .section_5 {
    position: relative;
  }
  .content {
    padding-top: 40rpx;
    padding-bottom: 40rpx;
    .list {
      padding: 0 20rpx;
      .list-item {
        &:first-child {
          margin-top: 0;
        }
        .time {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.18rpx;
          color: #a7a7a7;
        }
        .notify-con {
          padding: 0 30rpx;
          background-color: #ffffff;
          border-radius: 12rpx;
          .header {
            margin: 40rpx 0;
            .title {
              font-size: 32rpx;
              font-family: PingFang SC Bold;
              line-height: 29.56rpx;
              font-weight: 700;
              color: #030305;
            }
            .describe {
              width: 650rpx;
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 28rpx;
              color: #6c6c6c;
            }
            .dot {
              margin-top: 8rpx;
              background-color: #fe5252;
              border-radius: 50%;
              width: 12rpx;
              height: 12rpx;
              margin-right: 8rpx;
            }
            .double-line {
              line-height: 38rpx;
              word-break: break-all;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
            }
          }
          .bottom {
            padding: 30rpx 0;
            border-top: 1rpx solid #f0f0f0;
            .detial {
              font-size: 28rpx;
              font-family: 苹方;
              line-height: 25.76rpx;
              color: #6c6c6c;
            }
            .arrow-right {
              width: 24rpx;
              height: 24rpx;
            }
          }
        }
      }
    }
  }
}
</style>
