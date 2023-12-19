<template>
  <view class="flex-col page">
    <NavBar :title="title" :fixed="true" :isShow="true" background="#ffffff"></NavBar>
    <view class="flex-col">
      <u-form>
        <u-form-item label="联系人">
          <u-input class="ml-46" v-model="name" placeholder="请输入联系人姓名"></u-input>
        </u-form-item>
        <u-form-item class="group_4" label="联系电话">
          <u-input class="ml-32" v-model="tel" placeholder="请输入联系电话"></u-input>
        </u-form-item>
        <u-form-item class="group_4" label="收获地址">
          <u-input class="input ml-32" v-model="address" placeholder="请选择收货地址">
            <image class="icon-arrow" src="../../../../static/images/icon_arrow_arrow_02.png" slot="suffix" />
          </u-input>
        </u-form-item>
        <u-form-item class="group_6" label="详细地址">
          <u-input class="ml-32" v-model="addressDetial" placeholder="请输入详细地址"></u-input>
        </u-form-item>
        <u-form-item class="group_7" label="设为默认地址">
          <u-switch v-model="isDefaultAddress" activeColor="#b09053" slot="right"></u-switch>
        </u-form-item>
      </u-form>
      <FooterBlockBtn class="mt-288"></FooterBlockBtn>
    </view>
  </view>
</template>

<script>
  import FooterBlockBtn from '../../../../pages/components/FooterBlockBtn/FooterBlockBtn.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';

  export default {
    components: { FooterBlockBtn, NavBar },
    props: {},
    data() {
      return {
        name: '',
        isDefaultAddress: false,
        tel: '',
        address: '',
        addressDetial: '',
        title: '收货地址',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .mt-288 {
    margin-top: 576rpx;
  }
  .page {
    background-color: #ffffff;
    width: 100%;
    .group_4 {
      margin-top: 88rpx;
      .input {
        flex: 1 1 0;
        margin-right: 8rpx;
        .icon-arrow {
          width: 20rpx;
          height: 20rpx;
        }
      }
    }
    .group_6 {
      margin-top: 80rpx;
    }
    .group_7 {
      margin-top: 96rpx;
    }
  }
</style>