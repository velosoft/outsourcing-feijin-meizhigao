<template>
  <view class="flex-col page">
    <nav-bar
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></nav-bar>
    <view class="flex-col flex-1 container">
      <list-container
        :showEmpty="!comments.length"
        :showLoading="showLoading"
        :finished="finished"
      >
        <view class="flex-col">
          <comment-item
            v-for="(item, index) in comments"
            class="list-item"
            :key="index"
            :avatar="item.avatar"
            :name="item.name"
            :date="item.date"
            :overallRating="item.overallRating"
            :satisfactionLevelRating="item.satisfactionLevelRating"
            :professionalSkillRating="item.professionalSkillRating"
            :serviceAttitudeRating="item.serviceAttitudeRating"
            :content="item.content"
            :imageList="item.imageList"
          />
        </view>
      </list-container>
    </view>
  </view>
</template>

<script>
import ListContainer from "@/components/ListContainer/ListContainer.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import CommentItem from "./components/CommentItem.vue";
import { commentList } from "@/mock/commentList";

export default {
  components: { ListContainer, NavBar, CommentItem },
  props: {},
  data() {
    return {
      title: "评价列表",
      page: 1,
      comments: commentList,
      showLoading: true,
      finished: false,
    };
  },
  onReachBottom() {
    if (this.page >= 2) {
      this.finished = true;
      return;
    }
    this.finished = false;

    setTimeout(() => {
      this.comments = this.comments.concat(this.comments);
      this.page++;
    }, 1500);
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

  .list-item {
    margin-top: 20rpx;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
