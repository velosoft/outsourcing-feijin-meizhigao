<template>
  <popup-with-button class="pop-wrapper" title="优惠券" buttonText="关闭" @click="onConfirm">
    <view class="flex-col justify-start wrap">
      <scroll-view :scroll-y="true" class="scroll-height">
        <list-container
          :showEmpty="!items.length"
          :showLoading="showLoading"
          :finished="finished"
          imgSrc="/static/images/icon_empty_coupon.png"
        >
          <view class="flex-col">
            <pop-coupon-item
              class="list-item mt-10"
              v-for="(item, index) in items"
              :key="index"
              :couponItem="couponItem"
            ></pop-coupon-item>
          </view>
        </list-container>
      </scroll-view>
    </view>
  </popup-with-button>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import PopCouponItem from './PopCouponItem.vue';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    options: {
      styleIsolation: 'shared',
    },
    components: { ListContainer, PopCouponItem, PopupWithButton },
    props: {},
    data() {
      return {
        showLoading: false,
        finished: false,
        items: [null, null, null, null, null, null],
      };
    },

    methods: {
      onConfirm() {
        // 事件处理方法
        this.$emit('confirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 36rpx 0 60rpx;
    .scroll-height {
      height: 644rpx;
    }
    .list-item {
      &:first-child {
        margin-top: 0;
      }
    }
  }

  .pop-wrapper {
    /deep/ .text_13 {
      font-size: 36rpx;
    }

    /deep/ .root {
      padding: 36rpx 32rpx 40rpx !important;
    }
  }
</style>
