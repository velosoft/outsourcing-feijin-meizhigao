<!--
 * @file: 工作台
-->
<template>
	<view class="workbenchPage">


	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
  
	export default {
		components: {
		},
		data() {
			return {
				menu: [],
				auditCount: 0,
				scrollTop: 0
			}
		},
		computed: {
			...mapGetters(['userInfo']),
		},
		onShow () {

		},
		methods: {

		},
		onPageScroll (e) {
		},
		onPullDownRefresh() {
		}
	}
</script>

<style lang="less" scoped>
	.workbenchPage {
	}
</style>
