<template>
  <view class="flex-col page height-full">
    <NavBar class="header" :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col wrap">
      <scroll-view :scroll-y="true">
        <list-container
          :showEmpty="!addressList.length"
          :showLoading="showLoading"
          emptyHint="暂无内容~"
          :finished="finished"
          imgSrc="/static/images/icon_empty_reseller.png"
        >
          <u-cell-group v-model="radiovalue" :border="false">
            <view class="flex-col">
              <AddressItem class="list-item mt-12" v-for="(item, index) in addressList" :key="index" :addressItem="item"></AddressItem>
            </view>
          </u-cell-group>
        </list-container>
      </scroll-view>
    </view>
    <view class="fixed-bottom-safe2 flex-col footer-btn">
      <u-button
        class="cf-btn-black"
        type="primary"
        size="large"
        shape="circle"
        text="+ 新增收货地址"
        @click="onClick"
      ></u-button>
    </view>
  </view>
</template>

<script>
  import AddressItem from '../../../../pages/personal/address/components/AddressItem/AddressItem.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import {addressList} from './address.data.js'

  export default {
    components: { AddressItem, ListContainer, NavBar },
    props: {},
    data() {
      return {
        title: '收货地址',
        showEmpty: false,
        showLoading: false,
        finished: false,
        addressList: addressList,
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/address/addressEditor/addressEditor' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    .header {
      position: relative;
      align-self: stretch;
    }
    .wrap {
      padding: 24rpx;
      overflow-y: hidden;
      .list-item {
        &:first-child {
          margin-top: 0;
        }
      }
    }
    .footer-btn {
      padding: 32rpx;
      background-color: #f8f8f8;
    }
  }
</style>
