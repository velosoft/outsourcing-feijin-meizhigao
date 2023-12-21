<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col">
      <member-cover class="top-relative" :vipData="benifitInfoData"></member-cover>
      <view class="flex-col relative bottom">
        <swiper
          class="top-relative"
          v-bind:style="dySwiperStyle"
          v-bind:circular="true"
          previous-margin="40rpx"
          next-margin="40rpx"
        >
          <swiper-item v-for="(item, index) in items" :key="index">
            <view class="flex-col justify-start item-view">
              <collapse-card
                class="clp-swiper"
                :closedText="closedText"
                :openText="openText"
                :closedHeight="initSwiperHeight"
                :status="collapseStatus"
                iconSize="16rpx"
                @change="onChange"
              >
                <member-benefits-item :vipData="benifitInfoData"></member-benefits-item>
              </collapse-card>
            </view>
          </swiper-item>
        </swiper>
        <level-description class="mt-24" :vipData="benifitInfoData"></level-description>
      </view>
    </view>
  </view>
</template>

<script>
  import CollapseCard from '@/components/CollapseCard/CollapseCard';
  import LevelDescription from '@/pages/personal/member/components/LevelDescription/LevelDescription.vue';
  import MemberBenefitsItem from '@/pages/personal/member/components/MemberBenefitsItem/MemberBenefitsItem.vue';
  import MemberCover from '@/pages/personal/member/components/MemberCover/MemberCover.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { CollapseCard, LevelDescription, MemberBenefitsItem, MemberCover, NavBar },
    props: {},
    data() {
      return {
        initSwiperHeight: '256rpx',
        swiperHeight: '256rpx',
        collapseStatus: 'closed',
        benifitInfoData: '',
        title: '会员中心',
        closedText: '查看全部 8 项',
        openText: '收起',
        items: [{}, {}, {}],
      };
    },

    computed: {
      dySwiperStyle() {
        return `height: ${this.swiperHeight}`;
      },
    },

    methods: {
      onChange(e) {
        this.swiperHeight = e.height + 'px';
        this.collapseStatus = e.status;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .top-relative {
      position: relative;
      .item-view {
        padding: 0 8rpx;
        width: 100%;
      }
    }
    .bottom {
      margin-top: -488rpx;
    }
  }
</style>
