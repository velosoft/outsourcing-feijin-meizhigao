<template>
<view class="flex-col component">
  <view class="flex-row justify-between items-center">
    <text class="servier-order-font_9 text_2">订单号：2023060801256768</text>
    <view class="flex-col">
      <view class="flex-row items-center self-stretch" v-if="true">
        <view class="shrink-0 section_4"></view>
        <text class="font text_11 ml-8">未支付</text>
      </view>
      <view class="flex-row items-center self-start" v-if="false">
        <view class="shrink-0 section_6"></view>
        <text class="font text_61 ml-8">交易关闭</text>
      </view>
    </view>
  </view>
  <view class="flex-col servier-order-mt-16">
    <view class="flex-col section_5">
      <view class="flex-row items-center self-stretch group_14">
        <image
          class="servier-order-image"
          src="https://dev.ft.velosoft.cn/api/image?token=65806dcdd6bce000114d191b&name=mock_5590db0df4.png"
        />
        <view class="flex-col items-start flex-1 group_17">
          <text class="font order-type-font">全屋整理收纳服务（单次）</text>
          <text class="servier-order-font_7 text_5 servier-order-mt-4">按面积核算（元/m)</text>
          <view class="flex-row items-center servier-order-mt-4">
            <view class="flex-row items-baseline self-stretch group_9">
              <text class="servier-order-font_4">200</text>
              <text class="servier-order-font_6 text_8">￥</text>
            </view>
            <text class="servier-order-font_6">.00</text>
          </view>
        </view>
        <text class="servier-order-font_7 servier-order-text_4">x1</text>
      </view>
      <view class="flex-col items-start self-start group_10 servier-order-mt-8">
        <view class="group_1" v-if="true">
          <text class="servier-order-font_8">预约上门时间：</text>
          <text class="servier-order-font_9">2023-08-16 19:14:13</text>
        </view>
        <text class="servier-order-font_9" v-if="false">领队：张小鱼 1334556688</text>
      </view>
      <view class="flex-col items-start self-start text_24 servier-order-mt-8">
        <view class="group_18" v-if="true">
          <text class="servier-order-font_8">支付倒计时：</text>
          <text class="servier-order-font_10">59分钟</text>
        </view>
        <text class="servier-order-font_10" v-if="false">服务测量阶段</text>
      </view>
    </view>
    <view class="flex-col">
      <view class="flex-row justify-end group_20" v-if="true">
        <view class="flex-col justify-start items-center servier-order-button">
          <text class="servier-order-font_7">取消订单</text>
        </view>
        <view class="flex-col justify-start items-center servier-order-button_1 ml-8">
          <text class="servier-order-font_11">去付款</text>
        </view>
      </view>
      <view class="group_13 flex-row justify-end group_20" v-if="false">
        <view class="flex-col justify-start items-center button_3">
          <text class="servier-order-font_7">服务日志</text>
        </view>
      </view>
      <view class="flex-row justify-end group_19" v-if="false">
        <view class="flex-col justify-start items-center button_11">
          <text class="servier-order-font_7">服务日志</text>
        </view>
        <view class="flex-col justify-start button_1 ml-8">
          <text class="servier-order-font_7 text_62">查看测量结果</text>
        </view>
        <view class="flex-col justify-start items-center button_6 ml-8">
          <text class="servier-order-font_11">开始签约</text>
        </view>
      </view>
      <view class="flex-row justify-center group_21" v-if="false">
        <view class="flex-col justify-start button_1">
          <text class="servier-order-font_7 text_21">查看商品方案</text>
        </view>
        <view class="flex-col justify-start button_1 ml-8">
          <text class="servier-order-font_7 text_63">查看服务方案</text>
        </view>
        <view class="flex-col justify-start items-center button_6 ml-8">
          <text class="servier-order-font_11">确认方案</text>
        </view>
      </view>
      <view class="flex-row justify-end group_19" v-if="false">
        <view class="flex-col justify-start items-center button_11">
          <text class="servier-order-font_7">服务日志</text>
        </view>
        <view class="flex-col justify-start items-center button_6 ml-8">
          <text class="servier-order-font_11">查看报价</text>
        </view>
      </view>
      <view class="flex-row justify-center group_21" v-if="false">
        <view class="flex-col justify-start button_1">
          <text class="servier-order-font_7 text_21">查看商品订单</text>
        </view>
        <view class="flex-col justify-start items-center button_11 ml-8">
          <text class="servier-order-font_7">服务日志</text>
        </view>
        <view class="flex-col justify-start items-center button_7 ml-8">
          <text class="servier-order-font_11">预约服务时间</text>
        </view>
      </view>
      <view class="flex-row justify-end group_19" v-if="false">
        <view class="flex-col justify-start button_1">
          <text class="servier-order-font_7 text_64">查看商品订单</text>
        </view>
        <view class="flex-col justify-start items-center button_11 ml-8">
          <text class="servier-order-font_7">服务日志</text>
        </view>
      </view>
      <view class="flex-row justify-end group_19" v-if="false">
        <view class="flex-col justify-start button_1">
          <text class="servier-order-font_7 text_65">查看商品订单</text>
        </view>
        <view class="flex-col justify-start items-center button_11 ml-8">
          <text class="servier-order-font_7">服务日志</text>
        </view>
        <view class="flex-col justify-start items-center button_6 ml-8">
          <text class="servier-order-font_11">确认差额</text>
        </view>
      </view>
      <view class="flex-row justify-end group_19" v-if="false">
        <view class="flex-col justify-start button_1">
          <text class="servier-order-font_7 text_66">查看商品订单</text>
        </view>
        <view class="flex-col justify-start items-center button_11 ml-8">
          <text class="servier-order-font_7">服务日志</text>
        </view>
        <view class="flex-col justify-start items-center button_6 ml-8">
          <text class="servier-order-font_11">验收服务</text>
        </view>
      </view>
      <view class="flex-row justify-end group_19" v-if="false">
        <view class="flex-col justify-start button_1">
          <text class="servier-order-font_7 text_67">查看商品订单</text>
        </view>
        <view class="flex-col justify-start items-center button_11 ml-8">
          <text class="servier-order-font_7">服务日志</text>
        </view>
        <view class="flex-col justify-start items-center button_6 ml-8">
          <text class="servier-order-font_11">评价</text>
        </view>
      </view>
      <view class="flex-col justify-start items-end group_12" v-if="false">
        <view class="flex-col justify-start items-center button_8">
          <text class="servier-order-font_7">删除记录</text>
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  components: {},
  props: { order: { type: Object, default: () => ({}) } },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="css">
