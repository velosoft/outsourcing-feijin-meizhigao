<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col products">
      <u-checkbox-group placement="column">
        <view class="flex-col list-item mt-12" v-for="(item, index) in items" :key="index">
          <OrderProductItem v-if="orderStatus === '未发货' || applyType"></OrderProductItem>
          <OrderProductNumberBox v-else></OrderProductNumberBox>
        </view>
      </u-checkbox-group>
    </view>
    <view class="flex-col main">
      <ApplyAfterSaleForm v-if="orderStatus === '未发货' || applyType"></ApplyAfterSaleForm>
      <ApplyAfterSaleType v-else @type="onChangeType"></ApplyAfterSaleType>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start action">
      <view class="flex-col justify-start items-center button btn-wrapper">
        <text class="btn-font btn-text">确认提交</text>
      </view>
    </view>
  </view>
</template>

<script>
  import ApplyAfterSaleForm from '@/pages/myOrder/components/ApplyAfterSaleForm/ApplyAfterSaleForm.vue';
  import ApplyAfterSaleType from '@/pages/myOrder/components/ApplyAfterSaleType/ApplyAfterSaleType.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '@/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import OrderProductNumberBox from '@/pages/myOrder/components/OrderProductNumberBox/OrderProductNumberBox.vue';

  export default {
    components: { ApplyAfterSaleForm, ApplyAfterSaleType, NavBar, OrderProductItem, OrderProductNumberBox },
    props: {},
    data() {
      return {
        orderStatus: '已发货',
        applyType: '',
        title: '申请售后',
        items: [null, null],
      };
    },
    methods: {
      onChangeType(type) {
        this.applyType = type;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    padding-bottom: 240rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
  }
  .products {
    margin: 0 24rpx;
    padding: 24rpx 23.46rpx 32rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .btn-font {
    font-size: 28rpx;
    font-family: 'PingFang SC';
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .main {
    margin: 24rpx 24rpx 0;
  }
  .action {
    padding: 32rpx 0 50rpx;
    background-color: #ffffff;
    width: 750rpx;
  }
  .button {
    margin: 0 40rpx;
  }
  .btn-wrapper {
    padding: 26rpx 0 28rpx;
    background-color: #b09053;
    border-radius: 48rpx;
    width: 670rpx;
  }
  .btn-text {
    color: #ffffff;
    font-size: 30rpx;
    line-height: 42rpx;
  }
</style>
