<template>
	<view class="flex-row">
	  <view class="flex-col">
		<view class="flex-row group_22">
		  <view class="section_3"></view>
		  <text class="ml-24 title">卧室场景</text>
		</view>
		<view class="flex-col items-start section_4">
		  <text class="font_3">厨房场景</text>
		  <text class="mt-40 font_3">客厅场景</text>
		  <text class="mt-40 font_3">卧室场景</text>
		  <text class="mt-40 font_3">客厅场景</text>
		</view>
	  </view>
	  <view class="flex-col flex-1 group_5">
		<view class="flex-col justify-start swiper-wrap">
		  <view class="flex-col justify-start items-center">
			<image
			  class="a-i-background-image"
			  src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=b707d6e23925649ad73479dac900e0e5.png"
			/>
		  </view>
		  <view class="flex-row justify-evenly image-wrapper pos_4">
			<view class="section_5"></view>
			<view class="section_6"></view>
			<view class="section_6"></view>
			<view class="section_6"></view>
		  </view>
		</view>
		<view class="mt-16 flex-row tabs-wrap">
		  <view class="flex-col justify-start items-center shrink-0 text-wrapper"><text class="text_7">全部</text></view>
		  <view class="ml-6 flex-col justify-start items-center shrink-0 text-wrapper_2">
			<text class="font_4">塑料材质</text>
		  </view>
		  <view class="ml-6 flex-col justify-start items-center shrink-0 text-wrapper_3">
			<text class="font_4">铁质收纳盒</text>
		  </view>
		  <view class="ml-6 flex-col justify-start items-start shrink-0 text-wrapper_4">
			<text class="font_4 text_10">小物件收纳盒</text>
		  </view>
		</view>
		<view class="mt-16 flex-col list-wrap">
		  <view class="flex-row mt-16 list-item" v-for="(item, index) in items" :key="index">
			<image
			  class="shrink-0 shop-image"
			  src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=06a1cbdae6865f4cfc1d807007dcb9f6.png"
			/>
			<view class="ml-12 flex-col shop-con">
			  <text class="title">衣架防滑无痕围巾架丝</text>
			  <view class="flex-row tag items-center">
				<view class="text-wrapper_10 items-center flex-row" v-for="(item, index) in items_1" :key="index">
				  <text class="font_5 text_14">新品上市</text>
				</view>
			  </view>
			  <view class="flex-row items-center shop-con-bottom">
				<text class="font_6 text_16">定金</text>
				<view class="flex-row shrink-0">
				  <text class="self-start text_17">￥</text>
				  <text class="font_7 text_18">200</text>
				  <text class="self-center font_8 text_19">.00</text>
				</view>
				<text class="font_6 text_20">100人预约</text>
			  </view>
			</view>
		  </view>
		</view>
	  </view>
	</view>
	</template>
	
	<script>
	export default {
	  components: {},
	  props: {},
	  data() {
		return {
		  items_1: [null, null],
		  items: [null, null, null, null],
		};
	  },
	
	  methods: {},
	};
	</script>
	
	<style scoped lang="less">
	.group_22 {
	  padding: 40rpx 0;
	  .section_3 {
		background-color: #b09053;
		width: 6rpx;
		height: 24rpx;
	  }
	}
	.section_4 {
	  padding: 32rpx 48rpx 712rpx;
	  background-color: #f8f8f8;
	  border-radius: 0rpx 8rpx 0rpx 0rpx;
	  .font_3 {
		font-size: 28rpx;
		font-family: 苹方;
		line-height: 28rpx;
		color: #6c6c6c;
	  }
	}
	.group_5 {
	  padding: 32rpx 32rpx 0;
	  height: 1216rpx;
	  overflow-y: auto;
	  .swiper-wrap {
		position: relative;
		align-self: stretch;
		.a-i-background-image {
		  width: 480rpx;
		  height: 154rpx;
		}
		.image-wrapper {
		  width: 88rpx;
		  .section_5 {
			background-color: #ffffff;
			border-radius: 8rpx;
			width: 34rpx;
			height: 10rpx;
		  }
		  .section_6 {
			background-color: #ffffff;
			border-radius: 8rpx;
			width: 10rpx;
			height: 10rpx;
		  }
		}
		.pos_4 {
		  position: absolute;
		  left: 50%;
		  top: 136rpx;
		  transform: translateX(-50%);
		}
	  }
	  .tabs-wrap {
		overflow-x: hidden;
		.text-wrapper {
		  padding: 16rpx 0;
		  background-color: #b09053;
		  border-radius: 8rpx;
		  width: 84.76rpx;
		  height: 54rpx;
		  .text_7 {
			color: #ffffff;
			font-size: 24rpx;
			font-family: PingFangSC-Medium;
			line-height: 24rpx;
		  }
		}
		.text-wrapper_2 {
		  padding: 16rpx 0;
		  background-color: #f8f8f8;
		  border-radius: 8rpx;
		  width: 136rpx;
		  height: 54rpx;
		}
		.text-wrapper_3 {
		  padding: 16rpx 0;
		  background-color: #f8f8f8;
		  border-radius: 8rpx;
		  width: 160rpx;
		  height: 54rpx;
		}
		.font_4 {
		  font-size: 24rpx;
		  font-family: 苹方;
		  line-height: 24rpx;
		  color: #6c6c6c;
		}
		.text-wrapper_4 {
		  padding: 16rpx 0;
		  background-color: #f8f8f8;
		  border-radius: 8rpx;
		  height: 54rpx;
		  .text_10 {
			margin-left: 24rpx;
		  }
		}
	  }
	  .list-wrap {
		width: 474.6rpx;
		.list-item {
		  &:first-child {
			margin-top: 0;
		  }
		  .shop-image {
			width: 160rpx;
			height: 160rpx;
		  }
		  .shop-con {
			margin: 8rpx 0 8rpx 24rpx;
			.tag {
			  margin-top: 16rpx;
			  .text-wrapper_10 {
				padding: 0 8rpx;
				background-image: url('https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=9a3b9a726ef2d84aeb76065d090ea380.png');
				background-size: 100% 100%;
				background-repeat: no-repeat;
				height: 32rpx;
				.font_5 {
				  font-size: 20rpx;
				  font-family: PingFangSC-Regular;
				  line-height: 20rpx;
				  color: #bb3e0c;
				}
				.text_14 {
				  margin: 0 8rpx;
				}
			  }
			}
			.shop-con-bottom {
			  margin-top: 40rpx;
			  .font_6 {
				font-size: 20rpx;
				font-family: 苹方;
				line-height: 20rpx;
				color: #a7a7a7;
			  }
			  .text_16 {
				color: #bb3e0c;
			  }
			  .text_17 {
				color: #bb3e0c;
				font-size: 20rpx;
				font-family: PingFang SC;
				line-height: 20rpx;
			  }
			  .font_7 {
				font-size: 32rpx;
				font-family: HarmonyOSSans;
				letter-spacing: -1.24rpx;
				line-height: 32rpx;
				font-weight: 700;
				color: #030305;
			  }
			  .text_18 {
				margin-left: -8rpx;
				color: #bb3e0c;
			  }
			  .font_8 {
				font-size: 20rpx;
				font-family: HarmonyOSSansSC;
				line-height: 20rpx;
				font-weight: 700;
				color: #030305;
			  }
			  .text_19 {
				color: #bb3e0c;
			  }
			  .text_20 {
				margin-left: 32rpx;
				font-size: 22rpx;
				line-height: 22rpx;
			  }
			}
		  }
		}
	  }
	}
	.title {
	  font-size: 28rpx;
	  font-family: PingFangSC-Medium;
	  line-height: 28rpx;
	  color: #030305;
	}
	</style>