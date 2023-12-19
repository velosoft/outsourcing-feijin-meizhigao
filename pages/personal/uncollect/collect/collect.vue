<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col">
      <view class="flex-col line-tabs">
        <u-tabs :list="list"></u-tabs>
        <view class="flex-col justify-start flex-1">
          <scroll-view>
            <list-container :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
              <view class="flex-col flex-1">
                <CollectItem v-for="(item, index) in items" :key="index"></CollectItem>
              </view>
            </list-container>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import CollectItem from '../../../../pages/personal/uncollect/components/CollectItem/CollectItem.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { CollectItem, ListContainer, NavBar },
    props: {},
    data() {
      return {
        title: '',
        list: [
          {
            name: '商品',
          },
          {
            name: '服务',
          },
          {
            name: '课程',
          },
        ],
        showEmpty: false,
        showLoading: false,
        finished: false,
        items: [null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .line-tabs {
      overflow-x: hidden;
    }
  }
</style>