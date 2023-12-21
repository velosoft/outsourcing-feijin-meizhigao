<template>
  <view class="flex-col page height-full">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <FjSticky v-bind:customNavHeight="customNavHeight"
      ><u-tabs
        class="line-tabs"
        :list="list"
        :activeStyle="{'color':'#000000','fontWeight':'700','fontSize': '14'}"
        :inactiveStyle="{'color':'#9e9ea0','fontSize': '14'}"
        :lineWidth="32"
        :lineHeight="10"
        :scrollable="false"
      ></u-tabs
    ></FjSticky>
    <view class="flex-col justify-start"
      ><scroll-view :scroll-y="true"
        ><list-container :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
          <view class="flex-col list">
            <view
              class="flex-row justify-between list-item mt-10"
              @click="onClick"
              v-for="(item, index) in problemList"
              :key="index"
              ><text class="self-center label">{{ item.title }}</text>
              <image class="self-start icon-arrow" src="/static/images/icon_right_arrow_05.png" />
            </view>
          </view> </list-container></scroll-view
    ></view>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { FjSticky, ListContainer, NavBar },
    props: {},
    data() {
      return {
        customNavHeight: '80',
        problemList: [
          {
            pid: '001',
            type: '0',
            title: '如何定制DIY商品？',
          },
          {
            pid: '002',
            type: '1',
            title: '如何预约收纳服务？',
          },
          {
            pid: '003',
            type: '2',
            title: '服务是支持售后的吗？',
          },
          {
            pid: '004',
            type: '0',
            title: '如何定制DIY商品？',
          },
          {
            pid: '005',
            type: '0',
            title: '如何定制DIY商品？',
          },
        ],
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

    .line-tabs {
      /deep/ .u-tabs {
        padding: 0 14rpx;
        background-color: #ffffff;
      }

      /deep/ .u-tabs__wrapper__nav__item {
        height: 36px;
      }

      /deep/ .u-tabs__wrapper__nav__line {
        background: linear-gradient(90deg, #e9b81b 0%, #e9b81b00 97.2%) !important;
        opacity: 0.7 !important;
        border-radius: 10rpx !important;
        bottom: 12rpx !important;
      }
    }
    .list {
      padding: 16rpx 24rpx;

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
