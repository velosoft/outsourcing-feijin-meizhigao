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
            <u-icon name="arrow-down" :size="iconSize" v-if="localStatus === 'closed'" />
            <u-icon name="arrow-up" :size="iconSize" v-else />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      status: {
        type: String,
        default: 'closed',
        validator: (value) => ['open', 'closed'].includes(value),
      },
      closedHeight: { type: String, default: '48rpx' },
      closedText: { type: String, default: '展开' },
      openText: { type: String, default: '收起' },
      iconSize: { type: String, default: '32px' },
    },
    data() {
      return {
        localStatus: this.status, // 使用 localStatus 作为内部状态
      };
    },
    computed: {
      text() {
        return this.localStatus === 'open' ? this.openText : this.closedText;
      },
      style() {
        return this.localStatus === 'open' ? '' : `overflow:hidden; height: ${this.closedHeight}`;
      },
    },
    watch: {
      status(newVal) {
        this.localStatus = newVal;
      },
      localStatus(newVal) {
        this.$emit('update:status', newVal);
      },
    },
    methods: {
      onCollpseClick() {
        this.localStatus = this.localStatus === 'closed' ? 'open' : 'closed';

        this.$nextTick(() => {
          this.getCardWrapperHeight()
            .then((height) => {
              const eventData = {
                status: this.localStatus,
                height: height,
              };
              this.$emit('change', eventData);
            })
            .catch((error) => {
              console.error('Error getting card-wrapper height:', error);
            });
        });
      },
      getCardWrapperHeight() {
        return new Promise((resolve, reject) => {
          const query = uni.createSelectorQuery().in(this);
          query
            .select('.card-wrapper')
            .boundingClientRect((rect) => {
              if (rect) {
                resolve(rect.height);
              } else {
                reject(new Error('Unable to get element height'));
              }
            })
            .exec();
        });
      },
    },
  };
</script>

<style scoped lang="less">
  .card-wrapper {
    display: flex;
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
</style>
