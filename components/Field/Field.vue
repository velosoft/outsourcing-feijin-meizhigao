<template>
  <view class="wrapper">
    <u-cell
      class="cell-wrapper cell-required"
      :title="label"
      :isLink="isLink"
      :clickable="clickable"
      :border="border"
      @click="$emit('click')"
    >
      <view :class="inputWrapperClass" slot="value">
        <slot name="input">
          <input
            :class="inputClass"
            :placeholder-style="placeholderStyle"
            :placeholder="placeholder"
            :value="value"
            :disabled="readonly"
            @input="onInput"
          />
        </slot>
      </view>
    </u-cell>
  </view>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      'input-align': {
        type: String,
        default: '', // left、right
      },
      placeholder: {
        type: String,
        default: '',
      },
      isLink: {
        type: Boolean,
        default: false,
      },
      clickable: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      border: {
        type: Boolean,
        default: false,
      },
      placeholderStyle: {
        type: String,
        default: '',
      },
    },
    options: {
      styleIsolation: 'shared',
    },

    data: function () {
      return {};
    },
    computed: {
      inputWrapperClass() {
        return this.inputAlign == 'right' ? 'input-wrapper input-wrapper__right' : 'input-wrapper';
      },
      inputClass() {
        return this.inputAlign == 'right' ? 'input input__right' : 'input';
      },
    },
    methods: {
      onInput(event) {
        //   console.log(event);
        this.$emit('update:modelValue', event.target.value);
      },
    },
  };
</script>

<style scoped lang="less">
  .cell-wrapper {
    /deep/ .u-cell__body__content {
      flex: unset;
      width: 7em;
    }
  }

  .input-wrapper {
    flex: 1;
  }
  .input-wrapper__right {
    display: flex;
    justify-content: flex-end;
  }
  .input {
    flex: 1;
  }

  .input__right {
    text-align: right;
  }
</style>
