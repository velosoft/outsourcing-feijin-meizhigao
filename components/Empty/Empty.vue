<template>
	<view class="emptyComp"
		:style="{position: position, paddingTop: `${paddingTop}rpx`, paddingBottom: `${paddingBottom}rpx`}">
		<image class="img" v-if="imgSrc" :src="imgSrc" :style="{width: `${width}rpx`,height: `${height}rpx`}" mode="aspectFit" />
		<view class="hint">
			<text>{{hint}}</text>
		</view>

		<button class="btn" v-if="btnText" @click="handleClick">{{btnText}}</button>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "EmptyComp",
		components: {},
		props: {
			hint: {
				type: String,
				default: '暂无内容~'
			},
			paddingTop: {
				type: Number,
				default: 0
			},
			paddingBottom: {
				type: Number,
				default: 120
			},
			position: {
				type: String,
				default: 'absolute'
			},
			imgSrc: {
				type: String,
				default: '../../static/images/icon_empty_01.png'
			},
			width: {
				type: Number,
				default: 340
			},
			height: {
				type: Number,
				default: 154
			},
			btnText: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		},
		// computed: {
		// 	src() {
		// 		const {
		// 			imgSrc,
		// 			$setImgUrl
		// 		} = this;
		// 		return $setImgUrl(imgSrc);
		// 	},
		// },
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.emptyComp {
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 100%;
		text-align: center;

		.img {
			margin: 0 auto;
		}

		.hint {
			margin-top: 30rpx;
			font-size: 26rpx;
			color: #999;
		}

		.btn {
			width: 350rpx;
			height: 80rpx;
			margin-top: 56rpx;
			line-height: 80rpx;
			color: #fff;
			background-color: #ffac4d;
			border-radius: 40rpx;
		}
	}
</style>
