<template>
  <view class="flex-col container">
    <view class="flex-col">
      <view
        class="flex-col list-item itme-top mt-34"
        v-for="(item, index) in items"
        :key="index"
      >
        <view class="flex-row items-start self-stretch">
          <image
            class="icon"
            src="https://dev.ft.velosoft.cn/api/image?token=6577372b740f740012ac401b&name=icon_ensure_01.png"
          />
          <text class="label ml-8">{{ item.title }}</text>
        </view>
        <text class="self-start describe describe-text mt-8">{{
          item.content
        }}</text>
      </view>
    </view>
    <u-button
      class="mt-68"
      text="我知道了"
      type="primary"
      @click="onClose"
    ></u-button>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      items: [
        {
          title: "支持退换",
          content: "支持买家申请退换。",
        },
        {
          title: "7天无理由退货",
          content:
            "请确保商品完好，包邮商品买家承担退货运费，非包邮商品买家承担来回运费。",
        },
        {
          title: "快递发货",
          content: "可选择快递发货配送上门，本商品免运费",
        },
      ],
    };
  },

  methods: {
    onClose() {
      this.$emit("isKnow");
    },
  },
};
</script>

<style scoped lang="less">
.container {
  padding: 96rpx 32rpx 40rpx;
  background-color: #ffffff;
  border-radius: 16rpx 16rpx 0rpx 0rpx;
  .list-item {
    padding: 0 8rpx;
    &:first-child {
      margin-top: 0;
    }
    .icon {
      margin-top: 8rpx;
      width: 28rpx;
      height: 32rpx;
    }
    .label {
      font-size: 32rpx;
      font-family: 苹方;
      line-height: 32rpx;
      color: #030305;
    }
    .describe {
      font-size: 28rpx;
      font-family: 苹方;
      line-height: 28rpx;
      color: #6c6c6c;
    }
    .describe-text {
      margin-left: 48rpx;
    }
  }
  .itme-top {
    margin-top: 68rpx;
  }
}
</style>
