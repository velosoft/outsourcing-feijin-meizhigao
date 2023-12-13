<template>
  <view class="flex-row self-center justify-center items-center">
    <u-rate
      class="evalute-rate"
      v-model="rating"
      :count="5"
      :readonly="readonly"
      activeColor="#e9b81b"
      inactiveIcon="star-fill"
      inactiveColor="#f0f0f0"
      size="18"
    ></u-rate>
    <text class="side-font ml-6">{{ rating }}分</text>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    rating: { type: Number, default: 0 },
    readonly: { type: Boolean, default: true },
  },
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
