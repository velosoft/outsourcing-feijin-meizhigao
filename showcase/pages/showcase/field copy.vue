<template>
  <view class="flex-col page">
    <cell-group>
      <Field title="默认输入" placeholder="请输入" v-model="val" />

      <Field
        title="开启箭头"
        placeholder="请输入"
        v-model="val2"
        isLink
        readonly
      />
      <Field title="未开启箭头" placeholder="请输入" v-model="val3" readonly />

      <Field title="右侧输入" placeholder="请输入" v-model="val" input-align="right"/>
    </cell-group>
  </view>
</template>

<script>
import Field from "@/components/Field/Field";

export default {
  components: { Field },
  props: {},
  data() {
    return {
      val1: "",
      val2: "不能输入",
      val3: "不能输入",
    };
  },
  methods: {
    onChange(newVal) {
      this.myVal = newVal;
    },
  },
};
</script>

<style scoped lang="less">
.page {
  padding: 32rpx 32rpx;
}
</style>
