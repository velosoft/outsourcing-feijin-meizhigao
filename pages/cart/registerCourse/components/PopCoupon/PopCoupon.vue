<template>
    <PopupWithButton title="优惠券" buttonText="确定">
      <view class="flex-col justify-start button mt-28">
        <u-cell-group>
          <view class="flex-col">
            <view class="flex-row relative list-item mt-11 items-center" v-for="(item, index) in items" :key="index">
              <view class="flex-col items-center relative group_2 justify-center">
                <image class="group_2 pos" src="/static/images/3a4ebd6b3a1fb19a0d9db52515361a40.png" />
                <view class="flex-col relative">
                  <view class="items-center flex-row">
                    <text class="font_4">10</text>
                    <text class="font_5 text_13 mt-2">元</text>
                  </view>
                  <text class="font_7 mt-13">满100元使用</text>
                </view>
              </view>
              <view class="line"></view>
              <view class="flex-col items-start relative">
                <image
                  class="ai-background-image-wrapper pos_2"
                  src="/static/images/5c175cb74a6050335669383126a02cd1.png"
                />
                <view class="flex-row items-center relative group_1">
                  <view class="flex-col self-center group_4">
                    <text class="self-start font">定制商品满减券</text>
                    <view class="flex-col items-center self-stretch mt-11">
                      <text class="font_6">2023.06.01-2023.07.01</text>
                      <text class="font_8 text_9 mt-20">适用全部(商品/服务/课程)</text>
                    </view>
                  </view>
                  <image class="image_5 ml-63" src="/static/images/ff1e9e0fdb601ca260acd77e8458c620.png" />
                </view>
              </view>
            </view>
          </view>
        </u-cell-group>
      </view>
    </PopupWithButton>
    </template>
    
    <script>
    import PopupWithButton from '@/components/Popup/PopupWithButton';
    
    export default {
      components: { PopupWithButton },
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
    .mt-11 {
      margin-top: 22rpx;
    }
    .mt-13 {
      margin-top: 26rpx;
    }
    .ml-63 {
      margin-left: 126rpx;
    }
    .button {
      align-self: stretch;
      .list-item {
        &:first-child {
          margin-top: 0;
        }
        .group_2 {
          width: 184rpx;
          height: 200rpx;
          .pos {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
          }
          .font_4 {
            font-size: 84rpx;
            font-family: HarmonyOS Sans SC;
            line-height: 63.68rpx;
            font-weight: 700;
            color: #bb3e0c;
          }
          .font_5 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22.28rpx;
            font-weight: 600;
            color: #bb3e0c;
          }
          .text_13 {
            line-height: unset;
          }
          .font_7 {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 22.28rpx;
            color: #bb3e0c;
          }
        }
        .line {
          width: 0rpx;
          height: 174rpx;
          border: 1rpx dashed #e8cfc0;
        }
        .ai-background-image-wrapper {
          width: 502rpx;
          height: 200rpx;
        }
        .pos_2 {
          position: absolute;
          left: 0;
          right: 0;
        }
        .group_1 {
          width: 502rpx;
          height: 200rpx;
          .group_4 {
            margin-left: 30rpx;
            .font {
              font-size: 28rpx;
              font-family: 苹方;
              line-height: 26.16rpx;
              color: #030305;
            }
            .font_6 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 17.8rpx;
              color: #a7a7a7;
            }
            .font_8 {
              font-size: 24rpx;
              font-family: 苹方;
              line-height: 22.28rpx;
              color: #a7a7a7;
            }
            .text_9 {
              line-height: 22.42rpx;
            }
          }
          .image_5 {
            border-radius: 20rpx;
            width: 40rpx;
            height: 40rpx;
          }
        }
      }
    }
    </style>