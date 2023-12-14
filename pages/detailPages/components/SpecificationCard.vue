<template>
  <view class="flex-col container">
    <view v-if="enables.includes('deliverPayment')" class="flex-row group">
      <text class="label">运费</text>
      <text class="value ml-16">{{ deliverPayment }}</text>
    </view>
    <view
      v-if="enables.includes('activity')"
      class="flex-row justify-between group"
      @click="onSpecificationClick"
    >
      <view class="flex-row self-center cell-row">
        <text class="label activity-label">活动</text>
        <view class="flex-row ml-16 tag-gap tag-wrap">
          <u-tag
            class="discount-tag"
            :text="item"
            v-for="(item, index) in discountTags"
            :key="index"
          ></u-tag>
        </view>
      </view>
    </view>
    <view
      v-if="enables.includes('specification')"
      class="flex-row justify-between group"
      @click="onSpecificationClick"
    >
      <view class="flex-row self-center">
        <text class="label">选择</text>
        <text class="value ml-16">{{ specification }}</text>
      </view>
      <image class="icon-arrow" src="/static/images/icon_arrow_05.png" />
    </view>
    <view
      v-if="enables.includes('service')"
      class="flex-row items-center group-last"
    >
      <text class="label">服务</text>
      <view class="flex-row ml-4">
        <view
          class="flex-row tag-item"
          v-for="(item, index) in tags"
          :key="index"
        >
          <image
            class="shrink-0 self-center icon-radio"
            src="/static/images/icon_radio_03.png"
          />
          <text class="self-start tag-text ml-8">{{ item }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    enables: { type: String, default: () => [] },
    deliverPayment: { type: String, default: "" },
    specification: { type: String, default: "请选择服务规格" },
    tags: { type: Array, default: () => [] },
    discountTags: { type: Array, default: () => [] },
  },
  data() {
    return {
      items: [null, null],
    };
  },

  methods: {
    onSpecificationClick(args) {
      // 事件处理方法
      this.$emit("onSpecificationClick");
    },
  },
};
</script>

<style scoped lang="less">
.container {
  padding: 0 28rpx;
  background-color: #ffffff;
  border-radius: 12rpx;
  .group {
    padding: 40rpx 0;
    border-bottom: 1rpx solid #efefef;
    .value {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #030305;
    }
    .icon-arrow {
      width: 24rpx;
      height: 24rpx;
    }
  }

  .group-last {
    padding: 40rpx 0;
    .tag-item {
      padding: 8rpx 20rpx;
      .icon-radio {
        width: 30rpx;
        height: 30rpx;
      }
      .tag-text {
        font-size: 28rpx;
        font-family: 苹方;
        line-height: 28rpx;
        color: #b09053;
      }
    }
  }
  .label {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #a7a7a7;
  }
  .cell-row {
    align-items: start;
    width: 100%;
  }
  .tag-wrap {
    flex-wrap: wrap;
    display: flex;
    gap: 16rpx;
    display: flex;
    flex: 1;
  }
  .activity-label {
    line-height: 48rpx;
  }
}
</style>
