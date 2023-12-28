<template>
  <view class="height-full flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col group flex-1">
      <view class="flex-col items-center">
        <view class="flex-col items-center">
          <image class="icon" src="/cart/static/images/icon_result_success.png" v-if="status" />
          <image class="icon" src="/cart/static/images/icon_result_fail.png" v-else />
        </view>
        <text class="font result-text mt-8">{{ status ? '支付成功' : '付款失败' }}</text>
      </view>
      <view class="flex-col mt-86">
        <u-button
          :text="status ? '立即查看' : '重新支付'"
          type="primary"
          size="large"
          shape="circle"
          @click="onGoOn"
        ></u-button>
        <u-button
          class="mt-32"
          text="返回上一级"
          type="primary"
          size="large"
          shape="circle"
          :plain="true"
          @click="onGoBack"
        ></u-button>
      </view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { NavBar },
    props: {
      status: { type: Number, default: 1 },
    },
    data() {
      return {
        title: '收银台',
      };
    },

    methods: {
      onGoOn(args) {
        // 事件处理方法
        this.$emit('onGoOn');
      },
      onGoBack() {
        // 事件处理方法
        this.$emit('onGoBack');
        uni.navigateBack();
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    .group {
      padding: 136rpx 48rpx;
      .icon {
        width: 120rpx;
        height: 120rpx;
      }
      .font {
        font-size: 30rpx;
        font-family: PingFangSC;
        line-height: 30rpx;
      }
      .result-text {
        color: #111111;
      }
    }
  }
</style>
