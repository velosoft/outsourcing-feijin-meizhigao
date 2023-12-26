<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col justify-start flex-1 main-content-group">
      <view class="flex-col order-details-group">
        <view class="flex-row items-center order-summary-section">
          <view class="flex-col shrink-0 relative image-wrapper">
            <image class="product-image" :src="imageUrl" />
            <view
              class="flex-col justify-start items-center product-count-wrapper product-count-position"
              v-if="productNumber > 1"
            >
              <text class="content-font product-count-text">{{ productNumber }}件商品</text>
            </view>
          </view>
          <view class="flex-col flex-1 ml-10">
            <text class="self-start font">订单编号 {{ orderNumber }}</text>
            <view class="flex-row self-stretch mt-4">
              <text class="self-center font">开票金额</text>
              <view class="flex-row items-baseline self-start ml-10">
                <text class="currency-symbol">￥</text>
                <text class="price-integer">{{ price }}</text>
                <text class="price-decimal">.{{ decimalPrice }}</text>
              </view>
            </view>
          </view>
        </view>
        <view class="flex-col justify-start margin-top-standard view">
          <u-cell-group :border="false">
            <u-cell
              class="invoice-cell"
              title="发票类型"
              :value="invoceType"
              :border="false"
              :center="true"
              :clickable="false"
              :isLink="true"
            ></u-cell>
            <u-cell class="invoice-cell" title="抬头类型" :border="false" :center="true">
              <u-radio-group
                class="radio-group-text"
                v-model="invoceHeaderType"
                activeColor="#b09053"
                placement="row"
                slot="value"
              >
                <u-radio v-model="v_model" label="个人或事业单位" name="个人或事业单位"></u-radio>
                <u-radio class="ml-28" v-model="v_model_1" label="企业" name="企业"></u-radio>
              </u-radio-group>
            </u-cell>
            <view class="flex-row items-center self-stretch">
              <text class="font">发票抬头</text>
              <text class="placeholder-font placeholder-text">请填写企业抬头</text>
              <view class="flex-col justify-start items-center shrink-0 invoice-title-group">
                <image
                  class="invoice-title-icon"
                  src="https://dev.ft.velosoft.cn/api/image?token=65806dcdd6bce000114d191b&name=17025198588130555124.png"
                />
              </view>
            </view>
            <view class="flex-col self-stretch">
              <u-cell title="单位税号" :border="false" :center="true">
                <u-input
                  class="radio-group-text"
                  v-model="v_model_2"
                  placeholder="请填写单位税号"
                  slot="value"
                ></u-input>
              </u-cell>
              <u-cell title="开户银行" :border="false" :center="true">
                <u-input v-model="v_model_3" placeholder="请填写开户银行（选填）" slot="value"></u-input>
              </u-cell>
              <u-cell title="银行账户" :border="false" :center="true">
                <u-input v-model="v_model_4" placeholder="请填写银行账户（选填）" slot="value"></u-input>
              </u-cell>
              <u-cell title="企业地址" :border="true" :center="false">
                <u-input v-model="v_model_5" placeholder="请填写企业地址（选填）" slot="value"></u-input>
              </u-cell>
              <u-cell title="企业电话" :border="false" :center="true">
                <u-input v-model="v_model_6" placeholder="请填写企业电话（选填）" slot="value"></u-input>
              </u-cell>
            </view>
            <view class="flex-row items-center self-center more-info-group">
              <text class="content-font more-info-text">查看更多</text>
              <image
                class="shrink-0 more-info-icon ml-4"
                src="https://dev.ft.velosoft.cn/api/image?token=65806dcdd6bce000114d191b&name=17025198599922779215.png"
              />
            </view>
          </u-cell-group>
        </view>
        <view class="flex-col justify-start invoice-section margin-top-standard">
          <view class="flex-row justify-between invoice-content-group">
            <text class="font">发票内容</text>
            <u-checkbox v-model="v_model_7" label="明细" name="i5N2nqwM"></u-checkbox>
          </view>
        </view>
        <view class="flex-col justify-start invoice-section margin-top-standard">
          <u-cell-group class="contact-info-group">
            <u-cell title="开票人手机" :value="13567699045"></u-cell>
            <u-cell title="开票人邮箱">
              <u-input v-model="v_model_8" placeholder="请填写邮箱号" slot="value"></u-input>
            </u-cell>
          </u-cell-group>
        </view>
        <view class="flex-col invoice-section margin-top-standard">
          <text class="self-start font invoice-notice-title">发票须知</text>
          <text class="self-stretch content-font invoice-notice-content margin-top-standard">
            1、开票金额为用户实际支付金额(不含活动优惠金额、优惠券、积分、收纳币)
            <br />
            2、电子发票可在确认收货后申请开票，开票后在“订单详情“查看
          </text>
        </view>
      </view>
      <view class="fixed-bottom-safe flex-col justify-start fixed bottom-action-section">
        <view class="flex-col justify-start items-center text-wrapper"
          ><text class="font confirm-button-text">确认申请</text></view
        >
      </view>
    </view>
  </view>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { NavBar },
    props: {},
    data() {
      return {
        invoiceType: '增值税电子普通发票',
        invoceHeaderType: '企业',
        orderNumber: '354447489478957868',
        price: '200',
        decimalPrice: '',
        imageUrl:
          'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025198587353270781.png',
        productNumber: '2',
        title: '',
        v_model: '',
        v_model_1: '',
        v_model_2: '',
        v_model_3: '',
        v_model_4: '',
        v_model_5: '',
        v_model_6: '',
        v_model_7: '',
        v_model_8: '',
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
    .main-content-group {
      padding-bottom: 180rpx;
      overflow-y: auto;
      .order-details-group {
        padding: 0 24rpx 24rpx;
        .order-summary-section {
          padding: 32rpx;
          background-color: #ffffff;
          border-radius: 12rpx;
          .image-wrapper {
            width: 148rpx;
            .product-image {
              border-radius: 16rpx;
              width: 148rpx;
              height: 148rpx;
            }
            .product-count-wrapper {
              border-radius: 0rpx 0rpx 16rpx 16rpx;
              width: 100%;
              background-color: #111111;
              opacity: 0.5;
              .product-count-text {
                color: #ffffff;
                opacity: 1;
              }
            }
            .product-count-position {
              position: absolute;
              left: 0rpx;
              bottom: 0rpx;
            }
          }
          .currency-symbol {
            color: #111111;
            font-size: 20rpx;
            font-family: 'PingFang SC';
            font-weight: 500;
            line-height: 28rpx;
          }
          .price-integer {
            color: #111111;
            font-size: 32rpx;
            font-family: '.AppleSystemUIFont';
            line-height: 36rpx;
          }
          .price-decimal {
            color: #111111;
            font-size: 20rpx;
            font-family: '.AppleSystemUIFont';
            line-height: 24rpx;
          }
        }
        .margin-top-standard {
          margin-top: 24rpx;
          .invoice-cell {
            align-self: stretch;
          }
          .placeholder-font {
            font-size: 28rpx;
            font-family: 'PingFang SC';
            line-height: 40rpx;
            color: #9e9ea0;
          }
          .placeholder-text {
            margin-left: 320rpx;
          }
          .invoice-title-group {
            margin-left: 16rpx;
            width: 12rpx;
            .invoice-title-icon {
              width: 12rpx;
              height: 24rpx;
            }
          }
          .radio-group-text {
            margin-right: 20rpx;
          }
          .more-info-group {
            margin-top: 48rpx;
            .more-info-text {
              color: #9e9ea0;
            }
            .more-info-icon {
              width: 16rpx;
              height: 8rpx;
            }
          }
        }
        .view {
          padding: 32rpx 24rpx;
          background-color: #ffffff;
          border-radius: 12rpx;
        }
        .content-font {
          font-size: 24rpx;
          font-family: 'PingFang SC';
          line-height: 34rpx;
        }
        .invoice-section {
          padding: 32rpx 24rpx;
          background-color: #ffffff;
          border-radius: 16rpx;
          .invoice-content-group {
            margin: 0 24rpx;
          }
          .contact-info-group {
            margin: 0 24rpx;
          }
          .invoice-notice-title {
            color: #000000;
            font-size: 30rpx;
            line-height: 42rpx;
          }
          .invoice-notice-content {
            color: #9c9c9f;
            line-height: 44rpx;
            text-align: left;
          }
        }
      }
      .fixed {
        position: fixed;
        left: 0rpx;
        top: 2070rpx;
        .text-wrapper {
          padding: 24rpx 0;
          background-color: #b09053;
          border-radius: 48rpx;
          width: 670rpx;
          .confirm-button-text {
            color: #ffffff;
            font-size: 30rpx;
            font-weight: 500;
            line-height: 42rpx;
          }
        }
      }
      .bottom-action-section {
        padding: 32rpx 24rpx 48rpx;
        background-color: #ffffff;
        width: 750rpx;
      }
      .font {
        font-size: 28rpx;
        font-family: 'PingFang SC';
        line-height: 40rpx;
        color: #111111;
      }
    }
  }
</style>
