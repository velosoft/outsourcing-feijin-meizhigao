<template>
  <view class="flex-col wrap">
    <view class="flex-col justify-start">
      <u-checkbox-group v-model="checkGroupValue">
        <u-swipe-action class="default-swipe-cell">
          <view class="flex-col">
            <view class="flex-col mt-20" v-for="(item, index) in list" :key="index">
              <u-swipe-action-item :options="swipeOption" @click="onActionItemClick">
                <view class="flex-row items-center group">
                  <u-checkbox v-model="checkValue" shape="circle" activeColor="#b09053" :iconSize="18"></u-checkbox>
                  <view class="flex-row flex-1 ml-12">
                    <image class="shrink-0 thumb" src="/static/images/mock_thumb_003.png" />
                    <view class="flex-col flex-1 ml-12 justify-between">
                      <text class="line-clamp-one self-stretch title title-height">{{ item.productName }}</text>
                      <text class="line-clamp-one size">{{ item.specs[0].title }}：{{ item.specs[0].options[0] }}</text>
                      <view class="flex-row justify-between items-center">
                        <view v-if="item.isCustomize" class="flex-row items-center">
                          <text class="red-font">定金</text>
                          <price class="cf-red-font" :price="item.productPrice" />
                        </view>
                        <view v-else class="flex-row items-center">
                          <price class="cf-black-font" :price="item.productPrice" />
                        </view>
                        <u-number-box class="cf-number-box-1" v-model="v_model"></u-number-box>
                      </view>
                      <view class="items-center" v-if="true">
                        <text class="red-font additional-label">附加服务：安装服务</text>
                        <text class="red-font additional-num">￥99.00</text>
                      </view>
                    </view>
                  </view>
                </view>
              </u-swipe-action-item>
              <view class="flex-row tip-wrap mt-16 items-center" v-if="true">
                <view class="flex-col items-center shrink-0 tag justify-center">
                  <text class="tag-label tag-text">满减</text>
                </view>
                <text class="line-clamp-one red-font tag-right-width ml-8">满100减10优惠</text>
              </view>
            </view>
          </view>
        </u-swipe-action>
      </u-checkbox-group>
    </view>
  </view>
</template>

<script>
  import Price from '@/components/Price/Price';
  export default {
    components: { Price },
    props: { list: { type: Array, default: () => [] } },
    data() {
      return {
        swipeOption: [
          {
            text: '删除',
          },
        ],
        checkGroupValue: '',
        checkValue: '',
        v_model: '',
      };
    },

    methods: {
      onActionItemClick(args) {
        // 事件处理方法
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 0 0 28rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
    .group {
      padding: 0 24rpx;
      .thumb {
        width: 180rpx;
        height: 180rpx;
      }
      .title {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 28rpx;
        color: #030305;
      }
      .title-height {
        width: 395rpx;
      }
      .size {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 24rpx;
        color: #a7a7a7;
      }
      .currency {
        color: #bb3e0c;
      }
      .price {
        font-size: 32rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 32rpx;
        font-weight: 700;
      }
      .price-text {
        color: #bb3e0c;
      }
      .decimal {
        font-size: 24rpx;
        font-family: HarmonyOS Sans SC;
        line-height: 24rpx;
        font-weight: 700;
      }
      .decimal-text {
        margin-left: 4rpx;
        color: #bb3e0c;
      }
      .additional-label {
        font-size: 22rpx;
        line-height: 22rpx;
      }
      .additional-num {
        font-size: 22rpx;
        line-height: 22rpx;
      }
    }
    .tip-wrap {
      margin-left: 24rpx;
      margin-right: 24rpx;
      padding: 8rpx 12rpx;
      background-color: #fdeee9;
      border-radius: 8rpx;
      .tag {
        padding: 0 16rpx;
        height: 36rpx;
        background: #bb3e0c;
        border-radius: 12rpx;
        .tag-text {
          color: #ffffff;
          font-weight: 700;
        }
      }
      .tag-right-width {
        width: 535rpx;
      }
    }
    .tag-label {
      font-size: 20rpx;
      font-family: PingFang SC;
      line-height: 20rpx;
    }
    .red-font {
      font-size: 24rpx;
      font-family: PingFang SC;
      line-height: 24rpx;
      color: #bb3e0c;
    }
  }
</style>
