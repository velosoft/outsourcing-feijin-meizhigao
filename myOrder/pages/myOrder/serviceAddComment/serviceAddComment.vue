<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col body">
      <order-product-item class="product-wrapper"></order-product-item>
      <view class="flex-col mt-12 section">
        <service-comment-rate></service-comment-rate>
        <view class="flex-col self-stretch mt-28 rate-input">
          <text class="rate-type">服务最满意的地方</text>
          <u-textarea
            class="cf-textarea mt-12"
            v-model="v_model_3"
            placeholder="请输入您的评价…"
            height="340rpx"
            :placeholderStyle="placeholderStyle"
          ></u-textarea>
        </view>
      </view>
      <view class="flex-col mt-12 section">
        <text class="title-font visit-text">如若接受回访，请选择回访时间</text>
        <view class="flex-row justify-between mt-18">
          <text class="visit-time">回访时间</text>
          <view class="flex-row items-center" @click="onShowDate">
            <text class="placeholder-text">请选择</text>
            <image class="shrink-0 icon-arrow ml-8" src="/myOrder/static/images/icon_arrow_right.png" />
          </view>
        </view>
        <view class="flex-row justify-between mt-18">
          <text class="visit-time">回访</text>
          <view class="flex-row items-center">
            <text class="placeholder-text">请选择</text>
            <image class="shrink-0 icon-arrow ml-8" src="/myOrder/static/images/icon_arrow_right.png" />
          </view>
        </view>
      </view>
      <view class="flex-col mt-12 section">
        <text class="title-font title-text">改善建议</text>
        <u-textarea
          class="cf-textarea mt-16"
          v-model="v_model_4"
          placeholder="请输入您的评价…"
          height="230rpx"
          :placeholderStyle="placeholderStyle"
        ></u-textarea>
      </view>
      <view class="flex-col mt-12 section">
        <view class="flex-row items-center">
          <text class="title-font title-text">上传图片</text>
          <text class="placeholder-text ml-2">（最多上传6张图片）</text>
        </view>
        <uploader class="mt-16"></uploader>
      </view>
    </view>
    <view class="fixed-bottom-safe flex-col justify-start footer-wrapper">
      <view class="flex-col justify-start items-center button btn-wrapper">
        <text class="title-font btn-text">确认提交</text>
      </view>
    </view>
    <u-popup :show="showDate" @close="onCloseDate" mode="bottom" :round="14" :closeable="true">
      <date-time-picker-yyd @click="onCloseDate"></date-time-picker-yyd>
    </u-popup>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';
  import Uploader from '@/components/Uploader/Uploader.vue';
  import DateTimePickerYyd from '@/components/DateTimePickerYYD/DateTimePickerYYD.vue';
  import OrderProductItem from '@/myOrder/pages/myOrder/components/OrderProductItem/OrderProductItem.vue';
  import ServiceCommentRate from '@/myOrder/pages/myOrder/components/ServiceCommentRate/ServiceCommentRate.vue';

  export default {
    components: { NavBar, OrderProductItem, Uploader, DateTimePickerYyd, ServiceCommentRate },
    props: {},
    data() {
      return {
        title: '我要评价',
        items: [null, null, null, null],
        v_model_3: '',
        v_model_4: '',
        showDate: false,
        placeholderStyle: 'font-size:24rpx;color:#9E9EA0;font-family:苹方;font-weight:400;',
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

<style scoped lang="less">
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
    padding: 28rpx 24rpx 24rpx;
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
    width: 656rpx;
  }
  .visit-text {
    font-size: 30rpx;
    line-height: 42rpx;
  }
  .visit-time {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #111111;
  }
  .placeholder-text {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #9e9ea0;
  }
  .icon-arrow {
    width: 12rpx;
    height: 22rpx;
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
