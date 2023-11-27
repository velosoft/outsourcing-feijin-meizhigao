import Vue from 'vue';

// 全局方法  限制input输入框只能输入纯数字 组件中调用如（<input v-enter-number v-model="number" />）
Vue.directive('enterNumber', {
  inserted (el) {
    el.addEventListener('keypress', function (e) {
      e = e || window.event;
      const charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode;
      const re = /\d/;
      if (!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    });

    el.addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/\D/g, '');
      el.dispatchEvent(new Event('input'));
    });
  }
});

// 限制input输入框只能输入价格 组件中调用如（<input v-enter-price v-model.lazy="number" />）
Vue.directive('enterPrice', {
  inserted (input, binding) {
    const { value: fixedValue = 2 } = binding;

    input.onkeyup = function (e) {
      input.value = input.value.replace(/[^\d.]/g, '');

      input.value = input.value.replace(/^\./g, '');

      input.value = input.value.replace(/\.{2,}/g, '.');

      input.value = input.value.replace(/\.{2,}/g, '.');

      input.value = input.value.replace('.', '$#$').replace(/\./g, '')
        .replace('$#$', '.');

      input.value = input.value.replace('.', '$#$').replace(/\./g, '')
        .replace('$#$', '.');

      const reg = new RegExp(`^(-)*(\\d+)\\.(\\d{${fixedValue}}).*$`);
      input.value = input.value.replace(reg, '$1$2.$3');

      if (input.value === '00') { // 输入 000000 时，转成 0
        input.value = 0;
      }

      input.dispatchEvent(new Event('input'));
      // console.log(input.value);
      /* console.log(vNode);
        vNode.context.form.measuring = input.value; */
    };

    input.onblur = function (e) {
      input.value = input.value.replace(/[^\d.]/g, '');

      input.value = input.value.replace(/^\./g, '');

      input.value = input.value.replace(/\.{2,}/g, '.');

      input.value = input.value.replace(/\.{2,}/g, '.');

      input.value = input.value.replace('.', '$#$').replace(/\./g, '')
        .replace('$#$', '.');

      input.value = input.value.replace('.', '$#$').replace(/\./g, '')
        .replace('$#$', '.');

      const reg = new RegExp(`^(-)*(\\d+)\\.(\\d{${fixedValue}}).*$`);
      input.value = input.value.replace(reg, '$1$2.$3');

      if (input.value === '0') { // 输入0的时候转成空或者可自行调节0.00看需求
        input.value = '';
      }

      if (input.value.split('.')[1] === '') { // 把 123. 的数据转成 123
        input.value = input.value.split('.')[0];
      }

      if (input.value.substr(0, 1) === '0' && input.value.substr(1, 1) !== '.') { // 把0123456 的数据转成123456
        input.value = input.value.substr(1, input.value.length - 1);
      }

      input.dispatchEvent(new Event('input'));
    };
  }
});

/* 监听元素滚动 */
Vue.directive('scroll', {
  bind (el, binding) {
    binding.value(el);
    // 聚焦元素
    el.addEventListener('scroll', function () {
      binding.value(this);
    });
  }
});

/**
 * 滚动到底部
 * infinite-scroll-distance： 触发加载的距离阈值，单位为px
 */
Vue.directive('scrollBottom', {
  bind (el, binding) {
    // 聚焦元素
    window.addEventListener('scroll', function (e) {
      const infiniteScrollDistance = el.getAttribute('infinite-scroll-distance') || 0; // 滚动阈值
      const clientHeight = document.body.clientHeight; // 屏幕可见区域
      const scrollHeight = document.body.scrollHeight; // 文档的高度
      const scrollY = window.scrollY; // 当前滚动的位置

      if (clientHeight + scrollY >= (scrollHeight - infiniteScrollDistance)) {
        binding.value(this);
      }
    });
  }
});