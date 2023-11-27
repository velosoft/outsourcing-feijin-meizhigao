<template>
	<view class="detailHeaderBgComp">
		<StatusBar v-if="statusBar" />
		<image class="bg" :src="bgSrc" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name:"DetailHeaderBgComp",
		props: {
			statusBar: {
				type: Boolean,
				default: true
			},
			bgSrc: {
				type: String,
				default: '/static/images/bg_02.png'
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.detailHeaderBgComp {
		.bg {
			width: 100%;
		}
	}
</style>