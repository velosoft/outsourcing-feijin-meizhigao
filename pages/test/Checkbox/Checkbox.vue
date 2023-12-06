<template>
  <view style="padding: 200rpx 32rpx">
    <text>checkbox-group 支持自定义图标</text>
    <view class="checkbox-wrap--group">
      <view class="flex-row items-center checkbox-wrap" v-for="(item, index) in items" :key="index"
        @click="checkboxChange(item, index)">
        <view class="icon-wrap">
          <image class="icon-checkbox" src="../../../static/image/icon_radio_01.png"
            mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload="" v-if="selectID.includes(index)">
          </image>
          <image class="icon-checkbox" src="../../../static/image/icon_radio_02.png"
            mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload="" v-else></image>
        </view>
        <view class="right-con">
          <text v-if="item.value">{{ item.value }}</text>
          <slot v-else name="right-slot"></slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            value: "深圳",
          },
          {
            value: "惠州",
          }
        ],
        selectID: [],
      };
    },
    methods: {
      checkboxChange: function(val, index) {
        if (this.selectID.includes(index)) {
          let idx = this.selectID.indexOf(index)
          this.selectID.map((vals, i) => {
            if (idx == i) {
              this.selectID.splice(i, 1)
            }
          })
        } else {
          this.selectID.push(index)
        }
        // selectID.value = val
      }
    },
  }
</script>


<style lang="less">
  .checkbox-wrap {}

  .icon-wrap {
    margin-right: 32rpx;
  }

  .icon-checkbox {
    width: 64rpx;
    height: 64rpx;
  }

  .right-con {}
</style>
