<template>
  <view class="flex-col page">
    <NavBar
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col flex-1 group_3">
      <view class="flex-col section_2">
        <view class="flex-col group_4">
          <view class="flex-col items-start self-stretch">
            <view class="flex-col justify-start items-center button"
              ><text class="font_5">当前等级</text></view
            >
            <text class="text_4">L1</text>
            <text class="text_5">普通会员</text>
          </view>
          <view class="flex-col items-start self-start mt-36">
            <view class="flex-row justify-center items-center group_5">
              <text class="text_6">0/150</text>
              <image
                class="image_7 ml-8"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=44e5fdee3417330092955eef13d37bc5.png"
              />
            </view>
            <view class="section_3"></view>
            <text class="font_3 text_7">当前等级已完成消费值累计</text>
          </view>
        </view>
        <gridSwiper
          :list="list3"
          previousMargin="30"
          nextMargin="30"
          circular
          :autoplay="false"
          radius="5"
          bgColor="#ffffff"
        ></gridSwiper>
        <view class="flex-row">
          <view class="shrink-0 section_6"></view>
          <view class="flex-col flex-1 section_5 ml-10">
            <view class="flex-row justify-between group_6">
              <text class="self-center text_8">L1 普通会员权益</text>
              <view class="flex-row items-start">
                <text class="font_3 text_9">查看全部8项</text>
                <image
                  class="shrink-0 image_8 ml-4"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=8545238bf60279b3475a36172122bb89.png"
                />
              </view>
            </view>
            <view class="flex-row mt-8">
              <view class="flex-col items-center group_7 equal-division-item">
                <image
                  class="image_9"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=530149c7e72d3e4963b219bccf21d95e.png"
                />
                <text class="font_2 mt-8">商品折扣</text>
              </view>
              <view class="flex-col items-center group_7 equal-division-item">
                <image
                  class="image_9"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=8971903b78d74fafd59fc99115aa1ddf.png"
                />
                <text class="font_2 mt-8">服务折扣</text>
              </view>
              <view class="flex-col items-center group_7 equal-division-item">
                <image
                  class="image_9"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=8ec119aa2ca99f3ee7da90c8b6e41edd.png"
                />
                <text class="font_2 mt-8">分销提成</text>
              </view>
              <view class="flex-col items-center group_7 equal-division-item">
                <image
                  class="image_9"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=49010890fd6b0f9c4b4cbe88059947a1.png"
                />
                <text class="font_5 text_10 mt-8">其他权益</text>
              </view>
            </view>
          </view>
          <view class="shrink-0 section_6 ml-10"></view>
        </view>
      </view>
      <view class="flex-col section_7">
        <text class="self-start font text_11">等级说明</text>
        <view class="flex-col self-stretch mt-24">
          <view class="flex-col section_8">
            <text class="self-start font_5 text_14">1、会员等级分类</text>
            <text class="self-stretch font_4 mt-12">
              会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生
            </text>
          </view>
          <view class="flex-col section_8 mt-18">
            <text class="self-start font_5 text_14">2、会员升级条件</text>
            <text class="self-stretch font_4 mt-12">
              会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生
            </text>
          </view>
          <view class="flex-col section_8 mt-18">
            <text class="self-start font_5 text_14">3、会员降级条件</text>
            <text class="self-stretch font_4 mt-12">
              会员等级内容由后台富文本编辑器生成内容由后台富文本编辑器生成会员升级条件内容由后台富文本编辑器生
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { NavBar } from "../../components/NavBar/NavBar.vue";
import gridSwiper from "./gridSwiper/gridSwiper.vue";

export default {
  components: { NavBar, gridSwiper },
  props: {},
  data() {
    return {
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
      title: "会员中心",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 1920rpx;
  .group_3 {
    overflow-y: auto;
    .section_2 {
      padding-bottom: 20rpx;
      background-image: url("https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=16f8d09c84582522b9d9690e337c7d14.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .group_4 {
        padding: 96rpx 60rpx 200rpx;
        height: 632rpx;
        .button {
          padding: 16rpx 0;
          background-color: #000000;
          border-radius: 24rpx;
          width: 130rpx;
        }
        .text_4 {
          margin-top: 8rpx;
          color: #111111;
          font-size: 48rpx;
          font-family: HarmonyOSSans;
          font-weight: 700;
          line-height: 48rpx;
        }
        .text_5 {
          margin-top: 32rpx;
          color: #111111;
          font-size: 48rpx;
          font-family: 苹方;
          line-height: 48rpx;
        }
        .group_5 {
          padding-bottom: 16rpx;
          width: 93rpx;
          .text_6 {
            color: #111111;
            font-size: 24rpx;
            font-family: HarmonyOSSans;
            font-weight: 700;
            line-height: 24rpx;
          }
          .image_7 {
            width: 6rpx;
            height: 12rpx;
          }
        }
        .section_3 {
          background-color: #111111;
          border-radius: 4rpx;
          width: 244rpx;
          height: 8rpx;
        }
        .text_7 {
          margin-top: 16rpx;
          font-size: 22rpx;
          line-height: 22rpx;
        }
      }
      .section_6 {
        background-color: #ffffff;
        border-radius: 4rpx;
        width: 40rpx;
        height: 256rpx;
      }
      .section_5 {
        padding: 32rpx 0 24rpx;
        background-color: #ffffff;
        border-radius: 8rpx;
        height: 256rpx;
        .group_6 {
          padding: 0 24rpx;
          .text_8 {
            color: #000000;
            font-size: 28rpx;
            font-family: 苹方;
            line-height: 28rpx;
          }
          .text_9 {
            font-size: 22rpx;
            line-height: 22rpx;
          }
          .image_8 {
            margin-top: 16rpx;
            width: 8rpx;
            height: 16rpx;
          }
        }
        .group_7 {
          flex: 1 1 157.5rpx;
          .image_9 {
            border-radius: 50%;
            width: 96rpx;
            height: 96rpx;
          }
          .font_2 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 24rpx;
            color: #3c3d41;
          }
          .text_10 {
            color: #9e9ea0;
          }
        }
        .equal-division-item {
          padding: 8rpx 0;
        }
      }
      .font_3 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 24rpx;
        color: #6d6d6d;
      }
    }
    .section_7 {
      padding: 48rpx 32rpx 64rpx 48rpx;
      background-color: #111111;
      border-left: solid 2rpx #2d2e32;
      border-right: solid 2rpx #2d2e32;
      border-top: solid 2rpx #2d2e32;
      border-bottom: solid 2rpx #2d2e32;
      .font {
        font-size: 36rpx;
        font-family: 苹方;
        line-height: 36rpx;
      }
      .text_11 {
        color: #ffffff;
      }
      .section_8 {
        margin-right: 4rpx;
        padding: 24rpx 40rpx;
        background-color: #1e1f20;
        border-radius: 8rpx;
        .text_14 {
          font-size: 26rpx;
          line-height: 26rpx;
        }
        .font_4 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 48rpx;
          color: #ffffff;
        }
      }
    }
    .font_5 {
      font-size: 24rpx;
      font-family: 苹方;
      line-height: 24rpx;
      color: #ffffff;
    }
  }
}
</style>
