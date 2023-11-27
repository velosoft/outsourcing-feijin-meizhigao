<template>
  <!-- 日期选择组件 -->
  <view class="datePicker">
    <u-popup :show="show" :mask="false">
      <view class="pop-picker">
        <view class="operation">
          <view class="btn cancel" @click="hideDatePicker">取消</view>
          <view class="btn confirm" @click="handleConfirm">确认</view>
        </view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
          <picker-view-column>
            <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
          </picker-view-column>
          <picker-view-column>
            <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
          </picker-view-column>
          <picker-view-column>
            <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
          </picker-view-column>
        </picker-view>
        <view class="iPhoneX"></view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    name: 'datePicker',
    data() {
      return {
        show: false,
        confirmCallback: null,
        calcelCallback: null,
        title: 'picker-view',
        years: [],
        year: 0,
        months: [],
        month: 0,
        days: [],
        day: 0,
        value: [0, 0, 0],
        visible: true,
        indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
      }
    },
    methods: {
      open(confirmCallback, calcelCallback) {

        const date = new Date()
        const years = []
        const year = date.getFullYear()
        const months = []
        const month = date.getMonth() + 1
        const days = []
        const day = date.getDate()
        for (let i = 1990; i <= date.getFullYear(); i++) {
          years.push(i)
        }
        for (let i = 1; i <= 12; i++) {
          months.push(i)
        }
        for (let i = 1; i <= 31; i++) {
          days.push(i)
        }

        this.years = years;
        this.year = this.year || year;
        this.months = months;
        this.month = this.month || month;
        this.days = days;
        this.day = this.day || day;
        this.confirmCallback = confirmCallback;
        this.calcelCallback = calcelCallback;
        this.show = true;
        setTimeout(() => {
          this.value = [years.indexOf(this.year), this.month - 1, this.day - 1];
        }, 300)

      },
      bindChange: function(e) {
        const val = e.detail.value
        this.year = this.years[val[0]]
        this.month = this.months[val[1]]
        this.day = this.days[val[2]]
      },
      handleConfirm() {
        const { confirmCallback } = this;
        const data = {
          year: this.year,
          month: this.month,
          day: this.day,
        };
        
        confirmCallback && confirmCallback(data);
        this.$emit('confirm', data);
        this.hideDatePicker();
      },

      hideDatePicker() {
        const { calcelCallback } = this;
        
        calcelCallback && calcelCallback();
        this.$emit('cancel');
        this.show = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  .datePicker {
    .pop-picker {
      width: 100%;
      height: 600rpx;
      background: #fff;

      .operation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90rpx;
        border-bottom: 1px solid #e8e8e8;

        .btn {
          height: 90rpx;
          padding: 0 28rpx;
          font-size: 30rpx;
          line-height: 90rpx;
          color: #888;

          &.confirm {
            color: #007aff;
          }

          &:active {
            background: #eee;
          }
        }
      }

      picker-view {
        width: 100%;
        height: 510rpx;

        picker-view-column {
          text-align: center;

          .item {
            font-size: 30rpx;
            color: #333333;
            line-height: 100rpx;
          }

        }
      }

    }
  }
</style>
