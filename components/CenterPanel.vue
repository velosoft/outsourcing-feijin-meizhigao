<template>
  <view class="flex-col storage-group">
    <view class="flex-row items-baseline storage-group_1">
      <text class="storage-font storage-text">空间收纳设计,</text>
      <text class="storage-ml-4 storage-font_1 storage-text_1">一对一服务</text>
    </view>
    <view class="storage-mt-22 flex-row storage-group_1">
      <view class="flex-col justify-start items-center storage-a-i-background-image-wrapper storage-group_2">
        <image
          class="storage-a-i-background-image"
          src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=00b8c5611dba52e10023fcd5dbe624ac.png"
        />
        <view class="flex-row items-center storage-section storage-pos">
          <text class="storage-text_2">去秒杀</text>
          <image
            class="shrink-0 storage-image"
            src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=e56414bb4c3681ef25dbdff757e574e4.png"
          />
        </view>
        <text class="storage-font_2 storage-text_3 storage-pos_1">秒杀活动</text>
        <text class="storage-font_3 storage-text_4 storage-pos_2">让你购物省心又省钱！</text>
      </view>
      <view class="storage-ml-14 flex-col storage-group_3">
        <view class="flex-col justify-start storage-a-i-background-image-wrapper_1">
          <view class="flex-col justify-start items-center storage-a-i-background-image-wrapper_2">
            <image
              class="storage-a-i-background-image_1"
              src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=999893ddfc14ffc0eca7255cc6cbfd79.png"
            />
            <text class="storage-font_4 storage-pos_3">完整收纳体系课</text>
            <view class="flex-col justify-start storage-text-wrapper storage-pos_4">
              <text class="storage-font_2 storage-text_5">课程中心</text>
            </view>
            <image
              class="storage-a-i-background-image_2 storage-image_1"
              src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=f0fb9653b4f3901c8a7ccdac3fa7e5a2.png"
            />
          </view>
        </view>
        <view class="storage-mt-16 flex-col justify-start storage-a-i-background-image-wrapper_3">
          <view class="flex-col justify-start items-center storage-a-i-background-image-wrapper_2">
            <image
              class="storage-a-i-background-image_1"
              src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=793d07350f962788cbbf505295bd232c.png"
            />
            <text class="storage-font_4 storage-pos_5">领券下单更优惠</text>
            <view class="flex-col justify-start storage-text-wrapper storage-pos_6">
              <text class="storage-font_2 storage-text_5">领券中心</text>
            </view>
            <image
              class="storage-a-i-background-image_3 storage-image_2"
              src="https://dev.ft.velosoft.cn/api/image?token=6564447bcc0204001240f5d1&name=9e4416ee0af75a3abe74f315e03f1fe8.png"
            />
          </view>
        </view>
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
  .storage-group {
    .storage-group_1 {
      padding: 0 0;
      .storage-font {
        font-size: 30rpx;
        font-family: PingFang SC;
        line-height: 30rpx;
        color: #000000;
      }
      .storage-text {
        line-height: 30.36rpx;
      }
      .storage-ml-4 {
        margin-left: 8rpx;
      }
      .storage-font_1 {
        font-size: 30rpx;
        font-family: PingFang SC;
        line-height: 30rpx;
        color: #a7a7a7;
      }
      .storage-text_1 {
        font-size: 28rpx;
        line-height: 28rpx;
      }
    }
    .storage-mt-22 {
      margin-top: 44rpx;
      .storage-a-i-background-image-wrapper {
        position: relative;
        flex: 1 1 330rpx;
        .storage-a-i-background-image {
          width: 330rpx;
          height: 330rpx;
        }
        .storage-section {
          padding: 8rpx 0 8rpx 16rpx;
          background-color: #bb3e0c;
          .storage-text_2 {
            color: #ffffff;
            font-size: 24rpx;
            font-family: PingFang SC;
            line-height: 24rpx;
          }
          .storage-image {
            width: 26rpx;
            height: 20rpx;
          }
        }
        .storage-pos {
          position: absolute;
          left: 24rpx;
          top: 20.5rpx;
        }
        .storage-text_3 {
          font-size: 26rpx;
          line-height: 26rpx;
        }
        .storage-pos_1 {
          position: absolute;
          left: 24.78rpx;
          bottom: 73.92rpx;
        }
        .storage-font_3 {
          font-size: 20rpx;
          font-family: 苹方;
          line-height: 20rpx;
          color: #bb3e0c;
        }
        .storage-text_4 {
          color: #ffffff;
        }
        .storage-pos_2 {
          position: absolute;
          left: 24.94rpx;
          bottom: 42.04rpx;
        }
      }
      .storage-group_2 {
        height: 330rpx;
      }
      .storage-ml-14 {
        margin-left: 28rpx;
        .storage-a-i-background-image-wrapper_1 {
          background-color: #ececec66;
          border-radius: 8rpx;
        }
        .storage-mt-16 {
          margin-top: 32rpx;
        }
        .storage-a-i-background-image-wrapper_3 {
          background-color: #d6d6d666;
          border-radius: 8rpx;
        }
        .storage-a-i-background-image-wrapper_2 {
          position: relative;
          .storage-a-i-background-image_1 {
            width: 332rpx;
            height: 150rpx;
          }
          .storage-font_4 {
            font-size: 20rpx;
            font-family: 苹方;
            line-height: 20rpx;
            color: #6c6c6c;
          }
          .storage-pos_3 {
            position: absolute;
            left: 17.04rpx;
            bottom: 59.96rpx;
          }
          .storage-text-wrapper {
            padding: 8rpx 0;
            background-color: #b09053;
            .storage-text_5 {
              margin: 0 8rpx;
            }
          }
          .storage-pos_4 {
            position: absolute;
            left: 16rpx;
            top: 20.5rpx;
          }
          .storage-a-i-background-image_2 {
            position: absolute;
            right: 24rpx;
            bottom: 20rpx;
          }
          .storage-image_1 {
            filter: drop-shadow(0rpx 4rpx 4rpx #86868629);
            width: 100rpx;
            height: 100rpx;
          }
          .storage-pos_5 {
            position: absolute;
            left: 16.72rpx;
            bottom: 51.98rpx;
          }
          .storage-pos_6 {
            position: absolute;
            left: 16rpx;
            top: 22.8rpx;
          }
          .storage-a-i-background-image_3 {
            position: absolute;
            right: 10rpx;
            top: 50%;
            transform: translateY(-50%);
          }
          .storage-image_2 {
            width: 130rpx;
            height: 130rpx;
          }
        }
      }
      .storage-group_3 {
        flex: 1 1 330rpx;
      }
      .storage-font_2 {
        font-size: 24rpx;
        font-family: PingFangSC-Medium;
        line-height: 24rpx;
        color: #ffffff;
      }
    }
  }
  </style>