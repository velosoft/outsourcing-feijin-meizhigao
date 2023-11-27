<template>
	<!-- 上传图片组件 -->
	<view class="addImageCom">
		<view class="image-list">
			<view class="item" v-for="(item, index) of list" :key="index" @click="showImage(index)">
				<image class="img" :src="item.src" mode="aspectFill" />
				<image class="close" src="/static/img/icon_close_02.png" mode="aspectFill" @click.stop="deleteImage(index)" />
			</view>
			<view class="item add-com" v-if="list.length<max||max==0" @click="addImage">
				<image class="img" :src="addImgSrc||'/static/img/icon_add_02.png'" mode="aspectFill" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'addImage',
		props: {
			list: Array, //必填
			addImgSrc: { //点击上传图片icon选填
				type: String,
				value: ''
			},
			compIndex: { //选填
				type: Number,
				value: 0
			},
			max: {
				//选填,上传图片的最大张数
				type: Number,
				value: 0
			}
		},
		data() {
			return {

			};
		},
		methods: {
			addImage() {
				var {
					list,
					compIndex
				} = this
				var count = this.max > 1 ? this.max - list.length : 1;
				uni.chooseImage({
					count: count,
					success: (res) => {
						const tempFilePaths = res.tempFilePaths || [];
						this.$emit('addImageChange', {
							list,
							compIndex,
							paths: tempFilePaths
						}); //触发事件
					}
				})
			},
			deleteImage(index) {
				this.list.splice(index, 1);
				var {
					list,
					compIndex
				} = this
				this.$emit('addImageChange', {
					list,
					compIndex,
				}); //触发事件
			},
			showImage(index) {
				let list = this.list.map((item) => {
					return item.src;
				});
				uni.previewImage({
					current: list[index], // 当前显示图片的http链接
					urls: list // 需要预览的图片http链接列表
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.addImageCom {
		.image-list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.item {
				position: relative;
				margin: 0 18rpx 18rpx 0;
				width: 218rpx;
				height: 218rpx;
				&.add-com {
					background-color: #ededed;
				}

				.img {
					width: 100%;
					height: 100%;
				}

				.close {
					position: absolute;
					top: 0;
					right: 0;
					width: 36rpx;
					height: 36rpx;
					transform: translate(40%, -40%);
				}

				&:nth-child(3n) {
					margin-right: 0;
				}
			}

		}
	}
</style>
