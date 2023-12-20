<template>
  <view class="flex-col wrap">
    <view class="flex-col group">
      <text class="line-clamp-one address">东宏国际广场</text>
      <text class="value mt-12 mt-4">广州市天河区天河中山大道190号</text>
      <view class="flex-row items-center mt-12 mt-4">
        <text class="value">张三</text>
        <text class="value ml-20">15812345678</text>
      </view>
    </view>
    <view class="flex-row justify-between items-center header">
      <u-radio v-model="v_model" label="设为默认地址" activeColor="#b09053"></u-radio>
      <view class="flex-row right">
        <image class="icon-editor" src="/static/images/icon_edit.png" @click="onClick" />
        <image class="icon-delete ml-28" src="/static/images/icon_delete.png" @click="onOpenDialog" />
      </view>
    </view>
    <confirm-panel :isShow="showDialog" :isnormal="false" title="删除收获地址" content="您确定删除该收货地址吗？" @cancel="onCancel" @confirm="onConfirm"></confirm-panel>
  </view>
</template>

<script>
  import ConfirmPanel from '@/components/ConfirmPanel.vue';
  export default {
    components: { ConfirmPanel },
    props: {},
    data() {
      return {
        v_model: '',
        showDialog: false,
      };
    },

    methods: {
      onClick() {
        uni.navigateTo({ url: '/pages/personal/address/addressEditor/addressEditor' });
      },
      onOpenDialog(){
        this.showDialog = true;
      },
      onCancel() {
        this.showDialog = false;
      },
      onConfirm() {
        this.showDialog = false;
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
        font-family: PingFang SC;
        font-weight: 700;
      }
      .value {
        font-size: 24rpx;
        font-family: PingFang SC;
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
