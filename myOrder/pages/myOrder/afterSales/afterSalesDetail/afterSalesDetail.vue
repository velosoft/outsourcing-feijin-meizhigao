<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#b09053" titleColor="#ffffff">
      <image class="icon-nav" src="/myOrder/static/images/icon_nav_left_arrow_01.png" slot="left" />
    </NavBar>
    <view class="flex-col">
      <HeaderStatusCard :headerStatus="headerStatus"></HeaderStatusCard>
      <view class="flex-col container">
        <RowStep :showCell="false" :stepData="stepData"></RowStep>
        <CFCard class="mt-12" title="售后信息">
          <view class="flex-col content-info">
            <OrderProductItem></OrderProductItem>
            <view class="flex-col mt-24">
              <u-cell class="cell-in-white-card-weight" title="售后类型" value="客服介入" :border="false"></u-cell>
              <u-cell
                class="cell-in-white-card mt-14"
                title="售后单号"
                :value="202308876664449330"
                :border="false"
              ></u-cell>
              <u-cell
                class="cell-in-white-card mt-14"
                title="创建时间"
                value="2022-04-01 09:30:22"
                :border="false"
              ></u-cell>
              <u-cell class="cell-in-white-card mt-14" title="原订单" value="查看订单" :border="false">
                <view class="flex-row items-center" slot="value"  @click="gotoOrderDetial">
                  <text class="cell-value cell-value-text">查看订单</text>
                  <image
                    class="icon-arrow ml-6"
                    src="https://dev.ft.velosoft.cn/api/image?token=658ccc0bd6bce000114de0dd&name=icon_golden_right_arrow.png"
                  />
                </view>
              </u-cell>
            </view>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="售后进度">
          <view class="flex-col step-con-top mt-16">
            <AfterSaleSteps :afterSaleStepsData="afterSaleStepsData"></AfterSaleSteps>
            <view class="flex-col justify-start items-end step-con-top">
              <view class="flex-col justify-start items-center text-wrapper" @click="onShowDialog">
                <text class="cell-value btn-text">取消售后</text>
              </view>
            </view>
          </view>
        </CFCard>
      </view>
    </view>
    <confirm-panel
      :isShow="showDialog"
      :isnormal="false"
      content="您确定取消售后吗？"
      @cancel="onCancel"
      @confirm="onConfirm"
    ></confirm-panel>
  </view>
</template>

<script>
  import AfterSaleSteps from '../../../../pages/myOrder/afterSales/components/AfterSaleSteps/AfterSaleSteps.vue';
  import CFCard from '@/components/Card/Card';
  import HeaderStatusCard from '../../../../pages/myOrder/afterSales/components/HeaderStatusCard/HeaderStatusCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '../../../../pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import RowStep from '../../../../pages/myOrder/afterSales/components/RowStep/RowStep.vue';
  import ConfirmPanel from '@/components/ConfirmPanel.vue';

  export default {
    components: { AfterSaleSteps, CFCard, HeaderStatusCard, NavBar, OrderProductItem, RowStep, ConfirmPanel },
    props: {},
    data() {
      return {
        headerStatus: {
          status: 0,
          title: '售后成功',
          descMain: '',
          descSecondary: '',
        },
        product: {},
        stepData: {},
        title: '订单详情',
        afterSaleStepsData: {},
        showDialog: false,
      };
    },

    methods: {
      gotoOrderDetial(){
        uni.navigateTo({ url: '/myOrder/pages/myOrder/intentionOrderDetail/intentionOrderDetail' })
      },
      onShowDialog() {
        console.log('弹框');
        this.showDialog = true;
      },
      onCancel() {
        this.showDialog = false;
      },
      onConfirm() {
        this.showDialog = false;
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
    .container {
      margin-top: -48rpx;
      padding: 24rpx;
      background-color: #f4f4f4;
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      .content-info {
        padding-top: 16rpx;
        .cell-value-text {
          font-size: 26rpx;
          line-height: 36rpx;
        }
        .icon-arrow {
          width: 8rpx;
          height: 14rpx;
        }
      }
      .step-con-top {
        margin-top: 32rpx;
        .text-wrapper {
          padding: 8rpx 0;
          border-radius: 28rpx;
          width: 148rpx;
          border: solid 2rpx #e3cea7;
          .btn-text {
            font-size: 26rpx;
            line-height: 36rpx;
          }
        }
      }
      .cell-value {
        font-size: 24rpx;
        line-height: 34rpx;
        color: #b09053;
      }
    }
  }
</style>
