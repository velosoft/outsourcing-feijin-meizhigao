<template>
  <view class="listContainerComp">
    <Empty :hint="emptyHint" :paddingTop="emptyPaddingTop" v-if="showEmpty" />
    <template v-else>
      <slot />
      <Loading :finished="finished" v-if="showLoading" />
    </template>
  </view>
</template>

<script>
  import Empty from '../Empty/Empty.vue';
  import Loading from '../Loading/Loading.vue';

  export default {
    name: "ListContainer",
    components: {
      Empty,
      Loading
    },
    props: {
      emptyHint: {
        type: String,
        default: '暂无内容'
      },
      showEmpty: {
        type: Boolean,
        default: false
      },
      emptyPaddingTop: {
        type: Number,
        default: 374
      },
      showLoading: {
        type: Boolean,
        default: true
      },
      finished: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="less" scoped>

</style>
