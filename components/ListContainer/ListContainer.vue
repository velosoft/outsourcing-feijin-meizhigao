<template>
  <view class="listContainerComp">
    <Empty
      class="flex-1"
      width="408"
      height="286"
      :imgSrc="imgSrc"
      :hint="emptyHint"
      :paddingTop="emptyPaddingTop"
      v-if="showEmpty"
    ></Empty>
    <template v-else>
      <slot />
      <Loading :finished="finished" v-if="showLoading" />
    </template>
  </view>
</template>

<script>
import Empty from "../Empty/Empty.vue";
import Loading from "../Loading/Loading.vue";

export default {
  name: "ListContainer",
  components: {
    Empty,
    Loading,
  },
  props: {
    showEmpty: {
      type: Boolean,
      default: false,
    },
    showLoading: {
      type: Boolean,
      default: true,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    imgSrc: {
      type: String,
      default: "../../static/images/icon_empty_01.png",
    },
    emptyPaddingTop: {
      type: Number,
      default: 0, // 单位rpx
    },
    emptyHint: {
      type: String,
      default: "暂无内容~",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
