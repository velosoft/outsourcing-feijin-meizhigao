<template>
  <view class="flex-row self-center justify-center">
    <u-rate
      class="evalute-rate"
      v-model="value"
      :count="5"
      :disabled="false"
      inactiveColor="#f0f0f0"
      activeColor="#eab81c"
      size="36"
    ></u-rate>
    <text class="self-start side-font ml-6">{{count}}分</text>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value: 4,
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
  .side-font {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #a7a7a7;
  }
</style>
