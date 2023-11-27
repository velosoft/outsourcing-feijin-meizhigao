import Vue from 'vue';
import App from './App';

import store from './store/index.js';
import env from './static/js/env.js';
import http from './static/js/http.js';
import utils from './static/js/utils.js';
import bootstrap from './core/bootstrap.js';

import uView from 'uview-ui';
Vue.use(uView);
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	}
})

import './core/globalMixin.js';
import './static/js/directives.js';
import './static/js/filters.js';
import './static/js/addGlobalCom.js';
Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.prototype.$utils = utils;

// 处理资源图片地址
Vue.prototype.$setImgUrl = (name) => {
	return `${env.domain}/imageTemp/${name}?version=1.0.0`;
};

/*---------获取平台信息-------*/
const systemInfo = uni.getSystemInfoSync();
let platform = systemInfo.uniPlatform || '', isWeb = false;
if (['web', 'h5'].includes(platform)) {
	const ua = navigator.userAgent.toLowerCase() || '';
	if (ua.indexOf('micromessenger') > -1) {
		platform = 'weixin'
	} else if (ua.indexOf('alipayclient') > -1) {
		platform = 'alipay'
	}
	isWeb = true
}
Vue.prototype.$isWeb = isWeb;
let terminal = 1; // h5
switch (platform) {
	case 'mp-weixin':
		terminal = 2; // 微信小程序
		break;
	case 'app':
		terminal = 3; // app
		break;
	// case 'weixin':
	// 	terminal = 4; // 公众号h5
	// 	break;
	// case 'alipay':
	// 	terminal = 5; // 支付宝生活号
	// 	break;
}
uni.setStorageSync('terminal', terminal);
store.dispatch('setPlatform', platform || '');
Vue.prototype.pixelRatio = 750 / systemInfo.screenWidth;
Vue.prototype.statusBarHeight = systemInfo.statusBarHeight;
Vue.prototype.language = systemInfo.language;
const modelmes = systemInfo.model;
if (modelmes.search('iPhone X') !== -1) {
	Vue.prototype.isIphoneX = true;
}

/*---------获取平台信息-end-------*/
// 前往登录
Vue.prototype.$jumpLogin = function(params) {
	const pages = getCurrentPages();
  let data = {};
  
  if(pages.length) {
    const lastPage = pages.length ? pages[pages.length - 1] : {};
    
    data = {
			...lastPage.options,
			redirect: encodeURIComponent(lastPage.$page.fullPath)
		}
  }
  
	uni.reLaunch({
		url: this.$utils.setURL('/pages/security/login/login', data)
	});
}
/*检查用户有没有登录*/
Vue.prototype.$checkLogin = function(requireAuth) {
	return new Promise(async (resolve) => {
		let userInfo = {},
			isLogin = false;
		await http.get({
			url: 'security/info',
			customError: true
		}).then((res) => {
			userInfo = res.data;
			isLogin = true;
		}).catch((res) => {
			uni.removeStorageSync('loginToken');
			requireAuth && this.$jumpLogin();
		});
		store.dispatch('setUserInfo', userInfo);
		resolve({
			isLogin,
			userInfo,
		});
	});
};
// 前往登录校验
Vue.prototype.$goToLogin = function(message) {
	return new Promise(async (resolve, reject) => {
		this.$checkLogin().then(({
			isLogin
		}) => {
			if (isLogin) {
				resolve(true)
			} else {
				uni.showModal({
					title: '提示',
					content: message || '未登录,是否前往登录？',
					success: ({
						confirm
					}) => {
						if (confirm) {
							this.$jumpLogin();
						}
					}
				})
				reject && reject(false);
			}
		})
	});
}
App.mpType = 'app';

const app = new Vue({
	...App,
	store,
  created: bootstrap
});
app.$mount();
