<template>
  <view class="flex-col page">
    <NavBar :hasBack="false" :title="title"></NavBar>
    <view class="flex-col flex-1 group_3">
      <PersonalInfoRow
        :userInfo="userInfo"
        @membershipClick="onMembershipClick"
        @configClick="onConfigClick"
      ></PersonalInfoRow>
      <view class="flex-col group_5 mt-22">
        <view class="flex-col justify-start section_3">
          <view class="flex-row justify-between">
            <view class="flex-col items-center equal-division-item_1">
              <text class="font_3">8000</text>
              <text class="font_4 text_5 mt-16">收纳币</text>
            </view>
            <view class="flex-col items-center equal-division-item">
              <text class="font_3">500</text>
              <text class="font_2 text_6 mt-17">积分</text>
            </view>
            <view class="flex-col items-center equal-division-item_3">
              <text class="font_3">215</text>
              <text class="font_4 text_7 mt-16">优惠券</text>
            </view>
          </view>
        </view>
        <view class="flex-col relative section_4">
          <text class="self-start font text_8">我的订单</text>
          <view class="flex-row equal-division group_6 mt-15">
            <view class="flex-col group_7 group_1">
              <view
                class="flex-col justify-start items-center self-stretch relative group_9"
              >
                <image
                  class="image_10"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=960650b6798e1a06b6607f335c592512.png"
                />
                <view class="section_5 badge"></view>
              </view>
              <text class="self-start font_2 text_9 mt-15">待付款</text>
            </view>
            <view class="flex-col group_7 group_14">
              <view
                class="flex-col justify-start items-center self-stretch relative group_13"
              >
                <image
                  class="image_10"
                  src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=8c044282cfdaca26f8ecb0486808726f.png"
                />
                <view class="section_6 badge"></view>
              </view>
              <text class="self-start font_2 text_10 mt-15">待发货</text>
            </view>
            <view class="flex-col group_7 group_15">
              <image
                class="self-center image_10"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=a449232c723370d6bcc7df4a4859d27b.png"
              />
              <text class="self-start font_2 text_11 mt-15">待收货</text>
            </view>
            <view class="flex-col group_7 group_10">
              <image
                class="self-center image_10"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=e28370fefbc9cc8c6660c0ccaf4df869.png"
              />
              <text class="self-start font_2 text_12 mt-15">待评价</text>
            </view>
            <view class="flex-col group_7 group_8">
              <image
                class="self-center image_10"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=6ba500ca7da7db5ad118089a7ecdade7.png"
              />
              <text class="self-start font_2 mt-15">退款/售后</text>
            </view>
          </view>
        </view>
        <view class="flex-col section_7">
          <text class="self-start font text_13">我的服务</text>
          <view class="self-stretch grid mt-11">
            <view class="flex-col items-center grid-item_1">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=16850aa3449caab880abb221c4579df1.png"
              />
              <text class="font_2 text_14 mt-16">课程订单</text>
            </view>
            <view class="flex-col items-center grid-item_1">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=199772213c442f1c2e04425df55a8c90.png"
              />
              <text class="font_2 text_14 mt-16">分享有礼</text>
            </view>
            <view class="flex-col items-center grid-item_2">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=cec15b91cb9b673affaa9f9dfd541ba3.png"
              />
              <text class="font_2 mt-16">分销中心</text>
            </view>
            <view class="flex-col items-center grid-item">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=2f05917a00707f40c8292aae0d35f48d.png"
              />
              <text class="font_2 mt-17">优惠券</text>
            </view>
            <view class="flex-col items-center grid-item_4">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=21231eca2de0f188419fee7ab8ddf19d.png"
              />
              <text class="font_2 text_15 mt-17">我的收藏</text>
            </view>
            <view class="flex-col items-center grid-item_5">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=26e524a788a93d7a64bd0143440ab569.png"
              />
              <text class="font_2 text_16 mt-17">我的地址</text>
            </view>
            <view class="flex-col items-center grid-item_6">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=515e34d74d409dedd4eb014a0848420d.png"
              />
              <text class="font_2 text_17 mt-17">帮助中心</text>
            </view>
            <view class="flex-col items-center grid-item_7">
              <image
                class="image_11"
                src="https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=cfdff5ec83737f0dd3e4d2f73876dcbc.png"
              />
              <text class="font_2 mt-17">设置中心</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { NavBar } from "../../components/NavBar/NavBar.vue";
import PersonalInfoRow from "../personal/personalInfoRow.vue";

export default {
  components: { NavBar, PersonalInfoRow },
  props: {},
  data() {
    return {
      title: "我的",
      userInfo: {
        // name: null,
        // memberLevel: null,
        // avatar: "../../static/images/personal/default_avatar.png",

        name: "张三",
        memberLevel: "黄金会员",
        avatar:
          "https://dev.ft.velosoft.cn/api/image?token=6572cfa4740f740012ac1983&name=659cbd70f74ca3277758b6e49c56803d.png",
      },
    };
  },

  methods: {
    onMembershipClick() {
      console.log("onMembershipClick");
    },
    onConfigClick() {
      console.log("uni.navigateTo");
      uni.navigateTo({ url: "/pages/personal/personalDetail" });
    },
  },
};
</script>

