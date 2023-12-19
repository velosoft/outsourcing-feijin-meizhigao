<template>
<view class="flex-col component">
  <view class="flex-row justify-between items-center group_1">
    <text class="font_13 text_2">意向单号：2023060801256768</text>
    <view class="flex-col">
      <view class="flex-row items-center self-stretch" v-if="true">
        <view class="shrink-0 section_5"></view>
        <text class="font text_1 ml-4">定金未支付</text>
      </view>
      <view class="flex-row items-center self-start" v-if="false">
        <view class="shrink-0 section_7"></view>
        <text class="font text_41 ml-6">交易完成</text>
      </view>
      <view class="flex-row items-center self-start" v-if="false">
        <view class="shrink-0 section_8"></view>
        <text class="font text_42 ml-6">交易关闭</text>
      </view>
    </view>
  </view>
  <view class="flex-col mt-16">
    <view class="flex-col section_6">
      <view class="flex-row items-center self-stretch group_34">
        <image
          class="shrink-0 image_10"
          src="https://dev.ft.velosoft.cn/api/image?token=65806dcdd6bce000114d191b&name=17025193843551590233.png"
        />
        <view class="flex-col flex-1 group_6 ml-8">
          <text class="font font_4">定制卧室收纳柜新疆包邮卧室床头…</text>
          <view class="flex-row justify-between group_7">
            <text class="font_8 text_7 text_13">中号；白色</text>
            <text class="font_8 text_7">x1</text>
          </view>
          <view class="flex-row items-center">
            <view class="flex-row items-baseline self-stretch group_8">
              <text class="font_9">200</text>
              <text class="font_11 text_9">￥</text>
            </view>
            <text class="font_11">.00</text>
          </view>
        </view>
      </view>
      <view class="flex-col items-start self-start group_32 mt-9">
        <view class="group_28" v-if="true">
          <text class="font_12">预约上门时间：</text>
          <text class="font_13">2023-08-16 19:14:13</text>
        </view>
        <text class="font_13" v-if="false">领队：张小鱼 1334556688</text>
      </view>
      <view class="flex-col items-start self-start group_12 mt-9">
        <view class="group_35" v-if="true">
          <text class="font_12">支付倒计时：</text>
          <text class="font_14">59分钟</text>
        </view>
        <text class="font_14" v-if="false">定制测量阶段</text>
      </view>
    </view>
    <view class="flex-col">
      <view class="flex-row justify-end group_36" v-if="true">
        <view class="flex-col justify-start items-center button"><text class="font_8">取消订单</text></view>
        <view class="flex-col justify-start items-center button_2 ml-10"><text class="font_15">去付款</text></view>
      </view>
      <view class="flex-col justify-start items-end group_11" v-if="false">
        <view class="flex-col justify-start items-center text-wrapper"><text class="font_15">查看方案</text></view>
      </view>
      <view class="flex-row justify-end group_23" v-if="false">
        <view class="flex-col justify-start button_5"><text class="font_8 text_10">查看商品清单</text></view>
        <view class="flex-col justify-start items-center button_6 ml-12"><text class="font_15">确认报价</text></view>
      </view>
      <view class="flex-row justify-end group_23" v-if="false">
        <view class="flex-col justify-start button_5"><text class="font_8 text_10">查看商品清单</text></view>
        <view class="flex-col justify-start button_7 ml-10"><text class="font_15 text_11">预约上门服务</text></view>
      </view>
      <view class="flex-col justify-start items-end group_11" v-if="false">
        <view class="flex-col justify-start text-wrapper_2"><text class="font_8 text_12">查看商品清单</text></view>
      </view>
      <view class="flex-row justify-end group_23" v-if="false">
        <view class="flex-col justify-start button_5"><text class="font_8 text_10">查看商品清单</text></view>
        <view class="flex-col justify-start items-center button_2 ml-10"><text class="font_15">验收服务</text></view>
      </view>
      <view class="flex-row justify-end group_23" v-if="false">
        <view class="flex-col justify-start button_5"><text class="font_8 text_10">查看商品清单</text></view>
        <view class="flex-col justify-start items-center button_2 ml-10"><text class="font_15">评价</text></view>
      </view>
      <view class="flex-col justify-start items-end group_11" v-if="false">
        <view class="flex-col justify-start items-center text-wrapper_3"><text class="font_8">删除记录</text></view>
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
.mt-9 {
  margin-top: 18rpx;
}
.component {
  padding: 26rpx 24rpx 20rpx 24rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}
