<template>
  <view class="card-wrapper">
    <view class="card-layout">
      <view class="content-wrapper" :style="style">
        <slot>
          <view class="content">
            <text>这是一个面板</text>
          </view>
        </slot>
      </view>

      <view class="collapse-wrapper" @click="onCollpseClick">
        <view class="collapse">
          <text>{{ text }}</text>
          <view class="icon-wrapper">
            <u-icon name="arrow-down" size="18" v-if="!status" />
            <u-icon name="arrow-up" size="18" v-if="status" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    closedHeight: { type: String, default: "48rpx" },
    closedText: { type: String, default: "展开" },
    openText: { type: String, default: "收起" },
  },
  data() {
    return {
      status: false, // false 表示折叠 ，true 表示展开
    };
  },

  computed: {
    text() {
      return this.status ? this.openText : this.closedText;
    },

    style() {
      return this.status ? "" : `overflow:hidden; height: ${this.closedHeight}`;
    },
  },

  methods: {
    onCollpseClick() {
      this.status = !this.status;
    },
  },
};
</script>

<style scoped lang="css">
.card-wrapper {
  display: flex;
  background-color: #ffffff;
  border-radius: 24rpx;
  border: 1px solid #f2f2f2;
}

.card-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.content {
  display: flex;
  width: 100%;
  height: 200rpx;
  justify-content: center;
  align-items: center;
}
.collapse-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 8rpx 0;
}

.collapse {
  display: flex;
  align-items: center;
}

.icon-wrapper {
  margin-left: 16rpx;
  width: 36rpx;
  height: 36rpx;
}

/* .selector-wrapper {
}
.items-layout {
  display: flex;
}

.item {
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 100rpx;
  padding: 16rpx 24rpx;
  font-size: 22rpx;
  line-height: 22rpx;
  color: #030305;
}

.item__active {
  background-color: #b1a76e;
  border-radius: 100rpx;
  color: #ffffff;
} */
</style>
