<template>
	<view style="padding: 200rpx 32rpx">
		<view class="flex-row items-center search">
      <view class="search-icon">
        <image class="search-image" src="../../../static/images/icon_search_01.png" mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload=""></image>
      </view>
      <view class="flex-col flex-1 search-input">
        <input />
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.search{
  height: 76rpx;
  border-radius: 38rpx;
  background: #FFFFFF;
  padding: 20rpx 32rpx;
}
.search-icon{
  
}
.search-image{
  width: 32rpx;
  height: 32rpx;
}
.search-input{
  
}
</style>
