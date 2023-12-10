<template>
  <view class="flex-col page">
    <u-cell-group>
      <u-cell title="选择器 Selector" isLink url="/pages/componentsShow/selector"></u-cell>
      <u-cell title="按钮 Button" isLink url="/pages/componentsShow/button"></u-cell>
      <u-cell title="单选 Radio" isLink url="/pages/componentsShow/button"></u-cell>
    </u-cell-group>
  </view>
</template>

<script>
import Selector from "../../components/Selector/Selector";

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

</style>
