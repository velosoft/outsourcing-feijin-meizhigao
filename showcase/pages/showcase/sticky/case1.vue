<template>
  <view class="flex-col page">
    <nav-bar :title="title" :fixed="true" :isShow="true" background="#ffffff"></nav-bar>
    <view class="flex-col justify-start items-center image-wrapper">
      <image
        class="ai-background-image"
        src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=1acc02d9f2baa96413f25d1f589c70d5.png"
      />
    </view>
    <fj-sticky><u-tabs class="tabs" :list="tabsItems"></u-tabs></fj-sticky>
    <view class="flex-col group_4">
      <view class="flex-row waterfall">
        <view class="flex-col self-start group_5">
          <view class="flex-col waterfall-item_6">
            <image
              class="self-stretch image_7"
              src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=1ca3b399852ad645555471c7378fcd89.png"
            />
            <text class="self-start font_4 text_11">厨房定制收纳服务</text>
            <view class="flex-row self-stretch group_1 view">
              <view class="flex-col justify-start items-center text-wrapper_1">
                <text class="font_5 text_12">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_1 ml-5">
                <text class="font_5 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_1 ml-5">
                <text class="font_5 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center self-stretch group_1 view_2">
              <view class="flex-row items-center self-stretch group_10">
                <view class="flex-row items-center self-stretch group_11">
                  <text class="font_5">定金</text>
                  <view class="flex-row items-baseline group_12">
                    <text class="font_7 text_8">200</text>
                    <text class="font_8 text_9">￥</text>
                  </view>
                </view>
                <text class="font_9 ml-4">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
          <view class="flex-col waterfall-item_6 mt-12">
            <image
              class="self-stretch image_7"
              src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=83e1b67a4abf54688ceb59ea90993544.png"
            />
            <text class="self-start font_4 text_22 mt-12">厨房定制收纳服务</text>
            <view class="flex-row justify-between items-center self-stretch group_1 mt-12">
              <view class="flex-row items-center self-stretch group_10">
                <view class="flex-row items-center self-stretch group_11">
                  <text class="font_5">定金</text>
                  <view class="flex-row items-baseline group_12">
                    <text class="font_7 text_35">200</text>
                    <text class="font_8 text_15">￥</text>
                  </view>
                </view>
                <text class="font_9 ml-4">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
          <view class="flex-col waterfall-item_6 mt-12">
            <image
              class="self-stretch image_7"
              src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=c43c115be1a4abe4a8af2aff810e4e29.png"
            />
            <text class="self-start font_4 text_26">厨房定制收纳服务</text>
            <view class="flex-row self-stretch group_1 view_3">
              <view class="flex-col justify-start items-center text-wrapper_1">
                <text class="font_5 text_12">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_1 ml-5">
                <text class="font_5 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_1 ml-5">
                <text class="font_5 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center self-stretch group_1 view_2">
              <view class="flex-row items-center self-stretch group_10">
                <view class="flex-row items-center self-stretch group_11">
                  <text class="font_5">定金</text>
                  <view class="flex-row items-baseline group_12">
                    <text class="font_7 text_8">200</text>
                    <text class="font_8 text_9">￥</text>
                  </view>
                </view>
                <text class="font_9 ml-4">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
          <view class="flex-col waterfall-item_6 mt-12">
            <view class="flex-col">
              <image
                class="image_7"
                src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=14b0c82919af0835ec1e75190668ea29.png"
              />
              <text class="font_3 text_32 mt-8">厨房定制收纳服务厨房定制收纳服务</text>
            </view>
            <view class="flex-row group_1 mt-12">
              <view class="flex-col justify-start items-center relative group_14">
                <image
                  class="image_8"
                  src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=2aa57a43f27c097ca8c59704f6150ee8.png"
                />
                <text class="font_6 text_14 pos_8">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_2 ml-5">
                <text class="font_6 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_3 ml-5">
                <text class="font_6 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center group_1 mt-12">
              <view class="flex-row items-baseline">
                <text class="font_11 text_19">200</text>
                <text class="font_12 text_20">￥</text>
                <text class="font_13 text_21">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
        </view>
        <view class="flex-col group_6 ml-16">
          <view class="flex-col waterfall-item_6">
            <view class="flex-col">
              <image
                class="image_7"
                src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=241a338b0b790ea19b2742f94e7f5e18.png"
              />
              <text class="font_3 text_32 mt-8">厨房定制收纳服务厨房定制收纳服务</text>
            </view>
            <view class="flex-row group_1 mt-12">
              <view class="flex-col justify-start items-center relative group_8">
                <image
                  class="image_8"
                  src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=2aa57a43f27c097ca8c59704f6150ee8.png"
                />
                <text class="font_6 text_14 pos_5">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_2 ml-5">
                <text class="font_6 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_3 ml-5">
                <text class="font_6 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center group_1 mt-12">
              <view class="flex-row items-baseline">
                <text class="font_11 text_42">200</text>
                <text class="font_12 text_43">￥</text>
                <text class="font_13 text_21">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
          <view class="flex-col waterfall-item_6 mt-12">
            <view class="flex-col">
              <image
                class="image_7"
                src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=0187f75356989ec27d68ee51135f5207.png"
              />
              <text class="font_3 text_32 mt-8">厨房定制收纳服务厨房定制收纳服务</text>
            </view>
            <view class="flex-row group_1 mt-12">
              <view class="flex-col justify-start items-center relative group_8">
                <image
                  class="image_8"
                  src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=2aa57a43f27c097ca8c59704f6150ee8.png"
                />
                <text class="font_6 text_14 pos_6">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_2 ml-5">
                <text class="font_6 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_3 ml-5">
                <text class="font_6 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center group_1 mt-12">
              <view class="flex-row items-baseline">
                <text class="font_11 text_48">200</text>
                <text class="font_12 text_1">￥</text>
                <text class="font_13 text_21">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
          <view class="flex-col waterfall-item_6 mt-12">
            <image
              class="self-stretch image_7"
              src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=1b1364a3e828ff68786b9d04a2586412.png"
            />
            <text class="self-start font_4 text_36">厨房定制收纳服务</text>
            <view class="flex-row self-stretch group_1 view_4">
              <view class="flex-col justify-start items-center relative group_8">
                <image
                  class="image_8"
                  src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=2aa57a43f27c097ca8c59704f6150ee8.png"
                />
                <text class="font_6 text_14 pos_7">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_2 ml-5">
                <text class="font_6 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_3 ml-5">
                <text class="font_6 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center self-stretch group_1 view_2">
              <view class="flex-row items-baseline">
                <text class="font_11 text_37">200</text>
                <text class="font_12 text_38">￥</text>
                <text class="font_13 text_28">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
          <view class="flex-col waterfall-item_6 mt-12">
            <image
              class="self-stretch image_7"
              src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=d06e78bf8bc605b571df35eb4f5e0ec4.png"
            />
            <text class="self-start font_4 text_23">厨房定制收纳服务</text>
            <view class="flex-row self-stretch group_1 view_5">
              <view class="flex-col justify-start items-center relative group_15">
                <image
                  class="image_8"
                  src="https://dev.ft.velosoft.cn/api/image?token=65782ad6740f740012ac442e&name=2aa57a43f27c097ca8c59704f6150ee8.png"
                />
                <text class="font_6 text_14 pos_9">新品上市</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_2 ml-5">
                <text class="font_6 text_12">好评推荐</text>
              </view>
              <view class="flex-col justify-start items-center text-wrapper_3 ml-5">
                <text class="font_6 text_12">新客优选</text>
              </view>
            </view>
            <view class="flex-row justify-between items-center self-stretch group_1 view_2">
              <view class="flex-row items-baseline">
                <text class="font_11 text_33">200</text>
                <text class="font_12 text_27">￥</text>
                <text class="font_13 text_28">.00</text>
              </view>
              <text class="font_10">100人预约</text>
            </view>
          </view>
        </view>
      </view>
      <text class="self-center font_10 text_30 mt-16">加载中~</text>
    </view>
  </view>
