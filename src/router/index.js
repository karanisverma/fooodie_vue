import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
      // component: () => import(/* webpackChunkName: "page-home" */ '@/components/home')
    }
  ]
})
