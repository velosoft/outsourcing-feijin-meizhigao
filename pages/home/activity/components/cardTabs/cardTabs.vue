<template>
  <view class="flex-col relative">
    <view
      class="flex-row justify-center relative card-tabs"
    >
      <view
        class="flex-col justify-center items-center tabs-item"
        v-for="(v, i) in tabs"
        :key="i"
        :style="{
          flex: 1,
        }"
        @click="change(i)"
      >
        <text class="item-font">{{ field ? v[field] : v }}</text>
      </view>
    </view>
    <view
      class="flex-col items-center active-card pos"
      :style="{
        width: currentWidth + 'px',
        left: lineLeft + 'px',
      }"
    >
      <text class="active-item-font active-item-text">{{ label }}</text>
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
        return ["活动商品", "活动服务", "活动课程"];
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
      label: this.tabs[this.value],
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
        this.labe = this.tabs[newVal];
      });
    },
    active(newVal) {
      this.label = this.tabs[this.active];
    },
    tabs(newVal) {
      this.$nextTick(() => {
        this.getTabItemWidth();
        this.label = this.tabs[this.active];
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
.card-tabs {
  padding: 20rpx 0;
  background-color: #ff564e;
  border-radius: 16rpx 16rpx 0rpx 0rpx;
}
.item-font {
  font-size: 28rpx;
  font-family: 苹方;
  line-height: 28rpx;
  color: #ffffff;
}
.active-card {
  padding: 24rpx 0;
  background-image: linear-gradient(180deg, #fcf1ce 0%, #faebae 100%);
  border-radius: 16rpx 16rpx 0rpx 0rpx;
  width: 236rpx;
  border: solid 1rpx #ffffff;
}
.pos {
  position: absolute;
  left: 0;
  bottom: 0;
}
.active-item-font {
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  line-height: 34rpx;
  color: #030305;
}
.active-item-text {
  font-size: 30rpx;
  line-height: 30rpx;
}
</style>
