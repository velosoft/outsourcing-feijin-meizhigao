<template>
	<view class="dateRangeComp">
		<view class="input-box">
			<picker mode="date" :fields="fields" :value="startTime" data-name="startTime" @change="bindInput">
				<view class="picker">
					<view class="value">
						<view v-if="startTime">{{startTime}}</view>
						<view v-else class="placeholderClass">开始{{placeholderName}}</view>
					</view>
					<u-icon v-if="startTime" class="icon-clear" name="close-circle" color="#aaa" size="30" :stop="true" @click="onClear('startTime')" />
				</view>
			</picker>
			<view class="split placeholderClass">-</view>
			<picker mode="date" :fields="fields" :value="endTime" data-name="endTime" @change="bindInput">
				<view class="picker">
					<view class="value">
						<view v-if="endTime">{{endTime}}</view>
						<view v-else class="placeholderClass">结束{{placeholderName}}</view>
					</view>
					<u-icon v-if="endTime" class="icon-clear" name="close-circle" color="#aaa" size="30" :stop="true" @click="onClear('endTime')" />
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		name: "DateRangeComp",
		model: {
			prop: 'range',
			event: 'input'
		},
		props: {
			range: {
				type: Array,
				default () {
					return []
				}
			},
			fields: {
				type: String,
				default: 'day' // year、month、day
			}
		},
		data() {
			return {
				startTime: '',
				endTime: ''
			};
		},
		computed: {
			placeholderName () {
				return {
					year: '年份',
					month: '月份',
					day: '时间'
				}[this.fields]
			}
		},
		watch: {
			range: {
				handler(v) {
					let startTime = v[0],
						endTime = v[1];
					if (startTime && endTime && new Date(startTime) > new Date(endTime)) {
						endTime = v[1];
						startTime = v[0];
					}
					this.startTime = startTime;
					this.endTime = endTime;
				},
				immediate: true
			}
		},
		methods: {
			bindInput(e) {
				const {
					detail: {
						value
					},
					currentTarget: {
						dataset: {
							name
						}
					}
				} = e;
				let {
					startTime,
					endTime
				} = this;
				switch (name) {
					case 'startTime':
						if (endTime && new Date(value) > new Date(endTime)) {
							startTime = endTime;
							endTime = value;
						} else {
							startTime = value;
						}
						break;
					case 'endTime':
						if (startTime && new Date(value) < new Date(startTime)) {
							endTime = startTime;
							startTime = value;
						} else {
							endTime = value;
						}
						break;
				}
				this.startTime = startTime;
				this.endTime = endTime;
				this.handleChange();
			},
			onClear(name) {
				switch (name) {
					case 'startTime':
						this.startTime = '';
						break;
					case 'endTime':
						this.endTime = '';
						break;
				}
				this.handleChange();
			},
			handleChange() {
				const {
					startTime,
					endTime
				} = this;
				this.$emit('change', {
					range: [startTime, endTime],
					startTime,
					endTime
				});
				this.$emit('input', [startTime, endTime])
			}
		}
	}
</script>

<style scoped lang="less">
	.dateRangeComp {
		.input-box {
			display: flex;
			border-radius: 38rpx;

			picker {
				flex: 1;
			}

			.picker {
				display: flex;
				height: 76rpx;

				.value {
					display: flex;
					flex: 1;
					align-items: center;
					justify-content: center;
					width: 0;
				}

				.icon-clear {
					align-self: center;
					padding: 12rpx;
				}
			}

			.split {
				align-self: center;
				padding-right: 10rpx;
				padding-left: 10rpx;
			}
		}
	}
</style>
