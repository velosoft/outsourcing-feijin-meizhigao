<template>
  <view class="flex-col view">
    <view class="flex-row justify-between items-center self-stretch group_15">
      <text class="text_26">商品推荐</text>
      <text class="font_9">服务推荐</text>
      <text class="font_9">课程推荐</text>
    </view>
    <view class="self-start section_9"></view>
    <view class="flex-row self-stretch group_16">
      <view class="flex-col section_10">
        <view class="flex-col items-center a-i-background-image-wrapper_6">
          <image
            class="a-i-background-image_2"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=69f26c588c4040c0a2ae6b1d6c407546.png"
          />
        </view>
        <text class="self-start font_10 text_29 mt-15">厨房定制收纳服务</text>
        <view class="flex-row self-stretch equal-division_2 mt-15">
          <view class="flex-col items-center text-wrapper_1"
            ><text class="font_7 text_31">新品上市</text></view
          >
          <view class="flex-col items-center text-wrapper_1 ml-5"
            ><text class="font_7 text_31">好评推荐</text></view
          >
          <view class="flex-col items-center text-wrapper_1 ml-5"
            ><text class="font_7 text_31">新客优选</text></view
          >
        </view>
        <view class="flex-row items-center self-stretch group_19 mt-15">
          <text class="font_7">秒杀价</text>
          <text class="font_13 text_40">200</text>
          <text class="font_12 text_39">￥</text>
          <text class="font_14 text_41">.00</text>
          <text class="font_15 text_42">100人购买</text>
        </view>
      </view>
      <view
        class="ml-16 flex-col items-center a-i-background-image-wrapper group_17"
      >
        <image
          class="a-i-background-image_6"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=1fe6dd1ef410d3f49fa1ec58d8026298.png"
        />
        <image
          class="image_14 a-i-background-image_2"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=69f26c588c4040c0a2ae6b1d6c407546.png"
        />
        <text class="font_10 text_30 pos_13">厨房定制收纳服务</text>
        <view class="flex-col text-wrapper_4 pos_14"
          ><text class="font_11 text_31 text_35">新品上市</text></view
        >
        <view class="flex-col text-wrapper_5 pos_15"
          ><text class="font_11 text_31 text_36">好评推荐</text></view
        >
        <view class="flex-col text-wrapper_6 pos_16"
          ><text class="font_11 text_31 text_37">新客优选</text></view
        >
        <text class="font_13 text_44 pos_18">200</text>
        <text class="font_12 text_43 pos_17">￥</text>
        <text class="font_14 text_45 pos_19">.00</text>
        <text class="font_15 pos_20">100人购买</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
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
.view {
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
      .equal-division_2 {
        padding: 0 0.25rem;
        .text-wrapper_1 {
          flex: 1 1 3rem;
          padding: 0.25rem 0;
          background-color: #fff1ed;
          border-radius: 0.13rem;
          height: 0.88rem;
        }
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
      .font_7 {
        font-size: 0.63rem;
        font-family: 苹方;
        line-height: 0.63rem;
        color: #bb3e0c;
      }
    }
    .a-i-background-image-wrapper {
      position: relative;
      flex: 1 1 10.31rem;
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
    .group_17 {
      height: 16.56rem;
    }
    .a-i-background-image_2 {
      width: 10.31rem;
      height: 10.31rem;
    }
    .font_10 {
      font-size: 0.94rem;
      font-family: PingFang SC;
      line-height: 0.94rem;
      color: #111111;
    }
    .text_31 {
      text-transform: uppercase;
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
</style>
