<template>
  <view style="padding: 200rpx 32rpx">
    <text>radio 00-默认样式-不支持自定义图标</text>
    <view class="radio-wrap">
      <label class="radio">
        <radio value="r1" checked="true" />选中
      </label>
      <label class="radio">
        <radio value="r2" />未选中
      </label>
    </view>
    <text>radio-group 01-不支持自定义图标</text>
    <view class="radio-wrap--group">
      <radio-group>
        <label class="flex-row items-center" v-for="(item, index) in radioItems" :key="item.value">
          <view>
            <!--            <image class="icon-radio" src="../../../static/images/icon_check_02.png"
              mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload="" v-if="index === current">
            </image>
            <image class="icon-radio" src="../../../static/images/icon_check_01.png"
              mode="aspectFit|aspectFill|widthFix" lazy-load="false" binderror="" bindload="" v-else></image> -->
            <radio :value="item.value" :checked="index === current" />
          </view>
          <view>{{ item.value }}</view>
        </label>
      </radio-group>
    </view>
    <text>radio-group 02-支持自定义图标</text>
    <view class="radio-wrap--group">
      <view class="flex-row items-center radio-wrap" v-for="(item, index) in items" :key="index" @click="radioChange(item.value)">
        <view class="icon-wrap">
          <image class="icon-radio" src="../../../static/image/icon_radio_01.png" mode="aspectFit|aspectFill|widthFix"
            lazy-load="false" binderror="" bindload="" v-if="index === current">
          </image>
          <image class="icon-radio" src="../../../static/image/icon_radio_02.png" mode="aspectFit|aspectFill|widthFix"
            lazy-load="false" binderror="" bindload="" v-else></image>
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
        radioItems: [{
            value: "选中",
            checked: "true",
          },
          {
            value: "未选中",
          }
        ],
        items: [{
            value: "选中",
            checked: "true",
          },
          {
            value: "未选中",
          }
        ],
        current: 0,
      };
    },
    methods: {
      radioChange: function(index) {
        console.log("点击事件")
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].value === index) {
            this.current = i;
            break;
          }
        }
      }
    }
  };
</script>


<style lang="less">
  .radio-wrap{
    
  }
  .icon-wrap{
    margin-right: 32rpx;
  }
  .icon-radio {
    width: 64rpx;
    height: 64rpx;
  }
  .right-con{
    
  }
</style>
