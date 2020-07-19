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
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 公共样式表
import './assets/common.less'

// 引入 Element
Vue.use(ElementUI);

Vue.prototype.api = api
//  路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if(to.name=='Login'){
    next();
  }else{
    if(window.localStorage.getItem('ms_username')!=null){
      next();
    }else{
      ElementUI.Message({
        message: '您尚未登录，即将跳回登录页',
        type: 'error'
    });
      setTimeout(()=>{
        router.push({ path: '/Login'});
      },2000)
      
    }
  }
  
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
