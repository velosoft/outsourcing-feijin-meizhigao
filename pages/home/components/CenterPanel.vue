<template>
  <view class="flex-col">
    <view class="flex-row items-baseline title-view">
      <text class="font title">空间收纳设计,</text>
      <text class="font sub-title ml-5">一对一服务</text>
    </view>
    <view class="flex-row menu-wrap panel-mt-22">
      <view class="flex-col justify-start relative menu-left">
        <image
          class="product-bg pos"
          src="../../../static/images/service-bg.png"
        />
        <view class="flex-col justify-start items-start relative product-con">
          <text class="product-text">商品中心</text>
        </view>
      </view>
      <view class="flex-col menu-right ml-12">
        <navigator
          url="/pages/listPage/index?title=课程中心"
          hover-class="none"
        >
          <view class="flex-col justify-start relative">
            <image
              class="course-bg pos"
              src="../../../static/images/course-bg.png"
            />
            <view
              class="flex-col justify-start items-start relative course-con"
            >
              <text class="menu-font menu-text">课程中心</text>
            </view>
          </view>
        </navigator>
        <navigator
          url="/pages/listPage/index?title=服务中心"
          hover-class="none"
        >
          <view class="flex-col justify-start relative mt-10">
            <image
              class="course-bg pos"
              src="../../../static/images/product-bg.png"
            />
            <view
              class="flex-col justify-start items-start relative course-con"
            >
              <text class="menu-font menu-text">服务中心</text>
            </view>
          </view>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.ml-5 {
  margin-left: 10rpx;
}
.ml-1 {
  margin-left: 2rpx;
}
.mt-15 {
  margin-top: 30rpx;
}
.title-view {
  padding: 0 0;
  .font {
    font-size: 28rpx;
    font-family: PingFang SC;
    line-height: 28rpx;
  }
  .title {
    color: #000000;
    font-size: 30rpx;
    line-height: 30rpx;
  }
  .sub-title {
    color: #a7a7a7;
  }
}
.panel-mt-22 {
  margin-top: 44rpx;
}
.menu-wrap {
  margin-top: 54rpx;
  .pos {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .menu-left {
    flex: 1 1 332rpx;
    height: 344rpx;
    .product-bg {
      width: 332rpx;
      height: 344rpx;
    }
    .product-con {
      padding: 256rpx 0 56rpx;
      background-color: #0000002e;
      border-radius: 12rpx;
      .product-text {
        margin-left: 20rpx;
        color: #ffffff;
        font-size: 34rpx;
        font-family: PingFangSC;
        line-height: 34rpx;
        font-weight: 500;
      }
    }
  }
  .menu-right {
    flex: 1 1 332rpx;
    .course-bg {
      width: 332rpx;
      height: 162rpx;
    }
    .course-con {
      padding: 96rpx 0 40rpx;
      background-color: #0000001d;
      border-radius: 12rpx;
      .menu-font {
        font-size: 28rpx;
        font-family: PingFangSC;
        font-weight: 500;
        line-height: 28rpx;
        color: #ffffff;
      }
      .menu-text {
        margin-left: 24rpx;
      }
    }
  }
}
</style>
