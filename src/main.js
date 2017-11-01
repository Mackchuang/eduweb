// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import $http from './tool/http'
import store from '../src/store/store'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$http=$http;
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount("#app");
