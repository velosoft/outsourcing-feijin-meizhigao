<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col flex-1 container">
      <list-container
        :showEmpty="showEmpty"
        :showLoading="showLoading"
        :finished="finished"
      >
        <view class="flex-col">
          <EvaluateItem
            v-for="(item, index) in items"
            :key="index"
            :item="item"
          />
        </view>
      </list-container>
    </view>
  </view>
</template>

<script>
import ListContainer from "../../../components/ListContainer/ListContainer.vue";
import NavBar from "../../../components/NavBar/NavBar.vue";
import EvaluateItem from "./components/EvaluateItem.vue";

export default {
  components: { ListContainer, NavBar, EvaluateItem },
  props: {},
  data() {
    return {
      title: "评价列表",
      showEmpty: false,
      showLoading: false,
      finished: false,
      items: [null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .container {
    padding: 24rpx 20rpx 48rpx;
  }
}
</style>
