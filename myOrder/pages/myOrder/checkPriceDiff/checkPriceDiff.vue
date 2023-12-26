<template>
  <view class="flex-col page">
    <NavBar class="header" :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <CFCard class="card" title="订单核对结果" :useTag="true">
      <view class="flex-col mt-16">
        <u-cell class="cell-in-white-card-weight" title="超额服务费需支付" value="￥100" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="补购商品需支付" value="￥200" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="合计需补充支付" value="￥300" :border="false"></u-cell>
        <view class="divider"></view>
        <u-cell class="cell-in-white-card-weight mt-16" title="未使用商品需退回" value="￥200" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="合计需退回" value="￥200" :border="false"></u-cell>
        <view class="divider"></view>
        <u-cell
          class="cell-in-white-card-weight mt-16"
          title="订单核对结果"
          value="客户需支付￥100"
          :border="false"
        ></u-cell>
      </view>
    </CFCard>
    <CFCard class="card" title="服务核对结果" :useTag="true">
      <view class="flex-col mt-16">
        <u-cell class="cell-in-white-card-weight" title="已支付服务费报价" value="￥400" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="实际支付服务费" value="￥500" :border="false"></u-cell>
        <view class="divider"></view>
        <u-cell class="cell-in-white-card-weight mt-16" title="超额服务费支付" value="￥200" :border="false"></u-cell>
      </view>
    </CFCard>
    <CFCard class="card" title="商品核对结果" :useTag="true">
      <view class="product-types" slot="headerRight">
        <view
          v-for="(item, index) in productTypes"
          :key="index"
          class="product-type"
          :class="{ active: item === productType }"
          @click="onChangeProductType(item)"
        >
          {{ item }}
        </view>
      </view>
      <view class="flex-col mt-16">
        <u-cell class="cell-in-white-card-weight" title="采购平台商品数" :value="12" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="已使用商品数" :value="10" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="未使用商品数" :value="2" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="未使用商品需退回" value="￥200" :border="false"></u-cell>
        <view class="divider"></view>
        <u-cell class="cell-in-white-card-weight mt-16" title="补购商品数" :value="2" :border="false"></u-cell>
        <u-cell class="cell-in-white-card-weight mt-16" title="补购商品需支付" value="￥200" :border="false"></u-cell>
        <view class="divider"></view>
        <u-cell
          class="cell-in-white-card-weight mt-16"
          title="核对后商品应补差额"
          value="￥200"
          :border="false"
        ></u-cell>
      </view>
    </CFCard>
    <CFCard class="card" title="需退回商品清单" :useTag="true">
      <view class="flex-row items-center" slot="headerRight" @click="onShowProducts">
        <text class="self-center product-count">共 20 件商品</text>
        <image class="icon-arrow-right-yellow ml-4" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
      </view>
      <view class="flex-col mt-16">
        <view class="flex-row justify-between">
          <image
            class="equal-division-item"
            src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=b7b2f633c35e6036c37d5d570a880cd9.png"
            v-for="(item, index) in items"
            :key="index"
          />
        </view>
        <view class="flex-row justify-end items-center product-sum mt-12">
          <text class="sum-title">合计退回金额</text>
          <text class="ml-8 sum-money">￥2000</text>
        </view>
      </view>
    </CFCard>
    <CFCard class="card" title="补购商品清单" :useTag="true">
      <view class="flex-row items-center" slot="headerRight" @click="onShowProducts">
        <text class="self-center product-count">共 20 件商品</text>
        <image class="icon-arrow-right-yellow ml-4" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
      </view>
      <view class="flex-col mt-16">
        <view class="flex-row justify-between">
          <image
            class="equal-division-item"
            src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=b7b2f633c35e6036c37d5d570a880cd9.png"
            v-for="(item, index) in items"
            :key="index"
          />
        </view>
        <view class="flex-row justify-end items-center product-sum mt-12">
          <text class="sum-title">商品总金额</text>
          <text class="ml-8 sum-money">￥2000</text>
        </view>
      </view>
    </CFCard>
    <CFCard class="card" title="已使用商品清单" :useTag="true">
      <view class="flex-row items-center" slot="headerRight" @click="onShowProducts">
        <text class="self-center product-count">共 20 件商品</text>
        <image class="icon-arrow-right-yellow ml-4" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
      </view>
      <view class="flex-col mt-16">
        <view class="flex-row justify-between">
          <image
            class="equal-division-item"
            src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=b7b2f633c35e6036c37d5d570a880cd9.png"
            v-for="(item, index) in items"
            :key="index"
          />
        </view>
      </view>
    </CFCard>
    <CFCard class="card" title="未使用商品清单" :useTag="true">
      <view class="flex-row items-center" slot="headerRight" @click="onShowProducts">
        <text class="self-center product-count">共 20 件商品</text>
        <image class="icon-arrow-right-yellow ml-4" src="/myOrder/static/images/icon_arrow_right_yellow.png" />
      </view>
      <view class="flex-col mt-16">
        <view class="flex-row justify-between">
          <image
            class="equal-division-item"
            src="https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=b7b2f633c35e6036c37d5d570a880cd9.png"
            v-for="(item, index) in items"
            :key="index"
          />
        </view>
      </view>
    </CFCard>
    <view class="flex-col justify-start items-center btn-wrapper">
      <text class="btn-text">前往支付差额</text>
    </view>
    <u-popup :show="showProducts" @close="onCloseProducts" mode="bottom" :round="12" :closeable="true">
      <PopProductInfo></PopProductInfo>
    </u-popup>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopProductInfo from '@/myOrder/pages/myOrder/components/PopProductInfo/PopProductInfo.vue';


  export default {
    components: { CFCard, NavBar, PopProductInfo },
    props: {},
    data() {
      return {
        productTypes: ['平台商品', '线下商品'],
        title: '订单核对结果',
        items: [null, null, null, null, null],
        showProducts: false,
        productType: '线下商品',
      };
    },
    methods: {
      onShowProducts() {
        this.showProducts = true;
      },
      onCloseProducts() {
        this.showProducts = false;
      },
      onChangeProductType(type) {
        this.productType = type;
      },
    },
  };
