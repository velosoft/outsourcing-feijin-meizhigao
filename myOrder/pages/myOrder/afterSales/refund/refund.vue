<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#b09053" titleColor="#ffffff">
      <image
        class="icon-nav"
        src="/myOrder/static/images/icon_nav_left_arrow_01.png"
        slot="left"
      />
    </NavBar>
    <view class="flex-col">
      <HeaderStatusCard></HeaderStatusCard>
      <view class="flex-col relative wrap">
        <RowStep></RowStep>
        <CFCard class="mt-12" title="退回地址">
          <view class="flex-col mt-16">
            <view class="flex-row self-stretch">
              <text class="consignor-value">李小鱼</text>
              <text class="consignor-value ml-8">15212345678</text>
            </view>
            <text class="self-start copy address-normal mt-6">广东省广州市天河区车陂南东宏国际广场12楼06号</text>
          </view>
        </CFCard>
        <CFCard class="mt-12">
          <view class="flex-col">
            <view class="flex-row items-center">
              <text class="consignor text_39">收货人：</text>
              <text class="consignor-value">李小鱼</text>
              <text class="consignor-value tel">15212345678</text>
            </view>
            <view class="flex-col mt-4">
              <text class="address address-text">广东省广州市天河区车陂南东宏国际广场12楼06号东宏国际广场12楼06号</text>
              <text class="copy copy-right">复制</text>
            </view>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="退款信息">
          <view class="flex-col mt-16">
            <OrderProductItem></OrderProductItem>
            <view class="flex-col relative mt-22">
              <u-cell class="cell-in-white-card" title="售后单号" :value="20230488566779433" :border="false"></u-cell>
              <u-cell
                class="cell-in-white-card mt-12"
                title="申请时间"
                value="2023-09-11 14:10:31"
                :border="false"
              ></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="服务类型" value="退款退货" :border="false"></u-cell>
              <u-cell
                class="cell-in-white-card-weight mt-12"
                title="退款金额"
                value="￥94.00（含运费￥10.00）"
                :border="false"
              ></u-cell>
              <u-cell
                class="cell-in-white-card mt-12"
                title="退回收纳币"
                value="500收纳币（含运费￥10.00）"
                :border="false"
              ></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="退回积分" :value="200" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="退款原因" value="货物破损" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="换货原因" value="货物破损" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="是否需要寄回商品" value="需要" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="备注说明" value="货物存在破损" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-12" title="上传凭证" :border="false">
                <view class="flex-row" slot="value">
                  <image
                    class="equal-division-item"
                    src="/myOrder/static/images/mock_thumb_009.png"
                    v-for="(item, index) in items"
                    :key="index"
                  />
                </view>
              </u-cell>
            </view>
          </view>
        </CFCard>
      </view>
    </view>
    <view class="iPhoneX flex-col footer-btn">
      <view class="fixed-bottom-safe btn-wrap justify-end flex-row">
        <view class="cf-btn-black flex-col items-center text-wrapper justify-center">
          <text class="copy">填写物流信息</text>
        </view>
      </view>
    </view>
  </view>
  </template>
  
  <script>
  import CFCard from '@/components/Card/Card';
  import HeaderStatusCard from '../../../../pages/myOrder/afterSales/components/HeaderStatusCard/HeaderStatusCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '../../../../pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import RowStep from '../../../../pages/myOrder/afterSales/components/RowStep/RowStep.vue';
  
  export default {
    components: { CFCard, HeaderStatusCard, NavBar, OrderProductItem, RowStep },
    props: {},
    data() {
      return {
        title: '售后详情',
        items: [null, null, null, null],
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .icon-nav {
      width: 16rpx;
      height: 32rpx;
    }
    .wrap {
      margin: -48rpx 0 24rpx;
      padding: 24rpx;
      background-color: #f4f4f4;
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      .consignor-value {
        font-size: 30rpx;
        font-family: 'PingFang SC';
        color: #000000;
      }
      .address-normal {
        color: #6d6d6d;
      }
      .consignor {
        font-size: 30rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
        font-weight: 500;
        color: #2d2e32;
      }
      .text_39 {
        line-height: unset;
      }
      .tel {
        margin-left: 4rpx;
        color: #6d6d6d;
        line-height: 42rpx;
      }
      .address {
        font-size: 26rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
        color: #6d6d6d;
      }
      .address-text {
        color: #111111;
        text-align: left;
      }
      .copy-right {
        color: #b09053;
        font-size: 24rpx;
        line-height: 34rpx;
      }
      .equal-division-item {
        border-radius: 8rpx;
        width: 96rpx;
        height: 96rpx;
      }
    }
    .footer-btn {
      background-color: #ffffff;
      height: 118rpx;
      .btn-wrap {
        padding: 32rpx;
        background-color: #ffffff;
        .text-wrapper {
          padding: 8rpx 32rpx;
          border-radius: 32rpx;
          height: 60rpx;
          border: solid 2rpx #6d6d6d;
        }
      }
    }
    .copy {
      font-size: 26rpx;
      font-family: 'PingFang SC';
      line-height: 36rpx;
      color: #111111;
    }
  }
  </style>