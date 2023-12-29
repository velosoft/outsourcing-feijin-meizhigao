<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#b09053" titleColor="#ffffff">
      <image class="icon-nav" src="/myOrder/static/images/icon_nav_left_arrow_01.png" slot="left" />
    </NavBar>
    <view class="flex-col">
      <HeaderStatusCard :headerStatus="headerStatus"></HeaderStatusCard>
      <view class="flex-col relative wrap">
        <RowStep :stepData="stepData"></RowStep>
        <CFCard class="mt-12" title="退回地址" v-if="true">
          <view class="flex-col mt-16">
            <view class="flex-row self-stretch">
              <text class="consignor-value">李小鱼</text>
              <text class="consignor-value ml-8">15212345678</text>
            </view>
            <text class="self-start copy address-normal mt-6">广东省广州市天河区车陂南东宏国际广场12楼06号</text>
          </view>
        </CFCard>
        <CFCard class="mt-12" v-if="true">
          <view class="flex-col">
            <view class="flex-row items-center">
              <text class="consignor consignor-text">收货人：</text>
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
                class="cell-in-white-card mt-16"
                title="申请时间"
                value="2023-09-11 14:10:31"
                :border="false"
              ></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="服务类型" value="退款退货" :border="false"></u-cell>
              <u-cell
                class="cell-in-white-card-weight mt-16"
                title="退款金额"
                value="￥94.00（含运费￥10.00）"
                :border="false"
              ></u-cell>
              <u-cell
                class="cell-in-white-card mt-16"
                title="退回收纳币"
                value="500收纳币（含运费￥10.00）"
                :border="false"
              ></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="退回积分" :value="200" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="退款原因" value="货物破损" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="换货原因" value="货物破损" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="是否需要寄回商品" value="需要" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="备注说明" value="货物存在破损" :border="false"></u-cell>
              <u-cell class="cell-in-white-card mt-16" title="上传凭证" :border="false">
                <view class="flex-row" slot="value">
                  <image
                    class="equal-division-item ml-10"
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
        <view class="cf-btn-black flex-col items-center text-wrapper justify-center" @click="onClick">
          <text class="copy">填写物流信息</text>
        </view>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="bottom"
      :round="12"
      :closeable="true"
      :safeAreaInsetBottom="false"
    >
      <PopLogisticsInfo @onConfirm="onConfirm"></PopLogisticsInfo>
    </u-popup>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import HeaderStatusCard from '../../../../pages/myOrder/afterSales/components/HeaderStatusCard/HeaderStatusCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '../../../../pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import RowStep from '../../../../pages/myOrder/afterSales/components/RowStep/RowStep.vue';
  import PopLogisticsInfo from '../../../../pages/myOrder/afterSales/components/PopLogisticsInfo/PopLogisticsInfo.vue';
  import { productOrders } from '@/mock/personal/orders';

  export default {
    components: { CFCard, HeaderStatusCard, NavBar, OrderProductItem, RowStep, PopLogisticsInfo },
    props: {},
    data() {
      return {
        title: '售后详情',
        items: [null, null, null, null],
        popupVisible: false,
        headerStatus: {
          status: 0,
          title: '退款成功',
          descMain: '退款金额：￥84',
          descSecondary: '退款时间：2023-09-11 14:14:32',
        },
        stepData: {},
        product: productOrders,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      onConfirm(args) {
        // 事件处理方法
        this.popupVisible = false;
      },
    },
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
      margin: -48rpx 0 48rpx;
      padding: 24rpx;
      background-color: #f4f4f4;
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      .consignor-value {
        font-size: 30rpx;
        font-family: 'PingFang SC';
        color: #111111;
      }
      .address-normal {
        color: #6d6d6d;
      }
      .consignor {
        font-size: 30rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
        font-weight: 500;
        color: #6d6d6d;
      }
      .consignor-text {
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
