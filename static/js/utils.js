
/* 格式化时间*/
let formatDate = function(time, fmt, iszh) {
  time = time || '';
  if (typeof time === 'string') {
    time = time.replace(/-/g, '/');
  }
  if (!time) {
    return '';
  }
  let date = new Date(time);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  if (iszh) {
    const nowDate = new Date();
    const nowDay = nowDate.getDate();
    if (date > nowDate.setDate(nowDay) && date < nowDate.setDate(nowDay + 1)) {
      fmt = `今天 ${fmt.split(' ')[1] || ''}`;
    }
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }

  return fmt;
};

function padLeftZero(str) {
  str += '';

  return ('00' + str).substr(str.length);
}

// 视频时间
function duration(value) {
  let fmt = 'hh:mm:ss';
  let obj = {
    'h+': Math.floor((value / 1000 / 60 / 60)),
    'm+': Math.floor((value / 1000 / 60) % 60),
    's+': Math.floor(value / 1000 % 60)
  };

  for (let key in obj) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[key] : ('00' + obj[key]).substr(('' + obj[key])
        .length));
    }
  }
  return fmt;
}

function observe(obj, key, watchFun, deep, page) {
  let val = obj[key];
  if (val !== null && typeof val === 'object' && deep) {
    Object.keys(val).forEach((item) => {
      observe(val, item, watchFun, deep, page);
    });
  }
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    set: function(value) {
      watchFun.call(page, value, val);
      val = value;
      if (deep) {
        observe(obj, key, watchFun, deep, page);
      }
    },
    get: function() {
      return val;
    }
  });
}

function setWatcher(page) {

  let data = page.data;
  let watch = page.watch;

  Object.keys(watch).forEach((item) => {

    let targetData = data;
    let keys = item.split('.');
    for (let i = 0; i < keys.length - 1; i++) {
      targetData = targetData[keys[i]];
    }
    let targetKey = keys[keys.length - 1];
    let watchFun = watch[item].handler || watch[item];
    let deep = watch[item].deep;
    observe(targetData, targetKey, watchFun, deep, page);
  });
}

/* 轻提示*/
const toast = (...rest) => {
  let title, duration, onClose;
  if (rest[0] instanceof Object) {
    const obj = rest[0];
    title = obj.title || '提示';
    duration = obj.duration || 1500;
    onClose = obj.onClose;
  } else {
    title = rest[0] || '提示';
    duration = rest[1] || 1500;
    onClose = rest[2];
  }
  uni.showToast({
    icon: 'none',
    title,
    duration
  });

  if (onClose) {
    setTimeout(() => {
      onClose();
    }, duration);
  }
};

/* 成功提示*/
const successToast = (...rest) => {
  let title, duration, onClose;
  if (rest[0] instanceof Object) {
    const obj = rest[0];
    title = obj.title || '成功';
    duration = obj.duration || 1500;
    onClose = obj.onClose;
  } else {
    title = rest[0] || '成功';
    duration = rest[1] || 1500;
    onClose = rest[2];
  }
  uni.showToast({
    icon: 'success',
    title,
    duration
  });
  if (onClose) {
    setTimeout(() => {
      onClose();
    }, duration);
  }
};

/* 加载示*/
const loadingToast = (title = '加载中...') => {
  uni.showLoading({
    title,
    mask: true
  });
};

const clearLoadingToast = () => {
  uni.hideLoading();
};

/* 深克隆对象*/
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

/* 验证手机 */
const verifyPhone = (mobile) => {
  if (!mobile) {
    return false;
  }

  if (!/^1[3-9]\d{9}$/.test(mobile)) {
    return false;
  }

  return true;
};

/* 验证手机号格式*/
const verifyMobile = (mobile) => {

  if (mobile.length !== 11) {
    toast('请输入11位手机号码');

    return false;
  }

  if (!/^1[3-9]\d{9}$/.test(mobile)) {
    toast('该手机号码不正确，请重新输入');
    return false;
  }

  return true;

};

/* 验证是否为汉字*/
const verifyText = (text) => {
  let str = /[\u4E00-\u9FA5]/g;
  if (str.test(text)) {
    return false;
  }
  return true;
};

/* 邮箱验证*/
const verifyEmail = (email) => {
  if (!email) {
    toast('邮箱不可为空!');

    return false;
  }

  if (!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/.test(email)) {
    toast('邮箱格式不正确，请重新输入');

    return false;
  }

  return true;
};

