<template>
  <PopupWithButton title="优惠券" buttonText="关闭" @click="onConfirm">
    <view class="flex-col justify-start wrap">
      <scroll-view :scroll-y="true" class="scroll-height">
        <list-container
          :showEmpty="!items.length"
          :showLoading="showLoading"
          :finished="finished"
          imgSrc="/static/images/icon_empty_coupon.png"
        >
          <view class="flex-col">
            <PopCouponItem class="list-item mt-12" v-for="(item, index) in items" :key="index" :couponItem="couponItem"></PopCouponItem>
          </view>
        </list-container>
      </scroll-view>
    </view>
  </PopupWithButton>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import PopCouponItem from './PopCouponItem.vue';
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { ListContainer, PopCouponItem, PopupWithButton },
    props: {},
    data() {
      return {
        showEmpty: '! items.length',
        showLoading: false,
        finished: false,
        items: [null, null, null],
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
    padding: 56rpx 0;
    .scroll-height{
        height: 644rpx;
    }
    .list-item {
      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>
