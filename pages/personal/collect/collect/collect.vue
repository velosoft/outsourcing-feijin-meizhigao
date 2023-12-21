<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <FjSticky v-bind:customNavHeight="88">
      <u-tabs class="tabs-yellow-wide-eq" :list="tabItems" :activeStyle="activeStyle" :scrollable="false"></u-tabs>
    </FjSticky>
    <view class="flex-col justify-start tabs-body">
      <list-container :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
        <u-swipe-action class="default-swipe-cell">
          <view class="flex-col">
            <u-swipe-action-item
              class="mt-16 list-item"
              :options="swipeOption"
              @click="onActionItemClick"
              v-for="(item, index) in items"
              :key="index"
            >
              <view class="flex-row">
                <view class="flex-col justify-start items-center relative cover-wrapper">
                  <image
                    class="cover-img"
                    src="https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=f7d1e1bdc9f9bdfb1f01a27bb69d7896.png"
                  />
                  <view class="flex-col justify-start items-center mask pos-mask">
                    <view class="flex-col justify-start items-center circle"><text class="text-mask">失效</text></view>
                  </view>
                </view>
                <view class="flex-col flex-1 self-start ml-12">
                  <text class="font-title min-height">{{ itemTitle }}</text>
                  <view class="flex-col justify-start items-start mt-10">
                    <view class="flex-row">
                      <view
                        class="flex-col justify-center tag list-item-h"
                        v-for="(item, index) in items_1"
                        :key="index"
                      >
                        <text class="font-tag">新品上市</text>
                      </view>
                    </view>
                  </view>
                  <view class="flex-col justify-start items-start mt-10">
                    <view class="flex-col">
                      <view class="flex-row items-center" v-if="true">
                        <text class="font-prefix">￥</text>
                        <view class="flex-row items-baseline">
                          <text class="font-price">40</text>
                          <text class="font-prefix ml-2">.00</text>
                        </view>
                      </view>
                      <view class="flex-row items-end" v-if="false">
                        <text class="text-kill">秒杀价</text>
                        <view class="flex-row items-center">
                          <text class="text-kill">￥</text>
                          <view class="flex-row items-baseline">
                            <text class="font-price price-red">40</text>
                            <text class="text-kill ml-2">.00</text>
                          </view>
                        </view>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </u-swipe-action-item>
          </view>
        </u-swipe-action>
      </list-container>
    </view>
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
        swipeOption: [
          {
            text: '删除',
          },
        ],
        tabItems: [
          {
            name: '商品',
          },
          {
            name: '服务',
          },
          {
            name: '课程',
          },
        ],
        activeStyle: {
          color: '#030305',
          fontWeight: '700',
        },
        canShowMask: true,
        itemTitle: '收纳整理师中级认证课收纳整理师中级认证课',
        title: '我的收藏',
        showEmpty: false,
        showLoading: false,
        finished: false,
        items_1: [null, null],
        items: [null, null, null],
      };
    },

    methods: {
      onActionItemClick(args) {
        console.log(args);
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    .tabs-body {
      padding: 48rpx 32rpx;
      .list-item:first-child {
        margin-top: 0;
      }

      .list-item-h:first-child {
        margin-left: 0;
      }
      .cover-wrapper {
        width: 198rpx;
        height: 198rpx;
        .cover-img {
          width: 100%;
          height: 100%;
        }
        .mask {
          padding: 60rpx 0;
          background-color: #00000066;
          border-radius: 20rpx;
          .circle {
            padding: 24rpx 0 32rpx;
            background-color: #bcbcbccc;
            border-radius: 50%;
            width: 78rpx;
            .text-mask {
              font-size: 24rpx;
              line-height: 24rpx;
              color: #ffffff;
            }
          }
        }
        .pos-mask {
          position: absolute;
          left: 0rpx;
          right: 0rpx;
          top: 0rpx;
          bottom: 0rpx;
        }
      }
      .font-title {
        font-size: 28rpx;
        line-height: 44rpx;
        color: #030305;
      }
      .min-height {
        min-width: 88rpx;
      }
      .tag {
        margin-left: 12rpx;
        padding: 4rpx 8rpx;
        height: 32rpx;
        background-color: #faf9f5;
        border-radius: 4rpx;
        .font-tag {
          font-size: 20rpx;
          line-height: 20rpx;
          color: #b1a76e;
        }
      }
      .font-prefix {
        font-size: 20rpx;
        line-height: 20rpx;
        font-weight: 700;
        color: #030305;
      }
      .font-price {
        font-size: 32rpx;
        line-height: 32rpx;
        font-weight: 700;
        color: #030305;
      }
      .text-kill {
        font-size: 20rpx;
        line-height: 20rpx;
        font-weight: 700;
        color: #bb3e0c;
      }
      .price-red {
        color: #bb3e0c;
      }
    }
  }
</style>
