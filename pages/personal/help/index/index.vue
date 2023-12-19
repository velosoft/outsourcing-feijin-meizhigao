<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col">
      <u-tabs :list="list"></u-tabs>
      <list-container :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
        <view class="flex-col list">
          <view
            class="flex-row justify-between list-item mt-10"
            @click="onClick"
            v-for="(item, index) in items"
            :key="index"
          >
            <text class="self-center label">如何定制DIY商品？</text>
            <image class="self-start icon-arrow" src="../../../../static/images/icon_right_arrow_05.png" />
          </view>
        </view>
      </list-container>
    </view>
  </view>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { ListContainer, NavBar },
    props: {},
    data() {
      return {
        title: '帮助中心',
        list: [
          {
            name: '常见问题',
          },
          {
            name: '商品问题',
          },
          {
            name: '服务问题',
          },
          {
            name: '售后问题',
          },
        ],
        showEmpty: false,
        showLoading: false,
        finished: false,
        items: [null, null, null],
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/help/problemDetail/problemDetail' });
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .list {
      padding: 16rpx 24rpx 984rpx;
      .list-item {
        padding: 32rpx 28rpx 40rpx;
        background-color: #ffffff;
        border-radius: 16rpx;
        &:first-child {
          margin-top: 0;
        }
        .label {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 28rpx;
          color: #2d2e32;
        }
        .icon-arrow {
          margin-right: 8rpx;
          margin-top: 16rpx;
          width: 20rpx;
          height: 20rpx;
        }
      }
    }
  }
</style>