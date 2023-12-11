<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 group">
      <view class="flex-col items-center">
        <text class="font text_2">需支付金额</text>
        <text class="text_3 mt-16">￥200.00</text>
      </view>
      <view class="flex-col group_2">
        <text class="self-start font">请选择支付方式</text>
        <view class="flex-col self-stretch section_3 mt-20">
          <view class="flex-col justify-start group_8">
            <u-radio-group v-model="v_model">
              <u-radio
                v-model="v_model_1"
                :name="fMycIRF3"
                :lable="test1"
                style="width: 24px; height: 24px"
              ></u-radio>

              <u-radio
                v-model="v_model_2"
                name="PqQBXKMO"
                style="width: 24px; height: 24px"
              ></u-radio>
            </u-radio-group>
          </view>
          <view class="flex-col group_7">
            <view class="flex-row justify-end items-baseline">
              <text class="font_3 text_8">收纳币抵扣</text>
              <text class="font_4 ml-8">-￥50.00</text>
            </view>
            <view class="flex-row justify-end items-center mt-18">
              <text class="font_3 text_9">合计</text>
              <text class="font_4 ml-4">￥150.00</text>
            </view>
          </view>
        </view>
      </view>
      <view class="flex-col justify-start items-center button text-wrapper">
        <text class="font_2 text_10">确认付款</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      v_model: "",
      v_model_1: "",
      v_model_2: "",
    };
  },

  methods: {},
};
</script>

<style scoped lang="css">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group {
  padding: 88rpx 24rpx 96rpx;
  overflow-y: auto;
}
.font {
  font-size: 26rpx;
  font-family: 苹方;
  line-height: 26rpx;
  color: #a7a7a7;
}
.text_2 {
  color: #6c6c6c;
  font-size: 28rpx;
  line-height: 28rpx;
}
.text_3 {
  color: #030305;
  font-size: 52rpx;
  font-family: HarmonyOSSansSC;
  font-weight: 700;
  line-height: 52rpx;
}
.group_2 {
  margin-top: 104rpx;
}
.section_3 {
  padding-bottom: 56rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
}
.group_8 {
  padding-bottom: 88rpx;
}
.group_1 {
  padding: 0 32rpx;
}
.image_5 {
  border-radius: 12rpx;
  width: 72rpx;
  height: 72rpx;
}
.group_5 {
  padding: 40rpx 0;
}
.font_2 {
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  line-height: 30rpx;
}
.text_5 {
  margin-left: 8rpx;
  color: #030305;
}
/* .section_4 {
  align-self: flex-start;
  margin-top: 24rpx;
} */
.group_6 {
  padding: 0 28rpx;
}
.image_6 {
  width: 64rpx;
  height: 64rpx;
}
.group_9 {
  padding: 56rpx 0 48rpx;
}
.text_7 {
  color: #2d2e32;
}
.group_7 {
  margin-left: 32rpx;
  margin-right: 16rpx;
}
.font_3 {
  font-size: 26rpx;
  font-family: PingFangSC-Medium;
  line-height: 26rpx;
  color: #6c6c6c;
}
.text_8 {
  font-size: 28rpx;
  line-height: 28rpx;
}
.font_4 {
  font-size: 26rpx;
  font-family: HarmonyOSSansSC;
  line-height: 26rpx;
  font-weight: 700;
  color: #030305;
}
.text_9 {
  font-size: 28rpx;
  line-height: 28rpx;
}
.button {
  margin: 136rpx 24rpx 0;
}
.text-wrapper {
  padding: 32rpx 0;
  background-color: #b09053;
  border-radius: 60rpx;
}
.text_10 {
  color: #ffffff;
}

.page {
  padding: 32rpx;
}
</style>
