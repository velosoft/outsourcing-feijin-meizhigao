<template>
  <PopupWithButton title="性别" buttonText="保存">
    <view class="flex-col justify-start group view">
      <u-radio-group v-model="v_model" iconPlacement="right">
        <u-cell title="男">
          <u-radio
            class="input"
            v-model="v_model_1"
            name="uYHiEoOe"
            activeColor="#b09053"
            inactiveColor="#ffffff"
            slot="value"
          ></u-radio>
        </u-cell>
        <u-cell class="mt-40" title="女">
          <u-radio class="input" v-model="v_model_2" name="w78voJPl" slot="value"></u-radio>
        </u-cell>
      </u-radio-group>
    </view>
  </PopupWithButton>
</template>

<script>
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { PopupWithButton },
    props: {},
    data() {
      return {
        status: '',
        value: '男',
        v_model: '',
        v_model_1: '',
        v_model_2: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="less">
  .group {
    align-self: stretch;
    .input {
      align-self: center;
    }
  }
  .view {
    padding: 128rpx 0;
  }
</style>