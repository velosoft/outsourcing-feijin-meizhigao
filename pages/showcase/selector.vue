<template>
  <view class="flex-col page">
    <Selector class="simple-tabs" :items="tabItems" @change="onChange" />

    <Selector
      class="followup-type-selector mt-20"
      :items="followupItems"
      @change="onChange"
    />

    <Selector
      class="variant-selector mt-20"
      :items="colorItems"
      @change="onChange"
    />
    <Selector
      class="variant-selector price-unit mt-20"
      :items="tab3Items"
      @change="onChange"
    />

    <view class="flex-col">
      <Selector
        class="miaosha-tabs mt-20"
        :items="miaoshaItems"
        @change="onChange"
      />
      <view class="miaosha-body"> </view>
    </view>

    <Selector
      class="timeline-selector mt-20"
      :items="timelineItems"
      @change="onChange"
    >
      <template v-slot="{ item }">
        <view class="flex-col items-center">
          <text class="time">{{ item.time }}</text>
          <text class="label">{{ item.label }}</text>
        </view>
      </template>
    </Selector>

    <Selector class="status-tabs mt-20" :items="tab2Items" @change="onChange">
      <template v-slot="{ item }">
        <view class="flex-col items-center">
          <text class="count">{{ item.count }}</text>
          <text class="label mt-12">{{ item.label }}</text>
        </view>
      </template>
    </Selector>

    <Selector class="cell-radios mt-20" :items="cellItems" @change="onChange">
      <template v-slot="{ item }">
        <view class="flex-row justify-between items-center group_13">
          <text class="font_7 text_13">{{ item }}</text>
          <image
            class="image"
            src="https://dev.ft.velosoft.cn/api/image?token=65806ccad6bce000114d1915&name=ce5f2b164e527ae137be69ba20502ba8.png"
          />
        </view>
      </template>
    </Selector>
  </view>
</template>

<script>
import Selector from "@/components/Selector/Selector";

export default {
  components: { Selector },
  props: {},
  data() {
    return {
      tabItems: ["平台商品", "线下商品"],
      followupItems: ["微信", "电话", "线下"],
      tab3Items: [
        "按延米核算（元/m)",
        "按面积核算（元/m)",
        "按小时核算（元/人/h)",
      ],
      colorItems: ["黄色", "红色", "黑色", "蓝色"],
      tab2Items: [
        { count: 5, label: "进行中" },
        { count: 4, label: "待启动" },
        { count: 2, label: "已完成" },
      ],
      timelineItems: [
        { time: "10:00", label: "已结束" },
        { time: "11:00", label: "抢购中" },
        { time: "12:00", label: "已结束" },
        { time: "13:00", label: "已结束" },
        { time: "14:00", label: "已结束" },
      ],
      miaoshaItems: ["活动商品", "活动服务", "活动课程"],

      cellItems: ["商品订单", "意向订单", "服务订单"],
    };
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
  padding-bottom: 100rpx;
}

.group_13 {
  padding: 40rpx 0;
  border-bottom: solid 2rpx #e8e8e8;
  .font_7 {
    font-size: 32rpx;
    line-height: 44rpx;
    font-weight: 500;
  }

  .image {
    margin-right: 16rpx;
    width: 36rpx;
    height: 28rpx;
  }
}
</style>
