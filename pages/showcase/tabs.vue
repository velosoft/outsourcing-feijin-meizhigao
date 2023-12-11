<template>
  <view class="flex-col page">
    <u-tabs
      class="default-tabs"
      :scrollable="false"
      :activeStyle="{
        color: '#030305',
        fontWeight: '700',
      }"
      :inactiveStyle="{
        color: '#a7a7a7',
      }"
      :list="list"
    >
    </u-tabs>

    <view class="service-box mt-20">
      <u-tabs
        class="service-tabs"
        :scrollable="false"
        :activeStyle="{
          color: '#030305',
          fontWeight: '700',
        }"
        :inactiveStyle="{
          color: '#a7a7a7',
        }"
        :list="serviceItems"
      >
      </u-tabs>

      <view class="service-content"></view>
    </view>
  </view>
</template>

<script>
import Selector from "../../components/Selector/Selector";

export default {
  components: { Selector },
  props: {},
  data() {
    return {
      list: [
        {
          name: "服务",
        },
        {
          name: "商品",
        },
        {
          name: "课程",
        },
      ],
      serviceItems: [
        {
          name: "全部",
        },
        {
          name: "单区收纳",
        },
        {
          name: "全屋收纳",
        },
        {
          name: "卧室收纳",
        },
        {
          name: "衣柜收纳",
        },
      ],
      list4: [
        {
          name: "关注",
        },
        {
          name: "推荐",
          badge: {
            isDot: true,
          },
        },
        {
          name: "电影",
        },
        {
          name: "科技",
        },
        {
          name: "音乐",
        },
        {
          name: "美食",
        },
        {
          name: "文化",
        },
        {
          name: "财经",
        },
        {
          name: "手工",
        },
      ],
    };
  },

  methods: {
    onChange(index) {
      console.log("outter:" + index);
    },
  },
};
</script>

<style scoped lang="less">
.page {
  padding: 32rpx 32rpx;
}

.default-tabs {
  background-color: #ffffff;
  /deep/ .u-tabs__wrapper__nav__item {
    align-items: start !important;
    padding-top: 22rpx !important;

    .u-tabs__wrapper__nav__item__text {
      font-size: 28rpx !important;
      line-height: 28rpx !important;
    }
  }

  /deep/ .u-tabs__wrapper__nav__line {
    width: 44rpx !important;
    bottom: 0 !important;
    background-color: #b09053 !important;
  }
}

.service-tabs {
  /deep/ .u-tabs {
    background-color: #ffffff;
    border-bottom: 1rpx solid #d3d3d3;
  }

  /deep/ .u-tabs__wrapper__nav__item {
    align-items: start !important;
    padding-top: 20rpx !important;

    .u-tabs__wrapper__nav__item__text {
      font-size: 24rpx !important;
      line-height: 24rpx !important;
    }
  }

  /deep/ .u-tabs__wrapper__nav__line {
    width: 44rpx !important;
    bottom: 0 !important;
    background-color: #b09053 !important;
  }
}

.service-box {
  background-color: #f8f8f8;
}
.service-content {
  height: 100px;
}
</style>
