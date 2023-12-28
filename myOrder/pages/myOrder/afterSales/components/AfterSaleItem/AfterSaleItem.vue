<template>
  <view class="flex-col wrap">
    <view class="flex-row justify-between">
      <view class="flex-row">
        <text class="order">{{ afterSaleItem.salesStatus == '申请中' ? '售后申请时间：' : '售后单号：' }}</text>
        <text class="order">{{
          afterSaleItem.salesStatus == '申请中' ? afterSaleItem.reserveTime : afterSaleItem.number
        }}</text>
      </view>
      <text class="status text" :class="afterSaleItem.salesStatus == '售后关闭' ? 'text-normal' : ''">{{
        afterSaleItem.salesStatus
      }}</text>
    </view>
    <view class="flex-row self-stretch container" @click="gotoAfterSalesDetail">
      <image class="self-center thumb" :src="afterSaleItem.goods.image" />
      <view class="flex-col flex-1 ml-10 justify-between">
        <text class="line-clamp-two status title">{{ afterSaleItem.goods.title }}</text>
        <view class="flex-row justify-between">
          <text class="size-label size-text">{{ afterSaleItem.goods.desc }}</text>
          <text class="size-label size-num">{{ 'x' + afterSaleItem.goods.quantity }}</text>
        </view>
        <price class="cf-black-font" :price="afterSaleItem.goods.price" />
      </view>
    </view>
    <view class="flex-row self-stretch tips-wrap">
      <text class="order">{{ afterSaleItem.customerProgress }}</text>
      <text class="order tips-text ml-20" :class="afterSaleItem.salesStatus == '售后成功' ? 'tips-text-active' : ''">{{
        afterSaleItem.customerStatus
      }}</text>
    </view>
    <view class="flex-col justify-center items-center btn mt-4" v-if="afterSaleItem.btnText" @click="onShowDialog"
      ><text class="btn-text">
        {{ afterSaleItem.btnText }}
      </text></view>
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
  import ConfirmPanel from '@/components/ConfirmPanel.vue';
  import Price from '@/components/Price/Price';
  export default {
    components: { ConfirmPanel, Price },
    props: {
      afterSaleItem: {
        type: Object,
        default: () => ({
          reserveTime: '2023-06-08 01:25:67',
          number: '20230304405595',
          salesStatus: '售后中',
          customerProgress: '客服介入',
          customerStatus: '客服已介入',
          btnText: '取消售后',
          goods: {
            image:
              'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
            title: '定制卧室收纳柜新疆包邮卧室床头',
            desc: '中号；白色',
            price: 200,
            quantity: 1,
          },
        }),
      },
    },
    data() {
      return { showDialog: false };
    },

    methods: {
      gotoAfterSalesDetail() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/afterSales/afterSalesDetail/afterSalesDetail' });
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
  .wrap {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
    .order {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
      color: #111111;
    }
    .order-norml {
      color: #b09053;
    }
    .status {
      font-size: 28rpx;
      font-family: 'PingFang SC';
      line-height: 40rpx;
      font-weight: 500;
    }
    .text {
      color: #b09053;
    }
    .text-normal {
      color: #6d6d6d;
    }
    .container {
      margin-top: 24rpx;
      padding: 24rpx 20rpx;
      background-color: #f4f4f4;
      border-radius: 16rpx;
      .thumb {
        border-radius: 16rpx;
        width: 180rpx;
        height: 180rpx;
      }
      .title {
        color: #111111;
      }
      .size-label {
        font-size: 28rpx;
        font-family: 'PingFang SC';
        line-height: 36rpx;
      }
      .size-text {
        color: #6d6d6d;
        font-size: 26rpx;
      }
      .size-num {
        color: #6d6d6d;
        font-size: 26rpx;
      }

      .text-active {
        color: #f13f0c;
      }
    }

    .tips-wrap {
      margin-top: 24rpx;
      padding: 8rpx 0;
      .tips-text {
        color: #6d6d6d;
      }
      .tips-text-active {
        color: #b09053;
      }
    }
    .btn {
      align-self: flex-end;
      border-radius: 28rpx;
      height: 56rpx;
      border: solid 2rpx #dec9a0;
      padding: 0 20rpx;
      .btn-text {
        font-size: 28rpx;
        font-family: 'PingFang SC';
        line-height: 56rpx;
        color: #b09053;
      }
    }
  }
</style>
