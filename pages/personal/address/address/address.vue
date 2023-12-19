<template>
  <view class="flex-col page">
    <NavBar class="header" :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col group_3">
      <list-container :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
        <view class="flex-col">
          <AddressItem class="list-item mt-12" v-for="(item, index) in items" :key="index"></AddressItem>
        </view>
      </list-container>
      <view class="iPhoneX flex-col fixed footer-btn">
        <view class="flex-col btn-wrap"><u-button text="+ 新增收货地址" @click="onClick"></u-button></view>
      </view>
    </view>
  </view>
</template>

<script>
  import AddressItem from '../../../../pages/personal/address/components/AddressItem/AddressItem.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { AddressItem, ListContainer, NavBar },
    props: {},
    data() {
      return {
        title: '收货地址',
        showEmpty: false,
        showLoading: false,
        finished: false,
        items: [null, null],
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
    .header {
      position: relative;
    }
    .group_3 {
      padding: 24rpx;
      .list-item {
        &:first-child {
          margin-top: 0;
        }
      }
      .fixed {
        bottom: 0;
        .btn-wrap {
          padding: 30rpx;
        }
      }
      .footer-btn {
        padding-bottom: 64rpx;
        width: 750rpx;
        height: 150rpx;
      }
    }
  }
</style>