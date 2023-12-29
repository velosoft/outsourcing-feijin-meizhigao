<template>
  <PopupWithButton
    title="填写物流信息"
    buttonText="确定"
    bgColor="#f1f1f1"
    padding="32rpx 12rpx 72rpx 12rpx"
    btnMargin="0 44rpx"
    @click="onConfirm"
  >
    <view class="flex-col content">
      <CFCard>
        <view class="flex-col">
          <CFField
            class="wuliu-field"
            label="物流公司"
            placeholder="请填写"
            :border="true"
            inputAlign="right"
          ></CFField>
          <CFField
            class="wuliu-field"
            label="物流单号"
            placeholder="请选择"
            :border="true"
            :isLink="true"
            :readonly="true"
            inputAlign="right"
          ></CFField>
          <CFField
            class="wuliu-field"
            label="联系电话"
            placeholder="请填写"
            :border="false"
            inputAlign="right"
          ></CFField>
        </view>
      </CFCard>
      <CFCard class="mt-10" title="上传凭证">
        <view class="flex-col justify-start upload-wrap">
          <Uploader class="cf-uploader"></Uploader>
        </view>
      </CFCard>
    </view>
  </PopupWithButton>
</template>

<script>
  import CFCard from '@/components/Card/Card';
  import CFField from '@/components/Field/Field';
  import PopupWithButton from '@/components/Popup/PopupWithButton';
  import Uploader from '@/components/Uploader/Uploader.vue';

  export default {
    components: { CFCard, CFField, PopupWithButton, Uploader },
    props: {},
    data() {
      return {};
    },

    methods: {
      onConfirm(args) {
        // 事件处理方法
        this.$emit('onConfirm');
      },
    },
  };
</script>

<style scoped lang="less">
  .content {
    padding: 38rpx 0 30rpx;
    .upload-wrap {
      padding: 38rpx 0;
    }
  }
</style>
