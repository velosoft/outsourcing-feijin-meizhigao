<template>
  <view class="flex-col page">
    <uni-nav-bar
      :fixed="true"
      shadow
      height="88rpx"
      :status-bar="true"
      :border="false"
    >
      <block slot="left">
        <image class="logo" src="../../static/images/logo.png" />
      </block>
    </uni-nav-bar>
    <view class="flex-col flex-1 home-con">
      <view class="flex-row items-center search-box">
        <view class="flex-row items-center flex-1 searech-wrap">
          <image class="search-image" src="../../static/images/search.png" />
          <input
            class="uni-input flex-1"
            placeholder-class="placeholder-text"
            focus
            placeholder="搜索"
          />
        </view>
        <view class="ml-8 flex-col items-center shrink-0 relative search-right">
          <image class="message" src="../../static/images/message.png" />
          <view class="flex-col justify-start items-center dot-wrap dot-pos">
            <image class="notify-image" src="../../static/images/dot_bg.png" />
            <text class="home-font_03 dot-text dot-pos-text">1</text>
          </view>
        </view>
      </view>
      <view class="flex-row relative swiper-box">
        <swiper
          class="banner-swiper"
          style="height: 516rpx; width: 750rpx"
          circular
          :autoplay="true"
          @change="change"
        >
          <swiper-item v-for="(item, index) in items" :key="index">
            <image
              class="swiper-images"
              src="../../static/mock/home-swiper-image.png"
              mode="aspectFit|aspectFill|widthFix"
              lazy-load="false"
            >
            </image>
          </swiper-item>
        </swiper>
        <view class="flex-row indicator-wrapper">
          <view
            class="indicator-dots"
            :class="{ active: index == current }"
            v-for="(item, index) in items"
            :key="index"
          ></view>
        </view>
      </view>
      <view class="flex-row items-center notify-box">
        <image class="notify-image" src="../../static/images/notify.png" />
        <text class="ml-10 home-font_02 notify-text"
          >显示最新一条系统公告的标题，系统公告的标题…</text
        >
      </view>
      <ClassifyCards class="box-top"></ClassifyCards>
      <CenterPanel class="box-top"></CenterPanel>
      <GridPanel class="box-top"></GridPanel>
      <view class="flex-col member-box">
        <view class="flex-col justify-start relative member-section">
          <image
            class="member-bg member-pos"
            src="../../static/images/member_bg.png"
          />
          <view class="flex-col relative">
            <view
              class="flex-row justify-between items-center self-stretch member-group"
            >
              <view class="flex-col items-start">
                <text class="member-text">新会员入会礼包</text>
                <text class="CenterPannel-mt-8 home-font_04 member-describe"
                  >你有一份价值100元的新人礼包</text
                >
              </view>
              <view class="flex-col items-center member-text-wrapper"
                ><text class="btn-member">待领取</text></view
              >
            </view>
            <view class="self-stretch member-divider"></view>
            <text class="self-start home-font_04 member-time"
              >2023.07.6-2023.08.12</text
            >
          </view>
        </view>
      </view>
      <RecommendedList
        class="section_13"
        :itemsLeft="itemsLeft"
        :itemsRight="itemsRight"
      ></RecommendedList>
      <view class="flex-col justify-start items-center loading-wrapper">
        <text v-if="status === 'loading'" class="font_10 text_35">加载中~</text>
        <text v-else class="font_10 text_35">没有更多数据啦</text>
      </view>
    </view>
  </view>
</template>

<script>
import ClassifyCards from "../../components/ClassifyCards.vue";
import CenterPanel from "../../components/CenterPanel.vue";
import GridPanel from "../../components/GridPanel.vue";
import RecommendedList from "../../components/RecommendedList.vue";

export default {
  components: { CenterPanel, ClassifyCards, GridPanel, RecommendedList },
  props: {},
  data() {
    return {
      status: "loadmore",
      page: 0,
      keyword: "搜索",
      items: [null, null, null],
      itemsLeft: [...items],
      itemsRight: [...items_1],
      current: 0,
    };
  },
  onReachBottom() {
    if (this.page >= 2) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.itemsLeft = [...this.itemsLeft, ...items];
      this.itemsRight = [...this.itemsRight, ...items_1];

      if (this.page >= 2) this.status = "nomore";
      else this.status = "loading";
    }, 1500);
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
      console.log("轮播图", e.detail.current);
    },
  },
};

