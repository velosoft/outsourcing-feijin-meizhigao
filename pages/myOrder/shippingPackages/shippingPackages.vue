<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <list-container :showEmpty="!list.length" :showLoading="showLoading" :finished="finished">
      <view class="flex-col list">
        <view class="flex-col item list-item mt-12" @click="onClick" v-for="(item, index) in list" :key="index">
          <text class="self-start title title-text">{{ item.package_name }}</text>
          <view class="flex-col self-stretch mt-16">
            <view class="flex-row justify-between">
              <text class="field-name">物流公司</text>
              <view class="flex-row items-center">
                <text class="field-value">{{ item.logistics_company }}</text>
                <image
                  class="shrink-0 arrow-right ml-8"
                  src="/static/images/icon_arrow_right.png"
                />
              </view>
            </view>
            <view class="flex-row justify-between mt-16" v-if="item.contact_phone">
              <text class="field-name">联系电话</text>
              <text class="field-value">{{ item.contact_phone }}</text>
            </view>
            <view class="flex-row justify-between mt-16" v-if="item.driver_name">
              <text class="field-name">货运司机</text>
              <text class="field-value">{{ item.driver_name }}</text>
            </view>
            <view class="flex-row justify-between mt-16">
              <text class="field-name">快递单号</text>
              <text class="field-value">{{ item.tracking_number }}</text>
            </view>
            <view class="flex-row justify-between mt-16" v-if="item.license_plate">
              <text class="field-name">车牌号</text>
              <text class="field-value">{{ item.license_plate }}</text>
            </view>
          </view>
        </view>
      </view>
    </list-container>
  </view>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import { shippingPackages } from '../../../mock/personal/orders';

  export default {
    components: { ListContainer, NavBar },
    props: {},
    data() {
      return {
        list: shippingPackages,
        title: '查看物流',
        showLoading: false,
        finished: false,
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/chakanwuliu_kuaiisong_dangewuliu/chakanwuliu_kuaiisong_dangewuliu' });
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 232rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
  }
  .list {
    padding: 32rpx 24rpx 464rpx;
    overflow-y: auto;
  }
  .item {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .title {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .title-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .field-name {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9c9c9f;
  }
  .field-value {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
  .arrow-right {
    width: 12rpx;
    height: 24rpx;
  }
</style>
