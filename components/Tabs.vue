<template>
  <view class="tabs_com" :style="{ background: background }">
    <view class="tabs normal" v-if="tabList.length <= max && !hasScroll">
      <view
        class="line"
        :style="{
          width: `${100 / tabList.length}%`,
          left: `${(100 / tabList.length) * TabCur}%`,
        }"
      ></view>
      <view
        class="tab"
        v-for="(item, index) of tabList"
        :key="index"
        @click="tabChange(index)"
      >
        <view class="label" :class="{ active: index === TabCur }">{{
          item.name
        }}</view>
        <view class="count" v-if="item.count">{{ item.count }}</view>
      </view>
    </view>
    <view class="tabs_container" v-else>
      <scroll-view
        scroll-anchoring
        scroll-with-animation
        scroll-x="true"
        :scroll-left="lineLeft - 750 / pixelRatio / 2"
        class="tabs_scroll"
      >
        <view class="tabs">
          <view class="line" :style="{ left: `${lineLeft}px` }"></view>
          <view
            class="tab"
            v-for="(item, index) of tabList"
            :key="index"
            @click="tabChange(index)"
          >
            <view class="label" :class="{ active: index === TabCur }">{{
              item.name
            }}</view>
            <view class="count" v-if="item.count">{{ item.count }}</view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    tabList: Array,
    TabCur: Number,
    max: {
      type: Number,
      default: 5,
    },
    leftOffset: {
      type: Number,
      default: 0,
    },
    background: {
      type: String,
      default: "#ffffff",
    },
    hasScroll: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.tabList.length > this.max || this.hasScroll) {
      this.computedLeft(this.TabCur);
    }
  },
  data() {
    return {
      lineLeft: 0,
    };
  },
  watch: {
    TabCur(v) {
      this.computedLeft(v);
    },
  },
  methods: {
    tabChange(e) {
      if (this.tabList.length > this.max || this.hasScroll) {
        this.computedLeft(e);
      }
      this.$emit("tabChange", e);
    },

    computedLeft(e) {
      setTimeout(() => {
        const query = uni.createSelectorQuery();
        query
          .selectAll(".tabs .tab")
          .boundingClientRect((data) => {
            const list = data.slice(0, e + 1);
            const left = list.reduce((total, item, index) => {
              if (index === e) {
                return total + item.width / 2;
              } else {
                return total + item.width;
              }
            }, 0);

            this.lineLeft = left;
          })
          .exec();
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.tabs_com {
  z-index: 2;
  .tabs {
    display: flex;
    flex-flow: row;
    position: relative;
    height: 80rpx;
    z-index: 2;
    .tab {
      position: relative;
      .label {
        text-align: center;
        font-size: 30rpx;
        line-height: 80rpx;
        color: rgba(0, 0, 0, 0.8);
        &.active {
          color: #000000;
        }
      }
      .count {
        position: absolute;
        top: 0;
        left: 65%;
        width: 32rpx;
        height: 32rpx;
        font-size: 22rpx;
        color: #ffffff;
        line-height: 32rpx;
        text-align: center;
        background: #ffcb37;
        transform: translateX(-50%);
        border-radius: 32rpx;
      }
    }
    .line {
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.2s linear;
      &:after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 60rpx;
        height: 6rpx;
        background-color: #b09053;
        border-radius: 3rpx;
        transform: translateX(-50%);
      }
    }
  }
  .normal .tab {
    flex: 1;
  }
  .tabs_container {
    height: 80rpx;
    overflow: hidden;
    .tabs_scroll {
      width: 100%;
      overflow: hidden;
      height: 100rpx;
    }
    .tabs {
      .tab {
        flex-grow: 1;
        padding: 0 15rpx;
        flex-shrink: 0 !important;
      }

      .line {
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.2s linear;
        width: 60rpx;
        height: 6rpx;
        background: #ff4772;
        border-radius: 3rpx;
        transform: translateX(-50%);
        &:after {
          display: none;
        }
      }
    }
  }
}
</style>
