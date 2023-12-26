<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 body">
      <view class="flex-col service">
        <text class="font title">服务信息</text>
        <OrderProductItem class="mt-11"></OrderProductItem>
      </view>
      <view class="flex-col flex-1 agreement-section">
        <view class="flex-col flex-1 agreement-wrapper">
          <text class="font title">验收服务</text>
          <text class="sign-text subtitle mt-10">服务验收协议</text>
          <view class="flex-col mt-10 agreement-content">
            <text class="bold">工程质量保修范围和内容：</text>
            <text>承包人在质量保修期内，按照有关法律、法规、规章的管理规定和双方约定，承担本工程质量保修责任.</text>
            <text
              >质量保修范围包括地基基础工程、主体结构工程，屋面防水工程、有防水要求的一P生间、房间和外墙面的防渗漏，供热与供冷系统，电气管线、给排水管道设备安装和装修工程，以及双方约定的其他项目。具体保修的内容，</text
            >
            <text class="bold mt-20">双方约定如下:</text>
            <text>质量保修期</text>
            <text>双方根据《建设工程质量管理条例》及有关规定，约定本工程的质量保修期如下</text>
            <text>1.地基基础工程和主体结构工程为设计文件规定的该工程合理使用年限:</text>
            <text>2.屋面防水工程、有防水要求的卫生间、房间和外墙面的防渗漏为 5年</text>
            <text>3.装修工程为 2 年</text>
            <text>4.电气管线、给排水管道、设备安装工程为2 年:</text>
            <text>5.供热与供冷系统为 2 个采暖期、供冷期:</text>
            <text>6.住宅小区内的给排水设施、道路等配套工程为XX年</text>
            <text>7.其他项目保修期限约定如下. </text>
            <text>质量保修期自工程竣工验收合格之日起计算</text>
          </view>
        </view>
        <u-checkbox-group class="mt-16" v-model="v_model" activeColor="#B09053" iconSize="28rpx" shape="circle">
          <u-checkbox
            v-model="v_model_1"
            label="我已阅读并同意验收服务协议"
            name="2DIhLut7"
            labelSize="28rpx"
            labelColor="#6D6D6D"
          ></u-checkbox>
        </u-checkbox-group>
      </view>
      <view class="flex-row justify-center sign-wrapper" @click="onShowSign">
        <text class="sign-text">+</text>
        <text class="sign-text">点击添加签名</text>
      </view>
      <view class="flex-col justify-start items-center button btn-wrapper">
        <text class="font btn-text">确认验收通过</text>
      </view>
    </view>
    <u-popup :show="showSign" @close="onCloseSign" mode="bottom" :round="12" :closeable="true">
      <PopSignature @confirm="onCloseSign"></PopSignature>
    </u-popup>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import PopSignature from '@/myOrder/pages/myOrder/components/PopSignature/PopSignature.vue';

  export default {
    components: { NavBar, OrderProductItem, PopSignature },
    props: {},
    data() {
      return {
        title: '验收服务',
        v_model: '',
        v_model_1: '',
        showSign: false,
      };
    },

    methods: {
      onShowSign() {
        this.showSign = true;
      },
      onCloseSign() {
        this.showSign = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .mt-11 {
    margin-top: 22rpx;
  }
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 24rpx 22rpx 56rpx;
    overflow-y: auto;
  }
  .service {
    padding: 26rpx 18rpx 28rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #111111;
  }
  .title {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .agreement-section {
    margin-top: 20rpx;
  }
  .agreement-wrapper {
    padding: 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .agreement-content {
    padding: 20rpx;
    background-color: #f7f7f7;
    border-radius: 12rpx;
    font-size: 24rpx;
    line-height: 40rpx;
    color: #3c3d41;

    .bold {
      font-weight: 500;
    }
  }
  .sign-text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9c9c9f;
  }
  .subtitle {
    color: #3c3d41;
  }
  .sign-wrapper {
    margin-top: 40rpx;
    padding: 58rpx 0;
    border-radius: 8rpx;
    background-color: #f5f5f5;
    border: 1px dashed #e9e9e9;
  }
  .button {
    margin: 46rpx 18rpx 0;
  }
  .btn-wrapper {
    padding: 28rpx 0;
    background-color: #000000;
    border-radius: 48rpx;
  }
  .btn-text {
    color: #ffffff;
  }
</style>
