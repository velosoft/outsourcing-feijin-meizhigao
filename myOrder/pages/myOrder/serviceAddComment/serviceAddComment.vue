<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
    <view class="flex-col body">
      <OrderProductItem class="product-wrapper"></OrderProductItem>
      <view class="flex-col mt-12 section">
        <ServiceCommentRate></ServiceCommentRate>
        <view class="flex-col self-stretch rate-input">
          <text class="self-start rate-type">服务最满意的地方</text>
          <u-textarea
            class="cf-textarea mt-11"
            v-model="v_model_3"
            placeholder="请输入您的评价…"
            height="340rpx"
            placeholderStyle="fontSize:24rpx;color:#9E9EA0:font-family:苹方;font-weight:400;"
          ></u-textarea>
        </view>
      </view>
      <view class="flex-col mt-12 section">
        <text class="self-start title-font visit-text">如若接受回访，请选择回访时间</text>
        <view class="flex-row justify-between mt-18">
          <text class="refund-time">退款时间</text>
          <view class="flex-row items-center" @click="onShowDate">
            <text class="placeholder-text">请选择</text>
            <image class="shrink-0 icon-arrow ml-8" src="/myOrder/static/images/icon_arrow_right.png" />
          </view>
        </view>
        <view class="flex-row justify-between self-stretch mt-18">
          <text class="refund-time">回访</text>
          <view class="flex-row items-center">
            <text class="placeholder-text">请选择</text>
            <image class="shrink-0 icon-arrow ml-8" src="/myOrder/static/images/icon_arrow_right.png" />
          </view>
        </view>
      </view>
      <view class="flex-col mt-12 section">
        <text class="self-start title-font title-text">改善建议</text>
        <u-textarea
          class="cf-textarea mt-15"
          v-model="v_model_4"
          placeholder="请输入您的评价…"
          height="230rpx"
          placeholderStyle="fontSize:24rpx;color:#9E9EA0:font-family:苹方;font-weight:400;"
        ></u-textarea>
      </view>
      <view class="flex-col mt-12 section">
        <view class="flex-row items-center title-wrapper">
          <text class="title-font title-text">上传图片</text>
          <text class="placeholder-text ml-2">（最多上传6张图片）</text>
        </view>
        <Uploader></Uploader>
      </view>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start footer-wrapper">
      <view class="flex-col justify-start items-center button btn-wrapper">
        <text class="title-font btn-text">确认提交</text>
      </view>
    </view>
    <u-popup :show="showDate" @close="onCloseDate" mode="bottom" :round="14" :closeable="true">
      <DateTimePickerYYD @click="onCloseDate"></DateTimePickerYYD>
    </u-popup>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import Uploader from '@/components/Uploader/Uploader.vue';
  import DateTimePickerYYD from '@/components/DateTimePickerYYD/DateTimePickerYYD.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import ServiceCommentRate from '@/myOrder/pages/myOrder/components/ServiceCommentRate/ServiceCommentRate.vue';

  export default {
    components: { NavBar, OrderProductItem, Uploader, DateTimePickerYYD, ServiceCommentRate },
    props: {},
    data() {
      return {
        title: '我要评价',
        items: [null, null, null, null],
        v_model_3: '',
        v_model_4: '',
        showDate: false,
      };
    },
    methods: {
      onShowDate() {
        this.showDate = true;
      },
      onCloseDate() {
        this.showDate = false;
      },
    },
  };
</script>

<style scoped lang="css">
  .mt-15 {
    margin-top: 30rpx;
  }
  .mt-11 {
    margin-top: 22rpx;
  }
  .page {
    padding-bottom: 180rpx;
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .body {
    padding: 0 24rpx 32rpx;
  }
  .section {
    padding: 26rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .title-font {
    font-size: 28rpx;
    line-height: 40rpx;
    font-weight: 500;
    color: #2d2e32;
  }
  .title-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .rate-type {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #2d2e32;
  }
  .rate-input {
    margin-top: 48rpx;
    width: 656rpx;
  }
  .visit-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .refund-time {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #3c3d41;
  }
  .placeholder-text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9c9c9f;
  }
  .icon-arrow {
    width: 12rpx;
    height: 22rpx;
  }
  .title-wrapper {
    padding: 26rpx 0 32rpx;
  }
  .footer-wrapper {
    padding: 32rpx 0 52rpx;
    background-color: #ffffff;
    width: 750rpx;
  }
  .button {
    margin: 0 40rpx;
  }
  .btn-wrapper {
    padding: 26rpx 0 28rpx;
    background-color: #000000;
    border-radius: 48rpx;
    width: 670rpx;
  }
  .btn-text {
    color: #ffffff;
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .product-wrapper {
    padding: 26rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
</style>
