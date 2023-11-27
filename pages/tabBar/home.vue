<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 group_2">
      <view class="flex-row items-center group_24">
        <view class="flex-row items-center flex-1 section_2">
          <image
            class="image_7"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=5fcc6916a5ab113d1b3ddcc34f70cac3.png"
          />
          <text class="ml-6 text_4">搜索</text>
        </view>
        <view class="ml-8 flex-col items-center shrink-0 relative group">
          <image
            class="image_6"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=ffeac1ccce1af8bba808c53471f46788.png"
          />
          <image
            class="image_5 pos"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=4500ef7a4d5e93d0a4af0516550ee7bd.png"
          />
        </view>
      </view>
      <view class="flex-row justify-end section_3">
        <view class="section_4"></view>
        <view class="ml-4 section_5"></view>
        <view class="ml-4 section_5"></view>
      </view>
      <view class="flex-row items-center section_6">
        <image
          class="image_5"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=747a5f574dd1d31f41e2124c80439bc9.png"
        />
        <text class="ml-10 font_2 text_5"
          >显示最新一条系统公告的标题，系统公告的标题…</text
        >
      </view>
      <ClassifyCards class="group_22"></ClassifyCards>
      <CenterPanel class="group_22"></CenterPanel>
      <GridPanel class="group_8"></GridPanel>
      <view class="flex-col group_28">
        <view class="flex-col section_8">
          <view
            class="flex-row justify-between items-center self-stretch group_13"
          >
            <view class="flex-col items-start">
              <text class="text_23">新会员入会礼包</text>
              <text class="CenterPannel-mt-8 CenterPannel-font text_24"
                >你有一份价值100元的新人礼包</text
              >
            </view>
            <view class="flex-col items-center text-wrapper_2"
              ><text class="a-i-outflow">待领取</text></view
            >
          </view>
          <view class="self-stretch divider"></view>
          <text class="self-start CenterPannel-font text_25"
            >2023.07.6-2023.08.12</text
          >
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
    return {};
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
  .group_2 {
    overflow-y: auto;
    .group_24 {
      padding: 24rpx 28rpx 40rpx;
      .section_2 {
        padding: 16rpx 32rpx;
        background-color: #f0f0f0;
        border-radius: 100rpx;
        height: 68rpx;
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
      .group {
        padding-top: 8rpx;
        width: 76rpx;
        .image_6 {
          border-radius: 50%;
          width: 68rpx;
          height: 68rpx;
        }
        .pos {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    .section_3 {
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
    .section_6 {
      padding: 24rpx 32rpx;
      background-color: #f7f7f799;
      .font_2 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #030305;
      }
      .text_5 {
        color: #6c6c6c;
      }
    }
    .image_5 {
      width: 30rpx;
      height: 30rpx;
    }
    .group_22 {
      margin: 56rpx 32rpx 0;
    }
    .group_8 {
      margin: 64rpx 32rpx 0;
    }
    .group_28 {
      margin: 40rpx 32rpx 0;
      .section_8 {
        padding-bottom: 8rpx;
        background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=484db8f69476ecb8a61eb74c858fcdd9.png");
        background-position: 0% 0%;
        background-size: 690rpx 186rpx;
        background-repeat: no-repeat;
        .group_13 {
          padding: 32rpx 24rpx 32rpx 40rpx;
          .text_23 {
            color: #bb3e0c;
            font-size: 32rpx;
            font-family: HarmonyOSSansSC;
            font-weight: 700;
            line-height: 32rpx;
          }
          .CenterPannel-mt-8 {
            margin-top: 16rpx;
          }
          .text_24 {
            font-size: 22rpx;
            line-height: 22rpx;
          }
          .text-wrapper_2 {
            padding: 16rpx 0;
            background-color: #bb3e0c;
            border-radius: 8rpx;
            width: 120rpx;
            height: 52rpx;
            .a-i-outflow {
              color: #ffffff;
              font-size: 24rpx;
              font-family: HarmonyOSSansSC;
              font-weight: 700;
              line-height: 24rpx;
            }
          }
        }
        .divider {
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
        .text_25 {
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
