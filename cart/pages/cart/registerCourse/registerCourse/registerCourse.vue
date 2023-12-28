<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col group">
      <CFCard title="报名信息">
        <view class="flex-col card-content">
          <CFField
            class="field-required"
            label="姓名"
            placeholder="请输入"
            inputAlign="right"
            :border="true"
          ></CFField>
          <CFField
            class="field-required"
            label="手机号"
            placeholder="请输入"
            inputAlign="right"
            :border="true"
          ></CFField>
          <view class="flex-row tips-content items-center">
            <text class="tips-label">注：</text>
            <text class="tips-label">报名成功后由平台工作人员联系，请保持电话通畅~</text>
          </view>
        </view>
      </CFCard>
      <GoodsCard class="mt-10" :goodsCard="goodsCard"></GoodsCard>
      <SubmitInfo class="mt-10" :submitData="submitData"></SubmitInfo>
    </view>
    <CartBottomPayBtn :goodsPrice="goodsPrice"></CartBottomPayBtn>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import CFField from '@/components/Field/Field';
  import CartBottomPayBtn from '@/cart/pages/cart/components/CartBottomPayBtn/CartBottomPayBtn.vue';
  import GoodsCard from '@/cart/pages/cart/components/GoodsCard/GoodsCard.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import SubmitInfo from '@/cart/pages/cart/components/SubmitInfo/SubmitInfo.vue';

  export default {
    components: { CFCard, CFField, CartBottomPayBtn, GoodsCard, NavBar, SubmitInfo },
    props: {},
    data() {
      return {
        goodsCard: {},
        submitData: {},
        goodsPrice: {},
        title: '报名课程',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    .group {
      padding: 20rpx;
      .card-content {
        padding-top: 36rpx;
        .tips-content {
          margin-top: 32rpx;
          padding: 16rpx;
          background-color: #f8f2ef;
          border-radius: 8rpx;
          .tips-label {
            font-size: 24rpx;
            font-family: 苹方;
            line-height: 24rpx;
            color: #b09053;
          }
        }
      }
    }
  }
</style>
