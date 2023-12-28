<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-row flex-auto main">
      <view class="scroll-wrapper">
        <view class="scroll-placeholder" />
        <scroll-view :scroll-y="true" class="flex-col stages">
          <view
            class="stage"
            :class="{ 'stage-active': stage === item }"
            v-for="(item, index) in stages"
            :key="index"
            @click="onChangeStage(item)"
          >
            <text>{{ item }}</text>
          </view>
        </scroll-view>
      </view>
      <view class="flex-col flex-auto list-main">
        <u-tabs
          class="tabs-yellow-line-14"
          :list="list"
          lineWidth="104rpx"
          :activeStyle="{ color: '#111111' }"
          :inactiveStyle="{ color: '#9C9C9F' }"
          @change="onChangeTab"
        ></u-tabs>
        <list-container
          :showEmpty="!items.length"
          :showLoading="showLoading"
          emptyHint="暂无更多~"
          :emptyPaddingTop="320"
          :finished="finished"
          imgSrc="/myOrder/static/images/icon_log_empty.png"
          class="flex-auto relative list-container"
        >
          <view class="flex-col list">
            <service-log-item class="list-item mt-8" v-for="(item, index) in items" :key="index"></service-log-item>
          </view>
        </list-container>
      </view>
    </view>
  </view>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import ServiceLogItem from '@/myOrder/pages/myOrder/components/ServiceLogItem/ServiceLogItem.vue';

  export default {
    components: { ListContainer, NavBar, ServiceLogItem },
    props: {},
    data() {
      return {
        title: '服务日志',
        stages: [
          '测量阶段',
          '设计阶段',
          '服务阶段',
          '其他阶段 1',
          '其他阶段 2',
          '其他阶段 3',
          '其他阶段 4',
          '其他阶段 5',
          '其他阶段 6',
          '其他阶段 7',
          '其他阶段 8',
          '其他阶段 9',
          '其他阶段 10',
          '其他阶段 11',
          '其他阶段 12',
        ],
        list: [
          {
            name: '上门拍照',
          },
          {
            name: '收纳区域',
          },
        ],
        stage: '测量阶段',
        showLoading: false,
        finished: false,
        items: [null, null, null, null, null, null],
      };
    },

    methods: {
      onChangeStage(stage) {
        this.stage = stage;
      },
      onChangeTab(val) {},
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    font-family: 苹方;
  }
  .main {
    overflow: hidden;
  }

  .list-main {
    padding-bottom: 60rpx;
  }
  .scroll-wrapper {
    width: 192rpx;
    background-color: #ffffff;
    padding-bottom: 60rpx;
  }
  .scroll-placeholder {
    height: 72rpx;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: content-box;
  }
  .stages {
    height: calc(100% - 72rpx);
  }
  .stage {
    height: 110rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    line-height: 40rpx;
    color: #6d6d6d;
  }
  .stage.stage-active {
    background-color: #f0f0f0;
    color: #b09053;
    font-weight: 500;
  }
  .list-container {
    overflow: auto;
    border-top: 1px solid #e5e5e5;

    /deep/ .emptyComp {
      min-height: 100rpx;

      image {
        width: 330rpx !important;
        height: 184rpx !important;
      }
      text {
        color: #111111;
      }
    }
  }
  .list {
    padding: 16rpx 16rpx 0;
  }
  .list-item:first-child {
    margin-top: 0;
  }
</style>