<style scoped lang="less">
.mt-15 {
  margin-top: 30rpx;
}
.mt-11 {
  margin-top: 22rpx;
}
.mt-17 {
  margin-top: 34rpx;
}
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_3 {
    padding-top: 35rpx;
    overflow-y: auto;
    .group_5 {
      padding: 0 20rpx;
      height: 822rpx;
      .section_3 {
        margin-left: 28rpx;
        margin-right: 24rpx;
        padding: 22.56rpx 0 53.74rpx;
        background-image: linear-gradient(180deg, #494642 -32%, #23221f 84.1%);
        border-radius: 24rpx 24rpx 0rpx 0rpx;
        .equal-division-item_1 {
          padding: 10rpx 0 10rpx;
          width: 172.2rpx;
          .text_5 {
            font-size: 26rpx;
            line-height: 24.02rpx;
          }
        }
        .equal-division-item {
          padding: 10rpx 0 10.04rpx;
          width: 172.2rpx;
          .text_6 {
            color: #ffe2a9;
            font-size: 26rpx;
            line-height: 23.72rpx;
          }
        }
        .font_3 {
          font-size: 36rpx;
          font-family: HarmonyOSSans;
          line-height: 27.28rpx;
          font-weight: 700;
          color: #dec9a0;
        }
        .equal-division-item_3 {
          padding: 10rpx 0 10.08rpx;
          width: 172.2rpx;
          .text_7 {
            font-size: 26rpx;
            line-height: 24.12rpx;
          }
        }
        .font_4 {
          font-size: 24rpx;
          font-family: 苹方;
          line-height: 22.28rpx;
          color: #dec9a0;
        }
      }
      .section_4 {
        margin-top: -30rpx;
        padding: 37.4rpx 0 14.54rpx;
        background-color: #ffffff;
        border-radius: 20rpx;
        box-shadow: 0rpx 8rpx 8rpx -6rpx #b1b1b180;
        .text_8 {
          margin-left: 29.48rpx;
          line-height: 29.96rpx;
        }
        .equal-division {
          align-self: stretch;
          .group_7 {
            flex: 1 1 134rpx;
            .group_9 {
              padding-top: 6rpx;
              .section_5 {
                position: absolute;
                right: 18.08rpx;
                top: 0;
              }
            }
            .text_9 {
              line-height: 22.34rpx;
            }
            .group_13 {
              padding-top: 4rpx;
              .section_6 {
                position: absolute;
                right: 20.08rpx;
                top: 0;
              }
            }
            .image_10 {
              width: 48rpx;
              height: 48rpx;
            }
            .badge {
              background-color: #ff0000;
              border-radius: 50%;
              width: 30rpx;
              height: 30rpx;
              border-left: solid 2rpx #ffffff;
              border-right: solid 2rpx #ffffff;
              border-top: solid 2rpx #ffffff;
              border-bottom: solid 2rpx #ffffff;
            }
            .text_10 {
              line-height: 22.32rpx;
            }
            .text_11 {
              line-height: 22.3rpx;
            }
            .text_12 {
              line-height: 22.2rpx;
            }
          }
          .group_1 {
            padding: 4.52rpx 21.92rpx 15.5rpx;
          }
          .group_14 {
            padding: 6.52rpx 21.92rpx 15.48rpx;
          }
          .group_15 {
            padding: 10.52rpx 21.92rpx 15.48rpx;
          }
          .group_10 {
            padding: 10.52rpx 21.92rpx 15.58rpx;
          }
          .group_8 {
            padding: 10.52rpx 4.3rpx 15.52rpx;
          }
        }
        .group_6 {
          padding: 0 19rpx;
        }
      }
      .font_2 {
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 22.28rpx;
        color: #2d2e32;
      }
      .section_7 {
        margin-top: 24rpx;
        padding: 31.56rpx 0 13.78rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        .text_13 {
          margin-left: 29.48rpx;
        }
        .grid {
          height: 316.38rpx;
          display: grid;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          grid-template-columns: repeat(4, minmax(0, 1fr));
          row-gap: 0;
          column-gap: 0;
          .grid-item_1 {
            padding: 22.16rpx 0 18.12rpx;
            .text_14 {
              line-height: 22.24rpx;
            }
          }
          .grid-item_2 {
            padding: 22.16rpx 0 18.02rpx;
          }
          .image_11 {
            width: 64rpx;
            height: 64rpx;
          }
          .grid-item {
            padding: 22.16rpx 0 16.16rpx;
          }
          .grid-item_4 {
            padding: 21.98rpx 0 16.28rpx;
            .text_15 {
              line-height: 22.18rpx;
            }
          }
          .grid-item_5 {
            padding: 21.98rpx 0 16.66rpx;
            .text_16 {
              line-height: 21.76rpx;
            }
          }
          .grid-item_6 {
            padding: 21.98rpx 0 16.16rpx;
            .text_17 {
              line-height: 22.32rpx;
            }
          }
          .grid-item_7 {
            padding: 21.98rpx 0 16.2rpx;
          }
        }
      }
      .font {
        font-size: 32rpx;
        font-family: 苹方;
        line-height: 29.76rpx;
        color: #000000;
      }
    }
  }
}
</style>
