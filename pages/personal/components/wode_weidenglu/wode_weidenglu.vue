<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col flex-1 group_3">
      <view class="flex-row justify-between items-center">
        <view class="flex-row items-center">
          <view class="flex-col justify-start items-center shrink-0 image-wrapper">
            <image class="image_7" src="../../../../static/images/f6b1d62796408bb96f8c08a2fdb73c15.png" />
          </view>
          <text class="font ml-12">请登录/注册</text>
        </view>
        <image class="image_8" src="../../../../static/images/51b39692c8b7eb3983541e83cc1e3bbe.png" />
      </view>
      <view class="flex-col group_4 mt-21">
        <view class="flex-col justify-start section_2">
          <view class="flex-row">
            <view class="flex-col items-center group_5 equal-division-item">
              <text class="font_2">8000</text>
              <text class="font_3 text_3 mt-5">收纳币</text>
            </view>
            <view class="flex-col items-center group_5 equal-division-item ml-33">
              <text class="font_2">500</text>
              <text class="font_4 text_4 mt-5">积分</text>
            </view>
            <view class="flex-col items-center group_5 equal-division-item ml-33">
              <text class="font_2">215</text>
              <text class="font_3 text_5 mt-5">优惠券</text>
            </view>
          </view>
        </view>
        <view class="flex-col relative section_3">
          <view class="flex-row justify-between items-center group_6">
            <text class="font">我的订单</text>
            <view class="flex-row items-center">
              <text class="font_4 text_6">查看全部</text>
              <image class="shrink-0 image_9 ml-4" src="../../../../static/images/icon_right_arrow_03.png" />
            </view>
          </view>
          <view class="flex-row equal-division mt-12">
            <view class="flex-col group_7 equal-division-item_2">
              <image
                class="self-center image_10"
                src="../../../../static/images/2226db51495d0eb91cf2f0ffd97bf606.png"
              />
              <text class="self-start font_4 mt-12">待付款</text>
            </view>
            <view class="flex-col group_7 equal-division-item_2">
              <image
                class="self-center image_10"
                src="../../../../static/images/acd090b2ba4331e8f24784962968f1c2.png"
              />
              <text class="self-start font_4 mt-12">待发货</text>
            </view>
            <view class="flex-col group_7 equal-division-item_2">
              <image
                class="self-center image_10"
                src="../../../../static/images/211d793622efb3ae56621598decb9e57.png"
              />
              <text class="self-start font_4 mt-12">待收货</text>
            </view>
            <view class="flex-col group_7 equal-division-item_2">
              <image
                class="self-center image_10"
                src="../../../../static/images/35df618a11199eef1a052f493a6a2f09.png"
              />
              <text class="self-start font_4 mt-12">待评价</text>
            </view>
            <view class="flex-col group_7 equal-division-item_2">
              <image class="self-center image_10" src="../../../../static/images/icon_order_refund.png" />
              <text class="self-start font_4 mt-12">退款/售后</text>
            </view>
          </view>
        </view>
        <view class="flex-col section_4">
          <text class="self-start font text_7">我的服务</text>
          <view class="self-stretch grid mt-9">
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/2a2c42842ab92b5dd18049be3a2a2477.png" />
              <text class="font_4 mt-13">课程订单</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/578fd6b6290d253a58b18fcc61862a63.png" />
              <text class="font_4 mt-13">分享有礼</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/2706c5c15a4721b00561641d24907c39.png" />
              <text class="font_4 mt-13">分销中心</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/04283b3e6e584b80cadbe4e59abd6d66.png" />
              <text class="font_4 mt-14">优惠券</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/a9445d85a97f8cfa20bdf622f694c95a.png" />
              <text class="font_4 mt-14">我的收藏</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/4415b403a9dbbb74c8bf4e5ea4af845f.png" />
              <text class="font_4 mt-14">我的地址</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/8917a25b34573be443cd8a9306078cb1.png" />
              <text class="font_4 mt-14">帮助中心</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image class="image_11" src="../../../../static/images/c2164c06b6252ffba2fb2993295b3b93.png" />
              <text class="font_4 mt-14">设置中心</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col tab-bar">
      <view class="flex-row justify-between group_8">
        <image class="image_12" src="../../../../static/images/d71a5dbb3c603a0321dc98aa91fb4ce5.png" />
        <image class="image_12" src="../../../../static/images/671f4a9befe4ebc7999cc42584f8f42b.png" />
        <image class="image_12" src="../../../../static/images/89a994ac09c7a7ac35f4539ba80f5615.png" />
        <image class="image_12" src="../../../../static/images/1ff2a2e8e7da8359b460b78eaf6a425b.png" />
      </view>
      <view class="flex-row justify-between group_9">
        <view class="flex-row justify-start items-center text-wrapper"><text class="font_5">首页</text></view>
        <view class="flex-row justify-start items-center text-wrapper"><text class="font_5">商城</text></view>
        <view class="flex-row justify-start"><text class="font_5">购物车</text></view>
        <view class="flex-row justify-start items-center text-wrapper"><text class="font_5 text_8">我的</text></view>
      </view>
      <view class="section_5"></view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { NavBar },
    props: {},
    data() {
      return {
        title: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .mt-21 {
    margin-top: 42rpx;
  }
  .ml-33 {
    margin-left: 66rpx;
  }
  .mt-5 {
    margin-top: 10rpx;
  }
  .mt-9 {
    margin-top: 18rpx;
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
    .group_3 {
      padding: 36rpx 20rpx 272rpx;
      overflow-y: auto;
      .image-wrapper {
        padding: 16rpx 0;
        background-color: #e5e5e5;
        border-radius: 50%;
        width: 102rpx;
        height: 102rpx;
        border-left: solid 2rpx #ffffff;
        border-right: solid 2rpx #ffffff;
        border-top: solid 2rpx #ffffff;
        border-bottom: solid 2rpx #ffffff;
        .image_7 {
          width: 55rpx;
          height: 63.66rpx;
        }
      }
      .font {
        font-size: 32rpx;
        font-family: 'PingFang SC';
        line-height: 44rpx;
        font-weight: 500;
        color: #000000;
      }
      .image_8 {
        margin-right: 28rpx;
        width: 36rpx;
        height: 36rpx;
      }
      .group_4 {
        height: 822rpx;
        .section_2 {
          margin: 0 28rpx;
          padding: 16rpx 0 48rpx;
          background-image: linear-gradient(180deg, #494642 0%, #494642 -31.98%, #23221f 84.06%, #23221f 100%);
          border-radius: 24rpx 24rpx 0rpx 0rpx;
          .group_5 {
            flex: 1 1 176rpx;
            .font_2 {
              font-size: 36rpx;
              font-family: 'HarmonyOS Sans';
              line-height: 50rpx;
              font-weight: 700;
              color: #dec9a0;
            }
            .font_3 {
              font-size: 24rpx;
              font-family: 'PingFang SC';
              line-height: 34rpx;
              color: #dec9a0;
            }
            .text_3 {
              font-size: 26rpx;
              line-height: 36rpx;
            }
            .text_4 {
              color: #ffe2a9;
              font-size: 26rpx;
              line-height: 36rpx;
            }
            .text_5 {
              font-size: 26rpx;
              line-height: 36rpx;
            }
          }
          .equal-division-item {
            padding: 8rpx 0;
          }
        }
        .section_3 {
          margin-top: -30rpx;
          padding: 30rpx 0 12rpx;
          background-color: #ffffff;
          box-shadow: 0rpx 8rpx 8rpx -6rpx #b1b1b180;
          border-radius: 20rpx;
          .group_6 {
            padding-left: 28rpx;
            padding-right: 20rpx;
            .text_6 {
              color: #111111;
              font-size: 26rpx;
              line-height: 36rpx;
            }
            .image_9 {
              width: 10rpx;
              height: 20rpx;
            }
          }
          .equal-division {
            padding: 0 20rpx;
            .group_7 {
              flex: 1 1 134rpx;
              .image_10 {
                width: 48rpx;
                height: 48rpx;
              }
            }
            .equal-division-item_2 {
              padding: 8rpx 16rpx;
            }
          }
        }
        .font_4 {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
          color: #2d2e32;
        }
        .section_4 {
          margin-top: 24rpx;
          padding: 24rpx 0 12rpx;
          background-color: #ffffff;
          border-radius: 16rpx;
          .text_7 {
            margin-left: 28rpx;
          }
          .grid {
            height: 316rpx;
            display: grid;
            grid-template-rows: repeat(2, minmax(0, 1fr));
            grid-template-columns: repeat(4, minmax(0, 1fr));
            row-gap: 0;
            column-gap: 0;
            .grid-item {
              padding: 20rpx 0 12rpx;
              .image_11 {
                width: 64rpx;
                height: 64rpx;
              }
            }
          }
        }
      }
    }
    .tab-bar {
      padding-top: 16rpx;
      background-color: #ffffff;
      box-shadow: 0rpx 30rpx 60rpx 0rpx #111111;
      .group_8 {
        padding: 0 48rpx;
        .image_12 {
          width: 54rpx;
          height: 54rpx;
        }
      }
      .group_9 {
        padding: 0 44rpx;
        .text-wrapper {
          width: 64rpx;
          .text_8 {
            color: #b09053;
          }
        }
        .font_5 {
          font-size: 20rpx;
          font-family: 'PingFang SC';
          line-height: 28rpx;
          color: #2d2e32;
        }
      }
      .section_5 {
        background-color: #ffffff;
        height: 18rpx;
      }
    }
  }
</style>