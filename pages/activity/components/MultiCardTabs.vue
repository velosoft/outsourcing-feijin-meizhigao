<template>
  <view class="flex-col justify-start relative">
    <view class="bg-abs"></view>
    <scroll-view class="card-tabs" :scroll-x="true">
      <view class="flex-row justify-start items-center tabs-wrapper">
        <view
          class="flex-col items-center justify-center tabs-item shrink-0 tab-item"
          v-for="(v, i) in tabs"
          :key="i"
          :style="{
            flex: 1,
          }"
          @click="change(i, v)"
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
    </scroll-view>
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
              time: '10:00',
              label: '已结束',
            },
            {
              time: '11:00',
              label: '抢购中',
            },
            {
              time: '12:00',
              label: '即将开始',
            },
            {
              time: '13:00',
              label: '即将开始',
            },
            {
              time: '14:00',
              label: '即将开始',
            },
          ];
        },
      },
      field: {
        type: String,
        default: '',
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
      change(index, item) {
        if (this.active !== index) {
          this.active = index;
          this.$emit('change', { index, item });
        }
      },
      // 获取左移位置
      getTabItemWidth() {
        let query = uni.createSelectorQuery().in(this);
        query
          .selectAll('.tabs-item')
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

  .pos {
    position: absolute;
    left: 0;
    top: 0;
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
  .card-tabs {
    height: 80rpx;
  }
  .tabs-wrapper {
    height: 70rpx;
    margin-top: 10rpx;
  }
  .tab-item {
    min-width: 142rpx;
  }
  .bg-abs {
    position: absolute;
    height: 70rpx;
    width: 100%;
    top: 10rpx;
    left: 0rpx;
    background-color: #eb615b;
    border-radius: 16rpx 16rpx 0rpx 0rpx;
  }
  .tabs-item-active {
    padding: 10rpx 8rpx;
    background-image: linear-gradient(180deg, #fcf1ce 0%, #faebae 100%);
    border-radius: 16rpx 16rpx 0rpx 0rpx;
    width: 142rpx;
    border: solid 1rpx #ffffff;
    min-width: 142rpx;
    height: 80rpx;
    border-bottom: unset;
  }
</style>
