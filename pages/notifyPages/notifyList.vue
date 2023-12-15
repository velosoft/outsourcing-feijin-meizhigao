<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" title="消息"></nav-bar>
    <fj-sticky :customNavHeight="80">
      <tabs
        class="tabs-wrap"
        :tabList="tabList"
        :TabCur="tabCur"
        @tabChange="onTabChange"
      ></tabs>
    </fj-sticky>
    <list-container
      :showEmpty="!items.length"
      :showLoading="showLoading"
      :finished="finished"
    >
      <view class="flex-col justify-start content">
        <view class="flex-col list">
          <view
            class="flex-col list-item mt-20"
            v-for="(item, index) in items"
            :key="index"
          >
            <text class="self-center time">{{ item.time }}</text>
            <view class="flex-col mt-12">
              <view class="flex-col notify-con" v-if="tabCur == 0">
                <view class="flex-col header">
                  <text class="self-start title">{{ item.title }}</text>
                  <text class="describe line-clamp-two mt-12">{{
                    item.content
                  }}</text>
                </view>
                <view
                  class="flex-row justify-between items-center bottom"
                  @click="goNotifyDetail"
                >
                  <text class="detial">查看详情</text>
                  <image
                    class="arrow-right"
                    src="/static/images/icon_right_arrow_01.png"
                  />
                </view>
              </view>
              <view class="flex-col notify-con" v-else>
                <view class="flex-row self-start header">
                  <view class="shrink-0 self-start dot"></view>
                  <text class="flex-1 title double-line">{{ item.title }}</text>
                </view>
                <view
                  class="flex-row justify-between items-center bottom"
                  @click="goNotifyDetail"
                >
                  <text class="detial">查看详情</text>
                  <image
                    class="arrow-right"
                    src="/static/images/icon_right_arrow_01.png"
                  />
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </list-container>
  </view>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import Tabs from "@/components/Tabs.vue";
import ListContainer from "@/components/ListContainer/ListContainer.vue";
import FjSticky from "@/components/FjSticky.vue";

export default {
  components: { NavBar, Tabs, ListContainer, FjSticky },
  props: {},
  data() {
    return {
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
      pages: [1, 1, 1],
      showLoading: false,
      finished: false,
      tabCur: 0,
      items: [],
      systemAnnouncementList: [
        {
          time: "2020年03月03日 12:54",
          title: "国庆放假通知",
          content:
            "亲爱的用户，本公司于9月29号开始放假，望周知，后续服务也会暂停！",
        },
        {
          time: "2021年05月15日 09:30",
          title: "系统维护通知 - 本周六进行系统升级维护作业",
          content:
            "尊敬的用户，为了提供更好的服务体验，我们计划在本周六进行系统升级维护。在此期间，部分服务可能无法正常使用。我们将尽快完成维护工作，并恢复正常服务。感谢您的理解与支持！",
        },
        {
          time: "2021年08月21日 16:45",
          title: "关于最近网络钓鱼邮件的安全提醒",
          content:
            "近期，我们注意到有增加的网络钓鱼活动。请用户不要点击来历不明的邮件中的链接，并确保您的账户安全。如有任何疑问，请及时与我们的客户服务团队联系。",
        },
        {
          time: "2022年01月10日 08:20",
          title: "新年特别优惠活动开始啦！",
          content:
            "新年快乐！我们为您准备了一系列新年特别优惠。快来看看吧，不要错过这些令人兴奋的优惠和特别活动！详情请访问我们的官网或联系客服。",
        },
        {
          time: "2022年04月18日 14:00",
          title: "客户满意度调查 - 我们需要您的宝贵意见",
          content:
            "为了不断提升我们的服务质量，我们诚邀您参加我们的客户满意度调查。您的意见对我们至关重要，将帮助我们更好地了解您的需求并改进我们的服务。调查链接已发送至您的注册邮箱，感谢您的参与！",
        },
      ],
      orderNotificationList: [
        {
          time: "2020年03月03日 12:54",
          title: "您有一笔待付款的商品订单（SP23051600001），请尽快支付",
        },
        {
          time: "2020年04月15日 09:30",
          title: "订单更新通知：您的订单（SP23051600002）已经发货，请注意查收",
        },
        {
          time: "2020年05月21日 15:20",
          title: "特价促销活动开始了！不要错过我们的限时优惠",
        },
        {
          time: "2020年06月10日 08:15",
          title: "感谢您的购买，您的订单（SP23051600003）已成功签收",
        },
        {
          time: "2020年07月02日 18:45",
          title: "重要通知：关于最近物流延迟的情况说明及客户服务调整",
        },
      ],
      serviceNotificationList: [
        {
          time: "2020年03月03日 12:54",
          title:
            "您的意向订单（YX23051600001）测量时间已调整为2024-05-14 12:00:00",
        },
        {
          time: "2020年04月10日 09:30",
          title: "系统维护通知：计划于2020年04月12日进行系统升级维护",
        },
        {
          time: "2020年05月22日 15:20",
          title: "新功能上线通知：我们新增了个性化推荐功能",
        },
        {
          time: "2020年06月08日 18:45",
          title: "账户安全提醒：请定期更换您的账户密码以保证账户安全",
        },
        {
          time: "2020年07月16日 11:00",
          title: "特惠活动通知：夏季促销活动即将开始，敬请关注！",
        },
      ],
    };
  },
  onReachBottom() {
    this.showLoading = true;
    this.finished = false;

    if (this.pages[this.tabCur] >= 2) {
      this.finished = true;
      return;
    }

    setTimeout(() => {
      this.items = this.items.concat(this.items);
      this.pages[this.tabCur]++;
    }, 1500);
  },
  methods: {
    onTabChange(val) {
      this.showLoading = false;
      this.finished = false;

      // mock_data
      if (this.tabCur == val) {
        this.items = [];
        return;
      }

      this.tabCur = val;
      if (val == 0) {
        this.items = this.systemAnnouncementList;
      } else if (val == 1) {
        this.items = this.orderNotificationList;
      } else {
        this.items = this.serviceNotificationList;
      }
    },
    goNotifyDetail() {
      uni.navigateTo({
        url: "/pages/notifyPages/notifyDetail",
      });
    },
  },
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  .tabs-wrap {
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
