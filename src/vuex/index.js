/*
 Vuex 最核心的管理对象：store
 */
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import home from './modules/home'
import shop from './modules/shop'
import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    shop,
    user
  }

})
