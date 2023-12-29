<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#f8f8f8"></nav-bar>
    <view class="flex-col container">
      <view class="flex-col">
        <view class="flex-col" v-if="index === 0">
          <image class="pic-banner" :src="page.picBanner" />
          <view class="flex-row mt-12">
            <image class="pic-mini" :src="page.picMini1" />
            <image class="pic-mini ml-11" :src="page.picMini2" />
          </view>
        </view>
        <image v-else class="pic-big" :src="page.pic" />
      </view>
      <text class="self-center desc">{{ page.desc }}</text>
      <view class="flex-col items-center button" @click="nextPage">
        <text class="btn-text">{{ btnText }}</text>
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
        title: '收纳箱设计方案',
        index: 0,
        pages: [
          {
            desc: '起始页内容展示',
            picBanner:
              'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=6a8e2494b892c02a02012e9e9ea914c9.png',
            picMini1:
              'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=fe487930a831345b6fc8ac1013da82ba.png',
            picMini2:
              'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=7078fa7de7ce283a0116a3bfefc5c7f8.png',
          },
          {
            desc: '第2页内容展示',
            pic: 'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=8b8c3f6857f0bdb2b3236d3830e8877f.png',
          },
          {
            desc: '第3页内容展示',
            pic: 'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=8b8c3f6857f0bdb2b3236d3830e8877f.png',
          },
          {
            desc: '结束页内容展示',
            pic: 'https://dev.ft.velosoft.cn/api/image?token=658b8253d6bce000114dd28c&name=8b8c3f6857f0bdb2b3236d3830e8877f.png',
          },
        ],
      };
    },
    computed: {
      page() {
        return this.pages[this.index];
      },
      btnText() {
        return this.index === this.pages.length - 1 ? '关闭方案预览' : '下一页';
      },
    },
    methods: {
      nextPage() {
        if (this.index === this.pages.length - 1) {
          uni.navigateBack();
        } else {
          this.index++;
        }
      },
    },
  };
</script>

<style scoped lang="less">
  .ml-11 {
    margin-left: 22rpx;
  }
  .page {
    background-color: #f8f8f8;
    width: 100%;
  }
  .container {
    padding: 12rpx 24rpx 70rpx;
  }
  .pic-banner {
    border-radius: 16rpx;
    width: 93.6vw;
    height: 84.5333vw;
  }
  .pic-mini {
    border-radius: 16rpx;
    height: 340rpx;
    width: 340rpx;
  }
  .pic-big {
    border-radius: 16rpx;
    width: 93.6vw;
    height: 133.3333vw;
  }
  .desc {
    margin-top: 104rpx;
    font-weight: 500;
    color: #2d2e32;
    font-size: 32rpx;
    line-height: 44rpx;
  }
  .button {
    margin: 124rpx 16rpx 0;
    padding: 28rpx 0;
    background-color: #000000;
    border-radius: 48rpx;
  }
  .btn-text {
    color: #ffffff;
    font-weight: 500;
    font-size: 28rpx;
    line-height: 40rpx;
  }
</style>
