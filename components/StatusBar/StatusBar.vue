<template>
	<view :style="{ height: statusBarHeight + 'px' }" class="statusBarComp">
		<slot />
	</view>
</template>

<script>
export default {
  name: 'StatusBarComp',
  data () {
    return {
      statusBarHeight: 20
    };
  },
  mounted () {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
  }
};
</script>

<style lang="scss" scoped >
</style>