.group_1 {
  padding-left: 2rpx;
}
.font_13 {
  font-size: 24rpx;
  font-family: 'PingFang SC';
  line-height: 34rpx;
  color: #000000;
}
.text_2 {
  color: #6d6d6d;
}
.section_5 {
  background-color: #b09053;
  border-radius: 50%;
  width: 12rpx;
  height: 12rpx;
}
.font {
  font-size: 30rpx;
  font-family: 'PingFang SC';
  line-height: 42rpx;
  font-weight: 500;
}
.text_1 {
  color: #b09053;
}
.section_7 {
  background-color: #111111;
  border-radius: 50%;
  width: 12rpx;
  height: 12rpx;
}
.text_41 {
  color: #111111;
}
.section_8 {
  background-color: #9c9c9f;
  border-radius: 50%;
  width: 12rpx;
  height: 12rpx;
}
.text_42 {
  color: #9c9c9f;
}
.section_6 {
  padding-bottom: 16rpx;
  background-color: #f1f1f1;
  border-radius: 8rpx;
}
.group_34 {
  padding: 16rpx 16rpx 19.5rpx;
  border-bottom: solid 2rpx #e4e4e4;
}
.image_10 {
  border-radius: 12rpx;
  width: 128rpx;
  height: 128rpx;
}
.group_6 {
  margin-right: 6rpx;
}
.font_4 {
  color: #2d2e32;
  font-size: 28rpx;
  line-height: 40rpx;
}
.group_7 {
  margin-top: 14rpx;
}
.font_8 {
  font-size: 24rpx;
  font-family: 'PingFang SC';
  line-height: 34rpx;
  font-weight: 500;
  color: #9e9ea0;
}
.text_7 {
  text-transform: uppercase;
}
.text_13 {
  font-weight: unset;
}
.group_8 {
  width: 80rpx;
}
.font_9 {
  margin-left: 22rpx;
  color: #111111;
  font-size: 32rpx;
  font-family: '.AppleSystemUIFont';
  line-height: 36rpx;
}
.font_11 {
  font-size: 24rpx;
  font-family: '.AppleSystemUIFont';
  line-height: 30rpx;
  color: #111111;
}
.text_9 {
  margin-left: -80rpx;
  font-weight: 600;
}
.group_32 {
  margin-left: 18rpx;
}
.group_28 {
  line-height: 34rpx;
}
.font_12 {
  font-size: 24rpx;
  font-family: 'PingFang SC';
  line-height: 34rpx;
  color: #3c3d41;
}
.group_12 {
  margin-left: 18rpx;
}
.group_35 {
  line-height: 34rpx;
}
.font_14 {
  font-size: 24rpx;
  font-family: 'PingFang SC';
  line-height: 34rpx;
  color: #b09053;
}
.group_36 {
  padding-top: 28rpx;
}
.button {
  padding: 6rpx 0 8rpx;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
  border-left: solid 2rpx #cecece;
  border-right: solid 2rpx #cecece;
  border-top: solid 2rpx #cecece;
  border-bottom: solid 2rpx #cecece;
}
.button_2 {
  padding: 8rpx 0 10rpx;
  background-color: #000000;
  border-radius: 8rpx;
  width: 132rpx;
  height: 52rpx;
}
.font_15 {
  font-size: 24rpx;
  font-family: 'PingFang SC';
  line-height: 34rpx;
  font-weight: 500;
  color: #ffffff;
}
.group_11 {
  padding-top: 30rpx;
  height: 82rpx;
}
.text-wrapper {
  padding: 8rpx 0 10rpx;
  background-color: #000000;
  border-radius: 8rpx;
  width: 140rpx;
}
.group_23 {
  padding-top: 30rpx;
}
.button_5 {
  padding: 8rpx 0 6rpx;
  border-radius: 8rpx;
  height: 52rpx;
  border-left: solid 2rpx #cecece;
  border-right: solid 2rpx #cecece;
  border-top: solid 2rpx #cecece;
  border-bottom: solid 2rpx #cecece;
}
.text_10 {
  margin-left: 16rpx;
  margin-right: 16rpx;
}
.button_6 {
  padding: 8rpx 0 10rpx;
  background-color: #000000;
  border-radius: 8rpx;
  width: 140rpx;
  height: 52rpx;
}
.button_7 {
  padding: 8rpx 0 10rpx;
  background-color: #000000;
  border-radius: 8rpx;
  height: 52rpx;
}
.text_11 {
  margin-left: 18rpx;
  margin-right: 18rpx;
}
.text-wrapper_2 {
  padding: 8rpx 0 6rpx;
  border-radius: 8rpx;
  border-left: solid 2rpx #cecece;
  border-right: solid 2rpx #cecece;
  border-top: solid 2rpx #cecece;
  border-bottom: solid 2rpx #cecece;
}
.text_12 {
  margin-left: 16rpx;
  margin-right: 16rpx;
}
.text-wrapper_3 {
  padding: 8rpx 0 6rpx;
  border-radius: 8rpx;
  width: 140rpx;
  border-left: solid 2rpx #cecece;
  border-right: solid 2rpx #cecece;
  border-top: solid 2rpx #cecece;
  border-bottom: solid 2rpx #cecece;
}
</style>
