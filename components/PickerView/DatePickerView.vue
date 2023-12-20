<template>
  <picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
    <picker-view-column v-if="displayYear">
      <view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
    </picker-view-column>
    <picker-view-column v-if="displayMonth">
      <view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
    </picker-view-column>
    <picker-view-column v-if="displayDay">
      <view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
    </picker-view-column>
    <picker-view-column v-if="displayHour">
      <view class="item" v-for="(item, index) in hours" :key="index">{{ item }}时</view>
    </picker-view-column>
    <picker-view-column v-if="displayMinute">
      <view class="item" v-for="(item, index) in minutes" :key="index">{{ item }}分</view>
    </picker-view-column>
  </picker-view>
</template>

<script>
  export default {
    props: {
      // 'datetime', 'date', 'year-month', 'month-day', 'datehour', 'time'
      type: {
        type: String,
        default: 'date',
      },
      date: {
        type: Object,
        default: () => null,
      },
    },
    data() {
      const date = new Date();
      const startYear = 1990;
      const years = Array.from({ length: date.getFullYear() - startYear + 1 }, (_, i) => startYear + i);
      const months = Array.from({ length: 12 }, (_, i) => i + 1);
      const days = Array.from({ length: 31 }, (_, i) => i + 1);
      const hours = Array.from({ length: 24 }, (_, i) => i);
      const minutes = Array.from({ length: 60 }, (_, i) => i);

      return {
        title: 'datetime-picker-view',
        years,
        year: date.getFullYear(),
        startYear,
        months,
        month: date.getMonth() + 1,
        days,
        day: date.getDate(),
        hours,
        hour: date.getHours(),
        minutes,
        minute: date.getMinutes(),
        value: [0, 0, 0, 0, 0],
        visible: true,
        indicatorStyle: `height: 50px;`,
      };
    },
    computed: {
      displayYear() {
        return ['datetime', 'date', 'year-month', 'month-day', 'datehour'].includes(this.type);
      },
      displayMonth() {
        return ['datetime', 'date', 'year-month', 'month-day', 'datehour'].includes(this.type);
      },
      displayDay() {
        return ['datetime', 'date', 'month-day', 'datehour'].includes(this.type);
      },
      displayHour() {
        return ['datetime', 'time', 'datehour'].includes(this.type);
      },
      displayMinute() {
        return ['datetime', 'time'].includes(this.type);
      },
    },
    mounted() {
      this.year = this.date.year;
      this.month = this.date.month;
      this.day = this.date.day;
      this.hour = this.date.hour;
      this.minute = this.date.minute;
      this.value = [this.year - this.startYear, this.month - 1, this.day - 1, this.hour - 1, this.minute - 1];
    },
    methods: {
      bindChange(e) {
        const val = e.detail.value;
        const selectedYear = this.years[val[0]];
        const selectedMonth = this.months[val[1]];
        const selectedDay = this.days[val[2]];

        // Update days array based on the selected year and month
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        // Update the displayed values
        this.year = selectedYear;
        this.month = selectedMonth;
        this.day = Math.min(selectedDay, daysInMonth);
        this.hour = this.hours[val[3]];
        this.minute = this.minutes[val[4]];

        // Emitting a custom event to notify the parent about the selected date and time
        this.$emit('change', {
          year: this.year,
          month: this.month,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
        });
      },
    },
  };
</script>

<style scoped lang="less">
  .picker-view {
    width: 100%;
    height: 400rpx;
  }
  .item {
    line-height: 100rpx;
    text-align: center;
  }
</style>
