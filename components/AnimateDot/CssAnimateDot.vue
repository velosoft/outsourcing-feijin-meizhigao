<template>
	<view class="animateDotComp">
		<view class="animate-dot" :class="{hidden: item.hidden}" v-for="(item, index) in animates" :key="index"
			:style="{top: item.top, left: item.left}" @transitionend="animationend(item)"></view>
		<!-- <view class="animate-dot" :class="{active: animateStyle}"
			:style="animateStyle ? `top: ${animateStyle.top}; left: ${animateStyle.left};` : ''"></view> -->
	</view>

</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	let i = 1, timer = null;
	export default {
		name: "AnimateDot",
		props: {
			top: {
				type: String,
				default: ''
			},
			left: {
				type: String,
				default: ''
			},
			tabLen: {
				type: Number,
				default: 5
			},
			tabIndex: {
				type: Number,
				default: 3
			}
		},
		data() {
			return {
				// isShow: false,
				animates: [],
				// animateStyle: null
			};
		},
		computed: {
			...mapGetters('shopCart', ['animateDotPosition']),
			baseStyle() {
				const {
					tabLen,
					tabIndex,
					left,
					top
				} = this;
				const itemWidth = 750 / tabLen;
				return {
					left: left || uni.upx2px(itemWidth * (tabIndex + 1) - itemWidth / 2) + 'px',
					top: top || '100%'
				}
			},
		},
		mounted() {
			console.log('baseStyle----', this.baseStyle)
		},
		watch: {
			animateDotPosition(v) {
				if (!v) {
					return false
				}
				clearTimeout(timer);
				if (this.animates.length > 100) {
					this.animates = [];
				}
				const {
					baseStyle: {left, top},
					animates
				} = this;
				const animate = { hidden: false, top: v.top + 'px',left: v.left + 'px' };
				animates.push(animate);
				setTimeout(() => {
					animate.top = top;
					animate.left = left;
				}, 50);
				timer = setTimeout(() => {
					this.animates = [];
				}, 550);
			}
			// animateDotPosition(v) {
			// 	if (this.animateStyle || !v) {
			// 		return false
			// 	}
			// 	const {
			// 		baseStyle
			// 	} = this;
			// 	this.animateStyle = v;
			// 	setTimeout(() => {
			// 		this.animateStyle = baseStyle;
			// 		setTimeout(() => {
			// 			this.animateStyle = null;
			// 			this.setAnimateDotPosition(null);
			// 		}, 500)
			// 	}, 50)
			// }
		},
		methods: {
			...mapMutations('shopCart', ['setAnimateDotPosition']),
			animationend(item) {
				if (item) {
					item.hidden = true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.animate-dot {
		width: 24rpx;
		height: 24rpx;
		position: fixed;
		z-index: 100000;
		border-radius: 100%;
		transition: left .5s linear, top .5s cubic-bezier(0.5, -0.5, 1, 1);
		background-color: #ff5500;
		&.hidden {
			display: none;
		}
		// display: none;
		// &.active {
		//   display: block;
		//   transition: left .5s linear, top .5s cubic-bezier(0.5, -0.5, 1, 1);
		// }
	}
</style>