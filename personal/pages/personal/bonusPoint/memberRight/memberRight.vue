<template>
  <view class="height-full flex-col page">
    <nav-bar :title="title" :fixed="true" :isShow="true" background="#ffffff"></nav-bar>
    <view class="flex-col container flex-1">
      <member-right-grid class="relative"></member-right-grid>
      <member-right-description class="mt-10"></member-right-description>
    </view>
  </view>
</template>

<script>
  import MemberRightDescription from '@/personal/pages/personal/bonusPoint/components/MemberRightDescription/MemberRightDescription.vue';
  import MemberRightGrid from '@/personal/pages/personal/bonusPoint/components/MemberRightGrid/MemberRightGrid.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { MemberRightDescription, MemberRightGrid, NavBar },
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
    height: 100%;
    overflow-y: hidden;
    .container {
      padding: 24rpx 24rpx 0;
      overflow-y: auto;
    }
  }
</style>
