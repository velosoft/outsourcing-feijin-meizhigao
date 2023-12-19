<template>
  <view class="flex-col justify-start relative wrap">
    <image class="image pos" src="../../../../../static/images/9e4caf641f4400a8e29347fd544857fc.png" />
    <view class="flex-col relative">
      <MemberLevel></MemberLevel>
      <view class="flex-row mt-98">
        <view class="shrink-0 section_5"></view>
        <MemberBenefitsItem class="ai-background-image-wrapper ml-10"></MemberBenefitsItem>
        <view class="shrink-0 section_5 ml-10"></view>
      </view>
    </view>
  </view>
</template>

<script>
  import MemberBenefitsItem from '../../../../../pages/personal/member/components/MemberBenefitsItem/MemberBenefitsItem.vue';
  import MemberLevel from '../../../../../pages/personal/member/components/MemberLevel/MemberLevel.vue';

  export default {
    components: { MemberBenefitsItem, MemberLevel },
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .wrap {
    padding: 96rpx 0 48rpx;
    height: 1120rpx;
    .image {
      width: 750rpx;
      height: 1120rpx;
    }
    .pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .section_5 {
      background-color: #ffffff;
      border-radius: 4rpx;
      width: 40rpx;
      height: 436rpx;
    }
    .ai-background-image-wrapper {
      flex: 1 1 0;
    }
  }
</style>