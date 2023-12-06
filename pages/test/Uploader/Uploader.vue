<template>
  <view style="padding: 200rpx 32rpx; background-color: antiquewhite;">
	<AddImage :list="imageList" :addImgSrc="uploaderIcon" @addImageChange="addImageChange"></AddImage>
  </view>
</template>

<script>
import { AddImage } from "../../../components/AddImage.vue";
export default {
  components: { AddImage },
  data() {
    return {
		imageList: [
			{
				src:'https://img.js.design/assets/img/656ed99f6c133bdf635a70ed.png'
			}
		],
		uploaderIcon: '../../../static/image/icon_uploader.png'
	};
  },
  methods: {
	addImageChange(list, compIndex, paths){
		// console.log(list, compIndex, paths)
		// let imageUrl = paths[0]
		// let imageObject={
		// 	src: imageUrl
		// }
		// list.push(imageObject)
		// this.imageList = list;
	}
  }
};
</script>

<style lang="less"></style>
