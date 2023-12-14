<template>
  <view class="flex-row items-center" @tap="clickHandler">
    <view
      class="flex-row flex-1 items-center search"
      :style="{
        background: background,
      }"
    >
      <view class="search-icon">
        <slot name="search-icon">
          <image
            class="search-image"
            src="/static/images/icon_search_01.png"
            mode="aspectFit|aspectFill|widthFix"
            lazy-load="false"
            binderror=""
            bindload=""
          ></image>
        </slot>
      </view>
      <view class="flex-col flex-1 search-input-wrap">
        <input
          class="search-input"
          @blur="blur"
          :value="value"
          @confirm="search"
          @input="inputChange"
          :disabled="disabled"
          @focus="getFocus"
          :focus="focus"
          :placeholder="placeholder"
          placeholder-class="input-placeholder"
          type="text"
        />
      </view>
    </view>
    <view class="right-btn" v-if="showAction" @tap.stop.prevent="custom">
      <text class="right-text">{{ actionText }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {
    disabled: {
      type: Boolean,
      defalut: false,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "搜索你想要的内容",
    },
    focus: {
      type: Boolean,
      defalut: false,
    },
    showAction: {
      type: Boolean,
      defalut: false,
    },
    actionText: {
      type: String,
      default: "搜索",
    },
    background: {
      type: String,
      default: "#F8F8F8",
    },
  },
  data() {
    return {
      keyword: "",
      focused: this.focus,
    };
  },
  watch: {
    keyword(nVal) {
      // 双向绑定值，让v-model绑定的值双向变化
      this.$emit("input", nVal);
      // 触发change事件，事件效果和v-model双向绑定的效果一样，让用户多一个选择
      this.$emit("change", nVal);
    },
    value: {
      immediate: true,
      handler(nVal) {
        this.keyword = nVal;
      },
    },
  },
  methods: {
    // 目前HX2.6.9 v-model双向绑定无效，故监听input事件获取输入框内容的变化
    inputChange(e) {
      this.keyword = e.detail.value;
    },
    // 确定搜索
    search(e) {
      this.$emit("search", e.detail.value);
      try {
        // 收起键盘
        uni.hideKeyboard();
      } catch (e) {}
    },
    // 点击右边自定义按钮的事件
    custom() {
      this.$emit("custom", this.keyword);
      try {
        // 收起键盘
        uni.hideKeyboard();
      } catch (e) {}
    },
    // 获取焦点
    getFocus() {
      this.focused = true;
      // 开启右侧搜索按钮展开的动画效果
      this.$emit("focus", this.keyword);
    },
    // 失去焦点
    blur() {
      // 最开始使用的是监听图标@touchstart事件，自从hx2.8.4后，此方法在微信小程序出错
      // 这里改为监听点击事件，手点击清除图标时，同时也发生了@blur事件，导致图标消失而无法点击，这里做一个延时
      setTimeout(() => {
        this.focused = false;
      }, 100);
      this.show = false;
      this.$emit("blur", this.keyword);
    },
    // 点击搜索框，只有disabled=true时才发出事件，因为禁止了输入，意味着是想跳转真正的搜索页
    clickHandler() {
      if (this.disabled) {
        this.$emit("click");
      } else {
        this.$emit("handler");
      }
    },
  },
};
</script>

<style lang="less">
.search {
  height: 76rpx;
  border-radius: 38rpx;
  background: #ffffff;
  padding: 20rpx 32rpx;
}
.search-icon {
  margin-right: 16rpx;
}
.search-image {
  width: 32rpx;
  height: 32rpx;
}
.search-input-wrap {
}
.search-input {
  font-family: 苹方;
  font-size: 28rpx;
  font-weight: 400;
}
.input-placeholder {
  font-family: 苹方;
  font-size: 28rpx;
  font-weight: 400;
  color: #d3d3d3;
}
.right-btn {
  margin-left: 32rpx;
  margin-right: 12rpx;
}

.right-text {
  font-family: PingFangSC;
  font-size: 28rpx;
  font-weight: 500;
  line-height: 28rpx;
  color: rgba(3, 3, 5, 1);
}
</style>