/* 非空验证*/
const verifyEmpty = (v, message) => {
  if (typeof(v) === 'string') {
    v = v.replace(/\s*/g, '');
  }
  if (!v) {
    toast(message);

    return false;
  }

  return true;
};

/* 验证长度是否在给定范围内符合要求*/
const verifyLengeRange = (v, message, min, max) => {
  min = min || v.length;
  max = max || v.length;

  if (v.length < min || v.length > max) {
    toast(message);

    return false;
  }

  return true;
};

// 加
const add = (a, b) => {
  let c, d, e;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
};
// 减
const sub = (a, b) => {
  let c, d, e;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
};
// 乘
const mul = (a, b) => {
  let c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split('.')[1].length;
  } catch (f) {
    c += 0
  }
  try {
    c += e.split('.')[1].length;
  } catch (f) {
    c += 0
  }
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c);
};
// 除
const div = (a, b) => {
  let c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split('.')[1].length;
  } catch (g) {
    e = 0
  }
  try {
    f = b.toString().split('.')[1].length;
  } catch (g) {
    f = 0
  }
  return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), mul(c / d, Math
    .pow(10,
      f - e));
};

/* 格式化：小数点 */
const toFixed = (v, l = 2) => {

  let value = v * 1;
  /* const temp = Math.pow(10, l);
  value = (parseInt(value * temp) / temp).toFixed(l); */
  // value = value.toFixed(l);
  // if (value) {
  //   let util = '';
  //   if (value > 1000) {
  //     value = value / 1000;
  //     util = 'k';
  //   }
  //   const temp = Math.pow(10, l);
  //   value = (parseInt(value * temp) / temp).toFixed(l) + util;
  // } else {
  //   const temp = Math.pow(10, l);
  //   value = (parseInt(value * temp) / temp).toFixed(l);
  // }

  value = parseFloat(value);
  return (Math.round((value + Number.EPSILON) * Math.pow(10, l)) / Math.pow(10, l)).toFixed(l);

};

/* 获取小数点前后的数字 */
const splitNumber = (v) => {
  let nv = '0.00';

  if (v) {
    nv = toFixed(v);
  }

  return nv.split('.');
};

const NumberFormat = (v, decimals = 2) => {
  if (!v) {
    return '0';
  }
  const intPartFormat = numberFormat(v, decimals);

  return intPartFormat;
}

function numberFormat(number, decimals, decPoint, thousandsSep, roundtag) {
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
   * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  roundtag = roundtag || 'round'; // "ceil","floor","round"
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  var s = '';
  var toFixedFix = function(n, prec) {
    var k = Math.pow(10, prec);

    return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
  };
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/* 分割链接字符串 */
const searchURL = (v) => { // 获取路径参数
  let obj = {},
    data = v,
    arr = [];
  if (data) {
    arr = data.substr(1).split('&');
    for (let i = 0; i < arr.length; i++) {
      let arr1 = arr[i].split('=');
      obj[arr1[0]] = decodeURIComponent(arr1[1]);
    }
    return obj;
  }
  return '';
};
const setURL = (url, obj) => { // 设置路径参数
  let arr = [];
  for (let key in obj) {
    arr.push(key + '=' + obj[key]);
  }

  return url + '?' + arr.join('&');
};

/* 个转万 */
let toTenThousand = (v, l) => {
  if (v >= 10000) {
    let value = v / 10000;
    let l = l === 0 ? 0 : (l || 2);
    let temp = Math.pow(10, l);
    value = (parseInt(value * temp) / temp).toFixed(l) + '万';
    return value;
  }
  return v;

};

/*
 * 通过年和月返回这个月的天数
 * params:year年，month月
 * return day   天数
 * */
const monthToDay = (year, month) => {
  let day = 0;

  /* 将参数转换为number*/
  month *= 1;
  year *= 1;

  switch (month * 1) {
    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        day = 29;
      } else {
        day = 28;
      }
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
  }

  return day;
};

