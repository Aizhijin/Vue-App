import Vue from 'vue'
import App from './App'
import router from './router/index'
import Header from './components/Header/Header'
import Star from './components/Star/Star'
import store from './vuex'
import './mock/mockServer'

Vue.component('Header', Header)
Vue.component('Star', Star)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router, // 配置路由器
  store // 配置vuex的store
})
