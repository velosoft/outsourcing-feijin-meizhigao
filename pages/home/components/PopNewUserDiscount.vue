<template>
  <view class="flex-col group-primary">
    <view class="flex-col self-stretch relative group-secondary">
      <image class="decorative-image" src="/static/images/pic_user_discount_decorator_0.png" />
      <view class="flex-col section-main"> </view>
      <view class="ai-background-image-primary pos-primary"></view>
      <view class="ai-background-image-secondary pos-secondary"></view>
      <image class="ai-background-image-tertiary pos-tertiary" src="/static/images/pic_user_discount_decorator_1.png" />
      <image
        class="ai-background-image-quaternary pos-quaternary"
        src="/static/images/pic_user_discount_decorator_2.png"
      />
      <image class="ai-background-image-quinary pos-quinary" src="/static/images/pic_user_discount_decorator_3.png" />
      <view class="flex-col justify-center items-center ai-background-image-senary pos-senary">
        <text class="font-primary text-primary">恭喜获得价值100元的优惠</text>
      </view>
      <view class="flex-col gap-10 list-container">
        <view class="flex-row justify-start items-center list-item" v-for="(item, index) of items" :key="index">
          <view class="flex-col">
            <view class="flex-row items-baseline">
              <text class="font-secondary text-secondary">￥</text>
              <text class="font-tertiary">200</text>
            </view>
            <text class="font-quaternary text-quaternary mt-8">满100元使用</text>
          </view>
          <view class="section-secondary ml-16"></view>
          <view class="flex-col justify-between items-start self-stretch ml-16">
            <text class="font-quinary text-quinary">新人专享券</text>
            <text class="font-senary text-senary">有效期至2023.07.01</text>
            <text class="font-septenary">适用全部（商品/服务/课程）</text>
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
  .group-primary {
    .group-secondary {
      padding: 0 56rpx;
      .decorative-image {
        margin-right: 22rpx;
        width: 562rpx;
        height: 186rpx;
      }
      .section-main {
        margin-top: 416rpx;
        width: 564rpx;
        height: 194rpx;
      }
      .ai-background-image-primary {
        opacity: 0.7;
        background-image: linear-gradient(92deg, #f6521c 1.6%, #f9601f 98.5%);
        backdrop-filter: blur(20rpx);
        height: 542rpx;
        border-left: solid 2rpx #fbd882;
        border-right: solid 2rpx #fbd882;
        border-top: solid 2rpx #fbd882;
        border-bottom: solid 2rpx #fbd882;
      }
      .pos-primary {
        position: absolute;
        left: 56rpx;
        right: 78rpx;
        top: 176rpx;
      }
      .ai-background-image-secondary {
        background-image: linear-gradient(180deg, #ff8440 0%, #f05137 100%);
        border-radius: 22rpx;
        height: 514rpx;
      }
      .pos-secondary {
        position: absolute;
        left: 80rpx;
        right: 102rpx;
        top: 216rpx;
      }
      .ai-background-image-tertiary {
        width: 114r px;
        height: 114rpx;
      }
      .pos-tertiary {
        position: absolute;
        right: 0;
        top: 242rpx;
      }
      .ai-background-image-quaternary {
        width: 114rpx;
        height: 114rpx;
      }
      .pos-quaternary {
        position: absolute;
        left: 0;
        bottom: 196rpx;
      }
      .ai-background-image-quinary {
        width: 114rpx;
        height: 114rpx;
      }
      .pos-quinary {
        position: absolute;
        left: 0;
        top: 202rpx;
      }
      .ai-background-image-senary {
        background-image: linear-gradient(180deg, #fb9f25 0%, #f63229 100%);
        border-radius: 20rpx;
        box-shadow: 0rpx 6rpx 12rpx #0000000f;
        border: solid 1rpx #ffe0ba;
        height: 40rpx;
        width: 292rpx;
        .text-primary {
          color: #fff7e9;
        }
      }
      .pos-senary {
        position: absolute;
        left: 192rpx;
        top: 162rpx;
      }
      .font-primary {
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
        .text-secondary {
          margin-top: 23.2rpx;
        }
        .text-quaternary {
          font-size: 20rpx;
        }
        .text-quinary {
          font-size: 28rpx;
        }
        .text-senary {
          font-size: 20rpx;
        }
      }
      .list-container {
        position: absolute;
        left: 100rpx;
        top: 234rpx;
      }
      .font-secondary {
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 700;
        color: #ff1801;
      }
      .font-tertiary {
        font-size: 52rpx;
        font-family: PingFang SC;
        font-weight: 700;
        color: #ff1801;
      }
      .section-secondary {
        opacity: 0.16;
        background-image: repeating-linear-gradient(90deg, #ff740f, #ff740f 4.92%, transparent 4.92%, transparent 9.8%);
        background-position: -3rpx 0rpx;
        width: 2rpx;
        height: 122rpx;
      }
      .font-quinary {
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 700;
        color: #030305;
      }
      .font-senary {
        font-size: 18rpx;
        font-family: PingFang SC;
        color: #a7a7a7;
      }
      .font-septenary {
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
