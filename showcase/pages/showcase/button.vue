<template>
  <view class="flex-col page">
    <view class="flex-col mt-20">
      <text>主打色 </text>
      <u-button type="primary" shape="circle" text="立即查看"></u-button>
    </view>

    <view class="flex-col mt-20">
      <text>主打色 镂空</text>
      <u-button type="primary" shape="circle" plain text="返回上一级"></u-button>
    </view>

    <view class="flex-col mt-20">
      <text>左右平分布局</text>
      <view class="flex-row mt-10">
        <u-button
          type="primary"
          shape="circle"
          plain
          text="加入购物车"
          class="flex-1"
        ></u-button>
        <u-button
          type="primary"
          shape="circle"
          text="预约服务"
          class="flex-1 ml-20"
        ></u-button>
      </view>
    </view>

    <view class="flex-row group_9">
      <u-button
        class="button"
        text="加入购物车"
        type="primary"
        :plain="true"
      ></u-button>
      <u-button class="button ml-10" text="预约服务" type="primary"></u-button>
    </view>

    <view class="flex-col mt-20">
      <text>黑色按钮</text>
      <view class="flex-row mt-10">
        <u-button
          plain
          text="取消订单"
          size="small"
          class="cf-btn-black"
        ></u-button>
        <u-button
          type="primary"
          text="去服务"
          size="small"
          class="cf-btn-black ml-20"
        ></u-button>
      </view>
    </view>
  </view>
</template>

<script>
import Selector from "@/components/Selector/Selector";

export default {
  components: { Selector },
  props: {},
  data() {
    return {};
  },

  methods: {
    onChange(index) {
      console.log("outter:" + index);
    },
  },
};
</script>

<style scoped lang="less">
.page {
  padding: 32rpx;
}

.group_9 {
  width: 432rpx;
}
.button {
  flex: 1 1 0;
}


</style>
