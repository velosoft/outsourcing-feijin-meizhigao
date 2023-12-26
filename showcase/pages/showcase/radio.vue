<template>
  <!-- 
    设计稿原页面
    https://dev.ft.velosoft.cn/projects/657a78796e48dd0011eab2b4/pages/657d4342d6bce000114cf3a9 
  -->
  <view class="flex-col page">
    <NavBar class="header" :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col justify-start flex-1 group_3">
      <u-radio-group class="group_10">
        <view class="flex-col justify-start group_11">
          <list-container :showEmpty="showEmpty" :showLoading="showLoading" :finished="finished">
            <view class="flex-col">
              <view class="flex-col section_3 list-item mt-12" v-for="(item, index) in items" :key="index">
                <view class="flex-col">
                  <text class="self-start font text_3">东宏国际广场</text>
                  <text class="self-start font_3 mt-10">广州市天河区天河中山大道190号</text>
                  <view class="flex-row items-center self-stretch mt-10">
                    <text class="font_3">张三</text>
                    <text class="font_3 ml-20">15812345678</text>
                  </view>
                </view>
                <view class="flex-row justify-between items-center mt-40">
                  <u-radio class="group_6" label="设为默认地址" activeColor="#b09053"></u-radio>
                  <view class="flex-row group_4">
                    <image
                      class="image_8"
                      src="https://dev.ft.velosoft.cn/api/image?token=657f9f38d6bce000114cfef8&name=a84e6cd110b31326ac68030d99e1bfc7.png"
                    />
                    <image
                      class="image_1 ml-28"
                      src="https://dev.ft.velosoft.cn/api/image?token=657f9f38d6bce000114cfef8&name=7b8a3c1b82ba61a7a9ea353a03083fd8.png"
                    />
                  </view>
                </view>
              </view>
            </view>
          </list-container>
        </view>
      </u-radio-group>
      <view class="flex-col justify-start fixed group_9">
        <view class="flex-col justify-start items-center button text-wrapper">
          <text class="font text_7">+ 新增收货地址</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import ListContainer from '@/components/ListContainer/ListContainer.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { ListContainer, NavBar },
    props: {},
    data() {
      return {
        title: '',
        showEmpty: false,
        showLoading: false,
        finished: false,
        items: [null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .header {
      position: relative;
    }
    .group_3 {
      padding: 24rpx 0 792rpx;
      overflow-y: auto;
      .group_10 {
        margin: 0 24rpx;
        .group_11 {
          width: 100%;
          .section_3 {
            padding: 32rpx 28rpx;
            background-color: #ffffff;
            border-radius: 16rpx;
            .text_3 {
              font-size: 32rpx;
              line-height: 32rpx;
            }
            .font_3 {
              font-size: 24rpx;
              line-height: 24rpx;
              color: #8c8f95;
            }
            .group_6 {
              align-self: stretch;
            }
            .group_4 {
              margin-right: 8rpx;
              .image_8 {
                width: 30rpx;
                height: 30rpx;
              }
              .image_1 {
                width: 32rpx;
                height: 35rpx;
              }
            }
          }
          .list-item {
            &:first-child {
              margin-top: 0;
            }
          }
        }
      }
      .fixed {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 60rpx;
        .button {
          margin: 0 32rpx;
          .text_7 {
            color: #ffffff;
          }
        }
        .text-wrapper {
          padding: 24rpx 0 40rpx;
          background-color: #000000;
          border-radius: 44rpx;
          width: 690rpx;
        }
      }
      .group_9 {
        width: 750rpx;
      }
      .font {
        font-size: 30rpx;
        line-height: 30rpx;
        font-weight: 700;
        color: #111111;
      }
    }
  }
</style>
