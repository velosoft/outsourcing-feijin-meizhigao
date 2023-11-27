<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 home-con">
      <view class="flex-row items-center search-box">
        <view class="flex-row items-center flex-1 section_2">
          <image
            class="image_7"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=search.png"
          />
          <input
            class="uni-input"
            placeholder-class="text_4"
            focus
            placeholder="搜索"
          />
        </view>
        <view class="ml-8 flex-col items-center shrink-0 relative search-right">
          <image
            class="message"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=message.png"
          />
          <view class="flex-col justify-start items-center dot-wrap dot-pos">
            <image
              class="notify-image"
              src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=70dabafc7502ff82bf3a590f5eb4c3cf.png"
            />
            <text class="home-font_03 dot-text dot-pos-text">1</text>
          </view>
        </view>
      </view>
      <view class="flex-row justify-end swiper-box">
        <view class="section_4"></view>
        <view class="ml-4 section_5"></view>
        <view class="ml-4 section_5"></view>
      </view>
      <view class="flex-row items-center notify-box">
        <image
          class="notify-image"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=747a5f574dd1d31f41e2124c80439bc9.png"
        />
        <text class="ml-10 home-font_02 notify-text"
          >显示最新一条系统公告的标题，系统公告的标题…</text
        >
      </view>
      <ClassifyCards class="group_22"></ClassifyCards>
      <CenterPanel class="group_22"></CenterPanel>
      <GridPanel class="group_8"></GridPanel>
      <view class="flex-col member-box">
        <view class="flex-col justify-start relative member-section">
          <image
            class="member-bg member-pos"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=member-bg.png"
          />
          <view class="flex-col relative">
            <view
              class="flex-row justify-between items-center self-stretch member-group"
            >
              <view class="flex-col items-start">
                <text class="member-text">新会员入会礼包</text>
                <text
                  class="CenterPannel-mt-8 CenterPannel-font member-describe"
                  >你有一份价值100元的新人礼包</text
                >
              </view>
              <view class="flex-col items-center member-text-wrapper"
                ><text class="btn-member">待领取</text></view
              >
            </view>
            <view class="self-stretch member-divider"></view>
            <text class="self-start CenterPannel-font member-time"
              >2023.07.6-2023.08.12</text
            >
          </view>
        </view>
      </view>
      <RecommendedList class="section_13"></RecommendedList>
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
      keyword: "搜索",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .home-con {
    overflow-y: auto;
    .search-box {
      padding: 24rpx 28rpx 40rpx;
      .section_2 {
        padding: 16rpx 32rpx;
        background-color: #f0f0f0;
        border-radius: 100rpx;
        height: 68rpx;
        .uni-input {
          margin-left: 12rpx;
        }

        .image_7 {
          width: 32.68rpx;
          height: 30.7rpx;
        }
        .text_4 {
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
      padding: 488rpx 20rpx 24rpx;
      background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=fc726dc031e684bc3430d7da9a9eef75.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .section_4 {
        background-color: #ffffff;
        border-radius: 20rpx;
        width: 36rpx;
        height: 4rpx;
      }
      .section_5 {
        background-color: #ffffff80;
        border-radius: 20rpx;
        width: 36rpx;
        height: 4rpx;
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
    .group_22 {
      margin: 56rpx 32rpx 0;
    }
    .group_8 {
      margin: 64rpx 32rpx 0;
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
        .CenterPannel-font {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 20rpx;
          color: #bb3e0c;
        }
        .member-time {
          margin-left: 48rpx;
          margin-top: 24rpx;
          line-height: 24rpx;
          text-align: center;
          word-break: break-all;
        }
      }
    }
    .section_13 {
      margin-top: 44rpx;
    }
  }
}
</style>