</script>

<style scoped lang="less">
  .product-types {
    width: 236rpx;
    height: 44rpx;
    background: #eeeeee;
    border-radius: 22rpx;
    display: flex;
    overflow: hidden;

    .product-type {
      flex: 1 1 auto;
      font-size: 22rpx;
      color: #9c9c9f;
      line-height: 32rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        background-color: #b09053;
        color: #ffffff;
      }
    }
  }
  .page {
    padding-bottom: 88rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .header {
    position: relative;
  }
  .card {
    margin: 16rpx 24rpx 0;
  }
  .divider {
    height: 2rpx;
    background-color: #e8e8e8;
    margin: 44rpx 0 12rpx 0;
  }
  .product-count {
    font-size: 28rpx;
    line-height: 28rpx;
    color: #b09053;
  }
  .icon-arrow-right-yellow {
    width: 8rpx;
    height: 14rpx;
  }
  .equal-division-item {
    border-radius: 16rpx;
    width: 118rpx;
    height: 118rpx;
  }
  .product-sum {
    padding: 0 8rpx;
  }
  .sum-title {
    font-size: 26rpx;
    line-height: 26rpx;
    color: #2d2e32;
  }
  .sum-money {
    font-size: 30rpx;
    color: #111111;
    line-height: 44rpx;
    font-weight: 700;
  }
  .btn-wrapper {
    padding: 24rpx 0;
    background-color: #b09053;
    border-radius: 48rpx;
    margin: 144rpx 40rpx 0;
  }
  .btn-text {
    font-size: 28rpx;
    line-height: 28rpx;
    font-weight: 700;
    color: #ffffff;
  }
</style>
