<template>
  <view class="flex-col wrap">
    <view class="flex-col group">
      <text class="line-clamp-one address">{{ addressItem.address }}</text>
      <text class="value mt-12 mt-4">{{ addressItem.addressDetial }}</text>
      <view class="flex-row address-center mt-12 mt-4">
        <text class="value">{{ addressItem.nickname }}</text>
        <text class="value ml-20">{{ addressItem.tel }}</text>
      </view>
    </view>
    <view class="flex-row justify-between address-center header">
      <u-checkbox-group activeColor="#b09053" @change="defaultAddrChange">
        <u-checkbox
          :checked="addressItem.isDefault"
          label="设为默认地址"
          name="设为默认地址"
          shape="circle"
          labelSize="28rpx"
          :labelColor="addressItem.isDefault ? '#b09053' : '#999AAA'"
        >
        </u-checkbox>
      </u-checkbox-group>
      <view class="flex-row right">
        <image class="icon-editor" src="/personal/static/images/icon_edit.png" @click="onClick" />
        <image class="icon-delete ml-28" src="/personal/static/images/icon_delete.png" @click="onOpenDialog" />
      </view>
    </view>
    <confirm-panel
      :isShow="showDialog"
      :isnormal="false"
      title="删除收货地址"
      content="您确定删除该收货地址吗？"
      @cancel="onCancel"
      @confirm="onConfirm"
    ></confirm-panel>
  </view>
</template>

<script>
  import ConfirmPanel from '@/components/ConfirmPanel.vue';
  export default {
    components: { ConfirmPanel },
    props: {
      addressItem: {
        type: Object,
        default: () => ({
          address: '东宏国际广场',
          addressDetial: '广州市天河区天河中山大道190号',
          nickname: '张三',
          tel: '15812345678',
          isDefault: false,
        }),
      },
    },
    data() {
      return {
        showDialog: false,
      };
    },

    methods: {
      defaultAddrChange(val) {
        this.$emit('setDefault', val.length ? true : false);
      },
      onClick() {
        uni.navigateTo({ url: '/personal/pages/personal/address/addressEditor/addressEditor' });
      },
      onOpenDialog() {
        // 事件处理方法
        this.showDialog = true;
      },
      onCancel() {
        // 事件处理方法
        this.showDialog = false;
      },
      onConfirm() {
        // 事件处理方法
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
        color: #111111;
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 700;
      }
      .value {
        font-size: 24rpx;
        font-family: PingFang SC;
        color: #6d6d6d;
      }
    }
    .header {
      padding: 32rpx 0;
      .right {
        margin-right: 8rpx;
        .icon-editor {
          width: 32rpx;
          height: 32rpx;
        }
        .icon-delete {
          width: 32rpx;
          height: 32rpx;
        }
      }
    }
  }
</style>
