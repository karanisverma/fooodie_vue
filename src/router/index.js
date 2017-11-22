import Vue from 'vue'
import Router from 'vue-router'
// import HomePage from '~/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      // component: HomePage
      component: () => import(/* webpackChunkName: "page-home" */ '../pages/home')
    },
    {
      path: '/menu-list',
      name: 'MenuList',
      component: () => import(/* webpackChunkName: "page-menu-list" */ '../pages/menu-list')
    },
    {
      path: '/menu-list/1',
      name: 'ProductDescription',
      component: () => import(/* webpackChunkName: "page-product-description" */ '../pages/product-description')
    }
  ]
})
