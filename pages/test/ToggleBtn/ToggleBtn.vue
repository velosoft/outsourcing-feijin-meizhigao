<template>
  <view style="padding: 200rpx 0">
    <text>文本切换按钮</text>
    <view class="flex-col items-start tab-wrap">
      <view class="flex-row tab-con">
        <view class="flex-col justify-center items-center tab-btn" :class="[index == current ? 'btn--active':'']"
          v-for="(item, index) in tabsArray" :key="index" @click="onChange(item, index)">
          <text class="btn-text" :class="[index == current ? 'btn-text--active':'']">{{ item.label }}</text>
        </view>
      </view>
    </view>
    <text>带背景图的文本切换按钮</text>
    <view class="flex-col items-start tab-wrap">
      <view class="flex-row tab-con">
        <view class="flex-col justify-center items-center tab-btn--bg relative" :class="[index == current ? 'btn--active':'']"
          v-for="(item, index) in tabs" :key="index" @click="onChange(item, index)">
          <image class="btn-image" v-if="index == current" src="../../../static/image/bg_btn.png" mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload=""></image>
          <text class="btn-text" :class="[index == current ? 'btn-text--active':'']">{{ item.label }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tabsArray: [
          {label: '标签1'},
          {label: '标签2'},
          {label: '标签3'}
        ],
        tabs: [
          {label: '标签1'},
          {label: '标签2'},
        ],
        current: 0,
      };
    },
    methods: {
      onChange(v, i) {
        console.log("切换按钮" + i)
        this.current = i;
      },
    },
  };
</script>

<style lang="less">
  .tab-wrap {
    width: 100%;
    padding: 30rpx 0;
  }

  .tab-con>view:not(:first-child) {
    margin-left: 12rpx;
  }

  .tab-btn {
    height: 48rpx;
    padding: 0 22rpx;
    border-radius: 24rpx;
    transition: all 0.3s linear;
  }

  .btn--active {
    background-color: #c30d23;
  }

  .btn-text {
    font-size: 24rpx;
    font-family: PingFang SC;
    line-height: 24rpx;
    color: #666666;
  }

  .btn-text--active {
    color: #f7f7f7;
  }

  .tab-btn--bg {
    width: 234rpx;
    min-height: 150rpx;
    padding: 0 22rpx;
    border-radius: 24rpx;
    transition: all 0.3s linear;
  }
  .btn-image{
    width: 234rpx;
    height: 150rpx;
    position: absolute;
    z-index: -1;
  }
</style>
