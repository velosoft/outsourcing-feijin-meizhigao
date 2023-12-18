<template>
  <view class="flex-col page">
    <u-cell-group title="高频组件" class="group">
      <u-cell title="按钮 Button" isLink url="/pages/showcase/button"></u-cell>
      <u-cell
        title="吸顶布局 Sticky"
        isLink
        url="/pages/showcase/sticky/index"
      ></u-cell>

      <u-cell
        title="底部定位 Fixed Bottom"
        isLink
        url="/pages/showcase/fixed/fixed"
      ></u-cell>
    </u-cell-group>

    <u-cell-group title="导航" class="group">
      <u-cell title="标签页 Tabs" isLink url="/pages/showcase/tabs" />
    </u-cell-group>

    <u-cell-group title="表单" class="group">
      <u-cell title="输入框 Field" isLink url="/pages/showcase/field/index" />
      <u-cell title="选择器 Selector" isLink url="/pages/showcase/selector" />
      <u-cell title="单选 Radio" isLink url="/pages/showcase/radio" />
      <u-cell
        title="数字加减 Number Box"
        isLink
        url="/pages/showcase/numberbox/index"
      />
    </u-cell-group>

    <u-cell-group title="弹出层" class="group">
      <u-cell title="弹浮层 Popup" isLink url="/pages/showcase/popup/index" />
    </u-cell-group>
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
  background-color: #f2f2f2;
}

.group {
  background-color: #ffffff;
  margin-top: 20px;
}
</style>
