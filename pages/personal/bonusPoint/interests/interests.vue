<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col flex-1 container">
      <InterestsGrid class="section_1"></InterestsGrid>
      <InterestsDescription></InterestsDescription>
    </view>
  </view>
</template>

<script>
  import InterestsDescription from '../../../../pages/personal/bonusPoint/components/InterestsDescription/InterestsDescription.vue';
  import InterestsGrid from '../../../../pages/personal/bonusPoint/components/InterestsGrid/InterestsGrid.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { InterestsDescription, InterestsGrid, NavBar },
    props: {},
    data() {
      return {
        title: '权益说明',
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
      padding: 24rpx 24rpx 0;
      overflow-y: auto;
      .section_1 {
        position: relative;
      }
    }
  }
</style>