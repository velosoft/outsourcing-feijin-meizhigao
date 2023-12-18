<template>
  <u-cell
    class="cell-wrapper"
    :title="label"
    :isLink="isLink"
    :clickable="clickable"
  >
    <input
      slot="value"
      :class="inputClass"
      :placeholder="placeholder"
      :value="value"
      :disabled="readonly"
      @input="onInput"
    />
F  </u-cell>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    "input-align": {
      type: String,
      default: "", // left、right
    },
    placeholder: {
      type: String,
      default: "",
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
  },
  options: {
    styleIsolation: "shared",
  },

  data: function () {
    return {};
  },
  computed: {
    inputClass() {
      if (this.inputAlign == "right") {
        return "input-class input-right";
      } else {
        return "input-class";
      }
    },
  },
  methods: {
    onInput(event) {
      //   console.log(event);
      this.$emit("update:modelValue", event.target.value);
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
.input-class {
  flex: 1;
}

.input-right {
  text-align: right;
}

.picker-view {
  width: 100%;
  height: 400rpx;
}
.item {
  line-height: 100rpx;
  text-align: center;
}
</style>
