<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <fj-sticky>
      <u-tabs class="tabs-yellow-wide-eq" :list="tabItems" :activeStyle="activeStyle" :scrollable="false"></u-tabs>
    </fj-sticky>
    <view class="flex-col justify-start tabs-body">
      <list-container :showEmpty="!favoriteItems.length" :showLoading="showLoading" :finished="finished">
        <u-swipe-action class="default-swipe-cell">
          <view class="flex-col">
            <u-swipe-action-item
              class="mt-16 list-item"
              :options="swipeOption"
              @click="onActionItemClick"
              v-for="(item, index) in favoriteItems"
              :key="index"
            >
              <view class="flex-row items-stretch">
                <view class="flex-col justify-start items-center relative cover-wrapper">
                  <image class="cover-img" :src="item.imageUrl" />
                  <view v-if="item.isFail" class="flex-col justify-start items-center mask pos-mask">
                    <view class="flex-col justify-start items-center circle"><text class="text-mask">失效</text></view>
                  </view>
                </view>
                <view class="flex-col flex-1 justify-around ml-12">
                  <text class="font-title min-height line-clamp-tow">{{ item.name }}</text>
                  <view class="flex-col justify-start items-start mt-10">
                    <view class="flex-row">
                      <view
                        class="flex-col justify-center tag list-item-h"
                        v-for="(tag, index) in item.tags || []"
                        :key="index"
                      >
                        <text class="font-tag">{{ tag }}</text>
                      </view>
                    </view>
                  </view>
                  <view class="flex-col justify-start items-start mt-10">
                    <view class="flex-col">
                      <view class="flex-row items-center" v-if="!item.isSecKill">
                        <price class="cf-black-font" :price="item.price" />
                      </view>
                      <view class="flex-row items-start" v-else>
                        <text class="text-kill mt-2">秒杀价</text>
                        <price class="cf-red-font" :price="item.price" />
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
  import { favoriteItems } from '@/mock/personal/favorites.js';
  import Price from '@/components/Price/Price';

  export default {
    components: { FjSticky, ListContainer, NavBar, Price },
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
        favoriteItems: favoriteItems,
        title: '我的收藏',
        showLoading: true,
        finished: false,
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
