<template>
  <view class="flex-col justify-start page">
    <view class="flex-col group">
      <view class="flex-col">
        <view class="flex-row justify-center items-center relative section">
          <view class="section_2 pos_2"></view>
          <text class="font text">9:41 AM</text>
          <view class="flex-row items-center pos">
            <text class="font text text_2">100%</text>
            <image
              class="shrink-0 image"
              src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=1844ca254ebcd2fa8052347db6ea78c1.png"
            />
          </view>
        </view>
        <view class="flex-row justify-center items-center relative section_3">
          <image
            class="image_2 pos_4"
            src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=b4a99cb915f1a947b5d084dfd25f2155.png"
          />
          <text class="font_2 text_3">消息</text>
          <view class="flex-row items-center section_4 pos_3">
            <image
              class="image_4"
              src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=867365840a1a9b9665e5607366f4359a.png"
            />
            <image
              class="image_3 ml-24"
              src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=0b111ca90e1f998a526afc35e1fc6089.png"
            />
          </view>
        </view>
      </view>
      <v-tabs
        class="section_5"
        v-bind:scroll="false"
        v-bind:tabs="tabNames"
        lineHeight="6rpx"
        v-bind:lineScale="0.2"
        lineColor="#b1a76e"
        padding="0 22rpx"
      ></v-tabs>
      <view class="flex-col group_2">
        <text class="self-center font_4">2020年03月03日 12:54</text>
        <view class="flex-col self-stretch ai-background-image-wrapper_1 mt-13">
          <view class="flex-row items-center">
            <view class="shrink-0 section_7"></view>
            <view class="group_3 ml-5">
              <text class="font_2 text_6">您有一个新的客户线索</text>
              <text class="font_5 text_7">(张三)</text>
              <text class="font_2">，请及时跟进</text>
            </view>
          </view>
          <view class="flex-row justify-between mt-34">
            <text class="font_6">查看详情</text>
            <image
              class="ai-outflow"
              src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=158e42c4dea256d1f2534ec27a08d38a.png"
            />
          </view>
        </view>
      </view>
      <view class="flex-col group_2">
        <view class="flex-col">
          <text class="self-center font_4">2020年03月03日 12:54</text>
          <view class="flex-col self-stretch ai-background-image-wrapper mt-13">
            <view>
              <text class="font_7">您的客户线索</text>
              <text class="font_5">(张三)</text>
              <text class="font_7">平台已回收，如有疑问请联系客户</text>
            </view>
            <view class="flex-row justify-between mt-32">
              <text class="font_6">查看详情</text>
              <image
                class="ai-outflow"
                src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=158e42c4dea256d1f2534ec27a08d38a.png"
              />
            </view>
          </view>
        </view>
        <view class="flex-col mt-19">
          <text class="self-center font_4">2020年03月03日 12:54</text>
          <view class="flex-col self-stretch section_8 mt-13">
            <view>
              <text class="font_7">您的提现申请审核不通过</text>
              <text class="font_5">(原因：银行账户有误)</text>
              <text class="font_7">，请修改后重新发起</text>
            </view>
            <view class="flex-row justify-between mt-32">
              <text class="font_6">查看详情</text>
              <image
                class="ai-outflow"
                src="https://dev.ft.velosoft.cn/api/image?token=65718392740f740012ac0e87&name=158e42c4dea256d1f2534ec27a08d38a.png"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import vTabs from "../../../components/v-tabs/v-tabs.vue";
export default {
  components: { vTabs },
  props: {},
  data() {
    return {
      tabNames: ["系统公告", "订单通知", "服务通知"],
      activeTab: "0",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.ml-5 {
  margin-left: 10rpx;
}
.mt-19 {
  margin-top: 38rpx;
}
.mt-13 {
  margin-top: 26rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group {
    padding-bottom: 148rpx;
    overflow-y: auto;
    .section {
      padding: 10.7rpx 0 11.88rpx 12rpx;
      background-color: #ffffff;
      .section_2 {
        background-color: #00000000;
        width: 68rpx;
        height: 20rpx;
      }
      .pos_2 {
        position: absolute;
        left: 12rpx;
        top: 50%;
        transform: translateY(-50%);
      }
      .font {
        font-size: 24rpx;
        font-family: SF Pro Text;
        line-height: 17.42rpx;
        color: #000000;
      }
      .text {
        -webkit-text-stroke: 0.4rpx #000000;
      }
      .pos {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        .text_2 {
          line-height: 17.56rpx;
        }
        .image {
          width: 70rpx;
          height: 36rpx;
        }
      }
    }
    .section_3 {
      padding: 27.1rpx 14rpx 29.28rpx 33rpx;
      background-color: #ffffff;
      .image_2 {
        width: 28rpx;
        height: 28rpx;
      }
      .pos_4 {
        position: absolute;
        left: 33rpx;
        top: 50%;
        transform: translateY(-50%);
      }
      .text_3 {
        font-size: 34rpx;
        line-height: 31.62rpx;
      }
      .section_4 {
        padding: 12.66rpx 25rpx 15.34rpx;
        background-color: #ffffff99;
        border-radius: 50rpx;
        border-left: solid 1rpx #97979733;
        border-right: solid 1rpx #97979733;
        border-top: solid 1rpx #97979733;
        border-bottom: solid 1rpx #97979733;
        .image_4 {
          width: 38rpx;
          height: 14rpx;
        }
        .image_3 {
          width: 34rpx;
          height: 34rpx;
        }
      }
      .pos_3 {
        position: absolute;
        right: 14rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .section_5 {
      position: relative;
    }
    .group_2 {
      margin-top: 38.24rpx;
      padding: 0 24rpx;
      .font_4 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 22.18rpx;
        color: #a7a7a7;
      }
      .ai-background-image-wrapper_1 {
        padding: 41.96rpx 28rpx 39.22rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
        .section_7 {
          background-color: #fe5252;
          border-radius: 50%;
          width: 12rpx;
          height: 12rpx;
        }
        .group_3 {
          line-height: 33.58rpx;
          height: 34.52rpx;
          .text_6 {
            line-height: 29.92rpx;
          }
          .text_7 {
            line-height: 33.58rpx;
          }
        }
      }
      .ai-background-image-wrapper {
        padding: 38.96rpx 28.14rpx 39.22rpx 29.12rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
      }
      .font_5 {
        font-size: 32rpx;
        font-family: PingFang SC Bold;
        line-height: 38rpx;
        font-weight: 700;
        color: #b1a76e;
      }
      .font_6 {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 25.76rpx;
        color: #6c6c6c;
      }
      .ai-outflow {
        width: 24rpx;
        height: 24rpx;
      }
      .section_8 {
        padding: 39.02rpx 24.14rpx 39.22rpx 29.12rpx;
        background-color: #ffffff;
        border-radius: 12rpx;
      }
      .font_7 {
        font-size: 32rpx;
        font-family: PingFang SC Bold;
        line-height: 38rpx;
        font-weight: 700;
        color: #030305;
      }
    }
    .font_2 {
      font-size: 32rpx;
      font-family: PingFang SC Bold;
      line-height: 30.3rpx;
      font-weight: 700;
      color: #030305;
    }
  }
}
</style>
