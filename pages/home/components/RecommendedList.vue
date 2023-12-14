<template>
  <view class="flex-col recommended-list relative">
    <fj-sticky :customNavHeight="80">
      <view class="flex-col tabs-top">
        <u-tabs
          class="default-tabs"
          :scrollable="false"
          :list="tabList"
          lineWidth="20"
          lineHeight="6"
          lineColor="#b09053"
          :activeStyle="{
            color: '#030305',
            fontFamily: 'PingFangSC-Medium',
            transform: 'scale(1.05)',
          }"
          :inactiveStyle="{
            color: '#bcbcbc',
            fontFamily: '苹方',
            transform: 'scale(1)',
          }"
          @change="onChange"
        ></u-tabs>
      </view>
    </fj-sticky>

    <list-container
      :showEmpty="!list.length"
      :showLoading="true"
      :finished="nomore"
    >
      <double-list :items="list"></double-list>
    </list-container>
  </view>
</template>

<script>
import ListContainer from "@/components/ListContainer/ListContainer.vue";
import DoubleList from "@/components/DoubleList.vue";
import FjSticky from "@/components/FjSticky.vue";

export default {
  components: { ListContainer, DoubleList, FjSticky },
  props: {
    type: Number,
    list: Array,
    nomore: Boolean,
  },
  data() {
    return {
      tabList: [
        {
          name: "商品推荐",
        },
        {
          name: "服务推荐",
        },
        {
          name: "课程推荐",
        },
      ],
    };
  },

  methods: {
    onChange(val) {
      this.$emit("change", val.index);
    },
  },
};
</script>

<style scoped lang="less">
.ml-15 {
  margin-left: 30rpx;
}
.recommended-list {
  background-color: #f8f8f8;

  .tabs-top {
    margin-top: 16rpx;
    padding: 0 30rpx;
  }
}
.default-tabs {
  background-color: #f8f8f8;

  /deep/ .u-tabs__wrapper__nav__item {
    height: 36px;
    flex: 1 1 auto;
  }
}
</style>
