<template>
  <view :style="{ height: statusBarHeight + 'px' }">
    <slot />
  </view>
</template>

<script>
export default {
  name: "StatusBar",
  data() {
    return {
      statusBarHeight: 20,
    };
  },
  mounted() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
  },
};
</script>

<style lang="scss" scoped></style>
