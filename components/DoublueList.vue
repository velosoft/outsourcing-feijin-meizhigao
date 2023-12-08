<template>
  <view class="flex-col view">
    <view class="flex-col justify-start double-list-view">
      <view class="flex-row">
        <view class="flex-col justify-start left-list">
          <ShopItem
            v-for="(item, index) in itemsLeft"
            :key="index"
            :image="item.image"
            :title="item.title"
            :tags="item.tags"
            :price="item.price"
            :buyer="item.buyer"
          ></ShopItem>
        </view>
        <view class="flex-col justify-start right-list ml-15">
          <ShopItem
            class="shop-relative"
            v-for="(item, index) in itemsRight"
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
  </view>
</template>

<script>
import ShopItem from "./ShopItem.vue";

export default {
  components: { ShopItem },
  props: {
    items: { type: Array, default: () => [] },
  },
  data() {
    return {
      itemsLeft: [],
      itemsRight: [],
    };
  },

  watch: {
    items: {
      immediata: true,
      handler(newVal, olderVal) {
        this.spliceData(newVal);
      },
      deep: true,
    },
  },

  created(){
    this.spliceData(this.items)
  },

  methods: {
    spliceData(val) {
      val.forEach((item, index) => {
        if (index % 2 == 1) {
          this.itemsLeft.push(item);
        } else {
          this.itemsRight.push(item);
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.ml-15 {
  margin-left: 30rpx;
}
.view {
  padding: 0 30rpx 8rpx 30rpx;
  background-color: #f8f8f8;
  .double-list-view {
    padding: 24rpx 0 24rpx;
    .left-list {
      flex: 1 1 330rpx;
    }
    .right-list {
      flex: 1 1 330rpx;
      .shop-relative {
        position: relative;
      }
    }
  }
}
</style>
