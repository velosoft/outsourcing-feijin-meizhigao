<template>
  <view class="flex-row self-center image_1 justify-center">
    <u-rate
      class="group_11 evalute-rate"
      v-model="v_model"
      :count="5"
      inactiveColor="#f0f0f0"
      activeColor="#eab81c"
      size="36"
    ></u-rate>
    <text class="self-start side-font ml-6">4分</text>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      v_model: "",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.image_1 {
  .group_11 {
    flex-shrink: 0;
  }
  .side-font {
    font-size: 22rpx;
    font-family: 苹方;
    line-height: 22rpx;
    color: #a7a7a7;
  }
}

</style>
