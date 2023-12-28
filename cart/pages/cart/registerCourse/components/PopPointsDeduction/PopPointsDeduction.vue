<template>
  <popup-with-button title="积分抵扣详情" buttonText="确定" @click="onConfirm">
    <view class="flex-col justify-start button view">
      <u-radio-group v-model="radioValue" class="cf-radio-group">
        <view class="flex-col flex-1">
          <view class="flex-row justify-between cell-wrap items-center">
            <view class="flex-row items-center">
              <text class="label">使用积分抵扣</text>
              <text class="label price-num">￥35.00</text>
            </view>
            <u-radio
              class="text"
              name="使用积分抵扣"
              activeColor="#030305"
              inactiveColor="#f8f8f8"
              iconSize="40rpx"
              iconColor="#030305"
            ></u-radio>
          </view>
          <view class="flex-row justify-between cell-top mt-10 cell-wrap items-center">
            <text class="label">不使用积分</text>
            <u-radio
              class="text"
              name="不使用积分"
              activeColor="#030305"
              inactiveColor="#f8f8f8"
              iconSize="40rpx"
              iconColor="#030305"
            ></u-radio>
          </view>
        </view>
      </u-radio-group>
    </view>
  </popup-with-button>
</template>

<script>
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { PopupWithButton },
    props: {
      pointsDeduction: { type: Object, default: () => ({}) },
    },
    data() {
      return {
        radioValue: '',
      };
    },

    methods: {
      onConfirm() {
        // 事件处理方法
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .button {
    align-self: stretch;
    .cell-wrap {
      padding: 0 30rpx;
      height: 104rpx;
      background: #efefef;
      border-radius: 12rpx;
      .price-num {
        line-height: 20rpx;
        font-weight: unset;
      }
    }
    .cell-top {
      padding: 0 30rpx;
    }
    .label {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 26rpx;
      font-weight: 700;
      color: #030305;
    }
    .text {
      align-self: center;
    }
  }
  .view {
    padding: 40rpx 0 86rpx;
  }
</style>
