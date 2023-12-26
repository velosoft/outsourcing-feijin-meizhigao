<template>
  <view class="flex-col component-l5b6AMkb">
    <view class="flex-col justify-start items-center"><text class="title-font title-text">抬头选择</text></view>
    <view class="flex-col list">
      <view class="flex-row items-center title-wrapper list-item mt-12" v-for="(item, index) in items" :key="index">
        <view class="flex-col flex-auto" @click="onSelect(item)">
          <view class="flex-row items-center self-stretch">
            <text class="title-font">{{ item.name }}</text>
            <view class="flex-col justify-start items-center shrink-0 text-wrapper ml-6" v-if="item.isDefault">
              <text class="tile-default">默认</text>
            </view>
          </view>
          <text class="self-start title-type title-type-text mt-4">{{ item.type }}</text>
        </view>
        <text class="title-type" @click="onEdit">编辑</text>
      </view>
    </view>
    <view class="flex-col justify-start items-center button btn-wrapper" @click="onEdit">
      <text class="title-font btn-text">添加新的抬头</text>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        items: [
          {
            name: '广州飞进信息科技有限公司',
            type: '普通发票-企业抬头',
            isDefault: true,
          },
          {
            name: '谢小姐',
            type: '普通发票-个人抬头',
            isDefault: false,
          },
        ],
      };
    },

    methods: {
      onEdit() {
        uni.navigateTo({ url: '/myOrder/pages/myOrder/editInvoiceTitle/editInvoiceTitle' });
      },
      onSelect(item) {
        this.$emit('select', item);
      },
    },
  };
</script>

<style scoped lang="less">
  .component-l5b6AMkb {
    padding: 40rpx 24rpx 56rpx;
    background-color: #f8f8f8;
    border-radius: 24rpx 24rpx 0rpx 0rpx;
  }
  .title-font {
    font-size: 30rpx;
    line-height: 42rpx;
    color: #111111;
  }
  .title-text {
    font-size: 32rpx;
    line-height: 44rpx;
  }
  .list {
    margin-top: 32rpx;
  }
  .title-wrapper {
    padding: 28rpx 24rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
  }
  .list-item:first-child {
    margin-top: 0;
  }
  .text-wrapper {
    background-color: #ffedcb;
    border-radius: 8rpx;
    width: 56rpx;
    height: 26rpx;
  }
  .tile-default {
    font-size: 20rpx;
    line-height: 26rpx;
    color: #8d723f;
  }
  .title-type {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #6d6d6d;
  }
  .title-type-text {
    margin-left: 4rpx;
  }
  .button {
    margin: 360rpx 16rpx 0;
  }
  .btn-wrapper {
    padding: 24rpx 0;
    background-color: #111111;
    border-radius: 48rpx;
  }
  .btn-text {
    color: #ffffff;
    font-weight: 500;
  }
</style>