.component {
  padding: 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}
.servier-order-font_9 {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #000000;
}
.text_2 {
  color: #6d6d6d;
}
.section_4 {
  background-color: #b09053;
  border-radius: 50%;
  width: 12rpx;
  height: 12rpx;
}
.font {
  font-size: 30rpx;
  line-height: 42rpx;
  font-weight: 500;
}
.text_11 {
  color: #b09053;
}
.section_6 {
  background-color: #9c9c9f;
  border-radius: 50%;
  width: 12rpx;
  height: 12rpx;
}
.text_61 {
  color: #9c9c9f;
}
.servier-order-mt-16 {
  margin-top: 32rpx;
}
.section_5 {
  padding-bottom: 16rpx;
  background-color: #f1f1f1;
  border-radius: 8rpx;
}
.group_14 {
  padding: 16rpx;
  border-bottom: solid 2rpx #e4e4e4;
}
.servier-order-image {
  border-radius: 12rpx;
  width: 128rpx;
  height: 128rpx;
}
.group_17 {
  margin-left: 20rpx;
}
.order-type-font {
  color: #2d2e32;
  font-size: 28rpx;
  line-height: 40rpx;
}
.servier-order-font_7 {
  font-size: 24rpx;
  line-height: 34rpx;
  font-weight: 500;
  color: #9e9ea0;
}
.text_5 {
  font-weight: unset;
}
.servier-order-mt-4 {
  margin-top: 8rpx;
}
.group_9 {
  width: 80rpx;
}
.servier-order-font_4 {
  margin-left: 24rpx;
  color: #111111;
  font-size: 32rpx;
  line-height: 36rpx;
}
.servier-order-font_6 {
  font-size: 24rpx;
  line-height: 30rpx;
  color: #111111;
}
.text_8 {
  margin-left: -80rpx;
  font-weight: 600;
}
.servier-order-text_4 {
  margin-left: 40rpx;
  margin-right: 8rpx;
  text-transform: uppercase;
}
.group_10 {
  margin-left: 16rpx;
}
.group_1 {
  line-height: 34rpx;
}
.servier-order-font_8 {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #3c3d41;
}
.text_24 {
  margin-left: 16rpx;
}
.servier-order-mt-8 {
  margin-top: 16rpx;
}
.group_18 {
  line-height: 34rpx;
}
.servier-order-font_10 {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #b09053;
}
.servier-order-button {
  padding: 8rpx 0;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
  border-left: solid 2rpx #cecece;
  border-right: solid 2rpx #cecece;
  border-top: solid 2rpx #cecece;
  border-bottom: solid 2rpx #cecece;
}
.servier-order-button_1 {
  padding: 8rpx 0;
  background-color: #b09053;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
}
.servier-order-font_11 {
  font-size: 24rpx;
  line-height: 34rpx;
  font-weight: 500;
  color: #ffffff;
}
.group_13 {
  height: 80rpx;
}
.group_20 {
  padding-top: 24rpx;
}
.button_3 {
  padding: 8rpx 0;
  border-radius: 8rpx;
  width: 132rpx;
  border-left: solid 2rpx #cecece;
  border-right: solid 2rpx #cecece;
  border-top: solid 2rpx #cecece;
  border-bottom: solid 2rpx #cecece;
}
.group_19 {
  padding-top: 28rpx;
}
.button_11 {
  padding: 8rpx 0;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
  border-left: solid 2rpx #e8e8e8;
  border-right: solid 2rpx #e8e8e8;
  border-top: solid 2rpx #e8e8e8;
  border-bottom: solid 2rpx #e8e8e8;
}
.button_1 {
  padding: 8rpx 0;
  border-radius: 8rpx;
  height: 52rpx;
  border-left: solid 2rpx #e8e8e8;
  border-right: solid 2rpx #e8e8e8;
  border-top: solid 2rpx #e8e8e8;
  border-bottom: solid 2rpx #e8e8e8;
}
.text_62 {
  margin: 0 16rpx;
}
.button_6 {
  padding: 8rpx 0;
  background-color: #b09053;
  border-radius: 8rpx;
  width: 140rpx;
  height: 52rpx;
}
.group_21 {
  padding-left: 120rpx;
  padding-top: 24rpx;
}
.text_21 {
  margin: 0 16rpx;
}
.text_63 {
  margin: 0 16rpx;
}
.button_7 {
  padding: 8rpx 0;
  background-color: #b09053;
  border-radius: 8rpx;
  width: 188rpx;
  height: 52rpx;
}
.text_64 {
  margin: 0 16rpx;
}
.text_65 {
  margin: 0 16rpx;
}
.text_66 {
  margin: 0 16rpx;
}
.text_67 {
  margin: 0 16rpx;
}
.group_12 {
  padding-top: 28rpx;
  height: 80rpx;
}
.button_8 {
  padding: 8rpx 0;
  border-radius: 8rpx;
  width: 132rpx;
  border-left: solid 2rpx #e8e8e8;
  border-right: solid 2rpx #e8e8e8;
  border-top: solid 2rpx #e8e8e8;
  border-bottom: solid 2rpx #e8e8e8;
}
</style>
