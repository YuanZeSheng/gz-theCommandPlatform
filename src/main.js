/**
 * *@2020-5
 * *@author mikeYuan 
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import api from './api/api.js'  
import filter from "./filter/filter.js"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 公共样式表
import './assets/common.less'

// 引入 Element
Vue.use(ElementUI);

Vue.prototype.api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
