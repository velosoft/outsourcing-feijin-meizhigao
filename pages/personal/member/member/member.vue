<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col">
      <MemberSwiper></MemberSwiper>
      <LevelDescription></LevelDescription>
    </view>
  </view>
</template>

<script>
  import LevelDescription from '../../../../pages/personal/member/components/LevelDescription/LevelDescription.vue';
  import MemberSwiper from '../../../../pages/personal/member/components/MemberSwiper/MemberSwiper.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { LevelDescription, MemberSwiper, NavBar },
    props: {},
    data() {
      return {
        title: '会员中心',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
  }
</style>