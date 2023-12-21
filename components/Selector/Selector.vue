<template>
  <view class="selector-wrapper">
    <view class="items-layout">
      <view
        :class="index == active ? 'item item__active' : 'item'"
        v-for="(item, index) in items"
        :key="index"
        @click="onChange(index)"
      >
        <slot :item="item">
          <text>{{ item }}</text>
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: { items: { type: Array, default: [] } },
    data() {
      return {
        active: 0,
      };
    },

    computed: {
      getClass(index) {
        if (index == this.active) {
          return 'item item__active';
        } else {
          return 'item';
        }
      },
    },

    methods: {
      onChange(index) {
        this.active = index;
        this.$emit('change', index);
      },
    },
  };
</script>

<style scoped lang="less">
  .selector-wrapper {
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
  }
</style>
