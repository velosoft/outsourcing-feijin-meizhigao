<template>
  <view class="flex-col wrap">
    <view class="flex-col group">
      <text class="address">东宏国际广场</text>
      <text class="value mt-12 mt-4">广州市天河区天河中山大道190号</text>
      <view class="flex-row items-center mt-12 mt-4">
        <text class="value">张三</text>
        <text class="value ml-20">15812345678</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center header">
      <u-radio v-model="v_model" label="设为默认地址" name="6pFXkFF7"></u-radio>
      <view class="flex-row right">
        <image class="icon-editor" src="/static/images/personal/icon_edit.png" @click="onClick" />
        <image class="icon-delete ml-28" src="/static/images/personal/icon_delete.png" @click="onClick_1" />
      </view>
    </view>
    <u-modal
      :show="dialogVisible"
      @confirm="onClose"
      @cancel="onClose"
      width="315px"
      confirmColor="#b09053"
      confirmText="确认"
      :showCancelButton="true"
      cancelText="取消"
    >
      <ConfirmDialog></ConfirmDialog>
    </u-modal>
  </view>
</template>

<script>
  import ConfirmDialog from '../../../../../pages/components/confirmDialog/confirmDialog.vue';

  export default {
    components: { ConfirmDialog },
    props: {},
    data() {
      return {
        v_model: '',
        dialogVisible: false,
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/address/addressEditor/addressEditor' });
      },
      onClick_1() {
        this.dialogVisible = true;
      },
      onClose() {
        this.dialogVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 0 28rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    .group {
      padding: 32rpx 0;
      border-bottom: 1rpx solid #f0f0f0;
      .address {
        color: #2d2e32;
        font-size: 32rpx;
        font-family: 苹方;
        font-weight: 700;
      }
      .value {
        font-size: 24rpx;
        font-family: 苹方;
        color: #8c8f95;
      }
    }
    .header {
      padding: 32rpx 0;
      .right {
        margin-right: 8rpx;
        .icon-editor {
          width: 30rpx;
          height: 30rpx;
        }
        .icon-delete {
          width: 32rpx;
          height: 35rpx;
        }
      }
    }
  }
</style>