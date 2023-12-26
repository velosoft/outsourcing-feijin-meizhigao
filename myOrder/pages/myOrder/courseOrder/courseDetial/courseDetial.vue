<template>
  <view class="flex-col relative page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true" background="#b09053" titleColor="#ffffff">
      <image class="nav_left_arrow" src="/myOrder/static/images/icon_nav_left_arrow.png" slot="left"
    /></NavBar>
    <view class="flex-col wrap">
      <view class="flex-col header-status"
        ><HeaderStatus class="status-wrap" :courseHead="courseHead"></HeaderStatus
      ></view>
      <view class="flex-col relative container">
        <CFCard title="报名信息">
          <view class="flex-col">
            <u-cell
              class="cell-in-white-card sign-cell"
              title="姓名"
              value="黄先生"
              :border="true"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card sign-cell"
              title="手机号"
              :value="13654652369"
              :border="true"
              :center="true"
            ></u-cell>
            <view class="flex-col mt-12">
              <text class="line-clamp-one tips">注：报名成功后由平台工作人员联系，请保持电话通畅~</text>
            </view>
          </view>
        </CFCard>
        <CFCard class="mt-10" title="课程信息">
          <view class="flex-col justify-start mt-20"><CourseItem></CourseItem></view>
        </CFCard>
        <CFCard class="mt-10">
          <view class="flex-col">
            <u-cell class="cell-in-white-card" title="课程总数" :value="2" :border="false" :center="true"></u-cell>
            <u-cell
              class="cell-in-white-card-weight mt-16"
              title="课程总价"
              value="￥400.00"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="活动优惠"
              value="-￥40.00"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="优惠券减免"
              value="-￥10.00"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="积分抵扣"
              value="-￥35.00"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="收纳币抵扣"
              value="-￥20.00"
              :border="false"
              :center="true"
            ></u-cell>
            <view class="dividing mt-16"></view>
            <view class="flex-row justify-between items-center total-wrapper mt-18">
              <text class="item-name total-text">实付款</text>
              <text class="item-value-bold">￥305.00</text>
            </view>
          </view>
        </CFCard>
        <CFCard class="mt-10" title="订单信息">
          <view class="flex-col">
            <u-cell
              class="cell-in-white-card mt-16"
              title="课程单号"
              :value="202204017863447637"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="订单留言"
              value="麻烦请尽快跟进，谢谢"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="提交时间"
              value="2022-04-01 09:30:22"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="支付时间"
              value="--"
              :border="false"
              :center="true"
            ></u-cell>
            <u-cell
              class="cell-in-white-card mt-16"
              title="支付方式"
              value="--"
              :border="false"
              :center="true"
            ></u-cell>
          </view>
        </CFCard>
      </view>
    </view>
    <view class="flex-col footer-con">
      <view class="fixed-bottom-safe flex-row footer-btn justify-end">
        <u-button class="cf-btn-black btn-width" text="取消订单" type="info" shape="circle" :plain="true" @click="onClick"></u-button>
        <u-button class="cf-btn-black ml-8 btn-width" text="去付款" type="primary" shape="circle"></u-button>
      </view>
    </view>
    <u-popup
      :show="popupVisible"
      @close="onClose"
      mode="bottom"
      :round="10"
      :closeable="true"
      :safeAreaInsetBottom="false"
    >
      <PopOrderCancel title="请选择退款原因" @click="onClose"></PopOrderCancel>
    </u-popup>
  </view>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import CourseItem from '../components/CourseItem/CourseItem.vue';
  import HeaderStatus from '../components/HeaderStatus/HeaderStatus.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopOrderCancel from '@/myOrder/pages/myOrder/components/PopOrderCancel/PopOrderCancel.vue';

  export default {
    components: { CFCard, CourseItem, HeaderStatus, NavBar, PopOrderCancel },
    props: {},
    data() {
      return {
        courseHead: {},
        payInfo: {},
        orderInfo: {},
        title: '课程详情',
        popupVisible: false,
      };
    },

    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
    },
  };
</script>

<style scoped lang="less">
  .page {
    background-color: #ffffff;
    width: 100%;
    .nav_left_arrow {
      width: 16rpx;
      height: 30rpx;
    }
    .wrap {
      padding-bottom: 44rpx;
      .header-status {
        padding: 56rpx 0 104rpx;
        background-color: #b09053;
        .status-wrap {
          margin: 0 24rpx;
        }
      }
      .container {
        margin-top: -40rpx;
        padding: 32rpx 24rpx;
        background-color: #f8f8f8;
        border-radius: 24rpx 24rpx 0rpx 0rpx;
        .tips {
          color: #bb3e0c;
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 24rpx;
        }
        .sign-cell {
          padding: 36rpx 0;
        }
        .dividing {
          border-bottom: 2rpx solid #ebebeb;
        }
        .total-text {
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #2d2e32;
        }
        .item-value-bold {
          font-size: 36rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #bb3e0c;
        }
      }
    }
    .footer-con {
      height: 132rpx;
      .footer-btn {
        padding: 32rpx 24rpx;
        background: #ffffff;

        .btn-width {
          /deep/ .u-button {
            width: 176rpx !important;
            height: 68rpx !important;
          }
        }
      }
    }
  }
</style>
