<template>
  <view class="flex-col container">
    <view class="flex-row items-center header justify-between">
      <text class="title">{{ title }}（{{ comments.length }}）</text>
      <view class="flex-row items-center" @click="goComment">
        <text class="self-center com-font more-text">查看全部</text>
        <image
          class="icon-arrow ml-4"
          src="/static/images/icon_right_arrow_01.png"
        />
      </view>
    </view>
    <view class="flex-col comment-group">
      <view
        class="flex-col list-item mt-28"
        v-for="(item, index) in comments.slice(0, 2)"
        :key="index"
      >
        <view class="flex-row">
          <image class="avatar" :src="item.avatar" />
          <text class="com-font nick-name ml-8">{{ item.name }}</text>
        </view>
        <view class="flex-col">
          <text class="comment-text line-clamp-two">{{ item.content }}</text>
        </view>
        <text class="product-type product-type-text">{{ item.payRule }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    title: { type: String, default: "" },
    comments: { type: Array, default: () => [] },
  },
  data() {
    return {};
  },

  methods: {
    goComment(args) {
      // 事件处理方法
      uni.navigateTo({
        url: "/pages/commentList/commentList",
      });
    },
  },
};
</script>

<style scoped lang="less">
.container {
  background-color: #ffffff;
  border-radius: 12rpx;
  .header {
    padding: 32rpx 28rpx;
    border-bottom: solid 1.6rpx #efefef;
    .title {
      color: #030305;
      font-size: 32rpx;
      font-family: 苹方;
      line-height: 32rpx;
    }
    .more-text {
      color: #a7a7a7;
    }
    .icon-arrow {
      width: 24rpx;
      height: 24rpx;
    }
  }
  .comment-group {
    padding: 30rpx 30rpx;
    .list-item {
      &:first-child {
        margin-top: 0;
      }
      .avatar {
        border-radius: 32rpx;
        width: 60rpx;
        height: 60rpx;
      }
      .nick-name {
        margin-top: 8rpx;
      }
      .comment-text {
        width: 650rpx;
        font-size: 24rpx;
        font-family: 苹方;
        line-height: 46rpx;
        color: #030305;
      }
      .product-type {
        font-size: 20rpx;
        font-family: 苹方;
        line-height: 20rpx;
        color: #a7a7a7;
      }
      .product-type-text {
        margin-top: 24rpx;
      }
    }
  }
  .com-font {
    font-size: 28rpx;
    font-family: 苹方;
    line-height: 28rpx;
    color: #030305;
  }
}
</style>