/* 预览图片 */
const previewImage = function(urls, current = 0) {
  uni.previewImage({
    current,
    urls
  });
};
const previewFile = (src) => {
  if (src) {
    if (RegExp("(" + ['bmp', 'jpg', 'jpeg', 'png', 'gif', 'svg'].join("|") + ")", "i").test(src)) {
      previewImage([src]);
    } else {
      // #ifdef H5
      return toast('H5无法支持该文件查看，请前往其他端查看');
      // #endif
      loadingToast('加载中...')
      uni.downloadFile({
        url: src,
        success: function(res) {
          var filePath = res.tempFilePath
          //预览简历
          uni.openDocument({
            filePath: filePath,
            showMenu: true,
            success: function(res) {
              clearLoadingToast();
            },
            fail: function(res) {
              toast('文件预览失败！')
            },
          })
        },
        fail: function(res) {
          toast('文件预览失败！')
        }
      })
    }
  }
}
const handleCopy = (data) => {
  uni.setClipboardData({
    data,
    success: () => {
      successToast('复制成功！');
    },
    fail: () => {
      toast('操作失败');
    }
  });
}
/* 初始数据,用户一些需要触底加载数据 */
const initPageData = (params) => ({
  list: [],
  loading: false,
  finished: false,
  pageNo: 1,
  pageSize: 20,
  totalCount: '',
  ...params
});
/* 处理分页数据 */
const handlePageData = (page, requestPage) => {
  const {
    result,
    nextPage,
    totalCount,
    isHasNext,
    pageNo
  } = requestPage;
  page.list.push(...result);
  page.pageNo = nextPage * 1 || 1;
  page.finished = !isHasNext;
  page.loading = false;
  page.totalCount = totalCount * 1 || 0;
  return page;
};
// 拨打电话
const makePhoneCall = function(phone) {
  console.log(phone);
  uni.makePhoneCall({
    phoneNumber: phone,
    fail: function() {
      toast('拨打失败');
    }
  });
};
// 修改上一个页面数据
const changePrevPage = function(obj) {
  // 微信存在bug
  let pages = getCurrentPages(),
    prevPage = null;
  if (pages.length > 1) {
    prevPage = pages[pages.length - 2];
  }
  if (prevPage) {
    // #ifdef H5
    prevPage._data = {
      ...prevPage._data,
      ...obj
    };
    // #endif
    // #ifdef APP-PLUS || MP-WEIXIN
    prevPage.setData(obj);
    // #endif
  }
};

/* 设置url */
const setUrl = (url, obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(key + '=' + obj[key]);
  }
  return url + '?' + arr.join('&');
};

/* 解析scene */
const parseScene = (scene) => {
  let obj = {};

  let arr1 = scene.split('&');

  for (let i = 0; i < arr1.length; i++) {
    let arr2 = arr1[i].split('=');
    obj[arr2[0]] = arr2[1];
  }

  return obj;
};

/* 计算两点的距离*/
const getDistance = (lat1, lng1, lat2, lng2) => {

  lat1 = lat1 || 0;

  lng1 = lng1 || 0;

  lat2 = lat2 || 0;

  lng2 = lng2 || 0;

  let rad1 = lat1 * Math.PI / 180.0;

  let rad2 = lat2 * Math.PI / 180.0;

  let a = rad1 - rad2;

  let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

  let r = 6378137;

  return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(
    Math.sin(
      b / 2), 2)))).toFixed(0);

};
// 去除对象空
const objFilterEmpty = function(obj) {
  for (let key in obj) {
    const item = obj[key];
    if (!item && typeof item !== 'number' && typeof item !== 'boolean') {
      delete obj[key];
    }
  }
  return obj;
};

const chooseFile = (params) => {
  new Promise((resolve, reject) => {
    // #ifdef MP
    wx.chooseMessageFile({
      ...params,
      success: (res) => {
        res.tempFilePaths = res.tempFiles.map(item => item.path);
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    })
    // #endif
    // #ifdef H5
    uni.chooseFile({
      ...params,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
    // #endif
  })

}

module.exports = {
  formatDate: formatDate,
  duration: duration,
  setWatcher: setWatcher,
  loadingToast,
  clearLoadingToast,
  toast,
  successToast,
  deepCopy,
  verifyPhone,
  verifyMobile,
  verifyText,
  verifyEmpty,
  verifyEmail,
  verifyLengeRange,
  add,
  sub,
  mul,
  div,
  toFixed,
  NumberFormat,
  splitNumber,
  searchURL,
  setURL,
  toTenThousand,
  monthToDay,
  previewImage,
  previewFile,
  handleCopy,
  initPageData,
  handlePageData,
  makePhoneCall,
  changePrevPage,
  setUrl,
  parseScene,
  getDistance,
  objFilterEmpty,
  chooseFile
};