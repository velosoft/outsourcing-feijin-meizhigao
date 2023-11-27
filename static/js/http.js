import env from './env.js';
import utils from './utils.js';
let {
	domain,
	apiBaseUrl
} = env;
// #ifdef H5
domain = env.env === 'dev' ? '/api' : ''
// #endif
/**
 * 额外参数
 * showLoading Boolean 是否相似loading
 * loadingText String loading的文本
 * customError Boolean 是否自定义错误（触发custom）
 * hideErrorToast Boolean 是否要隐藏错误的弹框
 * success Object{ title, duration } 接口请求成功后，是否要相似成功的弹框
 */

const http = {
	api_domain: `${domain}${apiBaseUrl}`,
	post(url, data, params) {
		let options = generateOptions('post', url, data, params);

		return this.handleResult('POST', options);
	},
	get(url, params = {}) {
		let options = generateOptions('get', url, params.params, params);

		return this.handleResult('GET', options);
	},
	put(url, data, params = {}) {
		let options = generateOptions('put', url, data, params);

		return this.handleResult('PUT', options);
	},
	delete(url, params = {}) {
		let options = generateOptions('delete', url, params.data, params);

		return this.handleResult('DELETE', options);
	},
	// 图片上传
	uploadImg(option) {
		return new Promise((resolve) => {
			let api = this.api_domain + option.url,
				token = this.getToken();
			let paths = option.tempFilePaths,
				i = 0,
				result = [];
      uni.showLoading({
        title: '上传中...',
        mask: true
      });
			customFor();

			function customFor() {
				if (i < paths.length) {
					// #ifdef MP-WEIXIN
					request(option, paths[i]);
					// #endif

					// #ifdef H5
					uni.request({
						url: paths[i],
						method: 'GET',
						responseType: 'arraybuffer',
						success: (ress) => {
							let base64 = uni.arrayBufferToBase64(ress
							.data); // 把arraybuffer转成base64
							request(option, 'data:image/png;base64,' + base64);
						}
					});
					// #endif

					// #ifdef APP-PLUS
					plus.io.resolveLocalFileSystemURL(paths[i], function(entry) {
							entry.file(function(file) {
								let fileReader = new plus.io.FileReader();
								fileReader.readAsDataURL(file);
								fileReader.onloadend = function(evt) {
									request(option, JSON.stringify(evt.target.result));
								};
							});
						},
						function(e) {
							uni.showToast({
								title: 'Resolve file URL failed: ' + e.message,
								icon: 'none'
							});
						});
					// #endif
				} else {
					resolve(result);
				}
			}

			function request(option, data, name) {
				i++;
				uni.uploadFile({
					url: api, // 仅为示例，非真实的接口地址
					header: {
						'Authorization': token
					},
					filePath: data,
					name: name || 'file',
					complete: (res) => {
						uni.hideLoading();
						res = JSON.parse(res.data || '{}');
						if (res.code === 200) {
							result.push(res.data);
							customFor();
						} else if (option.showErrorToast) {
							uni.showToast({
								title: '上传出错了！',
								icon: 'none'
							});
						}

					}
				});
			}

		});

	},

	/*
	 *返回token
	 *@retuns {string}
	 */
	getToken() {
		let loginToken = uni.getStorageSync('loginToken') || {};

		if (loginToken) {
			return loginToken.token;
		}
		return '';

	},
	handleResult(method, options) {
		return new Promise((resolve, reject) => {
			// 是否显示loading
			const showLoading = options.showLoading || false;
			// 是否自定义错误
			const customError = options.customError || false;
			// 隐藏错误弹框
			const hideErrorToast = options.hideErrorToast || false;
			if (showLoading) {
				uni.showLoading({
					title: options.loadingTitle || '加载中...',
					mask: true
				});
			}

			uni.request({
				url: this.api_domain + options.url,
				data: options.data || {},
				method: method,
				header: {
					'conatent-type': 'application/json',
					'Authorization': this.getToken()
				},
				success(res) {
					if (showLoading) {
						uni.hideLoading();
					}
					const data = res.data;
					
					if (data.code === 200) {
						const success = options.success || false;
						if (success) {
							let title = '';
							let duration = 1000;
							let hideDelay = false;
							if (typeof success === 'string') {
								title = success;
							} else {
								title = success.title || title;
								duration = success.duration || duration;
								hideDelay = success.hideDelay || hideDelay;
							}
							if (hideDelay) {
								resolve(data);
							} else {
								utils.successToast(title, duration, () => {
									resolve(data);
								});
							}
						} else {
							resolve(data);
						}
					} else {
						if (customError) {
							reject(data);
						} else if (!hideErrorToast) {
							if (data.msg) {
								uni.showToast({
									title: data.msg || '出错了',
									icon: 'none'
								});
							}
							reject(data);
						} else {
							resolve(data);
						}
					}
				},
				fail(error) {
					if (showLoading) {
						uni.hideLoading();
					}
					if (customError) {
						reject(error.data);
					} else if (!hideErrorToast) {
						uni.showToast({
							title: '服务器请求出错了',
							icon: 'none'
						});
						reject(error.data);
					}
				}
			});
		});
	}

};

function generateOptions(type, url, data, params = {}) {
	let options = {};
	if (data) {
	    data = utils.objFilterEmpty(data);
	  }
	if (typeof url === 'object') {
		options = url;
	} else {
		switch (type) {
			case 'post':
			case 'put':
			case 'delete':
				if (params.params) {
					url = utils.setUrl(url, utils.objFilterEmpty(utils.deepCopy(params.params)));
				}
				break;
		}
		delete params.params;
		options = {
			url,
			data,
			...params
		};
	}

	return options;
}

export default http;
