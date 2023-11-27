<template>
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
    <CenterPannel class="group_22"></CenterPannel>
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
</template>

<script>
import ClassifyCards from "../../components/ClassifyCards.vue";
import CenterPanel from "../../components/CenterPanel.vue";
import GridPanel from "../../components/GridPanel.vue";
import RecommendedList from "../../components/RecommendedList.vue";

export default {
  components: { ClassifyCards, CenterPanel, GridPanel, RecommendedList },
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.group_2 {
  overflow-y: auto;
  .group_24 {
    padding: 0.75rem 0.88rem 1.25rem;
    .section_2 {
      padding: 0.5rem 1rem;
      background-color: #f0f0f0;
      border-radius: 3.13rem;
      height: 2.13rem;
      .image_7 {
        width: 1.02rem;
        height: 0.96rem;
      }
      .text_4 {
        color: #a7a7a7;
        font-size: 0.81rem;
        font-family: PingFang SC Bold;
        font-weight: 700;
        line-height: 0.81rem;
      }
    }
    .group {
      padding-top: 0.25rem;
      width: 2.38rem;
      .image_6 {
        border-radius: 50%;
        width: 2.13rem;
        height: 2.13rem;
      }
      .pos {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
  .section_3 {
    padding: 15.25rem 0.63rem 0.75rem;
    background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=fc726dc031e684bc3430d7da9a9eef75.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .section_4 {
      background-color: #ffffff;
      border-radius: 0.63rem;
      width: 1.13rem;
      height: 0.13rem;
    }
    .section_5 {
      background-color: #ffffff80;
      border-radius: 0.63rem;
      width: 1.13rem;
      height: 0.13rem;
    }
  }
  .section_6 {
    padding: 0.75rem 1rem;
    background-color: #f7f7f799;
    .font_2 {
      font-size: 0.75rem;
      font-family: 苹方;
      line-height: 0.75rem;
      color: #030305;
    }
    .text_5 {
      color: #6c6c6c;
    }
  }
  .image_5 {
    width: 0.94rem;
    height: 0.94rem;
  }
  .group_22 {
    margin: 1.75rem 1rem 0;
  }
  .group_8 {
    margin: 2rem 1rem 0;
  }
  .group_28 {
    margin: 1.25rem 1rem 0;
    .section_8 {
      padding-bottom: 0.25rem;
      background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=484db8f69476ecb8a61eb74c858fcdd9.png");
      background-position: 0% 0%;
      background-size: 21.56rem 5.81rem;
      background-repeat: no-repeat;
      .group_13 {
        padding: 1rem 0.75rem 1rem 1.25rem;
        .text_23 {
          color: #bb3e0c;
          font-size: 1rem;
          font-family: HarmonyOSSansSC;
          font-weight: 700;
          line-height: 1rem;
        }
        .CenterPannel-mt-8 {
          margin-top: 0.5rem;
        }
        .text_24 {
          font-size: 0.69rem;
          line-height: 0.69rem;
        }
        .text-wrapper_2 {
          padding: 0.5rem 0;
          background-color: #bb3e0c;
          border-radius: 0.25rem;
          width: 3.75rem;
          height: 1.63rem;
          .a-i-outflow {
            color: #ffffff;
            font-size: 0.75rem;
            font-family: HarmonyOSSansSC;
            font-weight: 700;
            line-height: 0.75rem;
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
        background-position: -0.063rem 0rem;
        height: 0.063rem;
      }
      .CenterPannel-font {
        font-size: 0.63rem;
        font-family: 苹方;
        line-height: 0.63rem;
        color: #bb3e0c;
      }
      .text_25 {
        margin-left: 1.5rem;
        margin-top: 0.75rem;
        line-height: 0.75rem;
        text-align: center;
        word-break: break-all;
      }
    }
  }
  .section_13 {
    margin-top: 1.38rem;
  }
}
</style>