</template>

<script>
  import FjSticky from '@/components/FjSticky.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { FjSticky, NavBar },
    props: {},
    data() {
      return {
        tabsItems: [
          {
            name: 'apple',
          },
          {
            name: 'orange',
          },
          {
            name: 'banana',
          },
        ],
        title: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .ml-5 {
    margin-left: 10rpx;
  }
  .page {
    background-color: #f8f8f8;
  }
  .image-wrapper {
    padding: 8rpx 0;
    background-color: #ffffff;
  }
  .ai-background-image {
    width: 92vw;
    height: 26.4vw;
  }
  .font_10 {
    font-size: 24rpx;
    font-family: PingFangSC;
    line-height: 24rpx;
    color: #a7a7a7;
  }
  .group_4 {
    padding: 24rpx 32rpx 48rpx;
  }
  .waterfall {
    align-self: stretch;
  }
  .group_5 {
    flex: 1 1 330rpx;
  }
  .waterfall-item_6 {
    padding-bottom: 48rpx;
    background-color: #ffffff;
    border-radius: 20rpx;
  }
  .image_7 {
    width: 330rpx;
    height: 330rpx;
  }
  .font_4 {
    font-size: 28rpx;
    font-family: PingFangSC;
    line-height: 28rpx;
    font-weight: 600;
    color: #111111;
  }
  .text_11 {
    margin-left: 8rpx;
    margin-top: 24rpx;
  }
  .group_1 {
    padding: 0 8rpx;
  }
  .view {
    margin-top: 32rpx;
  }
  .text-wrapper_1 {
    flex: 1 1 96rpx;
    padding-bottom: 8rpx;
    background-color: #fff1ed;
    border-radius: 4rpx;
  }
  .font_5 {
    font-size: 20rpx;
    font-family: PingFangSC;
    line-height: 20rpx;
    color: #bb3e0c;
  }
  .view_2 {
    margin-top: 16rpx;
  }
  .group_10 {
    width: 148rpx;
  }
  .group_11 {
    width: 110rpx;
  }
  .group_12 {
    width: 70rpx;
  }
  .font_7 {
    font-size: 32rpx;
    font-family: HarmonyOS_Sans_Bold;
    letter-spacing: -1.24rpx;
    line-height: 32rpx;
    color: #bb3e0c;
  }
  .text_8 {
    margin-left: 16rpx;
  }
  .font_8 {
    font-size: 20rpx;
    font-family: PingFangSC;
    line-height: 20rpx;
    font-weight: 600;
    color: #bb3e0c;
  }
  .text_9 {
    margin-left: -72rpx;
  }
  .font_9 {
    font-size: 20rpx;
    font-family: HarmonyOS Sans SC;
    line-height: 20rpx;
    font-weight: 700;
    color: #bb3e0c;
  }
  .text_22 {
    margin-left: 8rpx;
  }
  .text_35 {
    margin-left: 16rpx;
  }
  .text_15 {
    margin-left: -72rpx;
  }
  .text_26 {
    margin-left: 8rpx;
    margin-top: 24rpx;
  }
  .view_3 {
    margin-top: 32rpx;
  }
  .font_3 {
    font-size: 28rpx;
    font-family: PingFangSC;
    line-height: 40rpx;
    font-weight: 600;
    color: #111111;
  }
  .text_32 {
    margin: 0 8rpx;
  }
  .group_14 {
    flex: 1 1 96rpx;
  }
  .image_8 {
    width: 96rpx;
    height: 28rpx;
  }
  .font_6 {
    font-size: 20rpx;
    font-family: PingFangSC;
    line-height: 20rpx;
    color: #b09053;
  }
  .text_12 {
    text-transform: uppercase;
  }
  .text_14 {
    text-transform: uppercase;
    width: 82rpx;
  }
  .pos_8 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .text-wrapper_2 {
    flex: 1 1 96rpx;
    padding-bottom: 8rpx;
    background-color: #fffaf0;
    border-radius: 4rpx;
  }
  .text-wrapper_3 {
    flex: 1 1 96rpx;
    padding-bottom: 8rpx;
    background-color: #fffbf2;
    border-radius: 4rpx;
  }
  .font_11 {
    font-size: 32rpx;
    font-family: HarmonyOS_Sans_Bold;
    letter-spacing: -1.24rpx;
    line-height: 32rpx;
    color: #030305;
  }
  .text_19 {
    margin-left: 16rpx;
  }
  .font_12 {
    font-size: 20rpx;
    font-family: PingFangSC;
    line-height: 20rpx;
    font-weight: 600;
    color: #030305;
  }
  .text_20 {
    margin-left: -72rpx;
  }
  .font_13 {
    font-size: 20rpx;
    font-family: HarmonyOS Sans SC;
    line-height: 20rpx;
    font-weight: 700;
    color: #111111;
  }
  .text_21 {
    margin-left: 56rpx;
  }
  .group_6 {
    flex: 1 1 330rpx;
  }
  .group_8 {
    flex: 1 1 96rpx;
    height: 29.2rpx;
  }
  .pos_5 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .text_42 {
    margin-left: 16rpx;
  }
  .text_43 {
    margin-left: -72rpx;
  }
  .pos_6 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .text_48 {
    margin-left: 16rpx;
  }
  .text_1 {
    margin-left: -72rpx;
  }
  .text_36 {
    margin-left: 8rpx;
    margin-top: 24rpx;
  }
  .view_4 {
    margin-top: 32rpx;
  }
  .pos_7 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .text_37 {
    margin-left: 16rpx;
  }
  .text_38 {
    margin-left: -72rpx;
  }
  .text_28 {
    margin-left: 56rpx;
  }
  .text_23 {
    margin-left: 8rpx;
    margin-top: 24rpx;
  }
  .view_5 {
    margin-top: 32rpx;
  }
  .group_15 {
    flex: 1 1 96rpx;
  }
  .pos_9 {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .text_33 {
    margin-left: 16rpx;
  }
  .text_27 {
    margin-left: -72rpx;
  }
  .text_30 {
    font-size: 26rpx;
    line-height: 26rpx;
  }
</style>
