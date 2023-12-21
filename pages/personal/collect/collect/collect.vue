<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <FjSticky v-bind:customNavHeight="80"
      ><u-tabs
        class="line-tabs"
        :activeStyle="{
          color: '#030305',
          fontWeight: '700',
        }"
        :inactiveStyle="{
          color: '#a7a7a7',
        }"
        lineHeight="20rpx"
        lineWidth="64rpx"
        :scrollable="false"
        :list="list"
      ></u-tabs
    ></FjSticky>
    <view class="flex-col mt-22">
      <scroll-view :scroll-y="true">
        <list-container
          :showEmpty="!items.length"
          :showLoading="showLoading"
          emptyHint="暂无内容~"
          :finished="finished"
          imgSrc="/static/images/icon_empty_reseller.png"
        >
          <view class="flex-col">
            <CollectItem class="list-item item-top" v-for="(item, index) in items" :key="index"></CollectItem>
          </view>
        </list-container>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import CollectItem from '../../../../pages/personal/collect/components/CollectItem/CollectItem.vue';
  import FjSticky from '@/components/FjSticky.vue';
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { CollectItem, FjSticky, ListContainer, NavBar },
    props: {},
    data() {
      return {
        title: '我的收藏',
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
        showLoading: false,
        finished: false,
        items: [null, null, null, null,null, null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .list-item {
      &:first-child {
        margin-top: 0;
      }
    }
    .item-top {
      margin-top: 32rpx;
    }


  .line-tabs {
    /deep/ .u-tabs {
      padding: 0 14rpx;
      background-color: #ffffff;
    }

    /deep/ .u-tabs__wrapper__nav__item {
      height: 36px;
    }

    /deep/ .u-tabs__wrapper__nav__line {
      background: linear-gradient(90deg, #e9b81b 0%, #e9b81b00 97.2%) !important;
      opacity: 0.7 !important;
      border-radius: 10rpx !important;
      bottom: 12rpx !important;
    }
  }
  }
</style>
