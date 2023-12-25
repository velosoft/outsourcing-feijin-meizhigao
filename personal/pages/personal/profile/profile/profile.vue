<template>
  <view class="flex-col page">
    <nav-bar :hasBack="true" :title="title" :fixed="true" :isShow="true"></nav-bar>
    <view class="flex-col">
      <u-cell-group class="profile-cell-group" :border="false">
        <u-cell title="头像" :value="avatar" :isLink="true">
          <image class="avatar" src="/personal/static/images/mock_profile_avatar.png" slot="value" />
        </u-cell>
        <u-cell title="昵称" :value="nickname" :isLink="true" @click="onShowNicknamePopup"></u-cell>
      </u-cell-group>
      <view class="flex-col justify-start mt-12">
        <u-cell-group class="profile-cell-group">
          <u-cell title="手机号码" :value="tel"></u-cell>
          <u-cell title="性别" :value="gender" :isLink="true" @click="onShowGenderPopup"></u-cell>
          <u-cell title="生日" :value="birthdayText" :border="false" :isLink="true" @click="onShowDatePopup"></u-cell>
        </u-cell-group>
      </view>
    </view>
    <u-popup :show="nicknamePopupVisible" @close="onClosePopup" mode="bottom" :round="12" :closeable="true">
      <pop-modify-nickname @click="onNicknameChange"></pop-modify-nickname>
    </u-popup>
    <u-popup :show="genderPopupVisible" @close="onClosePopup" mode="bottom" :round="12" :closeable="true">
      <pop-modify-gender @click="onGenderChange"></pop-modify-gender>
    </u-popup>
    <u-popup :show="datePopupVisible" @close="onClosePopup" mode="bottom" :round="12" :closeable="true">
      <date-time-picker-popup type="date" :date="birthday" @click="onDateChange"></date-time-picker-popup>
    </u-popup>
  </view>
</template>

<script>
  import DateTimePickerPopup from '@/pages/components/DateTimePickerPopup/DateTimePickerPopup.vue';
  import NavBar from '@/components/NavBar/NavBar.vue';
  import PopModifyGender from '@/personal/pages/personal/profile/components/PopModifyGender/PopModifyGender.vue';
  import PopModifyNickname from '@/personal/pages/personal/profile/components/PopModifyNickname/PopModifyNickname.vue';

  export default {
    components: { DateTimePickerPopup, NavBar, PopModifyGender, PopModifyNickname },
    props: {},
    data() {
      return {
        avatar: '/personal/static/mock/mock_profile_avatar.png',
        nickname: '张小鱼',
        tel: '12345577897',
        gender: '男',
        birthday: {
          year: 1998,
          month: 3,
          day: 6,
        },
        title: '个人信息',
        nicknamePopupVisible: false,
        genderPopupVisible: false,
        datePopupVisible: false,
      };
    },
    computed: {
      birthdayText() {
        let { year, month, day } = this.birthday;
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      },
    },

    methods: {
      onShowNicknamePopup() {
        this.nicknamePopupVisible = true;
      },
      onShowGenderPopup() {
        this.genderPopupVisible = true;
      },
      onShowDatePopup() {
        this.datePopupVisible = true;
      },
      onClosePopup() {
        this.nicknamePopupVisible = false;
        this.genderPopupVisible = false;
        this.datePopupVisible = false;
      },
      onNicknameChange(val) {
        this.nickname = val;
        this.nicknamePopupVisible = false;
      },
      onGenderChange(val) {
        this.gender = val;
        this.genderPopupVisible = false;
      },
      onDateChange(val) {
        let { year, month, day } = val;
        this.birthday.year = year;
        this.birthday.month = month;
        this.birthday.day = day;
        this.datePopupVisible = false;
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
