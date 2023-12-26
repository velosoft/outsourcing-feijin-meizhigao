<template>
  <popup-with-button title="性别" buttonText="保存" @click="onClick">
    <view class="flex-col justify-start group view">
      <u-radio-group v-model="gender" iconPlacement="right" placement="column" activeColor="#b09053">
        <u-radio class="align-center" label="男" name="男" labelColor="#111111"></u-radio>
        <u-radio class="align-center mt-38" label="女" name="女" labelColor="#111111"></u-radio>
      </u-radio-group>
    </view>
  </popup-with-button>
</template>

<script>
  import PopupWithButton from '@/components/Popup/PopupWithButton';

  export default {
    components: { PopupWithButton },
    props: {},
    data() {
      return {
        gender: '男',
      };
    },

    methods: {
      onChange(val) {
        this.gender = val;
      },
      onClick() {
        this.$emit('click', this.gender);
      },
    },
  };
</script>

<style scoped lang="less">
  .group {
    align-self: stretch;
  }
  .view {
    padding: 120rpx 0 120rpx 34rpx;
  }
</style>
