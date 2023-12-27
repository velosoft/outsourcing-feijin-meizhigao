<template>
<view class="flex-col page">
  <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></NavBar>
  <view class="flex-col flex-1 body">
    <view class="flex-col">
      <text class="title">诊断结果：</text>
      <view class="content-wrapper mt-10">
        <text class="desc">
          结果文案描述，由测量师上传，回显给用户查看；结果文案描述，由测量师上传，回显给用户查看；结果文案描述，由测量师上传，回显给用户查看；结果文案描述，由测量师上传，回显给用户查看
        </text>
      </view>
    </view>
    <view class="flex-col mt-20">
      <text class="self-start title">诊断图片：</text>
      <view class="flex-col items-center mt-10 content-wrapper">
        <image
          class="list-item mt-12"
          src="https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=023c4c65c3384db0e554daa5a2ba9a37.png"
          v-for="(item, index) in items"
          :key="index"
        />
      </view>
    </view>
  </view>
</view>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';

export default {
  components: { NavBar },
  props: {},
  data() {
    return {
      title: '测量结果',
      items: [null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.body {
  padding: 0 24rpx 64rpx;
  overflow-y: auto;
}
.title {
  font-size: 30rpx;
  line-height: 42rpx;
  font-weight: 500;
  color: #2d2e32;
}
.content-wrapper {
  padding: 24rpx;
  background-color: #f0f0f0;
  border-radius: 8rpx;
}
.desc {
  margin: 0 24rpx;
  color: #3c3d41;
  font-size: 24rpx;
  line-height: 44rpx;
  text-align: left;
}
.list-item {
  border-radius: 8rpx;
  width: 654rpx;
  height: 450rpx;
}
.list-item:first-child {
  margin-top: 0;
}
</style>
