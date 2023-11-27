<template>
	<view class="tabbarCom">
		<image
		 class="bg" 
		 :src="item.img"
		 :class="{show:selectIndex==index}" 
		 v-for="(item,index) in list"
		  :key="index" 
		  mode="widthFix"
		  ></image>
		<view class="tabbar-list">
			<view  v-for="(item,index) in list" :key="index" class="tabbar-list-item" @click="jump(item.pagePath)"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			selectIndex: {
				type: String|Number,
				default: 0
			}
		},
		data() {
			return {
				list: [{
						pagePath: "/pages/tabbar/home/home",
						img: require('@/static/images/icon_tab_01.png')
					},
					{
						pagePath: "/pages/tabbar/resource/resource",
						img: require('@/static/images/icon_tab_02.png')
					},
					{
						pagePath: "/pages/tabbar/personal/personal",
						img: require('@/static/images/icon_tab_03.png')
					}
				]
			};
		},
		created(){
			
		},
		methods:{
			jump(path){
				uni.redirectTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.tabbarCom{
		height: 98rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 99999;
		.bg{
			width: 100%;
			display: none;
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 0;
			&.show{
				display: block;
			}
		}
		.tabbar-list{
			padding-left: 30rpx;
			padding-right: 30rpx;
			position: relative;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			display: flex;
			align-items: stretch;
			z-index: 1;
			.tabbar-list-item{
				width: 0;
				flex: 1;
			}
		}
	}
</style>
