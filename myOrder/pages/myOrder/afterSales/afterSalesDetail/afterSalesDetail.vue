<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col">
      <OrderStatusCard></OrderStatusCard>
      <view class="flex-col section_3">
        <AfterSaleProgressCard class="section_4"></AfterSaleProgressCard>
        <CFCard class="mt-12" title="售后信息">
          <view class="flex-col section_10 mt-8">
            <view class="flex-row items-start">
              <view class="flex-col justify-start items-center image-wrapper">
                <image
                  class="image_9"
                  src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=mock_1dae61f5b8b53166.png"
                />
              </view>
              <view class="flex-col flex-1 ml-10">
                <text class="self-start font_3 text_5">定制卧室收纳柜新疆包邮卧室床头</text>
                <view class="flex-row justify-between self-stretch mt-12">
                  <text class="font_4 text_6">按面积核算（元/m)</text>
                  <text class="font_4 text_7">x1</text>
                </view>
                <view class="flex-row items-baseline self-start group_6 mt-12">
                  <text class="font_1 text_9">￥</text>
                  <text class="text_8">200</text>
                  <text class="font_1 text_10">.00</text>
                </view>
              </view>
            </view>
            <view class="flex-col mt-24">
              <u-cell class="cell-in-white-card-weight" title="售后类型" value="客服介入" :border="false"></u-cell>
              <u-cell
                class="cell-in-white-card mt-14"
                title="售后单号"
                :value="202308876664449330"
                :border="false"
              ></u-cell>
              <u-cell
                class="cell-in-white-card mt-14"
                title="创建时间"
                value="2022-04-01 09:30:22"
                :border="false"
              ></u-cell>
              <u-cell class="cell-in-white-card mt-14" title="原订单" value="查看订单" :border="false">
                <view class="flex-row items-center group_9" slot="value">
                  <text class="font_5 text_11 text_15">查看订单</text>
                  <image
                    class="ai-outflow ml-6"
                    src="https://dev.ft.velosoft.cn/api/image?token=6588d7d6d6bce000114dac75&name=icon_golden_right_arrow.png"
                  />
                </view>
              </u-cell>
            </view>
          </view>
        </CFCard>
        <CFCard class="mt-12" title="售后进度">
          <view class="flex-col section_10 group_8">
            <u-steps direction="column">
              <view class="flex-col group_14 ml-8">
                <u-steps-item>
                  <OrderProcessCard title="客服已处理" slot="desc">
                    <CFCard class="gray-card mt-10">
                      <view class="flex-col">
                        <u-cell
                          class="cell-in-gray-card"
                          title="订单时间"
                          value="2024-05-14 12:00:00"
                          :border="false"
                        ></u-cell>
                        <u-cell
                          class="cell-in-gray-card mt-14"
                          title="处理结果"
                          value="更换测试人员，已安排张三继续执行…"
                          :border="false"
                        ></u-cell>
                      </view>
                    </CFCard>
                  </OrderProcessCard>
                </u-steps-item>
                <u-steps-item class="mt-14">
                  <OrderProcessCard title="审核通过" slot="desc">
                    <CFCard class="gray-card section_10 mt-8">
                      <view class="flex-col">
                        <u-cell
                          class="cell-in-gray-card"
                          title="订单时间"
                          value="2024-05-14 12:00:00"
                          :border="false"
                        ></u-cell>
                        <u-cell
                          class="cell-in-gray-card group_8"
                          title="审核备注"
                          value="已安排客服介入"
                          :border="false"
                        ></u-cell>
                      </view>
                    </CFCard>
                  </OrderProcessCard>
                </u-steps-item>
                <u-steps-item class="mt-14">
                  <OrderProcessCard title="提交申请" slot="desc">
                    <CFCard class="gray-card section_10 mt-8">
                      <view class="flex-col">
                        <u-cell
                          class="cell-in-gray-card"
                          title="订单时间"
                          value="2024-05-14 12:00:00"
                          :border="false"
                        ></u-cell>
                        <u-cell
                          class="cell-in-gray-card group_8"
                          title="申请原因"
                          value="需要客服介入"
                          :border="false"
                        ></u-cell>
                        <u-cell
                          class="cell-in-gray-card group_8"
                          title="申请理由"
                          value="需要客服介入"
                          :border="false"
                        ></u-cell>
                      </view>
                    </CFCard>
                  </OrderProcessCard>
                </u-steps-item>
              </view>
            </u-steps>
            <view class="flex-col justify-start items-end group_8">
              <view class="flex-col justify-start items-center text-wrapper">
                <text class="font_5 text_19">取消售后</text>
              </view>
            </view>
          </view>
        </CFCard>
      </view>
    </view>
  </view>
</template>

<script>
  import AfterSaleProgressCard from '../../../../pages/myOrder/afterSales/components/AfterSaleProgressCard/AfterSaleProgressCard.vue';
  import CFCard from '@/components/Card/Card';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import OrderProcessCard from '@/components/OrderProcessCard';
  import OrderStatusCard from '../../../../pages/myOrder/components/OrderStatusCard/OrderStatusCard.vue';

  export default {
    components: { AfterSaleProgressCard, CFCard, NavBar, OrderProcessCard, OrderStatusCard },
    props: {},
    data() {
      return {
        title: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .section_3 {
      margin-top: -48rpx;
      padding: 24rpx;
      background-color: #f4f4f4;
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      .section_4 {
        position: relative;
      }
      .section_10 {
        align-self: stretch;
        .image-wrapper {
          width: 180rpx;
          .image_9 {
            border-radius: 16rpx;
            width: 180rpx;
            height: 180rpx;
          }
        }
        .font_3 {
          font-size: 28rpx;
          line-height: 40rpx;
          color: #8c8f95;
        }
        .text_5 {
          color: #111111;
          font-weight: 500;
        }
        .font_4 {
          font-size: 24rpx;
          line-height: 34rpx;
          color: #111111;
        }
        .text_6 {
          color: #8c8f95;
          font-size: 26rpx;
          line-height: 36rpx;
        }
        .text_7 {
          color: #828385;
          font-size: 26rpx;
          line-height: 36rpx;
        }
        .group_6 {
          padding: 0 4rpx;
          .font_1 {
            font-size: 20rpx;
            color: #111111;
          }
          .text_9 {
            font-weight: 500;
            line-height: 28rpx;
          }
          .text_8 {
            color: #111111;
            font-size: 32rpx;
            line-height: 36rpx;
          }
          .text_10 {
            margin-left: 4rpx;
            line-height: 24rpx;
          }
        }
        .group_9 {
          margin-right: 16rpx;
          .text_11 {
            text-transform: uppercase;
          }
          .text_15 {
            font-size: 26rpx;
            line-height: 36rpx;
          }
          .ai-outflow {
            width: 8rpx;
            height: 14rpx;
          }
        }
        .group_14 {
          flex: 1 1 0;
        }
        .font_5 {
          font-size: 24rpx;
          line-height: 34rpx;
          color: #b09053;
        }
      }
      .group_8 {
        margin-top: 32rpx;
        .text-wrapper {
          padding: 8rpx 0;
          border-radius: 28rpx;
          width: 148rpx;
          border-left: solid 2rpx #e3cea7;
          border-right: solid 2rpx #e3cea7;
          border-top: solid 2rpx #e3cea7;
          border-bottom: solid 2rpx #e3cea7;
          .text_19 {
            font-size: 26rpx;
            line-height: 36rpx;
          }
        }
      }
    }
  }
</style>
