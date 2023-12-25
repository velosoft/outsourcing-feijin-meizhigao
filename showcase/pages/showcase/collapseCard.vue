<template>
  <view class="flex-col page">
    <NavBar
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col justify-start body">
      <CollapseCard />
    </view>
  </view>
</template>

<script>
import CollapseCard from "@/components/CollapseCard/CollapseCard";
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  components: { CollapseCard, NavBar },
  props: {},
  data() {
    return {
      title: "",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.page {
  background-color: #ffffff;
  .body {
    padding: 32rpx;
  }
  .fixed {
    position: fixed;
    left: 0rpx;
    top: 1330rpx;
    .button {
      bottom: 0rpx;
      margin: 0 32rpx;
    }
  }
  .group_4 {
    width: 100%;
  }
}
</style>
