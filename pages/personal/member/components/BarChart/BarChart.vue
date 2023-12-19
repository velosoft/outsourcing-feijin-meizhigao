<template>
  <view class="flex-col wrap">
    <view class="flex-col justify-start">
      <view class="flex-row justify-between items-end chart-wrap">
        <view class="flex-col item">
          <text class="self-center value-active">0</text>
          <view class="flex-col justify-start items-center self-stretch relative chart">
            <image class="bg-bar-normal" src="../../../../../static/images/94260614b926073075cd623db94ec29b.png" />
            <image class="star-icon star-pos" src="../../../../../static/images/icon_lv_1_active.png" />
          </view>
        </view>
        <view class="flex-col item">
          <text class="self-center value-active">2000</text>
          <view class="flex-col justify-start items-center self-stretch relative chart">
            <image class="bg-bar-silver" src="../../../../../static/images/23054f8979ea319f0a2e5bc7c181c623.png" />
            <image class="star-pos star-icon" src="../../../../../static/images/icon_lv_2_active.png" />
          </view>
        </view>
        <view class="flex-col item">
          <text class="self-center value">5000</text>
          <view class="flex-col justify-start items-center self-stretch relative chart">
            <image class="bg-bar-gold" src="../../../../../static/images/7d9d734b6cac8097039e420ccd8069e5.png" />
            <image class="star-icon star-pos" src="../../../../../static/images/icon_lv_3_inactive.png" />
          </view>
        </view>
        <view class="flex-col item">
          <text class="self-center value">8000</text>
          <view class="flex-col justify-start items-center self-stretch relative chart mt-4">
            <image class="bg-bar-platinum" src="../../../../../static/images/5b9980969c544ecee290b48e20d5cb73.png" />
            <image class="star-pos star-icon" src="../../../../../static/images/icon_lv_4_inactive.png" />
          </view>
        </view>
        <view class="flex-col item">
          <text class="self-center value">10000</text>
          <view class="flex-col justify-start items-center self-stretch relative chart mt-4">
            <image class="bg-bar-diamond" src="../../../../../static/images/b25738af49ce85d919f3b1107301251c.png" />
            <image class="star-icon star-pos" src="../../../../../static/images/icon_lv_5_inactive.png" />
          </view>
        </view>
      </view>
    </view>
    <view class="flex-row justify-between mt-8">
      <text class="value-active">普通会员</text>
      <text class="value-active">白银会员</text>
      <text class="value-inactive">黄金会员</text>
      <text class="value-inactive">铂金会员</text>
      <text class="value-inactive">钻石会员</text>
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
  .wrap {
    padding: 0 15.96rpx;
    .chart-wrap {
      padding-top: 31.91rpx;
      .item {
        width: 87.77rpx;
        .chart {
          padding-top: 63.83rpx;
          .bg-bar-normal {
            width: 87.77rpx;
            height: 95.74rpx;
          }
          .star-icon {
            width: 55.85rpx;
            height: 81.78rpx;
          }
          .star-pos {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
          .bg-bar-silver {
            width: 87.77rpx;
            height: 113.7rpx;
          }
          .bg-bar-gold {
            width: 87.77rpx;
            height: 151.6rpx;
          }
          .bg-bar-platinum {
            width: 87.77rpx;
            height: 191.49rpx;
          }
          .bg-bar-diamond {
            width: 87.77rpx;
            height: 245.35rpx;
          }
        }
        .value {
          font-size: 23.94rpx;
          font-family: 'PingFang SC';
          line-height: 33.91rpx;
          color: #cccccc;
        }
      }
    }
    .value-active {
      font-size: 23.94rpx;
      font-family: 'PingFang SC';
      line-height: 33.91rpx;
      font-weight: 500;
      color: #dec9a0;
    }
    .value-inactive {
      font-size: 23.94rpx;
      font-family: 'PingFang SC';
      line-height: 33.91rpx;
      font-weight: 500;
      color: #cccccc;
    }
  }
</style>