<template>
  <view class="loadingComp">
    <view class="loading-box">
      <u-loadmore
        :fontSize="14"
        :iconSize="16"
        :status="status"
        :loadingText="loadingText"
        :nomoreText="nomoreText"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "Loading",
  components: {},
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#C3C3C3",
    },
    iconSize: {
      type: Number,
      default: 20,
    },
    loadingText: {
      type: String,
      default: "加载中~",
    },
    nomoreText: {
      type: String,
      default: "没有更多了~",
    },
  },
  computed: {
    status() {
      const { loading, finished } = this;
      // more/loading/noMore
      let status = "loadmore";
      if (finished) {
        status = "nomore";
      } else {
        status = "loading";
      }
      return status;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.loadingComp {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .loading-box {
    padding: 10rpx 0;
  }
}
</style>
