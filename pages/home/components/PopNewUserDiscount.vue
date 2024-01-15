<template>
  <view class="flex-col group_1">
    <view class="flex-col self-stretch relative group_5">
      <image class="image_5" src="/static/images/pic_user_discount_decorator_0.png" />
      <view class="flex-col section_12"> </view>
      <view class="ai-background-image_4 pos_3"></view>
      <view class="ai-background-image_6 pos_5"></view>
      <image class="ai-background-image_5 pos_7" src="/static/images/pic_user_discount_decorator_1.png" />
      <image class="ai-background-image_5 pos_9" src="/static/images/pic_user_discount_decorator_2.png" />
      <image class="ai-background-image_5 pos_4" src="/static/images/pic_user_discount_decorator_3.png" />
      <view class="flex-col justify-center items-center ai-background-image_3 pos_2">
        <text class="font_2 text_3">恭喜获得价值100元的优惠</text>
      </view>
      <view class="flex-col gap-10 list-container">
        <view class="flex-row justify-start items-center list-item" v-for="(item, index) of items" :key="index">
          <view class="flex-col">
            <view class="flex-row items-baseline">
              <text class="font_5 text_5">￥</text>
              <text class="font_3">200</text>
            </view>
            <text class="font_2 text_7 mt-8">满100元使用</text>
          </view>
          <view class="section_7 ml-16"></view>
          <view class="flex-col justify-between items-start self-stretch ml-16">
            <text class="font_4 text_4">新人专享券</text>
            <text class="font_2 text_6">有效期至2023.07.01</text>
            <text class="font_6">适用全部（商品/服务/课程）</text>
          </view>
        </view>
      </view>

      <image class="bottom-panel" src="/static/images/pic_user_discount_bottom_panel.png"> </image>
    </view>
    <image class="self-center ai-outflow mt-16" src="/static/images/icon_new_user_pop_close.png" />
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .group_1 {
    .group_5 {
      padding: 0 56rpx;
      .image_5 {
        margin-right: 22rpx;
        width: 562rpx;
        height: 186rpx;
      }
      .section_12 {
        margin-top: 416rpx;
        width: 564rpx;
        height: 194rpx;
      }
      .ai-background-image_4 {
        opacity: 0.7;
        background-image: linear-gradient(92deg, #f6521c 1.6%, #f9601f 98.5%);
        backdrop-filter: blur(20rpx);
        height: 542rpx;
        border-left: solid 2rpx #fbd882;
        border-right: solid 2rpx #fbd882;
        border-top: solid 2rpx #fbd882;
        border-bottom: solid 2rpx #fbd882;
      }
      .pos_3 {
        position: absolute;
        left: 56rpx;
        right: 78rpx;
        top: 176rpx;
      }
      .ai-background-image_6 {
        background-image: linear-gradient(180deg, #ff8440 0%, #f05137 100%);
        border-radius: 22rpx;
        height: 514rpx;
      }
      .pos_5 {
        position: absolute;
        left: 80rpx;
        right: 102rpx;
        top: 216rpx;
      }
      .ai-background-image_5 {
        width: 114rpx;
        height: 114rpx;
      }
      .pos_7 {
        position: absolute;
        right: 0;
        top: 242rpx;
      }
      .pos_9 {
        position: absolute;
        left: 0;
        bottom: 196rpx;
      }
      .pos_4 {
        position: absolute;
        left: 0;
        top: 202rpx;
      }
      .ai-background-image_3 {
        background-image: linear-gradient(180deg, #fb9f25 0%, #f63229 100%);
        border-radius: 20rpx;
        box-shadow: 0rpx 6rpx 12rpx #0000000f;
        border: solid 1rpx #ffe0ba;
        height: 40rpx;
        width: 292rpx;
        .text_3 {
          color: #fff7e9;
        }
      }
      .pos_2 {
        position: absolute;
        left: 192rpx;
        top: 162rpx;
      }
      .font_2 {
        font-size: 22rpx;
        font-family: PingFang SC;
        line-height: 18.42rpx;
        color: #6c6c6c;
      }
      .list-item {
        height: 140rpx;
        width: 474rpx;
        padding: 16rpx 24rpx;
        background-image: url('/static/images/pic_user_discount_coupon_bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .text_5 {
          margin-top: 23.2rpx;
        }
        .text_7 {
          font-size: 20rpx;
        }
        .text_4 {
          font-size: 28rpx;
        }
        .text_6 {
          font-size: 20rpx;
        }
      }
      .list-container {
        position: absolute;
        left: 100rpx;
        top: 234rpx;
      }
      .font_5 {
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 700;
        color: #ff1801;
      }
      .font_3 {
        font-size: 52rpx;
        font-family: PingFang SC;
        font-weight: 700;
        color: #ff1801;
      }
      .section_7 {
        opacity: 0.16;
        background-image: repeating-linear-gradient(
          90deg,
          #ff740f,
          #ff740f 4.92%,
          transparent 4.92%,
          transparent 9.838000000000001%
        );
        background-position: -3rpx 0rpx;
        width: 2rpx;
        height: 122rpx;
      }
      .font_4 {
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 700;
        color: #030305;
      }
      .font_6 {
        font-size: 18rpx;
        font-family: PingFang SC;
        color: #a7a7a7;
      }
    }
    .ai-outflow {
      width: 60rpx;
      height: 60rpx;
    }
    .bottom-panel {
      width: 572rpx;
      height: 221rpx;
      position: absolute;
      bottom: 0;
    }
  }
</style>
