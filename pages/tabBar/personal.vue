<template>
  <view class="flex-col page">
    <view class="flex-col flex-1 body">
      <view class="flex-col justify-start carousel">
        <view
          class="flex-col justify-start items-center a-i-background-image-wrapper_1"
        >
          <image
            class="a-i-background-image"
            src="https://dev.ft.velosoft.cn/api/image?token=6564c3e6cc0204001241016e&name=9e679835f4a2e239875a79bfc773b941.png"
          />
        </view>
      </view>
      <view class="flex-col">
        <u-tabs
          class="tabs-header"
          lineColor="#b09053"
          lineWidth="52rpx"
          lineHeight="4rpx"
          :activeStyle="{
            color: '#030305',
            fontSize: '24rpx',
            fontFamily: 'PingFang SC',
            lineHeight: '24rpx',
          }"
          :inactiveStyle="{
            fontSize: '24rpx',
            fontFamily: '苹方',
            lineHeight: '24rpx',
            color: '#6c6c6c',
          }"
          :list="list"
        ></u-tabs>
        <view class="mt-12 flex-row tabs_content">
          <view class="flex-col self-start relative group_6">
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
          <view class="ml-16 flex-col group_7">
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
      </view>
      <view class="flex-col justify-start items-center loading-wrapper">
        <text class="font_10 text_35">加载中~</text>
      </view>
    </view>
  </view>
</template>

<script>
import ShopItem from "../../components/ShopItem.vue";

export default {
  components: {
    ShopItem,
  },
  props: {},
  data() {
    return {
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
      items: [
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
      ],
      items_1: [
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
      ],
    };
  },

  methods: {},
};
</script>

<style scoped lang="css">
.page {
  background-color: #f8f8f8;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.body {
  padding-bottom: 8rpx;
  overflow-y: auto;
}

.carousel {
  background-color: #ffffff;
}

.a-i-background-image-wrapper_1 {
  margin: 0 32rpx;
}

.a-i-background-image {
  width: 92vw;
  height: 26.4vw;
}

.tabs-header {
  background-color: #ffffff;
}

.tabs_content {
  padding: 0 32rpx;
}

.group_6 {
  flex: 1 1 330rpx;
}

.list-item {
  position: relative;
}

.list-item:first-child {
  margin-top: 0;
}

.font_10 {
  font-size: 24rpx;
  font-family: 苹方;
  line-height: 24rpx;
  color: #a7a7a7;
}

.group_7 {
  flex: 1 1 330rpx;
}

.loading-wrapper {
  padding: 40rpx 0;
}

.text_35 {
  font-size: 26rpx;
  line-height: 26rpx;
}
</style>
