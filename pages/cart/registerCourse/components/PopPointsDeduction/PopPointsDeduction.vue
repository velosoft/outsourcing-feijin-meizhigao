<template>
    <PopupWithButton title="积分抵扣详情" buttonText="确定">
      <view class="flex-col justify-start button view">
        <u-radio-group v-model="v_model">
          <view class="flex-row justify-between cell-wrap items-center">
            <view class="flex-row items-center self-start">
              <text class="label">使用350积分抵扣</text>
              <text class="label price-num">￥35.00</text>
            </view>
            <u-radio
              class="text"
              v-model="v_model_1"
              name="zljGbcWh"
              activeColor="#030305"
              inactiveColor="#f8f8f8"
              iconSize="40rpx"
              iconColor="#030305"
            ></u-radio>
          </view>
          <view class="flex-row justify-between mt-10 cell-wrap">
            <text class="self-start label">不使用积分</text>
            <u-radio
              class="text"
              v-model="v_model_2"
              name="YLGLSL1T"
              activeColor="#030305"
              inactiveColor="#f8f8f8"
              iconSize="40rpx"
              iconColor="#030305"
            ></u-radio>
          </view>
        </u-radio-group>
      </view>
    </PopupWithButton>
    </template>
    
    <script>
    import PopupWithButton from '@/components/Popup/PopupWithButton';
    
    export default {
      components: { PopupWithButton },
      props: {},
      data() {
        return {
          v_model: '',
          v_model_1: '',
          v_model_2: '',
        };
      },
    
      methods: {},
    };
    </script>
    
    <style scoped lang="less">
    .button {
      align-self: stretch;
      .cell-wrap {
        padding: 30rpx;
        height: 104rpx;
        background: #efefef;
        border-radius: 12rpx;
        .label {
          font-size: 28rpx;
          font-family: 苹方;
          line-height: 26.2rpx;
          font-weight: 700;
          color: #030305;
        }
        .price-num {
          line-height: 20.78rpx;
          font-weight: unset;
        }
        .text {
          align-self: center;
        }
      }
    }
    .view {
      padding: 60.24rpx 0 86rpx;
    }
    </style>