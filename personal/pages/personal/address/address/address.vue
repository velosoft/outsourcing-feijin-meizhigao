<template>
  <view class="flex-col page height-full">
    <nav-bar class="header" :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col wrap">
      <scroll-view :scroll-y="true">
        <list-container
          :showEmpty="!addressList.length"
          :showLoading="showLoading"
          emptyHint="暂无内容~"
          :finished="finished"
          imgSrc="/personal/static/images/icon_empty_reseller.png"
        >
          <u-cell-group v-model="radiovalue" :border="false">
            <view class="flex-col">
              <address-item
                class="list-item mt-12"
                v-for="(item, index) in addressList"
                :key="index"
                :addressItem="item"
                @setDefault="(val) => setDetaultAddr(index, val)"
              ></address-item>
            </view>
          </u-cell-group>
        </list-container>
      </scroll-view>
    </view>
    <u-button
      class="fixed-bottom-safe2 cf-btn-black footer-btn"
      type="primary"
      size="large"
      shape="circle"
      text="+ 新增收货地址"
      @click="onClick"
    ></u-button>
  </view>
</template>

<script>
  import AddressItem from '@/personal/pages/personal/address/components/AddressItem/AddressItem.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import { addressList } from './address.data.js';

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
        uni.navigateTo({ url: '/personal/pages/personal/address/addressEditor/addressEditor' });
      },

      setDetaultAddr(index, val) {
        this.addressList.forEach((address, i) => {
          if (index === i) {
            address.isDefault = val;
          } else {
            address.isDefault = false;
          }
        });
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
      padding-bottom: calc(172rpx + env(safe-area-inset-bottom));
      overflow-y: hidden;

      .list-item {
        &:first-child {
          margin-top: 0;
        }
      }
    }
    .footer-btn {
      margin: 0 30rpx;
    }
  }
</style>
