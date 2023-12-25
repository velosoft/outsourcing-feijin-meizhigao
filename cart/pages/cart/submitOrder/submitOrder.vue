<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col flex-1 group">
      <HeadAddressCard :addressDetial="addressDetial"></HeadAddressCard>
      <GoodsCard class="mt-12 mt-10" :goodsCard="goodsCard"></GoodsCard>
      <SubmitInfo class="mt-12 mt-10" :submitData="submitData"></SubmitInfo>
    </view>
    <CartBottomPayBtn :goodsPrice="goodsPrice"></CartBottomPayBtn>
  </view>
</template>

<script>
  import CartBottomPayBtn from '@/cart/pages/cart/components/CartBottomPayBtn/CartBottomPayBtn.vue';
  import GoodsCard from '@/cart/pages/cart/components/GoodsCard/GoodsCard.vue';
  import HeadAddressCard from '@/cart/pages/cart/components/HeadAddressCard/HeadAddressCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import SubmitInfo from '@/cart/pages/cart/components/SubmitInfo/SubmitInfo.vue';

  export default {
    components: { CartBottomPayBtn, GoodsCard, HeadAddressCard, NavBar, SubmitInfo },
    props: {},
    data() {
      return {
        addressDetial: {},
        goodsPrice: {},
        submitData: {},
        goodsCard: {},
        title: '提交订单',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .group {
      padding: 20rpx;
    }
  }
</style>
