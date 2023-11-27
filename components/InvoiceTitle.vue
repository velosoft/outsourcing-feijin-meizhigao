<template>
	<view class="InvoiceTitleComp" @touchmove.stop.prevent>
		<PopupConfirm 
			class="pop pop-invoice" 
			ref="InvoiceTitleComp" 
			title="更新发票抬头" 
			@confirm="handleConfirm"
			:confirmClose="false"
		>
			<template v-slot:content>
				<scroll-view scroll-y class="pop-container">
					<view class="form">
						<view class="form-item">
							<view class="label">
								<view class="left">单位名称</view>
							</view>
							<view class="value">
								<input v-model="formData.invoiceTitle" class="input" type="text" placeholder="请输入单位名称"
									placeholder-class="placeholderClass" />
							</view>
						</view>
						<view class="form-item">
							<view class="label">
								<view class="left">纳税识别号</view>
							</view>
							<view class="value">
								<input v-model="formData.dutyParagraph" class="input" type="text" placeholder="请输入纳税识别号"
									placeholder-class="placeholderClass" />
							</view>
						</view>
						<view class="form-item">
							<view class="label">
								<view class="left">账号</view>
							</view>
							<view class="value">
								<input v-model="formData.bankAccount" class="input" type="text" placeholder="请输入账号"
									placeholder-class="placeholderClass" />
							</view>
						</view>
						<view class="form-item">
							<view class="label">
								<view class="left">开户行</view>
							</view>
							<view class="value">
								<input v-model="formData.bankBranch" class="input" type="text" placeholder="请输入开户行"
									placeholder-class="placeholderClass" />
							</view>
						</view>
						<view class="form-item">
							<view class="label">
								<view class="left">单位地址</view>
							</view>
							<view class="value">
								<input v-model="formData.companyDetailAddress" class="input" type="text"
									placeholder="请输入单位地址" placeholder-class="placeholderClass" />
							</view>
						</view>
						<view class="form-item">
							<view class="label">
								<view class="left">电话</view>
							</view>
							<view class="value">
								<input v-model="formData.companyPhone" class="input" type="text" placeholder="请输入电话"
									placeholder-class="placeholderClass" />
							</view>
						</view>
					</view>
				</scroll-view>
			</template>
		</PopupConfirm>
	</view>
</template>

<script>
	import PopupConfirm from '@/components/PopupConfirm';
	export default {
		components: {
			PopupConfirm
		},
		data() {
			return {
				type: 1, // 1 客户，2 供应商
				relatedId: 0, // 相关的id，1 为客户id，2 为供应商id
				formData: {
					invoiceTitle: '',
					dutyParagraph: '',
					bankAccount: '',
					bankBranch: '',
					companyDetailAddress: '',
					companyPhone: ''
				}
			};
		},
		computed: {
			requestInfo() {
				const {
					type
				} = this;

				switch (type) {
					case 1:
						return {
							url: 'customer/createInvoice',
							idField: 'customerId',
							loadingText: '更新客户发票抬头中...',
							success: '更新客户发票抬头成功'
						};
					case 2:
						return {
							url: 'supplier/createInvoice',
							idField: 'supplierId',
							loadingText: '更新供应商发票抬头中...',
							success: '更新供应商发票抬头成功'
						};
					default:
						return {};
				}
			}
		},
		mounted() {},
		methods: {
			show(params) {
				this.$refs.InvoiceTitleComp.open();
				const {
					type,
					info,
					relatedId
				} = params;

				this.visible = true;
				this.type = type;
				this.relatedId = relatedId;
				this.formData = {
					...info,
					bankAccount: info.account,
					bankBranch: info.bank,
					companyDetailAddress: info.detailedAddress,
					companyPhone: info.phone
				};
			},
			handleConfirm() {
				const {
					requestInfo,
					relatedId,
					formData
				} = this;
				const {
					url,
					loadingText,
					success,
					idField
				} = requestInfo;

				this.$http.post(url, {
					invoiceTitle: formData.invoiceTitle,
					dutyParagraph: formData.dutyParagraph,
					bankAccount: formData.bankAccount,
					bankBranch: formData.bankBranch,
					companyDetailAddress: formData.companyDetailAddress,
					companyPhone: formData.companyPhone,
					[idField]: relatedId
				}, {
					showLoading: true,
					loadingText,
					success
				}).then(() => {
					this.$emit('complete');
					this.$refs.InvoiceTitleComp.close();
				});
			}

		}
	}
</script>

<style lang="less" scoped>
	.InvoiceTitleComp {
		.pop-invoice {
			.pop-container {
				max-height: 800upx;
				.form {
					padding-right: 30rpx;
					padding-left: 30rpx;
				
				  .form-item {
				    padding-bottom: 24rpx;
				    
				    .label {
				      justify-content: space-between;
				
				      &,
				      .right {
				        display: flex;
				        align-items: center;
				      }
				
				      .left {
				        line-height: 40rpx;
				        font-weight: bold;
				        color: #333444;
				
				        &.dot {
				          &::after {
				            font-size: 26rpx;
				            content: '*';
				            color: @primaryRed;
				            margin-left: 4rpx;
				          }
				        }
				      }
				
				      .right {
				        margin-left: 20rpx;
				
				        .name {
				          line-height: 36rpx;
				          font-size: 26rpx;
				          color: @primaryGreyColor;
				          margin-left: 8rpx;
				        }
				      }
				    }
				
				    .value {
				      display: flex;
				      align-items: center;
				      padding: 24rpx 0;
				      border-bottom: 1rpx solid #F0F0F0;
				
				      .input {
				        flex: 1;
				        width: 0;
				        line-height: 40rpx;
				
				        &.price {
				          color: @primaryRed;
				          font-weight: bold;
				        }
				      }
				
				      .account {
				        width: 100%;
				      }
				
				      .icon-arrow {
				        margin-left: 20rpx;
				      }
				
				      .icon-user {
				        width: 36rpx;
				        height: 36rpx;
				        margin-left: 12rpx;
				      }
				
				    }
				  
				    &:last-child {
				      padding-bottom: 0;
				    }
				  }
				}
			}
		}
	}
</style>
