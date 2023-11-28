<template>
  <view class="flex-col">
    <view class="flex-row items-baseline title-view">
      <text class="font title">空间收纳设计,</text>
      <text class="font sub-title ml-5">一对一服务</text>
    </view>
    <view class="panel-mt-22 flex-row justify-center box-group">
      <view class="flex-col justify-start items-center left-box-pos left-box">
        <image
          class="left-box"
          src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=00b8c5611dba52e10023fcd5dbe624ac.png"
        />
        <view class="flex-row left-box-tips left-box-tips-pos">
          <text class="self-center left-box-tips-text">去秒杀</text>
          <image
            class="shrink-0 self-start left-box-tips-icon ml-1"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=e56414bb4c3681ef25dbdff757e574e4.png"
          />
        </view>
        <text class="left-box-title-font left-box-title left-box-title-pos"
          >秒杀活动</text
        >
        <text class="left-box-font left-box-text left-box-text-pos"
          >让你购物省心又省钱！</text
        >
      </view>
      <view class="panel-ml-14 flex-col right-box">
        <view
          class="flex-col justify-start items-start right-box-pos right-top-box"
        >
          <image
            class="right-box-bg"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=999893ddfc14ffc0eca7255cc6cbfd79.png"
          />
          <text class="left-box-font right-box-text-pos">完整收纳体系课</text>
          <view
            class="flex-col justify-start right-box-title right-box-title-pos"
          >
            <text class="left-box-title-font right-box-title-text"
              >课程中心</text
            >
          </view>
          <image
            class="right-top-image-pos right-top-image"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=f0fb9653b4f3901c8a7ccdac3fa7e5a2.png"
          />
        </view>
        <view
          class="flex-col justify-start items-center right-bottom-box mt-15 right-box-pos"
        >
          <image
            class="right-box-bg"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=793d07350f962788cbbf505295bd232c.png"
          />
          <text class="left-box-font right-box-text-pos">领券下单更优惠</text>
          <view
            class="flex-col justify-start right-box-title right-box-title-pos"
          >
            <text class="left-box-title-font right-box-title-text"
              >领券中心</text
            >
          </view>
          <image
            class="right-bottom-image-pos right-bottom-image"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=9e4416ee0af75a3abe74f315e03f1fe8.png"
          />
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
  .left-box-pos {
    position: relative;
    .left-box-tips {
      padding: 9rpx 3rpx 10rpx 15rpx;
      background-color: #bb3e0c;
      .left-box-tips-text {
        color: #ffffff;
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 24rpx;
      }
      .left-box-tips-icon {
        margin-top: 4rpx;
        width: 26rpx;
        height: 20rpx;
      }
    }
    .left-box-tips-pos {
      position: absolute;
      left: 24rpx;
      top: 21rpx;
    }
    .left-box-title {
      font-size: 26rpx;
      line-height: 26rpx;
    }
    .left-box-title-pos {
      position: absolute;
      left: 25rpx;
      bottom: 74rpx;
    }
    .left-box-text {
      color: #ffffff;
    }
    .left-box-text-pos {
      position: absolute;
      left: 25rpx;
      bottom: 42rpx;
    }
  }
  .left-box {
    width: 330rpx;
    height: 330rpx;
  }
  .panel-ml-14 {
    margin-left: 28rpx;
    .right-box-pos {
      position: relative;
      margin-left: 2rpx;
      .right-top-image-pos {
        position: absolute;
        right: 26rpx;
        bottom: 20rpx;
      }
      .right-top-image {
        filter: drop-shadow(0rpx 4rpx 4rpx #86868629);
        width: 100rpx;
        height: 100rpx;
      }
    }
    .right-top-box {
      background-color: #ececec66;
      border-radius: 6rpx;
    }
    .right-bottom-box {
      background-color: #d6d6d666;
      border-radius: 6rpx;
      .right-bottom-image-pos {
        position: absolute;
        right: 10rpx;
        bottom: 8rpx;
      }
      .right-bottom-image {
        width: 130rpx;
        height: 130rpx;
      }
    }
    .right-box-bg {
      width: 332rpx;
      height: 150rpx;
    }
    .right-box-text-pos {
      position: absolute;
      left: 15rpx;
      bottom: 60rpx;
    }
    .right-box-title {
      padding: 9rpx 0 8rpx;
      background-color: #b09053;
      .right-box-title-text {
        margin-left: 9rpx;
        margin-right: 9rpx;
      }
    }
    .right-box-title-pos {
      position: absolute;
      left: 14rpx;
      top: 21rpx;
    }
  }
  .right-box {
    width: 334rpx;
  }
  .left-box-font {
    font-size: 20rpx;
    font-family: 苹方;
    line-height: 20rpx;
    color: #6c6c6c;
  }
  .left-box-title-font {
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    line-height: 24rpx;
    color: #ffffff;
  }
}
.box-group {
  padding-left: 30rpx;
  padding-right: 28rpx;
}
</style>
