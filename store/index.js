import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  platform: '', // 平台 h5, web, weixin, mp-weixin, alipay, mp-alipay, app
  userInfo: {}, // 用户信息
  animateDotPosition: null,
};


const getters = {
  /* 平台 */
  platform() {
    return state.platform;
  },
  /* 用户信息 */
  userInfo() {
    return state.userInfo;
  },
  animateDotPosition() {
    return state.animateDotPosition;
  },
};
// dispatch调用
const actions = {
  /* 平台 */
  setPlatform({
    commit
  }, params) {
    commit('setPlatform', params);
  },
  /* 用户信息 */
  setUserInfo({
    commit
  }, params) {
    commit('setUserInfo', params);
  },
  setAnimateDotPosition({
    commit
  }, params) {
    const {
      changedTouches
    } = params
    // console.log(changedTouches);
    if (changedTouches.length) {
      const {
        clientX: left,
        clientY: top
      } = changedTouches[0]
      commit('setAnimateDotPosition', {
        left: left,
        top: top
      });
    }
  },
};
// commit调用
const mutations = {
  /* 平台 */
  setPlatform(state, params) {
    state.platform = params;
  },
  /* 用户信息 */
  setUserInfo(state, params) {
    state.userInfo = params;
  },
  setAnimateDotPosition(state, params) {
    state.animateDotPosition = params;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;