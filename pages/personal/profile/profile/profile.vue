<template>
  <view class="flex-col page">
    <NavBar :hasBack="true" :title="title" :fixed="true" :isShow="true"></NavBar>
    <view class="flex-col">
      <u-cell-group class="profile-cell-group" :border="false">
        <u-cell title="头像" :value="avatar" :isLink="true">
          <image class="avatar" src="/static/images/mock_profile_avatar.png" slot="value" />
        </u-cell>
        <u-cell title="昵称" :value="nickname" :isLink="true" @click="onClick"></u-cell>
      </u-cell-group>
      <view class="flex-col justify-start mt-12">
        <u-cell-group class="profile-cell-group">
          <u-cell title="手机号码" :value="tel"></u-cell>
          <u-cell title="性别" :value="gender" :isLink="true" @click="onClick_1"></u-cell>
          <u-cell title="生日" :value="birthday" :border="false" :isLink="true" @click="onClick_2"></u-cell>
        </u-cell-group>
      </view>
    </view>
    <u-popup :show="popupVisible" @close="onClose" mode="bottom" :round="12" :closeable="true">
      <PopModifyNickname></PopModifyNickname>
    </u-popup>
    <u-popup :show="popupVisible_1" @close="onClose_1" mode="bottom" :round="12" :closeable="true">
      <PopModifyGender></PopModifyGender>
    </u-popup>
    <u-popup :show="popupVisible_2" @close="onClose_2" mode="bottom" :round="12" :closeable="true">
      <DataTimePickerYYD></DataTimePickerYYD>
    </u-popup>
  </view>
  </template>
  
  <script>
  import DataTimePickerYYD from '../../../../pages/components/DataTimePickerYYD/DataTimePickerYYD.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopModifyGender from '../../../../pages/personal/profile/components/PopModifyGender/PopModifyGender.vue';
  import PopModifyNickname from '../../../../pages/personal/profile/components/PopModifyNickname/PopModifyNickname.vue';
  
  export default {
    components: { DataTimePickerYYD, NavBar, PopModifyGender, PopModifyNickname },
    props: {},
    data() {
      return {
        avatar: '/static/mock/mock_profile_avatar.png',
        nickname: '张小鱼',
        tel: '12345577897',
        gender: '男',
        birthday: '1998-03-06',
        title: '个人信息',
        popupVisible: false,
        popupVisible_1: false,
        popupVisible_2: false,
      };
    },
  
    methods: {
      onClick() {
        this.popupVisible = true;
      },
      onClose() {
        this.popupVisible = false;
      },
      onClick_1() {
        this.popupVisible_1 = true;
      },
      onClose_1() {
        this.popupVisible_1 = false;
      },
      onClick_2() {
        this.popupVisible_2 = true;
      },
      onClose_2() {
        this.popupVisible_2 = false;
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .page {
    background-color: #f8f8f8;
    width: 100%;
    .avatar {
      border-radius: 50%;
      width: 84rpx;
      height: 84rpx;
    }
  }
  </style>