<template>
  <view class="flex-col flex-1 group_2">
    <view class="flex-row items-center group_24">
      <u-search class="section_2"></u-search>
      <view
        class="ml-8 flex-col justify-start items-center shrink-0 relative group"
      >
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
    <ClassifyCards class="group_22" />
    <CenterPanel class="group_27" />
    <GridPanel class="group_8" />
    <view class="flex-col justify-start group_28">
      <view class="flex-col section_8">
        <view
          class="flex-row justify-between items-center self-stretch group_13"
        >
          <view class="flex-col items-start">
            <text class="text_23">新会员入会礼包</text>
            <text class="mt-8 font_7 text_24">你有一份价值100元的新人礼包</text>
          </view>
          <view class="flex-col justify-start items-center text-wrapper_2"
            ><text class="a-i-outflow">待领取</text></view
          >
        </view>
        <view class="self-stretch divider"></view>
        <text class="self-start font_7 text_25">2023.07.6-2023.08.12</text>
      </view>
    </view>
    <RecommendedList class="section_12" />
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
.ml-5 {
  margin-left: 0.31rem;
}
.mt-15 {
  margin-top: 0.94rem;
}
.group_2 {
  overflow-y: auto;
  .group_24 {
    padding: 0.75rem 0.88rem 1.25rem;
    .section_2 {
      flex: 1 1 0;
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
    .group_3 {
      position: relative;
      flex: 1 1 10.38rem;
      .a-i-background-image {
        width: 10.38rem;
        height: 5.5rem;
      }
      .text_1 {
        font-size: 0.81rem;
        line-height: 0.81rem;
      }
      .pos_2 {
        position: absolute;
        left: 0.78rem;
        top: 0.94rem;
      }
      .image_8 {
        width: 1.06rem;
        height: 0.19rem;
      }
      .pos_4 {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
      }
      .pos_3 {
        position: absolute;
        left: 0.8rem;
        top: 0.94rem;
      }
      .pos_5 {
        position: absolute;
        left: 0.81rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .equal-division-item {
      height: 5.5rem;
    }
  }
  .group_27 {
    margin-top: 1.75rem;
  }
  .font_3 {
    font-size: 0.75rem;
    font-family: PingFangSC-Medium;
    line-height: 0.75rem;
    color: #ffffff;
  }
  .group_8 {
    margin-top: 2rem;
  }
  .group_9 {
    padding: 0 1rem;
    .font_4 {
      font-size: 0.94rem;
      font-family: PingFang SC;
      line-height: 0.94rem;
      color: #000000;
    }
    .text_7 {
      line-height: 0.95rem;
    }
    .font_5 {
      font-size: 0.94rem;
      font-family: PingFang SC;
      line-height: 0.94rem;
      color: #a7a7a7;
    }
    .text_8 {
      font-size: 0.88rem;
      line-height: 0.88rem;
    }
    .group_6 {
      height: 10.31rem;
    }
    .group_7 {
      flex: 1 1 10.31rem;
      .a-i-background-image-wrapper_3 {
        background-color: #ececec66;
        border-radius: 0.25rem;
      }
      .a-i-background-image-wrapper_4 {
        background-color: #d6d6d666;
        border-radius: 0.25rem;
      }
      .a-i-background-image-wrapper_2 {
        position: relative;
        .a-i-background-image_3 {
          width: 10.38rem;
          height: 4.69rem;
        }
        .font_6 {
          font-size: 0.63rem;
          font-family: 苹方;
          line-height: 0.63rem;
          color: #6c6c6c;
        }
        .pos_8 {
          position: absolute;
          left: 0.53rem;
          bottom: 1.87rem;
        }
        .text-wrapper {
          padding: 0.25rem 0;
          background-color: #b09053;
          .text_10 {
            margin: 0 0.25rem;
          }
        }
        .pos_7 {
          position: absolute;
          left: 0.5rem;
          top: 0.64rem;
        }
        .a-i-background-image_4 {
          position: absolute;
          right: 0.75rem;
          bottom: 0.63rem;
        }
        .image_9 {
          filter: drop-shadow(0rem 0.13rem 0.13rem #86868629);
          width: 3.13rem;
          height: 3.13rem;
        }
        .pos_11 {
          position: absolute;
          left: 0.52rem;
          bottom: 1.62rem;
        }
        .pos_9 {
          position: absolute;
          left: 0.5rem;
          top: 0.71rem;
        }
        .a-i-background-image_5 {
          position: absolute;
          right: 0.31rem;
          top: 50%;
          transform: translateY(-50%);
        }
        .image_11 {
          width: 4.06rem;
          height: 4.06rem;
        }
      }
    }
    .text_11 {
      line-height: 0.94rem;
    }
    .text_17 {
      font-size: 0.88rem;
      line-height: 0.88rem;
    }
  }
  .font_2 {
    font-size: 0.75rem;
    font-family: 苹方;
    line-height: 0.75rem;
    color: #030305;
  }
  .group_28 {
    margin-top: 1.5rem;
    .section_8 {
      margin: 0 1rem;
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
      .text_25 {
        margin-left: 1.5rem;
        margin-top: 0.75rem;
        line-height: 0.75rem;
        text-align: center;
        word-break: break-all;
      }
    }
  }
  .font_7 {
    font-size: 0.63rem;
    font-family: 苹方;
    line-height: 0.63rem;
    color: #bb3e0c;
  }
  .view {
    margin-top: 1.38rem;
    padding: 0 1rem;
    background-color: #f8f8f8;
    .group_15 {
      padding: 1rem 1.75rem 0.25rem;
      .text_26 {
        color: #030305;
        font-size: 1rem;
        font-family: PingFangSC-Medium;
        line-height: 1rem;
      }
      .font_9 {
        font-size: 0.94rem;
        font-family: 苹方;
        line-height: 0.94rem;
        color: #bcbcbc;
      }
    }
    .section_9 {
      margin-left: 3.25rem;
      background-color: #b09053;
      border-radius: 3.13rem;
      width: 0.63rem;
      height: 0.19rem;
    }
    .group_16 {
      padding: 0.88rem 0;
      .section_10 {
        padding-bottom: 1rem;
        flex: 1 1 10.31rem;
        background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=1fe6dd1ef410d3f49fa1ec58d8026298.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 16.56rem;
        .a-i-background-image-wrapper_6 {
          align-self: stretch;
        }
        .text_29 {
          margin-left: 0.25rem;
          font-size: 0.88rem;
          line-height: 0.88rem;
        }
        .group_19 {
          padding-left: 0.25rem;
          .text_40 {
            margin-left: 0.5rem;
            color: #bb3e0c;
          }
          .text_39 {
            margin-left: -2.25rem;
            color: #bb3e0c;
          }
          .text_41 {
            margin-left: 1.5rem;
            color: #bb3e0c;
          }
          .text_42 {
            margin-left: 1.25rem;
          }
        }
      }
      .group_17 {
        height: 16.56rem;
      }
      .font_10 {
        font-size: 0.94rem;
        font-family: PingFang SC;
        line-height: 0.94rem;
        color: #111111;
      }
      .font_13 {
        font-size: 0.94rem;
        font-family: HarmonyOSSans;
        letter-spacing: -0.036rem;
        line-height: 0.94rem;
        font-weight: 700;
      }
      .font_12 {
        font-size: 0.63rem;
        font-family: PingFang SC;
        line-height: 0.63rem;
      }
      .font_14 {
        font-size: 0.63rem;
        font-family: HarmonyOSSansSC;
        line-height: 0.63rem;
        font-weight: 700;
      }
      .font_15 {
        font-size: 0.75rem;
        font-family: 苹方;
        line-height: 0.75rem;
        color: #a7a7a7;
      }
    }
  }
  .a-i-background-image_2 {
    width: 10.31rem;
    height: 10.31rem;
  }
  .equal-division_2 {
    padding: 0 0.25rem;
    .equal-division-item_1 {
      flex: 1 1 4.59rem;
      align-self: center;
    }
    .group_23 {
      padding: 0 0.5rem;
    }
    .equal-division-item_4 {
      flex: 1 1 4.59rem;
      align-self: flex-start;
      margin-top: 1rem;
      .image_13 {
        border-radius: 0.13rem;
        width: 1.88rem;
        height: 0.25rem;
      }
    }
    .image_12 {
      width: 3rem;
      height: 3rem;
    }
    .group_10 {
      flex: 1 1 4.59rem;
      .font_8 {
        font-size: 0.63rem;
        font-family: 苹方;
        line-height: 0.63rem;
        color: #030305;
      }
      .text_22 {
        font-size: 0.69rem;
        line-height: 0.69rem;
      }
    }
    .group_29 {
      padding: 0.75rem 0;
    }
    .group_1 {
      padding: 1rem 0;
    }
    .text-wrapper_3 {
      flex: 1 1 3rem;
      padding: 0.25rem 0;
      background-color: #fff1ed;
      border-radius: 0.13rem;
      height: 0.88rem;
    }
  }
  .a-i-background-image-wrapper {
    position: relative;
    flex: 1 1 10.31rem;
    .section_7 {
      padding: 0.25rem 0 0.25rem 0.5rem;
      background-color: #bb3e0c;
      .text_9 {
        color: #ffffff;
        font-size: 0.75rem;
        font-family: PingFang SC;
        line-height: 0.75rem;
      }
      .image_10 {
        width: 0.81rem;
        height: 0.63rem;
      }
    }
    .pos_6 {
      position: absolute;
      left: 0.75rem;
      top: 0.64rem;
    }
    .text_14 {
      font-size: 0.81rem;
      line-height: 0.81rem;
    }
    .pos_10 {
      position: absolute;
      left: 0.77rem;
      bottom: 2.31rem;
    }
    .text_16 {
      color: #ffffff;
    }
    .pos_12 {
      position: absolute;
      left: 0.78rem;
      bottom: 1.31rem;
    }
    .a-i-background-image_6 {
      width: 10.31rem;
      height: 16.56rem;
    }
    .image_14 {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
    .text_30 {
      font-size: 0.88rem;
      line-height: 0.88rem;
    }
    .pos_13 {
      position: absolute;
      left: 0.34rem;
      bottom: 4.54rem;
    }
    .text-wrapper_4 {
      padding: 0.25rem 0;
      background-image: url("https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=3ed077c23f681e1c9d0b24c83c2d95e0.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .text_35 {
        margin: 0 0.25rem;
      }
    }
    .pos_14 {
      position: absolute;
      left: 0.31rem;
      top: 12.75rem;
    }
    .text-wrapper_5 {
      padding: 0.25rem 0;
      background-color: #fffaf0;
      border-radius: 0.13rem;
      .text_36 {
        margin: 0 0.25rem;
      }
    }
    .pos_15 {
      position: absolute;
      left: 50%;
      top: 12.75rem;
      transform: translateX(-50%);
    }
    .font_11 {
      font-size: 0.63rem;
      font-family: 苹方;
      line-height: 0.63rem;
      color: #b09053;
    }
    .text-wrapper_6 {
      padding: 0.25rem 0;
      background-color: #fffbf2;
      border-radius: 0.13rem;
      .text_37 {
        margin: 0 0.25rem;
      }
    }
    .pos_16 {
      position: absolute;
      right: 0.38rem;
      top: 12.75rem;
    }
    .text_44 {
      color: #030305;
    }
    .pos_18 {
      position: absolute;
      left: 1.04rem;
      bottom: 1.15rem;
    }
    .text_43 {
      color: #030305;
    }
    .pos_17 {
      position: absolute;
      left: 0.63rem;
      bottom: 1.41rem;
    }
    .text_45 {
      color: #111111;
    }
    .pos_19 {
      position: absolute;
      left: 2.72rem;
      bottom: 1.37rem;
    }
    .pos_20 {
      position: absolute;
      right: 0;
      bottom: 1.08rem;
    }
  }
  .text_31 {
    text-transform: uppercase;
  }
}
</style>
