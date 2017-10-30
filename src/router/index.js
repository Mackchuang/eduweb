import Vue from 'vue'
import Router from 'vue-router'

const test = resolve => require(['../view/test.vue'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: test
    }
  ]
})
