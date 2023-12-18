<template>
  <picker-view
    :indicator-style="indicatorStyle"
    :value="value"
    @change="bindChange"
    class="picker-view"
  >
    <picker-view-column>
      <view class="item" v-for="(item, index) in years" :key="index"
        >{{ item }}年</view
      >
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="(item, index) in months" :key="index"
        >{{ item }}月</view
      >
    </picker-view-column>
    <picker-view-column>
      <view class="item" v-for="(item, index) in days" :key="index"
        >{{ item }}日</view
      >
    </picker-view-column>
  </picker-view>
</template>

<script>
export default {
  data: function () {
    const date = new Date();
    const years = [];
    const year = date.getFullYear();
    const months = [];
    const month = date.getMonth() + 1;
    const days = [];
    const day = date.getDate();
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return {
      title: "picker-view",
      years,
      year,
      months,
      month,
      days,
      day,
      value: [9999, month - 1, day - 1],
      visible: true,
      indicatorStyle: `height: 50px;`,
    };
  },
  methods: {
    bindChange: function (e) {
      const val = e.detail.value;
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
    },
  },
};
</script>

<style scoped lang="less">
.picker-view {
  width: 100%;
  height: 400rpx;
}
.item {
  line-height: 100rpx;
  text-align: center;
}
</style>
