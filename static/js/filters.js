import Vue from 'vue';
import utils from './utils.js';


/**
 * 格式化数字
 * @params value; 数字，'12345'
 * @return value; 格式化的数字，'12,345'
 */
Vue.filter('NumberFormat', function (value) {
  return utils.NumberFormat(utils.toFixed(value));
});

/**
 * 保留小数位
 * @params v; 数值
 * @params l; 小数位数，默认1位
 * @return value; 返回一个字符串
 */
Vue.filter('toFixed', (v = 0, l = 2) => {
  return utils.toFixed(v, l);
});

/**
 * 格式化数字二，如果数值超过万就单位显示
 * @param v 数字
 * @param lenght 小数后几位，默认2 
 * @param threshold 阙值，默认10000
 * @param unit 单位 默认万
 * @returns 
 */
Vue.filter('numSetUnit', (v, length = 2, threshold = 10000, unit = '万') => {
  v = Number(v || 0);
  
  let value = 0;
  if (v >= threshold) {
    v = v / 10000;
    value = utils.toFixed(v, length) + unit;
  } else {
    value = utils.toFixed(v, length);
  }

  return value;
});

/**
 * 
 * @params time; 任意时间值
 * @params l; 时间格式
 * @return fmt; 返回一个已经格式化的字符串
 */
Vue.filter('formatDate', (time, fmt = 'yyyy-MM-dd hh:mm:ss', iszh) => {
  try {
    return utils.formatDate(time, fmt, iszh);
  } catch (e) {
    return '';
  }
});
/**
 * 给不足两位的数值补零
 * @params v; 数值
 * @return str; 返回一个以及格式化的字符串
 */
Vue.filter('repairZero', (v) => {
  const value = v.toString();

  return value[1] ? value : 0 + value;
});

/**
 * 字符串去空格
 * @params str; 字符串
 * @return trimStr; 返回一个去掉两边空格的字符串
 */
Vue.filter('trim', (str) => {
  let trimStr = '';

  trimStr = str.replace(/\s/g, '');

  return trimStr;
});

/**
 * 加密字符串
 * @params v; 数值或者字符串
 * @params l; 中间位数
 * @params s; 替换符号
 * @return str; 返回一个以及加密的字符串
 */
Vue.filter('encryptionStr', (v, l = 5, s = '*') => {
  try {
    v = v.toString().split('');
    const start = Math.floor(v.length / 2) - Math.floor(5 / 2);

    for (let i = start; i < (start + 5); i++) {
      v[i] = s;
    }

    return v.join('');
  } catch (err) {
    throw new Error(err);
  }
});

/**
 * 转Unit
 * @params v; 数值
 * @params unit; 单位
 * @params system; 进制
 * @params l; 小数位数，默认1位
 * @return value; 返回一个字符串
 */
Vue.filter('toUnit', (v = 0, util = 'k', system = 1000, l = 1) => {
  let value = v * 1;
  if (value) {
    if (value >= system) {
      value = value / system;
      const temp = Math.pow(10, l);
      value = (parseInt(value * temp) / temp).toFixed(l);
      value += util;
    }
  } else {
    value = 0;
  }
  return value;
});

// 文件大小格式化
Vue.filter('fileSize', function(fileSize) {
	var unitStr = "B";
	if (fileSize >= 1024 * 1024) {
		fileSize = Math.round((fileSize / (1024 * 1024)) * 10) / 10;
		unitStr = "M";
	} else if (fileSize >= 1024) {
		fileSize = Math.round(fileSize / 1024);
		unitStr = "KB";
	}
	fileSize += unitStr;
	return fileSize
});