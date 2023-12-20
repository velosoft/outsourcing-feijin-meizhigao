<template>
  <PopupWithButton title="修改昵称" buttonText="保存">
    <view class="flex-col group view">
      <u-input v-model="v_model" placeholder="请输入昵称" border="bottom"></u-input>
      <view class="flex-col tips-wrap">
        <text class="self-start tips title">规范建议：</text>
        <view class="flex-col items-start self-stretch mt-8">
          <text class="label">·请使用最多15个字符</text>
          <text class="label mt-6">·可以由中英文、数字、表情符合以及-—，组成</text>
        </view>
      </view>
    </view>
  </PopupWithButton>
</template>

<script>
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { PopupWithButton },
    props: { value: { type: String, default: `` } },
    data() {
      return {
        v_model: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .group {
    align-self: stretch;
    .tips-wrap {
      margin-top: 56rpx;
      .tips {
        font-size: 28rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
        color: #2d2e32;
      }
      .title {
        color: #3c3d41;
        font-size: 26rpx;
        line-height: 36rpx;
      }
      .label {
        font-size: 24rpx;
        font-family: 'PingFang SC';
        line-height: 34rpx;
        color: #6d6d6d;
      }
    }
  }
  .view {
    padding: 128rpx 0 112rpx;
  }
</style>