const items = [
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },

  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
];
const items_1 = [
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
];
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;

  .logo {
    width: 154rpx;
    height: 54rpx;
  }
  .home-con {
    overflow-y: auto;
    .search-box {
      padding: 24rpx 28rpx 40rpx;
      .searech-wrap {
        padding: 16rpx 32rpx;
        background-color: #f0f0f0;
        border-radius: 100rpx;
        height: 68rpx;
        .uni-input {
          margin-left: 12rpx;
          /deep/ .uni-input-input {
            font-size: 26rpx;
            font-family: PingFang SC Bold;
            font-weight: 700;
            line-height: 26rpx;
          }
        }

        .search-image {
          width: 32rpx;
          height: 30rpx;
        }
        .placeholder-text {
          color: #a7a7a7;
          font-size: 26rpx;
          font-family: PingFang SC Bold;
          font-weight: 700;
          line-height: 26rpx;
        }
      }
      .search-right {
        padding-top: 8rpx;
        width: 76rpx;
        .message {
          border-radius: 50%;
          width: 68rpx;
          height: 68rpx;
        }
        .dot-wrap {
          background-color: #ffffff00;
          width: 30rpx;
          .home-font_03 {
            font-size: 20rpx;
            font-family: PingFang SC;
            line-height: 20rpx;
          }
          .dot-text {
            color: #ffffff;
            line-height: 14.28rpx;
          }
          .dot-pos-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .dot-pos {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    .swiper-box {
      width: 100%;
      height: 516rpx;
      .swiper-images {
        width: 750rpx;
        height: 516rpx;
      }
      .indicator-wrapper {
        position:absolute;
        bottom: 26rpx;
        right: 20rpx;

        .indicator-dots {
          background-color: #ffffff;
          border-radius: 20rpx;
          width: 36rpx;
          height: 4rpx;
          margin-left: 10rpx;
        }
        .active {
          background-color: #ffffff80;
        }
      }
    }
    .notify-box {
      padding: 24rpx 32rpx;
      background-color: #f7f7f799;
      .home-font_02 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #030305;
      }
      .notify-text {
        color: #6c6c6c;
      }
    }
    .notify-image {
      width: 30rpx;
      height: 30rpx;
    }
    .box-top {
      margin: 56rpx 32rpx 0;
    }
    .member-box {
      margin: 40rpx 32rpx 0;
      .member-section {
        padding-bottom: 8rpx;
        height: 186rpx;
        .member-bg {
          width: 92vw;
          height: 24.8vw;
        }
        .member-pos {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        .member-group {
          padding: 32rpx 24rpx 32rpx 40rpx;
          .member-text {
            color: #bb3e0c;
            font-size: 32rpx;
            font-family: HarmonyOSSansSC;
            font-weight: 700;
            line-height: 32rpx;
          }
          .CenterPannel-mt-8 {
            margin-top: 16rpx;
          }
          .member-describe {
            font-size: 22rpx;
            line-height: 22rpx;
          }
          .member-text-wrapper {
            padding: 16rpx 0;
            background-color: #bb3e0c;
            border-radius: 8rpx;
            width: 120rpx;
            height: 52rpx;
            .btn-member {
              color: #ffffff;
              font-size: 24rpx;
              font-family: HarmonyOSSansSC;
              font-weight: 700;
              line-height: 24rpx;
            }
          }
        }
        .member-divider {
          background-image: repeating-linear-gradient(
            90deg,
            #ead2ca,
            #ead2ca 0.58%,
            transparent 0.58%,
            transparent 1.161%
          );
          background-position: -2rpx 0rpx;
          height: 2rpx;
        }
        .home-font_04 {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 20rpx;
          color: #bb3e0c;
        }
        .member-time {
          margin: 16rpx 0 8rpx 40rpx;
          line-height: 24rpx;
          text-align: center;
          word-break: break-all;
        }
      }
    }
    .section_13 {
      margin-top: 44rpx;
    }
    .loading-wrapper {
      padding: 40rpx 0;
      .font_10 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #a7a7a7;
      }
      .text_35 {
        font-size: 26rpx;
        line-height: 26rpx;
      }
    }
  }
}
</style>
