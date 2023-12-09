<template>
  <view class="flex-col justify-start relative">
    <view class="flex-row justify-between items-center card-tabs">
      <view
        class="flex-col items-center justify-center tabs-item"
        v-for="(v, i) in tabs"
        :key="i"
        :style="{
          flex: 1,
        }"
        @click="change(i)"
      >
        <text class="item-font item-time">{{ v.time }}</text>
        <text class="item-font">{{ v.label }}</text>
      </view>
    </view>
    <view
      class="flex-col items-center tabs-item-active pos"
      :style="{
        width: currentWidth + 'px',
        left: lineLeft + 'px',
      }"
    >
      <text class="item-time-active">{{ tabs[current].time }}</text>
      <text class="item-label-active mt-4">{{ tabs[current].label }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    tabs: {
      type: Array,
      default() {
        return [
          {
            time: "10:00",
            label: "已结束",
          },
          {
            time: "11:00",
            label: "抢购中",
          },
          {
            time: "12:00",
            label: "即将开始",
          },
          {
            time: "13:00",
            label: "即将开始",
          },
          {
            time: "14:00",
            label: "即将开始",
          },
        ];
      },
    },
    field: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentWidth: 0, // 当前选项的宽度
      lineLeft: 0, // 滑块距离左侧的位置
      active: 0,
    };
  },
  computed: {
    current() {
      const { active } = this;
      let index = active || 0;
      return index;
    },
  },
  watch: {
    value: {
      handler(newVal) {
        if (this.active != newVal) {
          this.active = newVal;
        }
      },
      immediate: true,
    },
    current(newVal) {
      this.$nextTick(() => {
        this.getTabItemWidth();
      });
    },
    tabs(newVal) {
      this.$nextTick(() => {
        this.getTabItemWidth();
      });
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getTabItemWidth();
    });
  },

  methods: {
    // 切换事件
    change(index) {
      if (this.active !== index) {
        this.active = index;
        this.$emit("change", index);
      }
    },
    // 获取左移位置
    getTabItemWidth() {
      let query = uni.createSelectorQuery().in(this);
      query
        .selectAll(".tabs-item")
        .boundingClientRect((data) => {
          if (!data) {
            return;
          }
          let lineLeft = 0;
          let currentWidth = 0;

          if (data) {
            for (let i = 0; i < data.length; i++) {
              if (i < this.current) {
                lineLeft += data[i].width;
              } else if (i == this.current) {
                currentWidth = data[i].width;
              } else {
                break;
              }
            }
            this.currentWidth = currentWidth;
            this.lineLeft = lineLeft;
          }
        })
        .exec();
    },
  },
};
</script>

<style scoped>
.group_2 {
  padding-top: 8rpx;
}
.card-tabs {
  padding: 16rpx 0;
  background-color: #eb615b;
  border-radius: 16rpx 16rpx 0rpx 0rpx;
}
.item-font {
  font-size: 20rpx;
  font-family: 苹方;
  line-height: 20rpx;
  color: #ffffff;
}
.item-time {
  font-size: 22rpx;
  line-height: 22rpx;
}
.tabs-item-active {
  padding: 16rpx 0;
  background-image: linear-gradient(180deg, #fcf1ce 0%, #faebae 100%);
  border-radius: 16rpx 16rpx 0rpx 0rpx;
  width: 142rpx;
  border: solid 1rpx #ffffff;
}
.pos {
  position: absolute;
  left: 0;
  bottom: 0;
}
.item-time-active {
  font-family: PingFang SC Bold;
  font-weight: 700;
  color: #030305;
  font-size: 26rpx;
  line-height: 26rpx;
}
.item-label-active {
  font-size: 20rpx;
  font-family: PingFang SC Bold;
  line-height: 20rpx;
  font-weight: 700;
  color: #030305;
}
</style>
