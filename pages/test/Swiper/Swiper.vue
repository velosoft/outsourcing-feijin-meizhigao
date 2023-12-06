<template>
  <view style="padding: 200rpx 0">
    <text>swiper 自定义指示点</text>
    <view class="flex-row relative swiper-wrap">
      <swiper class="swiper-con" circular :autoplay="true" @change="swiperChange">
        <swiper-item v-for="(item, index) in swiperItems" :key="index">
          <view class="swiper-item-content"></view>
        </swiper-item>
      </swiper>
      <view class="flex-row swiper-indicator">
        <view class="indicator-dots" :class="{ 'indicator-dots--active': index == current }" v-for="(item, index) in swiperItems"
          :key="index"></view>
      </view>
    </view>

    <text>swiper 卡片式</text>
    <view class="flex-row relative swiper-wrap--card">
      <swiper class="swiper-con--card" previous-margin="60rpx" next-margin="60rpx" circular :autoplay="true" @change="swiperChange">
        <swiper-item v-for="(item, index) in swiperItems" :key="index">
          <view class="swiper-item-content--card"></view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        swiperItems: [null, null, null],
        current: 0,
      };
    },
    methods: {
      swiperChange(e){
        console.log(e.detail.current) // 输出当前图片的真实索引
        this.current = e.detail.current
      },
    }
  };
</script>

<style lang="less">
  .swiper-wrap {
    width: 100%;
  }

  .swiper-con {
    width: 100%;
    height: 300rpx;
    background-color: antiquewhite;
  }

  .swiper-item-content {
    background-color: aquamarine;
  }

  .swiper-indicator {
    position: absolute;
    bottom: 26rpx;
    right: 20rpx;
  }

  .indicator-dots {
    background-color: #ffffff80;
    border-radius: 20rpx;
    width: 36rpx;
    height: 4rpx;
    margin-left: 10rpx;
    transition: all 0.3s linear;
  }

  .indicator-dots--active {
    background-color: #ffffff;
  }

  .swiper-wrap--card{
    width: 100%;
  }

  .swiper-con--card {
    width: 100%;
    height: 300rpx;
    background-color: antiquewhite;
  }
  
  .swiper-item-content--card{
    width: 610rpx;
    height: 300rpx;
    background-color: red;
  }
  
</style>
