<template>
  <view class="flex-col page">
    <uni-nav-bar
      :border="false"
      :status-bar="true"
      height="88rpx"
      left-icon="left"
      title="服务分类"
      @clickLeft="back"
    />
    <view class="flex-col flex-1 content">
      <view class="flex-col justify-start carousel">
        <view class="flex-col justify-start items-center banner-image-wrapper">
          <image
            class="banner-image"
            src="../../static/mock/list-page-banner.png"
          />
        </view>
      </view>
      <view class="flex-col">
        <u-tabs
          lineColor="#b09053"
          lineWidth="52rpx"
          lineHeight="4rpx"
          :activeStyle="{
            color: '#030305',
            fontSize: '24rpx',
            fontFamily: 'PingFang SC',
            lineHeight: '34rpx',
          }"
          :inactiveStyle="{
            fontSize: '24rpx',
            fontFamily: '苹方',
            lineHeight: '34rpx',
            color: '#6c6c6c',
          }"
          itemStyle="padding-left: 0; padding-right: 0; height:72rpx"
          :scrollable="false"
          :list="list"
        ></u-tabs>
        <view class="scroll-view">
          <view class="mt-12 flex-row tabs-content">
            <view class="flex-col self-start relative left-list">
              <ShopItem
                class="mt-12 list-item"
                v-for="(item, index) in items"
                :key="index"
                :image="item.image"
                :title="item.title"
                :tags="item.tags"
                :price="item.price"
                :buyer="item.buyer"
              ></ShopItem>
            </view>
            <view class="ml-16 flex-col right-list">
              <ShopItem
                class="mt-12 list-item"
                v-for="(item, index) in items_1"
                :key="index"
                :image="item.image"
                :title="item.title"
                :tags="item.tags"
                :price="item.price"
                :buyer="item.buyer"
              ></ShopItem>
            </view>
          </view>
          <view class="flex-col justify-start items-center loading-wrapper">
            <text
              v-if="status === 'loading'"
              class="load-more-font load-more-text"
              >加载中~</text
            >
            <text v-else class="load-more-font load-more-text"
              >没有更多数据啦</text
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ShopItem from "../../components/ShopItem.vue";
const items = [
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },

  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
];
const items_1 = [
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
  {
    image:
      "https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f994f8347e00b001139c3d4/6564419acc0204001240f4ec/17010692430820111285.png",
    title: "厨房定制收纳服务厨房定制收纳服务",
    tags: ["新品上市", "好评推荐", "新客优选"],
    price: 200,
    buyers: 100,
  },
];

export default {
  components: {
    ShopItem,
  },
  props: {},
  data() {
    return {
      status: "loadmore",
      page: 0,
      list: [
        {
          name: "全部",
        },
        {
          name: "单区收纳",
        },
        {
          name: "全屋收纳",
        },
        {
          name: "卧室收纳",
        },
        {
          name: "衣柜收纳",
        },
      ],
      items: [...items],
      items_1: [...items_1],
    };
  },
  onReachBottom() {
    if (this.page >= 3) return;
    this.status = "loading";
    this.page = ++this.page;

    setTimeout(() => {
      this.items = [...this.items, ...items];
      this.items_1 = [...this.items_1, ...items_1];

      if (this.page >= 3) this.status = "nomore";
      else this.status = "loading";
    }, 1500);
  },

  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>

<style scoped lang="css">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow: hidden;
  height: 100vh;
}

.content {
  padding-bottom: 8rpx;
  max-height: calc(100% - 88rpx);
  overflow-y: hidden;
}

.carousel {
  padding-top: 16rpx;
  background-color: #ffffff;
}

.banner-image-wrapper {
  margin: 0 32rpx;
}

.banner-image {
  width: 92vw;
  height: 26vw;
}

.scroll-view {
  height: calc(100vh - 500rpx);
  overflow-y: scroll;
}

.tabs-content {
  padding: 0 32rpx;
}

.left-list {
  flex: 1 1 330rpx;
}

.list-item {
  position: relative;
}

.list-item:first-child {
  margin-top: 0;
}

.load-more-font {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 24rpx;
  color: #a7a7a7;
}

.right-list {
  flex: 1 1 330rpx;
}

.loading-wrapper {
  padding: 40rpx 0;
}

.load-more-text {
  font-size: 26rpx;
  line-height: 26rpx;
}
</style>
