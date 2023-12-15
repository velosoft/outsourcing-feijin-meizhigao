<template>
  <view class="flex-col page">
    <NavBar
      :hasBack="true"
      :title="title"
      :fixed="true"
      :isShow="true"
      background="#ffffff"
    ></NavBar>
    <view class="flex-col flex-1 relative group_11">
      <view class="flex-col justify-start items-center ai-background-image_2">
        <image
          class="shrink-0 ai-background-image"
          src="/static/images/17021047433209292544.png"
        />
      </view>
      <FjSticky>
        <u-tabs
          class="yellow-line-tabs"
          :activeStyle="{
            color: '#030305',
            fontWeight: '700',
          }"
          :inactiveStyle="{
            color: '#a7a7a7',
          }"
          :list="tabs"
        >
        </u-tabs>
      </FjSticky>
      <list-container
        class="group_7"
        :showEmpty="showEmpty"
        :showLoading="showLoading"
        :finished="finished"
      >
        <view class="flex-col group_6">
          <CouponItem
            class="list-item group_5"
            v-for="(item, index) in items"
            :key="index"
          ></CouponItem>
        </view>
      </list-container>
      <view class="flex-col justify-start items-center image-wrapper pos_4">
        <image
          class="ai-outflow"
          src="/static/images/17021047432156371229.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
import CouponItem from "./components/CouponItem.vue";
import FjSticky from "@/components/FjSticky.vue";
import ListContainer from "@/components/ListContainer/ListContainer.vue";
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  components: { CouponItem, FjSticky, ListContainer, NavBar },
  props: {},
  data() {
    return {
      title: "领券中心",
      tabs: [
        {
          name: "全部",
        },
        {
          name: "满减券",
        },
        {
          name: "无门槛优惠券",
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
.ml-29 {
  margin-left: 58rpx;
}
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group_11 {
  padding: 42rpx 0 322rpx;
  overflow-y: auto;
}
.ai-background-image_2 {
  margin: 0 32rpx;
  overflow: hidden;
  border-radius: 16rpx;
  height: 232rpx;
}
.ai-background-image {
  width: 100%;
  height: 100%;
}
.font {
  font-size: 32rpx;
  font-family: 苹方;
  line-height: 29.7rpx;
  color: #a7a7a7;
}
.group_7 {
  margin-top: 24rpx;
}
.group_6 {
  margin: 0 32rpx;
}
.list-item:first-child {
  margin-top: 0;
}
.group_5 {
  margin-top: 20rpx;
}
.image-wrapper {
  padding: 26rpx 0;
  background-color: #030305;
  border-radius: 50%;
  width: 108rpx;
}
.pos_4 {
  position: absolute;
  right: 32rpx;
  top: 1290rpx;
}
.ai-outflow {
  width: 56rpx;
  height: 56rpx;
}
.yellow-line-tabs {
  /deep/ .u-tabs {
    padding: 33rpx 32rpx 33rpx;
  }

  /deep/ .u-tabs__wrapper__nav__item {
    justify-content: flex-start !important;
    padding-left: 0;
    padding-right: 30rpx;
    height: unset !important;

    .u-tabs__wrapper__nav__item__text {
      font-size: 32rpx !important;
      line-height: 32rpx !important;
    }
  }

  /deep/ .u-tabs__wrapper__nav__line {
    opacity: 0.7 !important;
    background-image: linear-gradient(
      90deg,
      #e9b81b 0%,
      #e9b81b00 97.2%
    ) !important;
    border-radius: 14rpx !important;
    height: 20rpx !important;
    width: 64rpx !important;
    bottom: 0 !important;
    // transform: unset!important;
    background-color: unset !important;
  }
}
</style>
