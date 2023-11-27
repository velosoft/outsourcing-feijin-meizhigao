<template>
	<view class="loginPage">
		<view class="main-container">
			<view class="logo-box">
				<image class="logo-box_img" src="@/static/logo.png" />
			</view>
			<view class="form-box">
				<view class="input-box">
					<input class="input" type="text" placeholder="请输入登录账号" placeholder-class="placeholderClass"
						v-model="username" />
					<cover-view class="close-box" v-if="username.length" @click="handleClear('username')">
						<cover-image class="icon" src="@/static/images/icon_close_03.png" />
					</cover-view>
				</view>
				<view class="input-box">
					<input class="input" type="password" placeholder="请输入登录密码" placeholder-class="placeholderClass"
						v-model="password" />
					<cover-view class="close-box" v-if="password.length" @click="handleClear('password')">
						<cover-image class="icon" src="@/static/images/icon_close_03.png" />
					</cover-view>
				</view>
				<button class="login-btn" @click="handleLogin">立即登录</button>
			</view>
		</view>

		<view class="agreement-box">
			<view class="radio-box" @click="check = !check">
				<image class="icon" src="@/static/images/icon_check_01.png" v-if="!check" />
				<image class="icon" src="@/static/images/icon_check_02.png" v-else />
			</view>
			<text class="text" @click="check = !check">请阅读并同意</text>
			<navigator class="agreement">《飞进业财用户服务协议》</navigator>
			<text class="text">和</text>
			<navigator class="agreement">《隐私政策》</navigator>
		</view>
		<PopupConfirm 
			class="pop pop-1" 
			ref="popup1" 
			:hasConfirm="false"
			title="选择商户账号"
			
		>
			<template v-slot:content>
				<scroll-view scroll-y="true" class="list">
					<view class="list-item"
						v-for="item in merchants" :key="item.merchantId" @click="handleSelect(item.merchantId)">
						{{item.merchantName}}
					</view>
				</scroll-view>
			</template>
		</PopupConfirm>
	</view>
</template>

<script>
	import PopupConfirm from '@/components/PopupConfirm';
	import md5 from '@/static/js/md5.min.js'
	export default {
		components: {PopupConfirm},
		data() {
			return {
				username: '',
				password: '',
				merchants: [],
				redirect: '',
				check: true
			};
		},
		onLoad({redirect}) {
			this.redirect = decodeURIComponent(redirect || '');
			this.username = uni.getStorageSync('username') || ''
		},
		methods: {

			/* 登录 */
			handleLogin() {
				const {
					username,
					password,
					check,
					$utils: {verifyEmpty}
				} = this;
				if (verifyEmpty(username, '请输入登录账号') && verifyEmpty(password, '请输入登录密码') && verifyEmpty(check, '请阅读并同意协议')) {
					this.$http.post('security/login', {
						username,
						password: md5(password)
					}).then(({data: {appletsToken, simpleMerchants}}) => {
						uni.setStorageSync('username', username)
						if (appletsToken) {
							this.login(appletsToken);
						} else {
							this.merchants = simpleMerchants || [];
							console.log(this.merchants, simpleMerchants);
							this.$refs.popup1.open();
						}
						
					})
				}
			},
			handleSelect(merchantId) {
				const {
					username,
					password,
				} = this;
				this.$http.post('security/login/with/merchant', {
					username,
					password: md5(password),
					merchantId
				}).then(({data: {appletsToken}}) => {
					this.login(appletsToken);
				});
			},
			login (token) {
				uni.setStorageSync('loginToken', {token});
        this.$store.dispatch('getApprovalList');
        
				uni.reLaunch({
					url: '/pages/tabBar/home'
				});
			},
			handleClear (name) {
				this[name] = '';
			}
		}
	};
</script>

<style lang="less" scoped>
	.loginPage {
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		height: 100vh;
		padding: 200rpx 0 24rpx;
		background-color: #fff;

		.main-container {
			padding: 0 80rpx;

			.logo-box {
				margin: 0 auto 80rpx;
				width: 474rpx;
				height: 208rpx;

				.logo-box_img {
					width: 100%;
					height: 100%;
				}
			}

			.form-box {
				.input-box {
					position: relative;
					width: 100%;
					height: 100rpx;
					margin-bottom: 28rpx;
					background: #F3F4F7;
					border-radius: 50rpx;

					.input {
						width: 100%;
						height: 100%;
						padding: 0 48rpx;
						font-size: 26rpx;
						color: #333444;
						line-height: 100rpx;
					}

					.close-box {
						display: flex;
						align-items: center;
						justify-content: center;
						position: absolute;
						top: 0;
						right: 0;
						z-index: 9;
						width: 100rpx;
						height: 100rpx;

						.icon {
							width: 30rpx;
							height: 30rpx;
						}
					}
				}

				.login-btn {
					margin-top: 52rpx;
					width: 100%;
					height: 100rpx;
					font-size: 28rpx;
					line-height: 100rpx;
					color: #FFFFFF;
					background: #3D7FFF;
					border-radius: 50rpx;
				}
			}
		}

		.agreement-box {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			padding: 0 56rpx;
			font-size: 24rpx;
			color: #999AAA;

			.radio-box {
				padding: 12rpx;

				.icon {
					width: 26rpx;
					height: 26rpx;
				}
			}

			.agreement {
				color: @primaryBlue
			}
		}
		.pop {
			&.pop-1 {
				max-height: 650rpx;
				
				.list-item {
					padding: 30rpx;
					text-align: center;
					&:not(:last-child) {
						border-bottom: 1rpx solid  #F0F0F0;
					}
				}
			}
		}
	}
</style>
