<template>
  <CFCard>
    <view class="flex-col">
      <view class="flex-col">
        <u-cell
          class="cell-in-white-card-weight"
          title="课程金额"
          value="￥400.00"
          :border="false"
          :center="true"
        ></u-cell>
        <u-cell
          class="cell-in-white-card-weight mt-18"
          title="活动优惠"
          value="暂无活动"
          :border="false"
          :center="true"
        ></u-cell>
        <u-cell
          class="cell-in-white-card-weight mt-18"
          title="优惠券"
          value="-￥10.00"
          :border="false"
          :center="true"
          :isLink="true"
        ></u-cell>
        <u-cell
          class="cell-in-white-card-weight mt-18"
          title="积分抵扣"
          value="￥35.00"
          :border="false"
          :center="true"
          :isLink="true"
        ></u-cell>
      </view>
      <view class="flex-col mt-24">
        <view class="flex-row items-center">
          <text class="title">订单留言</text>
          <text class="title texare-tips ml-8">50字以内（选填）</text>
        </view>
        <textarea class="text-area mt-16" placeholder="请输入…"></textarea>
      </view>
    </view>
  </CFCard>
  </template>
  
  <script>
  import CFCard from '@/components/Card/Card';
  
  export default {
    components: { CFCard },
    props: {},
    data() {
      return {
        eventDiscountsNum: '',
        couponNum: '',
        coinsNum: '',
      };
    },
  
    methods: {},
  };
  </script>
  
  <style scoped lang="less">
  .title {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #6c6c6c;
  }
  .texare-tips {
    color: #a7a7a7;
    font-size: 26rpx;
    line-height: 26rpx;
  }
  .text-area {
    margin: 0 8rpx;
  }
  </style>