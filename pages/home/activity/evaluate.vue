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
        :showEmpty="!comments.length"
        :showLoading="showLoading"
        :finished="finished"
      >
        <view class="flex-col">
          <EvaluateItem
            v-for="(item, index) in comments"
            :key="index"
            :avatar="item.avatar"
            :name="item.name"
            :date="item.date"
            :overallRating="item.overallRating"
            :satisfactionLevelRating="item.satisfactionLevelRating"
            :professionalSkillRating="item.professionalSkillRating"
            :serviceAttitudeRating="item.serviceAttitudeRating"
            :content="item.content"
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
import { commentList } from "../../../mock/commentList";

export default {
  components: { ListContainer, NavBar, EvaluateItem },
  props: {},
  data() {
    return {
      title: "评价列表",
      showEmpty: false,
      showLoading: false,
      finished: false,
      comments: [],
    };
  },

  methods: {},
  mounted() {
    this.comments = commentList;
  },
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
